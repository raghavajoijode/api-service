import { config } from 'dotenv'

console.log('No value for JAVA_HOME yet:', process.env.JAVA_HOME);
console.log('No value for NODE_ENV yet:', process.env.NODE_ENV);
console.log('No value for FOO yet:', process.env.FOO);

if (process.env.JAVA_HOME.length>0) {
    config();
}

console.log('Now the value for FOO is:', process.env.FOO);