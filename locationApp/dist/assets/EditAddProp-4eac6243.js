import{a}from"./axios-bff3f665.js";import{_ as d,o as c,c as _,a as t,b as n,w as s,v as i}from"./index-33ca901a.js";const p="https://locations-project-back.onrender.com/locations/",m={data(){return{_id:0,filmType:"",filmProducerName:"",endDate:"",filmName:"",district:"",sourcelocationId:"",filmDirectorName:"",address:"",startDate:"",year:"",username:""}},methods:{goBack(){localStorage.removeItem("locationId"),this.$router.push("/locations")},async fetchData(){this.id=localStorage.getItem("locationId");const r={Authorization:"Bearer "+this.token};await a.put(p+this.id,{body:{filmName:this.filmName,filmProducerName:this.filmProducerName,endDate:this.endDate,district:this.district,sourcelocationId:this.sourcelocationId,filmdDirectorName:this.filmDirectorName,address:this.address,startDate:this.startDate,year:this.year}},{headers:r}).then(l=>{console.log(l.data)}).catch(l=>console.error(l.response.status)),await localStorage.removeItem("locationId")}}},h={class:"main_container"},b=t("h1",null,"Edit a location",-1),f=t("label",null,"Type: ",-1),y=t("br",null,null,-1),D=t("br",null,null,-1),x=t("br",null,null,-1),I=t("label",null,"Producer: ",-1),v=t("br",null,null,-1),N=t("br",null,null,-1),g=t("br",null,null,-1),k=t("label",null,"Year: ",-1),P=t("br",null,null,-1),V=t("br",null,null,-1),U=t("br",null,null,-1),S=t("label",null,"Start date: ",-1),B=t("br",null,null,-1),T=t("br",null,null,-1),A=t("br",null,null,-1),E=t("label",null,"End date: ",-1),w=t("br",null,null,-1),C=t("br",null,null,-1),L=t("br",null,null,-1),M=t("label",null,"Address: ",-1),j=t("br",null,null,-1),z=t("br",null,null,-1),F=t("br",null,null,-1),G=t("label",null,"Location ID: ",-1),O=t("br",null,null,-1),R=t("br",null,null,-1),Y={class:"button-div"};function q(r,l,H,J,o,u){return c(),_("div",h,[b,t("form",null,[f,n(),y,s(t("input",{class:"input",type:"text",placeholder:"Long métrage, série, ...","onUpdate:modelValue":l[0]||(l[0]=e=>o.filmType=e)},null,512),[[i,o.filmType]]),D,n(),x,I,n(),v,s(t("input",{class:"input",type:"text",placeholder:"CURIOSA FILMS","onUpdate:modelValue":l[1]||(l[1]=e=>o.filmProducerName=e)},null,512),[[i,o.filmProducerName]]),N,n(),g,k,n(),P,s(t("input",{class:"input",type:"text",placeholder:"2020","onUpdate:modelValue":l[2]||(l[2]=e=>o.year=e)},null,512),[[i,o.year]]),V,n(),U,S,n(),B,s(t("input",{class:"input",type:"text",placeholder:"2020-09-04","onUpdate:modelValue":l[3]||(l[3]=e=>o.startDate=e)},null,512),[[i,o.startDate]]),T,n(),A,E,n(),w,s(t("input",{class:"input",type:"text",placeholder:"2020-09-08","onUpdate:modelValue":l[4]||(l[4]=e=>o.endDate=e)},null,512),[[i,o.endDate]]),C,n(),L,M,n(),j,s(t("input",{class:"input",type:"text",placeholder:"12 rue francis ponge, 75019 Paris","onUpdate:modelValue":l[5]||(l[5]=e=>o.address=e)},null,512),[[i,o.address]]),z,n(),F,G,n(),O,s(t("input",{class:"input",type:"text",placeholder:"2020-434","onUpdate:modelValue":l[6]||(l[6]=e=>o.sourcelocationId=e)},null,512),[[i,o.sourcelocationId]]),R,t("div",Y,[t("button",{type:"button",class:"button",onClick:l[7]||(l[7]=e=>u.fetchData())},"Save"),t("button",{type:"button",class:"button",onClick:l[8]||(l[8]=e=>u.goBack())},"Go back")])])])}const W=d(m,[["render",q]]);export{W as default};
