(this["webpackJsonpikm-app"]=this["webpackJsonpikm-app"]||[]).push([[0],{15:function(a,n,e){},16:function(a,n,e){},21:function(a,n,e){},23:function(a,n,e){"use strict";e.r(n);var t=e(0),o=e.n(t),i=e(4),s=e.n(i),r=(e(15),e.p,e(16),e(3)),c=e(5),d=e(10),u=e(2),l={datas:[],datas_detail:[],question:[{q:"Jenis Kelamin",o:[{o:"Laki - laki"},{o:"Perempuan"}]},{q:"Usia",o:[{o:"Dibawah 18 tahun"},{o:"18 - 24 tahun"},{o:"25 - 34 tahun"},{o:"35 - 59 tahun"},{o:"60 tahun keatas"}]},{q:"Pendidikan Terakhir",o:[{o:"SD"},{o:"SMP"},{o:"SMA / SMK"},{o:"Diploma"},{o:"Sarjana (S1)"},{o:"Pasca Sarjana (S2 / S3)"}]},{q:"Pekerjaan",o:[{o:"PNS"},{o:"TNI / POLRI"},{o:"Karyawan BUMN"},{o:"Karyawan Swasta"},{o:"Wirausaha"},{o:"Pelajar / Mahasiswa"},{o:"Belum Bekerja"},{o:"Lain - lain"}]},{q:"Jenis Layanan",o:[{o:"DPMTK"},{o:"DUKCAPIL"},{o:"KEMENAG"},{o:"BPN"},{o:"BPJS KESEHATAN"},{o:"BPJS KETENAGAKERJAAN"},{o:"KEJAKSAAN"},{o:"PENGADILAN NEGERI"},{o:"KPP PRATAMA"},{o:"SAMSAT"},{o:"POLRES SINGKAWANG"},{o:"IMIGRASI"},{o:"BKD"},{o:"BANK KALBAR"},{o:"BRI"}]},{q:"Bagaimana pendapat saudara tentang kesesuaian persyaratan pelayanan dengan jenis pelayanannya?",o:[{o:"Tidak Cepat"},{o:"Kurang Cepat"},{o:"Cepat"},{o:"Sangat Cepat"}]},{q:"Bagaimana pendapat saudara tentang kewajaran biaya / tarif dalam pelayanan (Khusus izin yang terdapat retribusi)",o:[{o:"Tidak Sesuai"},{o:"Kurang Sesuai"},{o:"Sesuai"},{o:"Sangat Sesuai"}]},{q:"Bagaimana pendapat saudara tentang kompetensi / kemampuan petugas dalam pelayanan?",o:[{o:"Tidak Kompeten"},{o:"Kurang Kompeten"},{o:"Kompeten"},{o:"Sangat Kompeten"}]},{q:"Bagaimana pendapat saudara tentang perilaku petugas dalam pelayanan terkait kesopanan dan keramahan? ",o:[{o:"Tidak Sopan dan Ramah"},{o:"Kurang Sopan"},{o:"Sopan dan Ramah"},{o:"Sangat Sopan dan Ramah"}]},{q:"Bagaimana pendapat saudara tentang kualitas sarana dan prasarana?",o:[{o:"Sangat Baik"},{o:"Cukup Baik"},{o:"Baik"},{o:"Buruk"}]},{q:"Bagaimana pendapat saudara tentang penanganan pengaduan pengguna layanan?",o:[{o:"Tidak Ada"},{o:"Ada Tetapi Tidak Berfungsi"},{o:"Berfungsi Kurang Maksimal"},{o:"Dikelola Bengan Baik"}]},{q:"Bagaimana pemahaman Saudara tentang kemudahan prosedur pelayanan?",o:[{o:"Tidak Mudah"},{o:"Kurang Mudah"},{o:"Mudah"},{o:"Sangat Mudah"}]},{q:"Penilaian Kepuasan",o:[{o:"Sangat Puas"},{o:"Cukup Puas"},{o:"Puas"},{o:"Tidak Puas"},{o:"Sangat Tidak Puas"}]}]},p=Object(c.b)({app:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"STORE_DATAS":return Object(u.a)(Object(u.a)({},a),{},{datas:n.datas});case"STORE_DATAS_DETAIL":return Object(u.a)(Object(u.a)({},a),{},{datas_detail:n.datas});case"RESET_DETAIL":return Object(u.a)(Object(u.a)({},a),{},{datas_detail:[]});default:return a}}}),j=Object(c.c)(p,Object(c.a)(d.a)),g=e(9),m=(e(21),e(1));var b=Object(r.b)((function(a){return{question:a.app.question}}),(function(a){return{}}))((function(a){var n=a.question,e=o.a.useState(0),t=Object(g.a)(e,2),i=t[0],s=t[1],r=o.a.useState("#f368e0"),c=Object(g.a)(r,2),d=(c[0],c[1]);return Object(m.jsxs)("div",{className:"q-container",children:[Object(m.jsxs)("div",{className:"waveWrapper waveAnimation",children:[Object(m.jsx)("div",{className:"waveWrapperInner bgTop",children:Object(m.jsx)("div",{className:"wave waveTop",style:{backgroundImage:"url('http://front-end-noobs.com/jecko/img/wave-top.png')"}})}),Object(m.jsx)("div",{className:"waveWrapperInner bgMiddle",children:Object(m.jsx)("div",{className:"wave waveMiddle",style:{backgroundImage:"url('http://front-end-noobs.com/jecko/img/wave-mid.png')"}})}),Object(m.jsx)("div",{className:"waveWrapperInner bgBottom",children:Object(m.jsx)("div",{className:"wave waveBottom",style:{backgroundImage:"url('http://front-end-noobs.com/jecko/img/wave-bot.png')"}})})]}),Object(m.jsx)("div",{className:"question",children:Object(m.jsx)("span",{children:n[i].q})}),Object(m.jsx)("div",{className:"option",children:n[i].o.map((function(a,n){return Object(m.jsx)("div",{children:a.o})}))}),Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsx)("div",{style:{width:"25%"},children:Object(m.jsx)("button",{className:"btn",style:{backgroundColor:"#ee5253"},onClick:function(){var a=Math.floor(16777215*Math.random()).toString(16);0===i?alert("limit"):(s(i-1),d("#".concat(a)))},children:"Kembali"})}),Object(m.jsx)("div",{style:{width:"50%"}}),Object(m.jsx)("div",{style:{width:"25%"},children:Object(m.jsx)("button",{className:"btn",style:{backgroundColor:"#54a0ff",float:"right"},onClick:function(){var a=Math.floor(16777215*Math.random()).toString(16);i===n.length-1?alert("Last"):(s(i+1),d("#".concat(a)))},children:"Selanjutnya"})})]})]})}));var h=Object(r.b)((function(a){a.app;return{}}),(function(a){return{}}))((function(){return Object(m.jsx)("div",{children:Object(m.jsx)(b,{})})}));var k=function(){return Object(m.jsx)(r.a,{store:j,children:Object(m.jsx)(h,{})})},S=function(a){a&&a instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(n){var e=n.getCLS,t=n.getFID,o=n.getFCP,i=n.getLCP,s=n.getTTFB;e(a),t(a),o(a),i(a),s(a)}))};s.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),S()}},[[23,1,2]]]);
//# sourceMappingURL=main.3a0d991e.chunk.js.map