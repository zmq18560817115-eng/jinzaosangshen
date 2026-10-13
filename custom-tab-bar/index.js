Component({
 data:{selected:0,list:[{page:'home',text:'发现',icon:'tab-home'},{page:'map',text:'地图',icon:'tab-map'},{page:'passport',text:'护照',icon:'tab-passport'},{page:'mine',text:'我的',icon:'tab-mine'}]},
 methods:{switchTab(e){const index=Number(e.currentTarget.dataset.index);const item=this.data.list[index];if(!item)return;wx.switchTab({url:'/pages/'+item.page+'/index',success:()=>this.setData({selected:index})});}}
});
