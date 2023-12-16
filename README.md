# scss-cleans
- [Korean Guid](#guidkorean)
- [English Guid](#guidenglish)


## Guid(Korean)
입력한 사이트를 크롤링하여 스타일만 반환해주는 패키지입니다.

### 설치방법
아래의 명령어통해 패키지를 설치해주세요.

```
npm i style-crawl
```

### 명령어 설정
packagae.json에 아래의 script를 설정해주세요.
```json
  "scripts": {
    "style-crawl": "node ./node_modules/style-crawl/index.js"
  }
```
### 패키지 실행
아래의 명령어를 통해 패키지를 실행시킵니다.
```
npm run style-crawl
```


### 읽을 파일 설정
다음과 같은 내용이 콘솔창에 나오면,
```text
path> 사이트의 주소를 입력해주세요 (Please enter the URL)
```

스타일리스트를 검색할 사이트 주소를 입력해주세요.

```
path> https://www.npmjs.com/package/style-crawl
```


### 결과파일 확인
패키지가 성공적으로 작동하면 아래와 같은 결과 콘솔을 볼 수 있습니다.

```
╭➳♡⃘♡⃘♡⃘♡⃘♡⃘♡⃘♡⃘♡⃘♡┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
 ./style-results.txt 에 검색결과가 추가되었습니다.  
 　　　　　　　　　　　　　　　
 Style lists have been added to ./style-results.txt
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈➳♡⃘♡⃘♡⃘♡⃘♡⃘♡⃘♡⃘♡⃘♡╯  
```


그 후에 아래와 같은이름을 가진 파일이 생성될것입니다.
'style-results.txt'.

파일 결과의 내용은 다음과 같은 포맷으로 생성됩니다.
```
https://www.npmjs.com/package/style-crawl스타일 목록(Lists of styles follow)
1. ...

https://www.npmjs.com/package/style-crawl추천검색 리스트 (Recommanded:Search the following lists for rigt ones)
1. ...
```

스타일목록은 해당 페이지에서 불러오는 스타일 파일 리스트를의미합니다.
추천 검색리스트는 해당 페이지에서 불러오는 iframe의 주소로, 해당 페이지에 영향을 주는 스타일을 가지고 있을 확률이 있지만, 스타일 리스트를 가져올 수 없어 추가적으로 스타일 검색이 필요한 리스트를 의미합니다.


해당 패키지는 웹사이트를 크롤링하는것을 기본베이스로 만들었습니다.
만약 스타일 리스트가 없거나 사이트 크롤링이 막혀있다면, 결과가 나오지 않을 수 있습니다.

해당 패키지는 단순 크롤링으로, 로그인 및 특정 인증을 통한 페이지는 결과가 나오지 않을 수 있습니다.

-Annie Park-




## Guid(English)
Pacakge to find style links from the website you want


### Install
Type the following sentence to install the package.

```
npm i style-crawl
```

### Set package.json
Open the 'package.json' file and configure the scripts as follows
```json
  "scripts": {
    "style-crawl": "node ./node_modules/style-crawl/index.js"
  }
```
### Run package
Type the following sentence to run the package.
```
npm run style-crawl
```

### Adding URL for Package Execution 
When the console provides the following instruction,
```text
path> 사이트의 주소를 입력해주세요 (Please enter the URL)
```

To find lists of style, please type the URL of the site where you want to know the style lists. 

```
path> https://www.npmjs.com/package/style-crawl
```


### 결과파일 확인
When it completes successfully, you will receive the following log message.


```
╭➳♡⃘♡⃘♡⃘♡⃘♡⃘♡⃘♡⃘♡⃘♡┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈╮
 ./style-results.txt 에 검색결과가 추가되었습니다.  
 　　　　　　　　　　　　　　　
 Style lists have been added to ./style-results.txt
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈➳♡⃘♡⃘♡⃘♡⃘♡⃘♡⃘♡⃘♡⃘♡╯  
```


When the process runs succesfully, a new file named 'style-resuelt.txt' wii be created.


The result file will be created in the following foramts.
```
https://www.npmjs.com/package/style-crawl스타일 목록(Lists of styles follow)
1. ...

https://www.npmjs.com/package/style-crawl추천검색 리스트 (Recommanded:Search the following lists for rigt ones)
1. ...
```

Lists of styles follow  means Lists of css style

The term 'Recommend' referes to lists of URLs that an iframe call within this webpage. Some styles are curreuntly effective on the site but can't be crawled at the momone, so it's recommanded to conduct futhur searches.

This package operated baesed on website crawling. 
If there are no style lists available or if the site detects and rejects web crawling, the result wii be not returned.

This package simply crawls websites, so if the page requires a certificated or logins are necessary, the result will be not returned.

-Annie Park-