var e=require("axios"),t=function(){};t.prototype.store=function(t,r){void 0===r&&(r={});try{return Promise.resolve(e.post("/vapor/signed-storage-url",{bucket:r.bucket||"",content_type:r.contentType||t.type,expires:r.expires||"",visibility:r.visibility||""},{baseURL:r.baseURL||null,headers:r.headers||{}})).then(function(o){var n=o.data.headers;return"Host"in n&&delete n.Host,void 0===r.progress&&(r.progress=function(){}),Promise.resolve(e.put(o.data.url,t,{cancelToken:r.cancelToken||"",headers:n,onUploadProgress:function(e){r.progress(e.loaded/e.total)}})).then(function(){return o.data.extension=t.name.split(".").pop(),o.data})})}catch(e){return Promise.reject(e)}},module.exports=new t;
//# sourceMappingURL=laravel-vapor.js.map
