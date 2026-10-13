const fs=require('node:fs');
const path=require('node:path');
const appid=process.argv[2];
if(!/^wx[0-9a-f]{16}$/i.test(appid||'')){console.error('用法：node scripts/configure-appid.cjs wx开头的真实小程序AppID');process.exit(1);}
const file=path.resolve(__dirname,'../project.config.json');
const config=JSON.parse(fs.readFileSync(file,'utf8'));config.appid=appid;
fs.writeFileSync(file,JSON.stringify(config,null,2)+'\n');
console.log('AppID已写入工程。请使用有此小程序开发权限的微信账号导入。');
