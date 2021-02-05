function AdsText(tag){
var html = `
<div class="ads-text-yfun">
  <a href="https://google.com" rel="nofollow" target="_blank">来自谷歌的广告 — 谷歌搜索</a> · 
  <a href="https://tools.shengmingyun.top" target="_blank">圣明云收录网</a>
</div>
<div class="ads-img-yfun">
  <a href="https://tools.shengmingyun.top" target="_blank">
    <img src="https://7.dusays.com/2021/02/05/812b772bf3ac6.png" srcset="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAAaADAAQAAAABAAAAAQAAAAD5Ip3+AAAADUlEQVQIHWM4c+bMfwAIMANkxSThkAAAAABJRU5ErkJggg==" data-srcset="https://7.dusays.com/2021/02/05/812b772bf3ac6.png" class="lazyload-source">
  </a>
</div>
`;
//let tags = document.querySelector(tag);
$(tag).html(html);
}
