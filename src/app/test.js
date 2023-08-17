import { config } from 'dotenv'
//Reads from system variables - JAVA_HOME yet: /Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home
console.log('Reads from system variables - JAVA_HOME yet:', process.env.JAVA_HOME);
// No value for NODE_ENV yet: undefined
console.log('No value for NODE_ENV yet:', process.env.NODE_ENV);
console.log('No value for FOO yet:', process.env.FOO);

if (process.env.JAVA_HOME.length>0) {
    config(); // or use option '-r dotenv/config' - for runtime
}
// Now the value for FOO is: 123
console.log('Now the value for FOO is:', process.env.FOO);