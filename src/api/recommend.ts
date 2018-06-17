import jsonp from '@/assets/js/jsonp';
import { commonParams, options } from './config';

const getRecommend = (): Promise<any> => {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1,
  });
  return jsonp(url, data, options);
  // return new Promise(resolve => 'a');
};

export default {
  getRecommend,
};
