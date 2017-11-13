import {
	parseParam
} from './utils'

let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled';;

let getParam = parseParam(url);
