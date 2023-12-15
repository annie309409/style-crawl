const axios =  require('axios');
const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({input: process.stdin,output: process.stdout,});

//비동기 입출력 지원 함수
async function main(){
    rl.question('사이트의 주소를 입력해주세요 (Please enter the URL)\n',async (url)=>{
        // 비동기 I/O지원
        const html = await axios.get(url).catch(function(e){
            console.log('사이트를 찾을 수 없습니다. Site not found');
        });
        let final = '';
        const dts = html.data.split('>');
        let sitename  = url.slice(url.indexOf('www.')+4);
        sitename = sitename.slice(0,sitename.indexOf('.'));
        let fnDt = dts.filter(f=> f.includes('<link') && f.includes('style')).map(m=>`${m.slice(m.indexOf('href="')+6,m.indexOf('.css"')+4)}\n`).filter(f=>f.trim()!='');
        let addDt = dts.filter(f=> f.includes('iframe') && f.includes(sitename)).map(m=> m.slice(m.indexOf('http'))).map(m=>`${m.slice(0,m.indexOf('"'))}\n`).filter(f=>f.trim()!='');
        fnDt.length>0?(
            final += `${url}스타일 목록(Lists of styles follow)\n`,
            final += '-'.repeat(100)+'\n',
            final += fnDt.join('').toString(),
            final += '\n\n'
            ):'';
        addDt.length>0?(
            final +=`${url}추천검색 리스트 (Recommanded:Search the following lists for rigt ones)\n`,
            final += '-'.repeat(100)+'\n',
            final +=addDt.join('').toString(),
            final += '\n\n'
        ):'';

        rl.close();
        fs.appendFileSync('./style-results.txt',await final,(e,dt)=>{ 
            !e ? console.log(`./style-results.txt에 스타일목록이 추가되었습니다.`):console.log('파일을 덮어쓰는데 문제가 발생했습니다.') });
    });
}
main();