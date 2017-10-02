declare const require: any;

const requireTest = require.context('./', true, /.vue$/);
requireTest.keys().forEach(requireTest);