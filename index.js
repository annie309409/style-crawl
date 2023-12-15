const axios =  require('axios');
const readline = require('readline');
const rl = readline.createInterface({input: process.stdin,output: process.stdout,});

//비동기 입출력 지원 함수
async function main(){
    rl.question('사이트의 주소를 입력해주세요 (Please enter the URL)\n',async (url)=>{
        // 비동기 I/O지원
        const html = await axios.get(url).catch(function(e){
            console.log('사이트를 찾을 수 없습니다. Site not found');
        });
        const dts = html.data.split('>');
        let sitename  = url.slice(url.indexOf('www.')+4);
        sitename = sitename.slice(0,sitename.indexOf('.'));
        let fnDt = dts.filter(f=> f.includes('<link') && f.includes('style')).map(m=>`${m.slice(m.indexOf('href="')+6,m.indexOf('.css"')+4)}\n`).filter(f=>f.trim()!='');
        let addDt = dts.filter(f=> f.includes('iframe') && f.includes(sitename)).map(m=> m.slice(m.indexOf('http'))).map(m=>`${m.slice(0,m.indexOf('"'))}\n`).filter(f=>f.trim()!='');
        fnDt.length>0?(
            console.log('해당사이트의 스타일목록입니다. Lists of styles follow'),
            console.log('oO0OoO0OoO0Oo'.repeat(10)),
            console.log(fnDt.join('').toString()),
            console.log('')
            ):'';
            addDt.length>0?(
                console.log('아래의 주소들을 추가로 서칭하면 더 정확합니다. Recommanded:Search the following lists for rigt ones'),
                console.log('oO0OoO0OoO0Oo'.repeat(10)),
            console.log(addDt.join('').toString())
        ):'';
        rl.close();
    });
}
main();