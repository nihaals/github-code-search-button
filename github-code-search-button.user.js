// ==UserScript==
// @name         GitHub Code Search Button
// @version      1.0.1
// @description  Adds a button that takes you to GitHub Code Search for the current repo
// @author       Nihaal Sangha
// @run-at       document-end
// @updateURL    https://raw.githubusercontent.com/nihaals/github-code-search-button/main/github-code-search-button.user.js
// @downloadURL  https://raw.githubusercontent.com/nihaals/github-code-search-button/main/github-code-search-button.user.js
// @supportURL   https://github.com/nihaals/github-code-search-button/issues
// @include      https://github.com/*/*
// ==/UserScript==

// MIT License

// Copyright (c) Nihaal Sangha

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

(() => {
  let btns = document.querySelector(".pagehead-actions.flex-shrink-0.d-none.d-md-inline");
  if (!btns) return;

  // Get owner and repo
  const re = /https:\/\/github\.com\/(?<owner>[^/\n]+)\/(?<repo>[^/\n]+)/;
  const match = re.exec(window.location.href);
  if (!match) return;
  const { owner, repo } = match.groups;

  const li = document.createElement("li");
  {
    const btn = document.createElement("a");
    btn.classList.add("btn", "btn-sm");
    btn.href = `https://cs.github.com/${owner}/${repo}`;
    btn.title = "Open GitHub Code Search";
    btn["aria-label"] = btn.title;
    btn.textContent = "CS";
    li.appendChild(btn);
  }

  btns.insertBefore(li, btns.firstChild);
})();
