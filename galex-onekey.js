// ==UserScript==
// @name        New script galxe.com
// @namespace   Violentmonkey Scripts
// @match       https://app.galxe.com/quest/*
// @grant       none
// @version     1.0
// @author      -
// @description 2024/11/1 14:22:30
// @downloadURL  https://raw.githubusercontent.com/liang3472/monkey-scripts/refs/heads/main/galex-onekey.js
// @updateURL    https://raw.githubusercontent.com/liang3472/monkey-scripts/refs/heads/main/galex-onekey.js
// ==/UserScript==
console.log('✅ 脚本加载完成');
const checkExist = setInterval(() => {
  console.log('⏳ 等待出现元素ing...')
  let target = document.evaluate("/html/body/div[1]/main/div/div/div[2]/div/div[2]/div[2]/div", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (target) {
    clearInterval(checkExist);
    let button = document.createElement('button');
    button.style.cssText = "background: blue; color: white; width: 200px; height: 44px; margin-left: 24px; border-radius: 8px";
    button.innerHTML = '一键完成';
    button.addEventListener('click', async function () {
      const taskKeywords = [
        'Follow',
        'Visit',
        'Like',
        'Retweet',
      ];
      const elementsToClick = Array.from(document.querySelectorAll('p')).filter(p => taskKeywords.some(keyword => p.textContent.includes(keyword)));
      for (let element of elementsToClick) {
        const event = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
        element.dispatchEvent(event);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    });
    target.appendChild(button);
  }
}, 100);
