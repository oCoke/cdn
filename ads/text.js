function AdsText(tag){
var html = `
<div class="ads-text-yfun">
  <a href="https://google.com" rel="nofollow">来自谷歌的广告 — 谷歌搜索</a>
</div>
`;
let tags = document.querySelectorAll(tag);
let i = 0;
if (i<tags.length){
  tags[i].innerHTML=html;
  i++;
}
}
