/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import {
  extend
} from 'umi-request';
import {
  PUBLICURL,
  PREAPI
} from "../service/config"
import {
  notification
} from 'antd';
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/**
 * 异常处理程序
 */

const errorHandler = error => {
  const {
    response
  } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const {
      status,
      url
    } = response;
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }
};
/**
 * 配置request请求时的默认参数
 */

const request = extend({
  maxCache: 10, // 最大缓存个数, 超出后会自动清掉按时间最开始的一个.
  prefix: PUBLICURL + PREAPI, // prefix
  headers: {
    // 统一的headers
  },
  params: {
    // 每个请求都要带上的query参数
  },
  errorHandler,
  // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

// response拦截器, 处理response
request.interceptors.response.use((response) => {
  const data = response.clone().json();

  return response;
});


// ------------------------------------------------------

function Ajax(type, url, data, success, failed) {
  // 创建ajax对象
  var xhr = null;
  var prefix = PUBLICURL + PREAPI; // prefix
  url = prefix + url;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    // xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }

  var type = type.toUpperCase();
  // 用于清除缓存
  var random = Math.random();

  if (typeof data == 'object') {
    var str = '';
    for (var key in data) {
      str += key + '=' + data[key] + '&';
    }
    data = str.replace(/&$/, '');
  }

  if (type == 'GET') {
    if (data) {
      xhr.open('GET', url + '?' + data, true);
    } else {
      xhr.open('GET', url, true);
    }
    xhr.send();

  } else if (type == 'POST') {
    xhr.open('POST', url, true);
    // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
  }

  // 处理返回数据
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        success(JSON.parse(xhr.responseText));
      } else {
        if (failed) {
          failed(xhr.status);
        }
      }
    }
  }
}

// // 测试调用
// var sendData = {
//   name: 'asher',
//   sex: 'male'
// };
// Ajax('get', 'data/data.html', sendData, function (data) {
//   console.log(data);
// }, function (error) {
//   console.log(error);
// });

// export default request;

export default Ajax;
