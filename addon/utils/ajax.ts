import * as jQuery from 'jquery';

const ajax: typeof jQuery.ajax =
  typeof FastBoot === 'undefined' ? jQuery.ajax : FastBoot.require('najax');

export default ajax;
