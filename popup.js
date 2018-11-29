// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let copyButton = document.getElementById('copyButton');
let chrmVerSpan = document.getElementById('chrmVer');
let osVerSpan = document.getElementById('osVer');

getVersion();

copyButton.onclick = function (element){
  getVersion();
  copyToClipboard("OS is " + osVerSpan.textContent + ".\r\n Chrome version is " + chrmVerSpan.textContent + ".");
}

function getVersion () {
    let chromeVersion = /Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1];
    let osVerions = window.navigator.userAgent
    let OSName = ""

    if (osVerions.indexOf("Windows NT 10.0")!= -1) 
      OSName="Windows 10";
    if (osVerions.indexOf("Windows NT 6.2") != -1) 
      OSName="Windows 8";
    if (osVerions.indexOf("Windows NT 6.1") != -1) 
      OSName="Windows 7";
    if (osVerions.indexOf("Windows NT 6.0") != -1) 
      OSName="Windows Vista";
    if (osVerions.indexOf("Windows NT 5.1") != -1) 
      OSName="Windows XP";
    if (osVerions.indexOf("Mac") != -1) 
      OSName="MacOS";
    if (osVerions.indexOf("X11") != -1) 
      OSName="UNIX";
    if (osVerions.indexOf("Linux")!= -1) 
      OSName="Linux Ubuntu";

    if((osVerions.indexOf("x86_64") != -1) || (osVerions.indexOf("x64") != -1))
      OSName+= " 64 bit"
    else if ((osVerions.indexOf("x86_32") != -1) || (osVerions.indexOf("x32") != -1))
      OSName+= " 32 bit"
    
    chrmVerSpan.textContent = chromeVersion;
    osVerSpan.textContent = OSName;
};

function copyToClipboard (text) {
  const input = document.createElement('input');
  input.style.position = 'fixed';
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
};

