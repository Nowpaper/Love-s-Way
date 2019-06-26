var __reflect=this&&this.__reflect||function(t,e,i){t.__class__=e,i?i.push(e):i=[e],t.__types__=t.__types__?i.concat(t.__types__):i},__extends=this&&this.__extends||function(t,e){function i(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);i.prototype=e.prototype,t.prototype=new i},__awaiter=this&&this.__awaiter||function(t,e,i,r){return new(i||(i=Promise))(function(n,s){function o(t){try{h(r.next(t))}catch(e){s(e)}}function a(t){try{h(r["throw"](t))}catch(e){s(e)}}function h(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(o,a)}h((r=r.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function i(t){return function(e){return r([t,e])}}function r(i){if(n)throw new TypeError("Generator is already executing.");for(;h;)try{if(n=1,s&&(o=s[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(s,i[1])).done)return o;switch(s=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return h.label++,{value:i[1],done:!1};case 5:h.label++,s=i[1],i=[0];continue;case 7:i=h.ops.pop(),h.trys.pop();continue;default:if(o=h.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){h=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){h.label=i[1];break}if(6===i[0]&&h.label<o[1]){h.label=o[1],o=i;break}if(o&&h.label<o[2]){h.label=o[2],h.ops.push(i);break}o[2]&&h.ops.pop(),h.trys.pop();continue}i=e.call(t,h)}catch(r){i=[6,r],s=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}var n,s,o,a,h={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),"throw":i(1),"return":i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a},Combo=function(t){function e(e,i,r){var n=t.call(this)||this;return n.skinName="resource/skins/ComboSkin.exml",n.anchorOffsetX=100,n.anchorOffsetY=15,n.lb_number.text=e.toString(),egret.Tween.get(n).to({scaleX:2,scaleY:2,alpha:0},500).call(n.removeSelf,n),n.x=i,n.y=r,n}return __extends(e,t),e.prototype.removeSelf=function(){egret.Tween.removeTweens(this),this.parent.removeChild(this)},e}(eui.Component);__reflect(Combo.prototype,"Combo");var AssetAdapter=function(){function t(){}return t.prototype.getAsset=function(t,e,i){function r(r){e.call(i,r,t)}if(RES.hasRes(t)){var n=RES.getRes(t);n?r(n):RES.getResAsync(t,r,this)}else RES.getResByUrl(t,r,this,RES.ResourceItem.TYPE_IMAGE)},t}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var Main=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.createChildren=function(){t.prototype.createChildren.call(this),egret.lifecycle.addLifecycleListener(function(t){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var e=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",e),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(t){console.log(t)})},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){switch(t.label){case 0:return[4,this.loadResource()];case 1:return t.sent(),this.createGameScene(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(i){switch(i.label){case 0:return i.trys.push([0,4,,5]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return i.sent(),[4,this.loadTheme()];case 2:return i.sent(),[4,RES.loadGroup("preload",0,t)];case 3:return i.sent(),this.stage.removeChild(t),[3,5];case 4:return e=i.sent(),console.error(e),[3,5];case 5:return[2]}})})},e.prototype.loadTheme=function(){var t=this;return new Promise(function(e,i){var r=new eui.Theme("resource/default.thm.json",t.stage);r.addEventListener(eui.UIEvent.COMPLETE,function(){e()},t)})},e.prototype.createGameScene=function(){Utils.UpdateControler.getInstance().registeEntity(this),this.addChild(new Begin)},e}(eui.UILayer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ThemeAdapter=function(){function t(){}return t.prototype.getTheme=function(t,e,i,r){function n(t){e.call(r,t)}function s(e){e.resItem.url==t&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),i.call(r))}"undefined"!=typeof generateEUI?egret.callLater(function(){e.call(r,generateEUI)},this):(RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,s,null),RES.getResByUrl(t,n,this,RES.ResourceItem.TYPE_TEXT))},t}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Begin=function(t){function e(){var e=t.call(this)||this;return e.skinName="resource/skins/BeingSkin.exml",e.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onclick_start,e),e}return __extends(e,t),e.prototype.onclick_start=function(){this.parent.addChild(new Game),this.parent.removeChild(this),this.btn_start.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_start,this)},e}(eui.Component);__reflect(Begin.prototype,"Begin");var LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Game=function(t){function e(){var e=t.call(this)||this;return e.movespeed=20,e.rotationspeed=-100,e.addspeed=0,e._ship_rotation=0,e._comboNumber=0,e._heart=null,e.outside=!1,e._Score=0,e.skinName="resource/skins/GameSkin.exml",e.resetGame(),e.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onclick_screen,e),e.btn_replay.addEventListener(egret.TouchEvent.TOUCH_TAP,e.onclick_btn_replay,e),Sound.getInstance(),e.onclick_btn_start(null),e}return __extends(e,t),e.prototype.resetGame=function(){this.gp_over.visible=!1,gameState=GameState.Start,this.btn_start.visible=!0,this.gp_actors.removeChildren(),this.gp_bg.y=-960,this.createStar(!0),this.createStar(),this.createStar(),this.createStar(),this.createStar(),this.Score=0,this._ship_rotation=0,this._comboNumber=0},e.prototype.onUpdate=function(t){if(gameState==GameState.Playing){this.createStar(),this.updateShipRotation(t*this.rotationspeed*(1/(this._star.radius/150))),this.gp_actors.setChildIndex(this._heart,999),this._heart.y<480?this.addspeed+=100*t:(this.addspeed/=2,this.addspeed-=1,this.addspeed<0&&(this.addspeed=0));var e=this.movespeed+this.addspeed;this.gp_bg.y>=0&&(this.gp_bg.y=-960);for(var i=this.gp_actors.numChildren-1;i>=0;i--){var r=this.gp_actors.getChildAt(i);r.y+=e*t,r.y>=r.height+960?this.gp_actors.removeChild(r):r instanceof ScorePoint&&r.checkCollsion(this._heart.x,this._heart.y)&&(Sound.getInstance().PlayClick(),this.Score+=400,this.addChild(new ScoreEffect("+400",this._heart.x,this._heart.y)))}this.outside&&this.checkCollsion(5)&&this.showOver(),this._heart.y>960&&this.showOver()}},e.prototype.showOver=function(){gameState=GameState.Paused,this.gp_over.visible=!0,this.gp_over_button.visible=!1,egret.Tween.get(this.gp_over_button).wait(1e3).set({visible:!0}),Sound.getInstance().PlayOver(),this._heart.scaleY>0?egret.Tween.get(this._heart).to({scaleX:5,scaleY:5,alpha:0},500):egret.Tween.get(this._heart).to({scaleX:5,scaleY:-5,alpha:0},500)},e.prototype.createStar=function(t){if(void 0===t&&(t=!1),t){this._heart=new eui.Image("heart_png"),this.gp_actors.addChild(this._heart),this._heart.anchorOffsetX=23.5;var e=new Star;e.x=320,e.y=650,e.radius=150,e.setFrist(),this.gp_actors.addChild(e),this._heart.x=e.x+e.radius-30,this._heart.y=e.y,this._star=e,this.gp_actors.setChildIndex(this._heart,999)}else{var i=this.gp_actors.getChildAt(this.gp_actors.numChildren-2);if(i instanceof Star&&i.y-i.radius>=-50){var e=new Star;e.randomStar();var r=void 0;do r=Utils.rotationPoint2(i.x+e.radius+i.radius,i.y,90*Math.random()+225,i.x,i.y);while(r.x+e.radius>600||r.x-e.radius<40);e.x=r.x,e.y=r.y,this.gp_actors.addChild(e)}}},e.prototype.onclick_btn_start=function(t){t&&t.stopImmediatePropagation(),this.btn_start.visible=!1,gameState=GameState.Playing},e.prototype.updateShipRotation=function(t){var e=Utils.rotationPoint2(this._heart.x,this._heart.y,t,this._star.x,this._star.y);this._heart.x=e.x,this._heart.y=e.y,this._heart.rotation+=t,this._heart.scaleY=0>t?1:-1,this._ship_rotation+=Math.abs(t)},e.prototype.onclick_screen=function(){if(gameState==GameState.Playing&&(this.changeShipPathway(),this.outside&&this.checkCollsion(20))){var t=this.gp_actors.getChildIndex(this._star),e=this.gp_actors.getChildAt(t+1);if(this._star=e,this.rotationspeed=-this.rotationspeed,this._heart.rotation=this._heart.rotation-180,this.changeShipPathway(),this._ship_rotation<360){this._comboNumber+=1;var i=0;i=this._comboNumber>=64?400:this._comboNumber>=16?300:this._comboNumber>=4?200:100,this.Score+=i,this.addChild(new ScoreEffect("+"+i,this._heart.x,this._heart.y)),this.gp_actors.addChildAt(new Combo(this._comboNumber,this._heart.x,this._heart.y),2),Sound.getInstance().PlayCombine()}else this._comboNumber=0;this._ship_rotation=0}},e.prototype.changeShipPathway=function(){this.outside=!this.outside;var t=this.outside?30:-30,e=Utils.rotationPoint2(this._star.x+this._star.radius+t,this._star.y,this._heart.rotation,this._star.x,this._star.y);this._heart.x=e.x,this._heart.y=e.y,this._star.changeImg()},e.prototype.checkCollsion=function(t){void 0===t&&(t=0);var e=this.gp_actors.getChildIndex(this._star),i=this.gp_actors.getChildAt(e+1),r=egret.Point.distance(new egret.Point(i.x,i.y),new egret.Point(this._heart.x,this._heart.y));return r<i.radius+t?!0:(e=this.gp_actors.getChildIndex(this._star),e>0&&(i=this.gp_actors.getChildAt(e-1)),i?(r=egret.Point.distance(new egret.Point(i.x,i.y),new egret.Point(this._heart.x,this._heart.y)),r<i.radius+t?!0:void 0):!1)},e.prototype.onclick_btn_replay=function(t){t.stopImmediatePropagation(),this.resetGame(),this.onclick_btn_start(null)},Object.defineProperty(e.prototype,"Score",{get:function(){return this._Score},set:function(t){this._Score=t,this.lb_score.text=t.toString(),this.lb_best.text=t.toString()},enumerable:!0,configurable:!0}),e}(eui.Component);__reflect(Game.prototype,"Game");var GameState;!function(t){t[t.Start=0]="Start",t[t.Playing=1]="Playing",t[t.Paused=2]="Paused"}(GameState||(GameState={}));var gameState=GameState.Start,ScorePoint=function(t){function e(e){var i=t.call(this,"point_png")||this;if(i.isDestroy=!1,i.anchorOffsetX=i.anchorOffsetY=11,e){var r=e.x+e.radius;r+=Math.random()<.5?14:-14;var n=Utils.rotationPoint2(r,e.y,360*Math.random(),e.x,e.y);i.x=n.x,i.y=n.y}return i}return __extends(e,t),e.prototype.checkCollsion=function(t,e){if(this.isDestroy)return!1;var i=egret.Point.distance(new egret.Point(t,e),new egret.Point(this.x,this.y));return 10>i?(this.isDestroy=!0,egret.Tween.get(this).to({scaleX:2,scaleY:2,alpha:0},500).call(this.removeSelf,this),!0):!1},e.prototype.removeSelf=function(){egret.Tween.removeTweens(this),this.parent&&this.parent.removeChild(this)},e}(eui.Image);__reflect(ScorePoint.prototype,"ScorePoint");var ScoreEffect=function(t){function e(e,i,r){var n=t.call(this,e)||this;return n.stroke=2,egret.Tween.get(n).to({scaleX:2,scaleY:2,alpha:0},1500).call(n.removeSelf,n),n.x=i,n.y=r-50,n}return __extends(e,t),e.prototype.removeSelf=function(){egret.Tween.removeTweens(this),this.parent.removeChild(this)},e}(eui.Label);__reflect(ScoreEffect.prototype,"ScoreEffect");var Sound=function(){function t(){this.bgm=RES.getRes("bgm_mp3"),this.bgm.play(0,-1),this.click=RES.getRes("sound3_mp3"),this.over=RES.getRes("over_mp3"),this.combine=RES.getRes("sound8_mp3")}return t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.prototype.PlayClick=function(){this.click.play(0,1)},t.prototype.PlayOver=function(){this.over.play(0,1)},t.prototype.PlayCombine=function(){this.combine.play(0,1)},t.instance=null,t}();__reflect(Sound.prototype,"Sound");var Star=function(t){function e(){var e=t.call(this)||this;return e.idx=5,e.skinName="resource/skins/StarSkin.exml",e}return __extends(e,t),Object.defineProperty(e.prototype,"radius",{get:function(){return this._radius},set:function(t){this._radius=t,this.width=this.height=2*t,this.rect_ring.ellipseWidth=this.rect_ring.ellipseHeight=2*this.width,this.anchorOffsetX=this.anchorOffsetY=t},enumerable:!0,configurable:!0}),e.prototype.randomStar=function(){this.img_star.source="start_"+(this.idx=Math.floor(9*Math.random()))+"_png",this.radius=100*Math.random()+50;60*Math.random()+10;this.img_star.width=this.img_star.height=this.radius},e.prototype.setFrist=function(){this.img_star.width=this.img_star.height=176},e.prototype.changeImg=function(){this.img_star.source="star_"+this.idx+"_png"},e}(eui.Component);__reflect(Star.prototype,"Star");var Utils;!function(t){function e(t,e,i,r,n){var s=new egret.Point(t-r,e-n),o=(egret.Point.distance(new egret.Point(0,0),s),-i*Math.PI/180),a=Math.cos(o)*s.x+s.y*Math.sin(o)+r,h=Math.sin(o)*-s.x+s.y*Math.cos(o)+n;return new egret.Point(a,h)}var i=function(){function t(){this.isPaused=!1,this._lasttimestamp=-1,this._entites=[],egret.startTick(this.onUpdate,this)}return t.getInstance=function(){return null==t._instance&&(t._instance=new t),t._instance},t.prototype.onUpdate=function(t){var e=(t-this._lasttimestamp)/1e3;if(this._lasttimestamp=t,!this.isPaused)for(var i=this._entites.length-1;i>=0;i--)this._updateEntity(this._entites[i],e);return!0},t.prototype._updateEntity=function(t,e){if(null!=t.onUpdate&&t.onUpdate(e),t instanceof egret.DisplayObjectContainer)for(var i=t.numChildren-1;i>=0;i--)this._updateEntity(t.getChildAt(i),e)},t.prototype.registeEntity=function(t){return this._entites.indexOf(t)<0?(this._entites.push(t),!0):!1},t.prototype.unregisteEntity=function(t){var e=this._entites.indexOf(t);return 0>e?!1:(this._entites.splice(e,1),!0)},t._instance=null,t}();t.UpdateControler=i,__reflect(i.prototype,"Utils.UpdateControler"),t.rotationPoint2=e}(Utils||(Utils={}));