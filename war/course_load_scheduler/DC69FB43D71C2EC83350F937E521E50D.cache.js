var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.course_load_scheduler;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = 'DC69FB43D71C2EC83350F937E521E50D';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = 3.141592653589793, $intern_2 = {3:1, 11:1}, $intern_3 = {3:1, 618:1}, $intern_4 = {3:1}, $intern_5 = {65:1, 67:1, 3:1, 8:1, 4:1}, $intern_6 = {67:1, 98:1, 3:1, 8:1, 4:1}, $intern_7 = {67:1, 99:1, 3:1, 8:1, 4:1}, $intern_8 = {67:1, 100:1, 3:1, 8:1, 4:1}, $intern_9 = {76:1, 3:1, 8:1, 4:1}, $intern_10 = {67:1, 139:1, 3:1, 8:1, 4:1}, $intern_11 = {12:1}, $intern_12 = {119:1, 3:1, 11:1}, $intern_13 = {110:1, 3:1, 11:1}, $intern_14 = 4194303, $intern_15 = 1048575, $intern_16 = 4194304, $intern_17 = 17592186044416, $intern_18 = -9223372036854775808, $intern_19 = 524288, $intern_20 = {201:1, 3:1}, $intern_21 = {7:1, 624:1}, $intern_22 = {261:1, 7:1}, $intern_23 = 32768, $intern_24 = 65536, $intern_25 = 67108864, $intern_26 = {16:1, 12:1, 15:1, 14:1, 17:1, 13:1, 9:1}, $intern_27 = {16:1, 12:1, 15:1, 14:1, 78:1, 17:1, 13:1, 9:1}, $intern_28 = {16:1, 12:1, 15:1, 14:1, 78:1, 17:1, 177:1, 13:1, 9:1}, $intern_29 = {16:1, 12:1, 15:1, 14:1, 78:1, 17:1, 182:1, 13:1, 9:1}, $intern_30 = {101:1, 3:1, 8:1, 4:1}, $intern_31 = {3:1, 8:1, 141:1}, $intern_32 = {82:1}, $intern_33 = {3:1, 106:1}, $intern_34 = {7:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 39:1, 38:1, 40:1, 41:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 54:1, 57:1, 55:1, 56:1, 58:1, 59:1, 60:1, 61:1, 62:1, 63:1}, $intern_35 = {64:1, 7:1}, $intern_36 = {625:1, 7:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals_0(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 617:1, 8:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function narrow_byte(x_0){
  return x_0 << 24 >> 24;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, $intern_0), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_1()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_1()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(237, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_1 = function isArray_1(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_17(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 237);
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.onCancel();
}

function $run(this$static, duration, startTime, element){
  $cancel(this$static);
  this$static.isRunning = true;
  this$static.isStarted = false;
  this$static.duration = duration;
  this$static.startTime = startTime;
  this$static.element = element;
  ++this$static.runId;
  $execute(this$static.callback, now_1());
}

function $run_0(this$static, duration, element){
  $run(this$static, duration, now_1(), element);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    this$static.onUpdate((1 + Math.cos($intern_1 + progress * $intern_1)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.onStart();
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    this$static.onComplete();
    return false;
  }
  return true;
}

function Animation(){
  Animation_0.call(this, (!instance && (instance = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance));
}

function Animation_0(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(215, 1, {});
_.onCancel = function onCancel(){
  this.wasStarted && this.onComplete();
}
;
_.onComplete = function onComplete(){
  this.onUpdate((1 + cos_0(6.283185307179586)) / 2);
}
;
_.onStart = function onStart(){
  this.onUpdate((1 + cos_0($intern_1)) / 2);
}
;
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 215);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(346, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 346);
defineClass(652, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 652);
defineClass(216, 1, {216:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 216);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(479, 652, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 479);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(480, 216, {216:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 480);
function $cancelAnimationFrame(this$static, requestId){
  $remove_12(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {673:1, 3:1}, 220, this$static.animationRequests.array.length, 0, 1);
  curAnimations = dynamicCast($toArray(this$static.animationRequests, curAnimations), 673);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_12(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(5, 16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(481, 652, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_9(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 481);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException_0('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(186, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 186);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(482, 186, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 482);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(220, 216, {216:1, 220:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 220);
function $getAriaValue(value_0){
  var buf, item_0, item$index, item$max;
  buf = new StringBuilder;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    $append_3((buf.string += '' + item_0 , buf), ' ');
  }
  return $trim(buf.string);
}

function $set(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(values));
}

function Attribute(name_0){
  this.name_0 = name_0;
}

defineClass(249, 1, {});
var Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client', 'Attribute', 249);
function AriaValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(140, 249, {}, AriaValueAttribute);
var Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'AriaValueAttribute', 140);
function PrimitiveValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(217, 249, {}, PrimitiveValueAttribute);
var Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'PrimitiveValueAttribute', 217);
function $clinit_State(){
  $clinit_State = emptyMethod;
  new PrimitiveValueAttribute('aria-busy');
  new AriaValueAttribute('aria-checked');
  new PrimitiveValueAttribute('aria-disabled');
  new AriaValueAttribute('aria-expanded');
  new AriaValueAttribute('aria-grabbed');
  HIDDEN = new PrimitiveValueAttribute('aria-hidden');
  new AriaValueAttribute('aria-invalid');
  new AriaValueAttribute('aria-pressed');
  new AriaValueAttribute('aria-selected');
}

var HIDDEN;
function $elapsedMillis(this$static){
  return now_1() - this$static.start_0;
}

function Duration(){
  this.start_0 = now_1();
}

defineClass(214, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 214);
function isScript(){
  return true;
}

function $fillInStackTrace(this$static){
  this$static.stackTrace = null;
  captureStackTrace(this$static, this$static.detailMessage);
  return this$static;
}

function $initCause(this$static, cause){
  checkState_0(!this$static.cause);
  checkCriticalArgument(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $toString(this$static){
  var className, msg;
  className = $getName(this$static.___clazz$);
  msg = this$static.getMessage();
  return msg != null?className + ': ' + msg:className;
}

function Throwable(message, cause){
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(11, 1, $intern_2);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_1(){
  return $toString(this);
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 11);
function Exception(){
  $fillInStackTrace(this);
}

function Exception_0(message){
  this.detailMessage = message;
  $fillInStackTrace(this);
}

defineClass(91, 11, $intern_2);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 91);
function RuntimeException(){
  Exception.call(this);
}

function RuntimeException_0(message){
  Exception_0.call(this, message);
}

function RuntimeException_1(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(73, 91, $intern_2, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 73);
defineClass(263, 73, $intern_2);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 263);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.cause = null;
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(92, 263, {92:1, 3:1, 11:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  return $ensureInit(this) , this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 92);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $push_0(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function $setLength(this$static, newLength){
  this$static.length = newLength;
}

function $setDate(this$static, dayOfMonth){
  this$static.setDate(dayOfMonth);
  return this$static.getTime();
}

function $setFullYear(this$static, year, month, day){
  this$static.setFullYear(year, month, day);
  return this$static.getTime();
}

function $setHours(this$static, hours, mins, secs, ms){
  this$static.setHours(hours, mins, secs, ms);
  return this$static.getTime();
}

function $setTime(this$static, milliseconds){
  this$static.setTime(milliseconds);
  return this$static.getTime();
}

function create(milliseconds){
  return new Date(milliseconds);
}

function create_0(year, month, dayOfMonth, hours, minutes, seconds, millis){
  return new Date(year, month, dayOfMonth, hours, minutes, seconds, millis);
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function escapeChar(c, escapeTable){
  var lookedUp = escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeJsonForEval(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return s;
}

function escapeValue(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function getEscapeTable(){
  !escapeTable_0 && (escapeTable_0 = initEscapeTable());
  return escapeTable_0;
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

var escapeTable_0;
defineClass(628, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 628);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      __0 != null && (__0 = __0.val);
      return __0;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && $push(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function $scheduleFinally(this$static, cmd){
  this$static.finallyCommands = push_0(this$static.finallyCommands, [cmd, false]);
}

function SchedulerImpl(){
}

function execute_0(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute_1();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 11)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 92)?dynamicCast(e, 92).getThrown():e);
      }
       else 
        throw unwrap_5($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_0)(cmd);
    !isScript() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(309, 628, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 309);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(310, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 310);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(311, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 311);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function constructJavaStackTrace(thrown){
  $clinit_StackTraceCreator();
  var stackTrace;
  stackTrace = collector.getStackTrace(thrown);
  return dropInternalFrames(stackTrace);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, i, numberOfFrameToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  numberOfFrameToSearch = min_0(stackTrace.length);
  for (i = 0; i < numberOfFrameToSearch; i++) {
    if ($equals_0(stackTrace[i].methodName, dropFrameUntilFnName)) {
      return dynamicCast((stackTrace.length >= i + 1 && stackTrace.splice(0, i + 1) , stackTrace), 618);
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

var collector;
defineClass(639, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 639);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(264, 639, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t.fnStack && t.fnStack instanceof Array?t.fnStack:[]);
  length_0 = stack_0.length;
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_3, 111, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 264);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (!stString.length) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals_0(toReturn.substr(0, 3), 'at ') && (toReturn = __substr(toReturn, 3, toReturn.length - 3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(__substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_0(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = __substr(toReturn, index_0 + 1, toReturn.length - (index_0 + 1)));
  (!toReturn.length || $equals_0(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(__substr(location_0, lastColonIndex + 1, location_0.length - (lastColonIndex + 1)));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(640, 639, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.__gwt$backingJsError , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initDim(Ljava_lang_StackTraceElement_2_classLit, $intern_3, 111, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals_0(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 640);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(265, 640, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 265);
function checkCriticalArgument(expression, errorMessage){
  if (!expression) {
    throw new IllegalArgumentException_0('' + errorMessage);
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (!reference) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function checkState_0(expression){
  if (!expression) {
    throw new IllegalStateException_0("Can't overwrite cause");
  }
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $insertBefore(this$static, newChild, refChild){
  return this$static.insertBefore(newChild, refChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $removeFromParent(this$static){
  var parent_0;
  parent_0 = $getParentElement(this$static);
  !!parent_0 && parent_0.removeChild(this$static);
}

function $replaceChild(this$static, newChild, oldChild){
  return this$static.replaceChild(newChild, oldChild);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $getSubPixelOffsetWidth(this$static){
  return this$static.offsetWidth || 0;
}

function $getSubPixelScrollHeight(this$static){
  return this$static.scrollHeight || 0;
}

function $getSubPixelScrollWidth(this$static){
  return this$static.scrollWidth || 0;
}

function $removeAttribute(this$static, name_0){
  this$static.removeAttribute(name_0);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setPropertyInt(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setScrollTop(this$static, scrollTop){
  this$static.scrollTop = scrollTop;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $createCheckInputElement(doc){
  var e = doc.createElement('INPUT');
  e.type = 'checkbox';
  e.value = 'on';
  return e;
}

function $createInputElement(doc, type_0){
  var e = doc.createElement('INPUT');
  e.type = type_0;
  return e;
}

function $createScriptElement(doc, source){
  var elem;
  elem = $createElement(doc, 'script');
  elem.text = source;
  return elem;
}

function $eventGetAltKey(evt){
  return !!evt.altKey;
}

function $eventGetCtrlKey(evt){
  return !!evt.ctrlKey;
}

function $eventGetKeyCode(evt){
  return evt.keyCode | 0;
}

function $eventGetMetaKey(evt){
  return !!evt.metaKey;
}

function $eventGetShiftKey(evt){
  return !!evt.shiftKey;
}

function $eventGetSubPixelClientX(evt){
  return evt.clientX || 0;
}

function $eventGetSubPixelClientY(evt){
  return evt.clientY || 0;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling;
  while (sib && sib.nodeType != 1)
    sib = sib.nextSibling;
  return sib;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $getSubPixelScrollLeft(elem){
  return elem.scrollLeft || 0;
}

function $selectClear(select){
  select.options.length = 0;
}

function $touchGetSubPixelPageX(touch){
  return touch.pageX || 0;
}

function $touchGetSubPixelPageY(touch){
  return touch.pageY || 0;
}

function $createElement(doc, tagName){
  var container, elem;
  if (tagName.indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement('div')) , doc.__gwt_container);
    $setInnerHTML(container, '<' + tagName + '/>');
    elem = $getFirstChildElement(container);
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}

function $createHtmlEvent(doc, type_0){
  var evt = doc.createEventObject();
  evt.type = type_0;
  return evt;
}

function $dispatchEvent(target, evt){
  target.fireEvent('on' + evt.type, evt);
}

function $eventPreventDefault(evt){
  evt.returnValue = false;
}

function $eventStopPropagation(evt){
  evt.cancelBubble = true;
}

function $getBoundingClientRectLeft(elem){
  try {
    return elem.getBoundingClientRect().left;
  }
   catch (e) {
    return 0;
  }
}

function $getBoundingClientRectTop(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function $isRTL(elem){
  return elem.currentStyle.direction == 'rtl';
}

function $selectAdd(select, option, before){
  before?select.add(option, before.index):select.add(option);
}

function $setInnerText(elem, text_0){
  elem.innerText = text_0 || '';
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

var currentEventTarget;
function $getAbsoluteLeft(elem){
  var doc;
  doc = elem.ownerDocument;
  return $getBoundingClientRectLeft(elem) + $getScrollLeft($equals_0(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body);
}

function $getAbsoluteTop(elem){
  var doc;
  doc = elem.ownerDocument;
  return $getBoundingClientRectTop(elem) + ((($equals_0(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).scrollTop || 0) | 0);
}

function $getScrollLeft(elem){
  if ($isRTL(elem)) {
    return -($getSubPixelScrollLeft(elem) | 0);
  }
  return $getSubPixelScrollLeft(elem) | 0;
}

function $setScrollLeft(elem, left){
  $isRTL(elem) && (left = -left);
  elem.scrollLeft = left;
}

function $createUniqueId(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function $getBodyOffsetLeft(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientLeft;
}

function $getBodyOffsetTop(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientTop;
}

function $getClientHeight(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $getScrollHeight(this$static){
  return (($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0) | 0;
}

function $getScrollLeft_0(this$static){
  return $getScrollLeft($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body);
}

function $getScrollTop(this$static){
  return (($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollTop || 0) | 0;
}

function $getScrollWidth(this$static){
  return (($equals_0(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0) | 0;
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function $isChecked(this$static){
  return !!this$static.checked;
}

function $isDefaultChecked(this$static){
  return !!this$static.defaultChecked;
}

function $setChecked(this$static, checked){
  this$static.checked = checked;
}

function $setDefaultChecked(this$static, defaultChecked){
  this$static.defaultChecked = defaultChecked;
}

function $setHtmlFor(this$static, htmlFor){
  this$static.htmlFor = htmlFor;
}

function $setSelectedIndex(this$static, index_0){
  this$static.selectedIndex = index_0;
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(4, 1, {3:1, 8:1, 4:1});
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 4);
function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Style$Display();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_4, 65, 0, [NONE, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL]);
}

defineClass(65, 4, $intern_5);
var BLOCK, INITIAL, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, NONE, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 65, values_0);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(368, 65, $intern_5, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 368, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(377, 65, $intern_5, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 377, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(378, 65, $intern_5, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 378, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(379, 65, $intern_5, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 379, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(380, 65, $intern_5, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 380, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(381, 65, $intern_5, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 381, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(382, 65, $intern_5, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 382, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(383, 65, $intern_5, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 383, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(384, 65, $intern_5, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 384, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(369, 65, $intern_5, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 369, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(370, 65, $intern_5, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 370, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(371, 65, $intern_5, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 371, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(372, 65, $intern_5, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 372, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(373, 65, $intern_5, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 373, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(374, 65, $intern_5, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 374, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(375, 65, $intern_5, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 375, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(376, 65, $intern_5, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 376, null);
function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN_0 = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$Overflow();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_4, 98, 0, [VISIBLE, HIDDEN_0, SCROLL, AUTO]);
}

defineClass(98, 4, $intern_6);
var AUTO, HIDDEN_0, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow', 98, values_1);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(385, 98, $intern_6, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/1', 385, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(386, 98, $intern_6, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/2', 386, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(387, 98, $intern_6, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/3', 387, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(388, 98, $intern_6, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Overflow/4', 388, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$Position();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_4, 99, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(99, 4, $intern_7);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position', 99, values_2);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(389, 99, $intern_7, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/1', 389, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(390, 99, $intern_7, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/2', 390, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(391, 99, $intern_7, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/3', 391, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(392, 99, $intern_7, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Position/4', 392, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$TextAlign();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_4, 100, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(100, 4, $intern_8);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 100, values_3);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(393, 100, $intern_8, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 393, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(394, 100, $intern_8, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 394, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(395, 100, $intern_8, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 395, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(396, 100, $intern_8, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 396, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Unit();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_4, 76, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(76, 4, $intern_9);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 76, values_4);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(359, 76, $intern_9, Style$Unit$1);
_.getType = function getType(){
  return 'px';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 359, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(360, 76, $intern_9, Style$Unit$2);
_.getType = function getType_0(){
  return '%';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 360, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(361, 76, $intern_9, Style$Unit$3);
_.getType = function getType_1(){
  return 'em';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 361, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(362, 76, $intern_9, Style$Unit$4);
_.getType = function getType_2(){
  return 'ex';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 362, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(363, 76, $intern_9, Style$Unit$5);
_.getType = function getType_3(){
  return 'pt';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 363, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(364, 76, $intern_9, Style$Unit$6);
_.getType = function getType_4(){
  return 'pc';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 364, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(365, 76, $intern_9, Style$Unit$7);
_.getType = function getType_5(){
  return 'in';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 365, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(366, 76, $intern_9, Style$Unit$8);
_.getType = function getType_6(){
  return 'cm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 366, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(367, 76, $intern_9, Style$Unit$9);
_.getType = function getType_7(){
  return 'mm';
}
;
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 367, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_1 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$Visibility();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_4, 139, 0, [VISIBLE_0, HIDDEN_1]);
}

defineClass(139, 4, $intern_10);
var HIDDEN_1, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility', 139, values_5);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(397, 139, $intern_10, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/1', 397, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(398, 139, $intern_10, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Visibility/2', 398, null);
function $clinit_StyleInjector(){
  $clinit_StyleInjector = emptyMethod;
  toInject = [];
  toInjectAtEnd = [];
  toInjectAtStart = [];
  flusher = new StyleInjector$1;
}

function flush(){
  $clinit_StyleInjector();
  var css, maybeReturn, toReturn;
  toReturn = null;
  if (toInjectAtStart.length != 0) {
    css = toInjectAtStart.join('');
    maybeReturn = $injectStyleSheetAtStart(($clinit_StyleInjector$StyleInjectorImpl() , css));
    !toInjectAtStart && (toReturn = maybeReturn);
    $setLength(toInjectAtStart, 0);
  }
  if (toInject.length != 0) {
    css = toInject.join('');
    maybeReturn = $injectStyleSheet(($clinit_StyleInjector$StyleInjectorImpl() , css));
    !toInject && (toReturn = maybeReturn);
    $setLength(toInject, 0);
  }
  if (toInjectAtEnd.length != 0) {
    css = toInjectAtEnd.join('');
    maybeReturn = $injectStyleSheetAtEnd(($clinit_StyleInjector$StyleInjectorImpl() , css));
    !toInjectAtEnd && (toReturn = maybeReturn);
    $setLength(toInjectAtEnd, 0);
  }
  needsInjection = false;
  return toReturn;
}

function schedule(){
  $clinit_StyleInjector();
  if (!needsInjection) {
    needsInjection = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), flusher);
  }
}

var flusher, needsInjection = false, toInject, toInjectAtEnd, toInjectAtStart;
function StyleInjector$1(){
}

defineClass(549, 1, {}, StyleInjector$1);
_.execute_1 = function execute_3(){
  ($clinit_StyleInjector() , needsInjection) && flush();
}
;
var Lcom_google_gwt_dom_client_StyleInjector$1_2_classLit = createForClass('com.google.gwt.dom.client', 'StyleInjector/1', 549);
function $clinit_StyleInjector$StyleInjectorImpl(){
  $clinit_StyleInjector$StyleInjectorImpl = emptyMethod;
  $clinit_StyleInjector$StyleInjectorImplIE();
}

function $clinit_StyleInjector$StyleInjectorImplIE(){
  $clinit_StyleInjector$StyleInjectorImplIE = emptyMethod;
  $clinit_StyleInjector$StyleInjectorImpl();
  styleSheetLengths = initDim(I_classLit, $intern_4, 0, 31, 7, 1);
}

function $appendToStyleSheet(idx, contents, append){
  var style;
  style = $doc.styleSheets[idx];
  append?(style.cssText += contents , undefined):(style.cssText = contents + style.cssText , undefined);
  return style;
}

function $createNewStyleSheet(contents){
  var style;
  style = $doc.createStyleSheet();
  style.cssText = contents;
  return style;
}

function $injectStyleSheet(contents){
  var i, len, numStyles, shortestIdx, shortestLen;
  numStyles = getDocumentStyleCount();
  if (numStyles < 31) {
    return $createNewStyleSheet(contents);
  }
   else {
    shortestLen = $intern_0;
    shortestIdx = -1;
    for (i = 0; i < 31; i++) {
      len = styleSheetLengths[i];
      len == 0 && (len = styleSheetLengths[i] = $doc.styleSheets[i].cssText.length);
      if (len <= shortestLen) {
        shortestLen = len;
        shortestIdx = i;
      }
    }
    styleSheetLengths[shortestIdx] += contents.length;
    return $appendToStyleSheet(shortestIdx, contents, true);
  }
}

function $injectStyleSheetAtEnd(contents){
  var documentStyleCount;
  documentStyleCount = getDocumentStyleCount();
  if (documentStyleCount == 0) {
    return $createNewStyleSheet(contents);
  }
  return $appendToStyleSheet(documentStyleCount - 1, contents, true);
}

function $injectStyleSheetAtStart(contents){
  if (getDocumentStyleCount() == 0) {
    return $createNewStyleSheet(contents);
  }
  return $appendToStyleSheet(0, contents, false);
}

function getDocumentStyleCount(){
  return $doc.styleSheets.length;
}

var styleSheetLengths;
defineClass(648, 1, {});
_.toString$ = function toString_3(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 648);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(649, 648, {});
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 649);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 106);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next_0(), 116);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(657, 649, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 657);
function $clinit_ChangeEvent(){
  $clinit_ChangeEvent = emptyMethod;
  TYPE = new DomEvent$Type('change', new ChangeEvent);
}

function ChangeEvent(){
}

defineClass(529, 657, {}, ChangeEvent);
_.dispatch = function dispatch(handler){
  dynamicCast(handler, 625).onChange(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ChangeEvent', 529);
defineClass(658, 657, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 658);
defineClass(659, 658, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 659);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(500, 659, {}, ClickEvent);
_.dispatch = function dispatch_0(handler){
  dynamicCast(handler, 64).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 500);
defineClass(313, 1, {});
_.hashCode$ = function hashCode_2(){
  return this.index_0;
}
;
_.toString$ = function toString_4(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 313);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(10, 313, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 10);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 106);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_2(this);
  this.name_0 = eventName;
}

defineClass(116, 10, {116:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 116);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(486, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 486);
defineClass(663, 658, {});
var impl;
var Lcom_google_gwt_event_dom_client_TouchEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent', 663);
function $clinit_TouchCancelEvent(){
  $clinit_TouchCancelEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type('touchcancel', new TouchCancelEvent);
}

function TouchCancelEvent(){
}

defineClass(544, 663, {}, TouchCancelEvent);
_.dispatch = function dispatch_1(handler){
  $onTouchEnd(dynamicCast(handler, 677).this$01);
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_dom_client_TouchCancelEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchCancelEvent', 544);
function $clinit_TouchEndEvent(){
  $clinit_TouchEndEvent = emptyMethod;
  TYPE_2 = new DomEvent$Type('touchend', new TouchEndEvent);
}

function TouchEndEvent(){
}

defineClass(543, 663, {}, TouchEndEvent);
_.dispatch = function dispatch_2(handler){
  $onTouchEnd(dynamicCast(handler, 676).this$01);
}
;
_.getAssociatedType_0 = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_dom_client_TouchEndEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEndEvent', 543);
defineClass(540, 1, {});
var Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetector_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent/TouchSupportDetector', 540);
function TouchEvent$TouchSupportDetectorNo(){
  var elem;
  elem = document.createElement('div');
  elem.setAttribute('ontouchstart', 'return;');
  typeof elem.ontouchstart == 'function';
}

defineClass(541, 540, {}, TouchEvent$TouchSupportDetectorNo);
var Lcom_google_gwt_event_dom_client_TouchEvent$TouchSupportDetectorNo_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchEvent/TouchSupportDetectorNo', 541);
function $clinit_TouchMoveEvent(){
  $clinit_TouchMoveEvent = emptyMethod;
  TYPE_3 = new DomEvent$Type('touchmove', new TouchMoveEvent);
}

function $dispatch(this$static, handler){
  $onTouchMove(handler.this$01, this$static);
}

function TouchMoveEvent(){
}

defineClass(542, 663, {}, TouchMoveEvent);
_.dispatch = function dispatch_3(handler){
  $dispatch(this, dynamicCast(handler, 675));
}
;
_.getAssociatedType_0 = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_dom_client_TouchMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchMoveEvent', 542);
function $clinit_TouchStartEvent(){
  $clinit_TouchStartEvent = emptyMethod;
  TYPE_4 = new DomEvent$Type('touchstart', new TouchStartEvent);
}

function $dispatch_0(this$static, handler){
  $onTouchStart(handler.this$01, this$static);
}

function TouchStartEvent(){
}

defineClass(539, 663, {}, TouchStartEvent);
_.dispatch = function dispatch_4(handler){
  $dispatch_0(this, dynamicCast(handler, 674));
}
;
_.getAssociatedType_0 = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_event_dom_client_TouchStartEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'TouchStartEvent', 539);
function $dispatch_1(this$static, handler){
  this$static.attached?$setupBustClickHandler(handler.this$01):$removeBustClickHandler(handler.this$01);
}

function AttachEvent(attached){
  this.attached = attached;
}

function fire_0(source, attached){
  var event_0;
  if (TYPE_5) {
    event_0 = new AttachEvent(attached);
    !!source.handlerManager && $fireEvent(source.handlerManager, event_0);
  }
}

defineClass(400, 649, {}, AttachEvent);
_.dispatch = function dispatch_5(handler){
  $dispatch_1(this, dynamicCast(handler, 671));
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_5;
}
;
_.attached = false;
var TYPE_5;
var Lcom_google_gwt_event_logical_shared_AttachEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'AttachEvent', 400);
function CloseEvent_0(){
}

function fire_1(source){
  var event_0;
  if (TYPE_6) {
    event_0 = new CloseEvent_0;
    source.fireEvent_0(event_0);
  }
}

defineClass(399, 649, {}, CloseEvent_0);
_.dispatch = function dispatch_6(handler){
  dynamicCast(handler, 669);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 399);
function ResizeEvent(){
}

function fire_2(source){
  var event_0;
  if (TYPE_7) {
    event_0 = new ResizeEvent;
    $fireEvent(source, event_0);
  }
}

defineClass(350, 649, {}, ResizeEvent);
_.dispatch = function dispatch_7(handler){
  dynamicCast(handler, 261).onResize(this);
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return TYPE_7;
}
;
var TYPE_7;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 350);
function $dispatch_2(handler){
  handler.this$01.autoHideOnHistoryEvents && $hide(handler.this$01);
}

function ValueChangeEvent(){
}

function fire_3(source){
  var event_0;
  if (TYPE_8) {
    event_0 = new ValueChangeEvent;
    $fireEvent(source.handlers, event_0);
  }
}

defineClass(497, 649, {}, ValueChangeEvent);
_.dispatch = function dispatch_8(handler){
  $dispatch_2(dynamicCast(handler, 672));
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return TYPE_8;
}
;
var TYPE_8;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 497);
defineClass(650, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 650);
function $castFireEvent(this$static, event_0){
  var e;
  try {
    $doFire(this$static.real, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 119)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap_5($e0);
  }
}

defineClass(651, 650, $intern_11);
var Lcom_google_gwt_event_shared_EventBus_2_classLit = createForClass('com.google.gwt.event.shared', 'EventBus', 651);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 119)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap_5($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(137, 1, $intern_11, HandlerManager, HandlerManager_0);
_.fireEvent_0 = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 137);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_9(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  if (!handler) {
    throw new NullPointerException_0('Cannot add a null handler');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_2(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next_0();
      try {
        event_0.dispatch(dynamicCast(handler, 7));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 11)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_10(causes, e);
        }
         else 
          throw unwrap_5($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove_1(handler);
  removed && l.isEmpty() && (sourceMap = dynamicCast($get_4(this$static.map_0, type_0), 153) , dynamicCast($remove_14(sourceMap.hashCodeMap, source), 106) , sourceMap.size_0 == 0 && $remove_9(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_4(this$static.map_0, type_0), 153);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_1(this$static.map_0, type_0, sourceMap);
  }
  handlers = dynamicCast(getEntryValueOrNull($getEntry(sourceMap.hashCodeMap, source)), 106);
  if (!handlers) {
    handlers = new ArrayList;
    $put_2(sourceMap.hashCodeMap, source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0, null);
  return directHandlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_4(this$static.map_0, type_0), 153);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(getEntryValueOrNull($getEntry(sourceMap.hashCodeMap, source)), 106);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_0(c$iterator.last = c$iterator.i++), 623));
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey(this$static.map_0, eventKey);
}

function SimpleEventBus(){
  SimpleEventBus_0.call(this, false);
}

function SimpleEventBus_0(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(209, 650, {}, SimpleEventBus);
_.doRemove = function doRemove(type_0, source, handler){
  this.firingDepth > 0?$defer(this, new SimpleEventBus$3(this, type_0, source, handler)):$doRemoveNow(this, type_0, source, handler);
}
;
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 209);
function HandlerManager$Bus(fireInReverseOrder){
  SimpleEventBus_0.call(this, fireInReverseOrder);
}

defineClass(314, 209, {}, HandlerManager$Bus);
_.doRemove = function doRemove_0(type_0, source, handler){
  this.firingDepth > 0?$defer(this, new SimpleEventBus$3(this, type_0, source, handler)):$doRemoveNow(this, type_0, source, handler);
}
;
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 314);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(248, 1, {670:1}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 248);
function $addHandler_0(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.real, type_0, handler));
}

function SimpleEventBus_1(){
  this.real = new SimpleEventBus;
}

defineClass(317, 651, $intern_11, SimpleEventBus_1);
_.fireEvent_0 = function fireEvent_0(event_0){
  $castFireEvent(this, event_0);
}
;
var Lcom_google_gwt_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.gwt.event.shared', 'SimpleEventBus', 317);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next_0(), 11);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next_0(), 11);
    first?(first = false):(b.string += '; ' , b);
    $append_3(b, t.getMessage());
  }
  return b.string;
}

defineClass(119, 73, $intern_12, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 119);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(205, 119, $intern_12, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 205);
function $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$(this$static){
  var created;
  if (!this$static.singleton_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$) {
    created = new SimpleEventBus_1;
    this$static.singleton_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$ = created;
  }
  return this$static.singleton_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$;
}

function org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment(){
}

defineClass(402, 1, {}, org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment);
_.singleton_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$ = null;
var Lcom_google_gwt_event_shared_org_1dselent_1course_1load_1scheduler_1client_1gin_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('com.google.gwt.event.shared', 'org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment', 402);
function $cancel_1(this$static){
  var xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  $clearOnReadyStateChange(xhr);
  xhr.abort();
}

function $fireOnResponseReceived(this$static, callback){
  var response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  response = new Request$RequestImplIE8And9$1(xhr);
  $onResponseReceived(callback, response);
}

function $fireOnTimeout(this$static){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  $onError(this$static.callback, new RequestTimeoutException(this$static.timeoutMillis));
}

function Request(xmlHttpRequest, timeoutMillis, callback){
  this.timer = new Request$1(this);
  if (!xmlHttpRequest) {
    throw new NullPointerException;
  }
  if (!callback) {
    throw new NullPointerException;
  }
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException;
  }
  this.callback = callback;
  this.timeoutMillis = timeoutMillis;
  this.xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && $schedule(this.timer, timeoutMillis);
}

defineClass(571, 1, {}, Request);
_.timeoutMillis = 0;
var Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client', 'Request', 571);
function Request$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(574, 186, {}, Request$1);
_.run = function run_0(){
  $fireOnTimeout(this.this$01);
}
;
var Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/1', 574);
defineClass(667, 1, {});
var Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client', 'Response', 667);
defineClass(572, 667, {});
var Lcom_google_gwt_http_client_ResponseImpl_2_classLit = createForClass('com.google.gwt.http.client', 'ResponseImpl', 572);
function Request$RequestImplIE8And9$1($anonymous0){
  this.xmlHttpRequest = $anonymous0;
}

defineClass(573, 572, {}, Request$RequestImplIE8And9$1);
var Lcom_google_gwt_http_client_Request$RequestImplIE8And9$1_2_classLit = createForClass('com.google.gwt.http.client', 'Request/RequestImplIE8And9/1', 573);
function $clinit_RequestBuilder(){
  $clinit_RequestBuilder = emptyMethod;
  new RequestBuilder$Method('DELETE');
  new RequestBuilder$Method('GET');
  new RequestBuilder$Method('HEAD');
  POST = new RequestBuilder$Method('POST');
  new RequestBuilder$Method('PUT');
}

function $doSend(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    $open(xmlHttpRequest, this$static.httpMethod, this$static.url_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 92)) {
      e = $e0;
      requestPermissionException = new RequestPermissionException(this$static.url_0);
      $initCause(requestPermissionException, new RequestException(e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw unwrap_5($e0);
  }
  $setHeaders(this$static, xmlHttpRequest);
  this$static.includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new Request(xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, new RequestBuilder$1(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 92)) {
      e = $e1;
      throw new RequestException(e.getMessage());
    }
     else 
      throw unwrap_5($e1);
  }
  return request;
}

function $send(this$static){
  throwIfNull('callback', this$static.callback);
  return $doSend(this$static, this$static.requestData, this$static.callback);
}

function $setCallback(this$static, callback){
  throwIfNull('callback', callback);
  this$static.callback = callback;
}

function $setHeader(this$static){
  throwIfEmptyOrNull('header', 'Content-Type');
  throwIfEmptyOrNull('value', 'application/json');
  !this$static.headers && (this$static.headers = new HashMap);
  $putStringValue(this$static.headers, 'Content-Type', 'application/json');
}

function $setHeaders(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.headers && this$static.headers.size_0 > 0) {
    for (header$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.headers)).this$01); $hasNext(header$iterator);) {
      header = (checkStructuralChange(header$iterator.this$01, header$iterator) , checkCriticalElement($hasNext(header$iterator)) , header$iterator.last = header$iterator.current , dynamicCast(header$iterator.current.next_0(), 82));
      try {
        $setRequestHeader(xmlHttpRequest, dynamicCastToString(header.getKey()), dynamicCastToString(header.getValue()));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 92)) {
          e = $e0;
          throw new RequestException(e.getMessage());
        }
         else 
          throw unwrap_5($e0);
      }
    }
  }
   else {
    $setRequestHeader(xmlHttpRequest, 'Content-Type', 'text/plain; charset=utf-8');
  }
}

function $setRequestData(this$static, requestData){
  this$static.requestData = requestData;
}

function $setTimeoutMillis(this$static, timeoutMillis){
  if (timeoutMillis < 0) {
    throw new IllegalArgumentException_0('Timeouts cannot be negative');
  }
  this$static.timeoutMillis = timeoutMillis;
}

function RequestBuilder(httpMethod, url_0){
  $clinit_RequestBuilder();
  RequestBuilder_0.call(this, !httpMethod?null:httpMethod.name_0, url_0);
}

function RequestBuilder_0(httpMethod, url_0){
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url_0);
  this.httpMethod = httpMethod;
  this.url_0 = url_0;
}

defineClass(257, 1, {}, RequestBuilder);
_.includeCredentials = false;
_.timeoutMillis = 0;
var POST;
var Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder', 257);
function RequestBuilder$1(val$request, val$callback){
  this.val$request2 = val$request;
  this.val$callback3 = val$callback;
}

defineClass(570, 1, {}, RequestBuilder$1);
_.onReadyStateChange = function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request2, this.val$callback3);
  }
}
;
var Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/1', 570);
function RequestBuilder$Method(name_0){
  this.name_0 = name_0;
}

defineClass(166, 1, {}, RequestBuilder$Method);
_.toString$ = function toString_5(){
  return this.name_0;
}
;
var Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client', 'RequestBuilder/Method', 166);
function RequestException(message){
  Exception_0.call(this, message);
}

defineClass(110, 91, $intern_13, RequestException);
var Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestException', 110);
function RequestPermissionException(url_0){
  RequestException.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

defineClass(592, 110, $intern_13, RequestPermissionException);
var Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestPermissionException', 592);
function RequestTimeoutException(timeoutMillis){
  RequestException.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

defineClass(615, 110, $intern_13, RequestTimeoutException);
var Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client', 'RequestTimeoutException', 615);
function throwIfEmptyOrNull(name_0, value_0){
  throwIfNull(name_0, value_0);
  if (0 == $trim(value_0).length) {
    throw new IllegalArgumentException_0(name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value_0){
  if (null == value_0) {
    throw new NullPointerException_0(name_0 + ' cannot be null');
  }
}

function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_HasDirection$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_4, 161, 0, [RTL, LTR, DEFAULT]);
}

defineClass(161, 4, {161:1, 3:1, 8:1, 4:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 161, values_6);
defineClass(666, 1, {});
_.isArray_0 = function isArray(){
  return null;
}
;
_.isBoolean = function isBoolean(){
  return null;
}
;
_.isNull = function isNull(){
  return null;
}
;
_.isNumber = function isNumber(){
  return null;
}
;
_.isObject = function isObject(){
  return null;
}
;
_.isString = function isString(){
  return null;
}
;
var Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client', 'JSONValue', 666);
function $get(this$static, index_0){
  var v = this$static.jsArray[index_0];
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function JSONArray(arr){
  this.jsArray = arr;
}

function unwrap(value_0){
  return value_0.jsArray;
}

defineClass(234, 666, {234:1}, JSONArray);
_.equals$ = function equals_1(other){
  if (!instanceOf(other, 234)) {
    return false;
  }
  return this.jsArray == dynamicCast(other, 234).jsArray;
}
;
_.getUnwrapper = function getUnwrapper(){
  return unwrap;
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode(this.jsArray);
}
;
_.isArray_0 = function isArray_0(){
  return this;
}
;
_.toString$ = function toString_6(){
  var c, i, sb;
  sb = new StringBuilder_0('[');
  for (i = 0 , c = this.jsArray.length; i < c; i++) {
    i > 0 && (sb.string += ',' , sb);
    $append_2(sb, $get(this, i));
  }
  sb.string += ']';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client', 'JSONArray', 234);
function $clinit_JSONBoolean(){
  $clinit_JSONBoolean = emptyMethod;
  FALSE = new JSONBoolean(false);
  TRUE = new JSONBoolean(true);
}

function JSONBoolean(value_0){
  this.value_0 = value_0;
}

function unwrap_0(value_0){
  return value_0.value_0;
}

defineClass(260, 666, {}, JSONBoolean);
_.getUnwrapper = function getUnwrapper_0(){
  return unwrap_0;
}
;
_.isBoolean = function isBoolean_0(){
  return this;
}
;
_.toString$ = function toString_7(){
  return $clinit_Boolean() , '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client', 'JSONBoolean', 260);
function JSONException(message){
  RuntimeException_0.call(this, message);
}

function JSONException_0(cause){
  this.detailMessage = !cause?null:$toString(cause);
  this.cause = cause;
  $fillInStackTrace(this);
}

defineClass(104, 73, {104:1, 3:1, 11:1}, JSONException, JSONException_0);
var Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client', 'JSONException', 104);
function $clinit_JSONNull(){
  $clinit_JSONNull = emptyMethod;
  instance_0 = new JSONNull;
}

function JSONNull(){
}

function unwrap_1(){
  return null;
}

defineClass(604, 666, {}, JSONNull);
_.getUnwrapper = function getUnwrapper_1(){
  return unwrap_1;
}
;
_.isNull = function isNull_0(){
  if (this != instance_0) {
    return null;
  }
  return this;
}
;
_.toString$ = function toString_8(){
  return 'null';
}
;
var instance_0;
var Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNull', 604);
function JSONNumber(value_0){
  this.value_0 = value_0;
}

function unwrap_2(value_0){
  return value_0.value_0;
}

defineClass(169, 666, {169:1}, JSONNumber);
_.equals$ = function equals_2(other){
  if (!instanceOf(other, 169)) {
    return false;
  }
  return this.value_0 == dynamicCast(other, 169).value_0;
}
;
_.getUnwrapper = function getUnwrapper_2(){
  return unwrap_2;
}
;
_.hashCode$ = function hashCode_4(){
  return round_int((new Double(this.value_0)).value_0);
}
;
_.isNumber = function isNumber_0(){
  return this;
}
;
_.toString$ = function toString_9(){
  return this.value_0 + '';
}
;
_.value_0 = 0;
var Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNumber', 169);
function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function $get_0(this$static, key){
  if (key == null) {
    throw new NullPointerException;
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function $put(this$static, key, jsonValue){
  var previous;
  if (key == null) {
    throw new NullPointerException;
  }
  previous = $get_0(this$static, key);
  $put0(this$static, key, jsonValue);
  return previous;
}

function $put0(this$static, key, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    this$static.jsObject[key] = func(value_0);
  }
   else {
    delete this$static.jsObject[key];
  }
}

function $toString_0(this$static){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new StringBuilder_0('{');
  first = true;
  keys_0 = $computeKeys0(this$static, initDim(Ljava_lang_String_2_classLit, $intern_4, 2, 0, 4, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.string += ', ' , sb);
    $append_3(sb, escapeValue(key));
    sb.string += ':';
    $append_2(sb, $get_0(this$static, key));
  }
  sb.string += '}';
  return sb.string;
}

function JSONObject(){
  JSONObject_0.call(this, {});
}

function JSONObject_0(jsValue){
  this.jsObject = jsValue;
}

function unwrap_3(value_0){
  return value_0.jsObject;
}

defineClass(75, 666, {75:1}, JSONObject, JSONObject_0);
_.equals$ = function equals_3(other){
  if (!instanceOf(other, 75)) {
    return false;
  }
  return this.jsObject == dynamicCast(other, 75).jsObject;
}
;
_.getUnwrapper = function getUnwrapper_3(){
  return unwrap_3;
}
;
_.hashCode$ = function hashCode_5(){
  return getHashCode(this.jsObject);
}
;
_.isObject = function isObject_0(){
  return this;
}
;
_.toString$ = function toString_10(){
  return $toString_0(this);
}
;
var Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject', 75);
function $clinit_JSONParser(){
  $clinit_JSONParser = emptyMethod;
  typeMap = {'boolean':createBoolean, number:createNumber, string:createString, object:createObject, 'function':createObject, undefined:createUndefined};
}

function createBoolean(v){
  return $clinit_JSONBoolean() , v?TRUE:FALSE;
}

function createNumber(v){
  return new JSONNumber(v);
}

function createObject(o){
  if (!o) {
    return $clinit_JSONNull() , instance_0;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new JSONArray(o);
  }
   else {
    return new JSONObject_0(o);
  }
}

function createString(v){
  return new JSONString(v);
}

function createUndefined(){
  return null;
}

function evaluate(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
   else {
    json = escapeJsonForEval(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
  var func = typeMap[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function parse_0(jsonString){
  $clinit_JSONParser();
  var ex;
  if (jsonString == null) {
    throw new NullPointerException;
  }
  if (jsonString.length == 0) {
    throw new IllegalArgumentException_0('empty argument');
  }
  try {
    return evaluate(jsonString, true);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 92)) {
      ex = $e0;
      throw new JSONException_0(ex);
    }
     else 
      throw unwrap_5($e0);
  }
}

function throwJSONException(message){
  throw new JSONException(message);
}

function throwUnknownTypeException(typeString){
  $clinit_JSONParser();
  throw new JSONException("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}

var typeMap;
function JSONString(value_0){
  if (value_0 == null) {
    throw new NullPointerException;
  }
  this.value_0 = value_0;
}

function unwrap_4(value_0){
  return value_0.value_0;
}

defineClass(170, 666, {170:1}, JSONString);
_.equals$ = function equals_4(other){
  if (!instanceOf(other, 170)) {
    return false;
  }
  return $equals_0(this.value_0, dynamicCast(other, 170).value_0);
}
;
_.getUnwrapper = function getUnwrapper_4(){
  return unwrap_4;
}
;
_.hashCode$ = function hashCode_6(){
  return getHashCode_0(this.value_0);
}
;
_.isString = function isString_0(){
  return this;
}
;
_.toString$ = function toString_11(){
  return escapeValue(this.value_0);
}
;
var Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client', 'JSONString', 170);
function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap_5(e){
  var jse;
  if (instanceOf(e, 92)) {
    jse = dynamicCast(e, 92);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 11)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create_1(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_14;
  a1 = value_0 >> 22 & $intern_14;
  a2 = value_0 < 0?$intern_15:0;
  return create0(a0, a1, a2);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_16 + a.h * $intern_17;
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result, neg0, neg1, neg2;
  if (isNaN(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_18) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_17) {
    a2 = round_int(value_0 / $intern_17);
    value_0 -= a2 * $intern_17;
  }
  a1 = 0;
  if (value_0 >= $intern_16) {
    a1 = round_int(value_0 / $intern_16);
    value_0 -= a1 * $intern_16;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && (neg0 = ~result.l + 1 & $intern_14 , neg1 = ~result.m + (neg0 == 0?1:0) & $intern_14 , neg2 = ~result.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_15 , result.l = neg0 , result.m = neg1 , result.h = neg2 , undefined);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_4, 681, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create_1(value_0));
    return result;
  }
  return create_1(value_0);
}

function gte(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_15;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return {l:res0 & $intern_14, m:res1 & $intern_14, h:res2 & $intern_15};
}

function toDouble(a){
  var neg0, neg1, neg2;
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_18;
  }
  if (!gte(a, ZERO)) {
    return -toDoubleHelper((neg0 = ~a.l + 1 & $intern_14 , neg1 = ~a.m + (neg0 == 0?1:0) & $intern_14 , neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_15 , create0(neg0, neg1, neg2)));
  }
  return a.l + a.m * $intern_16 + a.h * $intern_17;
}

function toInt(a){
  return a.l | a.m << 22;
}

function xor(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_14, $intern_14, 524287);
  MIN_VALUE = create0(0, 0, $intern_19);
  fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad();
  $onModuleLoad_0();
}

function $adjustHorizontalConstraints(this$static, parentWidth, l){
  var leftPx, rightPx, widthPx;
  leftPx = l.left_0 * $getUnitSize(this$static, l.leftUnit, false);
  rightPx = l.right * $getUnitSize(this$static, l.rightUnit, false);
  widthPx = l.width_0 * $getUnitSize(this$static, l.widthUnit, false);
  if (l.setLeft && !l.setTargetLeft) {
    l.setLeft = false;
    if (l.setWidth) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
   else if (l.setWidth && !l.setTargetWidth) {
    l.setWidth = false;
    if (l.setLeft) {
      l.setTargetRight = true;
      l.sourceRight = (parentWidth - (leftPx + widthPx)) / $getUnitSize(this$static, l.targetRightUnit, false);
    }
     else {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
  }
   else if (l.setRight && !l.setTargetRight) {
    l.setRight = false;
    if (l.setWidth) {
      l.setTargetLeft = true;
      l.sourceLeft = (parentWidth - (rightPx + widthPx)) / $getUnitSize(this$static, l.targetLeftUnit, false);
    }
     else {
      l.setTargetWidth = true;
      l.sourceWidth = (parentWidth - (leftPx + rightPx)) / $getUnitSize(this$static, l.targetWidthUnit, false);
    }
  }
  l.setLeft = l.setTargetLeft;
  l.setRight = l.setTargetRight;
  l.setWidth = l.setTargetWidth;
  l.leftUnit = l.targetLeftUnit;
  l.rightUnit = l.targetRightUnit;
  l.widthUnit = l.targetWidthUnit;
}

function $adjustVerticalConstraints(this$static, parentHeight, l){
  var bottomPx, heightPx, topPx;
  topPx = l.top_0 * $getUnitSize(this$static, l.topUnit, true);
  bottomPx = l.bottom * $getUnitSize(this$static, l.bottomUnit, true);
  heightPx = l.height * $getUnitSize(this$static, l.heightUnit, true);
  if (l.setTop && !l.setTargetTop) {
    l.setTop = false;
    if (l.setHeight) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
   else if (l.setHeight && !l.setTargetHeight) {
    l.setHeight = false;
    if (l.setTop) {
      l.setTargetBottom = true;
      l.sourceBottom = (parentHeight - (topPx + heightPx)) / $getUnitSize(this$static, l.targetBottomUnit, true);
    }
     else {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
  }
   else if (l.setBottom && !l.setTargetBottom) {
    l.setBottom = false;
    if (l.setHeight) {
      l.setTargetTop = true;
      l.sourceTop = (parentHeight - (bottomPx + heightPx)) / $getUnitSize(this$static, l.targetTopUnit, true);
    }
     else {
      l.setTargetHeight = true;
      l.sourceHeight = (parentHeight - (topPx + bottomPx)) / $getUnitSize(this$static, l.targetHeightUnit, true);
    }
  }
  l.setTop = l.setTargetTop;
  l.setBottom = l.setTargetBottom;
  l.setHeight = l.setTargetHeight;
  l.topUnit = l.targetTopUnit;
  l.bottomUnit = l.targetBottomUnit;
  l.heightUnit = l.targetHeightUnit;
}

function $attachChild(this$static, child){
  var container, layer;
  container = $attachChild_0(this$static.parentElem, child);
  layer = new Layout$Layer(container, child);
  $add_9(this$static.layers, layer);
  return layer;
}

function $getUnitSize(this$static, unit, vertical){
  return $getUnitSizeInPixels(this$static.impl, this$static.parentElem, unit, vertical);
}

function $layout(this$static, duration){
  var l, l$iterator, l$iterator0, parentHeight, parentWidth;
  !!this$static.animation && $cancel(this$static.animation);
  if (duration == 0) {
    for (l$iterator0 = new AbstractList$IteratorImpl(this$static.layers); l$iterator0.i < l$iterator0.this$01_0.size_1();) {
      l = (checkCriticalElement(l$iterator0.i < l$iterator0.this$01_0.size_1()) , dynamicCast(l$iterator0.this$01_0.get_0(l$iterator0.last = l$iterator0.i++), 159));
      l.left_0 = l.sourceLeft = l.targetLeft;
      l.top_0 = l.sourceTop = l.targetTop;
      l.right = l.sourceRight = l.targetRight;
      l.bottom = l.sourceBottom = l.targetBottom;
      l.width_0 = l.sourceWidth = l.targetWidth;
      l.height = l.sourceHeight = l.targetHeight;
      l.setLeft = l.setTargetLeft;
      l.setTop = l.setTargetTop;
      l.setRight = l.setTargetRight;
      l.setBottom = l.setTargetBottom;
      l.setWidth = l.setTargetWidth;
      l.setHeight = l.setTargetHeight;
      l.leftUnit = l.targetLeftUnit;
      l.topUnit = l.targetTopUnit;
      l.rightUnit = l.targetRightUnit;
      l.bottomUnit = l.targetBottomUnit;
      l.widthUnit = l.targetWidthUnit;
      l.heightUnit = l.targetHeightUnit;
      $layout_0(this$static.impl, l);
    }
    return;
  }
  parentWidth = this$static.parentElem.clientWidth | 0;
  parentHeight = this$static.parentElem.clientHeight | 0;
  for (l$iterator = new AbstractList$IteratorImpl(this$static.layers); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_0(l$iterator.last = l$iterator.i++), 159));
    $adjustHorizontalConstraints(this$static, parentWidth, l);
    $adjustVerticalConstraints(this$static, parentHeight, l);
  }
  this$static.animation = new Layout$1(this$static);
  $run_0(this$static.animation, duration, this$static.parentElem);
}

function $removeChild_0(this$static, layer){
  $removeChild_1(layer.container, layer.child);
  $remove_12(this$static.layers, layer);
}

function Layout(parent_0){
  this.impl = new LayoutImplIE8;
  this.layers = new ArrayList;
  this.parentElem = parent_0;
  $initParent(this.impl, parent_0);
}

defineClass(344, 1, {}, Layout);
var Lcom_google_gwt_layout_client_Layout_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout', 344);
function Layout$1(this$0){
  this.this$01 = this$0;
  Animation.call(this);
}

defineClass(345, 215, {}, Layout$1);
_.onCancel = function onCancel_0(){
  this.this$01.animation = null;
  $layout(this.this$01, 0);
}
;
_.onComplete = function onComplete_0(){
  this.this$01.animation = null;
  $layout(this.this$01, 0);
}
;
_.onUpdate = function onUpdate(progress){
  var l, l$iterator;
  for (l$iterator = new AbstractList$IteratorImpl(this.this$01.layers); l$iterator.i < l$iterator.this$01_0.size_1();) {
    l = (checkCriticalElement(l$iterator.i < l$iterator.this$01_0.size_1()) , dynamicCast(l$iterator.this$01_0.get_0(l$iterator.last = l$iterator.i++), 159));
    l.setTargetLeft && (l.left_0 = l.sourceLeft + (l.targetLeft - l.sourceLeft) * progress);
    l.setTargetRight && (l.right = l.sourceRight + (l.targetRight - l.sourceRight) * progress);
    l.setTargetTop && (l.top_0 = l.sourceTop + (l.targetTop - l.sourceTop) * progress);
    l.setTargetBottom && (l.bottom = l.sourceBottom + (l.targetBottom - l.sourceBottom) * progress);
    l.setTargetWidth && (l.width_0 = l.sourceWidth + (l.targetWidth - l.sourceWidth) * progress);
    l.setTargetHeight && (l.height = l.sourceHeight + (l.targetHeight - l.sourceHeight) * progress);
    $layout_0(this.this$01.impl, l);
  }
}
;
var Lcom_google_gwt_layout_client_Layout$1_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/1', 345);
function Layout$Layer(container, child){
  this.targetLeftUnit = ($clinit_Style$Unit() , PX);
  this.targetTopUnit = PX;
  this.targetRightUnit = PX;
  this.targetBottomUnit = PX;
  this.container = container;
  this.child = child;
}

defineClass(159, 1, {159:1}, Layout$Layer);
_.bottom = 0;
_.height = 0;
_.left_0 = 0;
_.right = 0;
_.setBottom = false;
_.setHeight = false;
_.setLeft = false;
_.setRight = false;
_.setTargetBottom = true;
_.setTargetHeight = false;
_.setTargetLeft = true;
_.setTargetRight = true;
_.setTargetTop = true;
_.setTargetWidth = false;
_.setTop = false;
_.setWidth = false;
_.sourceBottom = 0;
_.sourceHeight = 0;
_.sourceLeft = 0;
_.sourceRight = 0;
_.sourceTop = 0;
_.sourceWidth = 0;
_.targetBottom = 0;
_.targetHeight = 0;
_.targetLeft = 0;
_.targetRight = 0;
_.targetTop = 0;
_.targetWidth = 0;
_.top_0 = 0;
_.visible = true;
_.width_0 = 0;
var Lcom_google_gwt_layout_client_Layout$Layer_2_classLit = createForClass('com.google.gwt.layout.client', 'Layout/Layer', 159);
function $clinit_LayoutImpl(){
  $clinit_LayoutImpl = emptyMethod;
  fixedRuler = createRuler(($clinit_Style$Unit() , CM), CM);
  $appendChild($doc.body, fixedRuler);
}

function $attachChild_0(parent_0, child){
  var container;
  container = $createElement($doc, 'div');
  container.appendChild(child);
  $setPropertyImpl(container.style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(container.style, 'overflow', ($clinit_Style$Overflow() , 'hidden'));
  $fillParent(child);
  parent_0.insertBefore(container, null);
  return container;
}

function $fillParent(elem){
  var style;
  style = elem.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
  $setPropertyImpl(style, 'top', '0.0px');
  $setPropertyImpl(style, 'right', '0.0px');
  $setPropertyImpl(style, 'bottom', '0.0px');
}

function $getUnitSizeInPixels(this$static, parent_0, unit, vertical){
  if (!unit) {
    return 1;
  }
  switch (unit.ordinal) {
    case 1:
      return (vertical?parent_0.clientHeight | 0:parent_0.clientWidth | 0) / 100;
    case 2:
      return ($getSubPixelOffsetWidth(this$static.relativeRuler) | 0) / 10;
    case 3:
      return ((this$static.relativeRuler.offsetHeight || 0) | 0) / 10;
    case 7:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.1;
    case 8:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.01;
    case 6:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.254;
    case 4:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.00353;
    case 5:
      return ($getSubPixelOffsetWidth(fixedRuler) | 0) * 0.0423;
    default:case 0:
      return 1;
  }
}

function $initParent(this$static, parent_0){
  $setPropertyImpl(parent_0.style, 'position', ($clinit_Style$Position() , 'relative'));
  $appendChild(parent_0, this$static.relativeRuler = createRuler(($clinit_Style$Unit() , EM), EX));
}

function $removeChild_1(container, child){
  var style;
  $removeFromParent(container);
  $getParentElement(child) == container && $removeFromParent(child);
  style = child.style;
  $setPropertyImpl(style, 'position', '');
  $setPropertyImpl(style, 'left', '');
  $setPropertyImpl(style, 'top', '');
  $setPropertyImpl(style, 'width', '');
  $setPropertyImpl(style, 'height', '');
}

function createRuler(widthUnit, heightUnit){
  var ruler, style;
  ruler = $createElement($doc, 'div');
  $setInnerHTML(ruler, '&nbsp;');
  style = ruler.style;
  $setPropertyImpl(style, 'position', ($clinit_Style$Position() , 'absolute'));
  $setPropertyImpl(style, 'zIndex', '-32767');
  $setPropertyImpl(style, 'top', -20 + heightUnit.getType());
  $setPropertyImpl(style, 'width', 10 + widthUnit.getType());
  $setPropertyImpl(style, 'height', 10 + heightUnit.getType());
  $setPropertyImpl(style, 'visibility', ($clinit_Style$Visibility() , 'hidden'));
  $set(($clinit_State() , HIDDEN), ruler, initValues(getClassLiteralForArray(Ljava_lang_Boolean_2_classLit, 1), $intern_4, 130, 0, [($clinit_Boolean() , $clinit_Boolean() , TRUE_0)]));
  return ruler;
}

defineClass(653, 1, {});
var fixedRuler;
var Lcom_google_gwt_layout_client_LayoutImpl_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImpl', 653);
function $layout_0(this$static, layer){
  var oldDisplay, style;
  style = layer.container.style;
  setLayer(layer.container, layer);
  if (layer.visible) {
    oldDisplay = style['display'];
    $setPropertyImpl(style, 'display', '');
    oldDisplay.length > 0 && $updateVisibility(this$static, layer.container);
  }
   else {
    $setPropertyImpl(style, 'display', ($clinit_Style$Display() , 'none'));
  }
  layer.setLeft?$setValue(this$static, layer, 'left', layer.left_0, layer.leftUnit, false, false):$setPropertyImpl(style, 'left', '');
  layer.setRight?$setValue(this$static, layer, 'right', layer.right, layer.rightUnit, false, false):$setPropertyImpl(style, 'right', '');
  layer.setTop?$setValue(this$static, layer, 'top', layer.top_0, layer.topUnit, true, false):$setPropertyImpl(style, 'top', '');
  layer.setBottom?$setValue(this$static, layer, 'bottom', layer.bottom, layer.bottomUnit, true, false):$setPropertyImpl(style, 'bottom', '');
  layer.setWidth?$setValue(this$static, layer, 'width', layer.width_0, layer.widthUnit, false, true):$setPropertyImpl(style, 'width', '');
  layer.setHeight?$setValue(this$static, layer, 'height', layer.height, layer.heightUnit, true, true):$setPropertyImpl(style, 'height', '');
  style = layer.child.style;
  switch (2) {
    case 2:
      $setPropertyImpl(style, 'left', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'right', '0.0px');
  }
  switch (2) {
    case 2:
      $setPropertyImpl(style, 'top', ($clinit_Style$Unit() , '0.0px'));
      $setPropertyImpl(style, 'bottom', '0.0px');
  }
}

function $removeLayerRefs(parent_0){
  for (var i = 0; i < parent_0.childNodes.length; ++i) {
    var container = parent_0.childNodes[i];
    container.__layer && (container.__layer = null);
  }
}

function $setValue(this$static, layer, prop, value_0, unit, vertical, noNegative){
  switch (unit.ordinal) {
    case 0:
    case 1:
      break;
    default:value_0 = value_0 * $getUnitSizeInPixels(this$static, layer.container, unit, vertical);
      value_0 = round_int(value_0 + 0.5);
      $clinit_Style$Unit();
  }
  noNegative && value_0 < 0 && (value_0 = 0);
  $setPropertyImpl(layer.container.style, prop, value_0 + 'px');
}

function $updateVisibility(this$static, container){
  var i, layer, node, nodes;
  layer = container.__layer;
  !!layer && $layout_0(this$static, layer);
  nodes = container.childNodes;
  for (i = 0; i < nodes.length; ++i) {
    node = nodes[i];
    node.nodeType == 1 && $updateVisibility(this$static, node);
  }
}

function LayoutImplIE8(){
  $clinit_LayoutImpl();
}

function setLayer(container, layer){
  container.__layer = layer;
}

defineClass(358, 653, {}, LayoutImplIE8);
var Lcom_google_gwt_layout_client_LayoutImplIE8_2_classLit = createForClass('com.google.gwt.layout.client', 'LayoutImplIE8', 358);
function $replace(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function ImageResourcePrototype(url_0){
  this.left_0 = 0;
  this.top_0 = 0;
  this.height = 7;
  this.width_0 = 7;
  this.url_0 = url_0;
}

defineClass(560, 1, {}, ImageResourcePrototype);
_.height = 0;
_.left_0 = 0;
_.top_0 = 0;
_.width_0 = 0;
var Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl', 'ImageResourcePrototype', 560);
function $append(this$static, styles){
  $append_3(this$static.sb, styles.css);
  return this$static;
}

function SafeStylesBuilder(){
  this.sb = new StringBuilder;
}

defineClass(562, 1, {}, SafeStylesBuilder);
var Lcom_google_gwt_safecss_shared_SafeStylesBuilder_2_classLit = createForClass('com.google.gwt.safecss.shared', 'SafeStylesBuilder', 562);
function SafeStylesString(css){
  verifySafeStylesConstraints(css);
  this.css = css;
}

defineClass(123, 1, {627:1, 123:1, 3:1}, SafeStylesString);
_.equals$ = function equals_5(obj){
  if (!instanceOf(obj, 627)) {
    return false;
  }
  return $equals_0(this.css, dynamicCast(dynamicCast(obj, 627), 123).css);
}
;
_.hashCode$ = function hashCode_7(){
  return getHashCode_0(this.css);
}
;
var Lcom_google_gwt_safecss_shared_SafeStylesString_2_classLit = createForClass('com.google.gwt.safecss.shared', 'SafeStylesString', 123);
function verifySafeStylesConstraints(styles){
  if (styles == null) {
    throw new NullPointerException_0('css is null');
  }
}

function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw new NullPointerException_0('html is null');
  }
  this.html = html;
}

defineClass(72, 1, $intern_20, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.asString = function asString(){
  return this.html;
}
;
_.equals$ = function equals_6(obj){
  if (!instanceOf(obj, 201)) {
    return false;
  }
  return $equals_0(this.html, dynamicCast(obj, 201).asString());
}
;
_.hashCode$ = function hashCode_8(){
  return getHashCode_0(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 72);
function $append_0(this$static, html){
  $append_3(this$static.sb, html.html);
  return this$static;
}

function SafeHtmlBuilder(){
  this.sb = new StringBuilder;
}

defineClass(550, 1, {}, SafeHtmlBuilder);
var Lcom_google_gwt_safehtml_shared_SafeHtmlBuilder_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlBuilder', 550);
function SafeHtmlString(html){
  if (html == null) {
    throw new NullPointerException_0('html is null');
  }
  this.html = html;
}

defineClass(254, 1, $intern_20, SafeHtmlString);
_.asString = function asString_0(){
  return this.html;
}
;
_.equals$ = function equals_7(obj){
  if (!instanceOf(obj, 201)) {
    return false;
  }
  return $equals_0(this.html, dynamicCast(obj, 201).asString());
}
;
_.hashCode$ = function hashCode_9(){
  return getHashCode_0(this.html);
}
;
_.toString$ = function toString_12(){
  return 'safe: "' + this.html + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 254);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  new SafeHtmlString('');
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  s.indexOf('&') != -1 && (s = $replace(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, GT_RE, LT_RE, QUOT_RE, SQUOT_RE;
function SafeUriString(uri_0){
  if (uri_0 == null) {
    throw new NullPointerException_0('uri is null');
  }
  this.uri_0 = uri_0;
}

defineClass(102, 1, {626:1, 102:1}, SafeUriString);
_.equals$ = function equals_8(obj){
  if (!instanceOf(obj, 626)) {
    return false;
  }
  return $equals_0(this.uri_0, dynamicCast(dynamicCast(obj, 626), 102).uri_0);
}
;
_.hashCode$ = function hashCode_10(){
  return getHashCode_0(this.uri_0);
}
;
var Lcom_google_gwt_safehtml_shared_SafeUriString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeUriString', 102);
function $clinit_UriUtils(){
  $clinit_UriUtils = emptyMethod;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

defineClass(662, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 662);
function PassthroughParser(){
}

defineClass(528, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 528);
function PassthroughRenderer(){
}

defineClass(527, 662, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 527);
function $calcNewVelocity(initialVelocity, decelFactor, oldVelocity, minDecel){
  var maxVelocityX, minVelocityX, newVelocity;
  newVelocity = initialVelocity * decelFactor;
  if (oldVelocity >= 0) {
    maxVelocityX = 0 > oldVelocity - minDecel?0:oldVelocity - minDecel;
    newVelocity = newVelocity < maxVelocityX?newVelocity:maxVelocityX;
  }
   else {
    minVelocityX = 0 < oldVelocity + minDecel?0:oldVelocity + minDecel;
    newVelocity = newVelocity > minVelocityX?newVelocity:minVelocityX;
  }
  return newVelocity;
}

function $updateState(state){
  var decelFactor, dist, elapsedMillis, ellapsedMillis, initialVelocity, minDecel, newVelocity, newVelocityX, newVelocityY, oldVelocity, position, totalEllapsedMillis;
  ellapsedMillis = state.elapsedMillis;
  totalEllapsedMillis = state.cumulativeElapsedMillis;
  initialVelocity = state.initialVelocity;
  oldVelocity = state.velocity;
  decelFactor = Math.pow(0.9993, totalEllapsedMillis);
  minDecel = ellapsedMillis * 5.0E-4;
  newVelocityX = $calcNewVelocity(initialVelocity.x_0, decelFactor, oldVelocity.x_0, minDecel);
  newVelocityY = $calcNewVelocity(initialVelocity.y_0, decelFactor, oldVelocity.y_0, minDecel);
  newVelocity = new Point(newVelocityX, newVelocityY);
  state.velocity = newVelocity;
  elapsedMillis = state.elapsedMillis;
  dist = $mult(newVelocity, new Point(elapsedMillis, elapsedMillis));
  position = state.position;
  $setPosition(state, new Point(position.x_0 + dist.x_0, position.y_0 + dist.y_0));
  if (abs_0(newVelocity.x_0) < 0.02 && abs_0(newVelocity.y_0) < 0.02) {
    return false;
  }
  return true;
}

function DefaultMomentum(){
}

defineClass(546, 1, {}, DefaultMomentum);
var Lcom_google_gwt_touch_client_DefaultMomentum_2_classLit = createForClass('com.google.gwt.touch.client', 'DefaultMomentum', 546);
function $setCumulativeElapsedMillis(this$static, cumulativeElapsedMillis){
  this$static.cumulativeElapsedMillis = cumulativeElapsedMillis;
}

function $setElapsedMillis(this$static, elapsedMillis){
  this$static.elapsedMillis = elapsedMillis;
}

function $setPosition(this$static, position){
  this$static.position = position;
}

function Momentum$State(initialPosition, initialVelocity){
  this.initialVelocity = initialVelocity;
  this.position = new Point_0(initialPosition);
  this.velocity = new Point_0(initialVelocity);
}

defineClass(547, 1, {}, Momentum$State);
_.cumulativeElapsedMillis = 0;
_.elapsedMillis = 0;
var Lcom_google_gwt_touch_client_Momentum$State_2_classLit = createForClass('com.google.gwt.touch.client', 'Momentum/State', 547);
function $minus(this$static, c){
  return new Point(this$static.x_0 - c.x_0, this$static.y_0 - c.y_0);
}

function $mult(this$static, c){
  return new Point(this$static.x_0 * c.x_0, this$static.y_0 * c.y_0);
}

function $plus(this$static, c){
  return new Point(this$static.x_0 + c.x_0, this$static.y_0 + c.y_0);
}

function Point(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

function Point_0(c){
  Point.call(this, c.x_0, c.y_0);
}

defineClass(77, 1, {77:1}, Point, Point_0);
_.equals$ = function equals_9(obj){
  var c;
  if (!instanceOf(obj, 77)) {
    return false;
  }
  c = dynamicCast(obj, 77);
  return this.x_0 == c.x_0 && this.y_0 == c.y_0;
}
;
_.hashCode$ = function hashCode_11(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString$ = function toString_13(){
  return 'Point(' + this.x_0 + ',' + this.y_0 + ')';
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lcom_google_gwt_touch_client_Point_2_classLit = createForClass('com.google.gwt.touch.client', 'Point', 77);
function $calculateEndVelocity(from, to){
  var dist, time;
  time = to.time - from.time;
  if (time <= 0) {
    return null;
  }
  dist = $minus(from.point, to.point);
  return new Point(dist.x_0 / time, dist.y_0 / time);
}

function $cancelAll(this$static){
  this$static.touching = false;
  this$static.dragging = false;
  this$static.momentumCommand = null;
}

function $getTouchFromEvent(event_0){
  var touches;
  touches = event_0.nativeEvent.touches;
  return touches.length > 0?touches[0]:null;
}

function $getWidgetScrollPosition(this$static){
  return new Point($getScrollLeft(this$static.widget.scrollableElem), (this$static.widget.scrollableElem.scrollTop || 0) | 0);
}

function $hitTest(point1, point2){
  var absDiffX, absDiffY, diff;
  diff = new Point(point1.x_0 - point2.x_0, point1.y_0 - point2.y_0);
  absDiffX = abs_0(diff.x_0);
  absDiffY = abs_0(diff.y_0);
  return absDiffX <= 25 && absDiffY <= 25;
}

function $isClickScrollTriggeringTouch(this$static, clickPoint){
  if (this$static.recentScrollTriggeringTouchPosition.point) {
    return $hitTest(clickPoint, this$static.recentScrollTriggeringTouchPosition.point);
  }
  return false;
}

function $isClickTouchPositionDuringMomentum(this$static, clickPoint){
  var currentTime, point, point$iterator, same;
  currentTime = now_1();
  same = false;
  for (point$iterator = new AbstractList$IteratorImpl(this$static.touchPositionsDuringMomentum); point$iterator.i < point$iterator.this$01_0.size_1();) {
    point = (checkCriticalElement(point$iterator.i < point$iterator.this$01_0.size_1()) , dynamicCast(point$iterator.this$01_0.get_0(point$iterator.last = point$iterator.i++), 117));
    if (currentTime - point.time <= 2500 && $hitTest(clickPoint, point.point)) {
      same = true;
      break;
    }
  }
  return same;
}

function $onDragEnd(this$static){
  var endVelocity;
  if (!this$static.momentum) {
    return;
  }
  endVelocity = $calculateEndVelocity(this$static.recentTouchPosition, this$static.lastTouchPosition);
  if (endVelocity) {
    this$static.momentumCommand = new TouchScroller$MomentumCommand(this$static, endVelocity);
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumCommand), 16);
  }
}

function $onTouchEnd(this$static){
  if (!this$static.touching) {
    return;
  }
  this$static.touching = false;
  if (this$static.dragging) {
    this$static.dragging = false;
    $onDragEnd(this$static);
  }
}

function $onTouchMove(this$static, event_0){
  var absDiffX, absDiffY, diff, hMax, hMin, hPosition, touch, touchPoint, touchTime, trackingTime, vMax, vPosition, diff_0, curScrollPosition;
  if (!this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  touchPoint = new Point($touchGetSubPixelPageX(touch) | 0, $touchGetSubPixelPageY(touch) | 0);
  touchTime = now_1();
  $setTemporalPoint(this$static.lastTouchPosition, touchPoint, touchTime);
  if (!this$static.dragging) {
    diff = $minus(touchPoint, this$static.startTouchPosition);
    absDiffX = abs_0(diff.x_0);
    absDiffY = abs_0(diff.y_0);
    if (absDiffX > 5 || absDiffY > 5) {
      $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, this$static.recentTouchPosition.point, this$static.recentTouchPosition.time);
      if (absDiffX > absDiffY) {
        hPosition = $getScrollLeft(this$static.widget.scrollableElem);
        hMin = $getMinimumHorizontalScrollPosition_0(this$static.widget);
        hMax = $getMaximumHorizontalScrollPosition_0(this$static.widget);
        if (diff.x_0 < 0 && hMax <= hPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.x_0 > 0 && hMin >= hPosition) {
          $cancelAll(this$static);
          return;
        }
      }
       else {
        vPosition = (this$static.widget.scrollableElem.scrollTop || 0) | 0;
        vMax = $getMaximumVerticalScrollPosition(this$static.widget);
        if (diff.y_0 < 0 && vMax <= vPosition) {
          $cancelAll(this$static);
          return;
        }
         else if (diff.y_0 > 0 && 0 >= vPosition) {
          $cancelAll(this$static);
          return;
        }
      }
      this$static.dragging = true;
    }
  }
  $eventPreventDefault(event_0.nativeEvent);
  if (this$static.dragging) {
    diff_0 = $minus(this$static.startTouchPosition, this$static.lastTouchPosition.point);
    curScrollPosition = $plus(this$static.startScrollPosition, diff_0);
    $setHorizontalScrollPosition(this$static.widget, round_int(curScrollPosition.x_0));
    $setVerticalScrollPosition(this$static.widget, round_int(curScrollPosition.y_0));
    trackingTime = touchTime - this$static.recentTouchPosition.time;
    if (trackingTime > 200 && !!this$static.recentTouchPositionOnDeck) {
      $setTemporalPoint(this$static.recentTouchPosition, this$static.recentTouchPositionOnDeck.point, this$static.recentTouchPositionOnDeck.time);
      this$static.recentTouchPositionOnDeck = null;
    }
     else 
      trackingTime > 100 && !this$static.recentTouchPositionOnDeck && (this$static.recentTouchPositionOnDeck = new TouchScroller$TemporalPoint_0(touchPoint, touchTime));
  }
}

function $onTouchStart(this$static, event_0){
  var startTouchTime, touch;
  $setTemporalPoint(this$static.recentScrollTriggeringTouchPosition, null, 0);
  if (this$static.touching) {
    return;
  }
  touch = $getTouchFromEvent(event_0);
  this$static.startTouchPosition = new Point($touchGetSubPixelPageX(touch) | 0, $touchGetSubPixelPageY(touch) | 0);
  startTouchTime = now_1();
  $setTemporalPoint(this$static.recentTouchPosition, this$static.startTouchPosition, startTouchTime);
  $setTemporalPoint(this$static.lastTouchPosition, this$static.startTouchPosition, startTouchTime);
  this$static.recentTouchPositionOnDeck = null;
  if (this$static.momentumCommand) {
    $add_9(this$static.touchPositionsDuringMomentum, new TouchScroller$TemporalPoint_0(this$static.startTouchPosition, startTouchTime));
    scheduleFixedDelayImpl(($clinit_SchedulerImpl() , this$static.momentumTouchRemovalCommand), 2500);
  }
  this$static.startScrollPosition = new Point($getScrollLeft(this$static.widget.scrollableElem), (this$static.widget.scrollableElem.scrollTop || 0) | 0);
  $cancelAll(this$static);
  this$static.touching = true;
}

function $removeAttachHandler(this$static){
  if (this$static.attachHandlerReg) {
    $removeHandler(this$static.attachHandlerReg.real);
    this$static.attachHandlerReg = null;
  }
}

function $removeBustClickHandler(this$static){
  if (this$static.bustClickHandlerReg) {
    $removeHandler(this$static.bustClickHandlerReg.real);
    this$static.bustClickHandlerReg = null;
  }
}

function $setMomentum(this$static, momentum){
  this$static.momentum = momentum;
}

function $setTargetWidget(this$static, widget){
  var reg, reg$iterator;
  if (this$static.widget == widget) {
    return;
  }
  $cancelAll(this$static);
  for (reg$iterator = new AbstractList$IteratorImpl(this$static.handlerRegs); reg$iterator.i < reg$iterator.this$01_0.size_1();) {
    reg = (checkCriticalElement(reg$iterator.i < reg$iterator.this$01_0.size_1()) , dynamicCast(reg$iterator.this$01_0.get_0(reg$iterator.last = reg$iterator.i++), 670));
    $removeHandler(reg.real);
  }
  this$static.handlerRegs.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
  $removeAttachHandler(this$static);
  $removeBustClickHandler(this$static);
  this$static.widget = widget;
  widget.attached && ($removeBustClickHandler(this$static) , this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6(this$static)));
  this$static.attachHandlerReg = $addHandler_1(widget, new TouchScroller$1(this$static), (!TYPE_5 && (TYPE_5 = new GwtEvent$Type) , TYPE_5));
  $add_9(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$2(this$static), ($clinit_TouchStartEvent() , $clinit_TouchStartEvent() , TYPE_4)));
  $add_9(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$3(this$static), ($clinit_TouchMoveEvent() , $clinit_TouchMoveEvent() , TYPE_3)));
  $add_9(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$4(this$static), ($clinit_TouchEndEvent() , $clinit_TouchEndEvent() , TYPE_2)));
  $add_9(this$static.handlerRegs, $addDomHandler(widget, new TouchScroller$5(this$static), ($clinit_TouchCancelEvent() , $clinit_TouchCancelEvent() , TYPE_1)));
}

function $setWidgetScrollPosition(this$static, position){
  $setHorizontalScrollPosition(this$static.widget, round_int(position.x_0));
  $setVerticalScrollPosition(this$static.widget, round_int(position.y_0));
}

function $setupBustClickHandler(this$static){
  $removeBustClickHandler(this$static);
  this$static.bustClickHandlerReg = addNativePreviewHandler(new TouchScroller$6(this$static));
}

function TouchScroller(){
  this.handlerRegs = new ArrayList;
  this.lastTouchPosition = new TouchScroller$TemporalPoint;
  this.recentTouchPosition = new TouchScroller$TemporalPoint;
  this.recentScrollTriggeringTouchPosition = new TouchScroller$TemporalPoint;
  this.touchPositionsDuringMomentum = new ArrayList;
  this.momentumTouchRemovalCommand = new TouchScroller$MomentumTouchRemovalCommand(this);
  $setMomentum(this, new DefaultMomentum);
}

defineClass(530, 1, {}, TouchScroller);
_.dragging = false;
_.touching = false;
var isSupported;
var Lcom_google_gwt_touch_client_TouchScroller_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller', 530);
function TouchScroller$1(this$0){
  this.this$01 = this$0;
}

defineClass(534, 1, {671:1, 7:1}, TouchScroller$1);
var Lcom_google_gwt_touch_client_TouchScroller$1_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/1', 534);
function TouchScroller$2(this$0){
  this.this$01 = this$0;
}

defineClass(535, 1, {674:1, 7:1}, TouchScroller$2);
var Lcom_google_gwt_touch_client_TouchScroller$2_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/2', 535);
function TouchScroller$3(this$0){
  this.this$01 = this$0;
}

defineClass(536, 1, {675:1, 7:1}, TouchScroller$3);
var Lcom_google_gwt_touch_client_TouchScroller$3_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/3', 536);
function TouchScroller$4(this$0){
  this.this$01 = this$0;
}

defineClass(537, 1, {676:1, 7:1}, TouchScroller$4);
var Lcom_google_gwt_touch_client_TouchScroller$4_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/4', 537);
function TouchScroller$5(this$0){
  this.this$01 = this$0;
}

defineClass(538, 1, {677:1, 7:1}, TouchScroller$5);
var Lcom_google_gwt_touch_client_TouchScroller$5_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/5', 538);
function TouchScroller$6(this$0){
  this.this$01 = this$0;
}

defineClass(255, 1, $intern_21, TouchScroller$6);
_.onPreviewNativeEvent = function onPreviewNativeEvent(event_0){
  var clickPoint;
  if (1 == $eventGetTypeInt(event_0.nativeEvent.type)) {
    clickPoint = new Point($eventGetSubPixelClientX(event_0.nativeEvent) | 0, $eventGetSubPixelClientY(event_0.nativeEvent) | 0);
    if ($isClickScrollTriggeringTouch(this.this$01, clickPoint) || $isClickTouchPositionDuringMomentum(this.this$01, clickPoint)) {
      event_0.isCanceled = true;
      $eventStopPropagation(event_0.nativeEvent);
      $eventPreventDefault(event_0.nativeEvent);
    }
  }
}
;
var Lcom_google_gwt_touch_client_TouchScroller$6_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/6', 255);
function $finish(this$static){
  if (this$static.windowResizeHandler) {
    $removeHandler(this$static.windowResizeHandler.real);
    this$static.windowResizeHandler = null;
  }
  this$static == this$static.this$01.momentumCommand && (this$static.this$01.momentumCommand = null);
}

function TouchScroller$MomentumCommand(this$0, endVelocity){
  this.this$01 = this$0;
  this.duration = new Duration;
  this.initialPosition = $getWidgetScrollPosition(this.this$01);
  this.state = new Momentum$State(this.initialPosition, endVelocity);
  this.windowResizeHandler = addResizeHandler(new TouchScroller$MomentumCommand$1(this));
}

defineClass(531, 1, {}, TouchScroller$MomentumCommand);
_.execute_0 = function execute_4(){
  var cumulativeElapsedMillis, hMax, hMin, hPos, notDone, vMax, vPos;
  if (this != this.this$01.momentumCommand) {
    $finish(this);
    return false;
  }
  cumulativeElapsedMillis = $elapsedMillis(this.duration);
  $setElapsedMillis(this.state, cumulativeElapsedMillis - this.lastElapsedMillis);
  this.lastElapsedMillis = cumulativeElapsedMillis;
  $setCumulativeElapsedMillis(this.state, cumulativeElapsedMillis);
  notDone = $updateState(this.state);
  notDone || $finish(this);
  $setWidgetScrollPosition(this.this$01, this.state.position);
  hPos = round_int(this.state.position.x_0);
  hMin = $getMinimumHorizontalScrollPosition_0(this.this$01.widget);
  hMax = $getMaximumHorizontalScrollPosition_0(this.this$01.widget);
  vMax = $getMaximumVerticalScrollPosition(this.this$01.widget);
  vPos = round_int(this.state.position.y_0);
  if ((vMax <= vPos || 0 >= vPos) && (hMax <= hPos || hMin >= hPos)) {
    $finish(this);
    return false;
  }
  return notDone;
}
;
_.lastElapsedMillis = 0;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumCommand', 531);
function TouchScroller$MomentumCommand$1(this$1){
  this.this$11 = this$1;
}

defineClass(533, 1, $intern_22, TouchScroller$MomentumCommand$1);
_.onResize = function onResize(event_0){
  $finish(this.this$11);
}
;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumCommand$1_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumCommand/1', 533);
function TouchScroller$MomentumTouchRemovalCommand(this$0){
  this.this$01 = this$0;
}

defineClass(532, 1, {}, TouchScroller$MomentumTouchRemovalCommand);
_.execute_0 = function execute_5(){
  var currentTime, iter, point;
  currentTime = now_1();
  iter = new AbstractList$IteratorImpl(this.this$01.touchPositionsDuringMomentum);
  while (iter.i < iter.this$01_0.size_1()) {
    point = (checkCriticalElement(iter.i < iter.this$01_0.size_1()) , dynamicCast(iter.this$01_0.get_0(iter.last = iter.i++), 117));
    currentTime - point.time >= 2500 && (checkState(iter.last != -1) , iter.this$01_0.remove_2(iter.last) , iter.i = iter.last , iter.last = -1);
  }
  return this.this$01.touchPositionsDuringMomentum.array.length != 0;
}
;
var Lcom_google_gwt_touch_client_TouchScroller$MomentumTouchRemovalCommand_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/MomentumTouchRemovalCommand', 532);
function $setTemporalPoint(this$static, point, time){
  this$static.point = point;
  this$static.time = time;
}

function TouchScroller$TemporalPoint(){
}

function TouchScroller$TemporalPoint_0(point, time){
  this.point = point;
  this.time = time;
}

defineClass(117, 1, {117:1}, TouchScroller$TemporalPoint, TouchScroller$TemporalPoint_0);
_.time = 0;
var Lcom_google_gwt_touch_client_TouchScroller$TemporalPoint_2_classLit = createForClass('com.google.gwt.touch.client', 'TouchScroller/TemporalPoint', 117);
function $get_1(this$static){
  if (!this$static.element) {
    this$static.element = $getElementById($doc, this$static.domId);
    if (!this$static.element) {
      throw new RuntimeException_0('Cannot find element with id "' + this$static.domId + '". Perhaps it is not attached to the document body.');
    }
    $removeAttribute(this$static.element, 'id');
  }
  return this$static.element;
}

function LazyDomElement(domId){
  this.domId = domId;
}

defineClass(69, 1, {}, LazyDomElement);
var Lcom_google_gwt_uibinder_client_LazyDomElement_2_classLit = createForClass('com.google.gwt.uibinder.client', 'LazyDomElement', 69);
function attachToDom(element){
  var origParent, origSibling;
  ensureHiddenDiv();
  origParent = $getParentElement(element);
  origSibling = $getNextSiblingElement(element);
  $appendChild(hiddenDiv, element);
  return new UiBinderUtil$TempAttachment(origParent, origSibling, element);
}

function ensureHiddenDiv(){
  if (!hiddenDiv) {
    hiddenDiv = $createElement($doc, 'div');
    setVisible(hiddenDiv, false);
    $appendChild(getBodyElement(), hiddenDiv);
  }
}

function orphan(node){
  $removeChild(node.parentNode, node);
}

var hiddenDiv;
function UiBinderUtil$TempAttachment(origParent, origSibling, element){
  this.origParent = origParent;
  this.origSibling = origSibling;
  this.element = element;
}

defineClass(496, 1, {}, UiBinderUtil$TempAttachment);
var Lcom_google_gwt_uibinder_client_UiBinderUtil$TempAttachment_2_classLit = createForClass('com.google.gwt.uibinder.client', 'UiBinderUtil/TempAttachment', 496);
function dispatchEvent_1(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function insertChild(parent_0, child, index_0){
  $insertChild(parent_0, resolve(child), index_0);
}

function isPotential(o){
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function previewEvent(evt){
  var ret;
  ret = fire_4(handlers_0, evt);
  if (!ret && !!evt) {
    $eventStopPropagation(evt);
    $eventPreventDefault(evt);
  }
  return ret;
}

function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem.releaseCapture();
}

function resolve(maybePotential){
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  elem.setCapture();
}

function sinkEvents(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals_0(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals_0('CSS1Compat', allowedModes[0]) && $equals_0('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function addNativePreviewHandler(handler){
  $maybeInitializeEventSystem();
  !TYPE_9 && (TYPE_9 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler(handlers_0, TYPE_9, handler);
}

function sinkEvents_0(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var handlers_0;
function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire_4(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_9 && !!handlers && $isEventHandled(handlers, TYPE_9)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(352, 649, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_9(handler){
  dynamicCast(handler, 624).onPreviewNativeEvent(this);
  singleton.isFirstHandler = false;
}
;
_.getAssociatedType = function getAssociatedType_10(){
  return TYPE_9;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_9, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 352);
function $clinit_History(){
  $clinit_History = emptyMethod;
  new History$HistoryImplIE8;
  historyEventSource = new History$HistoryEventSource;
  token = getDecodedHash();
}

function addValueChangeHandler(handler){
  $clinit_History();
  return $addValueChangeHandler(historyEventSource, handler);
}

function getDecodedHash(){
  var hashToken, href_0, hashLoc;
  hashToken = (href_0 = $wnd.location.href , hashLoc = href_0.indexOf('#') , hashLoc > 0?href_0.substring(hashLoc):'');
  if (hashToken == null || !hashToken.length) {
    return '';
  }
  return $decodeHistoryToken(__substr(hashToken, 1, hashToken.length - 1));
}

function onHashChanged(){
  $clinit_History();
  var hashToken;
  hashToken = getDecodedHash();
  if (!$equals_0(hashToken, token)) {
    token = hashToken;
    fire_3(historyEventSource);
  }
}

var historyEventSource, token;
function $addValueChangeHandler(this$static, handler){
  return $addHandler(this$static.handlers, (!TYPE_8 && (TYPE_8 = new GwtEvent$Type) , TYPE_8), handler);
}

function History$HistoryEventSource(){
  this.handlers = new HandlerManager(null);
}

defineClass(483, 1, $intern_11, History$HistoryEventSource);
_.fireEvent_0 = function fireEvent_1(event_0){
  $fireEvent(this.handlers, event_0);
}
;
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryEventSource', 483);
function $decodeHistoryToken(historyToken){
  return $wnd.decodeURI(historyToken.replace('%23', '#'));
}

defineClass(484, 1, {});
_.attachListener = function attachListener(){
  var handler = $entry(onHashChanged);
  $wnd.addEventListener('hashchange', handler, false);
}
;
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImpl', 484);
function History$HistoryImplIE8(){
  this.attachListener();
}

defineClass(485, 484, {}, History$HistoryImplIE8);
_.attachListener = function attachListener_0(){
  var handler = $entry(onHashChanged);
  var oldHandler = $wnd.onhashchange;
  $wnd.onhashchange = function(){
    var ex;
    try {
      handler();
    }
     catch (e) {
      ex = e;
    }
    if (oldHandler != null) {
      try {
        oldHandler();
      }
       catch (e) {
        ex = ex || e;
      }
    }
    if (ex != null) {
      throw ex;
    }
  }
  ;
}
;
var Lcom_google_gwt_user_client_History$HistoryImplIE8_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImplIE8', 485);
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_6?TYPE_6:(TYPE_6 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_7 && (TYPE_7 = new GwtEvent$Type) , TYPE_7), handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new WindowImplIE$1);
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initHandler("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new WindowImplIE$2);
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize_0(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_2((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
  }
}

var closeHandlersInitialized = false, handlers_1, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_10 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(312, 649, {}, Window$ClosingEvent);
_.dispatch = function dispatch_10(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_11(){
  return TYPE_10;
}
;
var TYPE_10;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 312);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(208, 137, $intern_11, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 208);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return $intern_23;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_24;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_19;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_16;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return $intern_25;
    default:return -1;
  }
}

function $getEventsSunk(elem){
  return elem.__eventBits || 0;
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener_0(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 15)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $getChild(elem, index_0){
  return elem.children[index_0];
}

function $initEventSystem(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return previewEvent($wnd.event);
  }
  );
  var dispatchEvent_0 = $entry(function(){
    var oldEventTarget = currentEventTarget;
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEventImpl()) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var getEventListener = getEventListener_0;
    var listener, curElem = this;
    while (curElem && !(listener = getEventListener(curElem))) {
      curElem = curElem.parentElement;
    }
    listener && dispatchEvent_1($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  );
  var dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent_0.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEventImpl();
    }
  }
  );
  var dispatchUnhandledEvent = $entry(function(){
    this.__gwtLastUnhandledEvent = $wnd.event.type;
    dispatchEvent_0.call(this);
  }
  );
  var moduleName = $moduleName.replace(/\./g, '_');
  $wnd['__gwt_dispatchEvent_' + moduleName] = dispatchEvent_0;
  callDispatchEvent = (new Function('w', 'return function() { w.__gwt_dispatchEvent_' + moduleName + '.call(this) }'))($wnd);
  $wnd['__gwt_dispatchDblClickEvent_' + moduleName] = dispatchDblClickEvent;
  callDispatchDblClickEvent = (new Function('w', 'return function() { w.__gwt_dispatchDblClickEvent_' + moduleName + '.call(this)}'))($wnd);
  $wnd['__gwt_dispatchUnhandledEvent_' + moduleName] = dispatchUnhandledEvent;
  callDispatchUnhandledEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(this)}'))($wnd);
  callDispatchOnLoadEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(w.event.srcElement)}'))($wnd);
  var bodyDispatcher = $entry(function(){
    dispatchEvent_0.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function $insertChild(parent_0, child, index_0){
  index_0 >= parent_0.children.length?parent_0.appendChild(child):parent_0.insertBefore(child, parent_0.children[index_0]);
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?callDispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?callDispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?callDispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?callDispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?callDispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?callDispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?callDispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?callDispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?callDispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?callDispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?callDispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?callDispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?callDispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?callDispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?callDispatchEvent:null);
  chMask & $intern_23 && (elem.nodeName == 'IFRAME'?bits & $intern_23?elem.attachEvent('onload', callDispatchOnLoadEvent):elem.detachEvent('onload', callDispatchOnLoadEvent):(elem.onload = bits & $intern_23?callDispatchUnhandledEvent:null));
  chMask & $intern_24 && (elem.onerror = bits & $intern_24?callDispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?callDispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?callDispatchEvent:null);
  chMask & $intern_19 && (elem.onpaste = bits & $intern_19?callDispatchEvent:null);
}

function previewEventImpl(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

var callDispatchDblClickEvent, callDispatchEvent, callDispatchOnLoadEvent, callDispatchUnhandledEvent;
function $get_2(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  if (index_0 < 0) {
    return null;
  }
  return dynamicCast($get_5(this$static.uiObjectList, index_0), 13);
}

function $put_0(this$static, uiObject){
  var index_0;
  if (!this$static.freeList) {
    index_0 = this$static.uiObjectList.array.length;
    $add_9(this$static.uiObjectList, uiObject);
  }
   else {
    index_0 = this$static.freeList.index_0;
    $set_0(this$static.uiObjectList, index_0, uiObject);
    this$static.freeList = this$static.freeList.next;
  }
  uiObject.element['__uiObjectID'] = index_0;
}

function $removeByElement(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  elem['__uiObjectID'] = null;
  $set_0(this$static.uiObjectList, index_0, null);
  this$static.freeList = new ElementMapperImpl$FreeNode(index_0, this$static.freeList);
}

function ElementMapperImpl(){
  this.uiObjectList = new ArrayList;
}

function getIndex(elem){
  var index_0 = elem['__uiObjectID'];
  return index_0 == null?-1:index_0;
}

defineClass(498, 1, {}, ElementMapperImpl);
_.freeList = null;
var Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl', 498);
function ElementMapperImpl$FreeNode(index_0, next){
  this.index_0 = index_0;
  this.next = next;
}

defineClass(499, 1, {}, ElementMapperImpl$FreeNode);
_.index_0 = 0;
var Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl/FreeNode', 499);
function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $appendChild($doc.body, scriptElem);
  cmd.execute_1();
  $removeChild($doc.body, scriptElem);
}

function WindowImplIE$1(){
}

defineClass(348, 1, {}, WindowImplIE$1);
_.execute_1 = function execute_6(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/1', 348);
function WindowImplIE$2(){
}

defineClass(349, 1, {}, WindowImplIE$2);
_.execute_1 = function execute_7(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize_0));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/2', 349);
function $replaceNode(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function $resolvePotentialElement(){
  throw new UnsupportedOperationException;
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $setHeight(this$static, height){
  $setPropertyImpl(this$static.element.style, 'height', height);
}

function $setStyleName(this$static, style){
  $setClassName(this$static.getStyleElement(), style);
}

function $setVisible(this$static, visible){
  setVisible(this$static.element, visible);
}

function $setWidth(this$static, width_0){
  $setPropertyImpl(this$static.element.style, 'width', width_0);
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException_0('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

defineClass(13, 1, {14:1, 13:1});
_.getStyleElement = function getStyleElement(){
  return this.element;
}
;
_.resolvePotentialElement = function resolvePotentialElement(){
  return $resolvePotentialElement();
}
;
_.setHeight_0 = function setHeight(height){
  $setHeight(this, height);
}
;
_.setVisible = function setVisible_0(visible){
  $setVisible(this, visible);
}
;
_.setWidth_0 = function setWidth(width_0){
  $setWidth(this, width_0);
}
;
_.toString$ = function toString_14(){
  if (!this.element) {
    return '(null handle)';
  }
  return this.element.outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 13);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = $eventGetTypeInt(type_0.name_0);
  typeInt == -1?this$static.element:this$static.sinkEvents(typeInt);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler_1(this$static, handler, type_0){
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && this$static.sinkEvents(bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad();
  fire_0(this$static, true);
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == 'mouseout'?event_0.toElement:event_0.fromElement);
      if (!!related && isOrHasChildImpl(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
    fire_0(this$static, false);
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      setEventListener(this$static.element, null);
      this$static.attached = false;
    }
  }
}

function $removeFromParent_0(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 78)) {
    dynamicCast(this$static.parent_0, 78).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement(this$static, elem){
  this$static.attached && setEventListener(this$static.element, null);
  !!this$static.element && $replaceNode(this$static.element, elem);
  this$static.element = elem;
  this$static.attached && setEventListener(this$static.element, this$static);
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents_0(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?$sinkEvents(this$static.element, eventBitsToAdd | $getEventsSunk(this$static.element)):(this$static.eventsToSink |= eventBitsToAdd);
}

defineClass(9, 13, $intern_26);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent_0 = function fireEvent_2(event_0){
  $fireEvent_0(this, event_0);
}
;
_.isAttached = function isAttached(){
  return this.attached;
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.sinkEvents = function sinkEvents_1(eventBitsToAdd){
  $sinkEvents_0(this, eventBitsToAdd);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 9);
function $clear(this$static){
  var it;
  it = new WidgetCollection$WidgetIterator(this$static.children_0);
  while (it.index_0 < it.this$01.size_0) {
    $next_1(it);
    $remove_8(it);
  }
}

defineClass(644, 9, $intern_27);
_.add_0 = function add_1(child){
  throw new UnsupportedOperationException_0('This panel does not support no-arg add()');
}
;
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 644);
function $add(this$static, child, container){
  $removeFromParent_0(child);
  $add_8(this$static.children_0, child);
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf(this$static.children_0, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForInsertion(this$static, index_0){
  if (index_0 < 0 || index_0 > this$static.children_0.size_0) {
    throw new IndexOutOfBoundsException;
  }
}

function $insert(this$static, child, container, beforeIndex){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent_0(child);
  $insert_2(this$static.children_0, child, beforeIndex);
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.element;
    $removeChild($getParentElement(elem), elem);
    $remove_7(this$static.children_0, w);
  }
  return true;
}

function ComplexPanel(){
  this.children_0 = new WidgetCollection(this);
}

defineClass(155, 644, $intern_27);
_.iterator = function iterator_0(){
  return new WidgetCollection$WidgetIterator(this.children_0);
}
;
_.remove = function remove_0(w){
  return $remove(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 155);
function $add_0(this$static, w){
  $add(this$static, w, this$static.element);
}

function $remove_0(this$static, w){
  var removed;
  removed = $remove(this$static, w);
  removed && changeToStaticPositioning(w.element);
  return removed;
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(298, 155, $intern_27);
_.add_0 = function add_2(w){
  $add_0(this, w);
}
;
_.remove = function remove_1(w){
  return $remove_0(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 298);
function create_2(resource){
  return new ClippedImagePrototype(resource.url_0, resource.left_0, resource.top_0, resource.width_0, resource.height);
}

defineClass(664, 1, {});
var Lcom_google_gwt_user_client_ui_AbstractImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbstractImagePrototype', 664);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), 9);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 11)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_10(caught, e);
      }
       else 
        throw unwrap_5($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(274, 205, $intern_12, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 274);
function AttachDetachException$1(){
}

defineClass(275, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_8(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 275);
function AttachDetachException$2(){
}

defineClass(276, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_9(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 276);
function $setEnabled(this$static, enabled){
  this$static.element['disabled'] = !enabled;
}

function FocusWidget(elem){
  $setElement(this, elem);
}

defineClass(221, 9, $intern_26);
_.getTabIndex = function getTabIndex(){
  return this.element.tabIndex;
}
;
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = this.getTabIndex();
  -1 == tabIndex && this.setTabIndex(0);
}
;
_.setTabIndex = function setTabIndex(index_0){
  $setTabIndex(this.element, index_0);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 221);
function $setHTML(this$static, html){
  $setInnerHTML(this$static.element, html);
}

function $setText(this$static, text_0){
  $setInnerText(this$static.element, text_0);
}

function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(252, 221, $intern_26);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 252);
function Button(){
  ButtonBase.call(this, $doc.createElement("<BUTTON type='button'><\/BUTTON>"));
  $setClassName(this.element, 'gwt-Button');
}

defineClass(18, 252, $intern_26, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 18);
function $getWidgetTd(this$static, w){
  if (w.parent_0 != this$static) {
    return null;
  }
  return $getParentElement(w.element);
}

function $setCellHeight(this$static, w, height){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && $setPropertyString(td, 'height', height);
}

function $setCellHorizontalAlignment(this$static, w, align_0){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && $setPropertyString(td, 'align', align_0.textAlignString);
}

function $setCellVerticalAlignment(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function $setCellVerticalAlignment_0(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function $setCellVerticalAlignment_1(this$static, w, align_0){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function $setCellWidth(this$static, w, width_0){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && $setPropertyString(td, 'width', width_0);
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = $createElement($doc, 'table');
  this.body_0 = $createElement($doc, 'tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
}

defineClass(250, 155, $intern_27);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 250);
function $setValue_0(this$static, value_0){
  var oldValue;
  !value_0 && (value_0 = ($clinit_Boolean() , FALSE_0));
  oldValue = this$static.attached?($clinit_Boolean() , $isChecked(this$static.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(this$static.inputElem)?TRUE_0:FALSE_0);
  $setChecked(this$static.inputElem, value_0.value_0);
  $setDefaultChecked(this$static.inputElem, value_0.value_0);
  if (!!oldValue && oldValue.value_0 == value_0.value_0) {
    return;
  }
}

function CheckBox(){
  CheckBox_0.call(this, $createCheckInputElement($doc));
  $setClassName(this.element, 'gwt-CheckBox');
}

function CheckBox_0(elem){
  var uid;
  ButtonBase.call(this, $createElement($doc, 'span'));
  this.inputElem = elem;
  this.labelElem = $createElement($doc, 'label');
  $appendChild(this.element, this.inputElem);
  $appendChild(this.element, this.labelElem);
  uid = $createUniqueId($doc);
  $setPropertyString(this.inputElem, 'id', uid);
  $setHtmlFor(this.labelElem, uid);
  this.directionalTextHelper = new DirectionalTextHelper(this.labelElem);
  !!this.inputElem && $setTabIndex(this.inputElem, 0);
}

defineClass(87, 252, $intern_26, CheckBox);
_.getTabIndex = function getTabIndex_0(){
  return this.inputElem.tabIndex;
}
;
_.onLoad = function onLoad_0(){
  setEventListener(this.inputElem, this);
}
;
_.onUnload = function onUnload_0(){
  setEventListener(this.inputElem, null);
  $setValue_0(this, this.attached?($clinit_Boolean() , $isChecked(this.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(this.inputElem)?TRUE_0:FALSE_0));
}
;
_.setTabIndex = function setTabIndex_0(index_0){
  !!this.inputElem && $setTabIndex(this.inputElem, index_0);
}
;
_.sinkEvents = function sinkEvents_2(eventBitsToAdd){
  this.eventsToSink == -1?sinkEvents_0(this.inputElem, eventBitsToAdd | $getEventsSunk(this.inputElem)):this.eventsToSink == -1?sinkEvents(this.element, eventBitsToAdd | $getEventsSunk(this.element)):(this.eventsToSink |= eventBitsToAdd);
}
;
var Lcom_google_gwt_user_client_ui_CheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CheckBox', 87);
function $checkInit(this$static){
  if (!this$static.widget) {
    throw new IllegalStateException_0('initWidget() is not called yet');
  }
}

function $initWidget(this$static, widget){
  var elem;
  if (this$static.widget) {
    throw new IllegalStateException_0('Composite.initWidget() may only be called once.');
  }
  $removeFromParent_0(widget);
  elem = widget.element;
  this$static.element = elem;
  ($clinit_PotentialElement() , isPotential(elem)) && $setResolver(elem, this$static);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

defineClass(654, 9, $intern_26);
_.isAttached = function isAttached_0(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}
;
_.onAttach = function onAttach_1(){
  $checkInit(this);
  if (this.eventsToSink != -1) {
    $sinkEvents_0(this.widget, this.eventsToSink);
    this.eventsToSink = -1;
  }
  this.widget.onAttach();
  setEventListener(this.element, this);
  fire_0(this, true);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  $onBrowserEvent(this, event_0);
  this.widget.onBrowserEvent(event_0);
}
;
_.onDetach = function onDetach_0(){
  try {
    fire_0(this, false);
  }
   finally {
    this.widget.onDetach();
  }
}
;
_.resolvePotentialElement = function resolvePotentialElement_0(){
  $setElement(this, $resolvePotentialElement());
  return this.element;
}
;
var Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Composite', 654);
function $getTextOrHtml(this$static){
  var elem;
  elem = this$static.isSpanWrapped?$getFirstChildElement(this$static.element):this$static.element;
  return elem.innerText;
}

function $setTextOrHtml(this$static, content_0){
  this$static.isSpanWrapped = false;
  $setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.isSpanWrapped = false;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(253, 1, {}, DirectionalTextHelper);
_.isSpanWrapped = false;
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 253);
function $checkCellBounds(this$static, row, column){
  var cellSize;
  $checkRowBounds(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_0('Column ' + column + ' must be non-negative: ' + column);
  }
  cellSize = this$static.numColumns;
  if (cellSize <= column) {
    throw new IndexOutOfBoundsException_0('Column index: ' + column + ', Column size: ' + this$static.numColumns);
  }
}

function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = this$static.numRows;
  if (row >= rowSize || row < 0) {
    throw new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $cleanCell(this$static, row, column, clearInnerHTML){
  var td;
  td = $getRawElement(this$static.cellFormatter, row, column);
  $internalClearCell(this$static, td, clearInnerHTML);
  return td;
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = $getFirstChildElement(td);
  widget = null;
  !!maybeChild && (widget = dynamicCast($get_2(this$static.widgetMap, maybeChild), 9));
  if (widget) {
    $remove_1(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && $setInnerHTML(td, '');
    return false;
  }
}

function $remove_1(this$static, widget){
  var elem;
  if (widget.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = widget.element;
    $removeChild($getParentElement(elem), elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $removeRow(this$static, row){
  var column, columnCount;
  columnCount = this$static.numColumns;
  for (column = 0; column < columnCount; ++column) {
    $cleanCell(this$static, row, column, false);
  }
  $removeChild(this$static.bodyElem, $getRow(this$static.bodyElem, row));
}

function $setCellFormatter(this$static, cellFormatter){
  this$static.cellFormatter = cellFormatter;
}

function $setColumnFormatter(this$static, formatter){
  !!this$static.columnFormatter && (formatter.columnGroup = this$static.columnFormatter.columnGroup);
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

function $setWidget(this$static, row, column, widget){
  var td;
  $prepareCell(this$static, row, column);
  td = $cleanCell(this$static, row, column, true);
  $removeFromParent_0(widget);
  $put_0(this$static.widgetMap, widget);
  $appendChild(td, resolve(widget.element));
  $setParent(widget, this$static);
}

defineClass(452, 644, $intern_27);
_.iterator = function iterator_1(){
  return new HTMLTable$1(this);
}
;
_.remove = function remove_2(widget){
  return $remove_1(this, widget);
}
;
var Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable', 452);
function $prepareCell(this$static, row, column){
  $prepareRow(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_0('Cannot access a column with a negative index: ' + column);
  }
  if (column >= this$static.numColumns) {
    throw new IndexOutOfBoundsException_0('Column index: ' + column + ', Column size: ' + this$static.numColumns);
  }
}

function $prepareRow(this$static, row){
  if (row < 0) {
    throw new IndexOutOfBoundsException_0('Cannot access a row with a negative index: ' + row);
  }
  if (row >= this$static.numRows) {
    throw new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + this$static.numRows);
  }
}

function $removeRow_0(this$static, row){
  $removeRow(this$static, row);
  --this$static.numRows;
}

function $resize(this$static, rows_0, columns){
  $resizeColumns(this$static, columns);
  $resizeRows(this$static, rows_0);
}

function $resizeColumns(this$static, columns){
  var i, j, td, tr, tr_0, td_0, td_1;
  if (this$static.numColumns == columns) {
    return;
  }
  if (columns < 0) {
    throw new IndexOutOfBoundsException_0('Cannot set number of columns to ' + columns);
  }
  if (this$static.numColumns > columns) {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns - 1; j >= columns; j--) {
        $checkCellBounds(this$static, i, j);
        td = $cleanCell(this$static, i, j, false);
        tr = $getRow(this$static.bodyElem, i);
        tr.removeChild(td);
      }
    }
  }
   else {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns; j < columns; j++) {
        tr_0 = $getRow(this$static.bodyElem, i);
        td_0 = (td_1 = $createElement($doc, 'td') , $setInnerHTML(td_1, '&nbsp;') , td_1);
        $insertChild(tr_0, resolve(td_0), j);
      }
    }
  }
  this$static.numColumns = columns;
  $resizeColumnGroup(this$static.columnFormatter, columns, false);
}

function $resizeRows(this$static, rows_0){
  if (this$static.numRows == rows_0) {
    return;
  }
  if (rows_0 < 0) {
    throw new IndexOutOfBoundsException_0('Cannot set number of rows to ' + rows_0);
  }
  if (this$static.numRows < rows_0) {
    addRows(this$static.bodyElem, rows_0 - this$static.numRows, this$static.numColumns);
    this$static.numRows = rows_0;
  }
   else {
    while (this$static.numRows > rows_0) {
      $removeRow_0(this$static, this$static.numRows - 1);
    }
  }
}

function Grid(){
  this.widgetMap = new ElementMapperImpl;
  this.tableElem = $createElement($doc, 'table');
  this.bodyElem = $createElement($doc, 'tbody');
  $appendChild(this.tableElem, resolve(this.bodyElem));
  $setElement(this, this.tableElem);
  $setCellFormatter(this, new HTMLTable$CellFormatter(this));
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter(this));
}

function addRows(table, rows_0, columns){
  var td = $doc.createElement('td');
  td.innerHTML = '&nbsp;';
  var row = $doc.createElement('tr');
  for (var cellNum = 0; cellNum < columns; cellNum++) {
    var cell = td.cloneNode(true);
    row.appendChild(cell);
  }
  table.appendChild(row);
  for (var rowNum = 1; rowNum < rows_0; rowNum++) {
    table.appendChild(row.cloneNode(true));
  }
}

defineClass(115, 452, $intern_27, Grid);
_.numColumns = 0;
_.numRows = 0;
var Lcom_google_gwt_user_client_ui_Grid_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Grid', 115);
function $add_1(this$static, widget){
  $add(this$static, widget, this$static.element);
}

function $addAndReplaceElement(this$static, widget, toReplace){
  var children, next, toRemove;
  if (toReplace == widget.element) {
    return;
  }
  $removeFromParent_0(widget);
  toRemove = null;
  children = new WidgetCollection$WidgetIterator(this$static.children_0);
  while (children.index_0 < children.this$01.size_0) {
    next = $next_1(children);
    if (isOrHasChildImpl(toReplace, next.element)) {
      if (next.element == toReplace) {
        toRemove = next;
        break;
      }
      $remove_8(children);
    }
  }
  $add_8(this$static.children_0, widget);
  if (!toRemove) {
    $replaceChild(toReplace.parentNode, widget.element, toReplace);
  }
   else {
    $insertBefore(toReplace.parentNode, widget.element, toReplace);
    $remove(this$static, toRemove);
  }
  $setParent(widget, this$static);
}

function HTMLPanel(html){
  ComplexPanel.call(this);
  $setElement(this, $createElement($doc, 'div'));
  $setInnerHTML(this.element, html);
}

defineClass(95, 155, $intern_27, HTMLPanel);
_.add_0 = function add_3(widget){
  $add_1(this, widget);
}
;
var Lcom_google_gwt_user_client_ui_HTMLPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLPanel', 95);
function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.array.length) {
    if ($get_5(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.array.length) {
    throw new NoSuchElementException;
  }
  result = dynamicCast($get_5(this$static.widgetList, this$static.nextIndex), 9);
  this$static.lastIndex_0 = this$static.nextIndex;
  $findNext(this$static);
  return result;
}

function HTMLTable$1(this$0){
  this.this$01 = this$0;
  this.widgetList = this.this$01.widgetMap.uiObjectList;
  $findNext(this);
}

defineClass(455, 1, {}, HTMLTable$1);
_.hasNext = function hasNext(){
  return this.nextIndex < this.widgetList.array.length;
}
;
_.next_0 = function next_0(){
  return $next(this);
}
;
_.remove_0 = function remove_3(){
  var w;
  if (this.lastIndex_0 < 0) {
    throw new IllegalStateException;
  }
  w = dynamicCast($get_5(this.widgetList, this.lastIndex_0), 9);
  $removeFromParent_0(w);
  this.lastIndex_0 = -1;
}
;
_.lastIndex_0 = -1;
_.nextIndex = -1;
var Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/1', 455);
function $getCellElement(tbody, row, col){
  return $getCells(tbody.children[row])[col];
}

function $getRawElement(this$static, row, column){
  return $getCellElement(this$static.this$01.bodyElem, row, column);
}

function HTMLTable$CellFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(453, 1, {}, HTMLTable$CellFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/CellFormatter', 453);
function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = $createElement($doc, 'colgroup');
    insertChild(this$static.this$01.tableElem, this$static.columnGroup, 0);
    $appendChild(this$static.columnGroup, resolve($createElement($doc, 'col')));
  }
}

function $resizeColumnGroup(this$static, columns, growOnly){
  var i, num;
  columns = columns > 1?columns:1;
  num = this$static.columnGroup.childNodes.length;
  if (num < columns) {
    for (i = num; i < columns; i++) {
      $appendChild(this$static.columnGroup, $createElement($doc, 'col'));
    }
  }
   else if (!growOnly && num > columns) {
    for (i = num; i > columns; i--) {
      $removeChild(this$static.columnGroup, this$static.columnGroup.lastChild);
    }
  }
}

function HTMLTable$ColumnFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(454, 1, {}, HTMLTable$ColumnFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/ColumnFormatter', 454);
function $getCells(row){
  return row.children;
}

function $getRow(tbody, row){
  return tbody.children[row];
}

function $clinit_HasAutoHorizontalAlignment(){
  $clinit_HasAutoHorizontalAlignment = emptyMethod;
  ALIGN_CONTENT_START = new HasHorizontalAlignment$AutoHorizontalAlignmentConstant;
}

var ALIGN_CONTENT_START;
function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  ALIGN_CENTER = new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  ALIGN_RIGHT = new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ALIGN_LEFT;
  ALIGN_LOCALE_END = ALIGN_RIGHT;
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_CENTER, ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_END, ALIGN_LOCALE_START, ALIGN_RIGHT;
function HasHorizontalAlignment$AutoHorizontalAlignmentConstant(){
}

defineClass(428, 1, {}, HasHorizontalAlignment$AutoHorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 428);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

function endOf(direction){
  return direction == ($clinit_HasDirection$Direction() , LTR)?($clinit_HasHorizontalAlignment() , ALIGN_RIGHT):direction == RTL?($clinit_HasHorizontalAlignment() , ALIGN_LEFT):($clinit_HasHorizontalAlignment() , ALIGN_LOCALE_END);
}

function startOf(direction){
  return direction == ($clinit_HasDirection$Direction() , LTR)?($clinit_HasHorizontalAlignment() , ALIGN_LEFT):direction == RTL?($clinit_HasHorizontalAlignment() , ALIGN_RIGHT):($clinit_HasHorizontalAlignment() , ALIGN_LOCALE_START);
}

defineClass(187, 428, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 187);
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  ALIGN_MIDDLE = new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_MIDDLE, ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(219, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 219);
function $add_2(this$static, w){
  var td;
  td = $createAlignedTd(this$static);
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function $createAlignedTd(this$static){
  var td;
  td = $createElement($doc, 'td');
  $setPropertyString(td, 'align', this$static.horzAlign.textAlignString);
  $setCellVerticalAlignment(td, this$static.vertAlign);
  return td;
}

function $setHorizontalAlignment(this$static, align_0){
  this$static.horzAlign = align_0;
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = $createElement($doc, 'tr');
  $appendChild(this.body_0, resolve(this.tableRow));
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(71, 250, $intern_27, HorizontalPanel);
_.add_0 = function add_4(w){
  $add_2(this, w);
}
;
_.remove = function remove_4(w){
  var removed, td;
  td = $getParentElement(w.element);
  removed = $remove(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 71);
function $remove_2(this$static, widget){
  if (this$static.widgets[0] == widget) {
    $setWidget_0(this$static, 0, null);
    return true;
  }
   else if (this$static.widgets[1] == widget) {
    $setWidget_0(this$static, 1, null);
    return true;
  }
  return false;
}

function $setWidget_0(this$static, index_0, w){
  var oldWidget;
  oldWidget = this$static.widgets[index_0];
  if (oldWidget == w) {
    return;
  }
  !!w && $removeFromParent_0(w);
  if (oldWidget) {
    try {
      $setParent(oldWidget, null);
    }
     finally {
      $removeChild(this$static.elements[index_0], oldWidget.element);
      setCheck(this$static.widgets, index_0, null);
    }
  }
  setCheck(this$static.widgets, index_0, w);
  if (w) {
    $appendChild(this$static.elements[index_0], resolve(w.element));
    $setParent(w, this$static);
  }
}

function $startResizingFrom(this$static, x_0){
  var height, width_0;
  this$static.isResizing = true;
  this$static.initialThumbPos = x_0;
  this$static.initialLeftWidth = $getPropertyInt(this$static.elements[0], 'offsetWidth');
  height = ($getSubPixelScrollHeight(getBodyElement()) | 0) - 1;
  width_0 = ($getSubPixelScrollWidth(getBodyElement()) | 0) - 1;
  $setPropertyImpl(glassElem.style, 'height', height + 'px');
  $setPropertyImpl(glassElem.style, 'width', width_0 + 'px');
  $appendChild(getBodyElement(), glassElem);
}

function SplitPanel(mainElem, splitElem, headElem, tailElem){
  this.widgets = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 9, 2, 0, 1);
  this.elements = initDim(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, $intern_4, 0, 2, 2, 1);
  this.element = mainElem;
  this.splitElem = splitElem;
  setCheck(this.elements, 0, headElem);
  setCheck(this.elements, 1, tailElem);
  this.eventsToSink == -1?sinkEvents(this.element, 8316 | $getEventsSunk(this.element)):(this.eventsToSink |= 8316);
  if (!glassElem) {
    glassElem = $createElement($doc, 'div');
    $setPropertyImpl(glassElem.style, 'position', 'absolute');
    $setPropertyImpl(glassElem.style, 'top', '0px');
    $setPropertyImpl(glassElem.style, 'left', '0px');
    $setPropertyImpl(glassElem.style, 'margin', '0px');
    $setPropertyImpl(glassElem.style, 'padding', '0px');
    $setPropertyImpl(glassElem.style, 'border', '0px');
    $setPropertyImpl(glassElem.style, 'background', 'white');
    $setPropertyImpl(glassElem.style, 'opacity', '0.0');
    $setPropertyImpl(glassElem.style, 'filter', 'alpha(opacity=0)');
  }
}

function expandToFitParentUsingPercentages(elem){
  $setPropertyImpl(elem.style, 'position', 'absolute');
  $setPropertyImpl(elem.style, 'top', '0px');
  $setPropertyImpl(elem.style, 'left', '0px');
  $setPropertyImpl(elem.style, 'width', '100%');
  $setPropertyImpl(elem.style, 'height', '100%');
}

function preventBoxStyles(elem){
  $setPropertyImpl(elem.style, 'padding', '0');
  $setPropertyImpl(elem.style, 'margin', '0');
  $setPropertyImpl(elem.style, 'border', 'none');
  return elem;
}

function setHeight_0(elem, height){
  $setPropertyImpl(elem.style, 'height', height);
}

function setWidth_0(elem, width_0){
  $setPropertyImpl(elem.style, 'width', width_0);
}

defineClass(505, 644, $intern_27);
_.add_0 = function add_5(w){
  if (!this.widgets[0]) {
    $setWidget_0(this, 0, w);
  }
   else if (!this.widgets[1]) {
    $setWidget_0(this, 1, w);
  }
   else {
    throw new IllegalStateException_0('A Splitter can only contain two Widgets.');
  }
}
;
_.iterator = function iterator_2(){
  return createWidgetIterator(this, this.widgets);
}
;
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  var target;
  switch ($eventGetTypeInt(event_0.type)) {
    case 4:
      {
        target = event_0.srcElement;
        if (isOrHasChildImpl(this.splitElem, target)) {
          $startResizingFrom(this, ($eventGetSubPixelClientX(event_0) | 0) - $getAbsoluteLeft(this.element), ($eventGetSubPixelClientY(event_0) | 0) - $getAbsoluteTop(this.element));
          setCapture(this.element);
          $eventPreventDefault(event_0);
        }
        break;
      }

    case 8:
      {
        if (this.isResizing) {
          this.isResizing = false;
          $removeChild(getBodyElement(), glassElem);
          releaseCapture(this.element);
        }
        break;
      }

    case 64:
      {
        if (this.isResizing) {
          $onSplitterResize(this, ($eventGetSubPixelClientX(event_0) | 0) - $getAbsoluteLeft(this.element), ($eventGetSubPixelClientY(event_0) | 0) - $getAbsoluteTop(this.element));
          $eventPreventDefault(event_0);
        }
        break;
      }

    case 8192:
      {
        this.isResizing && (this.isResizing = false , $removeChild(getBodyElement(), glassElem));
        break;
      }

  }
  $onBrowserEvent(this, event_0);
}
;
_.remove = function remove_5(widget){
  return $remove_2(this, widget);
}
;
_.isResizing = false;
var glassElem = null;
var Lcom_google_gwt_user_client_ui_SplitPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SplitPanel', 505);
function $add_3(this$static, w){
  if (!this$static.widgets[0]) {
    $setWidget_0(this$static, 0, w);
  }
   else if (!this$static.widgets[1]) {
    $setWidget_0(this$static, 1, w);
  }
   else {
    throw new IllegalStateException_0('A Splitter can only contain two Widgets.');
  }
}

function $onSplitterResize(this$static, x_0){
  $onSplitResize(this$static.impl, this$static.initialLeftWidth + x_0 - this$static.initialThumbPos);
}

function $setSplitPosition(this$static, pos){
  this$static.lastSplitPosition = pos;
  $setSplitPosition_0(this$static.impl, pos);
}

function HorizontalSplitPanel(){
  HorizontalSplitPanel_0.call(this, create_2(($clinit_HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator$horizontalSplitPanelThumbInitializer() , horizontalSplitPanelThumb)));
}

function HorizontalSplitPanel_0(thumbImage){
  var leftDiv, rightDiv, splitDiv, sb, elem;
  SplitPanel.call(this, $createElement($doc, 'div'), $createElement($doc, 'div'), preventBoxStyles($createElement($doc, 'div')), preventBoxStyles($createElement($doc, 'div')));
  this.impl = new HorizontalSplitPanel$ImplIE8;
  this.lastSplitPosition = '50%';
  this.container = preventBoxStyles($createElement($doc, 'div'));
  leftDiv = this.elements[0];
  rightDiv = this.elements[1];
  splitDiv = this.splitElem;
  $appendChild(this.element, resolve(this.container));
  $appendChild(this.container, resolve(leftDiv));
  $appendChild(this.container, resolve(splitDiv));
  $appendChild(this.container, resolve(rightDiv));
  sb = new SafeHtmlBuilder;
  $append_3(sb.sb, "<table class='hsplitter' height='100%' cellpadding='0' cellspacing='0'><tr><td align='center' valign='middle'>");
  $append_0(sb, $getSafeHtml(thumbImage.url_0, thumbImage.left_0, thumbImage.top_0, thumbImage.width_0, thumbImage.height));
  $setInnerHTML(splitDiv, (new SafeHtmlString(sb.sb.string)).html);
  $setPropertyImpl(leftDiv.style, 'overflow', 'auto');
  $setPropertyImpl(rightDiv.style, 'overflow', 'auto');
  $setClassName(this.element, 'gwt-HorizontalSplitPanel');
  this.impl.panel = this;
  elem = this.element;
  $setPropertyImpl(elem.style, 'textAlign', ($clinit_Style$TextAlign() , 'left'));
  $setPropertyImpl(elem.style, 'position', 'relative');
  $setPropertyImpl(this.elements[0].style, 'position', 'absolute');
  $setPropertyImpl(this.elements[1].style, 'position', 'absolute');
  $setPropertyImpl(this.splitElem.style, 'position', 'absolute');
  expandToFitParentUsingPercentages(this.container);
  $setPropertyImpl(this.element.style, 'height', '100%');
}

defineClass(188, 505, $intern_27, HorizontalSplitPanel);
_.add_0 = function add_6(w){
  $add_3(this, w);
}
;
_.onLoad = function onLoad_1(){
  $onAttach_0(this.impl);
  $setSplitPosition(this, this.lastSplitPosition);
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new HorizontalSplitPanel$1(this));
}
;
_.onUnload = function onUnload_1(){
  $setAttribute(this.impl.panel.container, 'onresize', null);
}
;
_.initialLeftWidth = 0;
_.initialThumbPos = 0;
var Lcom_google_gwt_user_client_ui_HorizontalSplitPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalSplitPanel', 188);
function HorizontalSplitPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(508, 1, {}, HorizontalSplitPanel$1);
_.execute_1 = function execute_10(){
  $setSplitPosition(this.this$01, this.this$01.lastSplitPosition);
}
;
var Lcom_google_gwt_user_client_ui_HorizontalSplitPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalSplitPanel/1', 508);
function $setSplitPosition_0(this$static, pos){
  var leftElem;
  leftElem = this$static.panel.elements[0];
  $setPropertyImpl(leftElem.style, 'width', pos);
  $setSplitPositionUsingPixels(this$static, $getPropertyInt(leftElem, 'offsetWidth'));
}

function $setSplitPositionUsingPixels(this$static, px){
  var newRightWidth, rightElem, rootElemWidth, splitElem, splitElemWidth;
  splitElem = this$static.panel.splitElem;
  rootElemWidth = $getPropertyInt(this$static.panel.container, 'offsetWidth');
  splitElemWidth = $getPropertyInt(splitElem, 'offsetWidth');
  if (rootElemWidth < splitElemWidth) {
    return;
  }
  newRightWidth = rootElemWidth - px - splitElemWidth;
  if (px < 0) {
    px = 0;
    newRightWidth = rootElemWidth - splitElemWidth;
  }
   else if (newRightWidth < 0) {
    px = rootElemWidth - splitElemWidth;
    newRightWidth = 0;
  }
  rightElem = this$static.panel.elements[1];
  setWidth_0(this$static.panel.elements[0], px + 'px');
  $setPropertyImpl(splitElem.style, 'left', px + 'px');
  rightElem.style['left'] = px + splitElemWidth + 'px';
  $setPropertyImpl(rightElem.style, 'width', newRightWidth + 'px');
}

defineClass(660, 1, {});
var Lcom_google_gwt_user_client_ui_HorizontalSplitPanel$Impl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalSplitPanel/Impl', 660);
function $addResizeListener(this$static, container){
  var self_0 = this$static;
  container.onresize = $entry(function(){
    self_0.onResize_0();
  }
  );
}

function $onAttach_0(this$static){
  $addResizeListener(this$static, this$static.panel.container);
  $onResize(this$static);
}

function $onResize(this$static){
  var height, leftElem, rightElem;
  leftElem = this$static.panel.elements[0];
  rightElem = this$static.panel.elements[1];
  height = $getPropertyInt(this$static.panel.container, 'offsetHeight') + 'px';
  $setPropertyImpl(rightElem.style, 'height', height);
  setHeight_0(this$static.panel.splitElem, height);
  $setPropertyImpl(leftElem.style, 'height', height);
  $setSplitPositionUsingPixels(this$static, $getPropertyInt(leftElem, 'offsetWidth'));
}

function $onSplitResize(this$static, px){
  if (!this$static.isResizeInProgress) {
    this$static.isResizeInProgress = true;
    $schedule(new HorizontalSplitPanel$ImplIE8$1(this$static), 20);
  }
  this$static.splitPosition = px;
}

function HorizontalSplitPanel$ImplIE8(){
}

defineClass(506, 660, {}, HorizontalSplitPanel$ImplIE8);
_.onResize_0 = function onResize_1(){
  $onResize(this);
}
;
_.isResizeInProgress = false;
_.splitPosition = 0;
var Lcom_google_gwt_user_client_ui_HorizontalSplitPanel$ImplIE8_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalSplitPanel/ImplIE8', 506);
function HorizontalSplitPanel$ImplIE8$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(507, 186, {}, HorizontalSplitPanel$ImplIE8$1);
_.run = function run_1(){
  $setSplitPositionUsingPixels(this.this$11, this.this$11.splitPosition);
  this.this$11.isResizeInProgress = false;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalSplitPanel$ImplIE8$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalSplitPanel/ImplIE8/1', 507);
var horizontalSplitPanelThumb;
function $clinit_HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator$horizontalSplitPanelThumbInitializer(){
  $clinit_HorizontalSplitPanel_Resources_default_InlineClientBundleGenerator$horizontalSplitPanelThumbInitializer = emptyMethod;
  horizontalSplitPanelThumb = new ImageResourcePrototype(($clinit_UriUtils() , new SafeUriString('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAArklEQVR42mNgAAI/Pz/xsLCweUC8KygoqJ4BBnx8fKRjYmJeBAQEPAwODr4THR39DIgPgSVBOoCCD+Pi4s5UVVWdaW5uPpOdnf02Pj7emyEiImJXYmLinUmTJp3ZsmXLmV27dp1pamp6UVxcXMgQFRXVnJ+f/xQkcerUqTMnTpw4W1tb+66trU0LbHRBQcH+urq6dz09PS9B9MSJExGOAgGgSnug0ekzZszQgokBAExeULnCXQAFAAAAAElFTkSuQmCC')));
}

function $clinit_Image(){
  $clinit_Image = emptyMethod;
  new HashMap;
}

function $changeState(this$static, newState){
  this$static.state = newState;
}

function Image_0(){
  $clinit_Image();
  $changeState(this, new Image$UnclippedState(this));
  $setClassName(this.element, 'gwt-Image');
}

defineClass(143, 9, $intern_26, Image_0);
_.onBrowserEvent = function onBrowserEvent_2(event_0){
  $eventGetTypeInt(event_0.type) == $intern_23 && !!this.state && $setPropertyString(this.element, '__gwtLastUnhandledEvent', '');
  $onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_2(){
  $onLoad(this.state, this);
}
;
var Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image', 143);
function $onLoad(this$static, image){
  var unhandledEvent;
  unhandledEvent = $getPropertyString(image.element, '__gwtLastUnhandledEvent');
  $equals_0('load', unhandledEvent) && (this$static.syntheticEventCommand = new Image$State$1(this$static, image) , $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), this$static.syntheticEventCommand));
}

defineClass(493, 1, {});
_.syntheticEventCommand = null;
var Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State', 493);
function Image$State$1(this$1, val$image){
  this.this$11 = this$1;
  this.val$image2 = val$image;
}

defineClass(495, 1, {}, Image$State$1);
_.execute_1 = function execute_11(){
  var evt;
  if (this.val$image2.state != this.this$11 || this != this.this$11.syntheticEventCommand) {
    return;
  }
  this.this$11.syntheticEventCommand = null;
  if (!this.val$image2.attached) {
    $setPropertyString(this.val$image2.element, '__gwtLastUnhandledEvent', 'load');
    return;
  }
  evt = $createHtmlEvent($doc, 'load');
  $dispatchEvent(this.val$image2.element, evt);
}
;
var Lcom_google_gwt_user_client_ui_Image$State$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/State/1', 495);
function $setUrl(image, url_0){
  !!image.state && $setPropertyString(image.element, '__gwtLastUnhandledEvent', '');
  $setSrc(image.element, url_0.uri_0);
}

function Image$UnclippedState(image){
  $replaceElement(image, $createElement($doc, 'img'));
  sinkEvents_0(image.element, $intern_23);
  image.eventsToSink == -1?sinkEvents(image.element, 133398655 | $getEventsSunk(image.element)):(image.eventsToSink |= 133398655);
}

defineClass(494, 493, {}, Image$UnclippedState);
var Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Image/UnclippedState', 494);
function $setAutoHorizontalAlignment(this$static, autoAlignment){
  this$static.autoHorizontalAlignment = autoAlignment;
  $updateHorizontalAlignment(this$static);
}

function $updateHorizontalAlignment(this$static){
  var align_0;
  !this$static.autoHorizontalAlignment?(align_0 = null):this$static.autoHorizontalAlignment?(align_0 = this$static.autoHorizontalAlignment):(align_0 = this$static.autoHorizontalAlignment == ($clinit_HasAutoHorizontalAlignment() , ALIGN_CONTENT_START)?startOf(this$static.directionalTextHelper.textDir):endOf(this$static.directionalTextHelper.textDir));
  if (align_0 != this$static.horzAlign) {
    this$static.horzAlign = align_0;
    this$static.element.style['textAlign'] = !this$static.horzAlign?'':this$static.horzAlign.textAlignString;
  }
}

function LabelBase(element){
  $setElement(this, element);
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(251, 9, $intern_26);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 251);
function $setText_0(this$static, text_0){
  $setTextOrHtml(this$static.directionalTextHelper, text_0);
  $updateHorizontalAlignment(this$static);
}

function Label(){
  LabelBase.call(this, $createElement($doc, 'div'));
  $setClassName(this.element, 'gwt-Label');
}

function Label_0(text_0){
  Label.call(this);
  $setTextOrHtml(this.directionalTextHelper, text_0);
  $updateHorizontalAlignment(this);
}

defineClass(6, 251, $intern_26, Label, Label_0);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 6);
function $schedule_0(this$static){
  this$static.duration = 0;
  this$static.canceled = false;
  if (!this$static.scheduled) {
    this$static.scheduled = true;
    $scheduleFinally(($clinit_SchedulerImpl() , INSTANCE), this$static);
  }
}

function LayoutCommand(layout){
  this.layout = layout;
}

defineClass(347, 1, {}, LayoutCommand);
_.execute_1 = function execute_12(){
  this.scheduled = false;
  if (this.canceled) {
    return;
  }
  $layout(this.layout, this.duration);
}
;
_.canceled = false;
_.duration = 0;
_.scheduled = false;
var Lcom_google_gwt_user_client_ui_LayoutCommand_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutCommand', 347);
function $add_4(this$static, widget){
  $insert_0(this$static, widget, this$static.children_0.size_0);
}

function $insert_0(this$static, widget, beforeIndex){
  var layer;
  $removeFromParent_0(widget);
  $insert_2(this$static.children_0, widget, beforeIndex);
  layer = $attachChild(this$static.layout, widget.element);
  widget.layoutData = layer;
  $setParent(widget, this$static);
  $schedule_0(this$static.layoutCmd);
}

function $onResize_0(this$static){
  var child, child$iterator;
  for (child$iterator = new WidgetCollection$WidgetIterator(this$static.children_0); child$iterator.index_0 < child$iterator.this$01.size_0;) {
    child = $next_1(child$iterator);
    instanceOf(child, 177) && dynamicCast(child, 177).onResize_1();
  }
}

defineClass(271, 155, $intern_28);
_.add_0 = function add_7(widget){
  $add_4(this, widget);
}
;
_.onAttach = function onAttach_2(){
  $onAttach(this);
}
;
_.onDetach = function onDetach_1(){
  $onDetach(this);
  $removeLayerRefs(this.layout.parentElem);
}
;
_.onResize_1 = function onResize_2(){
  $onResize_0(this);
}
;
_.remove = function remove_6(w){
  var removed;
  removed = $remove(this, w);
  removed && $removeChild_0(this.layout, w.layoutData);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_LayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LayoutPanel', 271);
function $checkIndex(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.element.options.length) {
    throw new IndexOutOfBoundsException;
  }
}

function $getItemText(this$static, index_0){
  $checkIndex(this$static, index_0);
  return $getOptionText(this$static.element.options[index_0]);
}

function $getOptionText(option){
  var text_0, node;
  text_0 = option.text;
  (node = option.getAttributeNode('bidiwrapped') , !!(node && node.specified)) && text_0.length > 1 && (text_0 = __substr(text_0, 1, text_0.length - 1 - 1));
  return text_0;
}

function $getValue(this$static, index_0){
  $checkIndex(this$static, index_0);
  return this$static.element.options[index_0].value;
}

function $insertItem(this$static, item_0){
  $insertItem_0(this$static, item_0, item_0, -1);
}

function $insertItem_0(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = this$static.element;
  option = $createElement($doc, 'option');
  option.text = item_0;
  $removeAttribute(option, 'bidiwrapped');
  option.value = value_0;
  itemCount = select.options.length;
  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);
  if (index_0 == itemCount) {
    $selectAdd(select, option, null);
  }
   else {
    before = select.options[index_0];
    $selectAdd(select, option, before);
  }
}

function $setSelectedIndex_0(this$static, index_0){
  $setSelectedIndex(this$static.element, index_0);
}

function ListBox(){
  FocusWidget.call(this, $createElement($doc, 'select'));
  $setClassName(this.element, 'gwt-ListBox');
}

defineClass(74, 221, $intern_26, ListBox);
var Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ListBox', 74);
function $setText_1(this$static, text_0){
  this$static.element['value'] = text_0 != null?text_0:'';
}

function ValueBoxBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(487, 221, $intern_26);
_.onBrowserEvent = function onBrowserEvent_3(event_0){
  var type_0;
  type_0 = $eventGetTypeInt(event_0.type);
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_3(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 487);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

defineClass(488, 487, $intern_26);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 488);
function TextBox(){
  $clinit_TextBoxBase();
  TextBox_0.call(this, $createInputElement($doc, 'text'), 'gwt-TextBox');
}

function TextBox_0(element, styleName){
  ValueBoxBase.call(this, element, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser)));
  $setClassName(this.element, styleName);
}

defineClass(86, 488, $intern_26, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 86);
function PasswordTextBox(){
  $clinit_TextBoxBase();
  TextBox_0.call(this, $createInputElement($doc, 'password'), 'gwt-PasswordTextBox');
}

defineClass(225, 86, $intern_26, PasswordTextBox);
var Lcom_google_gwt_user_client_ui_PasswordTextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PasswordTextBox', 225);
function $add_5(this$static, w){
  if (this$static.widget) {
    throw new IllegalStateException_0('SimplePanel can only contain one child widget');
  }
  this$static.setWidget(w);
}

function $remove_3(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), w.element);
    this$static.widget = null;
  }
  return true;
}

function $setWidget_1(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent_0(w);
  !!this$static.widget && $remove_3(this$static, this$static.widget);
  this$static.widget = w;
  if (w) {
    $appendChild(this$static.getContainerElement(), resolve(this$static.widget.element));
    $setParent(w, this$static);
  }
}

function SimplePanel(){
  SimplePanel_0.call(this, $createElement($doc, 'div'));
}

function SimplePanel_0(elem){
  this.element = elem;
}

defineClass(114, 644, $intern_27, SimplePanel);
_.add_0 = function add_8(w){
  $add_5(this, w);
}
;
_.getContainerElement = function getContainerElement(){
  return this.element;
}
;
_.iterator = function iterator_3(){
  return new SimplePanel$1(this);
}
;
_.remove = function remove_7(w){
  return $remove_3(this, w);
}
;
_.setWidget = function setWidget(w){
  $setWidget_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 114);
function $center(this$static){
  var elem, initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    $setPropertyImpl(this$static.element.style, 'visibility', 'hidden');
    !!this$static.glass && $setPropertyImpl(this$static.glass.style, 'visibility', 'hidden');
    this$static.isAnimationEnabled = false;
    $show(this$static);
  }
  elem = this$static.element;
  $setPropertyImpl(elem.style, 'left', ($clinit_Style$Unit() , '0.0px'));
  $setPropertyImpl(elem.style, 'top', '0.0px');
  left = $getClientWidth($doc) - $getPropertyInt(this$static.element, 'offsetWidth') >> 1;
  top_0 = $getClientHeight($doc) - $getPropertyInt(this$static.element, 'offsetHeight') >> 1;
  $setPopupPosition(this$static, max_0($getScrollLeft_0($doc) + left, 0), max_0($getScrollTop($doc) + top_0, 0));
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      $setClip(this$static.element, 'rect(0px, 0px, 0px, 0px)');
      $setPropertyImpl(this$static.element.style, 'visibility', 'visible');
      !!this$static.glass && $setPropertyImpl(this$static.glass.style, 'visibility', 'visible');
      $run(this$static.resizeAnimation, 200, now_1(), null);
    }
     else {
      $setPropertyImpl(this$static.element.style, 'visibility', 'visible');
      !!this$static.glass && $setPropertyImpl(this$static.glass.style, 'visibility', 'visible');
    }
  }
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = event_0.srcElement;
  if (is_0(target)) {
    return isOrHasChildImpl(this$static.element, target);
  }
  return false;
}

function $hide(this$static){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_1(this$static);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight_0(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth_0(this$static.desiredWidth);
  }
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type_0;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type_0 = $eventGetTypeInt(nativeEvent.type);
  switch (type_0) {
    case 512:
    case 256:
    case 128:
      {
        $eventGetKeyCode(nativeEvent) & 65535;
        ($eventGetShiftKey(nativeEvent)?1:0) | ($eventGetMetaKey(nativeEvent)?8:0) | ($eventGetCtrlKey(nativeEvent)?2:0) | ($eventGetAltKey(nativeEvent)?4:0);
        return;
      }

    case 4:
    case 1048576:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        $hide(this$static);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
    case $intern_16:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.srcElement;
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $setGlassEnabled(this$static){
  this$static.isGlassEnabled = true;
  if (!this$static.glass) {
    this$static.glass = $createElement($doc, 'div');
    $setClassName(this$static.glass, this$static.glassStyleName);
    this$static.glass.style['position'] = ($clinit_Style$Position() , 'absolute');
    this$static.glass.style['left'] = ($clinit_Style$Unit() , '0.0px');
    this$static.glass.style['top'] = '0.0px';
  }
}

function $setHeight_0(this$static, height){
  this$static.desiredHeight = height;
  $maybeUpdateSize(this$static);
  height.length == 0 && (this$static.desiredHeight = null);
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= $getBodyOffsetLeft($doc);
  top_0 -= $getBodyOffsetTop($doc);
  elem = this$static.element;
  elem.style['left'] = left + ($clinit_Style$Unit() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setVisible_0(this$static, visible){
  this$static.element.style['visibility'] = visible?'visible':'hidden';
  !!this$static.glass && (this$static.glass.style['visibility'] = visible?'visible':'hidden' , undefined);
}

function $setWidth_0(this$static, width_0){
  this$static.desiredWidth = width_0;
  $maybeUpdateSize(this$static);
  width_0.length == 0 && (this$static.desiredWidth = null);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else 
    this$static.attached && $removeFromParent_0(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $updateHandlers(this$static){
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (this$static.historyHandlerRegistration) {
    $removeHandler(this$static.historyHandlerRegistration.real);
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new PopupPanel$3(this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler(new PopupPanel$4(this$static));
  }
}

function PopupPanel(){
  SimplePanel.call(this);
  this.glassResizer = new PopupPanel$1(this);
  this.glassStyleName = 'gwt-PopupPanelGlass';
  this.isAnimationEnabled = false;
  this.leftPosition = -1;
  this.resizeAnimation = new PopupPanel$ResizeAnimation(this);
  this.topPosition = -1;
  $appendChild(this.element, $createElement($doc, 'div'));
  $setPopupPosition(this, 0, 0);
  $setClassName($getParentElement($getFirstChildElement(this.element)), 'gwt-PopupPanel');
  $setClassName($getFirstChildElement(this.element), 'popupContent');
}

defineClass(218, 114, $intern_27, PopupPanel);
_.getContainerElement = function getContainerElement_0(){
  return $getFirstChildElement(this.element);
}
;
_.getStyleElement = function getStyleElement_0(){
  return $getParentElement($getFirstChildElement(this.element));
}
;
_.onUnload = function onUnload_2(){
  this.showing && $setState(this.resizeAnimation, false, true);
}
;
_.setHeight_0 = function setHeight_1(height){
  $setHeight_0(this, height);
}
;
_.setVisible = function setVisible_1(visible){
  $setVisible_0(this, visible);
}
;
_.setWidget = function setWidget_0(w){
  $setWidget_1(this, w);
  $maybeUpdateSize(this);
}
;
_.setWidth_0 = function setWidth_1(width_0){
  $setWidth_0(this, width_0);
}
;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = 0;
_.modal = false;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = 0;
var Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel', 218);
function $onResize_1(this$static){
  var height, style, width_0, winHeight, winWidth;
  style = this$static.this$01.glass.style;
  winWidth = $getClientWidth($doc);
  winHeight = $getClientHeight($doc);
  $setPropertyImpl(style, 'display', ($clinit_Style$Display() , 'none'));
  $setPropertyImpl(style, 'width', ($clinit_Style$Unit() , '0.0px'));
  $setPropertyImpl(style, 'height', '0.0px');
  width_0 = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  style['width'] = (width_0 > winWidth?width_0:winWidth) + 'px';
  style['height'] = (height > winHeight?height:winHeight) + 'px';
  $setPropertyImpl(style, 'display', 'block');
}

function PopupPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(418, 1, $intern_22, PopupPanel$1);
_.onResize = function onResize_3(event_0){
  $onResize_1(this);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/1', 418);
function PopupPanel$3(this$0){
  this.this$01 = this$0;
}

defineClass(419, 1, $intern_21, PopupPanel$3);
_.onPreviewNativeEvent = function onPreviewNativeEvent_0(event_0){
  $previewNativeEvent(this.this$01, event_0);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/3', 419);
function PopupPanel$4(this$0){
  this.this$01 = this$0;
}

defineClass(420, 1, {672:1, 7:1}, PopupPanel$4);
var Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/4', 420);
function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $appendChild($doc.body, this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize_1(this$static.curPanel.glassResizer);
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $removeChild($doc.body, this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration.real);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading || $remove_0(($clinit_RootPanel() , get_1()), this$static.curPanel);
  }
  $setClip(this$static.curPanel.element, 'rect(auto, auto, auto, auto)');
  $setPropertyImpl(this$static.curPanel.element.style, 'overflow', 'visible');
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    $setPropertyImpl(this$static.curPanel.element.style, 'position', 'absolute');
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_0(($clinit_RootPanel() , get_1()), this$static.curPanel);
  }
   else {
    this$static.isUnloading || $remove_0(($clinit_RootPanel() , get_1()), this$static.curPanel);
  }
  $setPropertyImpl(this$static.curPanel.element.style, 'overflow', 'visible');
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width_0;
  this$static.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = round_int(progress * this$static.offsetHeight_0);
  width_0 = round_int(progress * this$static.offsetWidth_0);
  switch (0) {
    case 0:
      top_0 = this$static.offsetHeight_0 - height >> 1;
      left = this$static.offsetWidth_0 - width_0 >> 1;
      right = left + width_0;
      bottom = top_0 + height;
  }
  $setClip(this$static.curPanel.element, 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function $setState(this$static, showing, isUnloading){
  var animate;
  this$static.isUnloading = isUnloading;
  $cancel(this$static);
  if (this$static.showTimer) {
    $cancel_0(this$static.showTimer);
    this$static.showTimer = null;
    $onComplete(this$static);
  }
  this$static.curPanel.showing = showing;
  $updateHandlers(this$static.curPanel);
  animate = !isUnloading && this$static.curPanel.isAnimationEnabled;
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      $setPropertyImpl(this$static.curPanel.element.style, 'position', 'absolute');
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      $setClip(this$static.curPanel.element, 'rect(0px, 0px, 0px, 0px)');
      $add_0(($clinit_RootPanel() , get_1()), this$static.curPanel);
      this$static.showTimer = new PopupPanel$ResizeAnimation$1(this$static);
      $schedule(this$static.showTimer, 1);
    }
     else {
      $run(this$static, 200, now_1(), null);
    }
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function PopupPanel$ResizeAnimation(panel){
  Animation.call(this);
  this.curPanel = panel;
}

defineClass(416, 215, {}, PopupPanel$ResizeAnimation);
_.onComplete = function onComplete_1(){
  $onComplete(this);
}
;
_.onStart = function onStart_0(){
  this.offsetHeight_0 = $getPropertyInt(this.curPanel.element, 'offsetHeight');
  this.offsetWidth_0 = $getPropertyInt(this.curPanel.element, 'offsetWidth');
  $setPropertyImpl(this.curPanel.element.style, 'overflow', 'hidden');
  $onUpdate(this, (1 + cos_0($intern_1)) / 2);
}
;
_.onUpdate = function onUpdate_0(progress){
  $onUpdate(this, progress);
}
;
_.curPanel = null;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight_0 = 0;
_.offsetWidth_0 = -1;
_.showing = false;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation', 416);
function PopupPanel$ResizeAnimation$1(this$1){
  this.this$11 = this$1;
  Timer.call(this);
}

defineClass(417, 186, {}, PopupPanel$ResizeAnimation$1);
_.run = function run_2(){
  this.this$11.showTimer = null;
  $run(this.this$11, 200, now_1(), null);
}
;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation/1', 417);
function $clinit_PotentialElement(){
  $clinit_PotentialElement = emptyMethod;
  declareShim();
}

function $setResolver(this$static, resolver){
  $clinit_PotentialElement();
  this$static.__gwt_resolve = buildResolveCallback(resolver);
}

function buildResolveCallback(resolver){
  return function(){
    this.__gwt_resolve = cannotResolveTwice;
    return resolver.resolvePotentialElement();
  }
  ;
}

function cannotResolveTwice(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function declareShim(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function RootLayoutPanel(){
  ComplexPanel.call(this);
  $setElement(this, $createElement($doc, 'div'));
  this.layout = new Layout(this.element);
  this.layoutCmd = new LayoutCommand(this.layout);
  addResizeHandler(new RootLayoutPanel$1(this));
}

function get_0(){
  if (!singleton_0) {
    singleton_0 = new RootLayoutPanel;
    $add_0(($clinit_RootPanel() , get_1()), singleton_0);
  }
  return singleton_0;
}

defineClass(272, 271, $intern_28, RootLayoutPanel);
_.onLoad = function onLoad_4(){
  $fillParent(this.layout.parentElem);
}
;
var singleton_0;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel', 272);
function RootLayoutPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(273, 1, $intern_22, RootLayoutPanel$1);
_.onResize = function onResize_4(event_0){
  $onResize_0(this.this$01);
}
;
var Lcom_google_gwt_user_client_ui_RootLayoutPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootLayoutPanel/1', 273);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  this.element = elem;
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_13(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_1(){
  $clinit_RootPanel();
  var rp;
  rp = dynamicCast($get_4(rootPanels, null), 182);
  if (rp) {
    return rp;
  }
  rootPanels.size_0 == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put_1(rootPanels, null, rp);
  $add_10(widgetsToDetach, rp);
  return rp;
}

function getBodyElement(){
  $clinit_RootPanel();
  return $doc.body;
}

defineClass(182, 298, $intern_29);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 182);
function RootPanel$1(){
}

defineClass(300, 1, {}, RootPanel$1);
_.execute_2 = function execute_13(w){
  w.isAttached() && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 300);
function RootPanel$2(){
}

defineClass(301, 1, {669:1, 7:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 301);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, getBodyElement());
}

defineClass(299, 182, $intern_29, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 299);
function $getMaximumHorizontalScrollPosition(scrollable){
  return $isRtl(scrollable)?0:($getSubPixelScrollWidth(scrollable) | 0) - (scrollable.clientWidth | 0);
}

function $getMinimumHorizontalScrollPosition(scrollable){
  return $isRtl(scrollable)?(scrollable.clientWidth | 0) - ($getSubPixelScrollWidth(scrollable) | 0):0;
}

defineClass(661, 1, {});
var impl_0;
var Lcom_google_gwt_user_client_ui_ScrollImpl_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollImpl', 661);
function $initialize(scrollable, container){
  scrollable.__lastScrollTop = scrollable.__lastScrollLeft = 0;
  scrollable.attachEvent('onscroll', scrollHandler);
  scrollable.attachEvent('onresize', resizeHandler);
  container.attachEvent('onresize', resizeHandler);
  container.__isScrollContainer = true;
}

function $isRtl(scrollable){
  return scrollable.currentStyle.direction == 'rtl';
}

function ScrollImpl$ScrollImplTrident(){
  initStaticHandlers();
}

function initStaticHandlers(){
  scrollHandler = function(){
    var scrollableElem = $wnd.event.srcElement;
    scrollableElem.__lastScrollTop = scrollableElem.scrollTop;
    scrollableElem.__lastScrollLeft = scrollableElem.scrollLeft;
  }
  ;
  resizeHandler = function(){
    var scrollableElem = $wnd.event.srcElement;
    scrollableElem.__isScrollContainer && (scrollableElem = scrollableElem.parentNode);
    setTimeout($entry(function(){
      if (scrollableElem.scrollTop != scrollableElem.__lastScrollTop || scrollableElem.scrollLeft != scrollableElem.__lastScrollLeft) {
        scrollableElem.__lastScrollTop = scrollableElem.scrollTop;
        scrollableElem.__lastScrollLeft = scrollableElem.scrollLeft;
        triggerScrollEvent(scrollableElem);
      }
    }
    ), 1);
  }
  ;
}

function triggerScrollEvent(elem){
  $dispatchEvent(elem, $createHtmlEvent($doc, 'scroll'));
}

defineClass(224, 661, {}, ScrollImpl$ScrollImplTrident);
var resizeHandler, scrollHandler;
var Lcom_google_gwt_user_client_ui_ScrollImpl$ScrollImplTrident_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollImpl/ScrollImplTrident', 224);
function $getMaximumHorizontalScrollPosition_0(this$static){
  return $getMaximumHorizontalScrollPosition((!impl_0 && (impl_0 = new ScrollImpl$ScrollImplTrident) , this$static.scrollableElem));
}

function $getMaximumVerticalScrollPosition(this$static){
  return ($getSubPixelScrollHeight(this$static.scrollableElem) | 0) - (this$static.scrollableElem.clientHeight | 0);
}

function $getMinimumHorizontalScrollPosition_0(this$static){
  return $getMinimumHorizontalScrollPosition((!impl_0 && (impl_0 = new ScrollImpl$ScrollImplTrident) , this$static.scrollableElem));
}

function $setHorizontalScrollPosition(this$static, position){
  $setScrollLeft(this$static.scrollableElem, position);
}

function $setTouchScrollingDisabled(this$static){
  var scroller;
  if (this$static.touchScroller) {
    return false;
  }
  this$static.touchScroller = (scroller = (!isSupported && (isSupported = ($clinit_Boolean() , !impl && (impl = new TouchEvent$TouchSupportDetectorNo) , $clinit_Boolean() , FALSE_0)) , isSupported.value_0?new TouchScroller:null) , !!scroller && $setTargetWidget(scroller, this$static) , scroller);
  return !this$static.touchScroller;
}

function $setVerticalScrollPosition(this$static, position){
  $setScrollTop(this$static.scrollableElem, position);
}

function ScrollPanel(){
  SimplePanel.call(this);
  this.scrollableElem = this.element;
  this.containerElem = $createElement($doc, 'div');
  $appendChild(this.scrollableElem, this.containerElem);
  this.scrollableElem.style['overflow'] = ($clinit_Style$Overflow() , 'auto');
  this.scrollableElem.style['position'] = ($clinit_Style$Position() , 'relative');
  this.containerElem.style['position'] = 'relative';
  $setPropertyImpl(this.scrollableElem.style, 'zoom', '1');
  $setPropertyImpl(this.containerElem.style, 'zoom', '1');
  $setTouchScrollingDisabled(this);
  !impl_0 && (impl_0 = new ScrollImpl$ScrollImplTrident);
  $initialize(this.scrollableElem, this.containerElem);
}

defineClass(222, 114, $intern_28, ScrollPanel);
_.getContainerElement = function getContainerElement_1(){
  return this.containerElem;
}
;
_.onAttach = function onAttach_3(){
  $onAttach(this);
  setEventListener(this.scrollableElem, this);
}
;
_.onDetach = function onDetach_2(){
  setEventListener(this.scrollableElem, null);
  $onDetach(this);
}
;
_.onResize_1 = function onResize_5(){
  var child;
  child = this.widget;
  !!child && instanceOf(child, 177) && dynamicCast(child, 177).onResize_1();
}
;
_.setHeight_0 = function setHeight_2(height){
  $setPropertyImpl(this.element.style, 'height', height);
}
;
_.setWidth_0 = function setWidth_2(width_0){
  $setPropertyImpl(this.element.style, 'width', width_0);
}
;
var Lcom_google_gwt_user_client_ui_ScrollPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ScrollPanel', 222);
function $setValue_1(this$static, value_0){
  !value_0 && (value_0 = ($clinit_Boolean() , FALSE_0));
  $setChecked(this$static.element, value_0.value_0);
  $setDefaultChecked(this$static.element, value_0.value_0);
}

function SimpleCheckBox(){
  SimpleCheckBox_0.call(this, $createCheckInputElement($doc));
}

function SimpleCheckBox_0(element){
  $setElement(this, element);
  $setClassName(this.element, 'gwt-SimpleCheckBox');
}

defineClass(142, 221, $intern_26, SimpleCheckBox);
_.onUnload = function onUnload_3(){
  var propName;
  $setValue_1(this, (propName = this.attached?'checked':'defaultChecked' , $clinit_Boolean() , this.element[propName]?TRUE_0:FALSE_0));
}
;
var Lcom_google_gwt_user_client_ui_SimpleCheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimpleCheckBox', 142);
function $next_0(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw new NoSuchElementException;
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(421, 1, {}, SimplePanel$1);
_.hasNext = function hasNext_0(){
  return this.hasElement;
}
;
_.next_0 = function next_1(){
  return $next_0(this);
}
;
_.remove_0 = function remove_8(){
  !!this.returned && $remove_3(this.this$01, this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 421);
function $add_6(this$static, w, stackText){
  $insert_1(this$static, w, this$static.children_0.size_0);
  $setStackText(this$static, this$static.children_0.size_0 - 1, stackText);
}

function $findDividerIndex(this$static, elem){
  var expando, ownerHash;
  while (!!elem && elem != this$static.element) {
    expando = $getPropertyString(elem, '__index');
    if (expando != null) {
      ownerHash = $getPropertyInt(elem, '__owner');
      return ownerHash == getHashCode(this$static)?__parseAndValidateInt(expando):-1;
    }
    elem = $getParentElement(elem);
  }
  return -1;
}

function $insert_1(this$static, w, beforeIndex){
  var effectiveIndex, tdb, tdh, trb, trh;
  trh = $createElement($doc, 'tr');
  tdh = $createElement($doc, 'td');
  $appendChild(trh, resolve(tdh));
  $appendChild(tdh, resolve($createElement($doc, 'div')));
  trb = $createElement($doc, 'tr');
  tdb = $createElement($doc, 'td');
  $appendChild(trb, resolve(tdb));
  beforeIndex = $adjustIndex(this$static, w, beforeIndex);
  effectiveIndex = beforeIndex * 2;
  insertChild(this$static.body_0, trb, effectiveIndex);
  insertChild(this$static.body_0, trh, effectiveIndex);
  setStyleName(tdh, 'gwt-StackPanelItem', true);
  $setPropertyInt(tdh, '__owner', getHashCode(this$static));
  $setPropertyString(tdh, 'height', '1px');
  setStyleName(tdb, 'gwt-StackPanelContent', true);
  $setPropertyString(tdb, 'height', '100%');
  $setPropertyString(tdb, 'vAlign', 'top');
  $insert(this$static, w, tdb, beforeIndex);
  $updateIndicesFrom(this$static, beforeIndex);
  if (this$static.visibleStack == -1) {
    $showStack(this$static, 0);
  }
   else {
    $setStackVisible(this$static, beforeIndex, false);
    this$static.visibleStack >= beforeIndex && ++this$static.visibleStack;
    $setStackVisible(this$static, this$static.visibleStack, true);
  }
}

function $remove_4(this$static, index_0){
  return $remove_5(this$static, $get_3(this$static.children_0, index_0), index_0);
}

function $remove_5(this$static, child, index_0){
  var removed, rowIndex, tr;
  removed = $remove(this$static, child);
  if (removed) {
    rowIndex = 2 * index_0;
    tr = $getChild(this$static.body_0, rowIndex);
    $removeChild(this$static.body_0, tr);
    tr = $getChild(this$static.body_0, rowIndex);
    $removeChild(this$static.body_0, tr);
    this$static.visibleStack == index_0?(this$static.visibleStack = -1):this$static.visibleStack > index_0 && --this$static.visibleStack;
    $updateIndicesFrom(this$static, index_0);
  }
  return removed;
}

function $setStackText(this$static, index_0, text_0){
  var headerElem, tdWrapper;
  if (index_0 >= this$static.children_0.size_0) {
    return;
  }
  tdWrapper = $getChild(this$static.body_0, index_0 * 2).children[0];
  headerElem = $getFirstChildElement(tdWrapper);
  $setInnerText(headerElem, text_0);
}

function $setStackVisible(this$static, index_0, visible){
  var td, tdNext, tr, trNext, tr_0;
  tr = $getChild(this$static.body_0, index_0 * 2);
  if (!tr) {
    return;
  }
  td = $getFirstChildElement(tr);
  setStyleName(td, 'gwt-StackPanelItem-selected', visible);
  tr_0 = $getChild(this$static.body_0, index_0 * 2 + 1);
  setVisible(tr_0, visible);
  $get_3(this$static.children_0, index_0).setVisible(visible);
  trNext = $getChild(this$static.body_0, (index_0 + 1) * 2);
  if (trNext) {
    tdNext = $getFirstChildElement(trNext);
    setStyleName(tdNext, 'gwt-StackPanelItem-below-selected', visible);
  }
}

function $showStack(this$static, index_0){
  if (index_0 >= this$static.children_0.size_0 || index_0 < 0 || index_0 == this$static.visibleStack) {
    return;
  }
  this$static.visibleStack >= 0 && $setStackVisible(this$static, this$static.visibleStack, false);
  this$static.visibleStack = index_0;
  $setStackVisible(this$static, this$static.visibleStack, true);
}

function $updateIndicesFrom(this$static, beforeIndex){
  var c, childTD, childTR, i;
  for (i = beforeIndex , c = this$static.children_0.size_0; i < c; ++i) {
    childTR = $getChild(this$static.body_0, i * 2);
    childTD = $getFirstChildElement(childTR);
    $setPropertyInt(childTD, '__index', i);
    beforeIndex == 0?setStyleName(childTD, 'gwt-StackPanelItem-first', true):setStyleName(childTD, 'gwt-StackPanelItem-first', false);
  }
}

function StackPanel(){
  var table;
  ComplexPanel.call(this);
  table = $createElement($doc, 'table');
  this.element = table;
  this.body_0 = $createElement($doc, 'tbody');
  $appendChild(table, resolve(this.body_0));
  $setPropertyInt(table, 'cellSpacing', 0);
  $setPropertyInt(table, 'cellPadding', 0);
  $maybeInitializeEventSystem();
  $sinkEventsImpl(table, 1);
  $setClassName(this.element, 'gwt-StackPanel');
}

defineClass(223, 155, $intern_27, StackPanel);
_.add_0 = function add_9(w){
  $insert_1(this, w, this.children_0.size_0);
}
;
_.onBrowserEvent = function onBrowserEvent_4(event_0){
  var index_0, target;
  if ($eventGetTypeInt(event_0.type) == 1) {
    target = event_0.srcElement;
    index_0 = $findDividerIndex(this, target);
    index_0 != -1 && $showStack(this, index_0);
  }
  $onBrowserEvent(this, event_0);
}
;
_.remove = function remove_9(child){
  return $remove_5(this, child, $indexOf(this.children_0, child));
}
;
_.visibleStack = -1;
var Lcom_google_gwt_user_client_ui_StackPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'StackPanel', 223);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_0 = new ValueBoxBase$TextAlignment$1;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2;
  LEFT_0 = new ValueBoxBase$TextAlignment$3;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_ValueBoxBase$TextAlignment();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_4, 101, 0, [CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(101, 4, $intern_30);
var CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 101, values_7);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(489, 101, $intern_30, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 489, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(490, 101, $intern_30, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 490, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(491, 101, $intern_30, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 491, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(492, 101, $intern_30, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 492, null);
function $add_7(this$static, w){
  var td, tr, td_0;
  tr = $createElement($doc, 'tr');
  td = (td_0 = $createElement($doc, 'td') , $setPropertyString(td_0, 'align', this$static.horzAlign.textAlignString) , $setCellVerticalAlignment_0(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function $setHorizontalAlignment_0(this$static, align_0){
  this$static.horzAlign = align_0;
}

function $setVerticalAlignment(this$static, align_0){
  this$static.vertAlign = align_0;
}

function VerticalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(70, 250, $intern_27, VerticalPanel);
_.add_0 = function add_10(w){
  $add_7(this, w);
}
;
_.remove = function remove_10(w){
  var removed, td;
  td = $getParentElement(w.element);
  removed = $remove(this, w);
  removed && $removeChild(this.body_0, $getParentElement(td));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 70);
function $add_8(this$static, w){
  $insert_2(this$static, w, this$static.size_0);
}

function $get_3(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  return this$static.array[index_0];
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_2(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 9, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_6(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_7(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_6(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 9, 4, 0, 1);
}

defineClass(351, 1, {}, WidgetCollection);
_.iterator = function iterator_4(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 351);
function $next_1(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_8(this$static){
  if (!this$static.currentWidget) {
    throw new IllegalStateException;
  }
  this$static.this$01.parent_0.remove(this$static.currentWidget);
  --this$static.index_0;
  this$static.currentWidget = null;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(160, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext_1(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next_0 = function next_2(){
  return $next_1(this);
}
;
_.remove_0 = function remove_11(){
  $remove_8(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 160);
function copyWidgetArray(widgets){
  var clone, i;
  clone = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 9, widgets.length, 0, 1);
  for (i = 0; i < widgets.length; i++) {
    setCheck(clone, i, widgets[i]);
  }
  return clone;
}

function createWidgetIterator(container, contained){
  return new WidgetIterators$1(contained, container);
}

function $gotoNextIndex(this$static){
  ++this$static.index_0;
  while (this$static.index_0 < this$static.val$contained1.length) {
    if (this$static.val$contained1[this$static.index_0]) {
      return;
    }
    ++this$static.index_0;
  }
}

function $next_2(this$static){
  var w;
  if (this$static.index_0 >= this$static.val$contained1.length) {
    throw new NoSuchElementException;
  }
  this$static.last = this$static.index_0;
  w = this$static.val$contained1[this$static.index_0];
  $gotoNextIndex(this$static);
  return w;
}

function WidgetIterators$1(val$contained, val$container){
  this.val$contained1 = val$contained;
  this.val$container2 = val$container;
  this.widgets = this.val$contained1;
  $gotoNextIndex(this);
}

defineClass(545, 1, {}, WidgetIterators$1);
_.hasNext = function hasNext_2(){
  return this.index_0 < this.val$contained1.length;
}
;
_.next_0 = function next_3(){
  return $next_2(this);
}
;
_.remove_0 = function remove_12(){
  if (this.last < 0) {
    throw new IllegalStateException;
  }
  if (!this.widgetsWasCopied) {
    this.widgets = copyWidgetArray(this.widgets);
    this.widgetsWasCopied = true;
  }
  $remove_2(this.val$container2, this.val$contained1[this.last]);
  this.last = -1;
}
;
_.index_0 = -1;
_.last = -1;
_.widgetsWasCopied = false;
var Lcom_google_gwt_user_client_ui_WidgetIterators$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetIterators/1', 545);
function $clinit_ClippedImageImpl(){
  var global, key;
  $clinit_ClippedImageImpl = emptyMethod;
  clearImage = ($clinit_UriUtils() , new SafeUriString((key = '__gwtDevModeHook:' + $moduleName + ':moduleBase' , global = $wnd || self , global[key] || $moduleBase) + 'clear.cache.gif'));
}

function $getSafeHtml(url_0, left, top_0, width_0, height){
  var builder;
  builder = new SafeStylesBuilder;
  $append($append($append(builder, new SafeStylesString('width:' + width_0 + ($clinit_Style$Unit() , 'px') + ';')), new SafeStylesString('height:' + height + 'px' + ';')), new SafeStylesString('background:' + ('url(' + url_0.uri_0 + ') ' + 'no-repeat ' + (-left + 'px ') + (-top_0 + 'px')) + ';'));
  return !template && (template = new ClippedImageImpl_TemplateImpl) , $image(clearImage, new SafeStylesString((new SafeStylesString(builder.sb.string)).css));
}

var clearImage, template;
function $image(arg0, arg1){
  var sb;
  sb = new StringBuilder;
  sb.string += "<img onload='this.__gwtLastUnhandledEvent=\"load\";' src='";
  $append_3(sb, htmlEscape(arg0.uri_0));
  sb.string += "' style='";
  $append_3(sb, htmlEscape(arg1.css));
  sb.string += "' border='0'>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function ClippedImageImpl_TemplateImpl(){
}

defineClass(563, 1, {}, ClippedImageImpl_TemplateImpl);
var Lcom_google_gwt_user_client_ui_impl_ClippedImageImpl_1TemplateImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'ClippedImageImpl_TemplateImpl', 563);
function $clinit_ClippedImagePrototype(){
  $clinit_ClippedImagePrototype = emptyMethod;
  $clinit_ClippedImageImpl();
}

function ClippedImagePrototype(url_0, left, top_0, width_0, height){
  $clinit_ClippedImagePrototype();
  this.url_0 = url_0;
  this.left_0 = left;
  this.top_0 = top_0;
  this.width_0 = width_0;
  this.height = height;
}

defineClass(548, 664, {}, ClippedImagePrototype);
_.height = 0;
_.left_0 = 0;
_.top_0 = 0;
_.url_0 = null;
_.width_0 = 0;
var Lcom_google_gwt_user_client_ui_impl_ClippedImagePrototype_2_classLit = createForClass('com.google.gwt.user.client.ui.impl', 'ClippedImagePrototype', 548);
function $setClip(popup, rect){
  $setPropertyImpl(popup.style, 'clip', rect);
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals_0('ie8', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message, cause){
  Throwable.call(this, message, cause);
}

defineClass(202, 11, $intern_2);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 202);
defineClass(88, 202, $intern_2);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 88);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 11)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 11):null);
}

defineClass(262, 88, $intern_2, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 262);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $clearOnReadyStateChange(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function $open(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setRequestHeader(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function $removeHandler(this$static){
  this$static.this$01.doRemove(this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(315, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 315);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(316, 1, {623:1}, SimpleEventBus$2);
_.execute_1 = function execute_14(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 316);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(241, 1, {623:1}, SimpleEventBus$3);
_.execute_1 = function execute_15(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 241);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(204, 1, {});
_.toString$ = function toString_15(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 204);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(180, 73, $intern_2, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 180);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE_0 = new Boolean_0(false);
  TRUE_0 = new Boolean_0(true);
}

function Boolean_0(value_0){
  this.value_0 = value_0;
}

defineClass(130, 1, {3:1, 130:1, 8:1}, Boolean_0);
_.equals$ = function equals_10(o){
  return instanceOf(o, 130) && dynamicCast(o, 130).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_12(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_16(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var FALSE_0, TRUE_0;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 130);
function codePointAt(cs, index_0, limit){
  var hiSurrogate, loSurrogate;
  hiSurrogate = $charAt(cs, index_0++);
  if (hiSurrogate >= 55296 && hiSurrogate <= 56319 && index_0 < limit && isLowSurrogate(loSurrogate = cs.charCodeAt(index_0))) {
    return $intern_24 + ((hiSurrogate & 1023) << 10) + (loSurrogate & 1023);
  }
  return hiSurrogate;
}

function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function isLowSurrogate(ch_0){
  return ch_0 >= 56320 && ch_0 <= 57343;
}

function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(129, 73, $intern_2, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 129);
function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
  return toReturn;
}

defineClass(203, 1, {3:1, 203:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 203);
function Double(value_0){
  this.value_0 = value_0;
}

defineClass(181, 203, {3:1, 8:1, 181:1, 203:1}, Double);
_.equals$ = function equals_11(o){
  return instanceOf(o, 181) && dynamicCast(o, 181).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_13(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_18(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 181);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(94, 73, $intern_2, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 94);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(84, 73, $intern_2, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 84);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(85, 73, $intern_2, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 85);
function $equals(this$static, o){
  return instanceOf(o, 131) && dynamicCast(o, 131).value_0 == this$static.value_0;
}

function Integer(value_0){
  this.value_0 = value_0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(131, 203, {3:1, 8:1, 131:1, 203:1}, Integer);
_.equals$ = function equals_12(o){
  return $equals(this, o);
}
;
_.hashCode$ = function hashCode_14(){
  return this.value_0;
}
;
_.toString$ = function toString_19(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 131);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_4, 131, 256, 0, 1);
}

var boxedValues_0;
function abs_0(x_0){
  return x_0 <= 0?0 - x_0:x_0;
}

function cos_0(x_0){
  return Math.cos(x_0);
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0){
  return x_0 < 5?x_0:5;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(83, 73, $intern_2, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 83);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(144, 94, {3:1, 144:1, 11:1}, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 144);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className_0 = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(111, 1, {3:1, 111:1}, StackTraceElement);
_.equals$ = function equals_13(other){
  var st;
  if (instanceOf(other, 111)) {
    st = dynamicCast(other, 111);
    return this.lineNumber == st.lineNumber && equals_20(this.methodName, st.methodName) && equals_20(this.className_0, st.className_0) && equals_20(this.fileName, st.fileName);
  }
  return false;
}
;
_.hashCode$ = function hashCode_15(){
  return hashCode_22(initValues(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_4, 1, 3, [valueOf(this.lineNumber), this.className_0, this.methodName, this.fileName]));
}
;
_.toString$ = function toString_20(){
  return this.className_0 + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang', 'StackTraceElement', 111);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals_0(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_4, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function encodeUtf8(bytes, ofs, codePoint){
  if (codePoint < 128) {
    bytes[ofs] = narrow_byte(codePoint & 127);
    return 1;
  }
   else if (codePoint < 2048) {
    bytes[ofs++] = narrow_byte(codePoint >> 6 & 31 | 192);
    bytes[ofs] = narrow_byte(codePoint & 63 | 128);
    return 2;
  }
   else if (codePoint < $intern_24) {
    bytes[ofs++] = narrow_byte(codePoint >> 12 & 15 | 224);
    bytes[ofs++] = narrow_byte(codePoint >> 6 & 63 | 128);
    bytes[ofs] = narrow_byte(codePoint & 63 | 128);
    return 3;
  }
   else if (codePoint < 2097152) {
    bytes[ofs++] = narrow_byte(codePoint >> 18 & 7 | 240);
    bytes[ofs++] = narrow_byte(codePoint >> 12 & 63 | 128);
    bytes[ofs++] = narrow_byte(codePoint >> 6 & 63 | 128);
    bytes[ofs] = narrow_byte(codePoint & 63 | 128);
    return 4;
  }
   else if (codePoint < $intern_25) {
    bytes[ofs++] = narrow_byte(codePoint >> 24 & 3 | 248);
    bytes[ofs++] = narrow_byte(codePoint >> 18 & 63 | 128);
    bytes[ofs++] = narrow_byte(codePoint >> 12 & 63 | 128);
    bytes[ofs++] = narrow_byte(codePoint >> 6 & 63 | 128);
    bytes[ofs] = narrow_byte(codePoint & 63 | 128);
    return 5;
  }
  throw new IllegalArgumentException_0('Character out of range: ' + codePoint);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_24) {
    hiSurrogate = 55296 + (codePoint - $intern_24 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - $intern_24 & 1023) & 65535;
    return valueOf_0(hiSurrogate) + valueOf_0(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function getBytesUtf8(str){
  var byteCount, bytes, ch_0, i, i0, n, out;
  n = str.length;
  byteCount = 0;
  for (i0 = 0; i0 < n;) {
    ch_0 = codePointAt(str, i0, str.length);
    i0 += ch_0 >= $intern_24?2:1;
    ch_0 < 128?++byteCount:ch_0 < 2048?(byteCount += 2):ch_0 < $intern_24?(byteCount += 3):ch_0 < 2097152?(byteCount += 4):ch_0 < $intern_25 && (byteCount += 5);
  }
  bytes = initDim(B_classLit, $intern_4, 0, byteCount, 7, 1);
  out = 0;
  for (i = 0; i < n;) {
    ch_0 = codePointAt(str, i, str.length);
    i += ch_0 >= $intern_24?2:1;
    out += encodeUtf8(bytes, out, ch_0);
  }
  return bytes;
}

function valueOf_0(x_0){
  return String.fromCharCode(x_0);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function StringBuffer(){
  AbstractStringBuilder.call(this, '');
}

defineClass(616, 204, {617:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang', 'StringBuffer', 616);
function $append_1(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_4(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(5, 204, {617:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 5);
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(156, 73, $intern_2, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 156);
function $equals_1(this$static, obj){
  return instanceOf(obj, 141) && eq(fromDouble(this$static.jsdate.getTime()), fromDouble(dynamicCast(obj, 141).jsdate.getTime()));
}

function $fixDaylightSavings(this$static, requestedHours){
  var badHours, copy, day, hours, newTime, originalTimeInMillis, timeDiff, timeDiffHours, timeDiffMinutes;
  hours = this$static.jsdate.getHours();
  if (hours % 24 != requestedHours % 24) {
    copy = create(this$static.jsdate.getTime());
    $setDate(copy, copy.getDate() + 1);
    timeDiff = this$static.jsdate.getTimezoneOffset() - copy.getTimezoneOffset();
    if (timeDiff > 0) {
      timeDiffHours = ~~(timeDiff / 60);
      timeDiffMinutes = timeDiff % 60;
      day = this$static.jsdate.getDate();
      badHours = this$static.jsdate.getHours();
      badHours + timeDiffHours >= 24 && ++day;
      newTime = create_0(this$static.jsdate.getFullYear(), this$static.jsdate.getMonth(), day, requestedHours + timeDiffHours, this$static.jsdate.getMinutes() + timeDiffMinutes, this$static.jsdate.getSeconds(), this$static.jsdate.getMilliseconds());
      $setTime(this$static.jsdate, newTime.getTime());
    }
    return;
  }
  originalTimeInMillis = this$static.jsdate.getTime();
  $setTime(this$static.jsdate, originalTimeInMillis + 3600000);
  hours != this$static.jsdate.getHours() && $setTime(this$static.jsdate, originalTimeInMillis);
}

function $hashCode(this$static){
  var time;
  time = fromDouble(this$static.jsdate.getTime());
  return toInt(xor(time, shru(time, 32)));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(141, 1, $intern_31);
_.equals$ = function equals_14(obj){
  return $equals_1(this, obj);
}
;
_.hashCode$ = function hashCode_16(){
  return $hashCode(this);
}
;
_.toString$ = function toString_21(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 141);
function $toString_1(this$static){
  return padTwo(this$static.jsdate.getHours()) + ':' + padTwo(this$static.jsdate.getMinutes()) + ':' + padTwo(this$static.jsdate.getSeconds());
}

function Time(hour, minute, second){
  this.jsdate = new Date;
  $setFullYear(this.jsdate, 1970, 0, 1);
  $setHours(this.jsdate, hour, minute, second, 0);
  $fixDaylightSavings(this, hour);
}

function Time_0(time){
  this.jsdate = create(toDouble(time));
}

function valueOf_1(s){
  var hh, mm, split_0, ss;
  split_0 = $split(s, ':', 0);
  if (split_0.length != 3) {
    throw new IllegalArgumentException_0('Invalid escape format: ' + s);
  }
  try {
    hh = __parseAndValidateInt(split_0[0]);
    mm = __parseAndValidateInt(split_0[1]);
    ss = __parseAndValidateInt(split_0[2]);
    return new Time(hh, mm, ss);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 144)) {
      throw new IllegalArgumentException_0('Invalid escape format: ' + s);
    }
     else 
      throw unwrap_5($e0);
  }
}

defineClass(162, 141, $intern_31, Time, Time_0);
_.toString$ = function toString_22(){
  return $toString_1(this);
}
;
var Ljava_sql_Time_2_classLit = createForClass('java.sql', 'Time', 162);
function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next_0();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_0();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_2(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_0('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(642, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove_1 = function remove_13(o){
  return $advanceToFind(this, o, true);
}
;
_.toString$ = function toString_23(){
  return $toString_2(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 642);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = isJavaString(key)?key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_1(key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $toString_3(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(641, 1, {153:1});
_.equals$ = function equals_15(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 153)) {
    return false;
  }
  otherMap = dynamicCast(obj, 153);
  if (this.size_0 != otherMap.size_0) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(otherMap)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next_0(), 82));
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_17(){
  return hashCode_23(new AbstractHashMap$EntrySet(this));
}
;
_.toString$ = function toString_24(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_0('{');
  comma = false;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next_0(), 82));
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_3(sb, $toString_3(this, entry.getKey()));
    sb.string += '=';
    $append_3(sb, $toString_3(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 641);
function $containsKey(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_4(this$static, key){
  return getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_1(key) === undefined);
}

function $put_1(this$static, key, value_0){
  return isJavaString(key)?$putStringValue(this$static, key, value_0):$put_2(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_2(this$static.hashCodeMap, null, value_0):this$static.stringMap.put(key, value_0);
}

function $remove_9(this$static, key){
  return isJavaString(key)?key == null?$remove_14(this$static.hashCodeMap, null):this$static.stringMap.remove_3(key):$remove_14(this$static.hashCodeMap, key);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

defineClass(266, 641, {153:1});
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 266);
defineClass(643, 642, {199:1});
_.equals$ = function equals_16(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 199)) {
    return false;
  }
  other = dynamicCast(o, 199);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_18(){
  return hashCode_23(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 643);
function $contains(this$static, o){
  if (instanceOf(o, 82)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 82));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(132, 643, {199:1}, AbstractHashMap$EntrySet);
_.contains_0 = function contains_0(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_5(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove_1 = function remove_14(entry){
  var key;
  if ($contains(this, entry)) {
    key = dynamicCast(entry, 82).getKey();
    $remove_9(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_1(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 132);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_3(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , this$static.last = this$static.current , dynamicCast(this$static.current.next_0(), 82);
}

function $remove_10(this$static){
  checkState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_0();
  this$static.last = null;
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(133, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_3(){
  return $hasNext(this);
}
;
_.next_0 = function next_4(){
  return $next_3(this);
}
;
_.remove_0 = function remove_15(){
  $remove_10(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 133);
defineClass(646, 642, {106:1});
_.add_1 = function add_11(index_0, element){
  throw new UnsupportedOperationException_0('Add not supported on this list');
}
;
_.add_2 = function add_12(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_17(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 106)) {
    return false;
  }
  other = dynamicCast(o, 106);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next_0();
    elemOther = iterOther.next_0();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_19(){
  return hashCode_24(this);
}
;
_.iterator = function iterator_6(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_2 = function remove_16(index_0){
  throw new UnsupportedOperationException_0('Remove not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 646);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(66, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_4(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_0 = function next_5(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_0(this.last = this.i++);
}
;
_.remove_0 = function remove_17(){
  checkState(this.last != -1);
  this.this$01_0.remove_2(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 66);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(136, 66, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 136);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(238, 643, {199:1}, AbstractMap$1);
_.contains_0 = function contains_1(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_7(){
  return $iterator(this);
}
;
_.remove_1 = function remove_18(key){
  if ($containsKey(this.this$01, key)) {
    $remove_9(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_2(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 238);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(269, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_5(){
  return $hasNext(this.val$outerIter2);
}
;
_.next_0 = function next_6(){
  var entry;
  entry = $next_3(this.val$outerIter2);
  return entry.getKey();
}
;
_.remove_0 = function remove_19(){
  $remove_10(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 269);
defineClass(267, 1, $intern_32);
_.equals$ = function equals_18(other){
  var entry;
  if (!instanceOf(other, 82)) {
    return false;
  }
  entry = dynamicCast(other, 82);
  return equals_20(this.key, entry.getKey()) && equals_20(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_20(){
  return hashCode_25(this.key) ^ hashCode_25(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_25(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 267);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(268, 267, $intern_32, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 268);
defineClass(647, 1, $intern_32);
_.equals$ = function equals_19(other){
  var entry;
  if (!instanceOf(other, 82)) {
    return false;
  }
  entry = dynamicCast(other, 82);
  return equals_20(this.getKey(), entry.getKey()) && equals_20(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_21(){
  return hashCode_25(this.getKey()) ^ hashCode_25(this.getValue());
}
;
_.toString$ = function toString_26(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 647);
function $add_9(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get_5(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_1(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_20(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_11(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_12(this$static, o){
  var i;
  i = $indexOf_1(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove_2(i);
  return true;
}

function $set_0(this$static, index_0, o){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  setCheck(this$static.array, index_0, o);
  return previous;
}

function $toArray(this$static, out){
  var i, size_0, result;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = initializeArrayElementsWithDefaults(0, size_0) , initValues(getClass__Ljava_lang_Class___devirtual$(out), out.castableTypeMap$, out.__elementTypeId$, out.__elementTypeCategory$, result) , result));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(68, 646, $intern_33, ArrayList);
_.add_1 = function add_13(index_0, o){
  checkPositionIndex(index_0, this.array.length);
  splice_0(this.array, index_0, 0, o);
}
;
_.add_2 = function add_14(o){
  return $add_9(this, o);
}
;
_.contains_0 = function contains_2(o){
  return $indexOf_1(this, o, 0) != -1;
}
;
_.get_0 = function get_2(index_0){
  return $get_5(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.remove_2 = function remove_20(index_0){
  return $remove_11(this, index_0);
}
;
_.remove_1 = function remove_21(o){
  return $remove_12(this, o);
}
;
_.size_1 = function size_3(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 68);
function hashCode_22(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_23(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_24(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next_0();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(292, 646, $intern_33, Collections$EmptyList);
_.contains_0 = function contains_3(object){
  return false;
}
;
_.get_0 = function get_3(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_8(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_4(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 292);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(293, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_6(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_0 = function next_7(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_1(){
  throw new NoSuchElementException;
}
;
_.remove_0 = function remove_22(){
  throw new IllegalStateException;
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 293);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function recordLastKnownStructure(host, iterator){
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(415, 73, $intern_2, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 415);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function $equals_2(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $reset(this);
}

defineClass(93, 266, {3:1, 153:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 93);
function $add_10(this$static, o){
  var old;
  old = $put_1(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_13(this$static, o){
  return $remove_9(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(210, 643, {3:1, 199:1}, HashSet);
_.contains_0 = function contains_4(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_1(){
  return this.map_0.size_0 == 0;
}
;
_.iterator = function iterator_9(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.remove_1 = function remove_23(o){
  return $remove_13(this, o);
}
;
_.size_1 = function size_5(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_27(){
  return $toString_2(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 210);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_2(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_2(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_2(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_14(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + $getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_2(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(240, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 240);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_4, 82, 0, 0, 1);
}

defineClass(308, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_7(){
  return $hasNext_0(this);
}
;
_.next_0 = function next_8(){
  return checkCriticalElement($hasNext_0(this)) , this.lastChain = this.chain , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.remove_0 = function remove_24(){
  checkState(!!this.lastEntry);
  $remove_14(this.this$01, this.lastEntry.getKey());
  maskUndefined(this.chain) === maskUndefined(this.lastChain) && this.chain.length != 1 && --this.itemIndex;
  this.lastEntry = null;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastChain = null;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 308);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(306, 240, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_2(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 306);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(307, 68, $intern_33, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove_2 = function remove_25(index_0){
  var removed;
  return removed = dynamicCast($remove_11(this, index_0), 82) , $remove_14(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 307);
function InternalJsMapFactory(){
}

defineClass(303, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 303);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(305, 303, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 305);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(304, 303, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 304);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_3(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_1(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_15(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_1(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(207, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_1 = function get_4(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put = function put(key, value_0){
  return $put_3(this, key, value_0);
}
;
_.remove_3 = function remove_26(key){
  return $remove_15(this, key);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 207);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(297, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_8(){
  return this.i < this.val$keys2.length;
}
;
_.next_0 = function next_9(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.last = this.i++]);
}
;
_.remove_0 = function remove_27(){
  checkState(this.last != -1);
  this.this$01.remove_3(this.val$keys2[this.last]);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 297);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(239, 647, $intern_32, InternalJsStringMap$2);
_.getKey = function getKey_0(){
  return this.val$key2;
}
;
_.getValue = function getValue_0(){
  return this.this$01.get_1(this.val$key2);
}
;
_.setValue = function setValue_0(object){
  return this.this$01.put(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 239);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(294, 207, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_2(entry);
    }
  }
  return list.iterator();
}
;
_.get_1 = function get_5(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put = function put_0(key, value_0){
  return $put_3(this, ':' + key, value_0);
}
;
_.remove_3 = function remove_28(key){
  return $remove_15(this, ':' + key);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 294);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(296, 68, $intern_33, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove_2 = function remove_29(index_0){
  var removed;
  return removed = dynamicCast($remove_11(this, index_0), 82) , $remove_15(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 296);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(295, 207, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 295);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(112, 73, $intern_2, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 112);
function equals_20(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_25(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $onModuleLoad_0(){
  var addCoursePresenter, addSectionPresenter, adminCalendarPresenter, courseService, createAccountService, createAcctPresenter, editCoursePresenter, editSectionPresenter, examplePresenter, homePresenter, homeService, indexPresenter, indexView, injector, loginPagePresenter, manageUserPresenter, mapService, root, sectionsService, userService, viewCoursePresenter, registration, registration_0, registration_1, registration_2, registration_3, registration_4, registration_5, registration_6, registration_7, registration_8, registration_9, registration_10, registration_11, registration_12, registration_13, registration_14;
  root = get_0();
  injector = ($clinit_Injector() , INSTANCE_3);
  indexPresenter = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$IndexPresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  indexView = indexPresenter.view;
  mapService = $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$MapServiceImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_service_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration = $addHandler_0(mapService.eventBus, ($clinit_SendGetStartTimesEvent() , TYPE_51), mapService);
  $put_1(mapService.eventBusRegistration, TYPE_51, registration);
  registration = $addHandler_0(mapService.eventBus, ($clinit_SendGetEndTimesEvent() , TYPE_45), mapService);
  $put_1(mapService.eventBusRegistration, TYPE_45, registration);
  registration = $addHandler_0(mapService.eventBus, ($clinit_SendGetFrequenciesEvent() , TYPE_47), mapService);
  $put_1(mapService.eventBusRegistration, TYPE_47, registration);
  registration = $addHandler_0(mapService.eventBus, ($clinit_SendGetSectionTypesEvent() , TYPE_49), mapService);
  $put_1(mapService.eventBusRegistration, TYPE_49, registration);
  registration = $addHandler_0(mapService.eventBus, ($clinit_SendGetTermsEvent() , TYPE_52), mapService);
  $put_1(mapService.eventBusRegistration, TYPE_52, registration);
  homeService = $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$HomeServiceImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_service_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_0 = $addHandler_0(homeService.eventBus, ($clinit_SendGetFacultyEvent() , TYPE_46), homeService);
  $put_1(homeService.eventBusRegistration, TYPE_46, registration_0);
  registration_0 = $addHandler_0(homeService.eventBus, ($clinit_SendGetOneFacultySectionInfoEvent() , TYPE_48), homeService);
  $put_1(homeService.eventBusRegistration, TYPE_48, registration_0);
  $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$ScheduleServiceImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_service_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  courseService = $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$CourseServiceImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_service_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_1 = $addHandler_0(courseService.eventBus, ($clinit_SendNewCourseEvent() , TYPE_54), courseService);
  $put_1(courseService.eventBusRegistration, TYPE_54, registration_1);
  $put_1(courseService.eventBusRegistration, ($clinit_SendEditCourseEvent() , TYPE_42), $addHandler_0(courseService.eventBus, TYPE_42, courseService));
  $put_1(courseService.eventBusRegistration, ($clinit_SendRemoveCourseEvent() , TYPE_56), $addHandler_0(courseService.eventBus, TYPE_56, courseService));
  $put_1(courseService.eventBusRegistration, ($clinit_SendGetCourseListEvent() , TYPE_44), $addHandler_0(courseService.eventBus, TYPE_44, courseService));
  sectionsService = $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$SectionServiceImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_service_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  $put_1(sectionsService.eventBusRegistration, ($clinit_SendNewSectionEvent() , TYPE_55), $addHandler_0(sectionsService.eventBus, TYPE_55, sectionsService));
  $put_1(sectionsService.eventBusRegistration, ($clinit_SendEditSectionEvent() , TYPE_43), $addHandler_0(sectionsService.eventBus, TYPE_43, sectionsService));
  $put_1(sectionsService.eventBusRegistration, ($clinit_SendRemoveSectionEvent() , TYPE_57), $addHandler_0(sectionsService.eventBus, TYPE_57, sectionsService));
  $put_1(sectionsService.eventBusRegistration, ($clinit_SendGetSectionsEvent() , TYPE_50), $addHandler_0(sectionsService.eventBus, TYPE_50, sectionsService));
  adminCalendarPresenter = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$AdminCalendarPresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_2 = $addHandler_0(adminCalendarPresenter.eventBus, ($clinit_LoadScheduleEvent() , TYPE_20), adminCalendarPresenter);
  $put_1(adminCalendarPresenter.eventBusRegistration, TYPE_20, registration_2);
  registration_2 = $addHandler_0(adminCalendarPresenter.eventBus, ($clinit_ReceiveStartTimesEvent() , TYPE_40), adminCalendarPresenter);
  $put_1(adminCalendarPresenter.eventBusRegistration, TYPE_40, registration_2);
  registration_2 = $addHandler_0(adminCalendarPresenter.eventBus, ($clinit_ReceiveEndTimesEvent() , TYPE_26), adminCalendarPresenter);
  $put_1(adminCalendarPresenter.eventBusRegistration, TYPE_26, registration_2);
  registration_2 = $addHandler_0(adminCalendarPresenter.eventBus, ($clinit_ReceiveGetFacultyEvent() , TYPE_28), adminCalendarPresenter);
  $put_1(adminCalendarPresenter.eventBusRegistration, TYPE_28, registration_2);
  registration_2 = $addHandler_0(adminCalendarPresenter.eventBus, ($clinit_ReceiveGetTermsEvent() , TYPE_33), adminCalendarPresenter);
  $put_1(adminCalendarPresenter.eventBusRegistration, TYPE_33, registration_2);
  registration_2 = $addHandler_0(adminCalendarPresenter.eventBus, ($clinit_ReceiveGetOneFacultySectionInfoEvent() , TYPE_30), adminCalendarPresenter);
  $put_1(adminCalendarPresenter.eventBusRegistration, TYPE_30, registration_2);
  viewCoursePresenter = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$ViewCoursesPresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  $put_1(viewCoursePresenter.eventBusRegistration, ($clinit_LoadViewCoursesEvent() , TYPE_21), $addHandler_0(viewCoursePresenter.eventBus, TYPE_21, viewCoursePresenter));
  registration_3 = $addHandler_0(viewCoursePresenter.eventBus, ($clinit_ReceiveGetCourseListEvent() , TYPE_27), viewCoursePresenter);
  $put_1(viewCoursePresenter.eventBusRegistration, TYPE_27, registration_3);
  editCoursePresenter = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$EditCoursePresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_4 = $addHandler_0(editCoursePresenter.eventBus, ($clinit_LoadEditCourseEvent() , TYPE_16), editCoursePresenter);
  $put_1(editCoursePresenter.eventBusRegistration, TYPE_16, registration_4);
  $put_1(editCoursePresenter.eventBusRegistration, ($clinit_ReceiveGetFrequenciesEvent() , TYPE_29), $addHandler_0(editCoursePresenter.eventBus, TYPE_29, editCoursePresenter));
  $put_1(editCoursePresenter.eventBusRegistration, ($clinit_ReceiveGetSectionsEvent() , TYPE_32), $addHandler_0(editCoursePresenter.eventBus, TYPE_32, editCoursePresenter));
  addCoursePresenter = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$AddCoursePresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_5 = $addHandler_0(addCoursePresenter.eventBus, ($clinit_LoadAddCourseEvent() , TYPE_13), addCoursePresenter);
  $put_1(addCoursePresenter.eventBusRegistration, TYPE_13, registration_5);
  $put_1(addCoursePresenter.eventBusRegistration, TYPE_29, $addHandler_0(addCoursePresenter.eventBus, TYPE_29, addCoursePresenter));
  addSectionPresenter = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$AddSectionPresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_6 = $addHandler_0(addSectionPresenter.eventBus, ($clinit_LoadAddSectionEvent() , TYPE_14), addSectionPresenter);
  $put_1(addSectionPresenter.eventBusRegistration, TYPE_14, registration_6);
  registration_6 = $addHandler_0(addSectionPresenter.eventBus, TYPE_33, addSectionPresenter);
  $put_1(addSectionPresenter.eventBusRegistration, TYPE_33, registration_6);
  registration_6 = $addHandler_0(addSectionPresenter.eventBus, ($clinit_ReceiveGetSectionTypesEvent() , TYPE_31), addSectionPresenter);
  $put_1(addSectionPresenter.eventBusRegistration, TYPE_31, registration_6);
  registration_6 = $addHandler_0(addSectionPresenter.eventBus, TYPE_40, addSectionPresenter);
  $put_1(addSectionPresenter.eventBusRegistration, TYPE_40, registration_6);
  registration_6 = $addHandler_0(addSectionPresenter.eventBus, TYPE_26, addSectionPresenter);
  $put_1(addSectionPresenter.eventBusRegistration, TYPE_26, registration_6);
  editSectionPresenter = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$EditSectionPresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_7 = $addHandler_0(editSectionPresenter.eventBus, ($clinit_LoadEditSectionEvent() , TYPE_17), editSectionPresenter);
  $put_1(editSectionPresenter.eventBusRegistration, TYPE_17, registration_7);
  registration_7 = $addHandler_0(editSectionPresenter.eventBus, TYPE_33, editSectionPresenter);
  $put_1(editSectionPresenter.eventBusRegistration, TYPE_33, registration_7);
  registration_7 = $addHandler_0(editSectionPresenter.eventBus, TYPE_31, editSectionPresenter);
  $put_1(editSectionPresenter.eventBusRegistration, TYPE_31, registration_7);
  registration_7 = $addHandler_0(editSectionPresenter.eventBus, TYPE_40, editSectionPresenter);
  $put_1(editSectionPresenter.eventBusRegistration, TYPE_40, registration_7);
  registration_7 = $addHandler_0(editSectionPresenter.eventBus, TYPE_26, editSectionPresenter);
  $put_1(editSectionPresenter.eventBusRegistration, TYPE_26, registration_7);
  createAcctPresenter = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$CreateAccountPresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_8 = $addHandler_0(createAcctPresenter.eventBus, ($clinit_LoadCreateAccountEvent() , TYPE_15), createAcctPresenter);
  $put_1(createAcctPresenter.eventBusRegistration, TYPE_15, registration_8);
  registration_8 = $addHandler_0(createAcctPresenter.eventBus, ($clinit_InvalidAccountCreationEvent() , TYPE_11), createAcctPresenter);
  $put_1(createAcctPresenter.eventBusRegistration, TYPE_11, registration_8);
  homePresenter = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$HomePresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_9 = $addHandler_0(homePresenter.eventBus, ($clinit_LoadHomePageEvent() , TYPE_18), homePresenter);
  $put_1(homePresenter.eventBusRegistration, TYPE_18, registration_9);
  registration_9 = $addHandler_0(homePresenter.eventBus, TYPE_30, homePresenter);
  $put_1(homePresenter.eventBusRegistration, TYPE_30, registration_9);
  registration_9 = $addHandler_0(homePresenter.eventBus, TYPE_28, homePresenter);
  $put_1(homePresenter.eventBusRegistration, TYPE_28, registration_9);
  loginPagePresenter = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$LoginPagePresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_10 = $addHandler_0(loginPagePresenter.eventBus, ($clinit_LoadLoginPageEvent() , TYPE_19), loginPagePresenter);
  $put_1(loginPagePresenter.eventBusRegistration, TYPE_19, registration_10);
  registration_10 = $addHandler_0(loginPagePresenter.eventBus, ($clinit_ReceiveCreateAccountEvent() , TYPE_23), loginPagePresenter);
  $put_1(loginPagePresenter.eventBusRegistration, TYPE_23, registration_10);
  registration_10 = $addHandler_0(loginPagePresenter.eventBus, ($clinit_InvalidLoginEvent() , TYPE_12), loginPagePresenter);
  $put_1(loginPagePresenter.eventBusRegistration, TYPE_12, registration_10);
  registration_10 = $addHandler_0(loginPagePresenter.eventBus, ($clinit_ReceiveLoginEvent() , TYPE_35), loginPagePresenter);
  $put_1(loginPagePresenter.eventBusRegistration, TYPE_35, registration_10);
  manageUserPresenter = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$ManageUserPresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_11 = $addHandler_0(manageUserPresenter.eventBus, ($clinit_ManageUserPageEvent() , TYPE_22), manageUserPresenter);
  $put_1(manageUserPresenter.eventBusRegistration, TYPE_22, registration_11);
  registration_11 = $addHandler_0(manageUserPresenter.eventBus, ($clinit_ReceiveGetUsersEvent() , TYPE_34), manageUserPresenter);
  $put_1(manageUserPresenter.eventBusRegistration, TYPE_34, registration_11);
  examplePresenter = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$ExamplePresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_12 = $addHandler_0(examplePresenter.eventBus, TYPE_35, examplePresenter);
  $put_1(examplePresenter.eventBusRegistration, TYPE_35, registration_12);
  userService = $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$UserServiceImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_service_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_13 = $addHandler_0(userService.eventBus, ($clinit_SendLoginEvent() , TYPE_53), userService);
  $put_1(userService.eventBusRegistration, TYPE_53, registration_13);
  createAccountService = $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$CreateAccountServiceImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_service_impl(injector.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector));
  registration_14 = $addHandler_0(createAccountService.eventBus, ($clinit_SendCreateAccountEvent() , TYPE_41), createAccountService);
  $put_1(createAccountService.eventBusRegistration, TYPE_41, registration_14);
  $clear(root);
  $add_4(root, indexPresenter.view);
  $go_6(loginPagePresenter, indexView.mainPanel);
}

defineClass(665, 1, {});
var Lorg_dselent_course_1load_1scheduler_client_action_Action_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'Action', 665);
function InvalidAccountCreationAction(reason){
  this.reasonList = new ArrayList;
  $add_9(this.reasonList, reason);
}

function InvalidAccountCreationAction_0(reasonList){
  this.reasonList = reasonList;
}

defineClass(191, 665, {}, InvalidAccountCreationAction, InvalidAccountCreationAction_0);
_.toString$ = function toString_28(){
  var reason, reason$iterator, sb;
  sb = new StringBuilder;
  for (reason$iterator = new AbstractList$IteratorImpl(this.reasonList); reason$iterator.i < reason$iterator.this$01_0.size_1();) {
    reason = (checkCriticalElement(reason$iterator.i < reason$iterator.this$01_0.size_1()) , dynamicCastToString(reason$iterator.this$01_0.get_0(reason$iterator.last = reason$iterator.i++)));
    sb.string += reason;
    sb.string += '\n';
  }
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_InvalidAccountCreationAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'InvalidAccountCreationAction', 191);
function $getReason(this$static, index_0){
  return dynamicCastToString($get_5(this$static.reasonList, index_0));
}

function InvalidLoginAction(reason){
  this.reasonList = new ArrayList;
  $add_9(this.reasonList, reason);
}

function InvalidLoginAction_0(reasonList){
  this.reasonList = reasonList;
}

defineClass(165, 665, {165:1}, InvalidLoginAction, InvalidLoginAction_0);
_.toString$ = function toString_29(){
  var reason, reason$iterator, sb;
  sb = new StringBuilder;
  for (reason$iterator = new AbstractList$IteratorImpl(this.reasonList); reason$iterator.i < reason$iterator.this$01_0.size_1();) {
    reason = (checkCriticalElement(reason$iterator.i < reason$iterator.this$01_0.size_1()) , dynamicCastToString(reason$iterator.this$01_0.get_0(reason$iterator.last = reason$iterator.i++)));
    sb.string += reason;
    sb.string += '\n';
  }
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_InvalidLoginAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'InvalidLoginAction', 165);
function LoadAddCourseAction(){
  this.model = null;
}

defineClass(553, 665, {}, LoadAddCourseAction);
_.toString$ = function toString_30(){
  return 'User: ' + this.model;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_LoadAddCourseAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'LoadAddCourseAction', 553);
function $setCourseInfo(this$static, courseInfo){
  this$static.courseInfo = courseInfo;
}

function LoadAddSectionAction(){
}

defineClass(556, 665, {}, LoadAddSectionAction);
_.toString$ = function toString_31(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.courseInfo);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_LoadAddSectionAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'LoadAddSectionAction', 556);
function LoadEditCourseAction(course){
  this.courseInfo = course;
}

defineClass(163, 665, {}, LoadEditCourseAction);
_.toString$ = function toString_32(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.courseInfo);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_LoadEditCourseAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'LoadEditCourseAction', 163);
function $setCourseInfo_0(this$static, courseInfo){
  this$static.courseInfo = courseInfo;
}

function LoadEditSectionAction(){
}

defineClass(557, 665, {}, LoadEditSectionAction);
_.toString$ = function toString_33(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.courseInfo);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_LoadEditSectionAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'LoadEditSectionAction', 557);
function LoadHomePageAction(){
  this.model = null;
}

function LoadHomePageAction_0(model){
  this.model = model;
}

defineClass(164, 665, {}, LoadHomePageAction, LoadHomePageAction_0);
_.toString$ = function toString_34(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'LoadHomePageAction [adminUser=';
  $append_2(builder, this.model);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_LoadHomePageAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'LoadHomePageAction', 164);
function LoadScheduleAction(){
  this.model = null;
}

function LoadScheduleAction_0(model){
  this.model = model;
}

defineClass(189, 665, {}, LoadScheduleAction, LoadScheduleAction_0);
_.toString$ = function toString_35(){
  return 'Admin User: ' + this.model;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_LoadScheduleAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'LoadScheduleAction', 189);
function LoadViewCoursesAction(){
  this.model = null;
}

function LoadViewCoursesAction_0(model){
  this.model = model;
}

defineClass(146, 665, {}, LoadViewCoursesAction, LoadViewCoursesAction_0);
_.toString$ = function toString_36(){
  return 'User: ' + this.model;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_LoadViewCoursesAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'LoadViewCoursesAction', 146);
function ManageUserPageAction(){
  this.model = null;
}

function ManageUserPageAction_0(model){
  this.model = model;
}

defineClass(190, 665, {}, ManageUserPageAction, ManageUserPageAction_0);
_.toString$ = function toString_37(){
  return 'User: ' + this.model;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ManageUserPageAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ManageUserPageAction', 190);
function ReceiveCreateAccountAction(model){
  this.model = model;
}

defineClass(593, 665, {}, ReceiveCreateAccountAction);
_.toString$ = function toString_38(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'ReceiveLoginAction [model=';
  $append_2(builder, this.model);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveCreateAccountAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveCreateAccountAction', 593);
function ReceiveEditCourseAction(course){
  this.course = course;
}

defineClass(582, 665, {}, ReceiveEditCourseAction);
_.toString$ = function toString_39(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.course);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveEditCourseAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveEditCourseAction', 582);
function ReceiveEditSectionAction(section){
  this.section = section;
}

defineClass(584, 665, {}, ReceiveEditSectionAction);
_.toString$ = function toString_40(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.section);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveEditSectionAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveEditSectionAction', 584);
function ReceiveEndTimesAction(endTimes){
  this.endTimes = endTimes;
}

defineClass(612, 665, {}, ReceiveEndTimesAction);
_.toString$ = function toString_41(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'ReceiveEndTimesAction [endTimes=';
  $append_2(builder, this.endTimes);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveEndTimesAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveEndTimesAction', 612);
function ReceiveGetCourseListAction(courseList){
  this.courseList = courseList;
}

defineClass(609, 665, {}, ReceiveGetCourseListAction);
_.toString$ = function toString_42(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.courseList);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveGetCourseListAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveGetCourseListAction', 609);
function ReceiveGetFacultyAction(list){
  this.list = list;
}

defineClass(610, 665, {}, ReceiveGetFacultyAction);
_.toString$ = function toString_43(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'ReceiveGetFacultyAction [list=';
  $append_2(builder, this.list);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveGetFacultyAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveGetFacultyAction', 610);
function ReceiveGetFrequenciesAction(freqList){
  this.freqList = freqList;
}

defineClass(607, 665, {}, ReceiveGetFrequenciesAction);
_.toString$ = function toString_44(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.freqList);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveGetFrequenciesAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveGetFrequenciesAction', 607);
function ReceiveGetOneFacultySectionInfoAction(list){
  this.list = list;
}

defineClass(595, 665, {}, ReceiveGetOneFacultySectionInfoAction);
_.toString$ = function toString_45(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'ReceiveGetOneFacultySectionInfoAction [list=';
  $append_2(builder, this.list);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveGetOneFacultySectionInfoAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveGetOneFacultySectionInfoAction', 595);
function ReceiveGetSectionTypesAction(typeList){
  this.typeList = typeList;
}

defineClass(614, 665, {}, ReceiveGetSectionTypesAction);
_.toString$ = function toString_46(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.typeList);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveGetSectionTypesAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveGetSectionTypesAction', 614);
function ReceiveGetSectionsAction(sectionList){
  this.sectionList = sectionList;
}

defineClass(608, 665, {}, ReceiveGetSectionsAction);
_.toString$ = function toString_47(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.sectionList);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveGetSectionsAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveGetSectionsAction', 608);
function ReceiveGetTermsAction(termsList){
  this.termsList = termsList;
}

defineClass(613, 665, {}, ReceiveGetTermsAction);
_.toString$ = function toString_48(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.termsList);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveGetTermsAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveGetTermsAction', 613);
function ReceiveLoginAction(model){
  this.model = model;
}

defineClass(594, 665, {}, ReceiveLoginAction);
_.toString$ = function toString_49(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'ReceiveLoginAction [model=';
  $append_2(builder, this.model);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveLoginAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveLoginAction', 594);
function ReceiveNewCourseAction(course){
  this.course = course;
}

defineClass(580, 665, {}, ReceiveNewCourseAction);
_.toString$ = function toString_50(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.course);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveNewCourseAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveNewCourseAction', 580);
function ReceiveNewSectionAction(section){
  this.section = section;
}

defineClass(590, 665, {}, ReceiveNewSectionAction);
_.toString$ = function toString_51(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.section);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveNewSectionAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveNewSectionAction', 590);
function ReceiveRemoveCourseAction(id_0, success){
  this.id_0 = id_0;
  this.success = success;
}

defineClass(588, 665, {}, ReceiveRemoveCourseAction);
_.toString$ = function toString_52(){
  var sb;
  sb = new StringBuilder;
  $append_1(sb, this.id_0);
  $append_4(sb, this.success);
  return sb.string;
}
;
_.id_0 = 0;
_.success = false;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveRemoveCourseAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveRemoveCourseAction', 588);
function ReceiveRemoveSectionAction(id_0, success){
  this.id_0 = id_0;
  this.success = success;
}

defineClass(586, 665, {}, ReceiveRemoveSectionAction);
_.toString$ = function toString_53(){
  var sb;
  sb = new StringBuilder;
  $append_1(sb, this.id_0);
  $append_4(sb, this.success);
  return sb.string;
}
;
_.id_0 = 0;
_.success = false;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveRemoveSectionAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveRemoveSectionAction', 586);
function ReceiveStartTimesAction(startTimes){
  this.startTimes = startTimes;
}

defineClass(611, 665, {}, ReceiveStartTimesAction);
_.toString$ = function toString_54(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'ReceiveStartTimesAction [startTimes=';
  $append_2(builder, this.startTimes);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_ReceiveStartTimesAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'ReceiveStartTimesAction', 611);
function SendCreateAccountAction(facultyType, email, password){
  this.facultyType = facultyType;
  this.email = email;
  this.password = password;
}

defineClass(228, 665, {228:1}, SendCreateAccountAction);
var Lorg_dselent_course_1load_1scheduler_client_action_SendCreateAccountAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendCreateAccountAction', 228);
function SendEditCourseAction(course){
  this.course = course;
}

defineClass(554, 665, {}, SendEditCourseAction);
_.toString$ = function toString_55(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.course);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendEditCourseAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendEditCourseAction', 554);
function SendEditSectionAction(sections){
  this.section = sections;
}

defineClass(555, 665, {}, SendEditSectionAction);
_.toString$ = function toString_56(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.section);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendEditSectionAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendEditSectionAction', 555);
function SendGetCourseListAction(){
  this.termId = null;
}

defineClass(576, 665, {}, SendGetCourseListAction);
_.toString$ = function toString_57(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.termId);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendGetCourseListAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendGetCourseListAction', 576);
function SendGetEndTimesAction(model){
  this.model = model;
}

defineClass(230, 665, {}, SendGetEndTimesAction);
_.toString$ = function toString_58(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'ReceiveLoginAction [model=';
  $append_2(builder, this.model);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendGetEndTimesAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendGetEndTimesAction', 230);
function SendGetFrequenciesAction(model){
  this.model = model;
}

defineClass(258, 665, {}, SendGetFrequenciesAction);
_.toString$ = function toString_59(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'ReceiveFrequenciesAction [model=';
  $append_2(builder, this.model);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendGetFrequenciesAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendGetFrequenciesAction', 258);
function SendGetOneFacultySectionInfoAction(){
}

function SendGetOneFacultySectionInfoAction_0(facultyId, termsId){
  this.facultyId = facultyId;
  this.termsId = termsId;
}

defineClass(256, 665, {}, SendGetOneFacultySectionInfoAction, SendGetOneFacultySectionInfoAction_0);
_.toString$ = function toString_60(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'SendGetOneFacultySectionInfoAction [facultyId=';
  $append_2(builder, this.facultyId);
  builder.string += ', termsId=';
  $append_2(builder, this.termsId);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendGetOneFacultySectionInfoAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendGetOneFacultySectionInfoAction', 256);
function SendGetSectionTypesAction(){
  this.courseId = null;
}

defineClass(259, 665, {}, SendGetSectionTypesAction);
_.toString$ = function toString_61(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.courseId);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendGetSectionTypesAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendGetSectionTypesAction', 259);
function SendGetSectionsAction(courseId){
  this.courseId = courseId;
}

defineClass(575, 665, {}, SendGetSectionsAction);
_.toString$ = function toString_62(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.courseId);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendGetSectionsAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendGetSectionsAction', 575);
function SendGetStartTimesAction(model){
  this.model = model;
}

defineClass(229, 665, {}, SendGetStartTimesAction);
_.toString$ = function toString_63(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'ReceiveLoginAction [model=';
  $append_2(builder, this.model);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendGetStartTimesAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendGetStartTimesAction', 229);
function SendGetTermsAction(){
  this.courseId = null;
}

defineClass(231, 665, {}, SendGetTermsAction);
_.toString$ = function toString_64(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.courseId);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendGetTermsAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendGetTermsAction', 231);
function SendLoginAction(userName, password){
  this.userName = userName;
  this.password = password;
}

defineClass(561, 665, {}, SendLoginAction);
_.toString$ = function toString_65(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'SendLoginAction [userName=';
  $append_3(builder, this.userName);
  builder.string += ', password=';
  $append_3(builder, this.password);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendLoginAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendLoginAction', 561);
function SendNewCourseAction(){
}

defineClass(552, 665, {}, SendNewCourseAction);
_.toString$ = function toString_66(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.course);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendNewCourseAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendNewCourseAction', 552);
function SendNewSectionAction(newSection){
  this.section = newSection;
}

defineClass(551, 665, {}, SendNewSectionAction);
_.toString$ = function toString_67(){
  var sb;
  sb = new StringBuilder;
  $append_2(sb, this.section);
  return sb.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_action_SendNewSectionAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendNewSectionAction', 551);
function SendRemoveCourseAction(id_0){
  this.id_0 = id_0;
}

defineClass(559, 665, {}, SendRemoveCourseAction);
_.toString$ = function toString_68(){
  var sb;
  sb = new StringBuilder;
  $append_1(sb, this.id_0);
  return sb.string;
}
;
_.id_0 = 0;
var Lorg_dselent_course_1load_1scheduler_client_action_SendRemoveCourseAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendRemoveCourseAction', 559);
function SendRemoveSectionAction(id_0){
  this.id_0 = id_0;
}

defineClass(558, 665, {}, SendRemoveSectionAction);
_.toString$ = function toString_69(){
  var sb;
  sb = new StringBuilder;
  $append_1(sb, this.id_0);
  return sb.string;
}
;
_.id_0 = 0;
var Lorg_dselent_course_1load_1scheduler_client_action_SendRemoveSectionAction_2_classLit = createForClass('org.dselent.course_load_scheduler.client.action', 'SendRemoveSectionAction', 558);
defineClass(645, 1, $intern_34);
_.onCreateAccount = function onCreateAccount(evt){
}
;
_.onGetEndTimes = function onGetEndTimes(evt){
}
;
_.onGetStartTimes = function onGetStartTimes(evt){
}
;
_.onInvalidAccountCreation = function onInvalidAccountCreation(evt){
}
;
_.onInvalidLogin = function onInvalidLogin(evt){
}
;
_.onLoadAddCourse = function onLoadAddCourse(evt){
}
;
_.onLoadAddSection = function onLoadAddSection(evt){
}
;
_.onLoadCreateAccount = function onLoadCreateAccount(evt){
}
;
_.onLoadEditCoursePage = function onLoadEditCoursePage(evt){
}
;
_.onLoadEditSection = function onLoadEditSection(evt){
}
;
_.onLoadHomePage = function onLoadHomePage(evt){
}
;
_.onLoadSchedulePage = function onLoadSchedulePage(evt){
}
;
_.onLoadViewCourses = function onLoadViewCourses(evt){
}
;
_.onManageUserPage = function onManageUserPage(evt){
}
;
_.onReceiveCreateAccount = function onReceiveCreateAccount(evt){
}
;
_.onReceiveEditCourse = function onReceiveEditCourse(evt){
}
;
_.onReceiveEditSection = function onReceiveEditSection(evt){
}
;
_.onReceiveEndTimes = function onReceiveEndTimes(evt){
}
;
_.onReceiveGetCourseList = function onReceiveGetCourseList(evt){
}
;
_.onReceiveGetFaculty = function onReceiveGetFaculty(evt){
}
;
_.onReceiveGetFrequencies = function onReceiveGetFrequencies(evt){
}
;
_.onReceiveGetOneFacultySectionInfo = function onReceiveGetOneFacultySectionInfo(evt){
}
;
_.onReceiveGetSectionTypes = function onReceiveGetSectionTypes(evt){
}
;
_.onReceiveGetSections = function onReceiveGetSections(evt){
}
;
_.onReceiveGetTerms = function onReceiveGetTerms(evt){
}
;
_.onReceiveLogin = function onReceiveLogin(evt){
}
;
_.onReceiveNewCourse = function onReceiveNewCourse(evt){
}
;
_.onReceiveNewSection = function onReceiveNewSection(evt){
}
;
_.onReceiveRemoveCourse = function onReceiveRemoveCourse(evt){
}
;
_.onReceiveRemoveSection = function onReceiveRemoveSection(evt){
}
;
_.onReceiveStartTimes = function onReceiveStartTimes(evt){
}
;
_.onSendEditCourse = function onSendEditCourse(evt){
}
;
_.onSendEditSection = function onSendEditSection(evt){
}
;
_.onSendGetCourseList = function onSendGetCourseList(evt){
}
;
_.onSendGetFaculty = function onSendGetFaculty(evt){
}
;
_.onSendGetFrequencies = function onSendGetFrequencies(evt){
}
;
_.onSendGetOneFacultySectionInfo = function onSendGetOneFacultySectionInfo(evt){
}
;
_.onSendGetSectionTypes = function onSendGetSectionTypes(evt){
}
;
_.onSendGetSections = function onSendGetSections(evt){
}
;
_.onSendGetTerms = function onSendGetTerms(evt){
}
;
_.onSendLogin = function onSendLogin(evt){
}
;
_.onSendNewCourse = function onSendNewCourse(evt){
}
;
_.onSendNewSection = function onSendNewSection(evt){
}
;
_.onSendRemoveCourse = function onSendRemoveCourse(evt){
}
;
_.onSendRemoveSection = function onSendRemoveSection(evt){
}
;
var Lorg_dselent_course_1load_1scheduler_client_event_1handler_EventHandlerAdapter_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event_handler', 'EventHandlerAdapter', 645);
function Callback(eventBus){
  this.eventBus = eventBus;
  new HashMap;
}

defineClass(79, 645, $intern_34);
var Lorg_dselent_course_1load_1scheduler_client_callback_Callback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'Callback', 79);
function GetStartTimesCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(600, 79, $intern_34, GetStartTimesCallback);
_.onFailure = function onFailure(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess(result){
  var json, action, event_0;
  json = getObjectValue(result);
  action = $translateToAction_6(json);
  event_0 = new ReceiveStartTimesEvent(action);
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_GetStartTimesCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'GetStartTimesCallback', 600);
function SendCreateAccountCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(577, 79, $intern_34, SendCreateAccountCallback);
_.onFailure = function onFailure_0(caught){
  var ile, sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
  new InvalidAccountCreationAction(sb.string);
  ile = new InvalidAccountCreationEvent;
  $castFireEvent(this.eventBus, ile);
}
;
_.onSuccess = function onSuccess_0(result){
  var json, jsonObject, userObject, accountTypeId, id_0, password, user, event_0;
  json = getObjectValue(result);
  jsonObject = $get_0(json, 'success');
  userObject = $get(jsonObject.isArray_0(), 0).isObject();
  accountTypeId = valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveCreateAccountKeys() , ACCOUNT_TYPE_ID))));
  id_0 = valueOf(getIntValue(userObject, convertKeyName(ID)));
  password = getStringValue(userObject, convertKeyName(PASSWORD));
  user = new User;
  user.accountTypeId = accountTypeId;
  user.id_0 = id_0;
  user.encryptedPassword = password;
  new ReceiveCreateAccountAction(user);
  event_0 = new ReceiveCreateAccountEvent;
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendCreateAccountCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendCreateAccountCallback', 577);
function SendEditCourseCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(566, 79, $intern_34, SendEditCourseCallback);
_.onFailure = function onFailure_1(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess_1(result){
  var json, jsonObject, userObject, id_0, coursesNumber, coursesTitle, frequencyId, course, event_0;
  json = getObjectValue(result);
  jsonObject = $get_0(json, 'success');
  userObject = $get(jsonObject.isArray_0(), 0).isObject();
  id_0 = valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveEditCourseKeys() , COURSE_ID))));
  coursesNumber = getStringValue(userObject, convertKeyName(COURSE_NUMBER));
  coursesTitle = getStringValue(userObject, convertKeyName(COURSE_NAME));
  frequencyId = valueOf(getIntValue(userObject, convertKeyName(COURSE_FREQUENCY_ID)));
  course = new Courses;
  course.id_0 = id_0;
  course.number = coursesNumber;
  course.title_0 = coursesTitle;
  course.frequencyID = frequencyId;
  new ReceiveEditCourseAction(course);
  event_0 = new ReceiveEditCourseEvent;
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendEditCourseCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendEditCourseCallback', 566);
function $onSuccess(this$static, result){
  var event_0, json, jsonObject, userObject, id_0, termsID, sectionTypeID, daysID, coursesID, startID, endID, sectionsName, section;
  json = getObjectValue(result);
  jsonObject = $get_0(json, 'success');
  userObject = $get(jsonObject.isArray_0(), 0).isObject();
  id_0 = valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveEditSectionKeys() , ID_0))));
  termsID = valueOf(getIntValue(userObject, convertKeyName(TERMS_ID)));
  sectionTypeID = valueOf(getIntValue(userObject, convertKeyName(SECTION_TYPE_ID)));
  daysID = valueOf(getIntValue(userObject, convertKeyName(DAYS_ID)));
  coursesID = valueOf(getIntValue(userObject, convertKeyName(COURSES_ID)));
  startID = valueOf(getIntValue(userObject, convertKeyName(START_TIME_ID)));
  endID = valueOf(getIntValue(userObject, convertKeyName(END_TIME_ID)));
  sectionsName = getStringValue(userObject, convertKeyName(SECTIONS_NAME));
  section = new CourseSections;
  section.sectionId = id_0;
  section.termsId = termsID;
  section.sectionTypeId = sectionTypeID;
  section.daysId = daysID;
  section.coursesId = coursesID;
  section.startTimeId = startID;
  section.endTimeId = endID;
  section.sectionsName = sectionsName;
  new ReceiveEditSectionAction(section);
  event_0 = new ReceiveEditSectionEvent;
  $castFireEvent(this$static.eventBus, event_0);
}

function SendEditSectionCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(567, 79, $intern_34, SendEditSectionCallback);
_.onFailure = function onFailure_2(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess_2(result){
  $onSuccess(this, result);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendEditSectionCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendEditSectionCallback', 567);
function SendGetCourseListCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(598, 79, $intern_34, SendGetCourseListCallback);
_.onFailure = function onFailure_3(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  alert_0('An error occured while fetching the courses.');
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess_3(result){
  var json, action, event_0;
  json = getObjectValue(result);
  action = $translateToAction(json);
  event_0 = new ReceiveGetCourseListEvent(action);
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendGetCourseListCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendGetCourseListCallback', 598);
function SendGetEndTimesCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(601, 79, $intern_34, SendGetEndTimesCallback);
_.onFailure = function onFailure_4(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess_4(result){
  var json, action, event_0;
  json = getObjectValue(result);
  action = $translateToAction_0(json);
  event_0 = new ReceiveEndTimesEvent(action);
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendGetEndTimesCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendGetEndTimesCallback', 601);
function SendGetFacultyCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(599, 79, $intern_34, SendGetFacultyCallback);
_.onFailure = function onFailure_5(caught){
  var ile, sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
  new InvalidAccountCreationAction(sb.string);
  ile = new InvalidAccountCreationEvent;
  $castFireEvent(this.eventBus, ile);
}
;
_.onSuccess = function onSuccess_5(result){
  var json, action, event_0;
  json = getObjectValue(result);
  action = $translateToAction_1(json);
  event_0 = new ReceiveGetFacultyEvent(action);
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendGetFacultyCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendGetFacultyCallback', 599);
function SendGetFrequenciesCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(596, 79, $intern_34, SendGetFrequenciesCallback);
_.onFailure = function onFailure_6(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess_6(result){
  var json, action, event_0;
  json = getObjectValue(result);
  action = $translateToAction_2(json);
  event_0 = new ReceiveGetFrequenciesEvent(action);
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendGetFrequenciesCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendGetFrequenciesCallback', 596);
function SendGetOneFacultySectionInfoCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(579, 79, $intern_34, SendGetOneFacultySectionInfoCallback);
_.onFailure = function onFailure_7(caught){
  var ile, sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
  new InvalidAccountCreationAction(sb.string);
  ile = new InvalidAccountCreationEvent;
  $castFireEvent(this.eventBus, ile);
}
;
_.onSuccess = function onSuccess_7(result){
  var json, action, event_0;
  json = getObjectValue(result);
  action = $translateToAction_3(json);
  event_0 = new ReceiveGetOneFacultySectionInfoEvent(action);
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendGetOneFacultySectionInfoCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendGetOneFacultySectionInfoCallback', 579);
function SendGetSectionTypesCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(603, 79, $intern_34, SendGetSectionTypesCallback);
_.onFailure = function onFailure_8(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess_8(result){
  var json, action, event_0;
  json = getObjectValue(result);
  action = $translateToAction_4(json);
  event_0 = new ReceiveGetSectionTypesEvent(action);
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendGetSectionTypesCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendGetSectionTypesCallback', 603);
function SendGetSectionsCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(597, 79, $intern_34, SendGetSectionsCallback);
_.onFailure = function onFailure_9(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess_9(result){
  var json, action, event_0;
  json = getObjectValue(result);
  action = $translateToAction_5(json);
  event_0 = new ReceiveGetSectionsEvent(action);
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendGetSectionsCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendGetSectionsCallback', 597);
function SendGetTermsCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(602, 79, $intern_34, SendGetTermsCallback);
_.onFailure = function onFailure_10(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess_10(result){
  var json, action, event_0;
  json = getObjectValue(result);
  action = $translateToAction_7(json);
  event_0 = new ReceiveGetTermsEvent(action);
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendGetTermsCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendGetTermsCallback', 602);
function SendLoginCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(578, 79, $intern_34, SendLoginCallback);
_.onFailure = function onFailure_11(caught){
  var ila, ile, sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
  ila = new InvalidLoginAction(sb.string);
  ile = new InvalidLoginEvent(ila);
  $castFireEvent(this.eventBus, ile);
}
;
_.onSuccess = function onSuccess_11(result){
  var json, action, jsonObject, userObject, id_0, accountTypeId, password, user, event_0;
  json = getObjectValue(result);
  action = (jsonObject = $get_0(json, 'success') , userObject = $get(jsonObject.isArray_0(), 0).isObject() , id_0 = valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveLoginKeys() , ID_4)))) , accountTypeId = valueOf(getIntValue(userObject, convertKeyName(ACCOUNT_TYPE_ID_0))) , password = getStringValue(userObject, convertKeyName(ENCRYPTED_PASSWORD)) , user = new User , user.id_0 = id_0 , user.accountTypeId = accountTypeId , user.encryptedPassword = password , new ReceiveLoginAction(user));
  event_0 = new ReceiveLoginEvent(action);
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendLoginCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendLoginCallback', 578);
function SendNewCourseCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(565, 79, $intern_34, SendNewCourseCallback);
_.onFailure = function onFailure_12(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess_12(result){
  var json, jsonObject, userObject, id_0, coursesNumber, coursesTitle, deleted, frequencyId, course, event_0;
  json = getObjectValue(result);
  jsonObject = $get_0(json, 'success');
  userObject = $get(jsonObject.isArray_0(), 0).isObject();
  id_0 = valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveNewCourseKeys() , ID_5))));
  coursesNumber = getStringValue(userObject, convertKeyName(NUMBER));
  coursesTitle = getStringValue(userObject, convertKeyName(TITLE));
  deleted = ($clinit_Boolean() , getBooleanValue(userObject, convertKeyName(DELETED))?TRUE_0:FALSE_0);
  frequencyId = valueOf(getIntValue(userObject, convertKeyName(FREQUENCY_ID_0)));
  course = new Courses;
  course.id_0 = id_0;
  course.number = coursesNumber;
  course.title_0 = coursesTitle;
  course.frequencyID = frequencyId;
  course.deleted = deleted;
  new ReceiveNewCourseAction(course);
  event_0 = new ReceiveNewCourseEvent;
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendNewCourseCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendNewCourseCallback', 565);
function SendNewSectionCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(564, 79, $intern_34, SendNewSectionCallback);
_.onFailure = function onFailure_13(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess_13(result){
  var json, event_0;
  json = getObjectValue(result);
  $translateToAction_8(json);
  event_0 = new ReceiveNewSectionEvent;
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendNewSectionCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendNewSectionCallback', 564);
function SendRemoveCourseCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(569, 79, $intern_34, SendRemoveCourseCallback);
_.onFailure = function onFailure_14(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess_14(result){
  var json, jsonObject, userObject, id_0, success, event_0;
  json = getObjectValue(result);
  jsonObject = $get_0(json, 'success');
  userObject = $get(jsonObject.isArray_0(), 0).isObject();
  id_0 = valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveRemoveCourseKeys() , COURSE_ID_0))));
  success = ($clinit_Boolean() , getBooleanValue(userObject, convertKeyName(SUCCESS))?TRUE_0:FALSE_0);
  new ReceiveRemoveCourseAction(id_0.value_0, success.value_0);
  event_0 = new ReceiveRemoveCourseEvent;
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendRemoveCourseCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendRemoveCourseCallback', 569);
function SendRemoveSectionCallback(eventBus){
  Callback.call(this, eventBus);
}

defineClass(568, 79, $intern_34, SendRemoveSectionCallback);
_.onFailure = function onFailure_15(caught){
  var sb, stackTraceElement, stackTraceElement$index, stackTraceElement$max, stackTraceElements;
  sb = new StringBuilder;
  stackTraceElements = (caught.stackTrace == null && (caught.stackTrace = constructJavaStackTrace(caught)) , caught.stackTrace);
  for (stackTraceElement$index = 0 , stackTraceElement$max = stackTraceElements.length; stackTraceElement$index < stackTraceElement$max; ++stackTraceElement$index) {
    stackTraceElement = stackTraceElements[stackTraceElement$index];
    $append_3(sb, stackTraceElement.className_0 + '.' + stackTraceElement.methodName + '(' + (stackTraceElement.fileName != null?stackTraceElement.fileName:'Unknown Source') + (stackTraceElement.lineNumber >= 0?':' + stackTraceElement.lineNumber:'') + ')');
    sb.string += '\n';
  }
}
;
_.onSuccess = function onSuccess_15(result){
  var json, jsonObject, userObject, id_0, success, event_0;
  json = getObjectValue(result);
  jsonObject = $get_0(json, 'success');
  userObject = $get(jsonObject.isArray_0(), 0).isObject();
  id_0 = valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveRemoveSectionKeys() , ID_7))));
  success = ($clinit_Boolean() , getBooleanValue(userObject, convertKeyName(SUCCESS_0))?TRUE_0:FALSE_0);
  new ReceiveRemoveSectionAction(id_0.value_0, success.value_0);
  event_0 = new ReceiveRemoveSectionEvent;
  $castFireEvent(this.eventBus, event_0);
}
;
var Lorg_dselent_course_1load_1scheduler_client_callback_SendRemoveSectionCallback_2_classLit = createForClass('org.dselent.course_load_scheduler.client.callback', 'SendRemoveSectionCallback', 568);
function BaseEvent(action){
  this.action = action;
}

defineClass(246, 649, {});
var Lorg_dselent_course_1load_1scheduler_client_event_BaseEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'BaseEvent', 246);
defineClass(342, 246, {});
var Lorg_dselent_course_1load_1scheduler_client_event_DisplayEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'DisplayEvent', 342);
function $clinit_InvalidAccountCreationEvent(){
  $clinit_InvalidAccountCreationEvent = emptyMethod;
  TYPE_11 = new GwtEvent$Type;
}

function InvalidAccountCreationEvent(){
  $clinit_InvalidAccountCreationEvent();
}

defineClass(184, 649, {}, InvalidAccountCreationEvent);
_.dispatch = function dispatch_11(handler){
  dynamicCast(handler, 19).onInvalidAccountCreation(this);
}
;
_.getAssociatedType = function getAssociatedType_12(){
  return TYPE_11;
}
;
var TYPE_11;
var Lorg_dselent_course_1load_1scheduler_client_event_InvalidAccountCreationEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'InvalidAccountCreationEvent', 184);
function $clinit_InvalidLoginEvent(){
  $clinit_InvalidLoginEvent = emptyMethod;
  TYPE_12 = new GwtEvent$Type;
}

function InvalidLoginEvent(action){
  $clinit_InvalidLoginEvent();
  BaseEvent.call(this, action);
}

defineClass(247, 246, {}, InvalidLoginEvent);
_.dispatch = function dispatch_12(handler){
  dynamicCast(handler, 20).onInvalidLogin(this);
}
;
_.getAssociatedType = function getAssociatedType_13(){
  return TYPE_12;
}
;
var TYPE_12;
var Lorg_dselent_course_1load_1scheduler_client_event_InvalidLoginEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'InvalidLoginEvent', 247);
function $clinit_LoadAddCourseEvent(){
  $clinit_LoadAddCourseEvent = emptyMethod;
  TYPE_13 = new GwtEvent$Type;
}

function LoadAddCourseEvent(){
  $clinit_LoadAddCourseEvent();
}

defineClass(334, 649, {}, LoadAddCourseEvent);
_.dispatch = function dispatch_13(handler){
  dynamicCast(handler, 21).onLoadAddCourse(this);
}
;
_.getAssociatedType = function getAssociatedType_14(){
  return TYPE_13;
}
;
var TYPE_13;
var Lorg_dselent_course_1load_1scheduler_client_event_LoadAddCourseEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'LoadAddCourseEvent', 334);
function $clinit_LoadAddSectionEvent(){
  $clinit_LoadAddSectionEvent = emptyMethod;
  TYPE_14 = new GwtEvent$Type;
}

function LoadAddSectionEvent(action){
  $clinit_LoadAddSectionEvent();
  this.action = action;
}

defineClass(335, 649, {}, LoadAddSectionEvent);
_.dispatch = function dispatch_14(handler){
  dynamicCast(handler, 22).onLoadAddSection(this);
}
;
_.getAssociatedType = function getAssociatedType_15(){
  return TYPE_14;
}
;
var TYPE_14;
var Lorg_dselent_course_1load_1scheduler_client_event_LoadAddSectionEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'LoadAddSectionEvent', 335);
function $clinit_LoadCreateAccountEvent(){
  $clinit_LoadCreateAccountEvent = emptyMethod;
  TYPE_15 = new GwtEvent$Type;
}

function LoadCreateAccountEvent(){
  $clinit_LoadCreateAccountEvent();
}

defineClass(338, 649, {}, LoadCreateAccountEvent);
_.dispatch = function dispatch_15(handler){
  dynamicCast(handler, 23).onLoadCreateAccount(this);
}
;
_.getAssociatedType = function getAssociatedType_16(){
  return TYPE_15;
}
;
var TYPE_15;
var Lorg_dselent_course_1load_1scheduler_client_event_LoadCreateAccountEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'LoadCreateAccountEvent', 338);
function $clinit_LoadEditCourseEvent(){
  $clinit_LoadEditCourseEvent = emptyMethod;
  TYPE_16 = new GwtEvent$Type;
}

function LoadEditCourseEvent(action){
  $clinit_LoadEditCourseEvent();
  this.action = action;
}

defineClass(157, 649, {}, LoadEditCourseEvent);
_.dispatch = function dispatch_16(handler){
  dynamicCast(handler, 24).onLoadEditCoursePage(this);
}
;
_.getAssociatedType = function getAssociatedType_17(){
  return TYPE_16;
}
;
var TYPE_16;
var Lorg_dselent_course_1load_1scheduler_client_event_LoadEditCourseEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'LoadEditCourseEvent', 157);
function $clinit_LoadEditSectionEvent(){
  $clinit_LoadEditSectionEvent = emptyMethod;
  TYPE_17 = new GwtEvent$Type;
}

function LoadEditSectionEvent(action){
  $clinit_LoadEditSectionEvent();
  this.action = action;
}

defineClass(337, 649, {}, LoadEditSectionEvent);
_.dispatch = function dispatch_17(handler){
  dynamicCast(handler, 25).onLoadEditSection(this);
}
;
_.getAssociatedType = function getAssociatedType_18(){
  return TYPE_17;
}
;
var TYPE_17;
var Lorg_dselent_course_1load_1scheduler_client_event_LoadEditSectionEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'LoadEditSectionEvent', 337);
function $clinit_LoadHomePageEvent(){
  $clinit_LoadHomePageEvent = emptyMethod;
  TYPE_18 = new GwtEvent$Type;
}

function LoadHomePageEvent(){
  $clinit_LoadHomePageEvent();
}

defineClass(158, 649, {}, LoadHomePageEvent);
_.dispatch = function dispatch_18(handler){
  dynamicCast(handler, 26).onLoadHomePage(this);
}
;
_.getAssociatedType = function getAssociatedType_19(){
  return TYPE_18;
}
;
var TYPE_18;
var Lorg_dselent_course_1load_1scheduler_client_event_LoadHomePageEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'LoadHomePageEvent', 158);
function $clinit_LoadLoginPageEvent(){
  $clinit_LoadLoginPageEvent = emptyMethod;
  TYPE_19 = new GwtEvent$Type;
}

var TYPE_19;
function $clinit_LoadScheduleEvent(){
  $clinit_LoadScheduleEvent = emptyMethod;
  TYPE_20 = new GwtEvent$Type;
}

function LoadScheduleEvent(){
  $clinit_LoadScheduleEvent();
}

defineClass(183, 649, {}, LoadScheduleEvent);
_.dispatch = function dispatch_19(handler){
  dynamicCast(handler, 27).onLoadSchedulePage(this);
}
;
_.getAssociatedType = function getAssociatedType_20(){
  return TYPE_20;
}
;
var TYPE_20;
var Lorg_dselent_course_1load_1scheduler_client_event_LoadScheduleEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'LoadScheduleEvent', 183);
function $clinit_LoadViewCoursesEvent(){
  $clinit_LoadViewCoursesEvent = emptyMethod;
  TYPE_21 = new GwtEvent$Type;
}

function LoadViewCoursesEvent(){
  $clinit_LoadViewCoursesEvent();
}

defineClass(138, 649, {}, LoadViewCoursesEvent);
_.dispatch = function dispatch_20(handler){
  dynamicCast(handler, 28).onLoadViewCourses(this);
}
;
_.getAssociatedType = function getAssociatedType_21(){
  return TYPE_21;
}
;
var TYPE_21;
var Lorg_dselent_course_1load_1scheduler_client_event_LoadViewCoursesEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'LoadViewCoursesEvent', 138);
function $clinit_ManageUserPageEvent(){
  $clinit_ManageUserPageEvent = emptyMethod;
  TYPE_22 = new GwtEvent$Type;
}

function ManageUserPageEvent(){
  $clinit_ManageUserPageEvent();
}

defineClass(185, 649, {}, ManageUserPageEvent);
_.dispatch = function dispatch_21(handler){
  dynamicCast(handler, 29).onManageUserPage(this);
}
;
_.getAssociatedType = function getAssociatedType_22(){
  return TYPE_22;
}
;
var TYPE_22;
var Lorg_dselent_course_1load_1scheduler_client_event_ManageUserPageEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ManageUserPageEvent', 185);
function $clinit_ReceiveCreateAccountEvent(){
  $clinit_ReceiveCreateAccountEvent = emptyMethod;
  TYPE_23 = new GwtEvent$Type;
}

function ReceiveCreateAccountEvent(){
  $clinit_ReceiveCreateAccountEvent();
}

defineClass(339, 649, {}, ReceiveCreateAccountEvent);
_.dispatch = function dispatch_22(handler){
  dynamicCast(handler, 30).onReceiveCreateAccount(this);
}
;
_.getAssociatedType = function getAssociatedType_23(){
  return TYPE_23;
}
;
var TYPE_23;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveCreateAccountEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveCreateAccountEvent', 339);
function $clinit_ReceiveEditCourseEvent(){
  $clinit_ReceiveEditCourseEvent = emptyMethod;
  TYPE_24 = new GwtEvent$Type;
}

function ReceiveEditCourseEvent(){
  $clinit_ReceiveEditCourseEvent();
}

defineClass(583, 649, {}, ReceiveEditCourseEvent);
_.dispatch = function dispatch_23(handler){
  dynamicCast(handler, 31).onReceiveEditCourse(this);
}
;
_.getAssociatedType = function getAssociatedType_24(){
  return TYPE_24;
}
;
var TYPE_24;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveEditCourseEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveEditCourseEvent', 583);
function $clinit_ReceiveEditSectionEvent(){
  $clinit_ReceiveEditSectionEvent = emptyMethod;
  TYPE_25 = new GwtEvent$Type;
}

function ReceiveEditSectionEvent(){
  $clinit_ReceiveEditSectionEvent();
}

defineClass(585, 649, {}, ReceiveEditSectionEvent);
_.dispatch = function dispatch_24(handler){
  dynamicCast(handler, 32).onReceiveEditSection(this);
}
;
_.getAssociatedType = function getAssociatedType_25(){
  return TYPE_25;
}
;
var TYPE_25;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveEditSectionEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveEditSectionEvent', 585);
function $clinit_ReceiveEndTimesEvent(){
  $clinit_ReceiveEndTimesEvent = emptyMethod;
  TYPE_26 = new GwtEvent$Type;
}

function ReceiveEndTimesEvent(action){
  $clinit_ReceiveEndTimesEvent();
  this.action = action;
}

defineClass(327, 649, {}, ReceiveEndTimesEvent);
_.dispatch = function dispatch_25(handler){
  dynamicCast(handler, 33).onReceiveEndTimes(this);
}
;
_.getAssociatedType = function getAssociatedType_26(){
  return TYPE_26;
}
;
var TYPE_26;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveEndTimesEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveEndTimesEvent', 327);
function $clinit_ReceiveGetCourseListEvent(){
  $clinit_ReceiveGetCourseListEvent = emptyMethod;
  TYPE_27 = new GwtEvent$Type;
}

function ReceiveGetCourseListEvent(action){
  $clinit_ReceiveGetCourseListEvent();
  this.action = action;
}

defineClass(331, 649, {}, ReceiveGetCourseListEvent);
_.dispatch = function dispatch_26(handler){
  dynamicCast(handler, 34).onReceiveGetCourseList(this);
}
;
_.getAssociatedType = function getAssociatedType_27(){
  return TYPE_27;
}
;
var TYPE_27;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveGetCourseListEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveGetCourseListEvent', 331);
function $clinit_ReceiveGetFacultyEvent(){
  $clinit_ReceiveGetFacultyEvent = emptyMethod;
  TYPE_28 = new GwtEvent$Type;
}

function ReceiveGetFacultyEvent(rgfe){
  $clinit_ReceiveGetFacultyEvent();
  this.action = rgfe;
}

defineClass(328, 649, {}, ReceiveGetFacultyEvent);
_.dispatch = function dispatch_27(handler){
  dynamicCast(handler, 35).onReceiveGetFaculty(this);
}
;
_.getAssociatedType = function getAssociatedType_28(){
  return TYPE_28;
}
;
var TYPE_28;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveGetFacultyEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveGetFacultyEvent', 328);
function $clinit_ReceiveGetFrequenciesEvent(){
  $clinit_ReceiveGetFrequenciesEvent = emptyMethod;
  TYPE_29 = new GwtEvent$Type;
}

function ReceiveGetFrequenciesEvent(action){
  $clinit_ReceiveGetFrequenciesEvent();
  this.action = action;
}

defineClass(332, 649, {}, ReceiveGetFrequenciesEvent);
_.dispatch = function dispatch_28(handler){
  dynamicCast(handler, 36).onReceiveGetFrequencies(this);
}
;
_.getAssociatedType = function getAssociatedType_29(){
  return TYPE_29;
}
;
var TYPE_29;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveGetFrequenciesEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveGetFrequenciesEvent', 332);
function $clinit_ReceiveGetOneFacultySectionInfoEvent(){
  $clinit_ReceiveGetOneFacultySectionInfoEvent = emptyMethod;
  TYPE_30 = new GwtEvent$Type;
}

function ReceiveGetOneFacultySectionInfoEvent(rgfe){
  $clinit_ReceiveGetOneFacultySectionInfoEvent();
  this.action = rgfe;
}

defineClass(330, 649, {}, ReceiveGetOneFacultySectionInfoEvent);
_.dispatch = function dispatch_29(handler){
  dynamicCast(handler, 37).onReceiveGetOneFacultySectionInfo(this);
}
;
_.getAssociatedType = function getAssociatedType_30(){
  return TYPE_30;
}
;
var TYPE_30;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveGetOneFacultySectionInfoEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveGetOneFacultySectionInfoEvent', 330);
function $clinit_ReceiveGetSectionTypesEvent(){
  $clinit_ReceiveGetSectionTypesEvent = emptyMethod;
  TYPE_31 = new GwtEvent$Type;
}

function ReceiveGetSectionTypesEvent(action){
  $clinit_ReceiveGetSectionTypesEvent();
  this.action = action;
}

defineClass(336, 649, {}, ReceiveGetSectionTypesEvent);
_.dispatch = function dispatch_30(handler){
  dynamicCast(handler, 39).onReceiveGetSectionTypes(this);
}
;
_.getAssociatedType = function getAssociatedType_31(){
  return TYPE_31;
}
;
var TYPE_31;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveGetSectionTypesEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveGetSectionTypesEvent', 336);
function $clinit_ReceiveGetSectionsEvent(){
  $clinit_ReceiveGetSectionsEvent = emptyMethod;
  TYPE_32 = new GwtEvent$Type;
}

function ReceiveGetSectionsEvent(action){
  $clinit_ReceiveGetSectionsEvent();
  this.action = action;
}

defineClass(333, 649, {}, ReceiveGetSectionsEvent);
_.dispatch = function dispatch_31(handler){
  dynamicCast(handler, 38).onReceiveGetSections(this);
}
;
_.getAssociatedType = function getAssociatedType_32(){
  return TYPE_32;
}
;
var TYPE_32;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveGetSectionsEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveGetSectionsEvent', 333);
function $clinit_ReceiveGetTermsEvent(){
  $clinit_ReceiveGetTermsEvent = emptyMethod;
  TYPE_33 = new GwtEvent$Type;
}

function ReceiveGetTermsEvent(action){
  $clinit_ReceiveGetTermsEvent();
  this.action = action;
}

defineClass(329, 649, {}, ReceiveGetTermsEvent);
_.dispatch = function dispatch_32(handler){
  dynamicCast(handler, 40).onReceiveGetTerms(this);
}
;
_.getAssociatedType = function getAssociatedType_33(){
  return TYPE_33;
}
;
var TYPE_33;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveGetTermsEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveGetTermsEvent', 329);
function $clinit_ReceiveGetUsersEvent(){
  $clinit_ReceiveGetUsersEvent = emptyMethod;
  TYPE_34 = new GwtEvent$Type;
}

var TYPE_34;
function $clinit_ReceiveLoginEvent(){
  $clinit_ReceiveLoginEvent = emptyMethod;
  TYPE_35 = new GwtEvent$Type;
}

function ReceiveLoginEvent(action){
  $clinit_ReceiveLoginEvent();
  this.action = action;
}

defineClass(340, 649, {}, ReceiveLoginEvent);
_.dispatch = function dispatch_33(handler){
  dynamicCast(handler, 41).onReceiveLogin(this);
}
;
_.getAssociatedType = function getAssociatedType_34(){
  return TYPE_35;
}
;
var TYPE_35;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveLoginEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveLoginEvent', 340);
function $clinit_ReceiveNewCourseEvent(){
  $clinit_ReceiveNewCourseEvent = emptyMethod;
  TYPE_36 = new GwtEvent$Type;
}

function ReceiveNewCourseEvent(){
  $clinit_ReceiveNewCourseEvent();
}

defineClass(581, 649, {}, ReceiveNewCourseEvent);
_.dispatch = function dispatch_34(handler){
  dynamicCast(handler, 42).onReceiveNewCourse(this);
}
;
_.getAssociatedType = function getAssociatedType_35(){
  return TYPE_36;
}
;
var TYPE_36;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveNewCourseEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveNewCourseEvent', 581);
function $clinit_ReceiveNewSectionEvent(){
  $clinit_ReceiveNewSectionEvent = emptyMethod;
  TYPE_37 = new GwtEvent$Type;
}

function ReceiveNewSectionEvent(){
  $clinit_ReceiveNewSectionEvent();
}

defineClass(591, 649, {}, ReceiveNewSectionEvent);
_.dispatch = function dispatch_35(handler){
  dynamicCast(handler, 43).onReceiveNewSection(this);
}
;
_.getAssociatedType = function getAssociatedType_36(){
  return TYPE_37;
}
;
var TYPE_37;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveNewSectionEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveNewSectionEvent', 591);
function $clinit_ReceiveRemoveCourseEvent(){
  $clinit_ReceiveRemoveCourseEvent = emptyMethod;
  TYPE_38 = new GwtEvent$Type;
}

function ReceiveRemoveCourseEvent(){
  $clinit_ReceiveRemoveCourseEvent();
}

defineClass(589, 649, {}, ReceiveRemoveCourseEvent);
_.dispatch = function dispatch_36(handler){
  dynamicCast(handler, 44).onReceiveRemoveCourse(this);
}
;
_.getAssociatedType = function getAssociatedType_37(){
  return TYPE_38;
}
;
var TYPE_38;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveRemoveCourseEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveRemoveCourseEvent', 589);
function $clinit_ReceiveRemoveSectionEvent(){
  $clinit_ReceiveRemoveSectionEvent = emptyMethod;
  TYPE_39 = new GwtEvent$Type;
}

function ReceiveRemoveSectionEvent(){
  $clinit_ReceiveRemoveSectionEvent();
}

defineClass(587, 649, {}, ReceiveRemoveSectionEvent);
_.dispatch = function dispatch_37(handler){
  dynamicCast(handler, 45).onReceiveRemoveSection(this);
}
;
_.getAssociatedType = function getAssociatedType_38(){
  return TYPE_39;
}
;
var TYPE_39;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveRemoveSectionEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveRemoveSectionEvent', 587);
function $clinit_ReceiveStartTimesEvent(){
  $clinit_ReceiveStartTimesEvent = emptyMethod;
  TYPE_40 = new GwtEvent$Type;
}

function ReceiveStartTimesEvent(action){
  $clinit_ReceiveStartTimesEvent();
  this.action = action;
}

defineClass(326, 649, {}, ReceiveStartTimesEvent);
_.dispatch = function dispatch_38(handler){
  dynamicCast(handler, 46).onReceiveStartTimes(this);
}
;
_.getAssociatedType = function getAssociatedType_39(){
  return TYPE_40;
}
;
var TYPE_40;
var Lorg_dselent_course_1load_1scheduler_client_event_ReceiveStartTimesEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'ReceiveStartTimesEvent', 326);
function $clinit_SendCreateAccountEvent(){
  $clinit_SendCreateAccountEvent = emptyMethod;
  TYPE_41 = new GwtEvent$Type;
}

function SendCreateAccountEvent(action){
  $clinit_SendCreateAccountEvent();
  BaseEvent.call(this, action);
}

defineClass(343, 342, {}, SendCreateAccountEvent);
_.dispatch = function dispatch_39(handler){
  dynamicCast(handler, 47).onCreateAccount(this);
}
;
_.getAssociatedType = function getAssociatedType_40(){
  return TYPE_41;
}
;
var TYPE_41;
var Lorg_dselent_course_1load_1scheduler_client_event_SendCreateAccountEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendCreateAccountEvent', 343);
function $clinit_SendEditCourseEvent(){
  $clinit_SendEditCourseEvent = emptyMethod;
  TYPE_42 = new GwtEvent$Type;
}

function SendEditCourseEvent(action){
  $clinit_SendEditCourseEvent();
  this.action = action;
}

defineClass(319, 649, {}, SendEditCourseEvent);
_.dispatch = function dispatch_40(handler){
  dynamicCast(handler, 48).onSendEditCourse(this);
}
;
_.getAssociatedType = function getAssociatedType_41(){
  return TYPE_42;
}
;
var TYPE_42;
var Lorg_dselent_course_1load_1scheduler_client_event_SendEditCourseEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendEditCourseEvent', 319);
function $clinit_SendEditSectionEvent(){
  $clinit_SendEditSectionEvent = emptyMethod;
  TYPE_43 = new GwtEvent$Type;
}

function SendEditSectionEvent(action){
  $clinit_SendEditSectionEvent();
  this.action = action;
}

defineClass(323, 649, {}, SendEditSectionEvent);
_.dispatch = function dispatch_41(handler){
  dynamicCast(handler, 49).onSendEditSection(this);
}
;
_.getAssociatedType = function getAssociatedType_42(){
  return TYPE_43;
}
;
var TYPE_43;
var Lorg_dselent_course_1load_1scheduler_client_event_SendEditSectionEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendEditSectionEvent', 323);
function $clinit_SendGetCourseListEvent(){
  $clinit_SendGetCourseListEvent = emptyMethod;
  TYPE_44 = new GwtEvent$Type;
}

function SendGetCourseListEvent(){
  $clinit_SendGetCourseListEvent();
}

defineClass(321, 649, {}, SendGetCourseListEvent);
_.dispatch = function dispatch_42(handler){
  dynamicCast(handler, 50).onSendGetCourseList(this);
}
;
_.getAssociatedType = function getAssociatedType_43(){
  return TYPE_44;
}
;
var TYPE_44;
var Lorg_dselent_course_1load_1scheduler_client_event_SendGetCourseListEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendGetCourseListEvent', 321);
function $clinit_SendGetEndTimesEvent(){
  $clinit_SendGetEndTimesEvent = emptyMethod;
  TYPE_45 = new GwtEvent$Type;
}

function SendGetEndTimesEvent(action){
  $clinit_SendGetEndTimesEvent();
  this.action = action;
}

defineClass(212, 649, {}, SendGetEndTimesEvent);
_.dispatch = function dispatch_43(handler){
  dynamicCast(handler, 51).onGetEndTimes(this);
}
;
_.getAssociatedType = function getAssociatedType_44(){
  return TYPE_45;
}
;
var TYPE_45;
var Lorg_dselent_course_1load_1scheduler_client_event_SendGetEndTimesEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendGetEndTimesEvent', 212);
function $clinit_SendGetFacultyEvent(){
  $clinit_SendGetFacultyEvent = emptyMethod;
  TYPE_46 = new GwtEvent$Type;
}

function SendGetFacultyEvent(){
  $clinit_SendGetFacultyEvent();
}

defineClass(244, 649, {}, SendGetFacultyEvent);
_.dispatch = function dispatch_44(handler){
  dynamicCast(handler, 52).onSendGetFaculty(this);
}
;
_.getAssociatedType = function getAssociatedType_45(){
  return TYPE_46;
}
;
var TYPE_46;
var Lorg_dselent_course_1load_1scheduler_client_event_SendGetFacultyEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendGetFacultyEvent', 244);
function $clinit_SendGetFrequenciesEvent(){
  $clinit_SendGetFrequenciesEvent = emptyMethod;
  TYPE_47 = new GwtEvent$Type;
}

function SendGetFrequenciesEvent(action){
  $clinit_SendGetFrequenciesEvent();
  this.action = action;
}

defineClass(242, 649, {}, SendGetFrequenciesEvent);
_.dispatch = function dispatch_45(handler){
  dynamicCast(handler, 53).onSendGetFrequencies(this);
}
;
_.getAssociatedType = function getAssociatedType_46(){
  return TYPE_47;
}
;
var TYPE_47;
var Lorg_dselent_course_1load_1scheduler_client_event_SendGetFrequenciesEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendGetFrequenciesEvent', 242);
function $clinit_SendGetOneFacultySectionInfoEvent(){
  $clinit_SendGetOneFacultySectionInfoEvent = emptyMethod;
  TYPE_48 = new GwtEvent$Type;
}

function SendGetOneFacultySectionInfoEvent(action){
  $clinit_SendGetOneFacultySectionInfoEvent();
  this.action = action;
}

defineClass(245, 649, {}, SendGetOneFacultySectionInfoEvent);
_.dispatch = function dispatch_46(handler){
  dynamicCast(handler, 54).onSendGetOneFacultySectionInfo(this);
}
;
_.getAssociatedType = function getAssociatedType_47(){
  return TYPE_48;
}
;
var TYPE_48;
var Lorg_dselent_course_1load_1scheduler_client_event_SendGetOneFacultySectionInfoEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendGetOneFacultySectionInfoEvent', 245);
function $clinit_SendGetSectionTypesEvent(){
  $clinit_SendGetSectionTypesEvent = emptyMethod;
  TYPE_49 = new GwtEvent$Type;
}

function SendGetSectionTypesEvent(){
  $clinit_SendGetSectionTypesEvent();
}

defineClass(243, 649, {}, SendGetSectionTypesEvent);
_.dispatch = function dispatch_47(handler){
  dynamicCast(handler, 57).onSendGetSectionTypes(this);
}
;
_.getAssociatedType = function getAssociatedType_48(){
  return TYPE_49;
}
;
var TYPE_49;
var Lorg_dselent_course_1load_1scheduler_client_event_SendGetSectionTypesEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendGetSectionTypesEvent', 243);
function $clinit_SendGetSectionsEvent(){
  $clinit_SendGetSectionsEvent = emptyMethod;
  TYPE_50 = new GwtEvent$Type;
}

function SendGetSectionsEvent(action){
  $clinit_SendGetSectionsEvent();
  this.action = action;
}

defineClass(325, 649, {}, SendGetSectionsEvent);
_.dispatch = function dispatch_48(handler){
  dynamicCast(handler, 55).onSendGetSections(this);
}
;
_.getAssociatedType = function getAssociatedType_49(){
  return TYPE_50;
}
;
var TYPE_50;
var Lorg_dselent_course_1load_1scheduler_client_event_SendGetSectionsEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendGetSectionsEvent', 325);
function $clinit_SendGetStartTimesEvent(){
  $clinit_SendGetStartTimesEvent = emptyMethod;
  TYPE_51 = new GwtEvent$Type;
}

function SendGetStartTimesEvent(action){
  $clinit_SendGetStartTimesEvent();
  this.action = action;
}

defineClass(211, 649, {}, SendGetStartTimesEvent);
_.dispatch = function dispatch_49(handler){
  dynamicCast(handler, 56).onGetStartTimes(this);
}
;
_.getAssociatedType = function getAssociatedType_50(){
  return TYPE_51;
}
;
var TYPE_51;
var Lorg_dselent_course_1load_1scheduler_client_event_SendGetStartTimesEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendGetStartTimesEvent', 211);
function $clinit_SendGetTermsEvent(){
  $clinit_SendGetTermsEvent = emptyMethod;
  TYPE_52 = new GwtEvent$Type;
}

function SendGetTermsEvent(){
  $clinit_SendGetTermsEvent();
}

defineClass(213, 649, {}, SendGetTermsEvent);
_.dispatch = function dispatch_50(handler){
  dynamicCast(handler, 58).onSendGetTerms(this);
}
;
_.getAssociatedType = function getAssociatedType_51(){
  return TYPE_52;
}
;
var TYPE_52;
var Lorg_dselent_course_1load_1scheduler_client_event_SendGetTermsEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendGetTermsEvent', 213);
function $clinit_SendLoginEvent(){
  $clinit_SendLoginEvent = emptyMethod;
  TYPE_53 = new GwtEvent$Type;
}

function SendLoginEvent(action){
  $clinit_SendLoginEvent();
  this.action = action;
}

defineClass(341, 649, {}, SendLoginEvent);
_.dispatch = function dispatch_51(handler){
  dynamicCast(handler, 59).onSendLogin(this);
}
;
_.getAssociatedType = function getAssociatedType_52(){
  return TYPE_53;
}
;
var TYPE_53;
var Lorg_dselent_course_1load_1scheduler_client_event_SendLoginEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendLoginEvent', 341);
function $clinit_SendNewCourseEvent(){
  $clinit_SendNewCourseEvent = emptyMethod;
  TYPE_54 = new GwtEvent$Type;
}

function SendNewCourseEvent(action){
  $clinit_SendNewCourseEvent();
  this.action = action;
}

defineClass(318, 649, {}, SendNewCourseEvent);
_.dispatch = function dispatch_52(handler){
  dynamicCast(handler, 60).onSendNewCourse(this);
}
;
_.getAssociatedType = function getAssociatedType_53(){
  return TYPE_54;
}
;
var TYPE_54;
var Lorg_dselent_course_1load_1scheduler_client_event_SendNewCourseEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendNewCourseEvent', 318);
function $clinit_SendNewSectionEvent(){
  $clinit_SendNewSectionEvent = emptyMethod;
  TYPE_55 = new GwtEvent$Type;
}

function SendNewSectionEvent(action){
  $clinit_SendNewSectionEvent();
  this.action = action;
}

defineClass(322, 649, {}, SendNewSectionEvent);
_.dispatch = function dispatch_53(handler){
  dynamicCast(handler, 61).onSendNewSection(this);
}
;
_.getAssociatedType = function getAssociatedType_54(){
  return TYPE_55;
}
;
var TYPE_55;
var Lorg_dselent_course_1load_1scheduler_client_event_SendNewSectionEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendNewSectionEvent', 322);
function $clinit_SendRemoveCourseEvent(){
  $clinit_SendRemoveCourseEvent = emptyMethod;
  TYPE_56 = new GwtEvent$Type;
}

function SendRemoveCourseEvent(action){
  $clinit_SendRemoveCourseEvent();
  this.action = action;
}

defineClass(320, 649, {}, SendRemoveCourseEvent);
_.dispatch = function dispatch_54(handler){
  dynamicCast(handler, 62).onSendRemoveCourse(this);
}
;
_.getAssociatedType = function getAssociatedType_55(){
  return TYPE_56;
}
;
var TYPE_56;
var Lorg_dselent_course_1load_1scheduler_client_event_SendRemoveCourseEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendRemoveCourseEvent', 320);
function $clinit_SendRemoveSectionEvent(){
  $clinit_SendRemoveSectionEvent = emptyMethod;
  TYPE_57 = new GwtEvent$Type;
}

function SendRemoveSectionEvent(action){
  $clinit_SendRemoveSectionEvent();
  this.action = action;
}

defineClass(324, 649, {}, SendRemoveSectionEvent);
_.dispatch = function dispatch_55(handler){
  dynamicCast(handler, 63).onSendRemoveSection(this);
}
;
_.getAssociatedType = function getAssociatedType_56(){
  return TYPE_57;
}
;
var TYPE_57;
var Lorg_dselent_course_1load_1scheduler_client_event_SendRemoveSectionEvent_2_classLit = createForClass('org.dselent.course_load_scheduler.client.event', 'SendRemoveSectionEvent', 324);
function EmptyStringException(){
  Exception.call(this);
}

defineClass(108, 91, {3:1, 11:1, 108:1}, EmptyStringException);
var Lorg_dselent_course_1load_1scheduler_client_exceptions_EmptyStringException_2_classLit = createForClass('org.dselent.course_load_scheduler.client.exceptions', 'EmptyStringException', 108);
function InvalidJsonException(message){
  Exception_0.call(this, message);
}

defineClass(605, 91, $intern_2, InvalidJsonException);
var Lorg_dselent_course_1load_1scheduler_client_exceptions_InvalidJsonException_2_classLit = createForClass('org.dselent.course_load_scheduler.client.exceptions', 'InvalidJsonException', 605);
function PasswordLengthException(){
  Exception.call(this);
}

defineClass(226, 91, {3:1, 11:1, 226:1}, PasswordLengthException);
var Lorg_dselent_course_1load_1scheduler_client_exceptions_PasswordLengthException_2_classLit = createForClass('org.dselent.course_load_scheduler.client.exceptions', 'PasswordLengthException', 226);
function PasswordMatchException(){
  Exception.call(this);
}

defineClass(227, 91, {3:1, 11:1, 227:1}, PasswordMatchException);
var Lorg_dselent_course_1load_1scheduler_client_exceptions_PasswordMatchException_2_classLit = createForClass('org.dselent.course_load_scheduler.client.exceptions', 'PasswordMatchException', 227);
function StatusCodeException(message){
  Exception_0.call(this, message);
}

defineClass(606, 91, $intern_2, StatusCodeException);
var Lorg_dselent_course_1load_1scheduler_client_exceptions_StatusCodeException_2_classLit = createForClass('org.dselent.course_load_scheduler.client.exceptions', 'StatusCodeException', 606);
function $clinit_Injector(){
  $clinit_Injector = emptyMethod;
  INSTANCE_3 = new org_dselent_course_load_scheduler_client_gin_InjectorImpl;
}

var INSTANCE_3;
function org_dselent_course_load_scheduler_client_gin_InjectorImpl(){
  this.fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector = new org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector;
}

defineClass(302, 1, {}, org_dselent_course_load_scheduler_client_gin_InjectorImpl);
var Lorg_dselent_course_1load_1scheduler_client_gin_org_1dselent_1course_1load_1scheduler_1client_1gin_1InjectorImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.gin', 'org_dselent_course_load_scheduler_client_gin_InjectorImpl', 302);
function $getFragment_com_google_gwt_event_shared(this$static){
  !this$static.fieldFragment_com$google$gwt$event$shared && (this$static.fieldFragment_com$google$gwt$event$shared = new org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment);
  return this$static.fieldFragment_com$google$gwt$event$shared;
}

function $getFragment_org_dselent_course_load_scheduler_client_presenter(this$static){
  !this$static.fieldFragment_org$dselent$course_load_scheduler$client$presenter && (this$static.fieldFragment_org$dselent$course_load_scheduler$client$presenter = new org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_1(this$static));
  return this$static.fieldFragment_org$dselent$course_load_scheduler$client$presenter;
}

function $getFragment_org_dselent_course_load_scheduler_client_presenter_impl(this$static){
  !this$static.fieldFragment_org$dselent$course_load_scheduler$client$presenter$impl && (this$static.fieldFragment_org$dselent$course_load_scheduler$client$presenter$impl = new org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_0(this$static));
  return this$static.fieldFragment_org$dselent$course_load_scheduler$client$presenter$impl;
}

function $getFragment_org_dselent_course_load_scheduler_client_service_impl(this$static){
  !this$static.fieldFragment_org$dselent$course_load_scheduler$client$service$impl && (this$static.fieldFragment_org$dselent$course_load_scheduler$client$service$impl = new org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_2(this$static));
  return this$static.fieldFragment_org$dselent$course_load_scheduler$client$service$impl;
}

function $getFragment_org_dselent_course_load_scheduler_client_view(this$static){
  !this$static.fieldFragment_org$dselent$course_load_scheduler$client$view && (this$static.fieldFragment_org$dselent$course_load_scheduler$client$view = new org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_4(this$static));
  return this$static.fieldFragment_org$dselent$course_load_scheduler$client$view;
}

function $getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static){
  !this$static.fieldFragment_org$dselent$course_load_scheduler$client$view$impl && (this$static.fieldFragment_org$dselent$course_load_scheduler$client$view$impl = new org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_3);
  return this$static.fieldFragment_org$dselent$course_load_scheduler$client$view$impl;
}

function org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector(){
}

defineClass(353, 1, {}, org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector);
_.fieldFragment_com$google$gwt$event$shared = null;
_.fieldFragment_org$dselent$course_load_scheduler$client$presenter = null;
_.fieldFragment_org$dselent$course_load_scheduler$client$presenter$impl = null;
_.fieldFragment_org$dselent$course_load_scheduler$client$service$impl = null;
_.fieldFragment_org$dselent$course_load_scheduler$client$view = null;
_.fieldFragment_org$dselent$course_load_scheduler$client$view$impl = null;
var Lorg_dselent_course_1load_1scheduler_client_gin_org_1dselent_1course_1load_1scheduler_1client_1gin_1Injector_1InjectorGinjector_2_classLit = createForClass('org.dselent.course_load_scheduler.client.gin', 'org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector', 353);
function $setCoursesId(this$static, coursesId){
  this$static.coursesId = coursesId;
}

function $setCoursesNumber(this$static, coursesNumber){
  this$static.coursesNumber = coursesNumber;
}

function $setCoursesTitle(this$static, coursesTitle){
  this$static.coursesTitle = coursesTitle;
}

function $setFrequency(this$static, frequency){
  this$static.frequency = frequency;
}

function $setFrequencyId(this$static, frequencyId){
  this$static.frequencyId = frequencyId;
}

function CourseInfo(){
}

defineClass(107, 1, {107:1}, CourseInfo);
_.equals$ = function equals_21(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (!instanceOf(obj, 107)) {
    return false;
  }
  other = dynamicCast(obj, 107);
  if (!this.coursesId) {
    if (other.coursesId) {
      return false;
    }
  }
   else if (!$equals(this.coursesId, other.coursesId)) {
    return false;
  }
  if (this.coursesNumber == null) {
    if (other.coursesNumber != null) {
      return false;
    }
  }
   else if (!$equals_0(this.coursesNumber, other.coursesNumber)) {
    return false;
  }
  if (this.coursesTitle == null) {
    if (other.coursesTitle != null) {
      return false;
    }
  }
   else if (!$equals_0(this.coursesTitle, other.coursesTitle)) {
    return false;
  }
  if (this.frequency == null) {
    if (other.frequency != null) {
      return false;
    }
  }
   else if (!$equals_0(this.frequency, other.frequency)) {
    return false;
  }
  if (!this.frequencyId) {
    if (other.frequencyId) {
      return false;
    }
  }
   else if (!$equals(this.frequencyId, other.frequencyId)) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_26(){
  var result;
  result = 31 + (!this.coursesId?0:this.coursesId.value_0);
  result = 31 * result + (this.coursesNumber == null?0:getHashCode_0(this.coursesNumber));
  result = 31 * result + (this.coursesTitle == null?0:getHashCode_0(this.coursesTitle));
  result = 31 * result + (this.frequency == null?0:getHashCode_0(this.frequency));
  result = 31 * result + (!this.frequencyId?0:this.frequencyId.value_0);
  return result;
}
;
_.toString$ = function toString_70(){
  return 'CourseInfo [coursesId=' + this.coursesId + ', coursesNumber=' + this.coursesNumber + ', coursesTitle=' + this.coursesTitle + ', frequencyId=' + this.frequencyId + ', frequency=' + this.frequency + ']';
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_CourseInfo_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'CourseInfo', 107);
function $setCoursesId_0(this$static, coursesId){
  this$static.coursesId = coursesId;
}

function $setCoursesNumber_0(this$static, coursesNumber){
  this$static.coursesNumber = coursesNumber;
}

function $setCoursesTitle_0(this$static, coursesTitle){
  this$static.coursesTitle = coursesTitle;
}

function $setDays(this$static, days){
  this$static.days = days;
}

function $setDaysId(this$static, daysId){
  this$static.daysId = daysId;
}

function $setEndTime(this$static, endTime){
  this$static.endTime = endTime;
}

function $setEndTimeId(this$static, endTimeId){
  this$static.endTimeId = endTimeId;
}

function $setSectionId(this$static, sectionId){
  this$static.sectionId = sectionId;
}

function $setSectionType(this$static, sectionType){
  this$static.sectionType = sectionType;
}

function $setSectionTypeId(this$static, sectionTypeId){
  this$static.sectionTypeId = sectionTypeId;
}

function $setSectionsName(this$static, sectionsName){
  this$static.sectionsName = sectionsName;
}

function $setStartTime(this$static, startTime){
  this$static.startTime = startTime;
}

function $setStartTimeId(this$static, startTimeId){
  this$static.startTimeId = startTimeId;
}

function $setTermsId(this$static, termsId){
  this$static.termsId = termsId;
}

function $setTermsName(this$static, termsName){
  this$static.termsName = termsName;
}

function CourseSections(){
}

defineClass(89, 1, {89:1}, CourseSections);
_.equals$ = function equals_22(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (!instanceOf(obj, 89)) {
    return false;
  }
  other = dynamicCast(obj, 89);
  if (!this.coursesId) {
    if (other.coursesId) {
      return false;
    }
  }
   else if (!$equals(this.coursesId, other.coursesId)) {
    return false;
  }
  if (this.coursesNumber == null) {
    if (other.coursesNumber != null) {
      return false;
    }
  }
   else if (!$equals_0(this.coursesNumber, other.coursesNumber)) {
    return false;
  }
  if (this.coursesTitle == null) {
    if (other.coursesTitle != null) {
      return false;
    }
  }
   else if (!$equals_0(this.coursesTitle, other.coursesTitle)) {
    return false;
  }
  if (this.days == null) {
    if (other.days != null) {
      return false;
    }
  }
   else if (!$equals_0(this.days, other.days)) {
    return false;
  }
  if (!this.daysId) {
    if (other.daysId) {
      return false;
    }
  }
   else if (!$equals(this.daysId, other.daysId)) {
    return false;
  }
  if (!this.endTime) {
    if (other.endTime) {
      return false;
    }
  }
   else if (!$equals_1(this.endTime, other.endTime)) {
    return false;
  }
  if (!this.endTimeId) {
    if (other.endTimeId) {
      return false;
    }
  }
   else if (!$equals(this.endTimeId, other.endTimeId)) {
    return false;
  }
  if (!this.sectionId) {
    if (other.sectionId) {
      return false;
    }
  }
   else if (!$equals(this.sectionId, other.sectionId)) {
    return false;
  }
  if (this.sectionType == null) {
    if (other.sectionType != null) {
      return false;
    }
  }
   else if (!$equals_0(this.sectionType, other.sectionType)) {
    return false;
  }
  if (!this.sectionTypeId) {
    if (other.sectionTypeId) {
      return false;
    }
  }
   else if (!$equals(this.sectionTypeId, other.sectionTypeId)) {
    return false;
  }
  if (this.sectionsName == null) {
    if (other.sectionsName != null) {
      return false;
    }
  }
   else if (!$equals_0(this.sectionsName, other.sectionsName)) {
    return false;
  }
  if (!this.startTime) {
    if (other.startTime) {
      return false;
    }
  }
   else if (!$equals_1(this.startTime, other.startTime)) {
    return false;
  }
  if (!this.startTimeId) {
    if (other.startTimeId) {
      return false;
    }
  }
   else if (!$equals(this.startTimeId, other.startTimeId)) {
    return false;
  }
  if (!this.termsId) {
    if (other.termsId) {
      return false;
    }
  }
   else if (!$equals(this.termsId, other.termsId)) {
    return false;
  }
  if (this.termsName == null) {
    if (other.termsName != null) {
      return false;
    }
  }
   else if (!$equals_0(this.termsName, other.termsName)) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_27(){
  var result;
  result = 31 + (!this.coursesId?0:this.coursesId.value_0);
  result = 31 * result + (this.coursesNumber == null?0:getHashCode_0(this.coursesNumber));
  result = 31 * result + (this.coursesTitle == null?0:getHashCode_0(this.coursesTitle));
  result = 31 * result + (this.days == null?0:getHashCode_0(this.days));
  result = 31 * result + (!this.daysId?0:this.daysId.value_0);
  result = 31 * result + (!this.endTime?0:$hashCode(this.endTime));
  result = 31 * result + (!this.endTimeId?0:this.endTimeId.value_0);
  result = 31 * result + (!this.sectionId?0:this.sectionId.value_0);
  result = 31 * result + (this.sectionType == null?0:getHashCode_0(this.sectionType));
  result = 31 * result + (!this.sectionTypeId?0:this.sectionTypeId.value_0);
  result = 31 * result + (this.sectionsName == null?0:getHashCode_0(this.sectionsName));
  result = 31 * result + (!this.startTime?0:$hashCode(this.startTime));
  result = 31 * result + (!this.startTimeId?0:this.startTimeId.value_0);
  result = 31 * result + (!this.termsId?0:this.termsId.value_0);
  result = 31 * result + (this.termsName == null?0:getHashCode_0(this.termsName));
  return result;
}
;
_.toString$ = function toString_71(){
  return 'CourseSections [termsName=' + this.termsName + ', sectionType=' + this.sectionType + ', sectionsName=' + this.sectionsName + ', days=' + this.days + ', coursesNumber=' + this.coursesNumber + ', coursesTitle=' + this.coursesTitle + ', startTime=' + this.startTime + ', endTime=' + this.endTime + ', sectionId=' + this.sectionId + ', termsId=' + this.termsId + ', sectionTypeId=' + this.sectionTypeId + ', daysId=' + this.daysId + ', startTimeId=' + this.startTimeId + ', endTimeId=' + this.endTimeId + ', coursesId=' + this.coursesId + ']';
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_CourseSections_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'CourseSections', 89);
defineClass(656, 1, {});
var Lorg_dselent_course_1load_1scheduler_client_model_Model_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'Model', 656);
function $setFrequencyID(this$static, frequencyID){
  this$static.frequencyID = frequencyID;
}

function $setId(this$static, id_0){
  this$static.id_0 = id_0;
}

function $setNumber(this$static, number){
  this$static.number = number;
}

function $setTitle(this$static, title_0){
  this$static.title_0 = title_0;
}

function Courses(){
}

defineClass(145, 656, {145:1}, Courses);
_.equals$ = function equals_23(obj){
  var other;
  if (this === obj)
    return true;
  if (obj == null)
    return false;
  if (Lorg_dselent_course_1load_1scheduler_client_model_Courses_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj))
    return false;
  other = dynamicCast(obj, 145);
  if (!$equals(this.frequencyID, other.frequencyID))
    return false;
  if (!this.id_0) {
    if (other.id_0)
      return false;
  }
   else if (!$equals(this.id_0, other.id_0))
    return false;
  if (this.number == null) {
    if (other.number != null)
      return false;
  }
   else if (!$equals_0(this.number, other.number))
    return false;
  if (this.title_0 == null) {
    if (other.title_0 != null)
      return false;
  }
   else if (!$equals_0(this.title_0, other.title_0))
    return false;
  return true;
}
;
_.hashCode$ = function hashCode_28(){
  var result;
  result = 31 + (!this.deleted?0:this.deleted.value_0?1231:1237);
  result = 31 * result + (!this.frequencyID?0:this.frequencyID.value_0);
  result = 31 * result + (!this.id_0?0:this.id_0.value_0);
  result = 31 * result + (this.number == null?0:getHashCode_0(this.number));
  result = 31 * result + (this.title_0 == null?0:getHashCode_0(this.title_0));
  return result;
}
;
_.toString$ = function toString_72(){
  return 'Courses [id=' + this.id_0 + ', title=' + this.title_0 + ', number=' + this.number + ', frequencyID=' + this.frequencyID + ', createdAt=' + 0 + ', updatedAt=' + 0 + ', deleted=' + this.deleted + ']';
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_Courses_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'Courses', 145);
function EndTime(){
}

defineClass(128, 656, {128:1}, EndTime);
_.equals$ = function equals_24(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (!instanceOf(obj, 128)) {
    return false;
  }
  other = dynamicCast(obj, 128);
  if (!this.id_0) {
    if (other.id_0) {
      return false;
    }
  }
   else if (!$equals(this.id_0, other.id_0)) {
    return false;
  }
  if (!this.time) {
    if (other.time) {
      return false;
    }
  }
   else if (!$equals_1(this.time, other.time)) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_29(){
  var result;
  result = 31 + (!this.id_0?0:this.id_0.value_0);
  result = 31 * result + (!this.time?0:$hashCode(this.time));
  return result;
}
;
_.toString$ = function toString_73(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'EndTime [id=';
  $append_2(builder, this.id_0);
  builder.string += ', time=';
  $append_2(builder, this.time);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_EndTime_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'EndTime', 128);
function $setEmail(this$static, email){
  this$static.email = email;
}

function $setFacultyTypeId(this$static, facultyTypeId){
  this$static.facultyTypeId = facultyTypeId;
}

function $setFirstName(this$static, firstName){
  this$static.firstName = firstName;
}

function $setId_0(this$static, id_0){
  this$static.id_0 = id_0;
}

function $setLastName(this$static, lastName){
  this$static.lastName = lastName;
}

function Faculty(){
}

defineClass(122, 656, {122:1}, Faculty);
_.equals$ = function equals_25(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (!instanceOf(obj, 113)) {
    return false;
  }
  other = dynamicCast(obj, 122);
  if (!this.id_0) {
    if (other.id_0) {
      return false;
    }
  }
   else if (!$equals(this.id_0, other.id_0)) {
    return false;
  }
  if (this.firstName == null) {
    if (other.firstName != null) {
      return false;
    }
  }
   else if (!$equals_0(this.firstName, other.firstName)) {
    return false;
  }
  if (this.lastName == null) {
    if (other.lastName != null) {
      return false;
    }
  }
   else if (!$equals_0(this.lastName, other.lastName)) {
    return false;
  }
  if (this.email == null) {
    if (other.email != null) {
      return false;
    }
  }
   else if (!$equals_0(this.email, other.email)) {
    return false;
  }
  if (!this.facultyTypeId) {
    if (other.facultyTypeId) {
      return false;
    }
  }
   else if (!$equals(this.facultyTypeId, other.facultyTypeId)) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_30(){
  var result;
  result = 961 + (this.email == null?0:getHashCode_0(this.email));
  result = 31 * result + (this.firstName == null?0:getHashCode_0(this.firstName));
  result = 31 * result + (!this.id_0?0:this.id_0.value_0);
  result = 31 * result + (this.lastName == null?0:getHashCode_0(this.lastName));
  result = 31 * result;
  result = 31 * result + (!this.facultyTypeId?0:this.facultyTypeId.value_0);
  result = 31 * result;
  return result;
}
;
_.toString$ = function toString_74(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'Users [id=';
  $append_2(builder, this.id_0);
  builder.string += ', firstName=';
  $append_3(builder, this.firstName);
  builder.string += ', lastName=';
  $append_3(builder, this.lastName);
  builder.string += ', email=';
  $append_3(builder, this.email);
  builder.string += ', facultyTypeId=';
  $append_2(builder, this.facultyTypeId);
  builder.string += ', createdAt=';
  $append_2(builder, this.createdAt);
  builder.string += ', updatedAt=';
  $append_2(builder, this.updatedAt);
  builder.string += ', deleted=';
  $append_2(builder, this.deleted);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_Faculty_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'Faculty', 122);
function $setId_1(this$static, id_0){
  this$static.id_0 = id_0;
}

function FacultyType(){
}

defineClass(168, 656, {168:1}, FacultyType);
_.equals$ = function equals_26(obj){
  var other;
  if (this === obj)
    return true;
  if (obj == null)
    return false;
  if (Lorg_dselent_course_1load_1scheduler_client_model_FacultyType_2_classLit != getClass__Ljava_lang_Class___devirtual$(obj))
    return false;
  other = dynamicCast(obj, 168);
  if (!this.id_0) {
    if (other.id_0)
      return false;
  }
   else if (!$equals(this.id_0, other.id_0))
    return false;
  if (this.type_0 == null) {
    if (other.type_0 != null)
      return false;
  }
   else if (!$equals_0(this.type_0, other.type_0))
    return false;
  return true;
}
;
_.hashCode$ = function hashCode_31(){
  var result;
  result = 31 + (!this.id_0?0:this.id_0.value_0);
  result = 31 * result + (this.type_0 == null?0:getHashCode_0(this.type_0));
  return result;
}
;
_.toString$ = function toString_75(){
  return 'FacultyType [id=' + this.id_0 + ', type=' + this.type_0 + ']';
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_FacultyType_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'FacultyType', 168);
function Frequency(){
}

defineClass(151, 656, {151:1}, Frequency);
_.equals$ = function equals_27(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (!instanceOf(obj, 151)) {
    return false;
  }
  other = dynamicCast(obj, 151);
  if (this.frequency == null) {
    if (other.frequency != null) {
      return false;
    }
  }
   else if (!$equals_0(this.frequency, other.frequency)) {
    return false;
  }
  if (!this.id_0) {
    if (other.id_0) {
      return false;
    }
  }
   else if (!$equals(this.id_0, other.id_0)) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_32(){
  var result;
  result = 31 + (this.frequency == null?0:getHashCode_0(this.frequency));
  result = 31 * result + (!this.id_0?0:this.id_0.value_0);
  return result;
}
;
_.toString$ = function toString_76(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'Frequency [id=';
  $append_2(builder, this.id_0);
  builder.string += ', frequency=';
  $append_3(builder, this.frequency);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_Frequency_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'Frequency', 151);
function $setEndTime_0(this$static, endTime){
  this$static.endTime = endTime;
}

function $setRequestsId(this$static, requestsId){
  this$static.requestsId = requestsId;
}

function $setRequestsUserId(this$static, requestsUserId){
  this$static.requestsUserId = requestsUserId;
}

function $setStartTime_0(this$static, startTime){
  this$static.startTime = startTime;
}

function RequestTables(){
}

defineClass(147, 656, {147:1}, RequestTables);
_.equals$ = function equals_28(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (!instanceOf(obj, 147)) {
    return false;
  }
  other = dynamicCast(obj, 147);
  if (this.coursesNumber == null) {
    if (other.coursesNumber != null) {
      return false;
    }
  }
   else if (!$equals_0(this.coursesNumber, other.coursesNumber)) {
    return false;
  }
  if (this.coursesTitle == null) {
    if (other.coursesTitle != null) {
      return false;
    }
  }
   else if (!$equals_0(this.coursesTitle, other.coursesTitle)) {
    return false;
  }
  if (!this.endTime) {
    if (other.endTime) {
      return false;
    }
  }
   else if (!$equals_1(this.endTime, other.endTime)) {
    return false;
  }
  if (this.requestOtherMessage == null) {
    if (other.requestOtherMessage != null) {
      return false;
    }
  }
   else if (!$equals_0(this.requestOtherMessage, other.requestOtherMessage)) {
    return false;
  }
  if (this.requestStatus == null) {
    if (other.requestStatus != null) {
      return false;
    }
  }
   else if (!$equals_0(this.requestStatus, other.requestStatus)) {
    return false;
  }
  if (!this.requestsId) {
    if (other.requestsId) {
      return false;
    }
  }
   else if (!$equals(this.requestsId, other.requestsId)) {
    return false;
  }
  if (!this.requestsUserId) {
    if (other.requestsUserId) {
      return false;
    }
  }
   else if (!$equals(this.requestsUserId, other.requestsUserId)) {
    return false;
  }
  if (!this.startTime) {
    if (other.startTime) {
      return false;
    }
  }
   else if (!$equals_1(this.startTime, other.startTime)) {
    return false;
  }
  if (this.termsName == null) {
    if (other.termsName != null) {
      return false;
    }
  }
   else if (!$equals_0(this.termsName, other.termsName)) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_33(){
  var result;
  result = 961 + (this.coursesNumber == null?0:getHashCode_0(this.coursesNumber));
  result = 31 * result + (this.coursesTitle == null?0:getHashCode_0(this.coursesTitle));
  result = 31 * result + (!this.endTime?0:$hashCode(this.endTime));
  result = 31 * result;
  result = 31 * result;
  result = 31 * result;
  result = 31 * result + (this.requestOtherMessage == null?0:getHashCode_0(this.requestOtherMessage));
  result = 31 * result + (this.requestStatus == null?0:getHashCode_0(this.requestStatus));
  result = 31 * result;
  result = 31 * result + (!this.requestsId?0:this.requestsId.value_0);
  result = 31 * result + (!this.requestsUserId?0:this.requestsUserId.value_0);
  result = 31 * result + (!this.startTime?0:$hashCode(this.startTime));
  result = 31 * result;
  result = 31 * result;
  result = 31 * result + (this.termsName == null?0:getHashCode_0(this.termsName));
  return result;
}
;
_.toString$ = function toString_77(){
  return 'RequestTables [requestsId=' + this.requestsId + ', requestsUserId=' + this.requestsUserId + ', termsName=' + this.termsName + ', startTime=' + this.startTime + ', endTime=' + this.endTime + ', coursesTitle=' + this.coursesTitle + ', coursesNumber=' + this.coursesNumber + ', requestOtherMessage=' + this.requestOtherMessage + ', requestStatus=' + this.requestStatus + ', facultyFirstName=' + this.facultyFirstName + ', facultyLastName=' + this.facultyLastName + ', termsId=' + this.termsId + ', startTimeId=' + this.startTimeId + ', endTimeId=' + this.endTimeId + ', coursesId=' + this.coursesId + ', requestStatusId=' + this.requestStatusId + ']';
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_RequestTables_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'RequestTables', 147);
function $setId_2(this$static, id_0){
  this$static.id_0 = id_0;
}

function $setType(this$static, type_0){
  this$static.type_0 = type_0;
}

function SectionType(){
}

defineClass(152, 656, {152:1}, SectionType);
_.equals$ = function equals_29(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (!instanceOf(obj, 152)) {
    return false;
  }
  other = dynamicCast(obj, 152);
  if (!this.id_0) {
    if (other.id_0) {
      return false;
    }
  }
   else if (!$equals(this.id_0, other.id_0)) {
    return false;
  }
  if (this.type_0 == null) {
    if (other.type_0 != null) {
      return false;
    }
  }
   else if (!$equals_0(this.type_0, other.type_0)) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_34(){
  var result;
  result = 31 + (!this.id_0?0:this.id_0.value_0);
  result = 31 * result + (this.type_0 == null?0:getHashCode_0(this.type_0));
  return result;
}
;
_.toString$ = function toString_78(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'SectionType [id=';
  $append_2(builder, this.id_0);
  builder.string += ', type=';
  $append_3(builder, this.type_0);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_SectionType_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'SectionType', 152);
function $setCoursesNumber_1(this$static, coursesNumber){
  this$static.coursesNumber = coursesNumber;
}

function $setCoursesTitle_1(this$static, coursesTitle){
  this$static.coursesTitle = coursesTitle;
}

function $setDays_0(this$static, days){
  this$static.days = days;
}

function $setEndTime_1(this$static, endTime){
  this$static.endTime = endTime;
}

function $setFacultyId(this$static, facultyId){
  this$static.facultyId = facultyId;
}

function $setSectionType_0(this$static, sectionType){
  this$static.sectionType = sectionType;
}

function $setSectionsName_0(this$static, sectionsName){
  this$static.sectionsName = sectionsName;
}

function $setStartTime_1(this$static, startTime){
  this$static.startTime = startTime;
}

function $setTermsName_0(this$static, termsName){
  this$static.termsName = termsName;
}

function SectionsInfo(){
}

defineClass(150, 656, {150:1}, SectionsInfo);
_.equals$ = function equals_30(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (!instanceOf(obj, 150)) {
    return false;
  }
  other = dynamicCast(obj, 150);
  if (this.coursesNumber == null) {
    if (other.coursesNumber != null) {
      return false;
    }
  }
   else if (!$equals_0(this.coursesNumber, other.coursesNumber)) {
    return false;
  }
  if (this.coursesTitle == null) {
    if (other.coursesTitle != null) {
      return false;
    }
  }
   else if (!$equals_0(this.coursesTitle, other.coursesTitle)) {
    return false;
  }
  if (this.days == null) {
    if (other.days != null) {
      return false;
    }
  }
   else if (!$equals_0(this.days, other.days)) {
    return false;
  }
  if (!this.endTime) {
    if (other.endTime) {
      return false;
    }
  }
   else if (!$equals_1(this.endTime, other.endTime)) {
    return false;
  }
  if (!this.facultyId) {
    if (other.facultyId) {
      return false;
    }
  }
   else if (!$equals(this.facultyId, other.facultyId)) {
    return false;
  }
  if (this.sectionType == null) {
    if (other.sectionType != null) {
      return false;
    }
  }
   else if (!$equals_0(this.sectionType, other.sectionType)) {
    return false;
  }
  if (this.sectionsName == null) {
    if (other.sectionsName != null) {
      return false;
    }
  }
   else if (!$equals_0(this.sectionsName, other.sectionsName)) {
    return false;
  }
  if (!this.startTime) {
    if (other.startTime) {
      return false;
    }
  }
   else if (!$equals_1(this.startTime, other.startTime)) {
    return false;
  }
  if (this.termsName == null) {
    if (other.termsName != null) {
      return false;
    }
  }
   else if (!$equals_0(this.termsName, other.termsName)) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_35(){
  var result;
  result = 961 + (this.coursesNumber == null?0:getHashCode_0(this.coursesNumber));
  result = 31 * result + (this.coursesTitle == null?0:getHashCode_0(this.coursesTitle));
  result = 31 * result + (this.days == null?0:getHashCode_0(this.days));
  result = 31 * result;
  result = 31 * result + (!this.endTime?0:$hashCode(this.endTime));
  result = 31 * result;
  result = 31 * result;
  result = 31 * result + (!this.facultyId?0:this.facultyId.value_0);
  result = 31 * result;
  result = 31 * result;
  result = 31 * result + (this.sectionType == null?0:getHashCode_0(this.sectionType));
  result = 31 * result;
  result = 31 * result + (this.sectionsName == null?0:getHashCode_0(this.sectionsName));
  result = 31 * result + (!this.startTime?0:$hashCode(this.startTime));
  result = 31 * result;
  result = 31 * result;
  result = 31 * result + (this.termsName == null?0:getHashCode_0(this.termsName));
  return result;
}
;
_.toString$ = function toString_79(){
  return 'SectionsInfo [termsName=' + this.termsName + ', sectionType=' + this.sectionType + ', days=' + this.days + ', coursesNumber=' + this.coursesNumber + ', coursesTitle=' + this.coursesTitle + ', startTime=' + this.startTime + ', endTime=' + this.endTime + ', sectionsName=' + this.sectionsName + ', facultyFirstName=' + this.facultyFirstName + ', facultyLastName=' + this.facultyLastName + ', sectionsId=' + this.sectionsId + ', termsId=' + this.termsId + ', sectionTypeId=' + this.sectionTypeId + ', daysId=' + this.daysId + ', startTimeId=' + this.startTimeId + ', endTimeId=' + this.endTimeId + ', coursesId=' + this.coursesId + ', facultyId=' + this.facultyId + ']';
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_SectionsInfo_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'SectionsInfo', 150);
function StartTime(){
}

defineClass(127, 656, {127:1}, StartTime);
_.equals$ = function equals_31(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (!instanceOf(obj, 127)) {
    return false;
  }
  other = dynamicCast(obj, 127);
  if (!this.id_0) {
    if (other.id_0) {
      return false;
    }
  }
   else if (!$equals(this.id_0, other.id_0)) {
    return false;
  }
  if (!this.time) {
    if (other.time) {
      return false;
    }
  }
   else if (!$equals_1(this.time, other.time)) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_36(){
  var result;
  result = 31 + (!this.id_0?0:this.id_0.value_0);
  result = 31 * result + (!this.time?0:$hashCode(this.time));
  return result;
}
;
_.toString$ = function toString_80(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'StartTime [id=';
  $append_2(builder, this.id_0);
  builder.string += ', time=';
  $append_2(builder, this.time);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_StartTime_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'StartTime', 127);
function $setId_3(this$static, id_0){
  this$static.id_0 = id_0;
}

function $setName(this$static, name_0){
  this$static.name_0 = name_0;
}

function Terms(){
}

defineClass(118, 656, {118:1}, Terms);
_.equals$ = function equals_32(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (!instanceOf(obj, 118)) {
    return false;
  }
  other = dynamicCast(obj, 118);
  if (!this.id_0) {
    if (other.id_0) {
      return false;
    }
  }
   else if (!$equals(this.id_0, other.id_0)) {
    return false;
  }
  if (this.name_0 == null) {
    if (other.name_0 != null) {
      return false;
    }
  }
   else if (!$equals_0(this.name_0, other.name_0)) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_37(){
  var result;
  result = 31 + (!this.id_0?0:this.id_0.value_0);
  result = 31 * result + (this.name_0 == null?0:getHashCode_0(this.name_0));
  return result;
}
;
_.toString$ = function toString_81(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'Terms [id=';
  $append_2(builder, this.id_0);
  builder.string += ', name=';
  $append_3(builder, this.name_0);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_Terms_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'Terms', 118);
function $setAccountTypeId(this$static, accountTypeId){
  this$static.accountTypeId = accountTypeId;
}

function $setId_4(this$static, id_0){
  this$static.id_0 = id_0;
}

function User(){
}

defineClass(113, 656, {113:1}, User);
_.equals$ = function equals_33(obj){
  var other;
  if (this === obj) {
    return true;
  }
  if (obj == null) {
    return false;
  }
  if (!instanceOf(obj, 113)) {
    return false;
  }
  other = dynamicCast(obj, 113);
  if (!this.accountTypeId) {
    if (other.accountTypeId) {
      return false;
    }
  }
   else if (!$equals(this.accountTypeId, other.accountTypeId)) {
    return false;
  }
  if (this.encryptedPassword == null) {
    if (other.encryptedPassword != null) {
      return false;
    }
  }
   else if (!$equals_0(this.encryptedPassword, other.encryptedPassword)) {
    return false;
  }
  if (!this.id_0) {
    if (other.id_0) {
      return false;
    }
  }
   else if (!$equals(this.id_0, other.id_0)) {
    return false;
  }
  return true;
}
;
_.hashCode$ = function hashCode_38(){
  var result;
  result = 961 + (!this.accountTypeId?0:this.accountTypeId.value_0);
  result = 31 * result + (this.encryptedPassword == null?0:getHashCode_0(this.encryptedPassword));
  result = 31 * result;
  result = 31 * result + (!this.id_0?0:this.id_0.value_0);
  result = 31 * result;
  result = 31 * result;
  result = 31 * result;
  return result;
}
;
_.toString$ = function toString_82(){
  var builder;
  builder = new StringBuilder;
  builder.string += 'Users [id=';
  $append_2(builder, this.id_0);
  builder.string += ', accountTypeId=';
  $append_2(builder, this.accountTypeId);
  builder.string += ', facultyId=';
  $append_2(builder, this.facultyId);
  builder.string += ', encryptedPassword=';
  $append_3(builder, this.encryptedPassword);
  builder.string += ', passwordSalt=';
  $append_3(builder, this.passwordSalt);
  builder.string += ', createdAt=';
  $append_2(builder, this.createdAt);
  builder.string += ', updatedAt=';
  $append_2(builder, this.updatedAt);
  builder.string += ', deleted=';
  $append_2(builder, this.deleted);
  builder.string += ']';
  return builder.string;
}
;
var Lorg_dselent_course_1load_1scheduler_client_model_User_2_classLit = createForClass('org.dselent.course_load_scheduler.client.model', 'User', 113);
function $onError(this$static, e){
  this$static.callback.onFailure(e);
}

function $onResponseReceived(this$static, response){
  var e, responseData, responseStatus, responseText, t, statusCode, message;
  try {
    responseStatus = (statusCode = response.xmlHttpRequest.status , statusCode == 1223?204:statusCode);
    responseText = response.xmlHttpRequest.responseText;
    if (responseStatus >= 200 && responseStatus < 300) {
      try {
        responseData = ($clinit_JSONParser() , parse_0(responseText));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 104)) {
          e = $e0;
          throw getInvalidJSONException(responseText, e);
        }
         else 
          throw unwrap_5($e0);
      }
      this$static.callback.onSuccess(responseData);
    }
     else {
      this$static.callback.onFailure((message = $append_3($append_3($append_3($append_3(new StringBuilder_0('Unexpected response from network request: '), variableToString('responseStatus', arrayToString(this$static.failedStatusList))), variableToString('responseText', responseText)), variableToString('url', this$static.requestBuilder.url_0)), variableToString('payload', $toString_0(this$static.requestData))).string , new StatusCodeException(message)));
    }
  }
   catch ($e1) {
    $e1 = wrap($e1);
    if (instanceOf($e1, 11)) {
      t = $e1;
      this$static.callback.onFailure(t);
    }
     else 
      throw unwrap_5($e1);
  }
}

function $send_0(this$static){
  var e, ise, json, empty;
  json = $toString_0(this$static.requestData);
  if (empty = false , json.length < 2 && (empty = true) , empty) {
    ise = new IllegalStateException_0('In ' + this$static.requestBuilder.url_0 + ' request: empty requestData');
    this$static.callback.onFailure(ise);
  }
   else {
    $setRequestData(this$static.requestBuilder, json);
    try {
      $send(this$static.requestBuilder);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 110)) {
        e = $e0;
        this$static.callback.onFailure(e);
      }
       else 
        throw unwrap_5($e0);
    }
  }
}

function NetworkRequest(url_0, callback, requestData){
  var allUrl;
  this.failedStatusList = new ArrayList;
  allUrl = 'http://localhost:8081/course_load_scheduler/' + url_0;
  this.requestBuilder = new RequestBuilder(($clinit_RequestBuilder() , POST), allUrl);
  $setHeader(this.requestBuilder);
  $setTimeoutMillis(this.requestBuilder, DEFAULT_TIMEOUT_SECONDS * 1000);
  $setCallback(this.requestBuilder, this);
  this.callback = callback;
  this.requestData = requestData;
}

defineClass(80, 1, {}, NetworkRequest);
var DEFAULT_TIMEOUT_SECONDS = 20;
var Lorg_dselent_course_1load_1scheduler_client_network_NetworkRequest_2_classLit = createForClass('org.dselent.course_load_scheduler.client.network', 'NetworkRequest', 80);
function $clinit_BasePresenterImpl(){
  $clinit_BasePresenterImpl = emptyMethod;
  user_0 = new User;
}

function BasePresenterImpl(){
  this.eventBusRegistration = new HashMap;
}

defineClass(90, 645, $intern_34);
var user_0;
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_BasePresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'BasePresenterImpl', 90);
function $fillFrequencies(this$static, freqs){
  var box, f, iterator;
  box = this$static.view.frequencyDropdown;
  $selectClear(box.element);
  iterator = new AbstractList$IteratorImpl(freqs);
  while (iterator.i < iterator.this$01_0.size_1()) {
    f = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 151));
    $insertItem_0(box, f.frequency, '' + f.id_0.value_0, -1);
  }
  $setFrequencyDropdown(this$static.view, box);
}

function $go(this$static, container){
  $clear(container);
  $add_1(container, this$static.view);
}

function $returnToViewCourses(this$static){
  $setText_1(this$static.view.courseNameField, '');
  $setText_1(this$static.view.courseNumberField, '');
  $castFireEvent(this$static.eventBus, new LoadViewCoursesEvent(new LoadViewCoursesAction));
}

function $submitNewCourse(this$static){
  var action, evt, fIndex, newCourse;
  fIndex = this$static.view.frequencyDropdown.element.selectedIndex;
  if (fIndex >= 0 && $getPropertyString(this$static.view.courseNameField.element, 'value').length > 0 && $getPropertyString(this$static.view.courseNumberField.element, 'value').length > 0) {
    newCourse = new Courses;
    $setFrequencyID(newCourse, valueOf(__parseAndValidateInt($getValue(this$static.view.frequencyDropdown, fIndex))));
    $setTitle(newCourse, $getPropertyString(this$static.view.courseNameField.element, 'value'));
    $setNumber(newCourse, $getPropertyString(this$static.view.courseNumberField.element, 'value'));
    action = new SendNewCourseAction;
    action.course = newCourse;
    evt = new SendNewCourseEvent(action);
    $castFireEvent(this$static.eventBus, evt);
    $returnToViewCourses(this$static);
  }
   else {
    alert_0('A Frequency must be selected to create a course, and textFields cannot be empty.');
  }
}

function AddCoursePresenterImpl(parentPresenter, view){
  $clinit_BasePresenterImpl();
  BasePresenterImpl.call(this);
  this.view = view;
  this.parentPresenter = parentPresenter;
  view.presenter = this;
}

defineClass(285, 90, {7:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 39:1, 38:1, 40:1, 41:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 54:1, 57:1, 55:1, 56:1, 58:1, 59:1, 60:1, 61:1, 62:1, 63:1, 619:1}, AddCoursePresenterImpl);
_.onLoadAddCourse = function onLoadAddCourse_0(evt){
  $castFireEvent(this.eventBus, new SendGetFrequenciesEvent(new SendGetFrequenciesAction(user_0)));
  $go(this, this.parentPresenter.view.mainPanel);
}
;
_.onReceiveGetFrequencies = function onReceiveGetFrequencies_0(evt){
  $fillFrequencies(this, evt.action.freqList);
}
;
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_AddCoursePresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'AddCoursePresenterImpl', 285);
function $addSection(this$static){
  var end, newSection, start_0, term, type_0, monday, tuesday, wednesday, thursday, friday, days;
  term = this$static.view.termComboBox;
  type_0 = this$static.view.sectionTypeComboBox;
  start_0 = this$static.view.sectionStartTimeComboBox;
  end = this$static.view.sectionEndTimeComboBox;
  newSection = new CourseSections;
  $setTermsName(newSection, $getItemText(term, term.element.selectedIndex));
  $setSectionType(newSection, $getItemText(type_0, type_0.element.selectedIndex));
  $setStartTime(newSection, valueOf_1($getItemText(start_0, start_0.element.selectedIndex)));
  $setEndTime(newSection, valueOf_1($getItemText(end, end.element.selectedIndex)));
  $setDays(newSection, (monday = this$static.view.mondayCheckBox , tuesday = this$static.view.tuesdayCheckBox , wednesday = this$static.view.wednesdayCheckBox , thursday = this$static.view.thursdayCheckBox , friday = this$static.view.fridayCheckBox , days = new StringBuilder , (monday.attached?($clinit_Boolean() , $isChecked(monday.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(monday.inputElem)?TRUE_0:FALSE_0)).value_0 && $append_3(days, $getTextOrHtml(monday.directionalTextHelper)) , (tuesday.attached?($clinit_Boolean() , $isChecked(tuesday.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(tuesday.inputElem)?TRUE_0:FALSE_0)).value_0 && $append_3(days, $getTextOrHtml(tuesday.directionalTextHelper)) , (wednesday.attached?($clinit_Boolean() , $isChecked(wednesday.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(wednesday.inputElem)?TRUE_0:FALSE_0)).value_0 && $append_3(days, $getTextOrHtml(wednesday.directionalTextHelper)) , (thursday.attached?($clinit_Boolean() , $isChecked(thursday.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(thursday.inputElem)?TRUE_0:FALSE_0)).value_0 && $append_3(days, $getTextOrHtml(thursday.directionalTextHelper)) , (friday.attached?($clinit_Boolean() , $isChecked(friday.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(friday.inputElem)?TRUE_0:FALSE_0)).value_0 && $append_3(days, $getTextOrHtml(friday.directionalTextHelper)) , days.string));
  $setCoursesNumber_0(newSection, this$static.fromCourse.coursesNumber);
  $setCoursesTitle_0(newSection, this$static.fromCourse.coursesTitle);
  $setCoursesId_0(newSection, this$static.fromCourse.coursesId);
  $setDaysId(newSection, valueOf(1));
  $setTermsId(newSection, valueOf(__parseAndValidateInt($getValue(term, term.element.selectedIndex))));
  $setSectionTypeId(newSection, valueOf(__parseAndValidateInt($getValue(type_0, type_0.element.selectedIndex))));
  $setStartTimeId(newSection, valueOf(__parseAndValidateInt($getValue(start_0, start_0.element.selectedIndex))));
  $setEndTimeId(newSection, valueOf(__parseAndValidateInt($getValue(end, end.element.selectedIndex))));
  $setSectionsName(newSection, $getPropertyString(this$static.view.generatedNameTextBox.element, 'value'));
  $castFireEvent(this$static.eventBus, new SendNewSectionEvent(new SendNewSectionAction(newSection)));
  $castFireEvent(this$static.eventBus, new LoadEditCourseEvent(new LoadEditCourseAction(this$static.course)));
}

function $cancelAddSection(this$static){
  $castFireEvent(this$static.eventBus, new LoadEditCourseEvent(new LoadEditCourseAction(this$static.course)));
  alert_0('The section was not created');
}

function $fillSectionEnd(this$static, endTimeList){
  var end, endTime, iterator;
  end = this$static.view.sectionEndTimeComboBox;
  $selectClear(end.element);
  iterator = new AbstractList$IteratorImpl(endTimeList);
  while (iterator.i < iterator.this$01_0.size_1()) {
    endTime = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 128));
    $insertItem(end, $toString_1(endTime.time));
  }
  $setSectionEndTimeComboBox(this$static.view, end);
}

function $fillSectionStart(this$static, startTimeList){
  var iterator, start_0, startTime;
  start_0 = this$static.view.sectionStartTimeComboBox;
  $selectClear(start_0.element);
  iterator = new AbstractList$IteratorImpl(startTimeList);
  while (iterator.i < iterator.this$01_0.size_1()) {
    startTime = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 127));
    $insertItem(start_0, $toString_1(startTime.time));
  }
  $setSectionStartTimeComboBox(this$static.view, start_0);
}

function $fillSectionTerms(this$static, termsList){
  var iterator, term, terms;
  term = this$static.view.termComboBox;
  $selectClear(term.element);
  iterator = new AbstractList$IteratorImpl(termsList);
  while (iterator.i < iterator.this$01_0.size_1()) {
    terms = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 118));
    $insertItem(term, terms.name_0);
  }
  $setTermComboBox(this$static.view, term);
}

function $fillSectionTypes(this$static, typesList){
  var iterator, sectionType, type_0;
  type_0 = this$static.view.sectionTypeComboBox;
  $selectClear(type_0.element);
  iterator = new AbstractList$IteratorImpl(typesList);
  while (iterator.i < iterator.this$01_0.size_1()) {
    sectionType = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 152));
    $insertItem(type_0, sectionType.type_0);
  }
  $setSectionTypeComboBox(this$static.view, type_0);
}

function $go_0(this$static, container){
  $clear(container);
  $add_1(container, this$static.view);
}

function AddSectionPresenterImpl(parentPresenter, view){
  $clinit_BasePresenterImpl();
  BasePresenterImpl.call(this);
  this.fromCourse = new CourseSections;
  this.course = new CourseInfo;
  this.view = view;
  this.parentPresenter = parentPresenter;
  view.presenter = this;
}

defineClass(286, 90, {7:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 39:1, 38:1, 40:1, 41:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 54:1, 57:1, 55:1, 56:1, 58:1, 59:1, 60:1, 61:1, 62:1, 63:1, 620:1}, AddSectionPresenterImpl);
_.onLoadAddSection = function onLoadAddSection_0(evt){
  $setCoursesNumber_0(this.fromCourse, evt.action.courseInfo.coursesNumber);
  $setCoursesTitle_0(this.fromCourse, evt.action.courseInfo.coursesTitle);
  this.course = evt.action.courseInfo;
  $castFireEvent(this.eventBus, new SendGetTermsEvent(new SendGetTermsAction));
  $castFireEvent(this.eventBus, new SendGetSectionTypesEvent(new SendGetSectionTypesAction));
  $castFireEvent(this.eventBus, new SendGetStartTimesEvent(new SendGetStartTimesAction(user_0)));
  $castFireEvent(this.eventBus, new SendGetEndTimesEvent(new SendGetEndTimesAction(user_0)));
  $go_0(this, this.parentPresenter.view.mainPanel);
}
;
_.onReceiveEndTimes = function onReceiveEndTimes_0(evt){
  $fillSectionEnd(this, evt.action.endTimes);
}
;
_.onReceiveGetSectionTypes = function onReceiveGetSectionTypes_0(evt){
  $fillSectionTypes(this, evt.action.typeList);
}
;
_.onReceiveGetTerms = function onReceiveGetTerms_0(evt){
  $fillSectionTerms(this, evt.action.termsList);
}
;
_.onReceiveStartTimes = function onReceiveStartTimes_0(evt){
  $fillSectionStart(this, evt.action.startTimes);
}
;
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_AddSectionPresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'AddSectionPresenterImpl', 286);
function $fillCourseInfo(this$static){
  var endTimeInfo, endTimeSelect, endTimesIterator, facultyInfo, instructorSelect, rosterIterator, startTimeInfo, startTimeSelect, startTimesIterator;
  startTimeSelect = this$static.view.startTimeSelect;
  $selectClear(startTimeSelect.element);
  startTimesIterator = new AbstractList$IteratorImpl(this$static.globalStartTimes);
  while (startTimesIterator.i < startTimesIterator.this$01_0.size_1()) {
    startTimeInfo = (checkCriticalElement(startTimesIterator.i < startTimesIterator.this$01_0.size_1()) , dynamicCast(startTimesIterator.this$01_0.get_0(startTimesIterator.last = startTimesIterator.i++), 127));
    $insertItem(startTimeSelect, $toString_1(startTimeInfo.time));
  }
  endTimeSelect = this$static.view.endTimeSelect;
  $selectClear(endTimeSelect.element);
  endTimesIterator = new AbstractList$IteratorImpl(this$static.globalEndTimes);
  while (endTimesIterator.i < endTimesIterator.this$01_0.size_1()) {
    endTimeInfo = (checkCriticalElement(endTimesIterator.i < endTimesIterator.this$01_0.size_1()) , dynamicCast(endTimesIterator.this$01_0.get_0(endTimesIterator.last = endTimesIterator.i++), 128));
    $insertItem(endTimeSelect, $toString_1(endTimeInfo.time));
  }
  instructorSelect = this$static.view.instructorSelect;
  $selectClear(instructorSelect.element);
  rosterIterator = new AbstractList$IteratorImpl(this$static.globalRoster);
  while (rosterIterator.i < rosterIterator.this$01_0.size_1()) {
    facultyInfo = (checkCriticalElement(rosterIterator.i < rosterIterator.this$01_0.size_1()) , dynamicCast(rosterIterator.this$01_0.get_0(rosterIterator.last = rosterIterator.i++), 122));
    $insertItem(instructorSelect, facultyInfo.firstName + ' ' + facultyInfo.lastName);
  }
}

function $fillInfo(this$static){
  var facultyInfo, rosterIterator, termInfo, termSelect, termsIterator, viewSelect;
  viewSelect = this$static.view.viewSelect;
  $selectClear(viewSelect.element);
  rosterIterator = new AbstractList$IteratorImpl(this$static.globalRoster);
  while (rosterIterator.i < rosterIterator.this$01_0.size_1()) {
    facultyInfo = (checkCriticalElement(rosterIterator.i < rosterIterator.this$01_0.size_1()) , dynamicCast(rosterIterator.this$01_0.get_0(rosterIterator.last = rosterIterator.i++), 122));
    $insertItem(viewSelect, facultyInfo.firstName + ' ' + facultyInfo.lastName);
  }
  termSelect = this$static.view.termSelect;
  $selectClear(termSelect.element);
  termsIterator = new AbstractList$IteratorImpl(this$static.globalTerms);
  while (termsIterator.i < termsIterator.this$01_0.size_1()) {
    termInfo = (checkCriticalElement(termsIterator.i < termsIterator.this$01_0.size_1()) , dynamicCast(termsIterator.this$01_0.get_0(termsIterator.last = termsIterator.i++), 118));
    $insertItem(termSelect, termInfo.name_0);
  }
}

function $getRequests(this$static){
  var request1, request2, request3;
  this$static.globalRequests = new ArrayList;
  request1 = new RequestTables;
  request1.coursesNumber = 'CS3733';
  request1.coursesTitle = 'Software Engineering';
  request1.startTime = null;
  request1.requestOtherMessage = 'Please give me this class in this term';
  request1.requestStatus = 'Approved';
  $setRequestsId(request1, valueOf(1));
  $setRequestsUserId(request1, valueOf(1));
  request1.endTime = null;
  request1.termsName = 'A';
  request2 = new RequestTables;
  request2.coursesNumber = null;
  request2.coursesTitle = null;
  $setStartTime_0(request2, new Time_0({l:3039872, m:7, h:0}));
  request2.requestOtherMessage = 'Please give me a class between these times in this term';
  request2.requestStatus = 'Rejected';
  $setRequestsId(request2, valueOf(2));
  $setRequestsUserId(request2, valueOf(3));
  $setEndTime_0(request2, new Time_0({l:1845568, m:8, h:0}));
  request2.termsName = 'B';
  request3 = new RequestTables;
  request3.coursesNumber = 'ES3011';
  request3.coursesTitle = 'Controls Engineering';
  $setStartTime_0(request3, new Time_0({l:2445568, m:8, h:0}));
  request3.requestOtherMessage = 'Give me this class at this time in this term';
  request3.requestStatus = 'Unresolved';
  $setRequestsId(request3, valueOf(3));
  $setRequestsUserId(request3, valueOf(2));
  $setEndTime_0(request3, new Time_0({l:1251264, m:9, h:0}));
  request3.termsName = 'D';
  $add_9(this$static.globalRequests, request1);
  $add_9(this$static.globalRequests, request2);
  $add_9(this$static.globalRequests, request3);
}

function $getSections(this$static){
  var facultyId, facultyInfo, inst_ind, instructor, rosterIterator, term, termInfo, termsId, termsIterator;
  facultyId = 1;
  inst_ind = this$static.view.viewSelect.element.selectedIndex;
  instructor = $getItemText(this$static.view.viewSelect, inst_ind);
  rosterIterator = new AbstractList$IteratorImpl(this$static.globalRoster);
  while (rosterIterator.i < rosterIterator.this$01_0.size_1()) {
    facultyInfo = (checkCriticalElement(rosterIterator.i < rosterIterator.this$01_0.size_1()) , dynamicCast(rosterIterator.this$01_0.get_0(rosterIterator.last = rosterIterator.i++), 122));
    if ($equals_0(facultyInfo.firstName + ' ' + facultyInfo.lastName, instructor)) {
      facultyId = facultyInfo.id_0.value_0;
      break;
    }
  }
  termsId = 1;
  term = $getItemText(this$static.view.termSelect, this$static.view.termSelect.element.selectedIndex);
  termsIterator = new AbstractList$IteratorImpl(this$static.globalTerms);
  while (termsIterator.i < termsIterator.this$01_0.size_1()) {
    termInfo = (checkCriticalElement(termsIterator.i < termsIterator.this$01_0.size_1()) , dynamicCast(termsIterator.this$01_0.get_0(termsIterator.last = termsIterator.i++), 118));
    if ($equals_0(termInfo.name_0, term)) {
      termsId = termInfo.id_0.value_0;
      break;
    }
  }
  $castFireEvent(this$static.eventBus, new SendGetOneFacultySectionInfoEvent(new SendGetOneFacultySectionInfoAction_0(valueOf(facultyId), valueOf(termsId))));
}

function $go_1(this$static, container){
  $clear(container);
  $add_1(container, this$static.view);
}

function $loadAccountPage(this$static){
  $castFireEvent(this$static.eventBus, new ManageUserPageEvent(new ManageUserPageAction_0(this$static.user)));
}

function $loadHomePage(this$static){
  $castFireEvent(this$static.eventBus, new LoadHomePageEvent(new LoadHomePageAction_0(this$static.user)));
}

function $loadSchedulePage(this$static){
  $castFireEvent(this$static.eventBus, new LoadScheduleEvent(new LoadScheduleAction_0(this$static.user)));
}

function $loadViewCoursesPage(this$static){
  $castFireEvent(this$static.eventBus, new LoadViewCoursesEvent(new LoadViewCoursesAction_0(this$static.user)));
}

function $updateUi(this$static){
  !!this$static.globalStartTimes && !!this$static.globalEndTimes && !!this$static.globalRoster && $fillCourseInfo(this$static);
  if (!!this$static.globalTerms && !!this$static.globalRoster) {
    $fillInfo(this$static);
    $getSections(this$static);
  }
}

function AdminCalendarPresenterImpl(parentPresenter, view){
  $clinit_BasePresenterImpl();
  BasePresenterImpl.call(this);
  this.user = new User;
  $setAccountTypeId(this.user, valueOf(2));
  $setId_4(this.user, valueOf(1));
  this.user.encryptedPassword = 'derp';
  this.view = view;
  this.parentPresenter = parentPresenter;
  view.presenter = this;
  this.globalStartTimes = null;
  this.globalEndTimes = null;
  this.globalRoster = null;
  this.globalTerms = null;
  this.globalRequests = null;
}

defineClass(283, 90, {7:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 39:1, 38:1, 40:1, 41:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 54:1, 57:1, 55:1, 56:1, 58:1, 59:1, 60:1, 61:1, 62:1, 63:1, 178:1}, AdminCalendarPresenterImpl);
_.onLoadSchedulePage = function onLoadSchedulePage_0(evt){
  if (this.user.accountTypeId.value_0 == 2) {
    $castFireEvent(this.eventBus, new SendGetStartTimesEvent(new SendGetStartTimesAction(this.user)));
    $castFireEvent(this.eventBus, new SendGetEndTimesEvent(new SendGetEndTimesAction(this.user)));
    $castFireEvent(this.eventBus, new SendGetFacultyEvent);
    $castFireEvent(this.eventBus, new SendGetTermsEvent(new SendGetTermsAction));
    $getRequests(this);
    $go_1(this, this.parentPresenter.view.mainPanel);
  }
}
;
_.onReceiveEndTimes = function onReceiveEndTimes_1(evt){
  this.globalEndTimes = evt.action.endTimes;
  $updateUi(this);
}
;
_.onReceiveGetFaculty = function onReceiveGetFaculty_0(evt){
  this.globalRoster = evt.action.list;
  $updateUi(this);
}
;
_.onReceiveGetOneFacultySectionInfo = function onReceiveGetOneFacultySectionInfo_0(evt){
  var body_0, sectionInfo, sectionIterator, title_0;
  $clear(this.view.tablePanel);
  sectionIterator = new AbstractList$IteratorImpl(evt.action.list);
  while (sectionIterator.i < sectionIterator.this$01_0.size_1()) {
    sectionInfo = (checkCriticalElement(sectionIterator.i < sectionIterator.this$01_0.size_1()) , dynamicCast(sectionIterator.this$01_0.get_0(sectionIterator.last = sectionIterator.i++), 150));
    title_0 = sectionInfo.coursesNumber + ' - ' + sectionInfo.sectionsName;
    body_0 = new VerticalPanel;
    $add_7(body_0, new Label_0('Title: ' + sectionInfo.coursesTitle));
    $add_7(body_0, new Label_0('Start Time: ' + sectionInfo.startTime));
    $add_7(body_0, new Label_0('End Time: ' + sectionInfo.endTime));
    $add_7(body_0, new Label_0('Days: ' + sectionInfo.days));
    $add_7(body_0, new Label_0('Section Type: ' + sectionInfo.sectionType));
    $add_6(this.view.tablePanel, body_0, title_0);
  }
}
;
_.onReceiveGetTerms = function onReceiveGetTerms_1(evt){
  this.globalTerms = evt.action.termsList;
  $updateUi(this);
}
;
_.onReceiveStartTimes = function onReceiveStartTimes_1(evt){
  this.globalStartTimes = evt.action.startTimes;
  $updateUi(this);
}
;
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_AdminCalendarPresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'AdminCalendarPresenterImpl', 283);
function $checkEmptyString(string){
  if (string == null || $equals_0(string, '')) {
    throw new EmptyStringException;
  }
}

function $createAccount(this$static){
  var confirmPassword, email, facultyType, firstName, ftBox, ile, invalidReasonList, lastName, password, validEmail, validFirstName, validLastName, validPassword, scaa, scae;
  if (!this$static.createAccountClickInProgress) {
    this$static.createAccountClickInProgress = true;
    $setEnabled(this$static.view.submitButton, false);
    $showLoadScreen(this$static.parentPresenter);
    firstName = $getPropertyString(this$static.view.firstNameTextBox.element, 'value');
    lastName = $getPropertyString(this$static.view.lastNameTextBox.element, 'value');
    email = $getPropertyString(this$static.view.emailTextBox.element, 'value');
    ftBox = this$static.view.facultyTypeComboBox;
    facultyType = $getValue(ftBox, ftBox.element.selectedIndex);
    password = $getPropertyString(this$static.view.passwordTextBox.element, 'value');
    confirmPassword = $getPropertyString(this$static.view.confirmPasswordTextBox.element, 'value');
    validFirstName = true;
    validLastName = true;
    validEmail = true;
    validPassword = true;
    invalidReasonList = new ArrayList;
    try {
      $checkEmptyString(firstName);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 108)) {
        setCheck(invalidReasonList.array, invalidReasonList.array.length, 'Your first name cannot be empty.');
        validFirstName = false;
      }
       else 
        throw unwrap_5($e0);
    }
    try {
      $checkEmptyString(lastName);
    }
     catch ($e1) {
      $e1 = wrap($e1);
      if (instanceOf($e1, 108)) {
        setCheck(invalidReasonList.array, invalidReasonList.array.length, 'Your last name cannot be empty.');
        validLastName = false;
      }
       else 
        throw unwrap_5($e1);
    }
    try {
      $checkEmptyString(email);
    }
     catch ($e2) {
      $e2 = wrap($e2);
      if (instanceOf($e2, 108)) {
        setCheck(invalidReasonList.array, invalidReasonList.array.length, 'Your email cannot be empty.');
        validEmail = false;
      }
       else 
        throw unwrap_5($e2);
    }
    try {
      $validatePassword(password, confirmPassword);
    }
     catch ($e3) {
      $e3 = wrap($e3);
      if (instanceOf($e3, 108)) {
        setCheck(invalidReasonList.array, invalidReasonList.array.length, 'Your password cannot be empty.');
        validPassword = false;
      }
       else if (instanceOf($e3, 226)) {
        setCheck(invalidReasonList.array, invalidReasonList.array.length, 'Your password must be longer than 8 characters');
        validPassword = false;
      }
       else if (instanceOf($e3, 227)) {
        setCheck(invalidReasonList.array, invalidReasonList.array.length, 'Passwords must match');
        validPassword = false;
      }
       else 
        throw unwrap_5($e3);
    }
    if (validFirstName && validLastName && validEmail && validPassword) {
      scaa = new SendCreateAccountAction(facultyType, email, password);
      scae = new SendCreateAccountEvent(scaa);
      $castFireEvent(this$static.eventBus, scae);
    }
     else {
      new InvalidAccountCreationAction_0(invalidReasonList);
      ile = new InvalidAccountCreationEvent;
      $castFireEvent(this$static.eventBus, ile);
    }
  }
}

function $go_2(this$static, container){
  $clear(container);
  $add_1(container, this$static.view);
}

function $populateComboBox(this$static){
  var box, iterator, type_0, types, admin, user, ret;
  box = this$static.view.facultyTypeComboBox;
  $selectClear(box.element);
  types = (admin = new FacultyType , $setId_1(admin, valueOf(0)) , admin.type_0 = 'user' , user = new FacultyType , $setId_1(user, valueOf(1)) , user.type_0 = 'admin' , ret = new ArrayList , setCheck(ret.array, ret.array.length, admin) , setCheck(ret.array, ret.array.length, user) , ret);
  iterator = new AbstractList$IteratorImpl(types);
  while (iterator.i < iterator.this$01_0.size_1()) {
    type_0 = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 168));
    $insertItem_0(box, type_0.type_0, '' + type_0.id_0.value_0, -1);
  }
  $setFacultyTypeComboBox(this$static.view, box);
}

function $validatePassword(password, confirmPassword){
  $checkEmptyString(password);
  if (password.length < 8) {
    throw new PasswordLengthException;
  }
  if (!$equals_0(password, confirmPassword)) {
    throw new PasswordMatchException;
  }
}

function CreateAccountPresenterImpl(parentPresenter, view){
  $clinit_BasePresenterImpl();
  BasePresenterImpl.call(this);
  this.view = view;
  this.parentPresenter = parentPresenter;
  view.presenter = this;
  this.createAccountClickInProgress = false;
}

defineClass(288, 90, {7:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 39:1, 38:1, 40:1, 41:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 54:1, 57:1, 55:1, 56:1, 58:1, 59:1, 60:1, 61:1, 62:1, 63:1, 668:1}, CreateAccountPresenterImpl);
_.onLoadCreateAccount = function onLoadCreateAccount_0(evt){
  $populateComboBox(this);
  $go_2(this, this.parentPresenter.view.mainPanel);
}
;
_.createAccountClickInProgress = false;
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_CreateAccountPresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'CreateAccountPresenterImpl', 288);
function $fillFrequencies_0(this$static, freqs, startingFrequencyValue){
  var box, f, index_0, iterator, startingFrequencyIndex;
  startingFrequencyIndex = -1;
  box = this$static.view.frequencyDropdown;
  $selectClear(box.element);
  iterator = new AbstractList$IteratorImpl(freqs);
  index_0 = 0;
  while (iterator.i < iterator.this$01_0.size_1()) {
    f = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 151));
    $insertItem_0(box, f.frequency, '' + f.id_0.value_0, -1);
    f.id_0.value_0 == startingFrequencyValue && (startingFrequencyIndex = index_0);
    ++index_0;
  }
  return startingFrequencyIndex;
}

function $fillSections(this$static){
  var iterator, label_0, panel, s;
  panel = this$static.view.sectionList;
  $clear(panel);
  iterator = new AbstractList$IteratorImpl(this$static.sections);
  while (iterator.i < iterator.this$01_0.size_1()) {
    s = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 89));
    label_0 = new Label_0(s.sectionType);
    $add_6(panel, label_0, s.sectionsName);
  }
}

function $go_3(this$static, container){
  $clear(container);
  $add_1(container, this$static.view);
}

function $loadAddSectionPage(this$static){
  var action, evt;
  action = new LoadAddSectionAction;
  $setCourseInfo(action, this$static.course);
  evt = new LoadAddSectionEvent(action);
  $castFireEvent(this$static.eventBus, evt);
}

function $loadEditSectionPage(this$static){
  var action, index_0, section, si;
  index_0 = this$static.view.sectionList.visibleStack;
  if (index_0 >= 0) {
    action = new LoadEditSectionAction;
    $setCourseInfo_0(action, this$static.course);
    si = new AbstractList$ListIteratorImpl(this$static.sections, index_0);
    section = (checkCriticalElement(si.i < si.this$01_0.size_1()) , dynamicCast(si.this$01_0.get_0(si.last = si.i++), 89));
    action.sectionInfo = section;
    $castFireEvent(this$static.eventBus, new LoadEditSectionEvent(action));
  }
}

function $removeSection(this$static){
  var index_0, s, si;
  index_0 = this$static.view.sectionList.visibleStack;
  if (index_0 >= 0) {
    si = new AbstractList$ListIteratorImpl(this$static.sections, index_0);
    s = (checkCriticalElement(si.i < si.this$01_0.size_1()) , dynamicCast(si.this$01_0.get_0(si.last = si.i++), 89));
    $castFireEvent(this$static.eventBus, new SendRemoveSectionEvent(new SendRemoveSectionAction(s.sectionId.value_0)));
  }
}

function $returnToViewCourses_0(this$static){
  var evt;
  evt = new LoadViewCoursesEvent(new LoadViewCoursesAction_0(user_0));
  $castFireEvent(this$static.eventBus, evt);
}

function $submitCourseEdit(this$static){
  var editCourse, fIndex;
  fIndex = this$static.view.frequencyDropdown.element.selectedIndex;
  if (fIndex >= 0 && $getPropertyString(this$static.view.courseNameField.element, 'value').length > 0 && $getPropertyString(this$static.view.courseNumberField.element, 'value').length > 0) {
    editCourse = new Courses;
    $setFrequencyID(editCourse, valueOf(__parseAndValidateInt($getValue(this$static.view.frequencyDropdown, fIndex))));
    $setTitle(editCourse, $getPropertyString(this$static.view.courseNameField.element, 'value'));
    $setNumber(editCourse, $getPropertyString(this$static.view.courseNumberField.element, 'value'));
    $setId(editCourse, this$static.course.coursesId);
    $castFireEvent(this$static.eventBus, new SendEditCourseEvent(new SendEditCourseAction(editCourse)));
    return true;
  }
   else {
    alert_0('A Freqeuncy must be selected to edit a course, and no text fields can be empty.');
    return false;
  }
}

function EditCoursePresenterImpl(parentPresenter, view){
  $clinit_BasePresenterImpl();
  BasePresenterImpl.call(this);
  this.sections = new ArrayList;
  this.view = view;
  this.parentPresenter = parentPresenter;
  view.presenter = this;
}

defineClass(284, 90, {7:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 39:1, 38:1, 40:1, 41:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 54:1, 57:1, 55:1, 56:1, 58:1, 59:1, 60:1, 61:1, 62:1, 63:1, 179:1}, EditCoursePresenterImpl);
_.onLoadEditCoursePage = function onLoadEditCoursePage_0(evt){
  this.course = evt.action.courseInfo;
  if (this.course) {
    $castFireEvent(this.eventBus, new SendGetFrequenciesEvent(new SendGetFrequenciesAction(user_0)));
    $castFireEvent(this.eventBus, new SendGetSectionsEvent(new SendGetSectionsAction(this.course.coursesId)));
    $setText_1(this.view.courseNameField, this.course.coursesTitle);
    $setText_1(this.view.courseNumberField, this.course.coursesNumber);
    $go_3(this, this.parentPresenter.view.mainPanel);
  }
   else {
    alert_0('A course must be selected to edit it.');
  }
}
;
_.onReceiveGetFrequencies = function onReceiveGetFrequencies_1(evt){
  var index_0;
  index_0 = $fillFrequencies_0(this, evt.action.freqList, this.course.frequencyId.value_0);
  $setSelectedIndex_0(this.view.frequencyDropdown, index_0);
}
;
_.onReceiveGetSections = function onReceiveGetSections_0(evt){
  this.sections = evt.action.sectionList;
  $fillSections(this);
}
;
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_EditCoursePresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'EditCoursePresenterImpl', 284);
function $cancelEditSection(this$static){
  $castFireEvent(this$static.eventBus, new LoadEditCourseEvent(new LoadEditCourseAction(this$static.course)));
  alert_0('The section was not edited');
}

function $editSection(this$static){
  var end, newSection, start_0, term, type_0, monday, tuesday, wednesday, thursday, friday, days;
  term = this$static.view.termComboBox;
  type_0 = this$static.view.sectionTypeComboBox;
  start_0 = this$static.view.sectionStartTimeComboBox;
  end = this$static.view.sectionEndTimeComboBox;
  newSection = new CourseSections;
  $setTermsName(newSection, $getItemText(term, term.element.selectedIndex));
  $setSectionType(newSection, $getItemText(type_0, type_0.element.selectedIndex));
  $setStartTime(newSection, valueOf_1($getItemText(start_0, start_0.element.selectedIndex)));
  $setEndTime(newSection, valueOf_1($getItemText(end, end.element.selectedIndex)));
  $setDays(newSection, (monday = this$static.view.mondayCheckBox , tuesday = this$static.view.tuesdayCheckBox , wednesday = this$static.view.wednesdayCheckBox , thursday = this$static.view.thursdayCheckBox , friday = this$static.view.fridayCheckBox , days = new StringBuilder , (monday.attached?($clinit_Boolean() , $isChecked(monday.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(monday.inputElem)?TRUE_0:FALSE_0)).value_0 && $append_3(days, $getTextOrHtml(monday.directionalTextHelper)) , (tuesday.attached?($clinit_Boolean() , $isChecked(tuesday.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(tuesday.inputElem)?TRUE_0:FALSE_0)).value_0 && $append_3(days, $getTextOrHtml(tuesday.directionalTextHelper)) , (wednesday.attached?($clinit_Boolean() , $isChecked(wednesday.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(wednesday.inputElem)?TRUE_0:FALSE_0)).value_0 && $append_3(days, $getTextOrHtml(wednesday.directionalTextHelper)) , (thursday.attached?($clinit_Boolean() , $isChecked(thursday.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(thursday.inputElem)?TRUE_0:FALSE_0)).value_0 && $append_3(days, $getTextOrHtml(thursday.directionalTextHelper)) , (friday.attached?($clinit_Boolean() , $isChecked(friday.inputElem)?TRUE_0:FALSE_0):($clinit_Boolean() , $isDefaultChecked(friday.inputElem)?TRUE_0:FALSE_0)).value_0 && $append_3(days, $getTextOrHtml(friday.directionalTextHelper)) , days.string));
  $setCoursesNumber_0(newSection, this$static.oldSection.coursesNumber);
  $setCoursesTitle_0(newSection, this$static.oldSection.coursesTitle);
  $setSectionId(newSection, this$static.oldSection.sectionId);
  $setCoursesId_0(newSection, this$static.oldSection.coursesId);
  $setDaysId(newSection, this$static.oldSection.daysId);
  $setTermsId(newSection, valueOf(__parseAndValidateInt($getValue(term, term.element.selectedIndex))));
  $setSectionTypeId(newSection, valueOf(__parseAndValidateInt($getValue(type_0, type_0.element.selectedIndex))));
  $setStartTimeId(newSection, valueOf(__parseAndValidateInt($getValue(start_0, start_0.element.selectedIndex))));
  $setEndTimeId(newSection, valueOf(__parseAndValidateInt($getValue(end, end.element.selectedIndex))));
  $setSectionsName(newSection, this$static.oldSection.sectionsName);
  alert_0('ns: ' + newSection);
  $castFireEvent(this$static.eventBus, new SendEditSectionEvent(new SendEditSectionAction(newSection)));
  $castFireEvent(this$static.eventBus, new LoadEditCourseEvent(new LoadEditCourseAction(this$static.course)));
}

function $fillSectionEnd_0(this$static, initEndTimeValue, endTimeList){
  var cs, end, index_0, initEndTimeIndex, iterator;
  initEndTimeIndex = -1;
  end = this$static.view.sectionEndTimeComboBox;
  $selectClear(end.element);
  iterator = new AbstractList$IteratorImpl(endTimeList);
  index_0 = 0;
  while (iterator.i < iterator.this$01_0.size_1()) {
    cs = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 128));
    $insertItem_0(end, $toString_1(cs.time), '' + cs.id_0.value_0, -1);
    cs.id_0.value_0 == initEndTimeValue && (initEndTimeIndex = index_0);
    ++index_0;
  }
  return initEndTimeIndex;
}

function $fillSectionStart_0(this$static, initStartTimeValue, startTimeList){
  var cs, index_0, initStartTimeIndex, iterator, start_0;
  initStartTimeIndex = -1;
  start_0 = this$static.view.sectionStartTimeComboBox;
  $selectClear(start_0.element);
  iterator = new AbstractList$IteratorImpl(startTimeList);
  index_0 = 0;
  while (iterator.i < iterator.this$01_0.size_1()) {
    cs = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 127));
    $insertItem_0(start_0, $toString_1(cs.time), '' + cs.id_0.value_0, -1);
    cs.id_0.value_0 == initStartTimeValue && (initStartTimeIndex = index_0);
    ++index_0;
  }
  return initStartTimeIndex;
}

function $fillSectionTerms_0(this$static, initTermValue, termsList){
  var cs, index_0, initTermIndex, iterator, term;
  initTermIndex = -1;
  term = this$static.view.termComboBox;
  $selectClear(term.element);
  iterator = new AbstractList$IteratorImpl(termsList);
  index_0 = 0;
  while (iterator.i < iterator.this$01_0.size_1()) {
    cs = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 118));
    $insertItem_0(term, cs.name_0, '' + cs.id_0.value_0, -1);
    cs.id_0.value_0 == initTermValue && (initTermIndex = index_0);
    ++index_0;
  }
  return initTermIndex;
}

function $fillSectionTypes_0(this$static, initTypeValue, typesList){
  var cs, index_0, initTypeIndex, iterator, type_0;
  initTypeIndex = -1;
  type_0 = this$static.view.sectionTypeComboBox;
  $selectClear(type_0.element);
  iterator = new AbstractList$IteratorImpl(typesList);
  index_0 = 0;
  while (iterator.i < iterator.this$01_0.size_1()) {
    cs = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 152));
    $insertItem_0(type_0, cs.type_0, '' + cs.id_0.value_0, -1);
    cs.id_0.value_0 == initTypeValue && (initTypeIndex = index_0);
    ++index_0;
  }
  return initTypeIndex;
}

function $go_4(this$static, container){
  $clear(container);
  $add_1(container, this$static.view);
}

function EditSectionPresenterImpl(parentPresenter, view){
  $clinit_BasePresenterImpl();
  BasePresenterImpl.call(this);
  this.course = new CourseInfo;
  this.oldSection = new CourseSections;
  this.view = view;
  this.parentPresenter = parentPresenter;
  view.presenter = this;
}

defineClass(287, 90, {7:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 39:1, 38:1, 40:1, 41:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 54:1, 57:1, 55:1, 56:1, 58:1, 59:1, 60:1, 61:1, 62:1, 63:1, 621:1}, EditSectionPresenterImpl);
_.onLoadEditSection = function onLoadEditSection_0(evt){
  var friday, monday, thursday, tuesday, wednesday;
  this.oldSection = evt.action.sectionInfo;
  this.course = evt.action.courseInfo;
  if (this.oldSection) {
    $castFireEvent(this.eventBus, new SendGetTermsEvent(new SendGetTermsAction));
    $castFireEvent(this.eventBus, new SendGetSectionTypesEvent(new SendGetSectionTypesAction));
    $castFireEvent(this.eventBus, new SendGetStartTimesEvent(new SendGetStartTimesAction(user_0)));
    $castFireEvent(this.eventBus, new SendGetEndTimesEvent(new SendGetEndTimesAction(user_0)));
    monday = this.view.mondayCheckBox;
    tuesday = this.view.tuesdayCheckBox;
    wednesday = this.view.wednesdayCheckBox;
    thursday = this.view.thursdayCheckBox;
    friday = this.view.fridayCheckBox;
    $setValue_0(monday, ($clinit_Boolean() , $clinit_Boolean() , FALSE_0));
    $setValue_0(tuesday, (null , FALSE_0));
    $setValue_0(wednesday, (null , FALSE_0));
    $setValue_0(thursday, (null , FALSE_0));
    $setValue_0(friday, (null , FALSE_0));
    this.oldSection.days.indexOf('M') != -1 && $setValue_0(monday, (null , TRUE_0));
    this.oldSection.days.indexOf('T') != -1 && $setValue_0(tuesday, (null , TRUE_0));
    this.oldSection.days.indexOf('W') != -1 && $setValue_0(wednesday, (null , TRUE_0));
    this.oldSection.days.indexOf('R') != -1 && $setValue_0(thursday, (null , TRUE_0));
    this.oldSection.days.indexOf('F') != -1 && $setValue_0(friday, (null , TRUE_0));
    $go_4(this, this.parentPresenter.view.mainPanel);
  }
   else {
    alert_0('A section must be selected to edit');
  }
}
;
_.onReceiveEndTimes = function onReceiveEndTimes_2(evt){
  var endIndex;
  endIndex = $fillSectionEnd_0(this, this.oldSection.endTimeId.value_0, evt.action.endTimes);
  $setSelectedIndex_0(this.view.sectionEndTimeComboBox, endIndex);
}
;
_.onReceiveGetSectionTypes = function onReceiveGetSectionTypes_1(evt){
  var typeIndex;
  typeIndex = $fillSectionTypes_0(this, this.oldSection.sectionTypeId.value_0, evt.action.typeList);
  $setSelectedIndex_0(this.view.sectionTypeComboBox, typeIndex);
}
;
_.onReceiveGetTerms = function onReceiveGetTerms_2(evt){
  var termIndex;
  termIndex = $fillSectionTerms_0(this, this.oldSection.termsId.value_0, evt.action.termsList);
  $setSelectedIndex_0(this.view.termComboBox, termIndex);
}
;
_.onReceiveStartTimes = function onReceiveStartTimes_2(evt){
  var startIndex;
  startIndex = $fillSectionStart_0(this, this.oldSection.startTimeId.value_0, evt.action.startTimes);
  $setSelectedIndex_0(this.view.sectionStartTimeComboBox, startIndex);
}
;
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_EditSectionPresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'EditSectionPresenterImpl', 287);
function ExamplePresenterImpl(view){
  $clinit_BasePresenterImpl();
  BasePresenterImpl.call(this);
  view.presenter = this;
}

defineClass(289, 90, $intern_34, ExamplePresenterImpl);
_.onReceiveLogin = function onReceiveLogin_0(evt){
  $hideLoadScreen($get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$IndexPresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(($clinit_Injector() , INSTANCE_3).fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector)));
}
;
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_ExamplePresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'ExamplePresenterImpl', 289);
function $go_5(this$static, container){
  $clear(container);
  $add_1(container, this$static.view);
}

function $populateFacultyList(this$static){
  var courseInfo, courseList, f, f$iterator, facultyVertPanel, hasCourses, name_0, numCourses, s, s$iterator, titlePanel, td;
  alert_0('Ready to populate');
  hasCourses = false;
  facultyVertPanel = this$static.view.facultyListVerticalPanel;
  $clear(facultyVertPanel);
  titlePanel = this$static.view.facultyListTitlePanel;
  $add_7(facultyVertPanel, titlePanel);
  for (s$iterator = new AbstractList$IteratorImpl(sectionListHolder); s$iterator.i < s$iterator.this$01_0.size_1();) {
    s = (checkCriticalElement(s$iterator.i < s$iterator.this$01_0.size_1()) , dynamicCast(s$iterator.this$01_0.get_0(s$iterator.last = s$iterator.i++), 150));
    courseList = new HorizontalPanel;
    for (f$iterator = new AbstractList$IteratorImpl(facultyListHolder); f$iterator.i < f$iterator.this$01_0.size_1();) {
      f = (checkCriticalElement(f$iterator.i < f$iterator.this$01_0.size_1()) , dynamicCast(f$iterator.this$01_0.get_0(f$iterator.last = f$iterator.i++), 122));
      if (s.facultyId == f.id_0) {
        name_0 = new Label_0('' + f.lastName + ', ' + f.firstName);
        $setClassName(name_0.element, 'faculty-name');
        $add_2(courseList, name_0);
        hasCourses = true;
        courseInfo = new Label_0('' + s.coursesTitle + '  ' + s.termsName);
        $add_2(courseList, courseInfo);
      }
    }
    numCourses = new Label_0('(' + (courseList.children_0.size_0 - 1) + ')');
    $setClassName(numCourses.element, 'num-courses-label');
    hasCourses || new Label_0('');
    $checkIndexBoundsForInsertion(courseList, 0);
    td = $createAlignedTd(courseList);
    insertChild(courseList.tableRow, td, 0);
    $insert(courseList, numCourses, td, 0);
    $add_7(facultyVertPanel, courseList);
  }
  alert_0('added vert panel to view');
  $setFacultyListVerticalPanel(this$static.view, facultyVertPanel);
}

function HomePresenterImpl(parentPresenter, view){
  $clinit_BasePresenterImpl();
  BasePresenterImpl.call(this);
  this.view = view;
  this.parentPresenter = parentPresenter;
  view.presenter = this;
}

defineClass(134, 90, {7:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 39:1, 38:1, 40:1, 41:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 54:1, 57:1, 55:1, 56:1, 58:1, 59:1, 60:1, 61:1, 62:1, 63:1, 236:1, 134:1}, HomePresenterImpl);
_.onLoadHomePage = function onLoadHomePage_0(evt){
  $castFireEvent(this.eventBus, new SendGetFacultyEvent);
  $go_5(this, this.parentPresenter.view.mainPanel);
  $hideLoadScreen($get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$IndexPresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(($clinit_Injector() , INSTANCE_3).fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector)));
}
;
_.onReceiveGetFaculty = function onReceiveGetFaculty_1(evt){
  alert_0('Received faculty list');
  facultyListHolder = evt.action.list;
  $castFireEvent(this.eventBus, new SendGetOneFacultySectionInfoEvent(new SendGetOneFacultySectionInfoAction));
}
;
_.onReceiveGetOneFacultySectionInfo = function onReceiveGetOneFacultySectionInfo_1(evt){
  alert_0('Received section info list');
  sectionListHolder = evt.action.list;
  $populateFacultyList(this);
}
;
var facultyListHolder, sectionListHolder;
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_HomePresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'HomePresenterImpl', 134);
function $hideLoadScreen(this$static){
  this$static.view.loadingImage.element.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
  this$static.view.glassLoadingPanel.element.style['visibility'] = 'hidden';
}

function $showLoadScreen(this$static){
  this$static.view.loadingImage.element.style['visibility'] = ($clinit_Style$Visibility() , 'visible');
  this$static.view.glassLoadingPanel.element.style['visibility'] = 'visible';
}

function IndexPresenterImpl(view){
  $clinit_BasePresenterImpl();
  BasePresenterImpl.call(this);
  this.view = view;
  view.presenter = this;
}

defineClass(277, 90, $intern_34, IndexPresenterImpl);
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_IndexPresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'IndexPresenterImpl', 277);
function $checkEmptyString_0(string){
  if (string == null || $equals_0(string, '')) {
    throw new EmptyStringException;
  }
}

function $go_6(this$static, container){
  $clear(container);
  container.add_0(this$static.view);
}

function $login(this$static){
  var ila, ile, invalidReasonList, password, userName, validPassword, validUserName, sla, sle;
  if (!this$static.loginClickInProgress) {
    this$static.loginClickInProgress = true;
    $setEnabled(this$static.view.loginButton, false);
    $showLoadScreen(this$static.parentPresenter);
    userName = $getPropertyString(this$static.view.userNameTextBox.element, 'value');
    password = $getPropertyString(this$static.view.passwordTextBox.element, 'value');
    validUserName = true;
    validPassword = true;
    invalidReasonList = new ArrayList;
    try {
      $checkEmptyString_0(userName);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 108)) {
        setCheck(invalidReasonList.array, invalidReasonList.array.length, 'Your user name cannot be empty.');
        validUserName = false;
      }
       else 
        throw unwrap_5($e0);
    }
    try {
      $checkEmptyString_0(password);
    }
     catch ($e1) {
      $e1 = wrap($e1);
      if (instanceOf($e1, 108)) {
        setCheck(invalidReasonList.array, invalidReasonList.array.length, 'Your password cannot be empty.');
        validPassword = false;
      }
       else 
        throw unwrap_5($e1);
    }
    if (validUserName && validPassword) {
      sla = new SendLoginAction(userName, password);
      sle = new SendLoginEvent(sla);
      $castFireEvent(this$static.eventBus, sle);
    }
     else {
      ila = new InvalidLoginAction_0(invalidReasonList);
      ile = new InvalidLoginEvent(ila);
      $castFireEvent(this$static.eventBus, ile);
    }
  }
}

function LoginPagePresenterImpl(parentPresenter, view){
  $clinit_BasePresenterImpl();
  BasePresenterImpl.call(this);
  this.view = view;
  this.parentPresenter = parentPresenter;
  view.presenter = this;
  this.loginClickInProgress = false;
}

defineClass(206, 90, {7:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 39:1, 38:1, 40:1, 41:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 54:1, 57:1, 55:1, 56:1, 58:1, 59:1, 60:1, 61:1, 62:1, 63:1, 622:1, 206:1}, LoginPagePresenterImpl);
_.onInvalidLogin = function onInvalidLogin_0(evt){
  var i, reasons;
  $hideLoadScreen(this.parentPresenter);
  $setEnabled(this.view.loginButton, true);
  this.loginClickInProgress = false;
  alert_0('An incorrect email or password was entered.');
  reasons = 'Reasons: ';
  for (i = 0; i < dynamicCast(evt.action, 165).reasonList.array.length; i++) {
    reasons += $getReason(dynamicCast(evt.action, 165), i) + '\n';
  }
  alert_0(reasons);
  $setText_1(this.view.passwordTextBox, '');
}
;
_.onReceiveCreateAccount = function onReceiveCreateAccount_0(evt){
  $go_6(this, this.view.loginPagePanel);
  $hideLoadScreen($get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$IndexPresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(($clinit_Injector() , INSTANCE_3).fieldorg_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector)));
}
;
_.onReceiveLogin = function onReceiveLogin_1(evt){
  user_0 = evt.action.model;
  new LoadHomePageAction;
  $castFireEvent(this.eventBus, new LoadHomePageEvent);
}
;
_.loginClickInProgress = false;
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_LoginPagePresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'LoginPagePresenterImpl', 206);
function $go_7(this$static, container){
  $clear(container);
  $add_1(container, this$static.view);
}

function ManageUserPresenterImpl(parentPresenter, view){
  $clinit_BasePresenterImpl();
  BasePresenterImpl.call(this);
  this.view = view;
  this.parentPresenter = parentPresenter;
  view.presenter = this;
}

defineClass(135, 90, {7:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 39:1, 38:1, 40:1, 41:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 54:1, 57:1, 55:1, 56:1, 58:1, 59:1, 60:1, 61:1, 62:1, 63:1, 200:1, 135:1}, ManageUserPresenterImpl);
_.onManageUserPage = function onManageUserPage_0(evt){
  $go_7(this, this.parentPresenter.view.mainPanel);
}
;
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_ManageUserPresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'ManageUserPresenterImpl', 135);
function $fillCourses(this$static){
  var courseInfo, id_0, iterator, panel, vp;
  panel = this$static.view.courseList;
  $clear(panel);
  iterator = new AbstractList$IteratorImpl(this$static.courses);
  while (iterator.i < iterator.this$01_0.size_1()) {
    courseInfo = (checkCriticalElement(iterator.i < iterator.this$01_0.size_1()) , dynamicCast(iterator.this$01_0.get_0(iterator.last = iterator.i++), 107));
    vp = new VerticalPanel;
    $add_7(vp, new Label_0('Required Frequency: ' + courseInfo.frequency));
    id_0 = new Label_0('' + courseInfo.coursesId);
    setVisible(id_0.element, false);
    $add_7(vp, id_0);
    $add_6(panel, vp, courseInfo.coursesNumber + ': ' + courseInfo.coursesTitle);
  }
  $hideLoadScreen(this$static.parentPresenter);
}

function $go_8(this$static, container){
  $clear(container);
  $add_1(container, this$static.view);
}

function $loadEditPage(this$static){
  var action, ci, course, evt, index_0;
  index_0 = this$static.view.courseList.visibleStack;
  if (index_0 >= 0) {
    ci = new AbstractList$ListIteratorImpl(this$static.courses, index_0);
    course = (checkCriticalElement(ci.i < ci.this$01_0.size_1()) , dynamicCast(ci.this$01_0.get_0(ci.last = ci.i++), 107));
    action = new LoadEditCourseAction(course);
    evt = new LoadEditCourseEvent(action);
    $castFireEvent(this$static.eventBus, evt);
  }
}

function $removeCourse(this$static){
  var ci, i, index_0;
  index_0 = this$static.view.courseList.visibleStack;
  if (index_0 >= 0) {
    ci = new AbstractList$ListIteratorImpl(this$static.courses, index_0);
    i = (checkCriticalElement(ci.i < ci.this$01_0.size_1()) , dynamicCast(ci.this$01_0.get_0(ci.last = ci.i++), 107)).coursesId.value_0;
    $castFireEvent(this$static.eventBus, new SendRemoveCourseEvent(new SendRemoveCourseAction(i)));
    $remove_4(this$static.view.courseList, index_0);
  }
}

function ViewCoursesPresenterImpl(parentPresenter, view){
  $clinit_BasePresenterImpl();
  BasePresenterImpl.call(this);
  this.courses = new ArrayList;
  this.view = view;
  this.parentPresenter = parentPresenter;
  view.presenter = this;
}

defineClass(121, 90, {7:1, 19:1, 20:1, 21:1, 22:1, 23:1, 24:1, 25:1, 26:1, 27:1, 28:1, 29:1, 30:1, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 37:1, 39:1, 38:1, 40:1, 41:1, 42:1, 43:1, 44:1, 45:1, 46:1, 47:1, 48:1, 49:1, 50:1, 51:1, 52:1, 53:1, 54:1, 57:1, 55:1, 56:1, 58:1, 59:1, 60:1, 61:1, 62:1, 63:1, 154:1, 121:1}, ViewCoursesPresenterImpl);
_.onLoadViewCourses = function onLoadViewCourses_0(evt){
  var evt_0;
  evt_0 = new SendGetCourseListEvent(new SendGetCourseListAction);
  $castFireEvent(this.eventBus, evt_0);
  $showLoadScreen(this.parentPresenter);
  if (user_0.accountTypeId.value_0 != 2) {
    $setVisible(this.view.removeCourseButton, false);
    $setVisible(this.view.editCourseButton, false);
    $setVisible(this.view.addCourseButton, false);
  }
   else {
    $setVisible(this.view.removeCourseButton, true);
    $setVisible(this.view.editCourseButton, true);
    $setVisible(this.view.addCourseButton, true);
  }
  $go_8(this, this.parentPresenter.view.mainPanel);
  $hideLoadScreen(this.parentPresenter);
}
;
_.onReceiveGetCourseList = function onReceiveGetCourseList_0(evt){
  this.courses = evt.action.courseList;
  $fillCourses(this);
  $hideLoadScreen(this.parentPresenter);
}
;
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_ViewCoursesPresenterImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'ViewCoursesPresenterImpl', 121);
function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$AddCoursePresenterImpl$_annotation$$none$$(this$static){
  var result;
  result = new AddCoursePresenterImpl($get_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter(this$static.injector)), $get_Key$type$org$dselent$course_load_scheduler$client$view$AddCourseView$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view(this$static.injector)));
  $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection(result, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return result;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$AddSectionPresenterImpl$_annotation$$none$$(this$static){
  var result;
  result = new AddSectionPresenterImpl($get_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter(this$static.injector)), $get_Key$type$org$dselent$course_load_scheduler$client$view$AddSectionView$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view(this$static.injector)));
  $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection_(result, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return result;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$AdminCalendarPresenterImpl$_annotation$$none$$(this$static){
  var result;
  result = new AdminCalendarPresenterImpl($get_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter(this$static.injector)), $get_Key$type$org$dselent$course_load_scheduler$client$view$AdminCalendarView$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view(this$static.injector)));
  $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection__(result, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return result;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$CreateAccountPresenterImpl$_annotation$$none$$(this$static){
  var result;
  result = new CreateAccountPresenterImpl($get_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter(this$static.injector)), $get_Key$type$org$dselent$course_load_scheduler$client$view$CreateAccountView$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view(this$static.injector)));
  $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection___(result, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return result;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$EditCoursePresenterImpl$_annotation$$none$$(this$static){
  var result;
  result = new EditCoursePresenterImpl($get_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter(this$static.injector)), $get_Key$type$org$dselent$course_load_scheduler$client$view$EditCourseView$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view(this$static.injector)));
  $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection____(result, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return result;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$EditSectionPresenterImpl$_annotation$$none$$(this$static){
  var result;
  result = new EditSectionPresenterImpl($get_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter(this$static.injector)), $get_Key$type$org$dselent$course_load_scheduler$client$view$EditSectionView$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view(this$static.injector)));
  $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection_____(result, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return result;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$ExamplePresenterImpl$_annotation$$none$$(this$static){
  var result;
  result = new ExamplePresenterImpl($get_Key$type$org$dselent$course_load_scheduler$client$view$ExampleView$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view(this$static.injector)));
  $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection______(result, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return result;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$HomePresenterImpl$_annotation$$none$$(this$static){
  var result;
  result = new HomePresenterImpl($get_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter(this$static.injector)), $get_Key$type$org$dselent$course_load_scheduler$client$view$HomeView$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view(this$static.injector)));
  $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection_______(result, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return result;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$IndexPresenterImpl$_annotation$$none$$(this$static){
  var result;
  result = new IndexPresenterImpl($get_Key$type$org$dselent$course_load_scheduler$client$view$IndexView$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view(this$static.injector)));
  $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection________(result, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return result;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$LoginPagePresenterImpl$_annotation$$none$$(this$static){
  var result;
  result = new LoginPagePresenterImpl($get_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter(this$static.injector)), $get_Key$type$org$dselent$course_load_scheduler$client$view$LoginPageView$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view(this$static.injector)));
  $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection_________(result, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return result;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$ManageUserPresenterImpl$_annotation$$none$$(this$static){
  var result;
  result = new ManageUserPresenterImpl($get_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter(this$static.injector)), $get_Key$type$org$dselent$course_load_scheduler$client$view$ManageUserView$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view(this$static.injector)));
  $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection___________(result, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return result;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$ViewCoursesPresenterImpl$_annotation$$none$$(this$static){
  var result;
  result = new ViewCoursesPresenterImpl($get_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter(this$static.injector)), $get_Key$type$org$dselent$course_load_scheduler$client$view$ViewCoursesView$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view(this$static.injector)));
  $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection____________(result, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return result;
}

function $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection_(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection__(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection___(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection____(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection_____(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection______(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection_______(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection________(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection_________(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection___________(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$presenter$impl$BasePresenterImpl_eventBus_fieldInjection____________(injectee, value_0){
  injectee.eventBus = value_0;
}

function org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_0(injector){
  this.injector = injector;
}

defineClass(354, 1, {}, org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_0);
var Lorg_dselent_course_1load_1scheduler_client_presenter_impl_org_1dselent_1course_1load_1scheduler_1client_1gin_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter.impl', 'org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment', 354);
function $get_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$presenter$impl$IndexPresenterImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_presenter_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$;
}

function org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_1(injector){
  this.injector = injector;
}

defineClass(356, 1, {}, org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_1);
_.singleton_Key$type$org$dselent$course_load_scheduler$client$presenter$IndexPresenter$_annotation$$none$$ = null;
var Lorg_dselent_course_1load_1scheduler_client_presenter_org_1dselent_1course_1load_1scheduler_1client_1gin_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('org.dselent.course_load_scheduler.client.presenter', 'org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment', 356);
function $clinit_ReceiveCreateAccountKeys(){
  $clinit_ReceiveCreateAccountKeys = emptyMethod;
  ACCOUNT_TYPE_ID = new ReceiveCreateAccountKeys('ACCOUNT_TYPE_ID', 0);
  ID = new ReceiveCreateAccountKeys('ID', 1);
  PASSWORD = new ReceiveCreateAccountKeys('PASSWORD', 2);
}

function ReceiveCreateAccountKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_8(){
  $clinit_ReceiveCreateAccountKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveCreateAccountKeys_2_classLit, 1), $intern_4, 172, 0, [ACCOUNT_TYPE_ID, ID, PASSWORD]);
}

defineClass(172, 4, {3:1, 8:1, 4:1, 172:1}, ReceiveCreateAccountKeys);
var ACCOUNT_TYPE_ID, ID, PASSWORD;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveCreateAccountKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveCreateAccountKeys', 172, values_8);
function $clinit_ReceiveEditCourseKeys(){
  $clinit_ReceiveEditCourseKeys = emptyMethod;
  COURSE_ID = new ReceiveEditCourseKeys('COURSE_ID', 0);
  COURSE_NAME = new ReceiveEditCourseKeys('COURSE_NAME', 1);
  COURSE_NUMBER = new ReceiveEditCourseKeys('COURSE_NUMBER', 2);
  COURSE_FREQUENCY_ID = new ReceiveEditCourseKeys('COURSE_FREQUENCY_ID', 3);
}

function ReceiveEditCourseKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_ReceiveEditCourseKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveEditCourseKeys_2_classLit, 1), $intern_4, 149, 0, [COURSE_ID, COURSE_NAME, COURSE_NUMBER, COURSE_FREQUENCY_ID]);
}

defineClass(149, 4, {3:1, 8:1, 4:1, 149:1}, ReceiveEditCourseKeys);
var COURSE_FREQUENCY_ID, COURSE_ID, COURSE_NAME, COURSE_NUMBER;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveEditCourseKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveEditCourseKeys', 149, values_9);
function $clinit_ReceiveEditSectionKeys(){
  $clinit_ReceiveEditSectionKeys = emptyMethod;
  ID_0 = new ReceiveEditSectionKeys('ID', 0);
  TERMS_ID = new ReceiveEditSectionKeys('TERMS_ID', 1);
  SECTION_TYPE_ID = new ReceiveEditSectionKeys('SECTION_TYPE_ID', 2);
  DAYS_ID = new ReceiveEditSectionKeys('DAYS_ID', 3);
  COURSES_ID = new ReceiveEditSectionKeys('COURSES_ID', 4);
  START_TIME_ID = new ReceiveEditSectionKeys('START_TIME_ID', 5);
  END_TIME_ID = new ReceiveEditSectionKeys('END_TIME_ID', 6);
  SECTIONS_NAME = new ReceiveEditSectionKeys('SECTIONS_NAME', 7);
}

function ReceiveEditSectionKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_ReceiveEditSectionKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveEditSectionKeys_2_classLit, 1), $intern_4, 105, 0, [ID_0, TERMS_ID, SECTION_TYPE_ID, DAYS_ID, COURSES_ID, START_TIME_ID, END_TIME_ID, SECTIONS_NAME]);
}

defineClass(105, 4, {3:1, 8:1, 4:1, 105:1}, ReceiveEditSectionKeys);
var COURSES_ID, DAYS_ID, END_TIME_ID, ID_0, SECTIONS_NAME, SECTION_TYPE_ID, START_TIME_ID, TERMS_ID;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveEditSectionKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveEditSectionKeys', 105, values_10);
function $clinit_ReceiveGetCourseListKeys(){
  $clinit_ReceiveGetCourseListKeys = emptyMethod;
  COURSES_ID_0 = new ReceiveGetCourseListKeys('COURSES_ID', 0);
  COURSES_NUMBER = new ReceiveGetCourseListKeys('COURSES_NUMBER', 1);
  COURSES_TITLE = new ReceiveGetCourseListKeys('COURSES_TITLE', 2);
  FREQUENCY_ID = new ReceiveGetCourseListKeys('FREQUENCY_ID', 3);
  FREQUENCY = new ReceiveGetCourseListKeys('FREQUENCY', 4);
}

function ReceiveGetCourseListKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_ReceiveGetCourseListKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveGetCourseListKeys_2_classLit, 1), $intern_4, 125, 0, [COURSES_ID_0, COURSES_NUMBER, COURSES_TITLE, FREQUENCY_ID, FREQUENCY]);
}

defineClass(125, 4, {3:1, 8:1, 4:1, 125:1}, ReceiveGetCourseListKeys);
var COURSES_ID_0, COURSES_NUMBER, COURSES_TITLE, FREQUENCY, FREQUENCY_ID;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveGetCourseListKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveGetCourseListKeys', 125, values_11);
function $clinit_ReceiveGetFacultyKeys(){
  $clinit_ReceiveGetFacultyKeys = emptyMethod;
  ID_1 = new ReceiveGetFacultyKeys('ID', 0);
  FIRST_NAME = new ReceiveGetFacultyKeys('FIRST_NAME', 1);
  LAST_NAME = new ReceiveGetFacultyKeys('LAST_NAME', 2);
  EMAIL = new ReceiveGetFacultyKeys('EMAIL', 3);
  FACULTY_TYPE_ID = new ReceiveGetFacultyKeys('FACULTY_TYPE_ID', 4);
}

function ReceiveGetFacultyKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_ReceiveGetFacultyKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveGetFacultyKeys_2_classLit, 1), $intern_4, 126, 0, [ID_1, FIRST_NAME, LAST_NAME, EMAIL, FACULTY_TYPE_ID]);
}

defineClass(126, 4, {3:1, 8:1, 4:1, 126:1}, ReceiveGetFacultyKeys);
var EMAIL, FACULTY_TYPE_ID, FIRST_NAME, ID_1, LAST_NAME;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveGetFacultyKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveGetFacultyKeys', 126, values_12);
function $clinit_ReceiveGetFrequenciesKeys(){
  $clinit_ReceiveGetFrequenciesKeys = emptyMethod;
  ID_2 = new ReceiveGetFrequenciesKeys('ID', 0);
  FREQUENCY_0 = new ReceiveGetFrequenciesKeys('FREQUENCY', 1);
}

function ReceiveGetFrequenciesKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_13(){
  $clinit_ReceiveGetFrequenciesKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveGetFrequenciesKeys_2_classLit, 1), $intern_4, 196, 0, [ID_2, FREQUENCY_0]);
}

defineClass(196, 4, {3:1, 8:1, 4:1, 196:1}, ReceiveGetFrequenciesKeys);
var FREQUENCY_0, ID_2;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveGetFrequenciesKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveGetFrequenciesKeys', 196, values_13);
function $clinit_ReceiveGetOneFacultySectionInfoKeys(){
  $clinit_ReceiveGetOneFacultySectionInfoKeys = emptyMethod;
  FACULTY_ID = new ReceiveGetOneFacultySectionInfoKeys('FACULTY_ID', 0);
  TERMS_NAME = new ReceiveGetOneFacultySectionInfoKeys('TERMS_NAME', 1);
  COURSES_TITLE_0 = new ReceiveGetOneFacultySectionInfoKeys('COURSES_TITLE', 2);
  COURSES_NUMBER_0 = new ReceiveGetOneFacultySectionInfoKeys('COURSES_NUMBER', 3);
  SECTIONS_NAME_0 = new ReceiveGetOneFacultySectionInfoKeys('SECTIONS_NAME', 4);
  START_TIME = new ReceiveGetOneFacultySectionInfoKeys('START_TIME', 5);
  END_TIME = new ReceiveGetOneFacultySectionInfoKeys('END_TIME', 6);
  DAYS_0 = new ReceiveGetOneFacultySectionInfoKeys('DAYS', 7);
  SECTION_TYPE = new ReceiveGetOneFacultySectionInfoKeys('SECTION_TYPE', 8);
}

function ReceiveGetOneFacultySectionInfoKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_14(){
  $clinit_ReceiveGetOneFacultySectionInfoKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveGetOneFacultySectionInfoKeys_2_classLit, 1), $intern_4, 97, 0, [FACULTY_ID, TERMS_NAME, COURSES_TITLE_0, COURSES_NUMBER_0, SECTIONS_NAME_0, START_TIME, END_TIME, DAYS_0, SECTION_TYPE]);
}

defineClass(97, 4, {3:1, 8:1, 4:1, 97:1}, ReceiveGetOneFacultySectionInfoKeys);
var COURSES_NUMBER_0, COURSES_TITLE_0, DAYS_0, END_TIME, FACULTY_ID, SECTIONS_NAME_0, SECTION_TYPE, START_TIME, TERMS_NAME;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveGetOneFacultySectionInfoKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveGetOneFacultySectionInfoKeys', 97, values_14);
function $clinit_ReceiveGetSectionsKeys(){
  $clinit_ReceiveGetSectionsKeys = emptyMethod;
  SECTION_ID = new ReceiveGetSectionsKeys('SECTION_ID', 0);
  SECTION_TYPE_0 = new ReceiveGetSectionsKeys('SECTION_TYPE', 1);
  DAYS_1 = new ReceiveGetSectionsKeys('DAYS', 2);
  TERMS_NAME_0 = new ReceiveGetSectionsKeys('TERMS_NAME', 3);
  COURSES_NUMBER_1 = new ReceiveGetSectionsKeys('COURSES_NUMBER', 4);
  COURSES_TITLE_1 = new ReceiveGetSectionsKeys('COURSES_TITLE', 5);
  START_TIME_0 = new ReceiveGetSectionsKeys('START_TIME', 6);
  END_TIME_0 = new ReceiveGetSectionsKeys('END_TIME', 7);
  SECTIONS_NAME_1 = new ReceiveGetSectionsKeys('SECTIONS_NAME', 8);
  SECTION_TYPE_ID_0 = new ReceiveGetSectionsKeys('SECTION_TYPE_ID', 9);
  DAYS_ID_0 = new ReceiveGetSectionsKeys('DAYS_ID', 10);
  TERMS_ID_0 = new ReceiveGetSectionsKeys('TERMS_ID', 11);
  COURSES_ID_1 = new ReceiveGetSectionsKeys('COURSES_ID', 12);
  START_TIME_ID_0 = new ReceiveGetSectionsKeys('START_TIME_ID', 13);
  END_TIME_ID_0 = new ReceiveGetSectionsKeys('END_TIME_ID', 14);
}

function ReceiveGetSectionsKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_15(){
  $clinit_ReceiveGetSectionsKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveGetSectionsKeys_2_classLit, 1), $intern_4, 81, 0, [SECTION_ID, SECTION_TYPE_0, DAYS_1, TERMS_NAME_0, COURSES_NUMBER_1, COURSES_TITLE_1, START_TIME_0, END_TIME_0, SECTIONS_NAME_1, SECTION_TYPE_ID_0, DAYS_ID_0, TERMS_ID_0, COURSES_ID_1, START_TIME_ID_0, END_TIME_ID_0]);
}

defineClass(81, 4, {3:1, 8:1, 4:1, 81:1}, ReceiveGetSectionsKeys);
var COURSES_ID_1, COURSES_NUMBER_1, COURSES_TITLE_1, DAYS_1, DAYS_ID_0, END_TIME_0, END_TIME_ID_0, SECTIONS_NAME_1, SECTION_ID, SECTION_TYPE_0, SECTION_TYPE_ID_0, START_TIME_0, START_TIME_ID_0, TERMS_ID_0, TERMS_NAME_0;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveGetSectionsKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveGetSectionsKeys', 81, values_15);
function $clinit_ReceiveGetTermsKeys(){
  $clinit_ReceiveGetTermsKeys = emptyMethod;
  ID_3 = new ReceiveGetTermsKeys('ID', 0);
  NAME = new ReceiveGetTermsKeys('NAME', 1);
}

function ReceiveGetTermsKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_16(){
  $clinit_ReceiveGetTermsKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveGetTermsKeys_2_classLit, 1), $intern_4, 197, 0, [ID_3, NAME]);
}

defineClass(197, 4, {3:1, 8:1, 4:1, 197:1}, ReceiveGetTermsKeys);
var ID_3, NAME;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveGetTermsKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveGetTermsKeys', 197, values_16);
function $clinit_ReceiveLoginKeys(){
  $clinit_ReceiveLoginKeys = emptyMethod;
  ID_4 = new ReceiveLoginKeys('ID', 0);
  ACCOUNT_TYPE_ID_0 = new ReceiveLoginKeys('ACCOUNT_TYPE_ID', 1);
  ENCRYPTED_PASSWORD = new ReceiveLoginKeys('ENCRYPTED_PASSWORD', 2);
}

function ReceiveLoginKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_17(){
  $clinit_ReceiveLoginKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveLoginKeys_2_classLit, 1), $intern_4, 173, 0, [ID_4, ACCOUNT_TYPE_ID_0, ENCRYPTED_PASSWORD]);
}

defineClass(173, 4, {3:1, 8:1, 4:1, 173:1}, ReceiveLoginKeys);
var ACCOUNT_TYPE_ID_0, ENCRYPTED_PASSWORD, ID_4;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveLoginKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveLoginKeys', 173, values_17);
function $clinit_ReceiveNewCourseKeys(){
  $clinit_ReceiveNewCourseKeys = emptyMethod;
  ID_5 = new ReceiveNewCourseKeys('ID', 0);
  NUMBER = new ReceiveNewCourseKeys('NUMBER', 1);
  TITLE = new ReceiveNewCourseKeys('TITLE', 2);
  FREQUENCY_ID_0 = new ReceiveNewCourseKeys('FREQUENCY_ID', 3);
  DELETED = new ReceiveNewCourseKeys('DELETED', 4);
}

function ReceiveNewCourseKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_18(){
  $clinit_ReceiveNewCourseKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveNewCourseKeys_2_classLit, 1), $intern_4, 124, 0, [ID_5, NUMBER, TITLE, FREQUENCY_ID_0, DELETED]);
}

defineClass(124, 4, {3:1, 8:1, 4:1, 124:1}, ReceiveNewCourseKeys);
var DELETED, FREQUENCY_ID_0, ID_5, NUMBER, TITLE;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveNewCourseKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveNewCourseKeys', 124, values_18);
function $clinit_ReceiveNewSectionKeys(){
  $clinit_ReceiveNewSectionKeys = emptyMethod;
  ID_6 = new ReceiveNewSectionKeys('ID', 0);
  TERMS_NAME_1 = new ReceiveNewSectionKeys('TERMS_NAME', 1);
  SECTION_TYPE_1 = new ReceiveNewSectionKeys('SECTION_TYPE', 2);
  DAYS_2 = new ReceiveNewSectionKeys('DAYS', 3);
  COURSES_NUMBER_2 = new ReceiveNewSectionKeys('COURSES_NUMBER', 4);
  COURSES_TITLE_2 = new ReceiveNewSectionKeys('COURSES_TITLE', 5);
  START_TIME_1 = new ReceiveNewSectionKeys('START_TIME', 6);
  END_TIME_1 = new ReceiveNewSectionKeys('END_TIME', 7);
  SECTIONS_NAME_2 = new ReceiveNewSectionKeys('SECTIONS_NAME', 8);
}

function ReceiveNewSectionKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_19(){
  $clinit_ReceiveNewSectionKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveNewSectionKeys_2_classLit, 1), $intern_4, 96, 0, [ID_6, TERMS_NAME_1, SECTION_TYPE_1, DAYS_2, COURSES_NUMBER_2, COURSES_TITLE_2, START_TIME_1, END_TIME_1, SECTIONS_NAME_2]);
}

defineClass(96, 4, {3:1, 8:1, 4:1, 96:1}, ReceiveNewSectionKeys);
var COURSES_NUMBER_2, COURSES_TITLE_2, DAYS_2, END_TIME_1, ID_6, SECTIONS_NAME_2, SECTION_TYPE_1, START_TIME_1, TERMS_NAME_1;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveNewSectionKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveNewSectionKeys', 96, values_19);
function $clinit_ReceiveRemoveCourseKeys(){
  $clinit_ReceiveRemoveCourseKeys = emptyMethod;
  COURSE_ID_0 = new ReceiveRemoveCourseKeys('COURSE_ID', 0);
  SUCCESS = new ReceiveRemoveCourseKeys('SUCCESS', 1);
}

function ReceiveRemoveCourseKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_20(){
  $clinit_ReceiveRemoveCourseKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveRemoveCourseKeys_2_classLit, 1), $intern_4, 195, 0, [COURSE_ID_0, SUCCESS]);
}

defineClass(195, 4, {3:1, 8:1, 4:1, 195:1}, ReceiveRemoveCourseKeys);
var COURSE_ID_0, SUCCESS;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveRemoveCourseKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveRemoveCourseKeys', 195, values_20);
function $clinit_ReceiveRemoveSectionKeys(){
  $clinit_ReceiveRemoveSectionKeys = emptyMethod;
  ID_7 = new ReceiveRemoveSectionKeys('ID', 0);
  SUCCESS_0 = new ReceiveRemoveSectionKeys('SUCCESS', 1);
}

function ReceiveRemoveSectionKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_21(){
  $clinit_ReceiveRemoveSectionKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveRemoveSectionKeys_2_classLit, 1), $intern_4, 194, 0, [ID_7, SUCCESS_0]);
}

defineClass(194, 4, {3:1, 8:1, 4:1, 194:1}, ReceiveRemoveSectionKeys);
var ID_7, SUCCESS_0;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveRemoveSectionKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveRemoveSectionKeys', 194, values_21);
function $clinit_ReceiveSectionTypesKeys(){
  $clinit_ReceiveSectionTypesKeys = emptyMethod;
  ID_8 = new ReceiveSectionTypesKeys('ID', 0);
  TYPE_58 = new ReceiveSectionTypesKeys('TYPE', 1);
}

function ReceiveSectionTypesKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_22(){
  $clinit_ReceiveSectionTypesKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveSectionTypesKeys_2_classLit, 1), $intern_4, 198, 0, [ID_8, TYPE_58]);
}

defineClass(198, 4, {3:1, 8:1, 4:1, 198:1}, ReceiveSectionTypesKeys);
var ID_8, TYPE_58;
var Lorg_dselent_course_1load_1scheduler_client_receive_jsonkeys_ReceiveSectionTypesKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.receive.jsonkeys', 'ReceiveSectionTypesKeys', 198, values_22);
function $clinit_GetEndTimesKeys(){
  $clinit_GetEndTimesKeys = emptyMethod;
  ID_9 = new GetEndTimesKeys('ID', 0);
  PASSWORD_0 = new GetEndTimesKeys('PASSWORD', 1);
  ACCOUNT_TYPE_ID_1 = new GetEndTimesKeys('ACCOUNT_TYPE_ID', 2);
}

function GetEndTimesKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_23(){
  $clinit_GetEndTimesKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_GetEndTimesKeys_2_classLit, 1), $intern_4, 176, 0, [ID_9, PASSWORD_0, ACCOUNT_TYPE_ID_1]);
}

defineClass(176, 4, {3:1, 8:1, 4:1, 176:1}, GetEndTimesKeys);
var ACCOUNT_TYPE_ID_1, ID_9, PASSWORD_0;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_GetEndTimesKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'GetEndTimesKeys', 176, values_23);
function $clinit_GetStartTimesKeys(){
  $clinit_GetStartTimesKeys = emptyMethod;
  ID_10 = new GetStartTimesKeys('ID', 0);
  PASSWORD_1 = new GetStartTimesKeys('PASSWORD', 1);
  ACCOUNT_TYPE_ID_2 = new GetStartTimesKeys('ACCOUNT_TYPE_ID', 2);
}

function GetStartTimesKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_24(){
  $clinit_GetStartTimesKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_GetStartTimesKeys_2_classLit, 1), $intern_4, 175, 0, [ID_10, PASSWORD_1, ACCOUNT_TYPE_ID_2]);
}

defineClass(175, 4, {3:1, 8:1, 4:1, 175:1}, GetStartTimesKeys);
var ACCOUNT_TYPE_ID_2, ID_10, PASSWORD_1;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_GetStartTimesKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'GetStartTimesKeys', 175, values_24);
function $clinit_SendCreateAccountKeys(){
  $clinit_SendCreateAccountKeys = emptyMethod;
  EMAIL_0 = new SendCreateAccountKeys('EMAIL', 0);
  PASSWORD_2 = new SendCreateAccountKeys('PASSWORD', 1);
  ACCOUNT_TYPE = new SendCreateAccountKeys('ACCOUNT_TYPE', 2);
}

function SendCreateAccountKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_25(){
  $clinit_SendCreateAccountKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendCreateAccountKeys_2_classLit, 1), $intern_4, 171, 0, [EMAIL_0, PASSWORD_2, ACCOUNT_TYPE]);
}

defineClass(171, 4, {3:1, 8:1, 4:1, 171:1}, SendCreateAccountKeys);
var ACCOUNT_TYPE, EMAIL_0, PASSWORD_2;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendCreateAccountKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'SendCreateAccountKeys', 171, values_25);
function $clinit_SendEditCourseKeys(){
  $clinit_SendEditCourseKeys = emptyMethod;
  COURSE_ID_1 = new SendEditCourseKeys('COURSE_ID', 0);
  COURSE_NAME_0 = new SendEditCourseKeys('COURSE_NAME', 1);
  COURSE_FREQUENCY_ID_0 = new SendEditCourseKeys('COURSE_FREQUENCY_ID', 2);
  COURSE_NUMBER_0 = new SendEditCourseKeys('COURSE_NUMBER', 3);
}

function SendEditCourseKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_26(){
  $clinit_SendEditCourseKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendEditCourseKeys_2_classLit, 1), $intern_4, 148, 0, [COURSE_ID_1, COURSE_NAME_0, COURSE_FREQUENCY_ID_0, COURSE_NUMBER_0]);
}

defineClass(148, 4, {3:1, 8:1, 4:1, 148:1}, SendEditCourseKeys);
var COURSE_FREQUENCY_ID_0, COURSE_ID_1, COURSE_NAME_0, COURSE_NUMBER_0;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendEditCourseKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'SendEditCourseKeys', 148, values_26);
function $clinit_SendEditSectionKeys(){
  $clinit_SendEditSectionKeys = emptyMethod;
  ID_11 = new SendEditSectionKeys('ID', 0);
  TERMS_ID_1 = new SendEditSectionKeys('TERMS_ID', 1);
  SECTION_TYPE_ID_1 = new SendEditSectionKeys('SECTION_TYPE_ID', 2);
  DAYS_ID_1 = new SendEditSectionKeys('DAYS_ID', 3);
  START_ID = new SendEditSectionKeys('START_ID', 4);
  END_ID = new SendEditSectionKeys('END_ID', 5);
  NAME_0 = new SendEditSectionKeys('NAME', 6);
  COURSES_ID_2 = new SendEditSectionKeys('COURSES_ID', 7);
}

function SendEditSectionKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_27(){
  $clinit_SendEditSectionKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendEditSectionKeys_2_classLit, 1), $intern_4, 103, 0, [ID_11, TERMS_ID_1, SECTION_TYPE_ID_1, DAYS_ID_1, START_ID, END_ID, NAME_0, COURSES_ID_2]);
}

defineClass(103, 4, {3:1, 8:1, 4:1, 103:1}, SendEditSectionKeys);
var COURSES_ID_2, DAYS_ID_1, END_ID, ID_11, NAME_0, SECTION_TYPE_ID_1, START_ID, TERMS_ID_1;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendEditSectionKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'SendEditSectionKeys', 103, values_27);
function $clinit_SendGetFrequenciesKeys(){
  $clinit_SendGetFrequenciesKeys = emptyMethod;
  USER_ID = new SendGetFrequenciesKeys('USER_ID', 0);
  PASSWORD_3 = new SendGetFrequenciesKeys('PASSWORD', 1);
  ACCOUNT_TYPE_ID_3 = new SendGetFrequenciesKeys('ACCOUNT_TYPE_ID', 2);
}

function SendGetFrequenciesKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_28(){
  $clinit_SendGetFrequenciesKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendGetFrequenciesKeys_2_classLit, 1), $intern_4, 174, 0, [USER_ID, PASSWORD_3, ACCOUNT_TYPE_ID_3]);
}

defineClass(174, 4, {3:1, 8:1, 4:1, 174:1}, SendGetFrequenciesKeys);
var ACCOUNT_TYPE_ID_3, PASSWORD_3, USER_ID;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendGetFrequenciesKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'SendGetFrequenciesKeys', 174, values_28);
function $clinit_SendGetOneFacultySectionInfoKeys(){
  $clinit_SendGetOneFacultySectionInfoKeys = emptyMethod;
  FACULTY_ID_0 = new SendGetOneFacultySectionInfoKeys('FACULTY_ID', 0);
  TERMS_ID_2 = new SendGetOneFacultySectionInfoKeys('TERMS_ID', 1);
}

function SendGetOneFacultySectionInfoKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_29(){
  $clinit_SendGetOneFacultySectionInfoKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendGetOneFacultySectionInfoKeys_2_classLit, 1), $intern_4, 193, 0, [FACULTY_ID_0, TERMS_ID_2]);
}

defineClass(193, 4, {3:1, 8:1, 4:1, 193:1}, SendGetOneFacultySectionInfoKeys);
var FACULTY_ID_0, TERMS_ID_2;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendGetOneFacultySectionInfoKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'SendGetOneFacultySectionInfoKeys', 193, values_29);
function $clinit_SendGetSectionsKeys(){
  $clinit_SendGetSectionsKeys = emptyMethod;
  COURSE_ID_2 = new SendGetSectionsKeys;
}

function SendGetSectionsKeys(){
  Enum.call(this, 'COURSE_ID', 0);
}

function values_30(){
  $clinit_SendGetSectionsKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendGetSectionsKeys_2_classLit, 1), $intern_4, 235, 0, [COURSE_ID_2]);
}

defineClass(235, 4, {3:1, 8:1, 4:1, 235:1}, SendGetSectionsKeys);
var COURSE_ID_2;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendGetSectionsKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'SendGetSectionsKeys', 235, values_30);
function $clinit_SendLoginKeys(){
  $clinit_SendLoginKeys = emptyMethod;
  USER_NAME = new SendLoginKeys('USER_NAME', 0);
  PASSWORD_4 = new SendLoginKeys('PASSWORD', 1);
}

function SendLoginKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_31(){
  $clinit_SendLoginKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendLoginKeys_2_classLit, 1), $intern_4, 192, 0, [USER_NAME, PASSWORD_4]);
}

defineClass(192, 4, {3:1, 8:1, 4:1, 192:1}, SendLoginKeys);
var PASSWORD_4, USER_NAME;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendLoginKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'SendLoginKeys', 192, values_31);
function $clinit_SendNewCourseKeys(){
  $clinit_SendNewCourseKeys = emptyMethod;
  NUMBER_0 = new SendNewCourseKeys('NUMBER', 0);
  TITLE_0 = new SendNewCourseKeys('TITLE', 1);
  FREQUENCY_ID_1 = new SendNewCourseKeys('FREQUENCY_ID', 2);
}

function SendNewCourseKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_32(){
  $clinit_SendNewCourseKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendNewCourseKeys_2_classLit, 1), $intern_4, 167, 0, [NUMBER_0, TITLE_0, FREQUENCY_ID_1]);
}

defineClass(167, 4, {3:1, 8:1, 4:1, 167:1}, SendNewCourseKeys);
var FREQUENCY_ID_1, NUMBER_0, TITLE_0;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendNewCourseKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'SendNewCourseKeys', 167, values_32);
function $clinit_SendNewSectionKeys(){
  $clinit_SendNewSectionKeys = emptyMethod;
  TERMS_ID_3 = new SendNewSectionKeys('TERMS_ID', 0);
  SECTION_TYPE_ID_2 = new SendNewSectionKeys('SECTION_TYPE_ID', 1);
  DAYS_ID_2 = new SendNewSectionKeys('DAYS_ID', 2);
  COURSES_ID_3 = new SendNewSectionKeys('COURSES_ID', 3);
  START_ID_0 = new SendNewSectionKeys('START_ID', 4);
  END_ID_0 = new SendNewSectionKeys('END_ID', 5);
  NAME_1 = new SendNewSectionKeys('NAME', 6);
}

function SendNewSectionKeys(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_33(){
  $clinit_SendNewSectionKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendNewSectionKeys_2_classLit, 1), $intern_4, 109, 0, [TERMS_ID_3, SECTION_TYPE_ID_2, DAYS_ID_2, COURSES_ID_3, START_ID_0, END_ID_0, NAME_1]);
}

defineClass(109, 4, {3:1, 8:1, 4:1, 109:1}, SendNewSectionKeys);
var COURSES_ID_3, DAYS_ID_2, END_ID_0, NAME_1, SECTION_TYPE_ID_2, START_ID_0, TERMS_ID_3;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendNewSectionKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'SendNewSectionKeys', 109, values_33);
function $clinit_SendRemoveCourseKeys(){
  $clinit_SendRemoveCourseKeys = emptyMethod;
  COURSE_ID_3 = new SendRemoveCourseKeys;
}

function SendRemoveCourseKeys(){
  Enum.call(this, 'COURSE_ID', 0);
}

function values_34(){
  $clinit_SendRemoveCourseKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendRemoveCourseKeys_2_classLit, 1), $intern_4, 233, 0, [COURSE_ID_3]);
}

defineClass(233, 4, {3:1, 8:1, 4:1, 233:1}, SendRemoveCourseKeys);
var COURSE_ID_3;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendRemoveCourseKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'SendRemoveCourseKeys', 233, values_34);
function $clinit_SendRemoveSectionKeys(){
  $clinit_SendRemoveSectionKeys = emptyMethod;
  ID_12 = new SendRemoveSectionKeys;
}

function SendRemoveSectionKeys(){
  Enum.call(this, 'ID', 0);
}

function values_35(){
  $clinit_SendRemoveSectionKeys();
  return initValues(getClassLiteralForArray(Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendRemoveSectionKeys_2_classLit, 1), $intern_4, 232, 0, [ID_12]);
}

defineClass(232, 4, {3:1, 8:1, 4:1, 232:1}, SendRemoveSectionKeys);
var ID_12;
var Lorg_dselent_course_1load_1scheduler_client_send_jsonkeys_SendRemoveSectionKeys_2_classLit = createForEnum('org.dselent.course_load_scheduler.client.send.jsonkeys', 'SendRemoveSectionKeys', 232, values_35);
function BaseServiceImpl(){
  this.eventBusRegistration = new HashMap;
}

defineClass(120, 645, $intern_34);
var Lorg_dselent_course_1load_1scheduler_client_service_impl_BaseServiceImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.service.impl', 'BaseServiceImpl', 120);
function CourseServiceImpl(){
  BaseServiceImpl.call(this);
}

defineClass(281, 120, $intern_34, CourseServiceImpl);
_.onSendEditCourse = function onSendEditCourse_0(evt){
  var action, editCallback, json, request, jsonObject;
  action = evt.action;
  json = (jsonObject = new JSONObject , putIntValue(jsonObject, convertKeyName(($clinit_SendEditCourseKeys() , COURSE_ID_1)), action.course.id_0) , putStringValue(jsonObject, convertKeyName(COURSE_NUMBER_0), action.course.number) , putStringValue(jsonObject, convertKeyName(COURSE_NAME_0), action.course.title_0) , putIntValue(jsonObject, convertKeyName(COURSE_FREQUENCY_ID_0), action.course.frequencyID) , jsonObject);
  editCallback = new SendEditCourseCallback(this.eventBus);
  request = new NetworkRequest('course/edit', editCallback, json);
  $send_0(request);
}
;
_.onSendGetCourseList = function onSendGetCourseList_0(evt){
  var courseListCallback, json, request;
  json = new JSONObject;
  courseListCallback = new SendGetCourseListCallback(this.eventBus);
  request = new NetworkRequest('course/view/all', courseListCallback, json);
  $send_0(request);
}
;
_.onSendNewCourse = function onSendNewCourse_0(evt){
  var action, json, newCallback, request, jsonObject;
  action = evt.action;
  json = (jsonObject = new JSONObject , putStringValue(jsonObject, convertKeyName(($clinit_SendNewCourseKeys() , NUMBER_0)), action.course.number) , putStringValue(jsonObject, convertKeyName(TITLE_0), action.course.title_0) , putIntValue(jsonObject, convertKeyName(FREQUENCY_ID_1), action.course.frequencyID) , jsonObject);
  newCallback = new SendNewCourseCallback(this.eventBus);
  request = new NetworkRequest('course/create', newCallback, json);
  $send_0(request);
}
;
_.onSendRemoveCourse = function onSendRemoveCourse_0(evt){
  var action, json, removeCallback, request, jsonObject;
  action = evt.action;
  json = (jsonObject = new JSONObject , putIntValue(jsonObject, convertKeyName(($clinit_SendRemoveCourseKeys() , COURSE_ID_3)), valueOf(action.id_0)) , jsonObject);
  removeCallback = new SendRemoveCourseCallback(this.eventBus);
  request = new NetworkRequest('course/remove', removeCallback, json);
  $send_0(request);
}
;
var Lorg_dselent_course_1load_1scheduler_client_service_impl_CourseServiceImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.service.impl', 'CourseServiceImpl', 281);
function CreateAccountServiceImpl(){
  BaseServiceImpl.call(this);
}

defineClass(291, 120, $intern_34, CreateAccountServiceImpl);
_.onCreateAccount = function onCreateAccount_0(evt){
  var action, createAccountCallback, json, request, jsonObject;
  action = dynamicCast(evt.action, 228);
  json = (jsonObject = new JSONObject , putStringValue(jsonObject, convertKeyName(($clinit_SendCreateAccountKeys() , EMAIL_0)), action.email) , putStringValue(jsonObject, convertKeyName(PASSWORD_2), action.password) , putStringValue(jsonObject, convertKeyName(ACCOUNT_TYPE), action.facultyType) , jsonObject);
  createAccountCallback = new SendCreateAccountCallback(this.eventBus);
  request = new NetworkRequest('user/create', createAccountCallback, json);
  $send_0(request);
}
;
var Lorg_dselent_course_1load_1scheduler_client_service_impl_CreateAccountServiceImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.service.impl', 'CreateAccountServiceImpl', 291);
function HomeServiceImpl(){
  BaseServiceImpl.call(this);
}

defineClass(279, 120, $intern_34, HomeServiceImpl);
_.onSendGetFaculty = function onSendGetFaculty_0(evt){
  var getFacultyCallback, json, request;
  json = new JSONObject;
  getFacultyCallback = new SendGetFacultyCallback(this.eventBus);
  request = new NetworkRequest('user/view/all', getFacultyCallback, json);
  $send_0(request);
}
;
_.onSendGetOneFacultySectionInfo = function onSendGetOneFacultySectionInfo_0(evt){
  var action, getFacultyCallback, json, request, jsonObject;
  action = evt.action;
  json = (jsonObject = new JSONObject , putIntValue(jsonObject, convertKeyName(($clinit_SendGetOneFacultySectionInfoKeys() , FACULTY_ID_0)), action.facultyId) , putIntValue(jsonObject, convertKeyName(TERMS_ID_2), action.termsId) , jsonObject);
  getFacultyCallback = new SendGetOneFacultySectionInfoCallback(this.eventBus);
  request = new NetworkRequest('section/view/allInfo', getFacultyCallback, json);
  $send_0(request);
}
;
var Lorg_dselent_course_1load_1scheduler_client_service_impl_HomeServiceImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.service.impl', 'HomeServiceImpl', 279);
function MapServiceImpl(){
  BaseServiceImpl.call(this);
}

defineClass(278, 120, $intern_34, MapServiceImpl);
_.onGetEndTimes = function onGetEndTimes_0(evt){
  var action, callback, json, request, jsonObject;
  action = evt.action;
  json = (jsonObject = new JSONObject , putIntValue(jsonObject, convertKeyName(($clinit_GetEndTimesKeys() , ID_9)), action.model.id_0) , putStringValue(jsonObject, convertKeyName(PASSWORD_0), action.model.encryptedPassword) , putIntValue(jsonObject, convertKeyName(ACCOUNT_TYPE_ID_1), action.model.accountTypeId) , jsonObject);
  callback = new SendGetEndTimesCallback(this.eventBus);
  request = new NetworkRequest('map/time/end', callback, json);
  $send_0(request);
}
;
_.onGetStartTimes = function onGetStartTimes_0(evt){
  var action, createAccountCallback, json, request, jsonObject;
  action = evt.action;
  json = (jsonObject = new JSONObject , putIntValue(jsonObject, convertKeyName(($clinit_GetStartTimesKeys() , ID_10)), action.model.id_0) , putStringValue(jsonObject, convertKeyName(PASSWORD_1), action.model.encryptedPassword) , putIntValue(jsonObject, convertKeyName(ACCOUNT_TYPE_ID_2), action.model.accountTypeId) , jsonObject);
  createAccountCallback = new GetStartTimesCallback(this.eventBus);
  request = new NetworkRequest('map/time/start', createAccountCallback, json);
  $send_0(request);
}
;
_.onSendGetFrequencies = function onSendGetFrequencies_0(evt){
  var action, callback, json, request, jsonObject;
  action = evt.action;
  json = (jsonObject = new JSONObject , putIntValue(jsonObject, convertKeyName(($clinit_SendGetFrequenciesKeys() , USER_ID)), action.model.id_0) , putStringValue(jsonObject, convertKeyName(PASSWORD_3), action.model.encryptedPassword) , putIntValue(jsonObject, convertKeyName(ACCOUNT_TYPE_ID_3), action.model.accountTypeId) , jsonObject);
  callback = new SendGetFrequenciesCallback(this.eventBus);
  request = new NetworkRequest('map/frequencies', callback, json);
  $send_0(request);
}
;
_.onSendGetSectionTypes = function onSendGetSectionTypes_0(evt){
  var callback, json, request;
  json = new JSONObject;
  callback = new SendGetSectionTypesCallback(this.eventBus);
  request = new NetworkRequest('map/sectionTypes', callback, json);
  $send_0(request);
}
;
_.onSendGetTerms = function onSendGetTerms_0(evt){
  var callback, json, request;
  json = new JSONObject;
  callback = new SendGetTermsCallback(this.eventBus);
  request = new NetworkRequest('map/terms', callback, json);
  $send_0(request);
}
;
var Lorg_dselent_course_1load_1scheduler_client_service_impl_MapServiceImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.service.impl', 'MapServiceImpl', 278);
function ScheduleServiceImpl(){
  BaseServiceImpl.call(this);
}

defineClass(280, 120, $intern_34, ScheduleServiceImpl);
var Lorg_dselent_course_1load_1scheduler_client_service_impl_ScheduleServiceImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.service.impl', 'ScheduleServiceImpl', 280);
function SectionServiceImpl(){
  BaseServiceImpl.call(this);
}

defineClass(282, 120, $intern_34, SectionServiceImpl);
_.onSendEditSection = function onSendEditSection_0(evt){
  var action, json, newCallback, request, jsonObject;
  action = evt.action;
  json = (jsonObject = new JSONObject , putIntValue(jsonObject, convertKeyName(($clinit_SendEditSectionKeys() , ID_11)), action.section.sectionId) , putIntValue(jsonObject, convertKeyName(TERMS_ID_1), action.section.termsId) , putIntValue(jsonObject, convertKeyName(SECTION_TYPE_ID_1), action.section.sectionTypeId) , putIntValue(jsonObject, convertKeyName(DAYS_ID_1), action.section.daysId) , putIntValue(jsonObject, convertKeyName(COURSES_ID_2), action.section.coursesId) , putIntValue(jsonObject, convertKeyName(START_ID), action.section.startTimeId) , putIntValue(jsonObject, convertKeyName(END_ID), action.section.endTimeId) , putStringValue(jsonObject, convertKeyName(NAME_0), action.section.sectionsName) , jsonObject);
  newCallback = new SendEditSectionCallback(this.eventBus);
  request = new NetworkRequest('section/edit', newCallback, json);
  $send_0(request);
}
;
_.onSendGetSections = function onSendGetSections_0(evt){
  var action, json, newCallback, request, jsonObject;
  action = evt.action;
  json = (jsonObject = new JSONObject , putIntValue(jsonObject, convertKeyName(($clinit_SendGetSectionsKeys() , COURSE_ID_2)), action.courseId) , jsonObject);
  newCallback = new SendGetSectionsCallback(this.eventBus);
  request = new NetworkRequest('section/view', newCallback, json);
  $send_0(request);
}
;
_.onSendNewSection = function onSendNewSection_0(evt){
  var action, json, newCallback, request, jsonObject;
  action = evt.action;
  json = (jsonObject = new JSONObject , putIntValue(jsonObject, convertKeyName(($clinit_SendNewSectionKeys() , TERMS_ID_3)), action.section.termsId) , putIntValue(jsonObject, convertKeyName(SECTION_TYPE_ID_2), action.section.sectionTypeId) , putIntValue(jsonObject, convertKeyName(DAYS_ID_2), action.section.daysId) , putIntValue(jsonObject, convertKeyName(COURSES_ID_3), action.section.coursesId) , putIntValue(jsonObject, convertKeyName(START_ID_0), action.section.startTimeId) , putIntValue(jsonObject, convertKeyName(END_ID_0), action.section.endTimeId) , putStringValue(jsonObject, convertKeyName(NAME_1), action.section.sectionsName) , jsonObject);
  newCallback = new SendNewSectionCallback(this.eventBus);
  request = new NetworkRequest('section/add', newCallback, json);
  $send_0(request);
}
;
_.onSendRemoveSection = function onSendRemoveSection_0(evt){
  var action, json, newCallback, request, jsonObject;
  action = evt.action;
  json = (jsonObject = new JSONObject , putIntValue(jsonObject, convertKeyName(($clinit_SendRemoveSectionKeys() , ID_12)), valueOf(action.id_0)) , jsonObject);
  newCallback = new SendRemoveSectionCallback(this.eventBus);
  request = new NetworkRequest('section/remove', newCallback, json);
  $send_0(request);
}
;
var Lorg_dselent_course_1load_1scheduler_client_service_impl_SectionServiceImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.service.impl', 'SectionServiceImpl', 282);
function UserServiceImpl(){
  BaseServiceImpl.call(this);
}

defineClass(290, 120, $intern_34, UserServiceImpl);
_.onSendLogin = function onSendLogin_0(evt){
  var action, json, loginCallback, request, jsonObject;
  action = evt.action;
  json = (jsonObject = new JSONObject , putStringValue(jsonObject, convertKeyName(($clinit_SendLoginKeys() , USER_NAME)), action.userName) , putStringValue(jsonObject, convertKeyName(PASSWORD_4), action.password) , jsonObject);
  loginCallback = new SendLoginCallback(this.eventBus);
  request = new NetworkRequest('user/login', loginCallback, json);
  $send_0(request);
}
;
var Lorg_dselent_course_1load_1scheduler_client_service_impl_UserServiceImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.service.impl', 'UserServiceImpl', 290);
function $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$CourseServiceImpl$_annotation$$none$$(this$static){
  var created;
  created = new CourseServiceImpl;
  $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection(created, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$CreateAccountServiceImpl$_annotation$$none$$(this$static){
  var created;
  created = new CreateAccountServiceImpl;
  $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection_(created, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$HomeServiceImpl$_annotation$$none$$(this$static){
  var created;
  created = new HomeServiceImpl;
  $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection__(created, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$MapServiceImpl$_annotation$$none$$(this$static){
  var created;
  created = new MapServiceImpl;
  $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection___(created, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$ScheduleServiceImpl$_annotation$$none$$(this$static){
  var created;
  created = new ScheduleServiceImpl;
  $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection____(created, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$SectionServiceImpl$_annotation$$none$$(this$static){
  var created;
  created = new SectionServiceImpl;
  $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection_____(created, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$service$impl$UserServiceImpl$_annotation$$none$$(this$static){
  var created;
  created = new UserServiceImpl;
  $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection______(created, $get_Key$type$com$google$gwt$event$shared$SimpleEventBus$_annotation$$none$$($getFragment_com_google_gwt_event_shared(this$static.injector)));
  return created;
}

function $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection_(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection__(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection___(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection____(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection_____(injectee, value_0){
  injectee.eventBus = value_0;
}

function $org$dselent$course_load_scheduler$client$service$impl$BaseServiceImpl_eventBus_fieldInjection______(injectee, value_0){
  injectee.eventBus = value_0;
}

function org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_2(injector){
  this.injector = injector;
}

defineClass(355, 1, {}, org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_2);
var Lorg_dselent_course_1load_1scheduler_client_service_impl_org_1dselent_1course_1load_1scheduler_1client_1gin_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('org.dselent.course_load_scheduler.client.service.impl', 'org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment', 355);
function $translateToAction(json){
  var action, course, courseList, courseObject, i, jsonObject, userObject;
  jsonObject = $get_0(json, 'success');
  courseObject = $get(jsonObject.isArray_0(), 0);
  courseList = new ArrayList;
  for (i = 0; i < courseObject.isArray_0().jsArray.length; i++) {
    userObject = $get(courseObject.isArray_0(), i).isObject();
    course = new CourseInfo;
    $setCoursesId(course, valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveGetCourseListKeys() , COURSES_ID_0)))));
    $setCoursesNumber(course, getStringValue(userObject, convertKeyName(COURSES_NUMBER)));
    $setCoursesTitle(course, getStringValue(userObject, convertKeyName(COURSES_TITLE)));
    $setFrequency(course, getStringValue(userObject, convertKeyName(FREQUENCY)));
    $setFrequencyId(course, valueOf(getIntValue(userObject, convertKeyName(FREQUENCY_ID))));
    setCheck(courseList.array, courseList.array.length, course);
  }
  action = new ReceiveGetCourseListAction(courseList);
  return action;
}

function $translateToAction_0(json){
  var action, et, i, jsonObject, t, tempTime, timeId, timeVal, times, userObject;
  jsonObject = $get_0(json, 'success');
  userObject = $get(jsonObject.isArray_0(), 0).isArray_0();
  times = new ArrayList;
  for (i = 0; i < userObject.jsArray.length; i++) {
    tempTime = $get(userObject, i);
    timeId = valueOf(getIntValue(tempTime.isObject(), 'id'));
    timeVal = getStringValue(tempTime.isObject(), 'time');
    t = valueOf_1(timeVal);
    et = new EndTime;
    et.id_0 = timeId;
    et.time = t;
    setCheck(times.array, times.array.length, et);
  }
  action = new ReceiveEndTimesAction(times);
  return action;
}

function $translateToAction_1(json){
  var action, f, facultyList, facultyObject, i, jsonObject;
  jsonObject = $get($get_0(json, 'success').isArray_0(), 0).isArray_0();
  facultyList = new ArrayList;
  for (i = 0; i < jsonObject.jsArray.length; i++) {
    facultyObject = $get(jsonObject, i).isObject();
    f = new Faculty;
    $setId_0(f, valueOf(getIntValue(facultyObject, convertKeyName(($clinit_ReceiveGetFacultyKeys() , ID_1)))));
    $setFirstName(f, getStringValue(facultyObject, convertKeyName(FIRST_NAME)));
    $setLastName(f, getStringValue(facultyObject, convertKeyName(LAST_NAME)));
    $setEmail(f, getStringValue(facultyObject, convertKeyName(EMAIL)));
    $setFacultyTypeId(f, valueOf(getIntValue(facultyObject, convertKeyName(FACULTY_TYPE_ID))));
    setCheck(facultyList.array, facultyList.array.length, f);
  }
  action = new ReceiveGetFacultyAction(facultyList);
  return action;
}

function $translateToAction_2(json){
  var action, arrayObject, f, freqs, frequency, i, id_0, jsonObject, userObject;
  jsonObject = $get_0(json, 'success');
  arrayObject = $get(jsonObject.isArray_0(), 0);
  freqs = new ArrayList;
  for (i = 0; i < arrayObject.isArray_0().jsArray.length; i++) {
    userObject = $get(arrayObject.isArray_0(), i).isObject();
    id_0 = valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveGetFrequenciesKeys() , ID_2))));
    frequency = getStringValue(userObject, convertKeyName(FREQUENCY_0));
    f = new Frequency;
    f.frequency = frequency;
    f.id_0 = id_0;
    setCheck(freqs.array, freqs.array.length, f);
  }
  action = new ReceiveGetFrequenciesAction(freqs);
  return action;
}

function $translateToAction_3(json){
  var action, i, jsonObject, sectionsInfoList, sectionsInfoObject, si;
  jsonObject = $get($get_0(json, 'success').isArray_0(), 0).isArray_0();
  sectionsInfoList = new ArrayList;
  for (i = 0; i < jsonObject.jsArray.length; i++) {
    sectionsInfoObject = $get(jsonObject, i).isObject();
    si = new SectionsInfo;
    $setCoursesTitle_1(si, getStringValue(sectionsInfoObject, convertKeyName(($clinit_ReceiveGetOneFacultySectionInfoKeys() , COURSES_TITLE_0))));
    $setFacultyId(si, valueOf(getIntValue(sectionsInfoObject, convertKeyName(FACULTY_ID))));
    $setTermsName_0(si, getStringValue(sectionsInfoObject, convertKeyName(TERMS_NAME)));
    $setCoursesNumber_1(si, getStringValue(sectionsInfoObject, convertKeyName(COURSES_NUMBER_0)));
    $setSectionsName_0(si, getStringValue(sectionsInfoObject, convertKeyName(SECTIONS_NAME_0)));
    $setCoursesTitle_1(si, getStringValue(sectionsInfoObject, convertKeyName(COURSES_TITLE_0)));
    $setStartTime_1(si, valueOf_1(getStringValue(sectionsInfoObject, convertKeyName(START_TIME))));
    $setEndTime_1(si, valueOf_1(getStringValue(sectionsInfoObject, convertKeyName(END_TIME))));
    $setDays_0(si, getStringValue(sectionsInfoObject, convertKeyName(DAYS_0)));
    $setSectionType_0(si, getStringValue(sectionsInfoObject, convertKeyName(SECTION_TYPE)));
    setCheck(sectionsInfoList.array, sectionsInfoList.array.length, si);
  }
  action = new ReceiveGetOneFacultySectionInfoAction(sectionsInfoList);
  return action;
}

function $translateToAction_4(json){
  var action, i, jsonObject, listObject, type_0, typeList, userObject;
  jsonObject = $get_0(json, 'success');
  listObject = $get(jsonObject.isArray_0(), 0);
  typeList = new ArrayList;
  for (i = 0; i < listObject.isArray_0().jsArray.length; i++) {
    userObject = $get(listObject.isArray_0(), i).isObject();
    type_0 = new SectionType;
    $setId_2(type_0, valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveSectionTypesKeys() , ID_8)))));
    $setType(type_0, getStringValue(userObject, convertKeyName(TYPE_58)));
    setCheck(typeList.array, typeList.array.length, type_0);
  }
  action = new ReceiveGetSectionTypesAction(typeList);
  return action;
}

function $translateToAction_5(json){
  var action, i, jsonObject, listObject, section, sectionList, userObject;
  jsonObject = $get_0(json, 'success');
  listObject = $get(jsonObject.isArray_0(), 0);
  sectionList = new ArrayList;
  for (i = 0; i < listObject.isArray_0().jsArray.length; i++) {
    userObject = $get(listObject.isArray_0(), i).isObject();
    section = new CourseSections;
    $setSectionId(section, valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveGetSectionsKeys() , SECTION_ID)))));
    $setTermsName(section, getStringValue(userObject, convertKeyName(TERMS_NAME_0)));
    $setSectionType(section, getStringValue(userObject, convertKeyName(SECTION_TYPE_0)));
    $setDays(section, getStringValue(userObject, convertKeyName(DAYS_1)));
    $setCoursesNumber_0(section, getStringValue(userObject, convertKeyName(COURSES_NUMBER_1)));
    $setCoursesTitle_0(section, getStringValue(userObject, convertKeyName(COURSES_TITLE_1)));
    $setStartTime(section, valueOf_1(getStringValue(userObject, convertKeyName(START_TIME_0))));
    $setEndTime(section, valueOf_1(getStringValue(userObject, convertKeyName(END_TIME_0))));
    $setSectionsName(section, getStringValue(userObject, convertKeyName(SECTIONS_NAME_1)));
    $setSectionTypeId(section, valueOf(getIntValue(userObject, convertKeyName(SECTION_TYPE_ID_0))));
    $setCoursesId_0(section, valueOf(getIntValue(userObject, convertKeyName(COURSES_ID_1))));
    $setEndTimeId(section, valueOf(getIntValue(userObject, convertKeyName(END_TIME_ID_0))));
    $setStartTimeId(section, valueOf(getIntValue(userObject, convertKeyName(START_TIME_ID_0))));
    $setDaysId(section, valueOf(getIntValue(userObject, convertKeyName(DAYS_ID_0))));
    $setTermsId(section, valueOf(getIntValue(userObject, convertKeyName(TERMS_ID_0))));
    setCheck(sectionList.array, sectionList.array.length, section);
  }
  action = new ReceiveGetSectionsAction(sectionList);
  return action;
}

function $translateToAction_6(json){
  var action, i, jsonObject, st, t, tempTime, timeId, timeVal, times, userObject;
  jsonObject = $get_0(json, 'success');
  userObject = $get(jsonObject.isArray_0(), 0).isArray_0();
  times = new ArrayList;
  for (i = 0; i < userObject.jsArray.length; i++) {
    tempTime = $get(userObject, i);
    timeId = valueOf(getIntValue(tempTime.isObject(), 'id'));
    timeVal = getStringValue(tempTime.isObject(), 'time');
    t = valueOf_1(timeVal);
    st = new StartTime;
    st.id_0 = timeId;
    st.time = t;
    setCheck(times.array, times.array.length, st);
  }
  action = new ReceiveStartTimesAction(times);
  return action;
}

function $translateToAction_7(json){
  var action, i, jsonObject, terms, termsList, userObject;
  jsonObject = $get($get_0(json, 'success').isArray_0(), 0).isArray_0();
  termsList = new ArrayList;
  for (i = 0; i < jsonObject.jsArray.length; i++) {
    userObject = $get(jsonObject, i).isObject();
    terms = new Terms;
    $setId_3(terms, valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveGetTermsKeys() , ID_3)))));
    $setName(terms, getStringValue(userObject, convertKeyName(NAME)));
    setCheck(termsList.array, termsList.array.length, terms);
  }
  action = new ReceiveGetTermsAction(termsList);
  return action;
}

function $translateToAction_8(json){
  var action, coursesNumber, coursesTitle, days, endTime, id_0, jsonObject, section, sectionType, sectionsName, startTime, termsName, userObject;
  jsonObject = $get_0(json, 'success');
  userObject = $get(jsonObject.isArray_0(), 0).isObject();
  id_0 = valueOf(getIntValue(userObject, convertKeyName(($clinit_ReceiveNewSectionKeys() , ID_6))));
  termsName = getStringValue(userObject, convertKeyName(TERMS_NAME_1));
  sectionType = getStringValue(userObject, convertKeyName(SECTION_TYPE_1));
  days = getStringValue(userObject, convertKeyName(DAYS_2));
  coursesNumber = getStringValue(userObject, convertKeyName(COURSES_NUMBER_2));
  coursesTitle = getStringValue(userObject, convertKeyName(COURSES_TITLE_2));
  startTime = valueOf_1(getStringValue(userObject, convertKeyName(START_TIME_1)));
  endTime = valueOf_1(getStringValue(userObject, convertKeyName(END_TIME_1)));
  sectionsName = getStringValue(userObject, convertKeyName(SECTIONS_NAME_2));
  section = new CourseSections;
  section.sectionId = id_0;
  section.termsName = termsName;
  section.sectionType = sectionType;
  section.days = days;
  section.coursesNumber = coursesNumber;
  section.coursesTitle = coursesTitle;
  section.startTime = startTime;
  section.endTime = endTime;
  section.sectionsName = sectionsName;
  action = new ReceiveNewSectionAction(section);
  return action;
}

function convertKeyName(request_enum){
  var enumString, i, variableName, variableNameParts, firstLetter, capitalizedFirstLetter;
  enumString = (request_enum.name_0 != null?request_enum.name_0:'' + request_enum.ordinal).toLowerCase();
  variableNameParts = $split(enumString, '_', 0);
  variableName = variableNameParts[0];
  for (i = 1; i < variableNameParts.length; i++) {
    variableName = variableName + (firstLetter = variableNameParts[i].substr(0, 1) , capitalizedFirstLetter = firstLetter.toUpperCase() , capitalizedFirstLetter + __substr(variableNameParts[i], 1, variableNameParts[i].length - 1));
  }
  return variableName;
}

function getBooleanValue(jsonValue, key){
  var jValue, jsonBoolean;
  jValue = getValue_1(jsonValue, key);
  if (!jValue) {
    throw getJsonException(jsonValue, 'Missing key: ' + key);
  }
  jsonBoolean = jValue.isBoolean();
  if (!jsonBoolean) {
    throw getJsonException(jsonValue, 'Expected boolean value.');
  }
  return jsonBoolean.value_0;
}

function getIntValue(jsonObject, key){
  var intValue, jsonNumber, jsonValue;
  jsonValue = getValue_1(jsonObject, key);
  if (!jsonValue) {
    throw getJsonException(null, 'Value cannot be null');
  }
   else {
    jsonNumber = jsonValue.isNumber();
    if (!jsonNumber) {
      throw new JSONException('Not a Number.');
    }
     else {
      intValue = round_int(jsonNumber.value_0);
    }
  }
  return intValue;
}

function getInvalidJSONException(json, t){
  var jpMsg, sb;
  sb = new StringBuilder;
  if (t) {
    jpMsg = t.detailMessage;
    jpMsg != null && (sb.string += jpMsg , sb);
  }
   else {
    $append_3(sb, null.nullMethod());
  }
  $append_3($append_3($append_3((sb.string += '\n' , sb), variableToString('JSON', htmlEscape(json))), '\n'), stringToUTF8Values(json));
  return new InvalidJsonException(sb.string);
}

function getJsonException(json, message){
  var sb;
  sb = new StringBuilder_0('Invalid JSON content:');
  sb.string += '\n';
  sb.string += message;
  sb.string += '\n';
  $append_3(sb, variableToString('JSON', json.toString$()));
  return new JSONException(sb.string);
}

function getJsonException_0(jo, key){
  var sb;
  sb = new StringBuilder_0('Invalid JSON content:');
  sb.string += '\n';
  $append_3(sb, variableToString('Missing key', key));
  sb.string += '\n';
  $append_3(sb, variableToString('JSON', $toString_0(jo)));
  throw new JSONException(sb.string);
}

function getObjectValue(jsonValue){
  var jsonObject;
  jsonObject = jsonValue.isObject();
  if (!jsonObject) {
    throw getJsonException(jsonValue, 'Expected Object value.');
  }
  return jsonObject;
}

function getStringValue(jsonValue, key){
  var jValue, jsonObject, jString;
  jsonObject = jsonValue;
  jValue = getValue_1(jsonObject, key);
  if (!jValue) {
    return null;
  }
  return !!jValue.isNull() && getJsonException(jValue, 'Expected String Value.') , jString = jValue.isString() , !jString && getJsonException(jValue, 'Expected String Value.') , jString.value_0;
}

function getValue_1(jsonObject, key){
  var jsonValue;
  jsonValue = $get_0(jsonObject, key);
  if (!jsonValue) {
    throw unwrap_5(getJsonException_0(jsonObject, key));
  }
  return jsonValue;
}

function putIntValue(json, key, value_0){
  if (!value_0) {
    throw new JSONException('Integer cannot be null');
  }
  $put(json, key, new JSONNumber(value_0.value_0));
}

function putStringValue(json, key, value_0){
  if (value_0 == null) {
    throw new JSONException('String cannot be null');
  }
  $put(json, key, new JSONString(value_0));
}

function arrayToString(array){
  var count, item_0, item$iterator, sb, size_0;
  sb = new StringBuffer;
  count = 0;
  size_0 = array.array.length;
  for (item$iterator = new AbstractList$IteratorImpl(array); item$iterator.i < item$iterator.this$01_0.size_1();) {
    item_0 = (checkCriticalElement(item$iterator.i < item$iterator.this$01_0.size_1()) , dynamicCastToString(item$iterator.this$01_0.get_0(item$iterator.last = item$iterator.i++)));
    sb.string += item_0;
    ++count;
    count != size_0 && (sb.string += ', ' , sb);
  }
  return sb.string;
}

function stringToUTF8Values(str){
  var b, i, sb, t;
  try {
    b = getBytesUtf8(str);
    sb = new StringBuilder;
    for (i = 0; i < b.length; ++i) {
      $append_3($append_1((sb.string += '[' , sb), b[i]), '] ');
    }
    return sb.string;
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 11)) {
      t = $e0;
      return 'Failed to stringToUTF8Values(): ' + $toString(t);
    }
     else 
      throw unwrap_5($e0);
  }
}

function variableToString(name_0, value_0){
  var result;
  result = ' [' + name_0 + ': ' + value_0 + ']';
  return result;
}

defineClass(655, 654, $intern_26);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_BaseViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'BaseViewImpl', 655);
function $setFrequencyDropdown(this$static, dropdown){
  this$static.frequencyDropdown = dropdown;
}

function AddCourseViewImpl(){
  $initWidget(this, $build_baseContainer(new AddCourseViewImpl_AddCourseViewImplUiBinderImpl$Widgets(this)));
}

defineClass(403, 655, $intern_26, AddCourseViewImpl);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AddCourseViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AddCourseViewImpl', 403);
function $build_baseContainer(this$static){
  var __attachRecord__, baseContainer, f_VerticalPanel1, f_HorizontalPanel7, cancelButton, createButton;
  baseContainer = new HTMLPanel($html1(this$static.domId0).html);
  __attachRecord__ = attachToDom(baseContainer.element);
  $get_1(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(baseContainer, (f_VerticalPanel1 = new VerticalPanel , $setHorizontalAlignment_0(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_7(f_VerticalPanel1, this$static.f_Label2) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.f_Label2, ALIGN_CENTER) , $add_7(f_VerticalPanel1, this$static.f_Grid3) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.f_Grid3, ALIGN_CENTER) , $add_7(f_VerticalPanel1, (f_HorizontalPanel7 = new HorizontalPanel , $add_2(f_HorizontalPanel7, (cancelButton = new Button , $setInnerText(cancelButton.element, 'Cancel') , $addDomHandler(cancelButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cancelButton)) , $add_2(f_HorizontalPanel7, (createButton = new Button , $setInnerText(createButton.element, 'Create') , $addDomHandler(createButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (null , TYPE_0)) , createButton)) , f_HorizontalPanel7)) , f_VerticalPanel1), $get_1(this$static.domId0Element));
  return baseContainer;
}

function AddCourseViewImpl_AddCourseViewImplUiBinderImpl$Widgets(owner){
  var style, f_Label4, courseNameField, f_Label5, courseNumberField, f_Label6, frequencyDropdown;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new AddCourseViewImpl_AddCourseViewImplUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new AddCourseViewImpl_AddCourseViewImplUiBinderImpl$Widgets$2(this);
  this.owner = owner;
  style = (new AddCourseViewImpl_AddCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_AddCourseViewImpl_AddCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_0);
  $ensureInjected(style);
  this.domId0 = $createUniqueId($doc);
  this.f_Label2 = new Label;
  $setStyleName(this.f_Label2, 'h1');
  $setAutoHorizontalAlignment(this.f_Label2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setWidth(this.f_Label2, '292px');
  $setText_0(this.f_Label2, 'Add New Course');
  this.f_Grid3 = new Grid;
  $resize(this.f_Grid3, 3, 2);
  $setWidget(this.f_Grid3, 0, 0, (f_Label4 = new Label , $setTextOrHtml(f_Label4.directionalTextHelper, 'Course Name:') , $updateHorizontalAlignment(f_Label4) , f_Label4));
  $setWidget(this.f_Grid3, 0, 1, (courseNameField = new TextBox , this.owner.courseNameField = courseNameField , courseNameField));
  $setWidget(this.f_Grid3, 1, 0, (f_Label5 = new Label , $setTextOrHtml(f_Label5.directionalTextHelper, 'Course Number:') , $updateHorizontalAlignment(f_Label5) , f_Label5));
  $setWidget(this.f_Grid3, 1, 1, (courseNumberField = new TextBox , this.owner.courseNumberField = courseNumberField , courseNumberField));
  $setWidget(this.f_Grid3, 2, 0, (f_Label6 = new Label , $setTextOrHtml(f_Label6.directionalTextHelper, 'Required Frequency:') , $updateHorizontalAlignment(f_Label6) , f_Label6));
  $setWidget(this.f_Grid3, 2, 1, (frequencyDropdown = new ListBox , this.owner.frequencyDropdown = frequencyDropdown , frequencyDropdown));
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(422, 1, {}, AddCourseViewImpl_AddCourseViewImplUiBinderImpl$Widgets);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AddCourseViewImpl_1AddCourseViewImplUiBinderImpl$Widgets_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AddCourseViewImpl_AddCourseViewImplUiBinderImpl/Widgets', 422);
function AddCourseViewImpl_AddCourseViewImplUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(423, 1, $intern_35, AddCourseViewImpl_AddCourseViewImplUiBinderImpl$Widgets$1);
_.onClick = function onClick(event_0){
  $submitNewCourse(dynamicCast(this.this$11.owner.presenter, 619));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AddCourseViewImpl_1AddCourseViewImplUiBinderImpl$Widgets$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AddCourseViewImpl_AddCourseViewImplUiBinderImpl/Widgets/1', 423);
function AddCourseViewImpl_AddCourseViewImplUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(424, 1, $intern_35, AddCourseViewImpl_AddCourseViewImplUiBinderImpl$Widgets$2);
_.onClick = function onClick_0(event_0){
  $returnToViewCourses(dynamicCast(this.this$11.owner.presenter, 619));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AddCourseViewImpl_1AddCourseViewImplUiBinderImpl$Widgets$2_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AddCourseViewImpl_AddCourseViewImplUiBinderImpl/Widgets/2', 424);
function AddCourseViewImpl_AddCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(501, 1, {}, AddCourseViewImpl_AddCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_0;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AddCourseViewImpl_1AddCourseViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AddCourseViewImpl_AddCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 501);
function $ensureInjected(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function AddCourseViewImpl_AddCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(502, 1, {}, AddCourseViewImpl_AddCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AddCourseViewImpl_1AddCourseViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AddCourseViewImpl_AddCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 502);
function $clinit_AddCourseViewImpl_AddCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_AddCourseViewImpl_AddCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_0 = new AddCourseViewImpl_AddCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html1(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_3(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $setSectionEndTimeComboBox(this$static, sectionEndTimeComboBox){
  this$static.sectionEndTimeComboBox = sectionEndTimeComboBox;
}

function $setSectionStartTimeComboBox(this$static, sectionStartTimeComboBox){
  this$static.sectionStartTimeComboBox = sectionStartTimeComboBox;
}

function $setSectionTypeComboBox(this$static, sectionTypeComboBox){
  this$static.sectionTypeComboBox = sectionTypeComboBox;
}

function $setTermComboBox(this$static, termComboBox){
  this$static.termComboBox = termComboBox;
}

function AddSectionViewImpl(){
  $initWidget(this, $build_f_HTMLPanel1(new AddSectionViewImpl_AddSectionViewImplUiBinderImpl$Widgets(this)));
}

defineClass(404, 655, $intern_26, AddSectionViewImpl);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AddSectionViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AddSectionViewImpl', 404);
function $build_f_HTMLPanel1(this$static){
  var __attachRecord__, f_HTMLPanel1, addSectionPanel, f_Grid2, f_HorizontalPanel3, f_HorizontalSplitPanel4, termLabel, termComboBox, generatedNameLabel, generatedNameTextBox, generatedCRNLabel, generatedCRNTextBox, sectionTypeLabel, sectionTypeComboBox, sectionStartTimeLabel, sectionStartTimeComboBox, sectionEndTimeLabel, sectionEndTimeComboBox, mondayCheckBox, tuesdayCheckBox, wednesdayCheckBox, thursdayCheckBox, fridayCheckBox, cancelButton, createButton;
  f_HTMLPanel1 = new HTMLPanel($html1_0(this$static.domId0).html);
  $setPropertyImpl(f_HTMLPanel1.element.style, 'width', '100%');
  $setPropertyImpl(f_HTMLPanel1.element.style, 'height', '100%');
  __attachRecord__ = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (addSectionPanel = new VerticalPanel , $setHorizontalAlignment_0(addSectionPanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setVerticalAlignment(addSectionPanel, ($clinit_HasVerticalAlignment() , ALIGN_TOP)) , $add_7(addSectionPanel, this$static.addSectionTitle) , $setCellHeight(addSectionPanel, this$static.addSectionTitle, 'sectionTitle') , $add_7(addSectionPanel, (f_Grid2 = new Grid , $resizeColumns(f_Grid2, 2) , $resizeRows(f_Grid2, 6) , $setWidget(f_Grid2, 0, 0, (termLabel = new Label , $setTextOrHtml(termLabel.directionalTextHelper, 'Term:') , $updateHorizontalAlignment(termLabel) , termLabel)) , $setWidget(f_Grid2, 0, 1, (termComboBox = new ListBox , this$static.owner.termComboBox = termComboBox , termComboBox)) , $setWidget(f_Grid2, 1, 0, (generatedNameLabel = new Label , $setTextOrHtml(generatedNameLabel.directionalTextHelper, 'Generated Name:') , $updateHorizontalAlignment(generatedNameLabel) , generatedNameLabel)) , $setWidget(f_Grid2, 1, 1, (generatedNameTextBox = new TextBox , $setPropertyString(generatedNameTextBox.element, 'value', 'Section-Name-Here') , this$static.owner.generatedNameTextBox = generatedNameTextBox , generatedNameTextBox)) , $setWidget(f_Grid2, 2, 0, (generatedCRNLabel = new Label , $setTextOrHtml(generatedCRNLabel.directionalTextHelper, 'Generated CRN#:') , $updateHorizontalAlignment(generatedCRNLabel) , generatedCRNLabel)) , $setWidget(f_Grid2, 2, 1, (generatedCRNTextBox = new TextBox , $setPropertyString(generatedCRNTextBox.element, 'value', 'CRN#-Here') , generatedCRNTextBox)) , $setWidget(f_Grid2, 3, 0, (sectionTypeLabel = new Label , $setTextOrHtml(sectionTypeLabel.directionalTextHelper, 'Section Type:') , $updateHorizontalAlignment(sectionTypeLabel) , sectionTypeLabel)) , $setWidget(f_Grid2, 3, 1, (sectionTypeComboBox = new ListBox , this$static.owner.sectionTypeComboBox = sectionTypeComboBox , sectionTypeComboBox)) , $setWidget(f_Grid2, 4, 0, (sectionStartTimeLabel = new Label , $setTextOrHtml(sectionStartTimeLabel.directionalTextHelper, 'Start Time:') , $updateHorizontalAlignment(sectionStartTimeLabel) , sectionStartTimeLabel)) , $setWidget(f_Grid2, 4, 1, (sectionStartTimeComboBox = new ListBox , this$static.owner.sectionStartTimeComboBox = sectionStartTimeComboBox , sectionStartTimeComboBox)) , $setWidget(f_Grid2, 5, 0, (sectionEndTimeLabel = new Label , $setTextOrHtml(sectionEndTimeLabel.directionalTextHelper, 'End Time:') , $updateHorizontalAlignment(sectionEndTimeLabel) , sectionEndTimeLabel)) , $setWidget(f_Grid2, 5, 1, (sectionEndTimeComboBox = new ListBox , this$static.owner.sectionEndTimeComboBox = sectionEndTimeComboBox , sectionEndTimeComboBox)) , f_Grid2)) , $add_7(addSectionPanel, (f_HorizontalPanel3 = new HorizontalPanel , $add_2(f_HorizontalPanel3, (mondayCheckBox = new CheckBox , $setValue_0(mondayCheckBox, ($clinit_Boolean() , $clinit_Boolean() , TRUE_0)) , $setTextOrHtml(mondayCheckBox.directionalTextHelper, 'M') , this$static.owner.mondayCheckBox = mondayCheckBox , mondayCheckBox)) , $add_2(f_HorizontalPanel3, (tuesdayCheckBox = new CheckBox , $setTextOrHtml(tuesdayCheckBox.directionalTextHelper, 'T') , this$static.owner.tuesdayCheckBox = tuesdayCheckBox , tuesdayCheckBox)) , $add_2(f_HorizontalPanel3, (wednesdayCheckBox = new CheckBox , $setValue_0(wednesdayCheckBox, (null , TRUE_0)) , $setTextOrHtml(wednesdayCheckBox.directionalTextHelper, 'W') , this$static.owner.wednesdayCheckBox = wednesdayCheckBox , wednesdayCheckBox)) , $add_2(f_HorizontalPanel3, (thursdayCheckBox = new CheckBox , $setTextOrHtml(thursdayCheckBox.directionalTextHelper, 'R') , this$static.owner.thursdayCheckBox = thursdayCheckBox , thursdayCheckBox)) , $add_2(f_HorizontalPanel3, (fridayCheckBox = new CheckBox , $setValue_0(fridayCheckBox, (null , TRUE_0)) , $setTextOrHtml(fridayCheckBox.directionalTextHelper, 'F') , this$static.owner.fridayCheckBox = fridayCheckBox , fridayCheckBox)) , f_HorizontalPanel3)) , $add_7(addSectionPanel, (f_HorizontalSplitPanel4 = new HorizontalSplitPanel , $add_3(f_HorizontalSplitPanel4, (cancelButton = new Button , $setInnerText(cancelButton.element, 'Cancel') , $addDomHandler(cancelButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cancelButton)) , $add_3(f_HorizontalSplitPanel4, (createButton = new Button , $setInnerText(createButton.element, 'Create') , $addDomHandler(createButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (null , TYPE_0)) , createButton)) , $setPropertyImpl(f_HorizontalSplitPanel4.element.style, 'height', '30px') , f_HorizontalSplitPanel4)) , $setClassName(addSectionPanel.element, 'modalPanel') , $setPropertyImpl(addSectionPanel.element.style, 'width', '100%') , $setPropertyImpl(addSectionPanel.element.style, 'height', '100%') , addSectionPanel), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function AddSectionViewImpl_AddSectionViewImplUiBinderImpl$Widgets(owner){
  var style;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new AddSectionViewImpl_AddSectionViewImplUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new AddSectionViewImpl_AddSectionViewImplUiBinderImpl$Widgets$2(this);
  this.owner = owner;
  style = (new AddSectionViewImpl_AddSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_AddSectionViewImpl_AddSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_1);
  $ensureInjected_0(style);
  this.domId0 = $createUniqueId($doc);
  this.addSectionTitle = new Label;
  $setStyleName(this.addSectionTitle, 'viewCoursesHeader');
  $setText_0(this.addSectionTitle, 'Add Section');
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(425, 1, {}, AddSectionViewImpl_AddSectionViewImplUiBinderImpl$Widgets);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AddSectionViewImpl_1AddSectionViewImplUiBinderImpl$Widgets_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AddSectionViewImpl_AddSectionViewImplUiBinderImpl/Widgets', 425);
function AddSectionViewImpl_AddSectionViewImplUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(426, 1, $intern_35, AddSectionViewImpl_AddSectionViewImplUiBinderImpl$Widgets$1);
_.onClick = function onClick_1(event_0){
  $addSection(dynamicCast(this.this$11.owner.presenter, 620));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AddSectionViewImpl_1AddSectionViewImplUiBinderImpl$Widgets$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AddSectionViewImpl_AddSectionViewImplUiBinderImpl/Widgets/1', 426);
function AddSectionViewImpl_AddSectionViewImplUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(427, 1, $intern_35, AddSectionViewImpl_AddSectionViewImplUiBinderImpl$Widgets$2);
_.onClick = function onClick_2(event_0){
  $cancelAddSection(dynamicCast(this.this$11.owner.presenter, 620));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AddSectionViewImpl_1AddSectionViewImplUiBinderImpl$Widgets$2_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AddSectionViewImpl_AddSectionViewImplUiBinderImpl/Widgets/2', 427);
function AddSectionViewImpl_AddSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(503, 1, {}, AddSectionViewImpl_AddSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_1;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AddSectionViewImpl_1AddSectionViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AddSectionViewImpl_AddSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 503);
function $ensureInjected_0(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function AddSectionViewImpl_AddSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(504, 1, {}, AddSectionViewImpl_AddSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AddSectionViewImpl_1AddSectionViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AddSectionViewImpl_AddSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 504);
function $clinit_AddSectionViewImpl_AddSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_AddSectionViewImpl_AddSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_1 = new AddSectionViewImpl_AddSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html1_0(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_3(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $onAddCourseButtonClick(this$static){
  $show(this$static.addCoursePanel);
  $setVisible_0(this$static.addCoursePanel, true);
  $center(this$static.addCoursePanel);
}

function $onMakeRequestButtonClick(this$static){
  $show(this$static.makeRequestPanel);
  $setVisible_0(this$static.makeRequestPanel, true);
  $center(this$static.makeRequestPanel);
}

function AdminCalendarViewImpl(){
  $initWidget(this, $build_baseContainer_0(new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets(this)));
  $hide(this.addCoursePanel);
  $hide(this.makeRequestPanel);
}

defineClass(405, 655, $intern_26, AdminCalendarViewImpl);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl', 405);
function $build_baseContainer_0(this$static){
  var __attachRecord__, baseContainer, f_VerticalPanel1, addCoursePanel, makeRequestPanel, f_HTMLPanel56, __attachRecord___0, f_Label57, requestSectionSelectBox, f_ListBox58, f_Label59, f_TextBox60, f_HorizontalPanel61, makeRequestCancelButton, makeRequestSubmitButton;
  baseContainer = new HTMLPanel($html7(this$static.domId0, this$static.domId1, this$static.domId14).html);
  __attachRecord__ = attachToDom(baseContainer.element);
  $get_1(this$static.domId0Element);
  $get_1(this$static.domId1Element);
  $get_1(this$static.domId14Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(baseContainer, (f_VerticalPanel1 = new VerticalPanel , $add_7(f_VerticalPanel1, this$static.f_HorizontalPanel2) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.f_HorizontalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setCellHeight(f_VerticalPanel1, this$static.f_HorizontalPanel2, '5%') , $add_7(f_VerticalPanel1, this$static.pageTitle) , $setCellHeight(f_VerticalPanel1, this$static.pageTitle, '15%') , $add_7(f_VerticalPanel1, this$static.calendarBody) , $setCellHeight(f_VerticalPanel1, this$static.calendarBody, '80%') , $setPropertyImpl(f_VerticalPanel1.element.style, 'width', '100%') , $setPropertyImpl(f_VerticalPanel1.element.style, 'height', '100%') , f_VerticalPanel1), $get_1(this$static.domId0Element));
  $addAndReplaceElement(baseContainer, (addCoursePanel = new PopupPanel , $add_5(addCoursePanel, $build_mainPanel(this$static)) , $setGlassEnabled(addCoursePanel) , addCoursePanel.autoHide = true , $setPropertyImpl(addCoursePanel.element.style, 'visibility', 'hidden') , !!addCoursePanel.glass && $setPropertyImpl(addCoursePanel.glass.style, 'visibility', 'hidden') , addCoursePanel.previewAllNativeEvents = true , $setWidth_0(addCoursePanel, '418') , $setHeight_0(addCoursePanel, '418') , this$static.owner.addCoursePanel = addCoursePanel , addCoursePanel), $get_1(this$static.domId1Element));
  $addAndReplaceElement(baseContainer, (makeRequestPanel = new PopupPanel , $add_5(makeRequestPanel, (f_HTMLPanel56 = new HTMLPanel($html6(this$static.domId15, this$static.domId16, this$static.domId17, this$static.domId18, this$static.domId19, this$static.domId20).html) , $setPropertyImpl(f_HTMLPanel56.element.style, 'width', '100%') , $setPropertyImpl(f_HTMLPanel56.element.style, 'height', '300px') , __attachRecord___0 = attachToDom(f_HTMLPanel56.element) , $get_1(this$static.domId15Element) , $get_1(this$static.domId16Element) , $get_1(this$static.domId17Element) , $get_1(this$static.domId18Element) , $get_1(this$static.domId19Element) , $get_1(this$static.domId20Element) , __attachRecord___0.origParent?$insertBefore(__attachRecord___0.origParent, __attachRecord___0.element, __attachRecord___0.origSibling):orphan(__attachRecord___0.element) , $addAndReplaceElement(f_HTMLPanel56, (f_Label57 = new Label , $setClassName(f_Label57.element, 'label') , $setAutoHorizontalAlignment(f_Label57, ALIGN_CENTER) , $setTextOrHtml(f_Label57.directionalTextHelper, 'Make Request') , $updateHorizontalAlignment(f_Label57) , $setPropertyImpl(f_Label57.element.style, 'height', '51px') , f_Label57), $get_1(this$static.domId15Element)) , $addAndReplaceElement(f_HTMLPanel56, (requestSectionSelectBox = new Label , $setClassName(requestSectionSelectBox.element, 'sublabel') , $setPropertyImpl(requestSectionSelectBox.element.style, 'width', '369px') , $setTextOrHtml(requestSectionSelectBox.directionalTextHelper, 'Select Section:') , $updateHorizontalAlignment(requestSectionSelectBox) , $setPropertyImpl(requestSectionSelectBox.element.style, 'height', '36px') , requestSectionSelectBox), $get_1(this$static.domId16Element)) , $addAndReplaceElement(f_HTMLPanel56, (f_ListBox58 = new ListBox , $setClassName(f_ListBox58.element, 'ListBox') , f_ListBox58), $get_1(this$static.domId17Element)) , $addAndReplaceElement(f_HTMLPanel56, (f_Label59 = new Label , $setClassName(f_Label59.element, 'sublabel') , $setPropertyImpl(f_Label59.element.style, 'width', '153px') , $setTextOrHtml(f_Label59.directionalTextHelper, 'Request Details:') , $updateHorizontalAlignment(f_Label59) , $setPropertyImpl(f_Label59.element.style, 'height', '36px') , f_Label59), $get_1(this$static.domId18Element)) , $addAndReplaceElement(f_HTMLPanel56, (f_TextBox60 = new TextBox , $setPropertyImpl(f_TextBox60.element.style, 'width', '417px') , $setPropertyImpl(f_TextBox60.element.style, 'height', '65px') , f_TextBox60), $get_1(this$static.domId19Element)) , $addAndReplaceElement(f_HTMLPanel56, (f_HorizontalPanel61 = new HorizontalPanel , $add_2(f_HorizontalPanel61, (makeRequestCancelButton = new Button , $setPropertyImpl(makeRequestCancelButton.element.style, 'width', '114px') , $setInnerText(makeRequestCancelButton.element, 'Cancel') , $setPropertyImpl(makeRequestCancelButton.element.style, 'height', '46px') , $addDomHandler(makeRequestCancelButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , makeRequestCancelButton)) , $add_2(f_HorizontalPanel61, (makeRequestSubmitButton = new Button , $setPropertyImpl(makeRequestSubmitButton.element.style, 'width', '114px') , $setInnerText(makeRequestSubmitButton.element, 'Create') , $setPropertyImpl(makeRequestSubmitButton.element.style, 'height', '46px') , makeRequestSubmitButton)) , $setPropertyImpl(f_HorizontalPanel61.element.style, 'width', '467px') , $setPropertyImpl(f_HorizontalPanel61.element.style, 'height', '82px') , f_HorizontalPanel61), $get_1(this$static.domId20Element)) , f_HTMLPanel56)) , $setGlassEnabled(makeRequestPanel) , makeRequestPanel.autoHide = true , $setPropertyImpl(makeRequestPanel.element.style, 'visibility', 'hidden') , !!makeRequestPanel.glass && $setPropertyImpl(makeRequestPanel.glass.style, 'visibility', 'hidden') , makeRequestPanel.previewAllNativeEvents = true , $setWidth_0(makeRequestPanel, '473px') , this$static.owner.makeRequestPanel = makeRequestPanel , makeRequestPanel), $get_1(this$static.domId14Element));
  return baseContainer;
}

function $build_mainPanel(this$static){
  var __attachRecord__, mainPanel, f_Label35, f_Label36, f_ListBox37, f_Label38, f_ListBox39, f_Label40, f_ListBox41, f_HorizontalPanel42, f_Label43, f_Label44, f_HorizontalPanel45, f_Label48, f_HorizontalPanel49, f_CheckBox50, f_CheckBox51, f_CheckBox52, f_CheckBox53, f_CheckBox54, f_HorizontalPanel55;
  mainPanel = new HTMLPanel($html5(this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12, this$static.domId13).html);
  $setPropertyImpl(mainPanel.element.style, 'height', '450px');
  __attachRecord__ = attachToDom(mainPanel.element);
  $get_1(this$static.domId2Element);
  $get_1(this$static.domId3Element);
  $get_1(this$static.domId4Element);
  $get_1(this$static.domId5Element);
  $get_1(this$static.domId6Element);
  $get_1(this$static.domId7Element);
  $get_1(this$static.domId8Element);
  $get_1(this$static.domId9Element);
  $get_1(this$static.domId10Element);
  $get_1(this$static.domId11Element);
  $get_1(this$static.domId12Element);
  $get_1(this$static.domId13Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(mainPanel, (f_Label35 = new Label , $setClassName(f_Label35.element, 'label') , $setAutoHorizontalAlignment(f_Label35, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setTextOrHtml(f_Label35.directionalTextHelper, 'Add Class to Schedule') , $updateHorizontalAlignment(f_Label35) , $setPropertyImpl(f_Label35.element.style, 'height', '51px') , f_Label35), $get_1(this$static.domId2Element));
  $addAndReplaceElement(mainPanel, (f_Label36 = new Label , $setClassName(f_Label36.element, 'sublabel') , $setPropertyImpl(f_Label36.element.style, 'width', '104px') , $setTextOrHtml(f_Label36.directionalTextHelper, 'Course') , $updateHorizontalAlignment(f_Label36) , $setPropertyImpl(f_Label36.element.style, 'height', '36px') , f_Label36), $get_1(this$static.domId3Element));
  $addAndReplaceElement(mainPanel, (f_ListBox37 = new ListBox , $setClassName(f_ListBox37.element, 'ListBox') , f_ListBox37), $get_1(this$static.domId4Element));
  $addAndReplaceElement(mainPanel, (f_Label38 = new Label , $setClassName(f_Label38.element, 'sublabel') , $setPropertyImpl(f_Label38.element.style, 'width', '153px') , $setTextOrHtml(f_Label38.directionalTextHelper, 'Term/Semester') , $updateHorizontalAlignment(f_Label38) , $setPropertyImpl(f_Label38.element.style, 'height', '36px') , f_Label38), $get_1(this$static.domId5Element));
  $addAndReplaceElement(mainPanel, (f_ListBox39 = new ListBox , $setClassName(f_ListBox39.element, 'ListBox') , f_ListBox39), $get_1(this$static.domId6Element));
  $addAndReplaceElement(mainPanel, (f_Label40 = new Label , $setClassName(f_Label40.element, 'sublabel') , $setPropertyImpl(f_Label40.element.style, 'width', '153px') , $setTextOrHtml(f_Label40.directionalTextHelper, 'Instructor') , $updateHorizontalAlignment(f_Label40) , $setPropertyImpl(f_Label40.element.style, 'height', '36px') , f_Label40), $get_1(this$static.domId7Element));
  $addAndReplaceElement(mainPanel, (f_ListBox41 = new ListBox , $setClassName(f_ListBox41.element, 'ListBox') , f_ListBox41), $get_1(this$static.domId8Element));
  $addAndReplaceElement(mainPanel, (f_HorizontalPanel42 = new HorizontalPanel , $add_2(f_HorizontalPanel42, (f_Label43 = new Label , $setAutoHorizontalAlignment(f_Label43, ALIGN_CENTER) , $setPropertyImpl(f_Label43.element.style, 'width', '140px') , $setTextOrHtml(f_Label43.directionalTextHelper, 'Start Time:') , $updateHorizontalAlignment(f_Label43) , f_Label43)) , $add_2(f_HorizontalPanel42, (f_Label44 = new Label , $setAutoHorizontalAlignment(f_Label44, ALIGN_CENTER) , $setPropertyImpl(f_Label44.element.style, 'width', '177px') , $setTextOrHtml(f_Label44.directionalTextHelper, 'End Time:') , $updateHorizontalAlignment(f_Label44) , f_Label44)) , $setPropertyImpl(f_HorizontalPanel42.element.style, 'width', '465px') , $setPropertyImpl(f_HorizontalPanel42.element.style, 'height', '37px') , f_HorizontalPanel42), $get_1(this$static.domId9Element));
  $addAndReplaceElement(mainPanel, (f_HorizontalPanel45 = new HorizontalPanel , $add_2(f_HorizontalPanel45, this$static.f_ListBox46) , $setCellHorizontalAlignment(f_HorizontalPanel45, this$static.f_ListBox46, ALIGN_CENTER) , $add_2(f_HorizontalPanel45, this$static.f_ListBox47) , $setCellHorizontalAlignment(f_HorizontalPanel45, this$static.f_ListBox47, ALIGN_CENTER) , $setPropertyImpl(f_HorizontalPanel45.element.style, 'width', '465px') , $setPropertyImpl(f_HorizontalPanel45.element.style, 'height', '37px') , f_HorizontalPanel45), $get_1(this$static.domId10Element));
  $addAndReplaceElement(mainPanel, (f_Label48 = new Label , $setClassName(f_Label48.element, 'sublabel') , $setPropertyImpl(f_Label48.element.style, 'width', '153px') , $setTextOrHtml(f_Label48.directionalTextHelper, 'Days:') , $updateHorizontalAlignment(f_Label48) , $setPropertyImpl(f_Label48.element.style, 'height', '36px') , f_Label48), $get_1(this$static.domId11Element));
  $addAndReplaceElement(mainPanel, (f_HorizontalPanel49 = new HorizontalPanel , $setHorizontalAlignment(f_HorizontalPanel49, ALIGN_RIGHT) , $add_2(f_HorizontalPanel49, (f_CheckBox50 = new CheckBox , $setTextOrHtml(f_CheckBox50.directionalTextHelper, 'M') , f_CheckBox50)) , $add_2(f_HorizontalPanel49, (f_CheckBox51 = new CheckBox , $setTextOrHtml(f_CheckBox51.directionalTextHelper, 'T') , f_CheckBox51)) , $add_2(f_HorizontalPanel49, (f_CheckBox52 = new CheckBox , $setTextOrHtml(f_CheckBox52.directionalTextHelper, 'W') , f_CheckBox52)) , $add_2(f_HorizontalPanel49, (f_CheckBox53 = new CheckBox , $setTextOrHtml(f_CheckBox53.directionalTextHelper, 'T') , f_CheckBox53)) , $add_2(f_HorizontalPanel49, (f_CheckBox54 = new CheckBox , $setTextOrHtml(f_CheckBox54.directionalTextHelper, 'F') , f_CheckBox54)) , $setPropertyImpl(f_HorizontalPanel49.element.style, 'width', '352px') , $setPropertyImpl(f_HorizontalPanel49.element.style, 'height', '51px') , f_HorizontalPanel49), $get_1(this$static.domId12Element));
  $addAndReplaceElement(mainPanel, (f_HorizontalPanel55 = new HorizontalPanel , $add_2(f_HorizontalPanel55, this$static.addCourseCancelButton) , $setCellHorizontalAlignment(f_HorizontalPanel55, this$static.addCourseCancelButton, ALIGN_CENTER) , $add_2(f_HorizontalPanel55, this$static.addCourseSubmitButton) , $setCellHorizontalAlignment(f_HorizontalPanel55, this$static.addCourseSubmitButton, ALIGN_CENTER) , $setPropertyImpl(f_HorizontalPanel55.element.style, 'width', '465px') , $setPropertyImpl(f_HorizontalPanel55.element.style, 'height', '82px') , f_HorizontalPanel55), $get_1(this$static.domId13Element));
  return mainPanel;
}

function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets(owner){
  var style, saveCourseInfo, deleteCourse, sb, f_Label5, viewSelect, f_Label6, termSelect, addCourseButton, sb_0, f_Label8, f_Label9, courseName, f_Label13, f_HorizontalPanel20, f_Label26, startTimeSelect, f_Label27, endTimeSelect, f_Label28, instructorSelect, f_Label31, tablePanel, f_Label33, f_Label34, makeRequestButton, sb_1, requestsScrollPanel, f_Button3, homeButton, scheduleButton, coursesButton, accountButton, f_Label4, sb_2, requestsPanel;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$2(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$3(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$4;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$5(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$6(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$7(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8 = new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$8(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9 = new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$9(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10 = new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$10(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11 = new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$11(this);
  this.owner = owner;
  style = (new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_2);
  $ensureInjected_1(style);
  this.domId2 = $createUniqueId($doc);
  this.domId3 = $createUniqueId($doc);
  this.domId4 = $createUniqueId($doc);
  this.domId5 = $createUniqueId($doc);
  this.domId6 = $createUniqueId($doc);
  this.domId7 = $createUniqueId($doc);
  this.domId8 = $createUniqueId($doc);
  this.domId9 = $createUniqueId($doc);
  this.domId10 = $createUniqueId($doc);
  this.domId11 = $createUniqueId($doc);
  this.domId12 = $createUniqueId($doc);
  this.domId13 = $createUniqueId($doc);
  this.domId15 = $createUniqueId($doc);
  this.domId16 = $createUniqueId($doc);
  this.domId17 = $createUniqueId($doc);
  this.domId18 = $createUniqueId($doc);
  this.domId19 = $createUniqueId($doc);
  this.domId20 = $createUniqueId($doc);
  this.domId0 = $createUniqueId($doc);
  this.domId1 = $createUniqueId($doc);
  this.domId14 = $createUniqueId($doc);
  this.f_Label11 = new Label;
  $setWidth(this.f_Label11, '50%');
  $setText_0(this.f_Label11, 'Section');
  this.f_TextBox12 = new TextBox;
  $setWidth(this.f_TextBox12, '85%');
  $setText_1(this.f_TextBox12, 'N/A');
  this.f_Label15 = new Label;
  $setText_0(this.f_Label15, 'M');
  this.f_Label16 = new Label;
  $setText_0(this.f_Label16, 'T');
  this.f_Label17 = new Label;
  $setText_0(this.f_Label17, 'W');
  this.f_Label18 = new Label;
  $setText_0(this.f_Label18, 'H');
  this.f_Label19 = new Label;
  $setText_0(this.f_Label19, 'F');
  this.f_SimpleCheckBox21 = new SimpleCheckBox;
  $setWidth(this.f_SimpleCheckBox21, '20');
  this.f_SimpleCheckBox22 = new SimpleCheckBox;
  $setWidth(this.f_SimpleCheckBox22, '20');
  this.f_SimpleCheckBox23 = new SimpleCheckBox;
  $setWidth(this.f_SimpleCheckBox23, '20');
  this.f_SimpleCheckBox24 = new SimpleCheckBox;
  $setWidth(this.f_SimpleCheckBox24, '20');
  this.f_SimpleCheckBox25 = new SimpleCheckBox;
  $setWidth(this.f_SimpleCheckBox25, '20');
  this.f_HorizontalPanel10 = new HorizontalPanel;
  $add_2(this.f_HorizontalPanel10, this.f_Label11);
  $setCellVerticalAlignment_1(this.f_HorizontalPanel10, this.f_Label11, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
  $setCellWidth(this.f_HorizontalPanel10, this.f_Label11, '50%');
  $add_2(this.f_HorizontalPanel10, this.f_TextBox12);
  $setCellWidth(this.f_HorizontalPanel10, this.f_TextBox12, '50%');
  $setWidth(this.f_HorizontalPanel10, '100%');
  this.f_HorizontalPanel14 = new HorizontalPanel;
  $add_2(this.f_HorizontalPanel14, this.f_Label15);
  $setCellHorizontalAlignment(this.f_HorizontalPanel14, this.f_Label15, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setCellWidth(this.f_HorizontalPanel14, this.f_Label15, '20%');
  $add_2(this.f_HorizontalPanel14, this.f_Label16);
  $setCellHorizontalAlignment(this.f_HorizontalPanel14, this.f_Label16, ALIGN_CENTER);
  $setCellWidth(this.f_HorizontalPanel14, this.f_Label16, '20%');
  $add_2(this.f_HorizontalPanel14, this.f_Label17);
  $setCellHorizontalAlignment(this.f_HorizontalPanel14, this.f_Label17, ALIGN_CENTER);
  $setCellWidth(this.f_HorizontalPanel14, this.f_Label17, '20%');
  $add_2(this.f_HorizontalPanel14, this.f_Label18);
  $setCellHorizontalAlignment(this.f_HorizontalPanel14, this.f_Label18, ALIGN_CENTER);
  $setCellWidth(this.f_HorizontalPanel14, this.f_Label18, '20%');
  $add_2(this.f_HorizontalPanel14, this.f_Label19);
  $setCellHorizontalAlignment(this.f_HorizontalPanel14, this.f_Label19, ALIGN_CENTER);
  $setCellWidth(this.f_HorizontalPanel14, this.f_Label19, '20%');
  $setWidth(this.f_HorizontalPanel14, '100%');
  this.f_HorizontalPanel29 = new HorizontalPanel;
  $setHorizontalAlignment(this.f_HorizontalPanel29, ALIGN_LEFT);
  $add_2(this.f_HorizontalPanel29, (saveCourseInfo = new Button , $setHTML(saveCourseInfo, (sb_2 = new StringBuilder , sb_2.string += 'Save' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , saveCourseInfo));
  $add_2(this.f_HorizontalPanel29, (deleteCourse = new Button , $setHTML(deleteCourse, (sb = new StringBuilder , sb.string += 'Delete' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , deleteCourse));
  this.f_ListBox46 = new ListBox;
  this.f_ListBox47 = new ListBox;
  this.addCourseCancelButton = new Button;
  $setWidth(this.addCourseCancelButton, '114px');
  $setText(this.addCourseCancelButton, 'Cancel');
  $setHeight(this.addCourseCancelButton, '46px');
  $addDomHandler(this.addCourseCancelButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  this.addCourseSubmitButton = new Button;
  $setWidth(this.addCourseSubmitButton, '114px');
  $setText(this.addCourseSubmitButton, 'Create');
  $setHeight(this.addCourseSubmitButton, '46px');
  $addDomHandler(this.addCourseSubmitButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_0));
  this.infoPanel = new VerticalPanel;
  $add_7(this.infoPanel, (f_Label5 = new Label , $setTextOrHtml(f_Label5.directionalTextHelper, 'View Schedule For') , $updateHorizontalAlignment(f_Label5) , f_Label5));
  $add_7(this.infoPanel, (viewSelect = new ListBox , $addDomHandler(viewSelect, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, ($clinit_ChangeEvent() , $clinit_ChangeEvent() , TYPE)) , this.owner.viewSelect = viewSelect , viewSelect));
  $add_7(this.infoPanel, (f_Label6 = new Label , $setTextOrHtml(f_Label6.directionalTextHelper, 'Term') , $updateHorizontalAlignment(f_Label6) , f_Label6));
  $add_7(this.infoPanel, (termSelect = new ListBox , $addDomHandler(termSelect, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, (null , TYPE)) , this.owner.termSelect = termSelect , termSelect));
  $add_7(this.infoPanel, (addCourseButton = new Button , $setHTML(addCourseButton, (sb_0 = new StringBuilder , sb_0.string += 'Add Course' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , $addDomHandler(addCourseButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (null , TYPE_0)) , addCourseButton));
  $setWidth(this.infoPanel, '100%');
  this.f_SimplePanel7 = new SimplePanel;
  $add_5(this.f_SimplePanel7, (f_Label8 = new Label , $setClassName(f_Label8.element, 'divider') , $setPropertyImpl(f_Label8.element.style, 'width', '100%') , $setPropertyImpl(f_Label8.element.style, 'height', '100%') , f_Label8));
  this.f_SimplePanel7.setWidth_0('1');
  this.f_SimplePanel7.setHeight_0('100%');
  this.courseInfoPanel = new VerticalPanel;
  $add_7(this.courseInfoPanel, (f_Label9 = new Label , $setClassName(f_Label9.element, 'section-title') , $setTextOrHtml(f_Label9.directionalTextHelper, 'Course Information') , $updateHorizontalAlignment(f_Label9) , f_Label9));
  $add_7(this.courseInfoPanel, (courseName = new Label , $setTextOrHtml(courseName.directionalTextHelper, 'N/A') , $updateHorizontalAlignment(courseName) , courseName));
  $add_7(this.courseInfoPanel, this.f_HorizontalPanel10);
  $setCellWidth(this.courseInfoPanel, this.f_HorizontalPanel10, '100%');
  $add_7(this.courseInfoPanel, (f_Label13 = new Label , $setTextOrHtml(f_Label13.directionalTextHelper, 'Days') , $updateHorizontalAlignment(f_Label13) , f_Label13));
  $add_7(this.courseInfoPanel, this.f_HorizontalPanel14);
  $setCellWidth(this.courseInfoPanel, this.f_HorizontalPanel14, '100%');
  $add_7(this.courseInfoPanel, (f_HorizontalPanel20 = new HorizontalPanel , $add_2(f_HorizontalPanel20, this.f_SimpleCheckBox21) , $setCellHorizontalAlignment(f_HorizontalPanel20, this.f_SimpleCheckBox21, ALIGN_CENTER) , $setCellWidth(f_HorizontalPanel20, this.f_SimpleCheckBox21, '20%') , $add_2(f_HorizontalPanel20, this.f_SimpleCheckBox22) , $setCellHorizontalAlignment(f_HorizontalPanel20, this.f_SimpleCheckBox22, ALIGN_CENTER) , $setCellWidth(f_HorizontalPanel20, this.f_SimpleCheckBox22, '20%') , $add_2(f_HorizontalPanel20, this.f_SimpleCheckBox23) , $setCellHorizontalAlignment(f_HorizontalPanel20, this.f_SimpleCheckBox23, ALIGN_CENTER) , $setCellWidth(f_HorizontalPanel20, this.f_SimpleCheckBox23, '20%') , $add_2(f_HorizontalPanel20, this.f_SimpleCheckBox24) , $setCellHorizontalAlignment(f_HorizontalPanel20, this.f_SimpleCheckBox24, ALIGN_CENTER) , $setCellWidth(f_HorizontalPanel20, this.f_SimpleCheckBox24, '20%') , $add_2(f_HorizontalPanel20, this.f_SimpleCheckBox25) , $setCellHorizontalAlignment(f_HorizontalPanel20, this.f_SimpleCheckBox25, ALIGN_CENTER) , $setCellWidth(f_HorizontalPanel20, this.f_SimpleCheckBox25, '20%') , $setPropertyImpl(f_HorizontalPanel20.element.style, 'width', '100%') , f_HorizontalPanel20));
  $add_7(this.courseInfoPanel, (f_Label26 = new Label , $setTextOrHtml(f_Label26.directionalTextHelper, 'Start Time') , $updateHorizontalAlignment(f_Label26) , f_Label26));
  $add_7(this.courseInfoPanel, (startTimeSelect = new ListBox , this.owner.startTimeSelect = startTimeSelect , startTimeSelect));
  $add_7(this.courseInfoPanel, (f_Label27 = new Label , $setTextOrHtml(f_Label27.directionalTextHelper, 'End Time') , $updateHorizontalAlignment(f_Label27) , f_Label27));
  $add_7(this.courseInfoPanel, (endTimeSelect = new ListBox , this.owner.endTimeSelect = endTimeSelect , endTimeSelect));
  $add_7(this.courseInfoPanel, (f_Label28 = new Label , $setTextOrHtml(f_Label28.directionalTextHelper, 'Instructor') , $updateHorizontalAlignment(f_Label28) , f_Label28));
  $add_7(this.courseInfoPanel, (instructorSelect = new ListBox , this.owner.instructorSelect = instructorSelect , instructorSelect));
  $add_7(this.courseInfoPanel, this.f_HorizontalPanel29);
  $setCellHorizontalAlignment(this.courseInfoPanel, this.f_HorizontalPanel29, ALIGN_RIGHT);
  $setWidth(this.courseInfoPanel, '100%');
  this.f_SimplePanel30 = new SimplePanel;
  $add_5(this.f_SimplePanel30, (f_Label31 = new Label , $setClassName(f_Label31.element, 'divider') , $setPropertyImpl(f_Label31.element.style, 'width', '100%') , $setPropertyImpl(f_Label31.element.style, 'height', '100%') , f_Label31));
  this.f_SimplePanel30.setWidth_0('1');
  this.f_SimplePanel30.setHeight_0('100%');
  this.tableScrollPanel = new ScrollPanel;
  $add_5(this.tableScrollPanel, (tablePanel = new StackPanel , $setPropertyImpl(tablePanel.element.style, 'width', '100%') , $setPropertyImpl(tablePanel.element.style, 'height', '100%') , this.owner.tablePanel = tablePanel , tablePanel));
  this.f_SimplePanel32 = new SimplePanel;
  $add_5(this.f_SimplePanel32, (f_Label33 = new Label , $setClassName(f_Label33.element, 'divider') , $setPropertyImpl(f_Label33.element.style, 'width', '100%') , $setPropertyImpl(f_Label33.element.style, 'height', '100%') , f_Label33));
  this.f_SimplePanel32.setWidth_0('11px');
  this.f_SimplePanel32.setHeight_0('100%');
  this.requestsMainPanel = new VerticalPanel;
  $add_7(this.requestsMainPanel, (f_Label34 = new Label , $setTextOrHtml(f_Label34.directionalTextHelper, 'Scheduling Requests') , $updateHorizontalAlignment(f_Label34) , f_Label34));
  $add_7(this.requestsMainPanel, (makeRequestButton = new Button , $setHTML(makeRequestButton, (sb_1 = new StringBuilder , sb_1.string += 'Make Request' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , $addDomHandler(makeRequestButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_0)) , makeRequestButton));
  $add_7(this.requestsMainPanel, (requestsScrollPanel = new ScrollPanel , $add_5(requestsScrollPanel, (requestsPanel = new VerticalPanel , $setPropertyImpl(requestsPanel.element.style, 'width', '100%') , $setPropertyImpl(requestsPanel.element.style, 'height', '100%') , requestsPanel)) , requestsScrollPanel));
  $setWidth(this.requestsMainPanel, '100%');
  this.domId2Element = new LazyDomElement(this.domId2);
  this.domId3Element = new LazyDomElement(this.domId3);
  this.domId4Element = new LazyDomElement(this.domId4);
  this.domId5Element = new LazyDomElement(this.domId5);
  this.domId6Element = new LazyDomElement(this.domId6);
  this.domId7Element = new LazyDomElement(this.domId7);
  this.domId8Element = new LazyDomElement(this.domId8);
  this.domId9Element = new LazyDomElement(this.domId9);
  this.domId10Element = new LazyDomElement(this.domId10);
  this.domId11Element = new LazyDomElement(this.domId11);
  this.domId12Element = new LazyDomElement(this.domId12);
  this.domId13Element = new LazyDomElement(this.domId13);
  this.domId15Element = new LazyDomElement(this.domId15);
  this.domId16Element = new LazyDomElement(this.domId16);
  this.domId17Element = new LazyDomElement(this.domId17);
  this.domId18Element = new LazyDomElement(this.domId18);
  this.domId19Element = new LazyDomElement(this.domId19);
  this.domId20Element = new LazyDomElement(this.domId20);
  this.f_HorizontalPanel2 = new HorizontalPanel;
  $add_2(this.f_HorizontalPanel2, (f_Button3 = new Button , $setInnerText(f_Button3.element, 'WPI Logo') , f_Button3));
  $add_2(this.f_HorizontalPanel2, (homeButton = new Button , $setClassName(homeButton.element, 'navButton') , $setInnerText(homeButton.element, 'Home') , $addDomHandler(homeButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8, (null , TYPE_0)) , homeButton));
  $add_2(this.f_HorizontalPanel2, (scheduleButton = new Button , $setClassName(scheduleButton.element, 'navButton') , $setInnerText(scheduleButton.element, 'Schedule') , $addDomHandler(scheduleButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9, (null , TYPE_0)) , scheduleButton));
  $add_2(this.f_HorizontalPanel2, (coursesButton = new Button , $setClassName(coursesButton.element, 'navButton') , $setInnerText(coursesButton.element, 'Courses') , $addDomHandler(coursesButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10, (null , TYPE_0)) , coursesButton));
  $add_2(this.f_HorizontalPanel2, (accountButton = new Button , $setClassName(accountButton.element, 'navButton') , $setInnerText(accountButton.element, 'Account') , $addDomHandler(accountButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11, (null , TYPE_0)) , accountButton));
  this.pageTitle = new SimplePanel;
  $add_5(this.pageTitle, (f_Label4 = new Label , $setClassName(f_Label4.element, 'page-title') , $setAutoHorizontalAlignment(f_Label4, ALIGN_CENTER) , $setPropertyImpl(f_Label4.element.style, 'width', '100%') , $setTextOrHtml(f_Label4.directionalTextHelper, 'Edit Schedule') , $updateHorizontalAlignment(f_Label4) , $setPropertyImpl(f_Label4.element.style, 'height', '100%') , f_Label4));
  this.pageTitle.setHeight_0('100%');
  this.calendarBody = new HorizontalPanel;
  $add_2(this.calendarBody, this.infoPanel);
  $setCellWidth(this.calendarBody, this.infoPanel, '14%');
  $add_2(this.calendarBody, this.f_SimplePanel7);
  $setCellWidth(this.calendarBody, this.f_SimplePanel7, '1%');
  $add_2(this.calendarBody, this.courseInfoPanel);
  $setCellWidth(this.calendarBody, this.courseInfoPanel, '14%');
  $add_2(this.calendarBody, this.f_SimplePanel30);
  $setCellWidth(this.calendarBody, this.f_SimplePanel30, '1%');
  $add_2(this.calendarBody, this.tableScrollPanel);
  $setCellWidth(this.calendarBody, this.tableScrollPanel, '50%');
  $add_2(this.calendarBody, this.f_SimplePanel32);
  $setCellWidth(this.calendarBody, this.f_SimplePanel32, '1%');
  $add_2(this.calendarBody, this.requestsMainPanel);
  $setCellWidth(this.calendarBody, this.requestsMainPanel, '19%');
  $setWidth(this.calendarBody, '100%');
  $setHeight(this.calendarBody, '100%');
  this.domId0Element = new LazyDomElement(this.domId0);
  this.domId1Element = new LazyDomElement(this.domId1);
  this.domId14Element = new LazyDomElement(this.domId14);
}

defineClass(429, 1, {}, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl$Widgets_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl/Widgets', 429);
function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(430, 1, $intern_35, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$1);
_.onClick = function onClick_3(event_0){
  $onAddCourseButtonClick(this.this$11.owner);
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl$Widgets$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl/Widgets/1', 430);
function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$10(this$1){
  this.this$11 = this$1;
}

defineClass(439, 1, $intern_35, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$10);
_.onClick = function onClick_4(event_0){
  $loadViewCoursesPage(dynamicCast(this.this$11.owner.presenter, 178));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl$Widgets$10_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl/Widgets/10', 439);
function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$11(this$1){
  this.this$11 = this$1;
}

defineClass(440, 1, $intern_35, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$11);
_.onClick = function onClick_5(event_0){
  $loadAccountPage(dynamicCast(this.this$11.owner.presenter, 178));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl$Widgets$11_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl/Widgets/11', 440);
function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(431, 1, $intern_35, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$2);
_.onClick = function onClick_6(event_0){
  $onMakeRequestButtonClick(this.this$11.owner);
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl$Widgets$2_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl/Widgets/2', 431);
function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$3(this$1){
  this.this$11 = this$1;
}

defineClass(432, 1, $intern_35, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$3);
_.onClick = function onClick_7(event_0){
  $hide(this.this$11.owner.addCoursePanel);
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl$Widgets$3_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl/Widgets/3', 432);
function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$4(){
}

defineClass(433, 1, $intern_35, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$4);
_.onClick = function onClick_8(event_0){
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl$Widgets$4_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl/Widgets/4', 433);
function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$5(this$1){
  this.this$11 = this$1;
}

defineClass(434, 1, $intern_36, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$5);
_.onChange = function onChange(event_0){
  $getSections(dynamicCast(this.this$11.owner.presenter, 178));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl$Widgets$5_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl/Widgets/5', 434);
function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$6(this$1){
  this.this$11 = this$1;
}

defineClass(435, 1, $intern_36, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$6);
_.onChange = function onChange_0(event_0){
  $getSections(dynamicCast(this.this$11.owner.presenter, 178));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl$Widgets$6_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl/Widgets/6', 435);
function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$7(this$1){
  this.this$11 = this$1;
}

defineClass(436, 1, $intern_35, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$7);
_.onClick = function onClick_9(event_0){
  $hide(this.this$11.owner.makeRequestPanel);
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl$Widgets$7_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl/Widgets/7', 436);
function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$8(this$1){
  this.this$11 = this$1;
}

defineClass(437, 1, $intern_35, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$8);
_.onClick = function onClick_10(event_0){
  $loadHomePage(dynamicCast(this.this$11.owner.presenter, 178));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl$Widgets$8_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl/Widgets/8', 437);
function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$9(this$1){
  this.this$11 = this$1;
}

defineClass(438, 1, $intern_35, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl$Widgets$9);
_.onClick = function onClick_11(event_0){
  $loadSchedulePage(dynamicCast(this.this$11.owner.presenter, 178));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl$Widgets$9_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl/Widgets/9', 438);
function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(509, 1, {}, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_2;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 509);
function $ensureInjected_1(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(510, 1, {}, AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_AdminCalendarViewImpl_1AdminCalendarViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 510);
function $clinit_AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_2 = new AdminCalendarViewImpl_AdminCalendarViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html5(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_3(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg1));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg2));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg3));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg4));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg5));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg6));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg7));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg8));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg9));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg10));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg11));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html6(arg0, arg1, arg2, arg3, arg4, arg5){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_3(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg1));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg2));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg3));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg4));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg5));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $html7(arg0, arg1, arg2){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_3(sb, htmlEscape(arg0));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg1));
  sb.string += "'><\/span> <span id='";
  $append_3(sb, htmlEscape(arg2));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $setFacultyTypeComboBox(this$static, facultyTypeComboBox){
  this$static.facultyTypeComboBox = facultyTypeComboBox;
}

function CreateAccountViewImpl(){
  $initWidget(this, $build_createAccountPanel(new CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl$Widgets(this)));
}

defineClass(406, 655, $intern_26, CreateAccountViewImpl);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_CreateAccountViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'CreateAccountViewImpl', 406);
function $build_createAccountPanel(this$static){
  var createAccountPanel, f_Image1, createAccountLabel, f_VerticalPanel2, facultyTypeLabel, facultyTypeComboBox, emailLabel, emailTextBox, f_HorizontalPanel7, f_Grid3, f_HorizontalPanel4, f_VerticalPanel8, passwordLabel, passwordTextBox, f_VerticalPanel9, confirmPasswordLabel, confirmPasswordTextBox, f_VerticalPanel5, firstNameLabel, firstNameTextBox, f_VerticalPanel6, lastNameLabel, lastNameTextBox;
  createAccountPanel = new VerticalPanel;
  $setHorizontalAlignment_0(createAccountPanel, ($clinit_HasHorizontalAlignment() , ALIGN_LEFT));
  $add_7(createAccountPanel, (f_Image1 = new Image_0 , $setPropertyImpl(f_Image1.element.style, 'width', '') , $setUrl(f_Image1, ($clinit_UriUtils() , new SafeUriString('https://www.wpi.edu/sites/default/files/inline-image/Offices/Marketing-Communications/WPI_Inst_Prim_FulClr_PREVIEW.png'))) , $setPropertyImpl(f_Image1.element.style, 'height', '20%') , f_Image1));
  $add_7(createAccountPanel, (createAccountLabel = new Label , $setClassName(createAccountLabel.element, 'login-title') , $setTextOrHtml(createAccountLabel.directionalTextHelper, 'Create Account') , $updateHorizontalAlignment(createAccountLabel) , createAccountLabel));
  $add_7(createAccountPanel, (f_VerticalPanel2 = new VerticalPanel , $add_7(f_VerticalPanel2, (f_Grid3 = new Grid , $resizeColumns(f_Grid3, 1) , $resizeRows(f_Grid3, 1) , $setWidget(f_Grid3, 0, 0, (f_HorizontalPanel4 = new HorizontalPanel , $add_2(f_HorizontalPanel4, (f_VerticalPanel5 = new VerticalPanel , $add_7(f_VerticalPanel5, (firstNameLabel = new Label , $setTextOrHtml(firstNameLabel.directionalTextHelper, 'First name:') , $updateHorizontalAlignment(firstNameLabel) , firstNameLabel)) , $add_7(f_VerticalPanel5, (firstNameTextBox = new TextBox , $setPropertyImpl(firstNameTextBox.element.style, 'width', '173px') , this$static.owner.firstNameTextBox = firstNameTextBox , firstNameTextBox)) , f_VerticalPanel5)) , $add_2(f_HorizontalPanel4, (f_VerticalPanel6 = new VerticalPanel , $add_7(f_VerticalPanel6, (lastNameLabel = new Label , $setTextOrHtml(lastNameLabel.directionalTextHelper, 'Last name:') , $updateHorizontalAlignment(lastNameLabel) , lastNameLabel)) , $add_7(f_VerticalPanel6, (lastNameTextBox = new TextBox , this$static.owner.lastNameTextBox = lastNameTextBox , lastNameTextBox)) , f_VerticalPanel6)) , f_HorizontalPanel4)) , f_Grid3)) , f_VerticalPanel2));
  $add_7(createAccountPanel, (facultyTypeLabel = new Label , $setTextOrHtml(facultyTypeLabel.directionalTextHelper, 'Faculty type:') , $updateHorizontalAlignment(facultyTypeLabel) , facultyTypeLabel));
  $add_7(createAccountPanel, (facultyTypeComboBox = new ListBox , $setPropertyImpl(facultyTypeComboBox.element.style, 'width', '356px') , this$static.owner.facultyTypeComboBox = facultyTypeComboBox , facultyTypeComboBox));
  $add_7(createAccountPanel, (emailLabel = new Label , $setTextOrHtml(emailLabel.directionalTextHelper, 'Email:') , $updateHorizontalAlignment(emailLabel) , emailLabel));
  $add_7(createAccountPanel, (emailTextBox = new TextBox , $setPropertyImpl(emailTextBox.element.style, 'width', '356px') , this$static.owner.emailTextBox = emailTextBox , emailTextBox));
  $add_7(createAccountPanel, (f_HorizontalPanel7 = new HorizontalPanel , $add_2(f_HorizontalPanel7, (f_VerticalPanel8 = new VerticalPanel , $add_7(f_VerticalPanel8, (passwordLabel = new Label , $setTextOrHtml(passwordLabel.directionalTextHelper, 'Password:') , $updateHorizontalAlignment(passwordLabel) , passwordLabel)) , $add_7(f_VerticalPanel8, (passwordTextBox = new PasswordTextBox , $setPropertyImpl(passwordTextBox.element.style, 'width', '173px') , this$static.owner.passwordTextBox = passwordTextBox , passwordTextBox)) , f_VerticalPanel8)) , $add_2(f_HorizontalPanel7, (f_VerticalPanel9 = new VerticalPanel , $add_7(f_VerticalPanel9, (confirmPasswordLabel = new Label , $setTextOrHtml(confirmPasswordLabel.directionalTextHelper, 'Confirm password:') , $updateHorizontalAlignment(confirmPasswordLabel) , confirmPasswordLabel)) , $add_7(f_VerticalPanel9, (confirmPasswordTextBox = new PasswordTextBox , $setPropertyImpl(confirmPasswordTextBox.element.style, 'width', '173px') , this$static.owner.confirmPasswordTextBox = confirmPasswordTextBox , confirmPasswordTextBox)) , f_VerticalPanel9)) , f_HorizontalPanel7));
  $add_7(createAccountPanel, this$static.submitButton);
  $setCellHorizontalAlignment(createAccountPanel, this$static.submitButton, ALIGN_RIGHT);
  $setClassName(createAccountPanel.element, 'center');
  $setPropertyImpl(createAccountPanel.element.style, 'width', '450');
  $setPropertyImpl(createAccountPanel.element.style, 'height', '300');
  return createAccountPanel;
}

function CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl$Widgets(owner){
  var style, sb;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl$Widgets$1(this);
  this.owner = owner;
  style = (new CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_3);
  $ensureInjected_2(style);
  this.submitButton = new Button;
  $setHTML(this.submitButton, (sb = new StringBuilder , sb.string += 'Submit' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html);
  $addDomHandler(this.submitButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  this.owner.submitButton = this.submitButton;
}

defineClass(441, 1, {}, CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl$Widgets);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_CreateAccountViewImpl_1CreateAccountViewImplUiBinderImpl$Widgets_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl/Widgets', 441);
function CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(442, 1, $intern_35, CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl$Widgets$1);
_.onClick = function onClick_12(event_0){
  $createAccount(dynamicCast(this.this$11.owner.presenter, 668));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_CreateAccountViewImpl_1CreateAccountViewImplUiBinderImpl$Widgets$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl/Widgets/1', 442);
function CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(511, 1, {}, CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_3;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_CreateAccountViewImpl_1CreateAccountViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 511);
function $ensureInjected_2(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(512, 1, {}, CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_CreateAccountViewImpl_1CreateAccountViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 512);
function $clinit_CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_3 = new CreateAccountViewImpl_CreateAccountViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $onSubmitButtonClick(this$static){
  $submitCourseEdit(dynamicCast(this$static.presenter, 179));
  $returnToViewCourses_0(dynamicCast(this$static.presenter, 179));
}

function EditCourseViewImpl(){
  $initWidget(this, $build_baseContainer_1(new EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets(this)));
}

defineClass(407, 655, $intern_26, EditCourseViewImpl);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditCourseViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditCourseViewImpl', 407);
function $build_baseContainer_1(this$static){
  var __attachRecord__, baseContainer, f_VerticalPanel1, f_HorizontalPanel8, cancelButton, submitButton;
  baseContainer = new HTMLPanel($html3(this$static.domId0).html);
  __attachRecord__ = attachToDom(baseContainer.element);
  $get_1(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(baseContainer, (f_VerticalPanel1 = new VerticalPanel , $setHorizontalAlignment_0(f_VerticalPanel1, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_7(f_VerticalPanel1, this$static.f_Label2) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.f_Label2, ALIGN_CENTER) , $add_7(f_VerticalPanel1, this$static.f_Grid3) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.f_Grid3, ALIGN_CENTER) , $add_7(f_VerticalPanel1, (f_HorizontalPanel8 = new HorizontalPanel , $add_2(f_HorizontalPanel8, (cancelButton = new Button , $setInnerText(cancelButton.element, 'Cancel') , $addDomHandler(cancelButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cancelButton)) , $add_2(f_HorizontalPanel8, (submitButton = new Button , $setInnerText(submitButton.element, 'Submit Changes') , $addDomHandler(submitButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_0)) , submitButton)) , f_HorizontalPanel8)) , f_VerticalPanel1), $get_1(this$static.domId0Element));
  return baseContainer;
}

function EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets(owner){
  var style, f_Label4, courseNameField, f_Label5, courseNumberField, f_Label6, frequencyDropdown, sectionList, f_VerticalPanel7, addSection, sb, editSection, removeSection, sb_0;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$2(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$3(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$4(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$5(this);
  this.owner = owner;
  style = (new EditCourseViewImpl_EditCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_EditCourseViewImpl_EditCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_4);
  $ensureInjected_3(style);
  this.domId0 = $createUniqueId($doc);
  this.f_Label2 = new Label;
  $setStyleName(this.f_Label2, 'h1');
  $setAutoHorizontalAlignment(this.f_Label2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $setWidth(this.f_Label2, '292px');
  $setText_0(this.f_Label2, 'Edit Course');
  this.f_Grid3 = new Grid;
  $resize(this.f_Grid3, 4, 2);
  $setWidget(this.f_Grid3, 0, 0, (f_Label4 = new Label , $setTextOrHtml(f_Label4.directionalTextHelper, 'Course Name:') , $updateHorizontalAlignment(f_Label4) , f_Label4));
  $setWidget(this.f_Grid3, 0, 1, (courseNameField = new TextBox , this.owner.courseNameField = courseNameField , courseNameField));
  $setWidget(this.f_Grid3, 1, 0, (f_Label5 = new Label , $setTextOrHtml(f_Label5.directionalTextHelper, 'Course Number:') , $updateHorizontalAlignment(f_Label5) , f_Label5));
  $setWidget(this.f_Grid3, 1, 1, (courseNumberField = new TextBox , this.owner.courseNumberField = courseNumberField , courseNumberField));
  $setWidget(this.f_Grid3, 2, 0, (f_Label6 = new Label , $setTextOrHtml(f_Label6.directionalTextHelper, 'Required Frequency:') , $updateHorizontalAlignment(f_Label6) , f_Label6));
  $setWidget(this.f_Grid3, 2, 1, (frequencyDropdown = new ListBox , this.owner.frequencyDropdown = frequencyDropdown , frequencyDropdown));
  $setWidget(this.f_Grid3, 3, 0, (sectionList = new StackPanel , this.owner.sectionList = sectionList , sectionList));
  $setWidget(this.f_Grid3, 3, 1, (f_VerticalPanel7 = new VerticalPanel , $add_7(f_VerticalPanel7, (addSection = new Button , $setHTML(addSection, (sb = new StringBuilder , sb.string += 'Add Section' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , $addDomHandler(addSection, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , addSection)) , $add_7(f_VerticalPanel7, (editSection = new Button , $setInnerText(editSection.element, 'Edit Section') , $addDomHandler(editSection, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_0)) , editSection)) , $add_7(f_VerticalPanel7, (removeSection = new Button , $setHTML(removeSection, (sb_0 = new StringBuilder , sb_0.string += 'Remove Section' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , $addDomHandler(removeSection, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_0)) , removeSection)) , f_VerticalPanel7));
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(443, 1, {}, EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditCourseViewImpl_1EditCourseViewImplUiBinderImpl$Widgets_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditCourseViewImpl_EditCourseViewImplUiBinderImpl/Widgets', 443);
function EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(444, 1, $intern_35, EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$1);
_.onClick = function onClick_13(event_0){
  $loadAddSectionPage(dynamicCast(this.this$11.owner.presenter, 179));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditCourseViewImpl_1EditCourseViewImplUiBinderImpl$Widgets$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditCourseViewImpl_EditCourseViewImplUiBinderImpl/Widgets/1', 444);
function EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(445, 1, $intern_35, EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$2);
_.onClick = function onClick_14(event_0){
  $loadEditSectionPage(dynamicCast(this.this$11.owner.presenter, 179));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditCourseViewImpl_1EditCourseViewImplUiBinderImpl$Widgets$2_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditCourseViewImpl_EditCourseViewImplUiBinderImpl/Widgets/2', 445);
function EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$3(this$1){
  this.this$11 = this$1;
}

defineClass(446, 1, $intern_35, EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$3);
_.onClick = function onClick_15(event_0){
  $removeSection(dynamicCast(this.this$11.owner.presenter, 179));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditCourseViewImpl_1EditCourseViewImplUiBinderImpl$Widgets$3_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditCourseViewImpl_EditCourseViewImplUiBinderImpl/Widgets/3', 446);
function EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$4(this$1){
  this.this$11 = this$1;
}

defineClass(447, 1, $intern_35, EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$4);
_.onClick = function onClick_16(event_0){
  $onSubmitButtonClick(this.this$11.owner);
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditCourseViewImpl_1EditCourseViewImplUiBinderImpl$Widgets$4_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditCourseViewImpl_EditCourseViewImplUiBinderImpl/Widgets/4', 447);
function EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$5(this$1){
  this.this$11 = this$1;
}

defineClass(448, 1, $intern_35, EditCourseViewImpl_EditCourseViewImplUiBinderImpl$Widgets$5);
_.onClick = function onClick_17(event_0){
  $returnToViewCourses_0(dynamicCast(this.this$11.owner.presenter, 179));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditCourseViewImpl_1EditCourseViewImplUiBinderImpl$Widgets$5_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditCourseViewImpl_EditCourseViewImplUiBinderImpl/Widgets/5', 448);
function EditCourseViewImpl_EditCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(513, 1, {}, EditCourseViewImpl_EditCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_4;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditCourseViewImpl_1EditCourseViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditCourseViewImpl_EditCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 513);
function $ensureInjected_3(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function EditCourseViewImpl_EditCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(514, 1, {}, EditCourseViewImpl_EditCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditCourseViewImpl_1EditCourseViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditCourseViewImpl_EditCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 514);
function $clinit_EditCourseViewImpl_EditCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_EditCourseViewImpl_EditCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_4 = new EditCourseViewImpl_EditCourseViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html3(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_3(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function EditSectionViewImpl(){
  $initWidget(this, $build_f_HTMLPanel1_0(new EditSectionViewImpl_EditSectionViewImplUiBinderImpl$Widgets(this)));
}

defineClass(408, 655, $intern_26, EditSectionViewImpl);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditSectionViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditSectionViewImpl', 408);
function $build_f_HTMLPanel1_0(this$static){
  var __attachRecord__, f_HTMLPanel1, editSectionPanel, f_Grid2, f_HorizontalPanel3, f_HorizontalSplitPanel4, termLabel, termComboBox, generatedNameLabel, generatedNameTextBox, generatedCRNLabel, generatedCRNTextBox, sectionTypeLabel, sectionTypeComboBox, sectionStartTimeLabel, sectionStartTimeComboBox, sectionEndTimeLabel, sectionEndTimeComboBox, mondayCheckBox, tuesdayCheckBox, wednesdayCheckBox, thursdayCheckBox, fridayCheckBox, cancelButton, submitButton;
  f_HTMLPanel1 = new HTMLPanel($html1_1(this$static.domId0).html);
  $setPropertyImpl(f_HTMLPanel1.element.style, 'width', '100%');
  $setPropertyImpl(f_HTMLPanel1.element.style, 'height', '100%');
  __attachRecord__ = attachToDom(f_HTMLPanel1.element);
  $get_1(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(f_HTMLPanel1, (editSectionPanel = new VerticalPanel , $setHorizontalAlignment_0(editSectionPanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $setVerticalAlignment(editSectionPanel, ($clinit_HasVerticalAlignment() , ALIGN_TOP)) , $add_7(editSectionPanel, this$static.editSectionTitle) , $setCellHeight(editSectionPanel, this$static.editSectionTitle, 'sectionTitle') , $add_7(editSectionPanel, (f_Grid2 = new Grid , $resizeColumns(f_Grid2, 2) , $resizeRows(f_Grid2, 6) , $setWidget(f_Grid2, 0, 0, (termLabel = new Label , $setTextOrHtml(termLabel.directionalTextHelper, 'Term:') , $updateHorizontalAlignment(termLabel) , termLabel)) , $setWidget(f_Grid2, 0, 1, (termComboBox = new ListBox , this$static.owner.termComboBox = termComboBox , termComboBox)) , $setWidget(f_Grid2, 1, 0, (generatedNameLabel = new Label , $setTextOrHtml(generatedNameLabel.directionalTextHelper, 'Generated Name:') , $updateHorizontalAlignment(generatedNameLabel) , generatedNameLabel)) , $setWidget(f_Grid2, 1, 1, (generatedNameTextBox = new TextBox , $setPropertyString(generatedNameTextBox.element, 'value', 'Section-Name-Here') , generatedNameTextBox)) , $setWidget(f_Grid2, 2, 0, (generatedCRNLabel = new Label , $setTextOrHtml(generatedCRNLabel.directionalTextHelper, 'Generated CRN#:') , $updateHorizontalAlignment(generatedCRNLabel) , generatedCRNLabel)) , $setWidget(f_Grid2, 2, 1, (generatedCRNTextBox = new TextBox , $setPropertyString(generatedCRNTextBox.element, 'value', 'CRN#-Here') , generatedCRNTextBox)) , $setWidget(f_Grid2, 3, 0, (sectionTypeLabel = new Label , $setTextOrHtml(sectionTypeLabel.directionalTextHelper, 'Section Type:') , $updateHorizontalAlignment(sectionTypeLabel) , sectionTypeLabel)) , $setWidget(f_Grid2, 3, 1, (sectionTypeComboBox = new ListBox , this$static.owner.sectionTypeComboBox = sectionTypeComboBox , sectionTypeComboBox)) , $setWidget(f_Grid2, 4, 0, (sectionStartTimeLabel = new Label , $setTextOrHtml(sectionStartTimeLabel.directionalTextHelper, 'Start Time:') , $updateHorizontalAlignment(sectionStartTimeLabel) , sectionStartTimeLabel)) , $setWidget(f_Grid2, 4, 1, (sectionStartTimeComboBox = new ListBox , this$static.owner.sectionStartTimeComboBox = sectionStartTimeComboBox , sectionStartTimeComboBox)) , $setWidget(f_Grid2, 5, 0, (sectionEndTimeLabel = new Label , $setTextOrHtml(sectionEndTimeLabel.directionalTextHelper, 'End Time:') , $updateHorizontalAlignment(sectionEndTimeLabel) , sectionEndTimeLabel)) , $setWidget(f_Grid2, 5, 1, (sectionEndTimeComboBox = new ListBox , this$static.owner.sectionEndTimeComboBox = sectionEndTimeComboBox , sectionEndTimeComboBox)) , f_Grid2)) , $add_7(editSectionPanel, (f_HorizontalPanel3 = new HorizontalPanel , $add_2(f_HorizontalPanel3, (mondayCheckBox = new CheckBox , $setValue_0(mondayCheckBox, ($clinit_Boolean() , $clinit_Boolean() , TRUE_0)) , $setTextOrHtml(mondayCheckBox.directionalTextHelper, 'M') , this$static.owner.mondayCheckBox = mondayCheckBox , mondayCheckBox)) , $add_2(f_HorizontalPanel3, (tuesdayCheckBox = new CheckBox , $setTextOrHtml(tuesdayCheckBox.directionalTextHelper, 'T') , this$static.owner.tuesdayCheckBox = tuesdayCheckBox , tuesdayCheckBox)) , $add_2(f_HorizontalPanel3, (wednesdayCheckBox = new CheckBox , $setValue_0(wednesdayCheckBox, (null , TRUE_0)) , $setTextOrHtml(wednesdayCheckBox.directionalTextHelper, 'W') , this$static.owner.wednesdayCheckBox = wednesdayCheckBox , wednesdayCheckBox)) , $add_2(f_HorizontalPanel3, (thursdayCheckBox = new CheckBox , $setTextOrHtml(thursdayCheckBox.directionalTextHelper, 'R') , this$static.owner.thursdayCheckBox = thursdayCheckBox , thursdayCheckBox)) , $add_2(f_HorizontalPanel3, (fridayCheckBox = new CheckBox , $setValue_0(fridayCheckBox, (null , TRUE_0)) , $setTextOrHtml(fridayCheckBox.directionalTextHelper, 'F') , this$static.owner.fridayCheckBox = fridayCheckBox , fridayCheckBox)) , f_HorizontalPanel3)) , $add_7(editSectionPanel, (f_HorizontalSplitPanel4 = new HorizontalSplitPanel , $add_3(f_HorizontalSplitPanel4, (cancelButton = new Button , $setInnerText(cancelButton.element, 'Cancel') , $addDomHandler(cancelButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , cancelButton)) , $add_3(f_HorizontalSplitPanel4, (submitButton = new Button , $setInnerText(submitButton.element, 'Submit') , $addDomHandler(submitButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (null , TYPE_0)) , submitButton)) , $setPropertyImpl(f_HorizontalSplitPanel4.element.style, 'height', '30px') , f_HorizontalSplitPanel4)) , $setClassName(editSectionPanel.element, 'modalPanel') , $setPropertyImpl(editSectionPanel.element.style, 'width', '100%') , $setPropertyImpl(editSectionPanel.element.style, 'height', '100%') , editSectionPanel), $get_1(this$static.domId0Element));
  return f_HTMLPanel1;
}

function EditSectionViewImpl_EditSectionViewImplUiBinderImpl$Widgets(owner){
  var style;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new EditSectionViewImpl_EditSectionViewImplUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new EditSectionViewImpl_EditSectionViewImplUiBinderImpl$Widgets$2(this);
  this.owner = owner;
  style = (new EditSectionViewImpl_EditSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_EditSectionViewImpl_EditSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_5);
  $ensureInjected_4(style);
  this.domId0 = $createUniqueId($doc);
  this.editSectionTitle = new Label;
  $setStyleName(this.editSectionTitle, 'viewCoursesHeader');
  $setText_0(this.editSectionTitle, 'Edit Section');
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(449, 1, {}, EditSectionViewImpl_EditSectionViewImplUiBinderImpl$Widgets);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditSectionViewImpl_1EditSectionViewImplUiBinderImpl$Widgets_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditSectionViewImpl_EditSectionViewImplUiBinderImpl/Widgets', 449);
function EditSectionViewImpl_EditSectionViewImplUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(450, 1, $intern_35, EditSectionViewImpl_EditSectionViewImplUiBinderImpl$Widgets$1);
_.onClick = function onClick_18(event_0){
  $editSection(dynamicCast(this.this$11.owner.presenter, 621));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditSectionViewImpl_1EditSectionViewImplUiBinderImpl$Widgets$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditSectionViewImpl_EditSectionViewImplUiBinderImpl/Widgets/1', 450);
function EditSectionViewImpl_EditSectionViewImplUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(451, 1, $intern_35, EditSectionViewImpl_EditSectionViewImplUiBinderImpl$Widgets$2);
_.onClick = function onClick_19(event_0){
  $cancelEditSection(dynamicCast(this.this$11.owner.presenter, 621));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditSectionViewImpl_1EditSectionViewImplUiBinderImpl$Widgets$2_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditSectionViewImpl_EditSectionViewImplUiBinderImpl/Widgets/2', 451);
function EditSectionViewImpl_EditSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(515, 1, {}, EditSectionViewImpl_EditSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_5;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditSectionViewImpl_1EditSectionViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditSectionViewImpl_EditSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 515);
function $ensureInjected_4(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function EditSectionViewImpl_EditSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(516, 1, {}, EditSectionViewImpl_EditSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_EditSectionViewImpl_1EditSectionViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'EditSectionViewImpl_EditSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 516);
function $clinit_EditSectionViewImpl_EditSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_EditSectionViewImpl_EditSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_5 = new EditSectionViewImpl_EditSectionViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html1_1(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_3(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function ExampleViewImpl(){
  var mainPanel, userIdLabel, userNameLabel, firstNameLabel, lastNameLabel, emailLabel, userStateIdLabel, createdAtLabel, updatedAtLabel;
  $initWidget(this, (mainPanel = new Grid , $resizeColumns(mainPanel, 2) , $resizeRows(mainPanel, 8) , $setWidget(mainPanel, 0, 0, (userIdLabel = new Label , $setTextOrHtml(userIdLabel.directionalTextHelper, 'User ID:') , $updateHorizontalAlignment(userIdLabel) , userIdLabel)) , $setWidget(mainPanel, 0, 1, new Label) , $setWidget(mainPanel, 1, 0, (userNameLabel = new Label , $setTextOrHtml(userNameLabel.directionalTextHelper, 'User Name:') , $updateHorizontalAlignment(userNameLabel) , userNameLabel)) , $setWidget(mainPanel, 1, 1, new Label) , $setWidget(mainPanel, 2, 0, (firstNameLabel = new Label , $setTextOrHtml(firstNameLabel.directionalTextHelper, 'First Name:') , $updateHorizontalAlignment(firstNameLabel) , firstNameLabel)) , $setWidget(mainPanel, 2, 1, new Label) , $setWidget(mainPanel, 3, 0, (lastNameLabel = new Label , $setTextOrHtml(lastNameLabel.directionalTextHelper, 'Last Name:') , $updateHorizontalAlignment(lastNameLabel) , lastNameLabel)) , $setWidget(mainPanel, 3, 1, new Label) , $setWidget(mainPanel, 4, 0, (emailLabel = new Label , $setTextOrHtml(emailLabel.directionalTextHelper, 'Email:') , $updateHorizontalAlignment(emailLabel) , emailLabel)) , $setWidget(mainPanel, 4, 1, new Label) , $setWidget(mainPanel, 5, 0, (userStateIdLabel = new Label , $setTextOrHtml(userStateIdLabel.directionalTextHelper, 'User State ID:') , $updateHorizontalAlignment(userStateIdLabel) , userStateIdLabel)) , $setWidget(mainPanel, 5, 1, new Label) , $setWidget(mainPanel, 6, 0, (createdAtLabel = new Label , $setTextOrHtml(createdAtLabel.directionalTextHelper, 'Created At:') , $updateHorizontalAlignment(createdAtLabel) , createdAtLabel)) , $setWidget(mainPanel, 6, 1, new Label) , $setWidget(mainPanel, 7, 0, (updatedAtLabel = new Label , $setTextOrHtml(updatedAtLabel.directionalTextHelper, 'Updated At:') , $updateHorizontalAlignment(updatedAtLabel) , updatedAtLabel)) , $setWidget(mainPanel, 7, 1, new Label) , mainPanel));
}

defineClass(409, 655, $intern_26, ExampleViewImpl);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ExampleViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ExampleViewImpl', 409);
function $setFacultyListVerticalPanel(this$static, facultyListVerticalPanel){
  this$static.facultyListVerticalPanel = facultyListVerticalPanel;
}

function HomeViewImpl(){
  $initWidget(this, $build_rootPanel(new HomeViewImpl_HomeViewImplUiBinderImpl$Widgets(this)));
}

defineClass(410, 655, $intern_26, HomeViewImpl);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_HomeViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'HomeViewImpl', 410);
function $build_rootPanel(this$static){
  var __attachRecord__, rootPanel, f_VerticalPanel1, f_Label4, facultyListVerticalPanel, facultyListTitlePanel, numberOfCoursesLabel, facultyNameLabel, assignedCoursesLabel;
  rootPanel = new HTMLPanel($html1_2(this$static.domId0).html);
  __attachRecord__ = attachToDom(rootPanel.element);
  $get_1(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(rootPanel, (f_VerticalPanel1 = new VerticalPanel , $add_7(f_VerticalPanel1, this$static.f_HorizontalPanel2) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.f_HorizontalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_7(f_VerticalPanel1, (f_Label4 = new Label , $setClassName(f_Label4.element, 'page-title') , $setPropertyImpl(f_Label4.element.style, 'width', '355px') , $setTextOrHtml(f_Label4.directionalTextHelper, 'Welcome!') , $updateHorizontalAlignment(f_Label4) , f_Label4)) , $add_7(f_VerticalPanel1, (facultyListVerticalPanel = new VerticalPanel , $add_7(facultyListVerticalPanel, (facultyListTitlePanel = new HorizontalPanel , $add_2(facultyListTitlePanel, (numberOfCoursesLabel = new Label , $setClassName(numberOfCoursesLabel.element, 'faculty-list-title') , $setTextOrHtml(numberOfCoursesLabel.directionalTextHelper, 'Number of Courses') , $updateHorizontalAlignment(numberOfCoursesLabel) , numberOfCoursesLabel)) , $add_2(facultyListTitlePanel, (facultyNameLabel = new Label , $setClassName(facultyNameLabel.element, 'faculty-list-title') , $setTextOrHtml(facultyNameLabel.directionalTextHelper, 'Faculty Name') , $updateHorizontalAlignment(facultyNameLabel) , facultyNameLabel)) , $add_2(facultyListTitlePanel, (assignedCoursesLabel = new Label , $setClassName(assignedCoursesLabel.element, 'faculty-list-title') , $setTextOrHtml(assignedCoursesLabel.directionalTextHelper, 'Assigned Courses') , $updateHorizontalAlignment(assignedCoursesLabel) , assignedCoursesLabel)) , this$static.owner.facultyListTitlePanel = facultyListTitlePanel , facultyListTitlePanel)) , this$static.owner.facultyListVerticalPanel = facultyListVerticalPanel , facultyListVerticalPanel)) , $setClassName(f_VerticalPanel1.element, 'center') , $setPropertyImpl(f_VerticalPanel1.element.style, 'width', '824px') , f_VerticalPanel1), $get_1(this$static.domId0Element));
  return rootPanel;
}

function HomeViewImpl_HomeViewImplUiBinderImpl$Widgets(owner){
  var style, f_Image3, homeButton, scheduleButton, coursesButton, accountButton;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new HomeViewImpl_HomeViewImplUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new HomeViewImpl_HomeViewImplUiBinderImpl$Widgets$2(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new HomeViewImpl_HomeViewImplUiBinderImpl$Widgets$3(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new HomeViewImpl_HomeViewImplUiBinderImpl$Widgets$4(this);
  this.owner = owner;
  style = (new HomeViewImpl_HomeViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_HomeViewImpl_HomeViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_6);
  $ensureInjected_5(style);
  this.domId0 = $createUniqueId($doc);
  this.f_HorizontalPanel2 = new HorizontalPanel;
  $add_2(this.f_HorizontalPanel2, (f_Image3 = new Image_0 , $setUrl(f_Image3, ($clinit_UriUtils() , new SafeUriString('https://www.wpi.edu/sites/default/files/inline-image/Offices/Marketing-Communications/WPI_Inst_Prim_FulClr_PREVIEW.png'))) , $setPropertyImpl(f_Image3.element.style, 'height', '5%') , f_Image3));
  $add_2(this.f_HorizontalPanel2, (homeButton = new Button , $setClassName(homeButton.element, 'navButton') , $setPropertyImpl(homeButton.element.style, 'width', '56px') , $setInnerText(homeButton.element, 'Home') , $setPropertyImpl(homeButton.element.style, 'height', '38px') , $addDomHandler(homeButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , homeButton));
  $add_2(this.f_HorizontalPanel2, (scheduleButton = new Button , $setClassName(scheduleButton.element, 'navButton') , $setInnerText(scheduleButton.element, 'Schedule') , $setPropertyImpl(scheduleButton.element.style, 'height', '38px') , $addDomHandler(scheduleButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_0)) , scheduleButton));
  $add_2(this.f_HorizontalPanel2, (coursesButton = new Button , $setClassName(coursesButton.element, 'navButton') , $setInnerText(coursesButton.element, 'Courses') , $setPropertyImpl(coursesButton.element.style, 'height', '38px') , $addDomHandler(coursesButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_0)) , coursesButton));
  $add_2(this.f_HorizontalPanel2, (accountButton = new Button , $setClassName(accountButton.element, 'navButton') , $setInnerText(accountButton.element, 'Account') , $setPropertyImpl(accountButton.element.style, 'height', '38px') , $addDomHandler(accountButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (null , TYPE_0)) , accountButton));
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(456, 1, {}, HomeViewImpl_HomeViewImplUiBinderImpl$Widgets);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_HomeViewImpl_1HomeViewImplUiBinderImpl$Widgets_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'HomeViewImpl_HomeViewImplUiBinderImpl/Widgets', 456);
function HomeViewImpl_HomeViewImplUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(457, 1, $intern_35, HomeViewImpl_HomeViewImplUiBinderImpl$Widgets$1);
_.onClick = function onClick_20(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 236), 134).eventBus, new ManageUserPageEvent(new ManageUserPageAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_HomeViewImpl_1HomeViewImplUiBinderImpl$Widgets$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'HomeViewImpl_HomeViewImplUiBinderImpl/Widgets/1', 457);
function HomeViewImpl_HomeViewImplUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(458, 1, $intern_35, HomeViewImpl_HomeViewImplUiBinderImpl$Widgets$2);
_.onClick = function onClick_21(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 236), 134).eventBus, new LoadViewCoursesEvent(new LoadViewCoursesAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_HomeViewImpl_1HomeViewImplUiBinderImpl$Widgets$2_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'HomeViewImpl_HomeViewImplUiBinderImpl/Widgets/2', 458);
function HomeViewImpl_HomeViewImplUiBinderImpl$Widgets$3(this$1){
  this.this$11 = this$1;
}

defineClass(459, 1, $intern_35, HomeViewImpl_HomeViewImplUiBinderImpl$Widgets$3);
_.onClick = function onClick_22(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 236), 134).eventBus, new LoadHomePageEvent(new LoadHomePageAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_HomeViewImpl_1HomeViewImplUiBinderImpl$Widgets$3_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'HomeViewImpl_HomeViewImplUiBinderImpl/Widgets/3', 459);
function HomeViewImpl_HomeViewImplUiBinderImpl$Widgets$4(this$1){
  this.this$11 = this$1;
}

defineClass(460, 1, $intern_35, HomeViewImpl_HomeViewImplUiBinderImpl$Widgets$4);
_.onClick = function onClick_23(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 236), 134).eventBus, new LoadScheduleEvent(new LoadScheduleAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_HomeViewImpl_1HomeViewImplUiBinderImpl$Widgets$4_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'HomeViewImpl_HomeViewImplUiBinderImpl/Widgets/4', 460);
function HomeViewImpl_HomeViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(517, 1, {}, HomeViewImpl_HomeViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_6;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_HomeViewImpl_1HomeViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'HomeViewImpl_HomeViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 517);
function $ensureInjected_5(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function HomeViewImpl_HomeViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(518, 1, {}, HomeViewImpl_HomeViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_HomeViewImpl_1HomeViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'HomeViewImpl_HomeViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 518);
function $clinit_HomeViewImpl_HomeViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_HomeViewImpl_HomeViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_6 = new HomeViewImpl_HomeViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html1_2(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_3(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function IndexViewImpl(){
  $initWidget(this, $build_f_VerticalPanel1(new IndexViewImpl_IndexViewImplUiBinderImpl$Widgets(this)));
}

defineClass(411, 655, $intern_26, IndexViewImpl);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_IndexViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'IndexViewImpl', 411);
function $build_f_VerticalPanel1(this$static){
  var f_VerticalPanel1, mainPanel, loadingImage, glassLoadingPanel, sb;
  f_VerticalPanel1 = new VerticalPanel;
  $add_7(f_VerticalPanel1, (mainPanel = new HTMLPanel((sb = new StringBuilder , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , this$static.owner.mainPanel = mainPanel , mainPanel));
  $add_7(f_VerticalPanel1, (loadingImage = new Image_0 , setStyleName(loadingImage.element, 'GEIIFOUDGI', true) , $setUrl(loadingImage, ($clinit_UriUtils() , new SafeUriString('https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif'))) , this$static.owner.loadingImage = loadingImage , loadingImage));
  $add_7(f_VerticalPanel1, (glassLoadingPanel = new PopupPanel , setStyleName($getParentElement($getFirstChildElement(glassLoadingPanel.element)), 'GEIIFOUDFI', true) , setStyleName($getParentElement($getFirstChildElement(glassLoadingPanel.element)), 'GEIIFOUDEI', true) , this$static.owner.glassLoadingPanel = glassLoadingPanel , glassLoadingPanel));
  return f_VerticalPanel1;
}

function IndexViewImpl_IndexViewImplUiBinderImpl$Widgets(owner){
  this.owner = owner;
  this.style_0 = (new IndexViewImpl_IndexViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_IndexViewImpl_IndexViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_7);
  $ensureInjected_6(this.style_0);
}

defineClass(461, 1, {}, IndexViewImpl_IndexViewImplUiBinderImpl$Widgets);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_IndexViewImpl_1IndexViewImplUiBinderImpl$Widgets_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'IndexViewImpl_IndexViewImplUiBinderImpl/Widgets', 461);
function IndexViewImpl_IndexViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(519, 1, {}, IndexViewImpl_IndexViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_7;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_IndexViewImpl_1IndexViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'IndexViewImpl_IndexViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 519);
function $ensureInjected_6(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '.GEIIFOUDFI{position:fixed;width:100%;height:100%;visibility:hidden;}.GEIIFOUDEI{background-color:#000;opacity:0.8;}.GEIIFOUDGI{position:fixed;display:block;margin-left:50%;margin-right:50%;z-index:1;visibility:hidden;}');
    schedule();
    return true;
  }
  return false;
}

function IndexViewImpl_IndexViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(520, 1, {}, IndexViewImpl_IndexViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_IndexViewImpl_1IndexViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'IndexViewImpl_IndexViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 520);
function $clinit_IndexViewImpl_IndexViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_IndexViewImpl_IndexViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_7 = new IndexViewImpl_IndexViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function LoginPageViewImpl(){
  $initWidget(this, $build_loginPagePanel(new LoginPageViewImpl_LoginPageViewImplUiBinderImpl$Widgets(this)));
}

defineClass(412, 655, $intern_26, LoginPageViewImpl);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_LoginPageViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'LoginPageViewImpl', 412);
function $build_loginPagePanel(this$static){
  var loginPagePanel, loginTitle, logoImage, f_VerticalPanel1, f_Grid2, userNameLabel, userNameTextBox, passwordLabel, passwordTextBox, f_HorizontalPanel3, createAccountButton, sb, loginButton, sb_0;
  loginPagePanel = new VerticalPanel;
  $setHorizontalAlignment_0(loginPagePanel, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $add_7(loginPagePanel, (loginTitle = new Label , $setClassName(loginTitle.element, 'login-title') , $setAutoHorizontalAlignment(loginTitle, ALIGN_CENTER) , $setPropertyImpl(loginTitle.element.style, 'width', '') , $setTextOrHtml(loginTitle.directionalTextHelper, 'Login') , $updateHorizontalAlignment(loginTitle) , loginTitle));
  $add_7(loginPagePanel, (logoImage = new Image_0 , $setPropertyImpl(logoImage.element.style, 'width', '') , $setUrl(logoImage, ($clinit_UriUtils() , new SafeUriString('https://www.wpi.edu/sites/default/files/inline-image/Offices/Marketing-Communications/WPI_Inst_Prim_FulClr_PREVIEW.png'))) , $setPropertyImpl(logoImage.element.style, 'height', '20%') , logoImage));
  $add_7(loginPagePanel, (f_VerticalPanel1 = new VerticalPanel , $setHorizontalAlignment_0(f_VerticalPanel1, ALIGN_CENTER) , $add_7(f_VerticalPanel1, (f_Grid2 = new Grid , $resizeColumns(f_Grid2, 1) , $resizeRows(f_Grid2, 5) , $setWidget(f_Grid2, 0, 0, (userNameLabel = new Label , $setTextOrHtml(userNameLabel.directionalTextHelper, 'Email:') , $updateHorizontalAlignment(userNameLabel) , userNameLabel)) , $setWidget(f_Grid2, 1, 0, (userNameTextBox = new TextBox , $setPropertyImpl(userNameTextBox.element.style, 'width', '225px') , this$static.owner.userNameTextBox = userNameTextBox , userNameTextBox)) , $setWidget(f_Grid2, 2, 0, (passwordLabel = new Label , $setTextOrHtml(passwordLabel.directionalTextHelper, 'Password:') , $updateHorizontalAlignment(passwordLabel) , passwordLabel)) , $setWidget(f_Grid2, 3, 0, (passwordTextBox = new PasswordTextBox , $setPropertyImpl(passwordTextBox.element.style, 'width', '225px') , this$static.owner.passwordTextBox = passwordTextBox , passwordTextBox)) , $setWidget(f_Grid2, 4, 0, (f_HorizontalPanel3 = new HorizontalPanel , $add_2(f_HorizontalPanel3, (createAccountButton = new Button , $setHTML(createAccountButton, (sb = new StringBuilder , sb.string += 'Create Account' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , $addDomHandler(createAccountButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , createAccountButton)) , $add_2(f_HorizontalPanel3, (loginButton = new Button , $setHTML(loginButton, (sb_0 = new StringBuilder , sb_0.string += 'Login' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , $setPropertyImpl(loginButton.element.style, 'width', '106px') , $addDomHandler(loginButton, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (null , TYPE_0)) , this$static.owner.loginButton = loginButton , loginButton)) , f_HorizontalPanel3)) , f_Grid2)) , f_VerticalPanel1));
  $setClassName(loginPagePanel.element, 'center');
  $setPropertyImpl(loginPagePanel.element.style, 'width', '450');
  $setPropertyImpl(loginPagePanel.element.style, 'height', '300');
  this$static.owner.loginPagePanel = loginPagePanel;
  return loginPagePanel;
}

function LoginPageViewImpl_LoginPageViewImplUiBinderImpl$Widgets(owner){
  var style;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new LoginPageViewImpl_LoginPageViewImplUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new LoginPageViewImpl_LoginPageViewImplUiBinderImpl$Widgets$2(this);
  this.owner = owner;
  style = (new LoginPageViewImpl_LoginPageViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_LoginPageViewImpl_LoginPageViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_8);
  $ensureInjected_7(style);
}

defineClass(462, 1, {}, LoginPageViewImpl_LoginPageViewImplUiBinderImpl$Widgets);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_LoginPageViewImpl_1LoginPageViewImplUiBinderImpl$Widgets_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'LoginPageViewImpl_LoginPageViewImplUiBinderImpl/Widgets', 462);
function LoginPageViewImpl_LoginPageViewImplUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(463, 1, $intern_35, LoginPageViewImpl_LoginPageViewImplUiBinderImpl$Widgets$1);
_.onClick = function onClick_24(event_0){
  $login(dynamicCast(this.this$11.owner.presenter, 622));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_LoginPageViewImpl_1LoginPageViewImplUiBinderImpl$Widgets$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'LoginPageViewImpl_LoginPageViewImplUiBinderImpl/Widgets/1', 463);
function LoginPageViewImpl_LoginPageViewImplUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(464, 1, $intern_35, LoginPageViewImpl_LoginPageViewImplUiBinderImpl$Widgets$2);
_.onClick = function onClick_25(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 622), 206).eventBus, new LoadCreateAccountEvent);
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_LoginPageViewImpl_1LoginPageViewImplUiBinderImpl$Widgets$2_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'LoginPageViewImpl_LoginPageViewImplUiBinderImpl/Widgets/2', 464);
function LoginPageViewImpl_LoginPageViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(521, 1, {}, LoginPageViewImpl_LoginPageViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_8;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_LoginPageViewImpl_1LoginPageViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'LoginPageViewImpl_LoginPageViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 521);
function $ensureInjected_7(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function LoginPageViewImpl_LoginPageViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(522, 1, {}, LoginPageViewImpl_LoginPageViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_LoginPageViewImpl_1LoginPageViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'LoginPageViewImpl_LoginPageViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 522);
function $clinit_LoginPageViewImpl_LoginPageViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_LoginPageViewImpl_LoginPageViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_8 = new LoginPageViewImpl_LoginPageViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function ManageUserViewImpl(){
  $initWidget(this, $build_rootPanel_0(new ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets(this)));
}

defineClass(413, 655, $intern_26, ManageUserViewImpl);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ManageUserViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ManageUserViewImpl', 413);
function $build_rootPanel_0(this$static){
  var __attachRecord__, rootPanel, f_VerticalPanel1;
  rootPanel = new HTMLPanel($html2(this$static.domId0).html);
  $setPropertyImpl(rootPanel.element.style, 'width', '487px');
  $setPropertyImpl(rootPanel.element.style, 'height', '320px');
  __attachRecord__ = attachToDom(rootPanel.element);
  $get_1(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(rootPanel, (f_VerticalPanel1 = new VerticalPanel , $add_7(f_VerticalPanel1, this$static.f_HorizontalPanel2) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.f_HorizontalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_7(f_VerticalPanel1, this$static.f_Label5) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.f_Label5, ALIGN_CENTER) , $setCellWidth(f_VerticalPanel1, this$static.f_Label5, '400') , $setCellHeight(f_VerticalPanel1, this$static.f_Label5, '54') , $add_7(f_VerticalPanel1, this$static.usersGrid) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.usersGrid, ALIGN_CENTER) , $setClassName(f_VerticalPanel1.element, 'center') , $setPropertyImpl(f_VerticalPanel1.element.style, 'width', '487px') , $setPropertyImpl(f_VerticalPanel1.element.style, 'height', '320px') , f_VerticalPanel1), $get_1(this$static.domId0Element));
  return rootPanel;
}

function ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets(owner){
  var style, f_SimplePanel3, homeButton, scheduleButton, coursesButton, accountButton, f_Label6, f_Label7, f_Label8, f_Label9, promoteButton, sb, f_Image4;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$2(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$3(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$4(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$5(this);
  this.owner = owner;
  style = (new ManageUserViewImpl_ManageUserViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_ManageUserViewImpl_ManageUserViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_9);
  $ensureInjected_8(style);
  this.domId0 = $createUniqueId($doc);
  this.f_HorizontalPanel2 = new HorizontalPanel;
  $setHorizontalAlignment(this.f_HorizontalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $add_2(this.f_HorizontalPanel2, (f_SimplePanel3 = new SimplePanel , $add_5(f_SimplePanel3, (f_Image4 = new Image_0 , $setPropertyImpl(f_Image4.element.style, 'width', '123px') , $setUrl(f_Image4, ($clinit_UriUtils() , new SafeUriString('https://www.wpi.edu/sites/default/files/inline-image/Offices/Marketing-Communications/WPI_Inst_Prim_FulClr_PREVIEW.png'))) , $setPropertyImpl(f_Image4.element.style, 'height', '35px') , f_Image4)) , f_SimplePanel3));
  $add_2(this.f_HorizontalPanel2, (homeButton = new Button , $setClassName(homeButton.element, 'navButton') , $setPropertyImpl(homeButton.element.style, 'width', '77px') , $setInnerText(homeButton.element, 'Home') , $setPropertyImpl(homeButton.element.style, 'height', '37px') , $addDomHandler(homeButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0)) , homeButton));
  $add_2(this.f_HorizontalPanel2, (scheduleButton = new Button , $setClassName(scheduleButton.element, 'navButton') , $setPropertyImpl(scheduleButton.element.style, 'width', '73px') , $setInnerText(scheduleButton.element, 'Schedule') , $setPropertyImpl(scheduleButton.element.style, 'height', '38px') , $addDomHandler(scheduleButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_0)) , scheduleButton));
  $add_2(this.f_HorizontalPanel2, (coursesButton = new Button , $setClassName(coursesButton.element, 'navButton') , $setPropertyImpl(coursesButton.element.style, 'width', '75px') , $setInnerText(coursesButton.element, 'Courses') , $setPropertyImpl(coursesButton.element.style, 'height', '38px') , $addDomHandler(coursesButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_0)) , coursesButton));
  $add_2(this.f_HorizontalPanel2, (accountButton = new Button , $setClassName(accountButton.element, 'navButton') , $setPropertyImpl(accountButton.element.style, 'width', '74px') , $setInnerText(accountButton.element, 'Account') , $setPropertyImpl(accountButton.element.style, 'height', '38px') , $addDomHandler(accountButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_0)) , accountButton));
  this.f_Label5 = new Label;
  $setStyleName(this.f_Label5, 'page-title');
  $setWidth(this.f_Label5, '100%');
  $setText_0(this.f_Label5, 'Manage Users');
  $setHeight(this.f_Label5, '54px');
  this.usersGrid = new Grid;
  $resize(this.usersGrid, 1, 5);
  $setWidget(this.usersGrid, 0, 0, (f_Label6 = new Label , $setPropertyImpl(f_Label6.element.style, 'width', '86px') , $setTextOrHtml(f_Label6.directionalTextHelper, 'First Name') , $updateHorizontalAlignment(f_Label6) , $setPropertyImpl(f_Label6.element.style, 'height', '18px') , f_Label6));
  $setWidget(this.usersGrid, 0, 1, (f_Label7 = new Label , $setPropertyImpl(f_Label7.element.style, 'width', '78px') , $setTextOrHtml(f_Label7.directionalTextHelper, 'Last Name') , $updateHorizontalAlignment(f_Label7) , $setPropertyImpl(f_Label7.element.style, 'height', '18px') , f_Label7));
  $setWidget(this.usersGrid, 0, 2, (f_Label8 = new Label , $setPropertyImpl(f_Label8.element.style, 'width', '67px') , $setTextOrHtml(f_Label8.directionalTextHelper, 'Email') , $updateHorizontalAlignment(f_Label8) , $setPropertyImpl(f_Label8.element.style, 'height', '19px') , f_Label8));
  $setWidget(this.usersGrid, 0, 3, (f_Label9 = new Label , $setPropertyImpl(f_Label9.element.style, 'width', '158px') , $setTextOrHtml(f_Label9.directionalTextHelper, 'Rank') , $updateHorizontalAlignment(f_Label9) , $setPropertyImpl(f_Label9.element.style, 'height', '18px') , f_Label9));
  $setWidget(this.usersGrid, 0, 4, (promoteButton = new Button , $setHTML(promoteButton, (sb = new StringBuilder , sb.string += 'Promote' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , $addDomHandler(promoteButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, (null , TYPE_0)) , promoteButton));
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(465, 1, {}, ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ManageUserViewImpl_1ManageUserViewImplUiBinderImpl$Widgets_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ManageUserViewImpl_ManageUserViewImplUiBinderImpl/Widgets', 465);
function ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(466, 1, $intern_35, ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$1);
_.onClick = function onClick_26(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 200), 135).eventBus, new LoadHomePageEvent(new LoadHomePageAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ManageUserViewImpl_1ManageUserViewImplUiBinderImpl$Widgets$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ManageUserViewImpl_ManageUserViewImplUiBinderImpl/Widgets/1', 466);
function ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(467, 1, $intern_35, ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$2);
_.onClick = function onClick_27(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 200), 135).eventBus, new LoadScheduleEvent(new LoadScheduleAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ManageUserViewImpl_1ManageUserViewImplUiBinderImpl$Widgets$2_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ManageUserViewImpl_ManageUserViewImplUiBinderImpl/Widgets/2', 467);
function ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$3(this$1){
  this.this$11 = this$1;
}

defineClass(468, 1, $intern_35, ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$3);
_.onClick = function onClick_28(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 200), 135).eventBus, new LoadViewCoursesEvent(new LoadViewCoursesAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ManageUserViewImpl_1ManageUserViewImplUiBinderImpl$Widgets$3_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ManageUserViewImpl_ManageUserViewImplUiBinderImpl/Widgets/3', 468);
function ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$4(this$1){
  this.this$11 = this$1;
}

defineClass(469, 1, $intern_35, ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$4);
_.onClick = function onClick_29(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 200), 135).eventBus, new ManageUserPageEvent(new ManageUserPageAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ManageUserViewImpl_1ManageUserViewImplUiBinderImpl$Widgets$4_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ManageUserViewImpl_ManageUserViewImplUiBinderImpl/Widgets/4', 469);
function ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$5(this$1){
  this.this$11 = this$1;
}

defineClass(470, 1, $intern_35, ManageUserViewImpl_ManageUserViewImplUiBinderImpl$Widgets$5);
_.onClick = function onClick_30(event_0){
  dynamicCast(this.this$11.owner.presenter, 200);
  alert_0('promote user function coming soon!');
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ManageUserViewImpl_1ManageUserViewImplUiBinderImpl$Widgets$5_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ManageUserViewImpl_ManageUserViewImplUiBinderImpl/Widgets/5', 470);
function ManageUserViewImpl_ManageUserViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(523, 1, {}, ManageUserViewImpl_ManageUserViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_9;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ManageUserViewImpl_1ManageUserViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ManageUserViewImpl_ManageUserViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 523);
function $ensureInjected_8(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function ManageUserViewImpl_ManageUserViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(524, 1, {}, ManageUserViewImpl_ManageUserViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ManageUserViewImpl_1ManageUserViewImplUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ManageUserViewImpl_ManageUserViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 524);
function $clinit_ManageUserViewImpl_ManageUserViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_ManageUserViewImpl_ManageUserViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_9 = new ManageUserViewImpl_ManageUserViewImplUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html2(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_3(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function ViewCoursesViewImpl(){
  $initWidget(this, $build_baseContainer_2(new ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets(this)));
}

defineClass(414, 655, $intern_26, ViewCoursesViewImpl);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ViewCoursesViewImpl_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ViewCoursesViewImpl', 414);
function $build_baseContainer_2(this$static){
  var __attachRecord__, baseContainer, f_VerticalPanel1;
  baseContainer = new HTMLPanel($html3_0(this$static.domId0).html);
  $setClassName(baseContainer.element, 'viewCoursesglobal');
  $setPropertyImpl(baseContainer.element.style, 'width', '900');
  $setPropertyImpl(baseContainer.element.style, 'height', '900');
  __attachRecord__ = attachToDom(baseContainer.element);
  $get_1(this$static.domId0Element);
  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);
  $addAndReplaceElement(baseContainer, (f_VerticalPanel1 = new VerticalPanel , $add_7(f_VerticalPanel1, this$static.f_HorizontalPanel2) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.f_HorizontalPanel2, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER)) , $add_7(f_VerticalPanel1, this$static.pageTitle) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.pageTitle, ALIGN_CENTER) , $add_7(f_VerticalPanel1, this$static.f_HorizontalPanel4) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.f_HorizontalPanel4, ALIGN_CENTER) , $add_7(f_VerticalPanel1, this$static.addCourseButton) , $setCellHorizontalAlignment(f_VerticalPanel1, this$static.addCourseButton, ALIGN_RIGHT) , $setPropertyImpl(f_VerticalPanel1.element.style, 'width', '487px') , $setPropertyImpl(f_VerticalPanel1.element.style, 'height', '320px') , f_VerticalPanel1), $get_1(this$static.domId0Element));
  return baseContainer;
}

function ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets(owner){
  var style, f_ScrollPanel5, f_VerticalPanel6, courseList, editCourseButton, sb, removeCourseButton, sb_0;
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$1(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$2(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$3(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$4(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$5(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$6(this);
  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$7(this);
  this.owner = owner;
  style = (new ViewCoursesViewImpl_viewCoursesUiBinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_ViewCoursesViewImpl_viewCoursesUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_10);
  $ensureInjected_9(style);
  this.domId0 = $createUniqueId($doc);
  this.f_Image3 = new Image_0;
  $setWidth(this.f_Image3, '25%');
  $setUrl(this.f_Image3, ($clinit_UriUtils() , new SafeUriString('https://www.wpi.edu/sites/default/files/inline-image/Offices/Marketing-Communications/WPI_Inst_Prim_FulClr_PREVIEW.png')));
  $setHeight(this.f_Image3, '5%');
  this.homeButton = new Button;
  $setStyleName(this.homeButton, 'navButton');
  $setText(this.homeButton, 'Home');
  $addDomHandler(this.homeButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_0));
  this.scheduleButton = new Button;
  $setStyleName(this.scheduleButton, 'navButton');
  $setText(this.scheduleButton, 'Schedule');
  $addDomHandler(this.scheduleButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, (null , TYPE_0));
  this.coursesButton = new Button;
  $setStyleName(this.coursesButton, 'navButton');
  $setText(this.coursesButton, 'Courses');
  $addDomHandler(this.coursesButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, (null , TYPE_0));
  this.accountButton = new Button;
  $setStyleName(this.accountButton, 'navButton');
  $setText(this.accountButton, 'Account');
  $addDomHandler(this.accountButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, (null , TYPE_0));
  this.f_HorizontalPanel2 = new HorizontalPanel;
  $add_2(this.f_HorizontalPanel2, this.f_Image3);
  $setCellHorizontalAlignment(this.f_HorizontalPanel2, this.f_Image3, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  $add_2(this.f_HorizontalPanel2, this.homeButton);
  $setCellHorizontalAlignment(this.f_HorizontalPanel2, this.homeButton, ALIGN_LEFT);
  $add_2(this.f_HorizontalPanel2, this.scheduleButton);
  $setCellHorizontalAlignment(this.f_HorizontalPanel2, this.scheduleButton, ALIGN_LEFT);
  $add_2(this.f_HorizontalPanel2, this.coursesButton);
  $setCellHorizontalAlignment(this.f_HorizontalPanel2, this.coursesButton, ALIGN_LEFT);
  $add_2(this.f_HorizontalPanel2, this.accountButton);
  $setCellHorizontalAlignment(this.f_HorizontalPanel2, this.accountButton, ALIGN_LEFT);
  this.pageTitle = new Label;
  $setStyleName(this.pageTitle, 'viewCoursesHeader');
  $setText_0(this.pageTitle, 'View Courses');
  $setHeight(this.pageTitle, '77px');
  this.f_HorizontalPanel4 = new HorizontalPanel;
  $add_2(this.f_HorizontalPanel4, (f_ScrollPanel5 = new ScrollPanel , $add_5(f_ScrollPanel5, (courseList = new StackPanel , $setPropertyImpl(courseList.element.style, 'width', '100%') , $setPropertyImpl(courseList.element.style, 'height', '75%') , this.owner.courseList = courseList , courseList)) , f_ScrollPanel5.scrollableElem.style['overflow'] = ($clinit_Style$Overflow() , 'scroll') , $setPropertyImpl(f_ScrollPanel5.element.style, 'width', '100%') , $setPropertyImpl(f_ScrollPanel5.element.style, 'height', '500px') , f_ScrollPanel5));
  $add_2(this.f_HorizontalPanel4, (f_VerticalPanel6 = new VerticalPanel , $add_7(f_VerticalPanel6, (editCourseButton = new Button , $setHTML(editCourseButton, (sb = new StringBuilder , sb.string += 'Edit Course' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , $setClassName(editCourseButton.element, 'gwt-Button') , $addDomHandler(editCourseButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_0)) , this.owner.editCourseButton = editCourseButton , editCourseButton)) , $add_7(f_VerticalPanel6, (removeCourseButton = new Button , $setHTML(removeCourseButton, (sb_0 = new StringBuilder , sb_0.string += 'Edit Course' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , $setInnerText(removeCourseButton.element, 'Remove Course') , $addDomHandler(removeCourseButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_0)) , this.owner.removeCourseButton = removeCourseButton , removeCourseButton)) , f_VerticalPanel6));
  this.addCourseButton = new Button;
  $setText(this.addCourseButton, 'Add new Course...');
  $addDomHandler(this.addCourseButton, this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (null , TYPE_0));
  this.owner.addCourseButton = this.addCourseButton;
  this.domId0Element = new LazyDomElement(this.domId0);
}

defineClass(471, 1, {}, ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ViewCoursesViewImpl_1viewCoursesUiBinderImpl$Widgets_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ViewCoursesViewImpl_viewCoursesUiBinderImpl/Widgets', 471);
function ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$1(this$1){
  this.this$11 = this$1;
}

defineClass(472, 1, $intern_35, ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$1);
_.onClick = function onClick_31(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 154), 121).eventBus, new LoadAddCourseEvent(new LoadAddCourseAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ViewCoursesViewImpl_1viewCoursesUiBinderImpl$Widgets$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ViewCoursesViewImpl_viewCoursesUiBinderImpl/Widgets/1', 472);
function ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$2(this$1){
  this.this$11 = this$1;
}

defineClass(473, 1, $intern_35, ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$2);
_.onClick = function onClick_32(event_0){
  $loadEditPage(dynamicCast(this.this$11.owner.presenter, 154));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ViewCoursesViewImpl_1viewCoursesUiBinderImpl$Widgets$2_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ViewCoursesViewImpl_viewCoursesUiBinderImpl/Widgets/2', 473);
function ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$3(this$1){
  this.this$11 = this$1;
}

defineClass(474, 1, $intern_35, ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$3);
_.onClick = function onClick_33(event_0){
  $removeCourse(dynamicCast(this.this$11.owner.presenter, 154));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ViewCoursesViewImpl_1viewCoursesUiBinderImpl$Widgets$3_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ViewCoursesViewImpl_viewCoursesUiBinderImpl/Widgets/3', 474);
function ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$4(this$1){
  this.this$11 = this$1;
}

defineClass(475, 1, $intern_35, ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$4);
_.onClick = function onClick_34(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 154), 121).eventBus, new LoadHomePageEvent(new LoadHomePageAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ViewCoursesViewImpl_1viewCoursesUiBinderImpl$Widgets$4_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ViewCoursesViewImpl_viewCoursesUiBinderImpl/Widgets/4', 475);
function ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$5(this$1){
  this.this$11 = this$1;
}

defineClass(476, 1, $intern_35, ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$5);
_.onClick = function onClick_35(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 154), 121).eventBus, new LoadScheduleEvent(new LoadScheduleAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ViewCoursesViewImpl_1viewCoursesUiBinderImpl$Widgets$5_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ViewCoursesViewImpl_viewCoursesUiBinderImpl/Widgets/5', 476);
function ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$6(this$1){
  this.this$11 = this$1;
}

defineClass(477, 1, $intern_35, ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$6);
_.onClick = function onClick_36(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 154), 121).eventBus, new LoadViewCoursesEvent(new LoadViewCoursesAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ViewCoursesViewImpl_1viewCoursesUiBinderImpl$Widgets$6_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ViewCoursesViewImpl_viewCoursesUiBinderImpl/Widgets/6', 477);
function ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$7(this$1){
  this.this$11 = this$1;
}

defineClass(478, 1, $intern_35, ViewCoursesViewImpl_viewCoursesUiBinderImpl$Widgets$7);
_.onClick = function onClick_37(event_0){
  $castFireEvent(dynamicCast(dynamicCast(this.this$11.owner.presenter, 154), 121).eventBus, new ManageUserPageEvent(new ManageUserPageAction));
}
;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ViewCoursesViewImpl_1viewCoursesUiBinderImpl$Widgets$7_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ViewCoursesViewImpl_viewCoursesUiBinderImpl/Widgets/7', 478);
function ViewCoursesViewImpl_viewCoursesUiBinderImpl_GenBundle_default_InlineClientBundleGenerator(){
}

defineClass(525, 1, {}, ViewCoursesViewImpl_viewCoursesUiBinderImpl_GenBundle_default_InlineClientBundleGenerator);
var style_10;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ViewCoursesViewImpl_1viewCoursesUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ViewCoursesViewImpl_viewCoursesUiBinderImpl_GenBundle_default_InlineClientBundleGenerator', 525);
function $ensureInjected_9(this$static){
  if (!this$static.injected) {
    this$static.injected = true;
    $clinit_StyleInjector();
    $push_0(toInject, '');
    schedule();
    return true;
  }
  return false;
}

function ViewCoursesViewImpl_viewCoursesUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){
}

defineClass(526, 1, {}, ViewCoursesViewImpl_viewCoursesUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1);
_.injected = false;
var Lorg_dselent_course_1load_1scheduler_client_view_impl_ViewCoursesViewImpl_1viewCoursesUiBinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'ViewCoursesViewImpl_viewCoursesUiBinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 526);
function $clinit_ViewCoursesViewImpl_viewCoursesUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){
  $clinit_ViewCoursesViewImpl_viewCoursesUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;
  style_10 = new ViewCoursesViewImpl_viewCoursesUiBinderImpl_GenBundle_default_InlineClientBundleGenerator$1;
}

function $html3_0(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<span id='";
  $append_3(sb, htmlEscape(arg0));
  sb.string += "'><\/span>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$AddCourseViewImpl$_annotation$$none$$(){
  var created;
  created = new AddCourseViewImpl;
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$AddSectionViewImpl$_annotation$$none$$(){
  var created;
  created = new AddSectionViewImpl;
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$AdminCalendarViewImpl$_annotation$$none$$(){
  var created;
  created = new AdminCalendarViewImpl;
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$CreateAccountViewImpl$_annotation$$none$$(){
  var created;
  created = new CreateAccountViewImpl;
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$EditCourseViewImpl$_annotation$$none$$(){
  var created;
  created = new EditCourseViewImpl;
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$EditSectionViewImpl$_annotation$$none$$(){
  var created;
  created = new EditSectionViewImpl;
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$ExampleViewImpl$_annotation$$none$$(){
  var created;
  created = new ExampleViewImpl;
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$HomeViewImpl$_annotation$$none$$(){
  var created;
  created = new HomeViewImpl;
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$IndexViewImpl$_annotation$$none$$(){
  var created;
  created = new IndexViewImpl;
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$LoginPageViewImpl$_annotation$$none$$(){
  var created;
  created = new LoginPageViewImpl;
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$ManageUserViewImpl$_annotation$$none$$(){
  var created;
  created = new ManageUserViewImpl;
  return created;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$ViewCoursesViewImpl$_annotation$$none$$(){
  var created;
  created = new ViewCoursesViewImpl;
  return created;
}

function org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_3(){
}

defineClass(401, 1, {}, org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_3);
var Lorg_dselent_course_1load_1scheduler_client_view_impl_org_1dselent_1course_1load_1scheduler_1client_1gin_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view.impl', 'org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment', 401);
function $get_Key$type$org$dselent$course_load_scheduler$client$view$AddCourseView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$AddCourseView$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$AddCourseViewImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$AddCourseView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$AddCourseView$_annotation$$none$$;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$AddSectionView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$AddSectionView$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$AddSectionViewImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$AddSectionView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$AddSectionView$_annotation$$none$$;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$AdminCalendarView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$AdminCalendarView$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$AdminCalendarViewImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$AdminCalendarView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$AdminCalendarView$_annotation$$none$$;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$CreateAccountView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$CreateAccountView$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$CreateAccountViewImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$CreateAccountView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$CreateAccountView$_annotation$$none$$;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$EditCourseView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$EditCourseView$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$EditCourseViewImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$EditCourseView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$EditCourseView$_annotation$$none$$;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$EditSectionView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$EditSectionView$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$EditSectionViewImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$EditSectionView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$EditSectionView$_annotation$$none$$;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$ExampleView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$ExampleView$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$ExampleViewImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$ExampleView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$ExampleView$_annotation$$none$$;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$HomeView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$HomeView$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$HomeViewImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$HomeView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$HomeView$_annotation$$none$$;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$IndexView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$IndexView$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$IndexViewImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$IndexView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$IndexView$_annotation$$none$$;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$LoginPageView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$LoginPageView$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$LoginPageViewImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$LoginPageView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$LoginPageView$_annotation$$none$$;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$ManageUserView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$ManageUserView$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$ManageUserViewImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$ManageUserView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$ManageUserView$_annotation$$none$$;
}

function $get_Key$type$org$dselent$course_load_scheduler$client$view$ViewCoursesView$_annotation$$none$$(this$static){
  var result;
  if (!this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$ViewCoursesView$_annotation$$none$$) {
    result = $get_Key$type$org$dselent$course_load_scheduler$client$view$impl$ViewCoursesViewImpl$_annotation$$none$$($getFragment_org_dselent_course_load_scheduler_client_view_impl(this$static.injector));
    this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$ViewCoursesView$_annotation$$none$$ = result;
  }
  return this$static.singleton_Key$type$org$dselent$course_load_scheduler$client$view$ViewCoursesView$_annotation$$none$$;
}

function org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_4(injector){
  this.injector = injector;
}

defineClass(357, 1, {}, org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment_4);
_.singleton_Key$type$org$dselent$course_load_scheduler$client$view$AddCourseView$_annotation$$none$$ = null;
_.singleton_Key$type$org$dselent$course_load_scheduler$client$view$AddSectionView$_annotation$$none$$ = null;
_.singleton_Key$type$org$dselent$course_load_scheduler$client$view$AdminCalendarView$_annotation$$none$$ = null;
_.singleton_Key$type$org$dselent$course_load_scheduler$client$view$CreateAccountView$_annotation$$none$$ = null;
_.singleton_Key$type$org$dselent$course_load_scheduler$client$view$EditCourseView$_annotation$$none$$ = null;
_.singleton_Key$type$org$dselent$course_load_scheduler$client$view$EditSectionView$_annotation$$none$$ = null;
_.singleton_Key$type$org$dselent$course_load_scheduler$client$view$ExampleView$_annotation$$none$$ = null;
_.singleton_Key$type$org$dselent$course_load_scheduler$client$view$HomeView$_annotation$$none$$ = null;
_.singleton_Key$type$org$dselent$course_load_scheduler$client$view$IndexView$_annotation$$none$$ = null;
_.singleton_Key$type$org$dselent$course_load_scheduler$client$view$LoginPageView$_annotation$$none$$ = null;
_.singleton_Key$type$org$dselent$course_load_scheduler$client$view$ManageUserView$_annotation$$none$$ = null;
_.singleton_Key$type$org$dselent$course_load_scheduler$client$view$ViewCoursesView$_annotation$$none$$ = null;
var Lorg_dselent_course_1load_1scheduler_client_view_org_1dselent_1course_1load_1scheduler_1client_1gin_1Injector_1InjectorGinjector_1fragment_2_classLit = createForClass('org.dselent.course_load_scheduler.client.view', 'org_dselent_course_load_scheduler_client_gin_Injector_InjectorGinjector_fragment', 357);
var I_classLit = createForPrimitive('int', 'I'), Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 630), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 632), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 635), B_classLit = createForPrimitive('byte', 'B'), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=course_load_scheduler-0.js

