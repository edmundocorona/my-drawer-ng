module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 	    delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = global["webpackHotUpdate"];
/******/ 	global["webpackHotUpdate"] =     function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 	        hotAddUpdateChunk(chunkId, moreModules);
/******/ 	        if (parentHotUpdateCallback) {
/******/ 	            parentHotUpdateCallback(chunkId, moreModules);
/******/ 	        }
/******/ 	    }
/******/
/******/ 	    function hotDownloadUpdateChunk(chunkId) {
/******/ 	        const requestPath = './' + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 	        try {
/******/ 	            require(requestPath);
/******/ 	        } catch (e) {
/******/ 	            console.log("Hot download for update chunk failed.");
/******/ 	            console.error(e);
/******/ 	        }
/******/ 	    }
/******/
/******/ 	    function hotDownloadManifest() {
/******/ 	        return new Promise(function (resolve, reject) {
/******/ 	            const requestPath = './' + "" + hotCurrentHash + ".hot-update.json";
/******/ 	            try {
/******/ 	                const update = require(requestPath);
/******/ 	                resolve(update);
/******/ 	            } catch (e) {
/******/ 	                console.log("Hot download for manifest failed.");
/******/ 	                console.error(e);
/******/ 	                reject(e);
/******/ 	            }
/******/ 	        });
/******/ 	    }
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "83c4d9f9e8b6fb0409bd";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.ts","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * Convenient single import for light variables\r\n * Includes base variables with light overrides\r\n **/\n/**\r\n * Light variable overrides\r\n **/\n/**\n * Theme variables overrides\n**/\n/**\r\n * Color classes\r\n * The following creates this pattern:\r\n * .c-grey{color:#e0e0e0}.c-bg-grey{background-color:#e0e0e0}\r\n**/\n.c-white {\n  color: #fff; }\n\n.c-bg-white {\n  background-color: #fff; }\n\n.c-black {\n  color: #000; }\n\n.c-bg-black {\n  background-color: #000; }\n\n.c-aqua {\n  color: #00caab; }\n\n.c-bg-aqua {\n  background-color: #00caab; }\n\n.c-blue {\n  color: #3d5afe; }\n\n.c-bg-blue {\n  background-color: #3d5afe; }\n\n.c-charcoal {\n  color: #303030; }\n\n.c-bg-charcoal {\n  background-color: #303030; }\n\n.c-brown {\n  color: #795548; }\n\n.c-bg-brown {\n  background-color: #795548; }\n\n.c-forest {\n  color: #006968; }\n\n.c-bg-forest {\n  background-color: #006968; }\n\n.c-grey {\n  color: #e0e0e0; }\n\n.c-bg-grey {\n  background-color: #e0e0e0; }\n\n.c-grey-light {\n  color: #bababa; }\n\n.c-bg-grey-light {\n  background-color: #bababa; }\n\n.c-grey-dark {\n  color: #5c687c; }\n\n.c-bg-grey-dark {\n  background-color: #5c687c; }\n\n.c-purple {\n  color: #8130ff; }\n\n.c-bg-purple {\n  background-color: #8130ff; }\n\n.c-lemon {\n  color: #ffea00; }\n\n.c-bg-lemon {\n  background-color: #ffea00; }\n\n.c-lime {\n  color: #aee406; }\n\n.c-bg-lime {\n  background-color: #aee406; }\n\n.c-orange {\n  color: #f57c00; }\n\n.c-bg-orange {\n  background-color: #f57c00; }\n\n.c-ruby {\n  color: #ff1744; }\n\n.c-bg-ruby {\n  background-color: #ff1744; }\n\n.c-sky {\n  color: #30bcff; }\n\n.c-bg-sky {\n  background-color: #30bcff; }\n\n/* Width/Height */\n.w-full {\n  width: 100%; }\n\n.w-100 {\n  width: 100; }\n\n.h-full {\n  height: 100%; }\n\n.h-100 {\n  height: 100; }\n\n/**\r\n * Margin and Padding\r\n * The following creates this pattern:\r\n * .m-0{margin:0}.m-t-0{margin-top:0}.m-r-0{margin-right:0}.m-b-0{margin-bottom:0}.m-l-0{margin-left:0}.m-x-0{margin-right:0;margin-left:0}.m-y-0{margin-top:0;margin-bottom:0}\r\n * Same for Padding (using the 'p' abbreviation)\r\n * From 0, 2, 5, 10, 15, 20, 25, 30\r\n**/\n.m-0 {\n  margin: 0; }\n\n.m-t-0 {\n  margin-top: 0; }\n\n.m-r-0 {\n  margin-right: 0; }\n\n.m-b-0 {\n  margin-bottom: 0; }\n\n.m-l-0 {\n  margin-left: 0; }\n\n.m-x-0 {\n  margin-right: 0;\n  margin-left: 0; }\n\n.m-y-0 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.m-2 {\n  margin: 2; }\n\n.m-t-2 {\n  margin-top: 2; }\n\n.m-r-2 {\n  margin-right: 2; }\n\n.m-b-2 {\n  margin-bottom: 2; }\n\n.m-l-2 {\n  margin-left: 2; }\n\n.m-x-2 {\n  margin-right: 2;\n  margin-left: 2; }\n\n.m-y-2 {\n  margin-top: 2;\n  margin-bottom: 2; }\n\n.m-4 {\n  margin: 4; }\n\n.m-t-4 {\n  margin-top: 4; }\n\n.m-r-4 {\n  margin-right: 4; }\n\n.m-b-4 {\n  margin-bottom: 4; }\n\n.m-l-4 {\n  margin-left: 4; }\n\n.m-x-4 {\n  margin-right: 4;\n  margin-left: 4; }\n\n.m-y-4 {\n  margin-top: 4;\n  margin-bottom: 4; }\n\n.m-5 {\n  margin: 5; }\n\n.m-t-5 {\n  margin-top: 5; }\n\n.m-r-5 {\n  margin-right: 5; }\n\n.m-b-5 {\n  margin-bottom: 5; }\n\n.m-l-5 {\n  margin-left: 5; }\n\n.m-x-5 {\n  margin-right: 5;\n  margin-left: 5; }\n\n.m-y-5 {\n  margin-top: 5;\n  margin-bottom: 5; }\n\n.m-8 {\n  margin: 8; }\n\n.m-t-8 {\n  margin-top: 8; }\n\n.m-r-8 {\n  margin-right: 8; }\n\n.m-b-8 {\n  margin-bottom: 8; }\n\n.m-l-8 {\n  margin-left: 8; }\n\n.m-x-8 {\n  margin-right: 8;\n  margin-left: 8; }\n\n.m-y-8 {\n  margin-top: 8;\n  margin-bottom: 8; }\n\n.m-10 {\n  margin: 10; }\n\n.m-t-10 {\n  margin-top: 10; }\n\n.m-r-10 {\n  margin-right: 10; }\n\n.m-b-10 {\n  margin-bottom: 10; }\n\n.m-l-10 {\n  margin-left: 10; }\n\n.m-x-10 {\n  margin-right: 10;\n  margin-left: 10; }\n\n.m-y-10 {\n  margin-top: 10;\n  margin-bottom: 10; }\n\n.m-12 {\n  margin: 12; }\n\n.m-t-12 {\n  margin-top: 12; }\n\n.m-r-12 {\n  margin-right: 12; }\n\n.m-b-12 {\n  margin-bottom: 12; }\n\n.m-l-12 {\n  margin-left: 12; }\n\n.m-x-12 {\n  margin-right: 12;\n  margin-left: 12; }\n\n.m-y-12 {\n  margin-top: 12;\n  margin-bottom: 12; }\n\n.m-15 {\n  margin: 15; }\n\n.m-t-15 {\n  margin-top: 15; }\n\n.m-r-15 {\n  margin-right: 15; }\n\n.m-b-15 {\n  margin-bottom: 15; }\n\n.m-l-15 {\n  margin-left: 15; }\n\n.m-x-15 {\n  margin-right: 15;\n  margin-left: 15; }\n\n.m-y-15 {\n  margin-top: 15;\n  margin-bottom: 15; }\n\n.m-16 {\n  margin: 16; }\n\n.m-t-16 {\n  margin-top: 16; }\n\n.m-r-16 {\n  margin-right: 16; }\n\n.m-b-16 {\n  margin-bottom: 16; }\n\n.m-l-16 {\n  margin-left: 16; }\n\n.m-x-16 {\n  margin-right: 16;\n  margin-left: 16; }\n\n.m-y-16 {\n  margin-top: 16;\n  margin-bottom: 16; }\n\n.m-20 {\n  margin: 20; }\n\n.m-t-20 {\n  margin-top: 20; }\n\n.m-r-20 {\n  margin-right: 20; }\n\n.m-b-20 {\n  margin-bottom: 20; }\n\n.m-l-20 {\n  margin-left: 20; }\n\n.m-x-20 {\n  margin-right: 20;\n  margin-left: 20; }\n\n.m-y-20 {\n  margin-top: 20;\n  margin-bottom: 20; }\n\n.m-24 {\n  margin: 24; }\n\n.m-t-24 {\n  margin-top: 24; }\n\n.m-r-24 {\n  margin-right: 24; }\n\n.m-b-24 {\n  margin-bottom: 24; }\n\n.m-l-24 {\n  margin-left: 24; }\n\n.m-x-24 {\n  margin-right: 24;\n  margin-left: 24; }\n\n.m-y-24 {\n  margin-top: 24;\n  margin-bottom: 24; }\n\n.m-25 {\n  margin: 25; }\n\n.m-t-25 {\n  margin-top: 25; }\n\n.m-r-25 {\n  margin-right: 25; }\n\n.m-b-25 {\n  margin-bottom: 25; }\n\n.m-l-25 {\n  margin-left: 25; }\n\n.m-x-25 {\n  margin-right: 25;\n  margin-left: 25; }\n\n.m-y-25 {\n  margin-top: 25;\n  margin-bottom: 25; }\n\n.m-28 {\n  margin: 28; }\n\n.m-t-28 {\n  margin-top: 28; }\n\n.m-r-28 {\n  margin-right: 28; }\n\n.m-b-28 {\n  margin-bottom: 28; }\n\n.m-l-28 {\n  margin-left: 28; }\n\n.m-x-28 {\n  margin-right: 28;\n  margin-left: 28; }\n\n.m-y-28 {\n  margin-top: 28;\n  margin-bottom: 28; }\n\n.m-30 {\n  margin: 30; }\n\n.m-t-30 {\n  margin-top: 30; }\n\n.m-r-30 {\n  margin-right: 30; }\n\n.m-b-30 {\n  margin-bottom: 30; }\n\n.m-l-30 {\n  margin-left: 30; }\n\n.m-x-30 {\n  margin-right: 30;\n  margin-left: 30; }\n\n.m-y-30 {\n  margin-top: 30;\n  margin-bottom: 30; }\n\n.p-0 {\n  padding: 0; }\n\n.p-t-0 {\n  padding-top: 0; }\n\n.p-r-0 {\n  padding-right: 0; }\n\n.p-b-0 {\n  padding-bottom: 0; }\n\n.p-l-0 {\n  padding-left: 0; }\n\n.p-x-0 {\n  padding-right: 0;\n  padding-left: 0; }\n\n.p-y-0 {\n  padding-top: 0;\n  padding-bottom: 0; }\n\n.p-2 {\n  padding: 2; }\n\n.p-t-2 {\n  padding-top: 2; }\n\n.p-r-2 {\n  padding-right: 2; }\n\n.p-b-2 {\n  padding-bottom: 2; }\n\n.p-l-2 {\n  padding-left: 2; }\n\n.p-x-2 {\n  padding-right: 2;\n  padding-left: 2; }\n\n.p-y-2 {\n  padding-top: 2;\n  padding-bottom: 2; }\n\n.p-4 {\n  padding: 4; }\n\n.p-t-4 {\n  padding-top: 4; }\n\n.p-r-4 {\n  padding-right: 4; }\n\n.p-b-4 {\n  padding-bottom: 4; }\n\n.p-l-4 {\n  padding-left: 4; }\n\n.p-x-4 {\n  padding-right: 4;\n  padding-left: 4; }\n\n.p-y-4 {\n  padding-top: 4;\n  padding-bottom: 4; }\n\n.p-5 {\n  padding: 5; }\n\n.p-t-5 {\n  padding-top: 5; }\n\n.p-r-5 {\n  padding-right: 5; }\n\n.p-b-5 {\n  padding-bottom: 5; }\n\n.p-l-5 {\n  padding-left: 5; }\n\n.p-x-5 {\n  padding-right: 5;\n  padding-left: 5; }\n\n.p-y-5 {\n  padding-top: 5;\n  padding-bottom: 5; }\n\n.p-8 {\n  padding: 8; }\n\n.p-t-8 {\n  padding-top: 8; }\n\n.p-r-8 {\n  padding-right: 8; }\n\n.p-b-8 {\n  padding-bottom: 8; }\n\n.p-l-8 {\n  padding-left: 8; }\n\n.p-x-8 {\n  padding-right: 8;\n  padding-left: 8; }\n\n.p-y-8 {\n  padding-top: 8;\n  padding-bottom: 8; }\n\n.p-10 {\n  padding: 10; }\n\n.p-t-10 {\n  padding-top: 10; }\n\n.p-r-10 {\n  padding-right: 10; }\n\n.p-b-10 {\n  padding-bottom: 10; }\n\n.p-l-10 {\n  padding-left: 10; }\n\n.p-x-10 {\n  padding-right: 10;\n  padding-left: 10; }\n\n.p-y-10 {\n  padding-top: 10;\n  padding-bottom: 10; }\n\n.p-12 {\n  padding: 12; }\n\n.p-t-12 {\n  padding-top: 12; }\n\n.p-r-12 {\n  padding-right: 12; }\n\n.p-b-12 {\n  padding-bottom: 12; }\n\n.p-l-12 {\n  padding-left: 12; }\n\n.p-x-12 {\n  padding-right: 12;\n  padding-left: 12; }\n\n.p-y-12 {\n  padding-top: 12;\n  padding-bottom: 12; }\n\n.p-15 {\n  padding: 15; }\n\n.p-t-15 {\n  padding-top: 15; }\n\n.p-r-15 {\n  padding-right: 15; }\n\n.p-b-15 {\n  padding-bottom: 15; }\n\n.p-l-15 {\n  padding-left: 15; }\n\n.p-x-15 {\n  padding-right: 15;\n  padding-left: 15; }\n\n.p-y-15 {\n  padding-top: 15;\n  padding-bottom: 15; }\n\n.p-16 {\n  padding: 16; }\n\n.p-t-16 {\n  padding-top: 16; }\n\n.p-r-16 {\n  padding-right: 16; }\n\n.p-b-16 {\n  padding-bottom: 16; }\n\n.p-l-16 {\n  padding-left: 16; }\n\n.p-x-16 {\n  padding-right: 16;\n  padding-left: 16; }\n\n.p-y-16 {\n  padding-top: 16;\n  padding-bottom: 16; }\n\n.p-20 {\n  padding: 20; }\n\n.p-t-20 {\n  padding-top: 20; }\n\n.p-r-20 {\n  padding-right: 20; }\n\n.p-b-20 {\n  padding-bottom: 20; }\n\n.p-l-20 {\n  padding-left: 20; }\n\n.p-x-20 {\n  padding-right: 20;\n  padding-left: 20; }\n\n.p-y-20 {\n  padding-top: 20;\n  padding-bottom: 20; }\n\n.p-24 {\n  padding: 24; }\n\n.p-t-24 {\n  padding-top: 24; }\n\n.p-r-24 {\n  padding-right: 24; }\n\n.p-b-24 {\n  padding-bottom: 24; }\n\n.p-l-24 {\n  padding-left: 24; }\n\n.p-x-24 {\n  padding-right: 24;\n  padding-left: 24; }\n\n.p-y-24 {\n  padding-top: 24;\n  padding-bottom: 24; }\n\n.p-25 {\n  padding: 25; }\n\n.p-t-25 {\n  padding-top: 25; }\n\n.p-r-25 {\n  padding-right: 25; }\n\n.p-b-25 {\n  padding-bottom: 25; }\n\n.p-l-25 {\n  padding-left: 25; }\n\n.p-x-25 {\n  padding-right: 25;\n  padding-left: 25; }\n\n.p-y-25 {\n  padding-top: 25;\n  padding-bottom: 25; }\n\n.p-28 {\n  padding: 28; }\n\n.p-t-28 {\n  padding-top: 28; }\n\n.p-r-28 {\n  padding-right: 28; }\n\n.p-b-28 {\n  padding-bottom: 28; }\n\n.p-l-28 {\n  padding-left: 28; }\n\n.p-x-28 {\n  padding-right: 28;\n  padding-left: 28; }\n\n.p-y-28 {\n  padding-top: 28;\n  padding-bottom: 28; }\n\n.p-30 {\n  padding: 30; }\n\n.p-t-30 {\n  padding-top: 30; }\n\n.p-r-30 {\n  padding-right: 30; }\n\n.p-b-30 {\n  padding-bottom: 30; }\n\n.p-l-30 {\n  padding-left: 30; }\n\n.p-x-30 {\n  padding-right: 30;\n  padding-left: 30; }\n\n.p-y-30 {\n  padding-top: 30;\n  padding-bottom: 30; }\n\n/* Dividers */\n.hr-light {\n  height: 1;\n  background-color: #e0e0e0;\n  width: 100%; }\n\n.hr-dark {\n  height: 1;\n  background-color: #303030;\n  width: 100%; }\n\n/* Alignment */\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.font-weight-normal {\n  font-weight: normal; }\n\n.font-weight-bold {\n  font-weight: bold; }\n\n.font-italic {\n  font-style: italic; }\n\n/**\r\n * Font size\r\n * The following creates this pattern:\r\n * .t-10{font-size:10}\r\n * From 10, 12, 14, 15, 16, 17, 18, 19, 20\r\n**/\n.t-10 {\n  font-size: 10; }\n\n.t-12 {\n  font-size: 12; }\n\n.t-14 {\n  font-size: 14; }\n\n.t-15 {\n  font-size: 15; }\n\n.t-16 {\n  font-size: 16; }\n\n.t-17 {\n  font-size: 17; }\n\n.t-18 {\n  font-size: 18; }\n\n.t-19 {\n  font-size: 19; }\n\n.t-20 {\n  font-size: 20; }\n\n.t-25 {\n  font-size: 25; }\n\n.t-30 {\n  font-size: 30; }\n\n.img-rounded {\n  border-radius: 5; }\n\n.img-circle {\n  border-radius: 20; }\n\n.img-thumbnail {\n  border-radius: 0; }\n\n.invisible {\n  visibility: collapse; }\n\n.pull-left {\n  horizontal-align: left; }\n\n.pull-right {\n  horizontal-align: right; }\n\n.m-x-auto {\n  horizontal-align: center; }\n\n.m-y-auto {\n  vertical-align: center; }\n\n.text-primary {\n  color: #3A53FF; }\n\n.text-danger {\n  color: #ED473F; }\n\n.text-muted {\n  color: #9e9e9e; }\n\n.bg-primary {\n  background-color: #3A53FF;\n  color: #fff; }\n\n.bg-danger {\n  background-color: #ED473F;\n  color: #fff; }\n\n.action-bar {\n  background-color: #3A53FF;\n  color: #fff; }\n  .action-bar .action-bar-title {\n    font-weight: bold;\n    font-size: 17;\n    vertical-align: center; }\n  .action-bar .action-item {\n    font-weight: normal; }\n\n.activity-indicator {\n  color: #3A53FF;\n  width: 30;\n  height: 30; }\n\n.btn {\n  color: #3A53FF;\n  background-color: transparent;\n  min-height: 36;\n  min-width: 64;\n  padding: 10 10 10 10;\n  font-size: 18;\n  margin: 8 16 8 16; }\n  .btn.btn-active:highlighted {\n    color: #fff;\n    background-color: #6d80ff; }\n\n.btn-primary {\n  background-color: #3A53FF;\n  border-color: #3A53FF;\n  color: #fff; }\n  .btn-primary.btn-active:highlighted {\n    background-color: #0726ff;\n    border-color: #0726ff; }\n  .btn-primary.btn-aqua {\n    background-color: #00caab; }\n  .btn-primary.btn-blue {\n    background-color: #3d5afe; }\n  .btn-primary.btn-brown {\n    background-color: #795548; }\n  .btn-primary.btn-forest {\n    background-color: #006968; }\n  .btn-primary.btn-grey {\n    background-color: #5c687c; }\n  .btn-primary.btn-lemon {\n    background-color: #ffea00;\n    color: #000; }\n  .btn-primary.btn-lime {\n    background-color: #aee406;\n    color: #000; }\n  .btn-primary.btn-orange {\n    background-color: #f57c00; }\n  .btn-primary.btn-purple {\n    background-color: #8130ff; }\n  .btn-primary.btn-ruby {\n    background-color: #ff1744; }\n  .btn-primary.btn-sky {\n    background-color: #30bcff; }\n\n.btn-outline {\n  background-color: transparent;\n  border-color: #3A53FF;\n  color: #3A53FF; }\n  .btn-outline.btn-active:highlighted {\n    background-color: #6d80ff; }\n\n.btn[isEnabled=false] {\n  color: #a4a4a4;\n  background-color: #e0e0e0;\n  border-color: #e0e0e0; }\n\n.fa {\n  font-family: FontAwesome, fontawesome-webfont; }\n\n.form .input {\n  padding: 16 8 16 8;\n  background-color: transparent; }\n  .form .input.input-border {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 2;\n    padding: 16; }\n  .form .input.input-rounded {\n    border-width: 1;\n    border-color: #e0e0e0;\n    border-radius: 28;\n    padding: 16; }\n  .form .input[isEnabled='false'] {\n    background-color: #fafafa; }\n\n.form .input-field {\n  margin: 8; }\n  .form .input-field .label {\n    font-size: 12;\n    color: #bababa; }\n  .form .input-field .input {\n    padding: 0;\n    margin: 0 0 8 0; }\n  .form .input-field .hr-light.active,\n  .form .input-field .hr-dark.active {\n    background-color: #3A53FF; }\n  .form .input-field.input-sides .label {\n    font-size: 18;\n    margin: 0 0 8 0; }\n\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 4;\n  font-weight: normal;\n  color: #022734; }\n\n.body,\n.body2,\n.footnote {\n  font-weight: normal;\n  color: #022734; }\n\n.h1 {\n  font-size: 32; }\n\n.h2 {\n  font-size: 22; }\n\n.h3 {\n  font-size: 15; }\n\n.h4 {\n  font-size: 12; }\n\n.h5 {\n  font-size: 11; }\n\n.h6 {\n  font-size: 10; }\n\n.body {\n  font-size: 14; }\n\n.body2 {\n  font-size: 17; }\n\n.footnote {\n  font-size: 13; }\n\n.list-group .list-group-item {\n  color: #212121;\n  font-size: 16;\n  margin: 0;\n  padding: 16; }\n  .list-group .list-group-item Label {\n    vertical-align: center; }\n  .list-group .list-group-item .thumb {\n    stretch: fill;\n    width: 40;\n    height: 40;\n    margin-right: 16; }\n  .list-group .list-group-item.active {\n    background-color: #e0e0e0; }\n  .list-group .list-group-item .list-group-item-text {\n    color: #022734;\n    font-size: 14; }\n\n.page {\n  background-color: #fff; }\n\n.progress {\n  color: #3A53FF;\n  background-color: #bababa; }\n\n.segmented-bar {\n  font-size: 13;\n  background-color: #fff;\n  color: #212121;\n  selected-background-color: #3A53FF; }\n\n.sidedrawer-left, .sidedrawer-center {\n  background-color: #FFFFFF; }\n\n.sidedrawer-header {\n  background-color: #fafafa;\n  height: 148;\n  width: 100%; }\n\n.sidedrawer-left .sidedrawer-header {\n  padding: 16 16 0 16; }\n\n.sidedrawer-center .sidedrawer-header {\n  padding: 20 15 0 15; }\n\n.sidedrawer-header-image {\n  background-color: #e0e0e0; }\n\n.sidedrawer-left .sidedrawer-header-image {\n  height: 64;\n  width: 64;\n  border-radius: 32;\n  horizontal-align: left;\n  margin-bottom: 36; }\n\n.sidedrawer-center .sidedrawer-header-image {\n  height: 74;\n  width: 74;\n  border-radius: 37;\n  horizontal-align: center;\n  margin-bottom: 24; }\n\n.sidedrawer-header-brand {\n  color: #737373; }\n\n.sidedrawer-left .sidedrawer-header-brand {\n  horizontal-align: left;\n  font-size: 14; }\n\n.sidedrawer-center .sidedrawer-header-brand {\n  horizontal-align: center;\n  font-size: 15; }\n\n.sidedrawer-list-item {\n  height: 48;\n  horizontal-align: left;\n  width: 100%;\n  orientation: horizontal; }\n  .sidedrawer-list-item .sidedrawer-list-item-icon {\n    width: 24;\n    text-align: center;\n    font-size: 20;\n    height: 48;\n    vertical-align: center; }\n  .sidedrawer-list-item.active {\n    color: #3A53FF;\n    background-color: #F8F8F8; }\n    .sidedrawer-list-item.active .sidedrawer-list-item-icon {\n      color: #3A53FF; }\n\n.sidedrawer-left .sidedrawer-list-item-icon {\n  margin: 0 16 0 16; }\n\n.sidedrawer-center .sidedrawer-list-item-icon {\n  margin: 0 0 0 15; }\n\n.sidedrawer-list-item-text {\n  horizontal-align: left;\n  text-align: left;\n  font-size: 15;\n  background-color: transparent;\n  border-width: 0.1;\n  width: 80%;\n  vertical-align: center; }\n\n.sidedrawer-left .sidedrawer-list-item-text {\n  padding-left: 16; }\n\n.sidedrawer-center .sidedrawer-list-item-text {\n  padding-left: 15; }\n\n.slider {\n  background-color: #3A53FF; }\n  .slider[isEnabled=false] {\n    background-color: #e0e0e0;\n    color: #e0e0e0; }\n\n.switch[checked=true] {\n  background-color: #3A53FF;\n  color: #3A53FF; }\n\n.switch[checked=true][isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #fff; }\n\n.switch[isEnabled=false] {\n  background-color: #e0e0e0;\n  color: #e0e0e0; }\n\n.tab-view {\n  /*color: $secondary;*/\n  selected-color: #30bcff;\n  tabs-background-color: #fff; }\n  .tab-view .tab-view-item {\n    background-color: #fff;\n    tabs-background-color: #fff; }\n\n#login-background {\n  margin-top: -20;\n  background-size: cover;\n  background-position: center; }\n\n.login-wrap {\n  padding: 0 40; }\n\n.logo-wrap {\n  margin: 60 0 10 0;\n  padding: 20 0; }\n  .logo-wrap .login-logo {\n    text-align: center;\n    font-size: 30;\n    font-weight: bold;\n    margin-bottom: 10;\n    opacity: 1;\n    color: #212121;\n    opacity: .9; }\n  .logo-wrap .login-logo-sub {\n    color: #212121;\n    opacity: .8;\n    text-align: center; }\n\n.login-wrapper {\n  padding: 20;\n  background-color: #fff;\n  border-radius: 3; }\n  .login-wrapper TextField {\n    padding: 10 10;\n    margin: 10 0 0 0; }\n\n.go-back {\n  font-size: 14;\n  text-align: center;\n  color: #212121;\n  margin-top: 10; }\n\n/**\r\n * Import all platform specific files here\r\n */\n.btn {\n  border-width: 0;\n  font-family: 'SF UI Text Medium';\n  font-size: 15; }\n\n.btn-outline {\n  border-width: 1; }\n\n.btn-rounded-sm {\n  border-radius: 4; }\n\n.btn-rounded-lg {\n  border-radius: 19; }\n\n.form {\n  font-family: 'SF UI Text Regular'; }\n  .form .input {\n    font-size: 15; }\n    .form .input.input-rounded {\n      border-radius: 27; }\n\n/* This is here temporarily because _index.ios.scss cannot be empty */\n.h1 {\n  font-size: 32; }\n\n.slider {\n  margin: 10 15; }\n\n.sidedrawer-list-item-icon, .sidedrawer-list-item {\n  color: #022734; }\n\n.switch {\n  margin: 8 15; }\n\n.list-group .list-group-item {\n  padding: 16 15 16 15; }\n  .list-group .list-group-item .thumb {\n    margin-right: 15; }\n  .list-group .list-group-item .list-group-item-heading {\n    margin-bottom: 5; }\n\n.segmented-bar {\n  margin: 0 15;\n  color: #3A53FF; }\n\n.fa {\n  font-family: \"FontAwesome\"; }\n\n.page-content .page-placeholder {\n  color: #D7D7D7;\n  font-size: 20;\n  vertical-align: center;\n  horizontal-align: center; }\n\n.page-content .page-icon {\n  font-size: 72;\n  vertical-align: top;\n  horizontal-align: center;\n  color: #D7D7D7;\n  margin-top: 20%; }\n\nActionBar .action-bar-title {\n  horizontal-align: center; }\n\n.sidedrawer.sidedrawer-left {\n  background-color: #3A53FF; }\n  .sidedrawer.sidedrawer-left .sidedrawer-header-image {\n    color: #F8F8F8;\n    height: 60;\n    width: 60;\n    font-size: 60;\n    padding: 0;\n    margin-bottom: 5;\n    margin-top: 20; }\n  .sidedrawer.sidedrawer-left .footnote {\n    color: rgba(255, 255, 255, 0.5); }\n\n.sidedrawer .sidedrawer-header {\n  background-color: #3A53FF; }\n  .sidedrawer .sidedrawer-header .sidedrawer-header-brand {\n    color: #fff; }\n\n.sidedrawer .sidedrawer-content {\n  background-color: #FFFFFF; }\n  .sidedrawer .sidedrawer-content .sidedrawer-list-item {\n    padding-left: 15; }\n    .sidedrawer .sidedrawer-content .sidedrawer-list-item Label {\n      vertical-align: center;\n      color: #022734; }\n    .sidedrawer .sidedrawer-content .sidedrawer-list-item .fa {\n      width: 20;\n      margin-right: 10; }\n    .sidedrawer .sidedrawer-content .sidedrawer-list-item.selected {\n      background-color: #F8F8F8; }\n      .sidedrawer .sidedrawer-content .sidedrawer-list-item.selected Label {\n        color: #3A53FF; }\n\n/* Add mobile styles for the component here.  */\n.bottom-navigation {\n  height: 52;\n  text-align: center;\n  background-color: #ffffff;\n  border-top-color: #dae1e7;\n  border-top-width: 1; }\n\n.bottom-navigation .bottom-navigation-item .icon,\n.bottom-navigation .bottom-navigation-item .label {\n  color: #C1C1C1; }\n\n.bottom-navigation .bottom-navigation-item .icon {\n  font-size: 20;\n  margin-bottom: 2; }\n\n.bottom-navigation .bottom-navigation-item .label {\n  font-size: 10; }\n\n.bottom-navigation .bottom-navigation-item.selected .icon,\n.bottom-navigation .bottom-navigation-item.selected .label {\n  color: #22292f; }\n\n.bottom-navigation GridLayout {\n  margin: 10; }\n\nActionBar .fa {\n  padding: 40px 40px 40px 0; }\n", ""]);

// exports


/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var router_1 = __webpack_require__("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
    { path: "cart", loadChildren: "~/app/cart/cart.module#CartModule" },
    { path: "wishlist", loadChildren: "~/app/wishlist/wishlist.module#WishlistModule" },
    { path: "account", loadChildren: "~/app/account/account.module#AccountModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsbUNBQW1DLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSx5Q0FBeUMsRUFBRTtJQUMzRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHlDQUF5QyxFQUFFO0lBQzNFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwrQ0FBK0MsRUFBRTtJQUNuRixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLG1DQUFtQyxFQUFFO0lBQ25FLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSw0Q0FBNEMsRUFBRTtDQUNsRixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImJyb3dzZVwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvYnJvd3NlL2Jyb3dzZS5tb2R1bGUjQnJvd3NlTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic2VhcmNoXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9zZWFyY2gvc2VhcmNoLm1vZHVsZSNTZWFyY2hNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvZmVhdHVyZWQvZmVhdHVyZWQubW9kdWxlI0ZlYXR1cmVkTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic2V0dGluZ3NcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZSNTZXR0aW5nc01vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImNhcnRcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2NhcnQvY2FydC5tb2R1bGUjQ2FydE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcIndpc2hsaXN0XCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC93aXNobGlzdC93aXNobGlzdC5tb2R1bGUjV2lzaGxpc3RNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJhY2NvdW50XCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9hY2NvdW50L2FjY291bnQubW9kdWxlI0FjY291bnRNb2R1bGVcIiB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var router_1 = __webpack_require__("@angular/router");
var router_2 = __webpack_require__("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = __webpack_require__("nativescript-ui-sidedrawer");
var platform_1 = __webpack_require__("tns-core-modules/platform");
var operators_1 = __webpack_require__("rxjs/operators");
var app = __webpack_require__("tns-core-modules/application");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this._activatedUrl = event.urlAfterRedirects; });
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isComponentSelected = function (url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.onNavItemTap = function (navItemRoute) {
        console.log(navItemRoute);
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    AppComponent.prototype.getIconSource = function (icon) {
        var iconPrefix = platform_1.isAndroid ? "res://" : "res://tabIcons/";
        return iconPrefix + icon;
    };
    AppComponent = __decorate([
        core_1.Component({
            /*duleId: module.i*/
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXdEO0FBQ3hELHNEQUErRDtBQUMvRCx5RUFBeUc7QUFDekcsc0RBQXNEO0FBQ3RELDRDQUF3QztBQUN4QyxrREFBb0Q7QUFPcEQ7SUFJSSxzQkFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxRSxvREFBb0Q7SUFDeEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1EQUFzQixFQUFFLENBQUM7UUFFMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2pCLElBQUksQ0FBQyxrQkFBTSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsS0FBSyxZQUFZLHNCQUFhLEVBQTlCLENBQThCLENBQUMsQ0FBQzthQUM1RCxTQUFTLENBQUMsVUFBQyxLQUFvQixJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsaUJBQWlCLEVBQTVDLENBQTRDLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBRUQsc0JBQUksOENBQW9CO2FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCwwQ0FBbUIsR0FBbkIsVUFBb0IsR0FBVztRQUMzQixPQUFPLElBQUksQ0FBQyxhQUFhLEtBQUssR0FBRyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsWUFBb0I7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDM0MsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2FBQ2Y7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0NBQWEsR0FBYixVQUFjLElBQVk7UUFDdEIsSUFBTSxVQUFVLEdBQUcsb0JBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUU1RCxPQUFPLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQXhDUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUs4QixlQUFNLEVBQTRCLHlCQUFnQjtPQUpyRSxZQUFZLENBeUN4QjtJQUFELG1CQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgUmFkU2lkZURyYXdlciwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIjtcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9hY3RpdmF0ZWRVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZWRVcmwgPSBcIi9ob21lXCI7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcblxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoZmlsdGVyKChldmVudDogYW55KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4gdGhpcy5fYWN0aXZhdGVkVXJsID0gZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMpO1xuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBpc0NvbXBvbmVudFNlbGVjdGVkKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZWRVcmwgPT09IHVybDtcbiAgICB9XG5cbiAgICBvbk5hdkl0ZW1UYXAobmF2SXRlbVJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2cobmF2SXRlbVJvdXRlKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZJdGVtUm91dGVdLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuICAgIGdldEljb25Tb3VyY2UoaWNvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgaWNvblByZWZpeCA9IGlzQW5kcm9pZCA/IFwicmVzOi8vXCIgOiBcInJlczovL3RhYkljb25zL1wiO1xuXG4gICAgICAgIHJldHVybiBpY29uUHJlZml4ICsgaWNvbjtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var nativescript_module_1 = __webpack_require__("nativescript-angular/nativescript.module");
var angular_1 = __webpack_require__("nativescript-ui-sidedrawer/angular");
var app_routing_module_1 = __webpack_require__("./app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./app/app.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUISideDrawerModule
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDhEQUFvRjtBQUVwRiwyREFBd0Q7QUFDeEQsaURBQStDO0FBb0IvQztJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBaEJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCxxQ0FBZ0I7Z0JBQ2hCLHdDQUFrQjtnQkFDbEIsd0NBQThCO2FBQ2pDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==

/***/ }),

/***/ "./main.ts":
/***/ (function(module, exports, __webpack_require__) {


            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        "use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var platform_1 = __webpack_require__("nativescript-angular/platform");
var app_module_1 = __webpack_require__("./app/app.module.ts");
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwR0FBMEc7QUFDMUcsMERBQTRFO0FBRTVFLCtDQUE2QztBQUU3QyxzQ0FBMkIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxzQkFBUyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGlzIGltcG9ydCBzaG91bGQgYmUgZmlyc3QgaW4gb3JkZXIgdG8gbG9hZCBzb21lIHJlcXVpcmVkIHNldHRpbmdzIChsaWtlIGdsb2JhbHMgYW5kIHJlZmxlY3QtbWV0YWRhdGEpXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwL2FwcC5tb2R1bGVcIjtcblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7XG4iXX0=
    
        

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "nativescript-ui-sidedrawer":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer");

/***/ }),

/***/ "nativescript-ui-sidedrawer/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer/angular");

/***/ }),

/***/ "rxjs/operators":
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyeGpzL29wZXJhdG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBO1FB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YyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsVUFBVSxjQUFjLEVBQUUsWUFBWSxrQkFBa0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLG9CQUFvQixtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixxQkFBcUIsRUFBRSxVQUFVLGNBQWMsRUFBRSxZQUFZLGtCQUFrQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVksb0JBQW9CLG1CQUFtQixFQUFFLFlBQVksa0JBQWtCLHFCQUFxQixFQUFFLFVBQVUsY0FBYyxFQUFFLFlBQVksa0JBQWtCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxvQkFBb0IsbUJBQW1CLEVBQUUsWUFBWSxrQkFBa0IscUJBQXFCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsV0FBVyxlQUFlLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHFCQUFxQixvQkFBb0IsRUFBRSxhQUFhLG1CQUFtQixzQkFBc0IsRUFBRSxXQUFXLGVBQWUsRUFBRSxhQUFhLG1CQUFtQixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEscUJBQXFCLG9CQUFvQixFQUFFLGFBQWEsbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZUFBZSxFQUFFLGFBQWEsbUJBQW1CLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxxQkFBcUIsb0JBQW9CLEVBQUUsYUFBYSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFVBQVUsZUFBZSxFQUFFLFlBQVksbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxZQUFZLHNCQUFzQixFQUFFLFlBQVksb0JBQW9CLEVBQUUsWUFBWSxxQkFBcUIsb0JBQW9CLEVBQUUsWUFBWSxtQkFBbUIsc0JBQXNCLEVBQUUsVUFBVSxlQUFlLEVBQUUsWUFBWSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLFlBQVksc0JBQXNCLEVBQUUsWUFBWSxvQkFBb0IsRUFBRSxZQUFZLHFCQUFxQixvQkFBb0IsRUFBRSxZQUFZLG1CQUFtQixzQkFBc0IsRUFBRSxVQUFVLGVBQWUsRUFBRSxZQUFZLG1CQUFtQixFQUFFLFlBQVkscUJBQXFCLEVBQUUsWUFBWSxzQkFBc0IsRUFBRSxZQUFZLG9CQUFvQixFQUFFLFlBQVkscUJBQXFCLG9CQUFvQixFQUFFLFlBQVksbUJBQW1CLHNCQUFzQixFQUFFLFdBQVcsZ0JBQWdCLEVBQUUsYUFBYSxvQkFBb0IsRUFBRSxhQUFhLHNCQUFzQixFQUFFLGFBQWEsdUJBQXVCLEVBQUUsYUFBYSxxQkFBcUIsRUFBRSxhQUFhLHNCQUFzQixxQkFBcUIsRUFBRSxhQUFhLG9CQUFvQix1QkFBdUIsRUFBRSxXQUFXLGdCQUFnQixFQUFFLGFBQWEsb0JBQW9CLEVBQUUsYUFBYSxzQkFBc0IsRUFBRSxhQUFhLHVCQUF1QixFQUFFLGFBQWEscUJBQXFCLEVBQUUsYUFBYSxzQkFBc0IscUJBQXFCLEVBQUUsYUFBYSxvQkFBb0IsdUJBQXVCLEVBQUUsV0FBVyxnQkFBZ0IsRUFBRSxhQUFhLG9CQUFvQixFQUFFLGFBQWEsc0JBQXNCLEVBQUUsYUFBYSx1QkFBdUIsRUFBRSxhQUFhLHFCQUFxQixFQUFF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O0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQ0FBMkMsdTRJOzs7Ozs7OztBQzFEOUI7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RCxhQUFhLG1CQUFPLENBQUMsZUFBZTtBQUNwQyw0QkFBNEIsbUJBQU8sQ0FBQywwQ0FBMEM7QUFDOUUsZ0JBQWdCLG1CQUFPLENBQUMsb0NBQW9DO0FBQzVELDJCQUEyQixtQkFBTyxDQUFDLDZCQUFzQjtBQUN6RCxzQkFBc0IsbUJBQU8sQ0FBQyx3QkFBaUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJDQUEyQywrK0M7Ozs7Ozs7O0FDOUIzQyxZQUFZLG1CQUFPLENBQUMsMEVBQXVEOztBQUUzRSxRQUFRLG1CQUFPLENBQUMsc0NBQXNDO0FBQ3REO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxpQkFBaUIsbUJBQU8sQ0FBQywrQkFBK0I7QUFDeEQsbUJBQW1CLG1CQUFPLENBQUMscUJBQWtCO0FBQzdDO0FBQ0EsMkNBQTJDOzs7Ozs7Ozs7QUNWM0MsMEM7Ozs7Ozs7QUNBQSw0Qzs7Ozs7OztBQ0FBLHFFOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSx3RDs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7QUNBQSwyQzs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUU7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLG9FIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdCAgICBkZWxldGUgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0fVxuIFx0dmFyIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrID0gZ2xvYmFsW1wid2VicGFja0hvdFVwZGF0ZVwiXTtcbiBcdGdsb2JhbFtcIndlYnBhY2tIb3RVcGRhdGVcIl0gPSAgICAgZnVuY3Rpb24gd2VicGFja0hvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHQgICAgICAgIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdCAgICAgICAgaWYgKHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKSB7XG4gXHQgICAgICAgICAgICBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayhjaHVua0lkLCBtb3JlTW9kdWxlcyk7XG4gXHQgICAgICAgIH1cbiBcdCAgICB9XG5cbiBcdCAgICBmdW5jdGlvbiBob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdCAgICAgICAgY29uc3QgcmVxdWVzdFBhdGggPSAnLi8nICsgXCJcIiArIGNodW5rSWQgKyBcIi5cIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc1wiO1xuIFx0ICAgICAgICB0cnkge1xuIFx0ICAgICAgICAgICAgcmVxdWlyZShyZXF1ZXN0UGF0aCk7XG4gXHQgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiBcdCAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSG90IGRvd25sb2FkIGZvciB1cGRhdGUgY2h1bmsgZmFpbGVkLlwiKTtcbiBcdCAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gXHQgICAgICAgIH1cbiBcdCAgICB9XG5cbiBcdCAgICBmdW5jdGlvbiBob3REb3dubG9hZE1hbmlmZXN0KCkge1xuIFx0ICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuIFx0ICAgICAgICAgICAgY29uc3QgcmVxdWVzdFBhdGggPSAnLi8nICsgXCJcIiArIGhvdEN1cnJlbnRIYXNoICsgXCIuaG90LXVwZGF0ZS5qc29uXCI7XG4gXHQgICAgICAgICAgICB0cnkge1xuIFx0ICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IHJlcXVpcmUocmVxdWVzdFBhdGgpO1xuIFx0ICAgICAgICAgICAgICAgIHJlc29sdmUodXBkYXRlKTtcbiBcdCAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiBcdCAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhvdCBkb3dubG9hZCBmb3IgbWFuaWZlc3QgZmFpbGVkLlwiKTtcbiBcdCAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuIFx0ICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiBcdCAgICAgICAgICAgIH1cbiBcdCAgICAgICAgfSk7XG4gXHQgICAgfVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiODNjNGQ5ZjllOGI2ZmIwNDA5YmRcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCkubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdClcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm90IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYnVuZGxlXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aG90OiBob3RDcmVhdGVNb2R1bGUobW9kdWxlSWQpLFxuIFx0XHRcdHBhcmVudHM6IChob3RDdXJyZW50UGFyZW50c1RlbXAgPSBob3RDdXJyZW50UGFyZW50cywgaG90Q3VycmVudFBhcmVudHMgPSBbXSwgaG90Q3VycmVudFBhcmVudHNUZW1wKSxcbiBcdFx0XHRjaGlsZHJlbjogW11cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgaG90Q3JlYXRlUmVxdWlyZShtb2R1bGVJZCkpO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIF9fd2VicGFja19oYXNoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18uaCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gaG90Q3VycmVudEhhc2g7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gZ2xvYmFsW1wid2VicGFja0pzb25wXCJdID0gZ2xvYmFsW1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vbWFpbi50c1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKipcXHJcXG4gKiBDb252ZW5pZW50IHNpbmdsZSBpbXBvcnQgZm9yIGxpZ2h0IHZhcmlhYmxlc1xcclxcbiAqIEluY2x1ZGVzIGJhc2UgdmFyaWFibGVzIHdpdGggbGlnaHQgb3ZlcnJpZGVzXFxyXFxuICoqL1xcbi8qKlxcclxcbiAqIExpZ2h0IHZhcmlhYmxlIG92ZXJyaWRlc1xcclxcbiAqKi9cXG4vKipcXG4gKiBUaGVtZSB2YXJpYWJsZXMgb3ZlcnJpZGVzXFxuKiovXFxuLyoqXFxyXFxuICogQ29sb3IgY2xhc3Nlc1xcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLmMtZ3JleXtjb2xvcjojZTBlMGUwfS5jLWJnLWdyZXl7YmFja2dyb3VuZC1jb2xvcjojZTBlMGUwfVxcclxcbioqL1xcbi5jLXdoaXRlIHtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmMtYmctd2hpdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcblxcbi5jLWJsYWNrIHtcXG4gIGNvbG9yOiAjMDAwOyB9XFxuXFxuLmMtYmctYmxhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgfVxcblxcbi5jLWFxdWEge1xcbiAgY29sb3I6ICMwMGNhYWI7IH1cXG5cXG4uYy1iZy1hcXVhIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGNhYWI7IH1cXG5cXG4uYy1ibHVlIHtcXG4gIGNvbG9yOiAjM2Q1YWZlOyB9XFxuXFxuLmMtYmctYmx1ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1YWZlOyB9XFxuXFxuLmMtY2hhcmNvYWwge1xcbiAgY29sb3I6ICMzMDMwMzA7IH1cXG5cXG4uYy1iZy1jaGFyY29hbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMDMwOyB9XFxuXFxuLmMtYnJvd24ge1xcbiAgY29sb3I6ICM3OTU1NDg7IH1cXG5cXG4uYy1iZy1icm93biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4OyB9XFxuXFxuLmMtZm9yZXN0IHtcXG4gIGNvbG9yOiAjMDA2OTY4OyB9XFxuXFxuLmMtYmctZm9yZXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5Njg7IH1cXG5cXG4uYy1ncmV5IHtcXG4gIGNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmMtYmctZ3JleSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmMtZ3JleS1saWdodCB7XFxuICBjb2xvcjogI2JhYmFiYTsgfVxcblxcbi5jLWJnLWdyZXktbGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhYmFiYTsgfVxcblxcbi5jLWdyZXktZGFyayB7XFxuICBjb2xvcjogIzVjNjg3YzsgfVxcblxcbi5jLWJnLWdyZXktZGFyayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2ODdjOyB9XFxuXFxuLmMtcHVycGxlIHtcXG4gIGNvbG9yOiAjODEzMGZmOyB9XFxuXFxuLmMtYmctcHVycGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MTMwZmY7IH1cXG5cXG4uYy1sZW1vbiB7XFxuICBjb2xvcjogI2ZmZWEwMDsgfVxcblxcbi5jLWJnLWxlbW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVhMDA7IH1cXG5cXG4uYy1saW1lIHtcXG4gIGNvbG9yOiAjYWVlNDA2OyB9XFxuXFxuLmMtYmctbGltZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2OyB9XFxuXFxuLmMtb3JhbmdlIHtcXG4gIGNvbG9yOiAjZjU3YzAwOyB9XFxuXFxuLmMtYmctb3JhbmdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTdjMDA7IH1cXG5cXG4uYy1ydWJ5IHtcXG4gIGNvbG9yOiAjZmYxNzQ0OyB9XFxuXFxuLmMtYmctcnVieSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxNzQ0OyB9XFxuXFxuLmMtc2t5IHtcXG4gIGNvbG9yOiAjMzBiY2ZmOyB9XFxuXFxuLmMtYmctc2t5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMGJjZmY7IH1cXG5cXG4vKiBXaWR0aC9IZWlnaHQgKi9cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnctMTAwIHtcXG4gIHdpZHRoOiAxMDA7IH1cXG5cXG4uaC1mdWxsIHtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5oLTEwMCB7XFxuICBoZWlnaHQ6IDEwMDsgfVxcblxcbi8qKlxcclxcbiAqIE1hcmdpbiBhbmQgUGFkZGluZ1xcclxcbiAqIFRoZSBmb2xsb3dpbmcgY3JlYXRlcyB0aGlzIHBhdHRlcm46XFxyXFxuICogLm0tMHttYXJnaW46MH0ubS10LTB7bWFyZ2luLXRvcDowfS5tLXItMHttYXJnaW4tcmlnaHQ6MH0ubS1iLTB7bWFyZ2luLWJvdHRvbTowfS5tLWwtMHttYXJnaW4tbGVmdDowfS5tLXgtMHttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDowfS5tLXktMHttYXJnaW4tdG9wOjA7bWFyZ2luLWJvdHRvbTowfVxcclxcbiAqIFNhbWUgZm9yIFBhZGRpbmcgKHVzaW5nIHRoZSAncCcgYWJicmV2aWF0aW9uKVxcclxcbiAqIEZyb20gMCwgMiwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwXFxyXFxuKiovXFxuLm0tMCB7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4ubS10LTAge1xcbiAgbWFyZ2luLXRvcDogMDsgfVxcblxcbi5tLXItMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG5cXG4ubS1iLTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5tLWwtMCB7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5tLXgtMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxuICBtYXJnaW4tbGVmdDogMDsgfVxcblxcbi5tLXktMCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5tLTIge1xcbiAgbWFyZ2luOiAyOyB9XFxuXFxuLm0tdC0yIHtcXG4gIG1hcmdpbi10b3A6IDI7IH1cXG5cXG4ubS1yLTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyOyB9XFxuXFxuLm0tYi0yIHtcXG4gIG1hcmdpbi1ib3R0b206IDI7IH1cXG5cXG4ubS1sLTIge1xcbiAgbWFyZ2luLWxlZnQ6IDI7IH1cXG5cXG4ubS14LTIge1xcbiAgbWFyZ2luLXJpZ2h0OiAyO1xcbiAgbWFyZ2luLWxlZnQ6IDI7IH1cXG5cXG4ubS15LTIge1xcbiAgbWFyZ2luLXRvcDogMjtcXG4gIG1hcmdpbi1ib3R0b206IDI7IH1cXG5cXG4ubS00IHtcXG4gIG1hcmdpbjogNDsgfVxcblxcbi5tLXQtNCB7XFxuICBtYXJnaW4tdG9wOiA0OyB9XFxuXFxuLm0tci00IHtcXG4gIG1hcmdpbi1yaWdodDogNDsgfVxcblxcbi5tLWItNCB7XFxuICBtYXJnaW4tYm90dG9tOiA0OyB9XFxuXFxuLm0tbC00IHtcXG4gIG1hcmdpbi1sZWZ0OiA0OyB9XFxuXFxuLm0teC00IHtcXG4gIG1hcmdpbi1yaWdodDogNDtcXG4gIG1hcmdpbi1sZWZ0OiA0OyB9XFxuXFxuLm0teS00IHtcXG4gIG1hcmdpbi10b3A6IDQ7XFxuICBtYXJnaW4tYm90dG9tOiA0OyB9XFxuXFxuLm0tNSB7XFxuICBtYXJnaW46IDU7IH1cXG5cXG4ubS10LTUge1xcbiAgbWFyZ2luLXRvcDogNTsgfVxcblxcbi5tLXItNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDU7IH1cXG5cXG4ubS1iLTUge1xcbiAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5tLWwtNSB7XFxuICBtYXJnaW4tbGVmdDogNTsgfVxcblxcbi5tLXgtNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDU7XFxuICBtYXJnaW4tbGVmdDogNTsgfVxcblxcbi5tLXktNSB7XFxuICBtYXJnaW4tdG9wOiA1O1xcbiAgbWFyZ2luLWJvdHRvbTogNTsgfVxcblxcbi5tLTgge1xcbiAgbWFyZ2luOiA4OyB9XFxuXFxuLm0tdC04IHtcXG4gIG1hcmdpbi10b3A6IDg7IH1cXG5cXG4ubS1yLTgge1xcbiAgbWFyZ2luLXJpZ2h0OiA4OyB9XFxuXFxuLm0tYi04IHtcXG4gIG1hcmdpbi1ib3R0b206IDg7IH1cXG5cXG4ubS1sLTgge1xcbiAgbWFyZ2luLWxlZnQ6IDg7IH1cXG5cXG4ubS14LTgge1xcbiAgbWFyZ2luLXJpZ2h0OiA4O1xcbiAgbWFyZ2luLWxlZnQ6IDg7IH1cXG5cXG4ubS15LTgge1xcbiAgbWFyZ2luLXRvcDogODtcXG4gIG1hcmdpbi1ib3R0b206IDg7IH1cXG5cXG4ubS0xMCB7XFxuICBtYXJnaW46IDEwOyB9XFxuXFxuLm0tdC0xMCB7XFxuICBtYXJnaW4tdG9wOiAxMDsgfVxcblxcbi5tLXItMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDsgfVxcblxcbi5tLWItMTAge1xcbiAgbWFyZ2luLWJvdHRvbTogMTA7IH1cXG5cXG4ubS1sLTEwIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMDsgfVxcblxcbi5tLXgtMTAge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMDtcXG4gIG1hcmdpbi1sZWZ0OiAxMDsgfVxcblxcbi5tLXktMTAge1xcbiAgbWFyZ2luLXRvcDogMTA7XFxuICBtYXJnaW4tYm90dG9tOiAxMDsgfVxcblxcbi5tLTEyIHtcXG4gIG1hcmdpbjogMTI7IH1cXG5cXG4ubS10LTEyIHtcXG4gIG1hcmdpbi10b3A6IDEyOyB9XFxuXFxuLm0tci0xMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEyOyB9XFxuXFxuLm0tYi0xMiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMjsgfVxcblxcbi5tLWwtMTIge1xcbiAgbWFyZ2luLWxlZnQ6IDEyOyB9XFxuXFxuLm0teC0xMiB7XFxuICBtYXJnaW4tcmlnaHQ6IDEyO1xcbiAgbWFyZ2luLWxlZnQ6IDEyOyB9XFxuXFxuLm0teS0xMiB7XFxuICBtYXJnaW4tdG9wOiAxMjtcXG4gIG1hcmdpbi1ib3R0b206IDEyOyB9XFxuXFxuLm0tMTUge1xcbiAgbWFyZ2luOiAxNTsgfVxcblxcbi5tLXQtMTUge1xcbiAgbWFyZ2luLXRvcDogMTU7IH1cXG5cXG4ubS1yLTE1IHtcXG4gIG1hcmdpbi1yaWdodDogMTU7IH1cXG5cXG4ubS1iLTE1IHtcXG4gIG1hcmdpbi1ib3R0b206IDE1OyB9XFxuXFxuLm0tbC0xNSB7XFxuICBtYXJnaW4tbGVmdDogMTU7IH1cXG5cXG4ubS14LTE1IHtcXG4gIG1hcmdpbi1yaWdodDogMTU7XFxuICBtYXJnaW4tbGVmdDogMTU7IH1cXG5cXG4ubS15LTE1IHtcXG4gIG1hcmdpbi10b3A6IDE1O1xcbiAgbWFyZ2luLWJvdHRvbTogMTU7IH1cXG5cXG4ubS0xNiB7XFxuICBtYXJnaW46IDE2OyB9XFxuXFxuLm0tdC0xNiB7XFxuICBtYXJnaW4tdG9wOiAxNjsgfVxcblxcbi5tLXItMTYge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjsgfVxcblxcbi5tLWItMTYge1xcbiAgbWFyZ2luLWJvdHRvbTogMTY7IH1cXG5cXG4ubS1sLTE2IHtcXG4gIG1hcmdpbi1sZWZ0OiAxNjsgfVxcblxcbi5tLXgtMTYge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNjtcXG4gIG1hcmdpbi1sZWZ0OiAxNjsgfVxcblxcbi5tLXktMTYge1xcbiAgbWFyZ2luLXRvcDogMTY7XFxuICBtYXJnaW4tYm90dG9tOiAxNjsgfVxcblxcbi5tLTIwIHtcXG4gIG1hcmdpbjogMjA7IH1cXG5cXG4ubS10LTIwIHtcXG4gIG1hcmdpbi10b3A6IDIwOyB9XFxuXFxuLm0tci0yMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwOyB9XFxuXFxuLm0tYi0yMCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMDsgfVxcblxcbi5tLWwtMjAge1xcbiAgbWFyZ2luLWxlZnQ6IDIwOyB9XFxuXFxuLm0teC0yMCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwO1xcbiAgbWFyZ2luLWxlZnQ6IDIwOyB9XFxuXFxuLm0teS0yMCB7XFxuICBtYXJnaW4tdG9wOiAyMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwOyB9XFxuXFxuLm0tMjQge1xcbiAgbWFyZ2luOiAyNDsgfVxcblxcbi5tLXQtMjQge1xcbiAgbWFyZ2luLXRvcDogMjQ7IH1cXG5cXG4ubS1yLTI0IHtcXG4gIG1hcmdpbi1yaWdodDogMjQ7IH1cXG5cXG4ubS1iLTI0IHtcXG4gIG1hcmdpbi1ib3R0b206IDI0OyB9XFxuXFxuLm0tbC0yNCB7XFxuICBtYXJnaW4tbGVmdDogMjQ7IH1cXG5cXG4ubS14LTI0IHtcXG4gIG1hcmdpbi1yaWdodDogMjQ7XFxuICBtYXJnaW4tbGVmdDogMjQ7IH1cXG5cXG4ubS15LTI0IHtcXG4gIG1hcmdpbi10b3A6IDI0O1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4ubS0yNSB7XFxuICBtYXJnaW46IDI1OyB9XFxuXFxuLm0tdC0yNSB7XFxuICBtYXJnaW4tdG9wOiAyNTsgfVxcblxcbi5tLXItMjUge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNTsgfVxcblxcbi5tLWItMjUge1xcbiAgbWFyZ2luLWJvdHRvbTogMjU7IH1cXG5cXG4ubS1sLTI1IHtcXG4gIG1hcmdpbi1sZWZ0OiAyNTsgfVxcblxcbi5tLXgtMjUge1xcbiAgbWFyZ2luLXJpZ2h0OiAyNTtcXG4gIG1hcmdpbi1sZWZ0OiAyNTsgfVxcblxcbi5tLXktMjUge1xcbiAgbWFyZ2luLXRvcDogMjU7XFxuICBtYXJnaW4tYm90dG9tOiAyNTsgfVxcblxcbi5tLTI4IHtcXG4gIG1hcmdpbjogMjg7IH1cXG5cXG4ubS10LTI4IHtcXG4gIG1hcmdpbi10b3A6IDI4OyB9XFxuXFxuLm0tci0yOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI4OyB9XFxuXFxuLm0tYi0yOCB7XFxuICBtYXJnaW4tYm90dG9tOiAyODsgfVxcblxcbi5tLWwtMjgge1xcbiAgbWFyZ2luLWxlZnQ6IDI4OyB9XFxuXFxuLm0teC0yOCB7XFxuICBtYXJnaW4tcmlnaHQ6IDI4O1xcbiAgbWFyZ2luLWxlZnQ6IDI4OyB9XFxuXFxuLm0teS0yOCB7XFxuICBtYXJnaW4tdG9wOiAyODtcXG4gIG1hcmdpbi1ib3R0b206IDI4OyB9XFxuXFxuLm0tMzAge1xcbiAgbWFyZ2luOiAzMDsgfVxcblxcbi5tLXQtMzAge1xcbiAgbWFyZ2luLXRvcDogMzA7IH1cXG5cXG4ubS1yLTMwIHtcXG4gIG1hcmdpbi1yaWdodDogMzA7IH1cXG5cXG4ubS1iLTMwIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwOyB9XFxuXFxuLm0tbC0zMCB7XFxuICBtYXJnaW4tbGVmdDogMzA7IH1cXG5cXG4ubS14LTMwIHtcXG4gIG1hcmdpbi1yaWdodDogMzA7XFxuICBtYXJnaW4tbGVmdDogMzA7IH1cXG5cXG4ubS15LTMwIHtcXG4gIG1hcmdpbi10b3A6IDMwO1xcbiAgbWFyZ2luLWJvdHRvbTogMzA7IH1cXG5cXG4ucC0wIHtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG4ucC10LTAge1xcbiAgcGFkZGluZy10b3A6IDA7IH1cXG5cXG4ucC1yLTAge1xcbiAgcGFkZGluZy1yaWdodDogMDsgfVxcblxcbi5wLWItMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDsgfVxcblxcbi5wLWwtMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7IH1cXG5cXG4ucC14LTAge1xcbiAgcGFkZGluZy1yaWdodDogMDtcXG4gIHBhZGRpbmctbGVmdDogMDsgfVxcblxcbi5wLXktMCB7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAwOyB9XFxuXFxuLnAtMiB7XFxuICBwYWRkaW5nOiAyOyB9XFxuXFxuLnAtdC0yIHtcXG4gIHBhZGRpbmctdG9wOiAyOyB9XFxuXFxuLnAtci0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI7IH1cXG5cXG4ucC1iLTIge1xcbiAgcGFkZGluZy1ib3R0b206IDI7IH1cXG5cXG4ucC1sLTIge1xcbiAgcGFkZGluZy1sZWZ0OiAyOyB9XFxuXFxuLnAteC0yIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI7XFxuICBwYWRkaW5nLWxlZnQ6IDI7IH1cXG5cXG4ucC15LTIge1xcbiAgcGFkZGluZy10b3A6IDI7XFxuICBwYWRkaW5nLWJvdHRvbTogMjsgfVxcblxcbi5wLTQge1xcbiAgcGFkZGluZzogNDsgfVxcblxcbi5wLXQtNCB7XFxuICBwYWRkaW5nLXRvcDogNDsgfVxcblxcbi5wLXItNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA0OyB9XFxuXFxuLnAtYi00IHtcXG4gIHBhZGRpbmctYm90dG9tOiA0OyB9XFxuXFxuLnAtbC00IHtcXG4gIHBhZGRpbmctbGVmdDogNDsgfVxcblxcbi5wLXgtNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiA0O1xcbiAgcGFkZGluZy1sZWZ0OiA0OyB9XFxuXFxuLnAteS00IHtcXG4gIHBhZGRpbmctdG9wOiA0O1xcbiAgcGFkZGluZy1ib3R0b206IDQ7IH1cXG5cXG4ucC01IHtcXG4gIHBhZGRpbmc6IDU7IH1cXG5cXG4ucC10LTUge1xcbiAgcGFkZGluZy10b3A6IDU7IH1cXG5cXG4ucC1yLTUge1xcbiAgcGFkZGluZy1yaWdodDogNTsgfVxcblxcbi5wLWItNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogNTsgfVxcblxcbi5wLWwtNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDU7IH1cXG5cXG4ucC14LTUge1xcbiAgcGFkZGluZy1yaWdodDogNTtcXG4gIHBhZGRpbmctbGVmdDogNTsgfVxcblxcbi5wLXktNSB7XFxuICBwYWRkaW5nLXRvcDogNTtcXG4gIHBhZGRpbmctYm90dG9tOiA1OyB9XFxuXFxuLnAtOCB7XFxuICBwYWRkaW5nOiA4OyB9XFxuXFxuLnAtdC04IHtcXG4gIHBhZGRpbmctdG9wOiA4OyB9XFxuXFxuLnAtci04IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDg7IH1cXG5cXG4ucC1iLTgge1xcbiAgcGFkZGluZy1ib3R0b206IDg7IH1cXG5cXG4ucC1sLTgge1xcbiAgcGFkZGluZy1sZWZ0OiA4OyB9XFxuXFxuLnAteC04IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDg7XFxuICBwYWRkaW5nLWxlZnQ6IDg7IH1cXG5cXG4ucC15LTgge1xcbiAgcGFkZGluZy10b3A6IDg7XFxuICBwYWRkaW5nLWJvdHRvbTogODsgfVxcblxcbi5wLTEwIHtcXG4gIHBhZGRpbmc6IDEwOyB9XFxuXFxuLnAtdC0xMCB7XFxuICBwYWRkaW5nLXRvcDogMTA7IH1cXG5cXG4ucC1yLTEwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwOyB9XFxuXFxuLnAtYi0xMCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTA7IH1cXG5cXG4ucC1sLTEwIHtcXG4gIHBhZGRpbmctbGVmdDogMTA7IH1cXG5cXG4ucC14LTEwIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwO1xcbiAgcGFkZGluZy1sZWZ0OiAxMDsgfVxcblxcbi5wLXktMTAge1xcbiAgcGFkZGluZy10b3A6IDEwO1xcbiAgcGFkZGluZy1ib3R0b206IDEwOyB9XFxuXFxuLnAtMTIge1xcbiAgcGFkZGluZzogMTI7IH1cXG5cXG4ucC10LTEyIHtcXG4gIHBhZGRpbmctdG9wOiAxMjsgfVxcblxcbi5wLXItMTIge1xcbiAgcGFkZGluZy1yaWdodDogMTI7IH1cXG5cXG4ucC1iLTEyIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMjsgfVxcblxcbi5wLWwtMTIge1xcbiAgcGFkZGluZy1sZWZ0OiAxMjsgfVxcblxcbi5wLXgtMTIge1xcbiAgcGFkZGluZy1yaWdodDogMTI7XFxuICBwYWRkaW5nLWxlZnQ6IDEyOyB9XFxuXFxuLnAteS0xMiB7XFxuICBwYWRkaW5nLXRvcDogMTI7XFxuICBwYWRkaW5nLWJvdHRvbTogMTI7IH1cXG5cXG4ucC0xNSB7XFxuICBwYWRkaW5nOiAxNTsgfVxcblxcbi5wLXQtMTUge1xcbiAgcGFkZGluZy10b3A6IDE1OyB9XFxuXFxuLnAtci0xNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNTsgfVxcblxcbi5wLWItMTUge1xcbiAgcGFkZGluZy1ib3R0b206IDE1OyB9XFxuXFxuLnAtbC0xNSB7XFxuICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuXFxuLnAteC0xNSB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNTtcXG4gIHBhZGRpbmctbGVmdDogMTU7IH1cXG5cXG4ucC15LTE1IHtcXG4gIHBhZGRpbmctdG9wOiAxNTtcXG4gIHBhZGRpbmctYm90dG9tOiAxNTsgfVxcblxcbi5wLTE2IHtcXG4gIHBhZGRpbmc6IDE2OyB9XFxuXFxuLnAtdC0xNiB7XFxuICBwYWRkaW5nLXRvcDogMTY7IH1cXG5cXG4ucC1yLTE2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2OyB9XFxuXFxuLnAtYi0xNiB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTY7IH1cXG5cXG4ucC1sLTE2IHtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4ucC14LTE2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2O1xcbiAgcGFkZGluZy1sZWZ0OiAxNjsgfVxcblxcbi5wLXktMTYge1xcbiAgcGFkZGluZy10b3A6IDE2O1xcbiAgcGFkZGluZy1ib3R0b206IDE2OyB9XFxuXFxuLnAtMjAge1xcbiAgcGFkZGluZzogMjA7IH1cXG5cXG4ucC10LTIwIHtcXG4gIHBhZGRpbmctdG9wOiAyMDsgfVxcblxcbi5wLXItMjAge1xcbiAgcGFkZGluZy1yaWdodDogMjA7IH1cXG5cXG4ucC1iLTIwIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDsgfVxcblxcbi5wLWwtMjAge1xcbiAgcGFkZGluZy1sZWZ0OiAyMDsgfVxcblxcbi5wLXgtMjAge1xcbiAgcGFkZGluZy1yaWdodDogMjA7XFxuICBwYWRkaW5nLWxlZnQ6IDIwOyB9XFxuXFxuLnAteS0yMCB7XFxuICBwYWRkaW5nLXRvcDogMjA7XFxuICBwYWRkaW5nLWJvdHRvbTogMjA7IH1cXG5cXG4ucC0yNCB7XFxuICBwYWRkaW5nOiAyNDsgfVxcblxcbi5wLXQtMjQge1xcbiAgcGFkZGluZy10b3A6IDI0OyB9XFxuXFxuLnAtci0yNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNDsgfVxcblxcbi5wLWItMjQge1xcbiAgcGFkZGluZy1ib3R0b206IDI0OyB9XFxuXFxuLnAtbC0yNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDI0OyB9XFxuXFxuLnAteC0yNCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAyNDtcXG4gIHBhZGRpbmctbGVmdDogMjQ7IH1cXG5cXG4ucC15LTI0IHtcXG4gIHBhZGRpbmctdG9wOiAyNDtcXG4gIHBhZGRpbmctYm90dG9tOiAyNDsgfVxcblxcbi5wLTI1IHtcXG4gIHBhZGRpbmc6IDI1OyB9XFxuXFxuLnAtdC0yNSB7XFxuICBwYWRkaW5nLXRvcDogMjU7IH1cXG5cXG4ucC1yLTI1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1OyB9XFxuXFxuLnAtYi0yNSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMjU7IH1cXG5cXG4ucC1sLTI1IHtcXG4gIHBhZGRpbmctbGVmdDogMjU7IH1cXG5cXG4ucC14LTI1IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDI1O1xcbiAgcGFkZGluZy1sZWZ0OiAyNTsgfVxcblxcbi5wLXktMjUge1xcbiAgcGFkZGluZy10b3A6IDI1O1xcbiAgcGFkZGluZy1ib3R0b206IDI1OyB9XFxuXFxuLnAtMjgge1xcbiAgcGFkZGluZzogMjg7IH1cXG5cXG4ucC10LTI4IHtcXG4gIHBhZGRpbmctdG9wOiAyODsgfVxcblxcbi5wLXItMjgge1xcbiAgcGFkZGluZy1yaWdodDogMjg7IH1cXG5cXG4ucC1iLTI4IHtcXG4gIHBhZGRpbmctYm90dG9tOiAyODsgfVxcblxcbi5wLWwtMjgge1xcbiAgcGFkZGluZy1sZWZ0OiAyODsgfVxcblxcbi5wLXgtMjgge1xcbiAgcGFkZGluZy1yaWdodDogMjg7XFxuICBwYWRkaW5nLWxlZnQ6IDI4OyB9XFxuXFxuLnAteS0yOCB7XFxuICBwYWRkaW5nLXRvcDogMjg7XFxuICBwYWRkaW5nLWJvdHRvbTogMjg7IH1cXG5cXG4ucC0zMCB7XFxuICBwYWRkaW5nOiAzMDsgfVxcblxcbi5wLXQtMzAge1xcbiAgcGFkZGluZy10b3A6IDMwOyB9XFxuXFxuLnAtci0zMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMDsgfVxcblxcbi5wLWItMzAge1xcbiAgcGFkZGluZy1ib3R0b206IDMwOyB9XFxuXFxuLnAtbC0zMCB7XFxuICBwYWRkaW5nLWxlZnQ6IDMwOyB9XFxuXFxuLnAteC0zMCB7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMDtcXG4gIHBhZGRpbmctbGVmdDogMzA7IH1cXG5cXG4ucC15LTMwIHtcXG4gIHBhZGRpbmctdG9wOiAzMDtcXG4gIHBhZGRpbmctYm90dG9tOiAzMDsgfVxcblxcbi8qIERpdmlkZXJzICovXFxuLmhyLWxpZ2h0IHtcXG4gIGhlaWdodDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5oci1kYXJrIHtcXG4gIGhlaWdodDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDMwMzA7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi8qIEFsaWdubWVudCAqL1xcbi50ZXh0LWxlZnQge1xcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxcblxcbi50ZXh0LXJpZ2h0IHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LWxvd2VyY2FzZSB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlOyB9XFxuXFxuLnRleHQtdXBwZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4udGV4dC1jYXBpdGFsaXplIHtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XFxuXFxuLmZvbnQtd2VpZ2h0LW5vcm1hbCB7XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLmZvbnQtd2VpZ2h0LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cXG5cXG4uZm9udC1pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljOyB9XFxuXFxuLyoqXFxyXFxuICogRm9udCBzaXplXFxyXFxuICogVGhlIGZvbGxvd2luZyBjcmVhdGVzIHRoaXMgcGF0dGVybjpcXHJcXG4gKiAudC0xMHtmb250LXNpemU6MTB9XFxyXFxuICogRnJvbSAxMCwgMTIsIDE0LCAxNSwgMTYsIDE3LCAxOCwgMTksIDIwXFxyXFxuKiovXFxuLnQtMTAge1xcbiAgZm9udC1zaXplOiAxMDsgfVxcblxcbi50LTEyIHtcXG4gIGZvbnQtc2l6ZTogMTI7IH1cXG5cXG4udC0xNCB7XFxuICBmb250LXNpemU6IDE0OyB9XFxuXFxuLnQtMTUge1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi50LTE2IHtcXG4gIGZvbnQtc2l6ZTogMTY7IH1cXG5cXG4udC0xNyB7XFxuICBmb250LXNpemU6IDE3OyB9XFxuXFxuLnQtMTgge1xcbiAgZm9udC1zaXplOiAxODsgfVxcblxcbi50LTE5IHtcXG4gIGZvbnQtc2l6ZTogMTk7IH1cXG5cXG4udC0yMCB7XFxuICBmb250LXNpemU6IDIwOyB9XFxuXFxuLnQtMjUge1xcbiAgZm9udC1zaXplOiAyNTsgfVxcblxcbi50LTMwIHtcXG4gIGZvbnQtc2l6ZTogMzA7IH1cXG5cXG4uaW1nLXJvdW5kZWQge1xcbiAgYm9yZGVyLXJhZGl1czogNTsgfVxcblxcbi5pbWctY2lyY2xlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwOyB9XFxuXFxuLmltZy10aHVtYm5haWwge1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcblxcbi5pbnZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogY29sbGFwc2U7IH1cXG5cXG4ucHVsbC1sZWZ0IHtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7IH1cXG5cXG4ucHVsbC1yaWdodCB7XFxuICBob3Jpem9udGFsLWFsaWduOiByaWdodDsgfVxcblxcbi5tLXgtYXV0byB7XFxuICBob3Jpem9udGFsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubS15LWF1dG8ge1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi50ZXh0LXByaW1hcnkge1xcbiAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4udGV4dC1kYW5nZXIge1xcbiAgY29sb3I6ICNFRDQ3M0Y7IH1cXG5cXG4udGV4dC1tdXRlZCB7XFxuICBjb2xvcjogIzllOWU5ZTsgfVxcblxcbi5iZy1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7XFxuICBjb2xvcjogI2ZmZjsgfVxcblxcbi5iZy1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VENDczRjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLmFjdGlvbi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuICAuYWN0aW9uLWJhciAuYWN0aW9uLWJhci10aXRsZSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE3O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAuYWN0aW9uLWJhciAuYWN0aW9uLWl0ZW0ge1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuLmFjdGl2aXR5LWluZGljYXRvciB7XFxuICBjb2xvcjogIzNBNTNGRjtcXG4gIHdpZHRoOiAzMDtcXG4gIGhlaWdodDogMzA7IH1cXG5cXG4uYnRuIHtcXG4gIGNvbG9yOiAjM0E1M0ZGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBtaW4taGVpZ2h0OiAzNjtcXG4gIG1pbi13aWR0aDogNjQ7XFxuICBwYWRkaW5nOiAxMCAxMCAxMCAxMDtcXG4gIGZvbnQtc2l6ZTogMTg7XFxuICBtYXJnaW46IDggMTYgOCAxNjsgfVxcbiAgLmJ0bi5idG4tYWN0aXZlOmhpZ2hsaWdodGVkIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDgwZmY7IH1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjtcXG4gIGJvcmRlci1jb2xvcjogIzNBNTNGRjtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNzI2ZmY7XFxuICAgIGJvcmRlci1jb2xvcjogIzA3MjZmZjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1hcXVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2FhYjsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ibHVlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNkNWFmZTsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1icm93biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tZm9yZXN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjk2ODsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1ncmV5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNjg3YzsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1sZW1vbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVhMDA7XFxuICAgIGNvbG9yOiAjMDAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLWxpbWUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWVlNDA2O1xcbiAgICBjb2xvcjogIzAwMDsgfVxcbiAgLmJ0bi1wcmltYXJ5LmJ0bi1vcmFuZ2Uge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwOyB9XFxuICAuYnRuLXByaW1hcnkuYnRuLXB1cnBsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MTMwZmY7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tcnVieSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDQ7IH1cXG4gIC5idG4tcHJpbWFyeS5idG4tc2t5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwYmNmZjsgfVxcblxcbi5idG4tb3V0bGluZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogIzNBNTNGRjtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuICAuYnRuLW91dGxpbmUuYnRuLWFjdGl2ZTpoaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZDgwZmY7IH1cXG5cXG4uYnRuW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgY29sb3I6ICNhNGE0YTQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwOyB9XFxuXFxuLmZhIHtcXG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZSwgZm9udGF3ZXNvbWUtd2ViZm9udDsgfVxcblxcbi5mb3JtIC5pbnB1dCB7XFxuICBwYWRkaW5nOiAxNiA4IDE2IDg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcbiAgLmZvcm0gLmlucHV0LmlucHV0LWJvcmRlciB7XFxuICAgIGJvcmRlci13aWR0aDogMTtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xcbiAgICBib3JkZXItcmFkaXVzOiAyO1xcbiAgICBwYWRkaW5nOiAxNjsgfVxcbiAgLmZvcm0gLmlucHV0LmlucHV0LXJvdW5kZWQge1xcbiAgICBib3JkZXItd2lkdGg6IDE7XFxuICAgIGJvcmRlci1jb2xvcjogI2UwZTBlMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjg7XFxuICAgIHBhZGRpbmc6IDE2OyB9XFxuICAuZm9ybSAuaW5wdXRbaXNFbmFibGVkPSdmYWxzZSddIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxcblxcbi5mb3JtIC5pbnB1dC1maWVsZCB7XFxuICBtYXJnaW46IDg7IH1cXG4gIC5mb3JtIC5pbnB1dC1maWVsZCAubGFiZWwge1xcbiAgICBmb250LXNpemU6IDEyO1xcbiAgICBjb2xvcjogI2JhYmFiYTsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5pbnB1dCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMCAwIDggMDsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkIC5oci1saWdodC5hY3RpdmUsXFxuICAuZm9ybSAuaW5wdXQtZmllbGQgLmhyLWRhcmsuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjsgfVxcbiAgLmZvcm0gLmlucHV0LWZpZWxkLmlucHV0LXNpZGVzIC5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMTg7XFxuICAgIG1hcmdpbjogMCAwIDggMDsgfVxcblxcbi5oMSwgLmgyLCAuaDMsIC5oNCwgLmg1LCAuaDYge1xcbiAgbWFyZ2luLWJvdHRvbTogNDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi5ib2R5LFxcbi5ib2R5MixcXG4uZm9vdG5vdGUge1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMDIyNzM0OyB9XFxuXFxuLmgxIHtcXG4gIGZvbnQtc2l6ZTogMzI7IH1cXG5cXG4uaDIge1xcbiAgZm9udC1zaXplOiAyMjsgfVxcblxcbi5oMyB7XFxuICBmb250LXNpemU6IDE1OyB9XFxuXFxuLmg0IHtcXG4gIGZvbnQtc2l6ZTogMTI7IH1cXG5cXG4uaDUge1xcbiAgZm9udC1zaXplOiAxMTsgfVxcblxcbi5oNiB7XFxuICBmb250LXNpemU6IDEwOyB9XFxuXFxuLmJvZHkge1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5ib2R5MiB7XFxuICBmb250LXNpemU6IDE3OyB9XFxuXFxuLmZvb3Rub3RlIHtcXG4gIGZvbnQtc2l6ZTogMTM7IH1cXG5cXG4ubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIHtcXG4gIGNvbG9yOiAjMjEyMTIxO1xcbiAgZm9udC1zaXplOiAxNjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDE2OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIExhYmVsIHtcXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAudGh1bWIge1xcbiAgICBzdHJldGNoOiBmaWxsO1xcbiAgICB3aWR0aDogNDA7XFxuICAgIGhlaWdodDogNDA7XFxuICAgIG1hcmdpbi1yaWdodDogMTY7IH1cXG4gIC5saXN0LWdyb3VwIC5saXN0LWdyb3VwLWl0ZW0uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAubGlzdC1ncm91cC1pdGVtLXRleHQge1xcbiAgICBjb2xvcjogIzAyMjczNDtcXG4gICAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5wYWdlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cXG5cXG4ucHJvZ3Jlc3Mge1xcbiAgY29sb3I6ICMzQTUzRkY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYWJhOyB9XFxuXFxuLnNlZ21lbnRlZC1iYXIge1xcbiAgZm9udC1zaXplOiAxMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIHNlbGVjdGVkLWJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0LCAuc2lkZWRyYXdlci1jZW50ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgfVxcblxcbi5zaWRlZHJhd2VyLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgaGVpZ2h0OiAxNDg7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDE2IDE2IDAgMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDIwIDE1IDAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDsgfVxcblxcbi5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gIGhlaWdodDogNjQ7XFxuICB3aWR0aDogNjQ7XFxuICBib3JkZXItcmFkaXVzOiAzMjtcXG4gIGhvcml6b250YWwtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tYm90dG9tOiAzNjsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXItaW1hZ2Uge1xcbiAgaGVpZ2h0OiA3NDtcXG4gIHdpZHRoOiA3NDtcXG4gIGJvcmRlci1yYWRpdXM6IDM3O1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjQ7IH1cXG5cXG4uc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgY29sb3I6ICM3MzczNzM7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWhlYWRlci1icmFuZCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxNDsgfVxcblxcbi5zaWRlZHJhd2VyLWNlbnRlciAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNTsgfVxcblxcbi5zaWRlZHJhd2VyLWxpc3QtaXRlbSB7XFxuICBoZWlnaHQ6IDQ4O1xcbiAgaG9yaXpvbnRhbC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3JpZW50YXRpb246IGhvcml6b250YWw7IH1cXG4gIC5zaWRlZHJhd2VyLWxpc3QtaXRlbSAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICAgIHdpZHRoOiAyNDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICBoZWlnaHQ6IDQ4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyOyB9XFxuICAuc2lkZWRyYXdlci1saXN0LWl0ZW0uYWN0aXZlIHtcXG4gICAgY29sb3I6ICMzQTUzRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7IH1cXG4gICAgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLmFjdGl2ZSAuc2lkZWRyYXdlci1saXN0LWl0ZW0taWNvbiB7XFxuICAgICAgY29sb3I6ICMzQTUzRkY7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gIG1hcmdpbjogMCAxNiAwIDE2OyB9XFxuXFxuLnNpZGVkcmF3ZXItY2VudGVyIC5zaWRlZHJhd2VyLWxpc3QtaXRlbS1pY29uIHtcXG4gIG1hcmdpbjogMCAwIDAgMTU7IH1cXG5cXG4uc2lkZWRyYXdlci1saXN0LWl0ZW0tdGV4dCB7XFxuICBob3Jpem9udGFsLWFsaWduOiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci13aWR0aDogMC4xO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7IH1cXG5cXG4uc2lkZWRyYXdlci1sZWZ0IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS10ZXh0IHtcXG4gIHBhZGRpbmctbGVmdDogMTY7IH1cXG5cXG4uc2lkZWRyYXdlci1jZW50ZXIgLnNpZGVkcmF3ZXItbGlzdC1pdGVtLXRleHQge1xcbiAgcGFkZGluZy1sZWZ0OiAxNTsgfVxcblxcbi5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjsgfVxcbiAgLnNsaWRlcltpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gICAgY29sb3I6ICNlMGUwZTA7IH1cXG5cXG4uc3dpdGNoW2NoZWNrZWQ9dHJ1ZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBNTNGRjtcXG4gIGNvbG9yOiAjM0E1M0ZGOyB9XFxuXFxuLnN3aXRjaFtjaGVja2VkPXRydWVdW2lzRW5hYmxlZD1mYWxzZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gIGNvbG9yOiAjZmZmOyB9XFxuXFxuLnN3aXRjaFtpc0VuYWJsZWQ9ZmFsc2VdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XFxuICBjb2xvcjogI2UwZTBlMDsgfVxcblxcbi50YWItdmlldyB7XFxuICAvKmNvbG9yOiAkc2Vjb25kYXJ5OyovXFxuICBzZWxlY3RlZC1jb2xvcjogIzMwYmNmZjtcXG4gIHRhYnMtYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxcbiAgLnRhYi12aWV3IC50YWItdmlldy1pdGVtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgdGFicy1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuXFxuI2xvZ2luLWJhY2tncm91bmQge1xcbiAgbWFyZ2luLXRvcDogLTIwO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgfVxcblxcbi5sb2dpbi13cmFwIHtcXG4gIHBhZGRpbmc6IDAgNDA7IH1cXG5cXG4ubG9nby13cmFwIHtcXG4gIG1hcmdpbjogNjAgMCAxMCAwO1xcbiAgcGFkZGluZzogMjAgMDsgfVxcbiAgLmxvZ28td3JhcCAubG9naW4tbG9nbyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjb2xvcjogIzIxMjEyMTtcXG4gICAgb3BhY2l0eTogLjk7IH1cXG4gIC5sb2dvLXdyYXAgLmxvZ2luLWxvZ28tc3ViIHtcXG4gICAgY29sb3I6ICMyMTIxMjE7XFxuICAgIG9wYWNpdHk6IC44O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubG9naW4td3JhcHBlciB7XFxuICBwYWRkaW5nOiAyMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAzOyB9XFxuICAubG9naW4td3JhcHBlciBUZXh0RmllbGQge1xcbiAgICBwYWRkaW5nOiAxMCAxMDtcXG4gICAgbWFyZ2luOiAxMCAwIDAgMDsgfVxcblxcbi5nby1iYWNrIHtcXG4gIGZvbnQtc2l6ZTogMTQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIG1hcmdpbi10b3A6IDEwOyB9XFxuXFxuLyoqXFxyXFxuICogSW1wb3J0IGFsbCBwbGF0Zm9ybSBzcGVjaWZpYyBmaWxlcyBoZXJlXFxyXFxuICovXFxuLmJ0biB7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBmb250LWZhbWlseTogJ1NGIFVJIFRleHQgTWVkaXVtJztcXG4gIGZvbnQtc2l6ZTogMTU7IH1cXG5cXG4uYnRuLW91dGxpbmUge1xcbiAgYm9yZGVyLXdpZHRoOiAxOyB9XFxuXFxuLmJ0bi1yb3VuZGVkLXNtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQ7IH1cXG5cXG4uYnRuLXJvdW5kZWQtbGcge1xcbiAgYm9yZGVyLXJhZGl1czogMTk7IH1cXG5cXG4uZm9ybSB7XFxuICBmb250LWZhbWlseTogJ1NGIFVJIFRleHQgUmVndWxhcic7IH1cXG4gIC5mb3JtIC5pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMTU7IH1cXG4gICAgLmZvcm0gLmlucHV0LmlucHV0LXJvdW5kZWQge1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI3OyB9XFxuXFxuLyogVGhpcyBpcyBoZXJlIHRlbXBvcmFyaWx5IGJlY2F1c2UgX2luZGV4Lmlvcy5zY3NzIGNhbm5vdCBiZSBlbXB0eSAqL1xcbi5oMSB7XFxuICBmb250LXNpemU6IDMyOyB9XFxuXFxuLnNsaWRlciB7XFxuICBtYXJnaW46IDEwIDE1OyB9XFxuXFxuLnNpZGVkcmF3ZXItbGlzdC1pdGVtLWljb24sIC5zaWRlZHJhd2VyLWxpc3QtaXRlbSB7XFxuICBjb2xvcjogIzAyMjczNDsgfVxcblxcbi5zd2l0Y2gge1xcbiAgbWFyZ2luOiA4IDE1OyB9XFxuXFxuLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSB7XFxuICBwYWRkaW5nOiAxNiAxNSAxNiAxNTsgfVxcbiAgLmxpc3QtZ3JvdXAgLmxpc3QtZ3JvdXAtaXRlbSAudGh1bWIge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1OyB9XFxuICAubGlzdC1ncm91cCAubGlzdC1ncm91cC1pdGVtIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDU7IH1cXG5cXG4uc2VnbWVudGVkLWJhciB7XFxuICBtYXJnaW46IDAgMTU7XFxuICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi5mYSB7XFxuICBmb250LWZhbWlseTogXFxcIkZvbnRBd2Vzb21lXFxcIjsgfVxcblxcbi5wYWdlLWNvbnRlbnQgLnBhZ2UtcGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICNEN0Q3RDc7XFxuICBmb250LXNpemU6IDIwO1xcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5wYWdlLWNvbnRlbnQgLnBhZ2UtaWNvbiB7XFxuICBmb250LXNpemU6IDcyO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjRDdEN0Q3O1xcbiAgbWFyZ2luLXRvcDogMjAlOyB9XFxuXFxuQWN0aW9uQmFyIC5hY3Rpb24tYmFyLXRpdGxlIHtcXG4gIGhvcml6b250YWwtYWxpZ246IGNlbnRlcjsgfVxcblxcbi5zaWRlZHJhd2VyLnNpZGVkcmF3ZXItbGVmdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0E1M0ZGOyB9XFxuICAuc2lkZWRyYXdlci5zaWRlZHJhd2VyLWxlZnQgLnNpZGVkcmF3ZXItaGVhZGVyLWltYWdlIHtcXG4gICAgY29sb3I6ICNGOEY4Rjg7XFxuICAgIGhlaWdodDogNjA7XFxuICAgIHdpZHRoOiA2MDtcXG4gICAgZm9udC1zaXplOiA2MDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNTtcXG4gICAgbWFyZ2luLXRvcDogMjA7IH1cXG4gIC5zaWRlZHJhd2VyLnNpZGVkcmF3ZXItbGVmdCAuZm9vdG5vdGUge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XFxuXFxuLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzQTUzRkY7IH1cXG4gIC5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWhlYWRlciAuc2lkZWRyYXdlci1oZWFkZXItYnJhbmQge1xcbiAgICBjb2xvcjogI2ZmZjsgfVxcblxcbi5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgfVxcbiAgLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1OyB9XFxuICAgIC5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIExhYmVsIHtcXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGNvbG9yOiAjMDIyNzM0OyB9XFxuICAgIC5zaWRlZHJhd2VyIC5zaWRlZHJhd2VyLWNvbnRlbnQgLnNpZGVkcmF3ZXItbGlzdC1pdGVtIC5mYSB7XFxuICAgICAgd2lkdGg6IDIwO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMTA7IH1cXG4gICAgLnNpZGVkcmF3ZXIgLnNpZGVkcmF3ZXItY29udGVudCAuc2lkZWRyYXdlci1saXN0LWl0ZW0uc2VsZWN0ZWQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOEY4Rjg7IH1cXG4gICAgICAuc2lkZWRyYXdlciAuc2lkZWRyYXdlci1jb250ZW50IC5zaWRlZHJhd2VyLWxpc3QtaXRlbS5zZWxlY3RlZCBMYWJlbCB7XFxuICAgICAgICBjb2xvcjogIzNBNTNGRjsgfVxcblxcbi8qIEFkZCBtb2JpbGUgc3R5bGVzIGZvciB0aGUgY29tcG9uZW50IGhlcmUuICAqL1xcbi5ib3R0b20tbmF2aWdhdGlvbiB7XFxuICBoZWlnaHQ6IDUyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNkYWUxZTc7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxOyB9XFxuXFxuLmJvdHRvbS1uYXZpZ2F0aW9uIC5ib3R0b20tbmF2aWdhdGlvbi1pdGVtIC5pY29uLFxcbi5ib3R0b20tbmF2aWdhdGlvbiAuYm90dG9tLW5hdmlnYXRpb24taXRlbSAubGFiZWwge1xcbiAgY29sb3I6ICNDMUMxQzE7IH1cXG5cXG4uYm90dG9tLW5hdmlnYXRpb24gLmJvdHRvbS1uYXZpZ2F0aW9uLWl0ZW0gLmljb24ge1xcbiAgZm9udC1zaXplOiAyMDtcXG4gIG1hcmdpbi1ib3R0b206IDI7IH1cXG5cXG4uYm90dG9tLW5hdmlnYXRpb24gLmJvdHRvbS1uYXZpZ2F0aW9uLWl0ZW0gLmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTA7IH1cXG5cXG4uYm90dG9tLW5hdmlnYXRpb24gLmJvdHRvbS1uYXZpZ2F0aW9uLWl0ZW0uc2VsZWN0ZWQgLmljb24sXFxuLmJvdHRvbS1uYXZpZ2F0aW9uIC5ib3R0b20tbmF2aWdhdGlvbi1pdGVtLnNlbGVjdGVkIC5sYWJlbCB7XFxuICBjb2xvcjogIzIyMjkyZjsgfVxcblxcbi5ib3R0b20tbmF2aWdhdGlvbiBHcmlkTGF5b3V0IHtcXG4gIG1hcmdpbjogMTA7IH1cXG5cXG5BY3Rpb25CYXIgLmZhIHtcXG4gIHBhZGRpbmc6IDQwcHggNDBweCA0MHB4IDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciByb3V0ZXJfMSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIik7XG52YXIgcm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImJyb3dzZVwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvYnJvd3NlL2Jyb3dzZS5tb2R1bGUjQnJvd3NlTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic2VhcmNoXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9zZWFyY2gvc2VhcmNoLm1vZHVsZSNTZWFyY2hNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvZmVhdHVyZWQvZmVhdHVyZWQubW9kdWxlI0ZlYXR1cmVkTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic2V0dGluZ3NcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZSNTZXR0aW5nc01vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImNhcnRcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2NhcnQvY2FydC5tb2R1bGUjQ2FydE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcIndpc2hsaXN0XCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC93aXNobGlzdC93aXNobGlzdC5tb2R1bGUjV2lzaGxpc3RNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJhY2NvdW50XCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9hY2NvdW50L2FjY291bnQubW9kdWxlI0FjY291bnRNb2R1bGVcIiB9XG5dO1xudmFyIEFwcFJvdXRpbmdNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBwUm91dGluZ01vZHVsZSgpIHtcbiAgICB9XG4gICAgQXBwUm91dGluZ01vZHVsZSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuTmdNb2R1bGUoe1xuICAgICAgICAgICAgaW1wb3J0czogW3JvdXRlcl8xLk5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgICAgICAgICAgZXhwb3J0czogW3JvdXRlcl8xLk5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbiAgICAgICAgfSlcbiAgICBdLCBBcHBSb3V0aW5nTW9kdWxlKTtcbiAgICByZXR1cm4gQXBwUm91dGluZ01vZHVsZTtcbn0oKSk7XG5leHBvcnRzLkFwcFJvdXRpbmdNb2R1bGUgPSBBcHBSb3V0aW5nTW9kdWxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhCd0xYSnZkWFJwYm1jdWJXOWtkV3hsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhNaU9sc2lZWEJ3TFhKdmRYUnBibWN1Ylc5a2RXeGxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNjME5CUVhsRE8wRkJSWHBETEhORVFVRjFSVHRCUVVWMlJTeEpRVUZOTEUxQlFVMHNSMEZCVnp0SlFVTnVRaXhGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1JVRkJSU3hUUVVGVExFVkJRVVVzVFVGQlRTeEZRVUZGTzBsQlEzQkVMRVZCUVVVc1NVRkJTU3hGUVVGRkxFMUJRVTBzUlVGQlJTeFpRVUZaTEVWQlFVVXNiVU5CUVcxRExFVkJRVVU3U1VGRGJrVXNSVUZCUlN4SlFVRkpMRVZCUVVVc1VVRkJVU3hGUVVGRkxGbEJRVmtzUlVGQlJTeDVRMEZCZVVNc1JVRkJSVHRKUVVNelJTeEZRVUZGTEVsQlFVa3NSVUZCUlN4UlFVRlJMRVZCUVVVc1dVRkJXU3hGUVVGRkxIbERRVUY1UXl4RlFVRkZPMGxCUXpORkxFVkJRVVVzU1VGQlNTeEZRVUZGTEZWQlFWVXNSVUZCUlN4WlFVRlpMRVZCUVVVc0swTkJRU3RETEVWQlFVVTdTVUZEYmtZc1JVRkJSU3hKUVVGSkxFVkJRVVVzVlVGQlZTeEZRVUZGTEZsQlFWa3NSVUZCUlN3clEwRkJLME1zUlVGQlJUdEpRVU51Uml4RlFVRkZMRWxCUVVrc1JVRkJSU3hOUVVGTkxFVkJRVVVzV1VGQldTeEZRVUZGTEcxRFFVRnRReXhGUVVGRk8wbEJRMjVGTEVWQlFVVXNTVUZCU1N4RlFVRkZMRlZCUVZVc1JVRkJSU3haUVVGWkxFVkJRVVVzSzBOQlFTdERMRVZCUVVVN1NVRkRia1lzUlVGQlJTeEpRVUZKTEVWQlFVVXNVMEZCVXl4RlFVRkZMRmxCUVZrc1JVRkJSU3cwUTBGQk5FTXNSVUZCUlR0RFFVTnNSaXhEUVVGRE8wRkJUVVk3U1VGQlFUdEpRVUZuUXl4RFFVRkRPMGxCUVhCQ0xHZENRVUZuUWp0UlFVbzFRaXhsUVVGUkxFTkJRVU03V1VGRFRpeFBRVUZQTEVWQlFVVXNRMEZCUXl4cFEwRkJkMElzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1dVRkRia1FzVDBGQlR5eEZRVUZGTEVOQlFVTXNhVU5CUVhkQ0xFTkJRVU03VTBGRGRFTXNRMEZCUXp0UFFVTlhMR2RDUVVGblFpeERRVUZKTzBsQlFVUXNkVUpCUVVNN1EwRkJRU3hCUVVGcVF5eEpRVUZwUXp0QlFVRndRaXcwUTBGQlowSWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJPWjAxdlpIVnNaU0I5SUdaeWIyMGdYQ0pBWVc1bmRXeGhjaTlqYjNKbFhDSTdYRzVwYlhCdmNuUWdleUJTYjNWMFpYTWdmU0JtY205dElGd2lRR0Z1WjNWc1lYSXZjbTkxZEdWeVhDSTdYRzVwYlhCdmNuUWdleUJPWVhScGRtVlRZM0pwY0hSU2IzVjBaWEpOYjJSMWJHVWdmU0JtY205dElGd2libUYwYVhabGMyTnlhWEIwTFdGdVozVnNZWEl2Y205MWRHVnlYQ0k3WEc1Y2JtTnZibk4wSUhKdmRYUmxjem9nVW05MWRHVnpJRDBnVzF4dUlDQWdJSHNnY0dGMGFEb2dYQ0pjSWl3Z2NtVmthWEpsWTNSVWJ6b2dYQ0l2YUc5dFpWd2lMQ0J3WVhSb1RXRjBZMmc2SUZ3aVpuVnNiRndpSUgwc1hHNGdJQ0FnZXlCd1lYUm9PaUJjSW1odmJXVmNJaXdnYkc5aFpFTm9hV3hrY21WdU9pQmNJbjR2WVhCd0wyaHZiV1V2YUc5dFpTNXRiMlIxYkdValNHOXRaVTF2WkhWc1pWd2lJSDBzWEc0Z0lDQWdleUJ3WVhSb09pQmNJbUp5YjNkelpWd2lMQ0JzYjJGa1EyaHBiR1J5Wlc0NklGd2lmaTloY0hBdlluSnZkM05sTDJKeWIzZHpaUzV0YjJSMWJHVWpRbkp2ZDNObFRXOWtkV3hsWENJZ2ZTeGNiaUFnSUNCN0lIQmhkR2c2SUZ3aWMyVmhjbU5vWENJc0lHeHZZV1JEYUdsc1pISmxiam9nWENKK0wyRndjQzl6WldGeVkyZ3ZjMlZoY21Ob0xtMXZaSFZzWlNOVFpXRnlZMmhOYjJSMWJHVmNJaUI5TEZ4dUlDQWdJSHNnY0dGMGFEb2dYQ0ptWldGMGRYSmxaRndpTENCc2IyRmtRMmhwYkdSeVpXNDZJRndpZmk5aGNIQXZabVZoZEhWeVpXUXZabVZoZEhWeVpXUXViVzlrZFd4bEkwWmxZWFIxY21Wa1RXOWtkV3hsWENJZ2ZTeGNiaUFnSUNCN0lIQmhkR2c2SUZ3aWMyVjBkR2x1WjNOY0lpd2diRzloWkVOb2FXeGtjbVZ1T2lCY0luNHZZWEJ3TDNObGRIUnBibWR6TDNObGRIUnBibWR6TG0xdlpIVnNaU05UWlhSMGFXNW5jMDF2WkhWc1pWd2lJSDBzWEc0Z0lDQWdleUJ3WVhSb09pQmNJbU5oY25SY0lpd2diRzloWkVOb2FXeGtjbVZ1T2lCY0luNHZZWEJ3TDJOaGNuUXZZMkZ5ZEM1dGIyUjFiR1VqUTJGeWRFMXZaSFZzWlZ3aUlIMHNYRzRnSUNBZ2V5QndZWFJvT2lCY0luZHBjMmhzYVhOMFhDSXNJR3h2WVdSRGFHbHNaSEpsYmpvZ1hDSitMMkZ3Y0M5M2FYTm9iR2x6ZEM5M2FYTm9iR2x6ZEM1dGIyUjFiR1VqVjJsemFHeHBjM1JOYjJSMWJHVmNJaUI5TEZ4dUlDQWdJSHNnY0dGMGFEb2dYQ0poWTJOdmRXNTBYQ0lzSUd4dllXUkRhR2xzWkhKbGJqb2dYQ0orTDJGd2NDOWhZMk52ZFc1MEwyRmpZMjkxYm5RdWJXOWtkV3hsSTBGalkyOTFiblJOYjJSMWJHVmNJaUI5WEc1ZE8xeHVYRzVBVG1kTmIyUjFiR1VvZTF4dUlDQWdJR2x0Y0c5eWRITTZJRnRPWVhScGRtVlRZM0pwY0hSU2IzVjBaWEpOYjJSMWJHVXVabTl5VW05dmRDaHliM1YwWlhNcFhTeGNiaUFnSUNCbGVIQnZjblJ6T2lCYlRtRjBhWFpsVTJOeWFYQjBVbTkxZEdWeVRXOWtkV3hsWFZ4dWZTbGNibVY0Y0c5eWRDQmpiR0Z6Y3lCQmNIQlNiM1YwYVc1blRXOWtkV3hsSUhzZ2ZWeHVJbDE5IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgcm91dGVyXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xudmFyIHJvdXRlcl8yID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiKTtcbnZhciBuYXRpdmVzY3JpcHRfdWlfc2lkZWRyYXdlcl8xID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCIpO1xudmFyIHBsYXRmb3JtXzEgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTtcbnZhciBvcGVyYXRvcnNfMSA9IHJlcXVpcmUoXCJyeGpzL29wZXJhdG9yc1wiKTtcbnZhciBhcHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbnZhciBBcHBDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBwQ29tcG9uZW50KHJvdXRlciwgcm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zID0gcm91dGVyRXh0ZW5zaW9ucztcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxuICAgIH1cbiAgICBBcHBDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLl9hY3RpdmF0ZWRVcmwgPSBcIi9ob21lXCI7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IG5hdGl2ZXNjcmlwdF91aV9zaWRlZHJhd2VyXzEuU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgICAgIC5waXBlKG9wZXJhdG9yc18xLmZpbHRlcihmdW5jdGlvbiAoZXZlbnQpIHsgcmV0dXJuIGV2ZW50IGluc3RhbmNlb2Ygcm91dGVyXzEuTmF2aWdhdGlvbkVuZDsgfSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGZ1bmN0aW9uIChldmVudCkgeyByZXR1cm4gX3RoaXMuX2FjdGl2YXRlZFVybCA9IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzOyB9KTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcHBDb21wb25lbnQucHJvdG90eXBlLCBcInNpZGVEcmF3ZXJUcmFuc2l0aW9uXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIEFwcENvbXBvbmVudC5wcm90b3R5cGUuaXNDb21wb25lbnRTZWxlY3RlZCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlZFVybCA9PT0gdXJsO1xuICAgIH07XG4gICAgQXBwQ29tcG9uZW50LnByb3RvdHlwZS5vbk5hdkl0ZW1UYXAgPSBmdW5jdGlvbiAobmF2SXRlbVJvdXRlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG5hdkl0ZW1Sb3V0ZSk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgc2lkZURyYXdlciA9IGFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfTtcbiAgICBBcHBDb21wb25lbnQucHJvdG90eXBlLmdldEljb25Tb3VyY2UgPSBmdW5jdGlvbiAoaWNvbikge1xuICAgICAgICB2YXIgaWNvblByZWZpeCA9IHBsYXRmb3JtXzEuaXNBbmRyb2lkID8gXCJyZXM6Ly9cIiA6IFwicmVzOi8vdGFiSWNvbnMvXCI7XG4gICAgICAgIHJldHVybiBpY29uUHJlZml4ICsgaWNvbjtcbiAgICB9O1xuICAgIEFwcENvbXBvbmVudCA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuQ29tcG9uZW50KHtcbiAgICAgICAgICAgIC8qZHVsZUlkOiBtb2R1bGUuaSovXG4gICAgICAgICAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG4gICAgICAgIH0pLFxuICAgICAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3JvdXRlcl8xLlJvdXRlciwgcm91dGVyXzIuUm91dGVyRXh0ZW5zaW9uc10pXG4gICAgXSwgQXBwQ29tcG9uZW50KTtcbiAgICByZXR1cm4gQXBwQ29tcG9uZW50O1xufSgpKTtcbmV4cG9ydHMuQXBwQ29tcG9uZW50ID0gQXBwQ29tcG9uZW50O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWVhCd0xtTnZiWEJ2Ym1WdWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1Gd2NDNWpiMjF3YjI1bGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeHpRMEZCTmtRN1FVRkROMFFzTUVOQlFYZEVPMEZCUTNoRUxITkVRVUVyUkR0QlFVTXZSQ3g1UlVGQmVVYzdRVUZEZWtjc2MwUkJRWE5FTzBGQlEzUkVMRFJEUVVGM1F6dEJRVU40UXl4clJFRkJiMFE3UVVGUGNFUTdTVUZKU1N4elFrRkJiMElzVFVGQll5eEZRVUZWTEdkQ1FVRnJRenRSUVVFeFJDeFhRVUZOTEVkQlFVNHNUVUZCVFN4RFFVRlJPMUZCUVZVc2NVSkJRV2RDTEVkQlFXaENMR2RDUVVGblFpeERRVUZyUWp0UlFVTXhSU3h2UkVGQmIwUTdTVUZEZUVRc1EwRkJRenRKUVVWRUxDdENRVUZSTEVkQlFWSTdVVUZCUVN4cFFrRlBRenRSUVU1SExFbEJRVWtzUTBGQlF5eGhRVUZoTEVkQlFVY3NUMEZCVHl4RFFVRkRPMUZCUXpkQ0xFbEJRVWtzUTBGQlF5eHhRa0ZCY1VJc1IwRkJSeXhKUVVGSkxHMUVRVUZ6UWl4RlFVRkZMRU5CUVVNN1VVRkZNVVFzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TlFVRk5PMkZCUTJwQ0xFbEJRVWtzUTBGQlF5eHJRa0ZCVFN4RFFVRkRMRlZCUVVNc1MwRkJWU3hKUVVGTExFOUJRVUVzUzBGQlN5eFpRVUZaTEhOQ1FVRmhMRVZCUVRsQ0xFTkJRVGhDTEVOQlFVTXNRMEZCUXp0aFFVTTFSQ3hUUVVGVExFTkJRVU1zVlVGQlF5eExRVUZ2UWl4SlFVRkxMRTlCUVVFc1MwRkJTU3hEUVVGRExHRkJRV0VzUjBGQlJ5eExRVUZMTEVOQlFVTXNhVUpCUVdsQ0xFVkJRVFZETEVOQlFUUkRMRU5CUVVNc1EwRkJRenRKUVVOMlJpeERRVUZETzBsQlJVUXNjMEpCUVVrc09FTkJRVzlDTzJGQlFYaENPMWxCUTBrc1QwRkJUeXhKUVVGSkxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNN1VVRkRkRU1zUTBGQlF6czdPMDlCUVVFN1NVRkZSQ3d3UTBGQmJVSXNSMEZCYmtJc1ZVRkJiMElzUjBGQlZ6dFJRVU16UWl4UFFVRlBMRWxCUVVrc1EwRkJReXhoUVVGaExFdEJRVXNzUjBGQlJ5eERRVUZETzBsQlEzUkRMRU5CUVVNN1NVRkZSQ3h0UTBGQldTeEhRVUZhTEZWQlFXRXNXVUZCYjBJN1VVRkROMElzVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4WlFVRlpMRU5CUVVNc1EwRkJRenRSUVVNeFFpeEpRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNXVUZCV1N4RFFVRkRMRVZCUVVVN1dVRkRNME1zVlVGQlZTeEZRVUZGTzJkQ1FVTlNMRWxCUVVrc1JVRkJSU3hOUVVGTk8yRkJRMlk3VTBGRFNpeERRVUZETEVOQlFVTTdVVUZGU0N4SlFVRk5MRlZCUVZVc1IwRkJhMElzUjBGQlJ5eERRVUZETEZkQlFWY3NSVUZCUlN4RFFVRkRPMUZCUTNCRUxGVkJRVlVzUTBGQlF5eFhRVUZYTEVWQlFVVXNRMEZCUXp0SlFVTTNRaXhEUVVGRE8wbEJRMFFzYjBOQlFXRXNSMEZCWWl4VlFVRmpMRWxCUVZrN1VVRkRkRUlzU1VGQlRTeFZRVUZWTEVkQlFVY3NiMEpCUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4cFFrRkJhVUlzUTBGQlF6dFJRVVUxUkN4UFFVRlBMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU03U1VGRE4wSXNRMEZCUXp0SlFYaERVU3haUVVGWk8xRkJUSGhDTEdkQ1FVRlRMRU5CUVVNN1dVRkRVQ3hSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZETEVWQlFVVTdXVUZEYmtJc1VVRkJVU3hGUVVGRkxGRkJRVkU3V1VGRGJFSXNWMEZCVnl4RlFVRkZMRzlDUVVGdlFqdFRRVU53UXl4RFFVRkRPM2xEUVVzNFFpeGxRVUZOTEVWQlFUUkNMSGxDUVVGblFqdFBRVXB5UlN4WlFVRlpMRU5CZVVONFFqdEpRVUZFTEcxQ1FVRkRPME5CUVVFc1FVRjZRMFFzU1VGNVEwTTdRVUY2UTFrc2IwTkJRVmtpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCRGIyMXdiMjVsYm5Rc0lFOXVTVzVwZEN3Z1ZtbGxkME5vYVd4a0lIMGdabkp2YlNCY0lrQmhibWQxYkdGeUwyTnZjbVZjSWp0Y2JtbHRjRzl5ZENCN0lFNWhkbWxuWVhScGIyNUZibVFzSUZKdmRYUmxjaUI5SUdaeWIyMGdYQ0pBWVc1bmRXeGhjaTl5YjNWMFpYSmNJanRjYm1sdGNHOXlkQ0I3SUZKdmRYUmxja1Y0ZEdWdWMybHZibk1nZlNCbWNtOXRJRndpYm1GMGFYWmxjMk55YVhCMExXRnVaM1ZzWVhJdmNtOTFkR1Z5WENJN1hHNXBiWEJ2Y25RZ2V5QkVjbUYzWlhKVWNtRnVjMmwwYVc5dVFtRnpaU3dnVW1Ga1UybGtaVVJ5WVhkbGNpd2dVMnhwWkdWSmJrOXVWRzl3VkhKaGJuTnBkR2x2YmlCOUlHWnliMjBnWENKdVlYUnBkbVZ6WTNKcGNIUXRkV2t0YzJsa1pXUnlZWGRsY2x3aU8xeHVhVzF3YjNKMElIc2dhWE5CYm1SeWIybGtJSDBnWm5KdmJTQmNJblJ1Y3kxamIzSmxMVzF2WkhWc1pYTXZjR3hoZEdadmNtMWNJanRjYm1sdGNHOXlkQ0I3SUdacGJIUmxjaUI5SUdaeWIyMGdYQ0p5ZUdwekwyOXdaWEpoZEc5eWMxd2lPMXh1YVcxd2IzSjBJQ29nWVhNZ1lYQndJR1p5YjIwZ1hDSjBibk10WTI5eVpTMXRiMlIxYkdWekwyRndjR3hwWTJGMGFXOXVYQ0k3WEc1Y2JrQkRiMjF3YjI1bGJuUW9lMXh1SUNBZ0lHMXZaSFZzWlVsa09pQnRiMlIxYkdVdWFXUXNYRzRnSUNBZ2MyVnNaV04wYjNJNklGd2libk10WVhCd1hDSXNYRzRnSUNBZ2RHVnRjR3hoZEdWVmNtdzZJRndpWVhCd0xtTnZiWEJ2Ym1WdWRDNW9kRzFzWENKY2JuMHBYRzVsZUhCdmNuUWdZMnhoYzNNZ1FYQndRMjl0Y0c5dVpXNTBJR2x0Y0d4bGJXVnVkSE1nVDI1SmJtbDBJSHRjYmlBZ0lDQndjbWwyWVhSbElGOWhZM1JwZG1GMFpXUlZjbXc2SUhOMGNtbHVaenRjYmlBZ0lDQndjbWwyWVhSbElGOXphV1JsUkhKaGQyVnlWSEpoYm5OcGRHbHZiam9nUkhKaGQyVnlWSEpoYm5OcGRHbHZia0poYzJVN1hHNWNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHdjbWwyWVhSbElISnZkWFJsY2pvZ1VtOTFkR1Z5TENCd2NtbDJZWFJsSUhKdmRYUmxja1Y0ZEdWdWMybHZibk02SUZKdmRYUmxja1Y0ZEdWdWMybHZibk1wSUh0Y2JpQWdJQ0FnSUNBZ0x5OGdWWE5sSUhSb1pTQmpiMjF3YjI1bGJuUWdZMjl1YzNSeWRXTjBiM0lnZEc4Z2FXNXFaV04wSUhObGNuWnBZMlZ6TGx4dUlDQWdJSDFjYmx4dUlDQWdJRzVuVDI1SmJtbDBLQ2s2SUhadmFXUWdlMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOWhZM1JwZG1GMFpXUlZjbXdnUFNCY0lpOW9iMjFsWENJN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WDNOcFpHVkVjbUYzWlhKVWNtRnVjMmwwYVc5dUlEMGdibVYzSUZOc2FXUmxTVzVQYmxSdmNGUnlZVzV6YVhScGIyNG9LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbkp2ZFhSbGNpNWxkbVZ1ZEhOY2JpQWdJQ0FnSUNBZ0xuQnBjR1VvWm1sc2RHVnlLQ2hsZG1WdWREb2dZVzU1S1NBOVBpQmxkbVZ1ZENCcGJuTjBZVzVqWlc5bUlFNWhkbWxuWVhScGIyNUZibVFwS1Z4dUlDQWdJQ0FnSUNBdWMzVmljMk55YVdKbEtDaGxkbVZ1ZERvZ1RtRjJhV2RoZEdsdmJrVnVaQ2tnUFQ0Z2RHaHBjeTVmWVdOMGFYWmhkR1ZrVlhKc0lEMGdaWFpsYm5RdWRYSnNRV1owWlhKU1pXUnBjbVZqZEhNcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRDQnphV1JsUkhKaGQyVnlWSEpoYm5OcGRHbHZiaWdwT2lCRWNtRjNaWEpVY21GdWMybDBhVzl1UW1GelpTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5emFXUmxSSEpoZDJWeVZISmhibk5wZEdsdmJqdGNiaUFnSUNCOVhHNWNiaUFnSUNCcGMwTnZiWEJ2Ym1WdWRGTmxiR1ZqZEdWa0tIVnliRG9nYzNSeWFXNW5LVG9nWW05dmJHVmhiaUI3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxsOWhZM1JwZG1GMFpXUlZjbXdnUFQwOUlIVnliRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZiazVoZGtsMFpXMVVZWEFvYm1GMlNYUmxiVkp2ZFhSbE9pQnpkSEpwYm1jcE9pQjJiMmxrSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjMjlzWlM1c2IyY29ibUYyU1hSbGJWSnZkWFJsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV5YjNWMFpYSkZlSFJsYm5OcGIyNXpMbTVoZG1sbllYUmxLRnR1WVhaSmRHVnRVbTkxZEdWZExDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGNtRnVjMmwwYVc5dU9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibUZ0WlRvZ1hDSm1ZV1JsWENKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MybGtaVVJ5WVhkbGNpQTlJRHhTWVdSVGFXUmxSSEpoZDJWeVBtRndjQzVuWlhSU2IyOTBWbWxsZHlncE8xeHVJQ0FnSUNBZ0lDQnphV1JsUkhKaGQyVnlMbU5zYjNObFJISmhkMlZ5S0NrN1hHNGdJQ0FnZlZ4dUlDQWdJR2RsZEVsamIyNVRiM1Z5WTJVb2FXTnZiam9nYzNSeWFXNW5LVG9nYzNSeWFXNW5JSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhV052YmxCeVpXWnBlQ0E5SUdselFXNWtjbTlwWkNBL0lGd2ljbVZ6T2k4dlhDSWdPaUJjSW5KbGN6b3ZMM1JoWWtsamIyNXpMMXdpTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCcFkyOXVVSEpsWm1sNElDc2dhV052Ymp0Y2JpQWdJQ0I5WEc1OVhHNGlYWDA9IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgbmF0aXZlc2NyaXB0X21vZHVsZV8xID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIik7XG52YXIgYW5ndWxhcl8xID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIik7XG52YXIgYXBwX3JvdXRpbmdfbW9kdWxlXzEgPSByZXF1aXJlKFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIik7XG52YXIgYXBwX2NvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vYXBwLmNvbXBvbmVudFwiKTtcbnZhciBBcHBNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBwTW9kdWxlKCkge1xuICAgIH1cbiAgICBBcHBNb2R1bGUgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgY29yZV8xLk5nTW9kdWxlKHtcbiAgICAgICAgICAgIGJvb3RzdHJhcDogW1xuICAgICAgICAgICAgICAgIGFwcF9jb21wb25lbnRfMS5BcHBDb21wb25lbnRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpbXBvcnRzOiBbXG4gICAgICAgICAgICAgICAgYXBwX3JvdXRpbmdfbW9kdWxlXzEuQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgICAgICAgICBuYXRpdmVzY3JpcHRfbW9kdWxlXzEuTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICAgICAgICAgIGFuZ3VsYXJfMS5OYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgICAgICAgICBhcHBfY29tcG9uZW50XzEuQXBwQ29tcG9uZW50LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHNjaGVtYXM6IFtcbiAgICAgICAgICAgICAgICBjb3JlXzEuTk9fRVJST1JTX1NDSEVNQVxuICAgICAgICAgICAgXVxuICAgICAgICB9KVxuICAgIF0sIEFwcE1vZHVsZSk7XG4gICAgcmV0dXJuIEFwcE1vZHVsZTtcbn0oKSk7XG5leHBvcnRzLkFwcE1vZHVsZSA9IEFwcE1vZHVsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVlYQndMbTF2WkhWc1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1Gd2NDNXRiMlIxYkdVdWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN4elEwRkJNa1E3UVVGRE0wUXNaMFpCUVRoRk8wRkJRemxGTERoRVFVRnZSanRCUVVWd1Jpd3lSRUZCZDBRN1FVRkRlRVFzYVVSQlFTdERPMEZCYjBJdlF6dEpRVUZCTzBsQlFYbENMRU5CUVVNN1NVRkJZaXhUUVVGVE8xRkJhRUp5UWl4bFFVRlJMRU5CUVVNN1dVRkRUaXhUUVVGVExFVkJRVVU3WjBKQlExQXNORUpCUVZrN1lVRkRaanRaUVVORUxFOUJRVThzUlVGQlJUdG5Ra0ZEVEN4eFEwRkJaMEk3WjBKQlEyaENMSGREUVVGclFqdG5Ra0ZEYkVJc2QwTkJRVGhDTzJGQlEycERPMWxCUTBRc1dVRkJXU3hGUVVGRk8yZENRVU5XTERSQ1FVRlpPMkZCUTJZN1dVRkRSQ3hQUVVGUExFVkJRVVU3WjBKQlEwd3NkVUpCUVdkQ08yRkJRMjVDTzFOQlEwb3NRMEZCUXp0UFFVTlhMRk5CUVZNc1EwRkJTVHRKUVVGRUxHZENRVUZETzBOQlFVRXNRVUZCTVVJc1NVRkJNRUk3UVVGQllpdzRRa0ZCVXlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lFNW5UVzlrZFd4bExDQk9UMTlGVWxKUFVsTmZVME5JUlUxQklIMGdabkp2YlNCY0lrQmhibWQxYkdGeUwyTnZjbVZjSWp0Y2JtbHRjRzl5ZENCN0lFNWhkR2wyWlZOamNtbHdkRTF2WkhWc1pTQjlJR1p5YjIwZ1hDSnVZWFJwZG1WelkzSnBjSFF0WVc1bmRXeGhjaTl1WVhScGRtVnpZM0pwY0hRdWJXOWtkV3hsWENJN1hHNXBiWEJ2Y25RZ2V5Qk9ZWFJwZG1WVFkzSnBjSFJWU1ZOcFpHVkVjbUYzWlhKTmIyUjFiR1VnZlNCbWNtOXRJRndpYm1GMGFYWmxjMk55YVhCMExYVnBMWE5wWkdWa2NtRjNaWEl2WVc1bmRXeGhjbHdpTzF4dVhHNXBiWEJ2Y25RZ2V5QkJjSEJTYjNWMGFXNW5UVzlrZFd4bElIMGdabkp2YlNCY0lpNHZZWEJ3TFhKdmRYUnBibWN1Ylc5a2RXeGxYQ0k3WEc1cGJYQnZjblFnZXlCQmNIQkRiMjF3YjI1bGJuUWdmU0JtY205dElGd2lMaTloY0hBdVkyOXRjRzl1Wlc1MFhDSTdYRzVjYmx4dVhHNUFUbWROYjJSMWJHVW9lMXh1SUNBZ0lHSnZiM1J6ZEhKaGNEb2dXMXh1SUNBZ0lDQWdJQ0JCY0hCRGIyMXdiMjVsYm5SY2JpQWdJQ0JkTEZ4dUlDQWdJR2x0Y0c5eWRITTZJRnRjYmlBZ0lDQWdJQ0FnUVhCd1VtOTFkR2x1WjAxdlpIVnNaU3hjYmlBZ0lDQWdJQ0FnVG1GMGFYWmxVMk55YVhCMFRXOWtkV3hsTEZ4dUlDQWdJQ0FnSUNCT1lYUnBkbVZUWTNKcGNIUlZTVk5wWkdWRWNtRjNaWEpOYjJSMWJHVmNiaUFnSUNCZExGeHVJQ0FnSUdSbFkyeGhjbUYwYVc5dWN6b2dXMXh1SUNBZ0lDQWdJQ0JCY0hCRGIyMXdiMjVsYm5Rc1hHNGdJQ0FnWFN4Y2JpQWdJQ0J6WTJobGJXRnpPaUJiWEc0Z0lDQWdJQ0FnSUU1UFgwVlNVazlTVTE5VFEwaEZUVUZjYmlBZ0lDQmRYRzU5S1Z4dVpYaHdiM0owSUdOc1lYTnpJRUZ3Y0UxdlpIVnNaU0I3SUgxY2JpSmRmUT09IiwiXG4gICAgICAgICAgICByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2xvYWQtYXBwbGljYXRpb24tY3NzLWFuZ3VsYXJcIikoKTtcbiAgICAgICAgICAgIFxuICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpO1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaW1wb3J0IHNob3VsZCBiZSBmaXJzdCBpbiBvcmRlciB0byBsb2FkIHNvbWUgcmVxdWlyZWQgc2V0dGluZ3MgKGxpa2UgZ2xvYmFscyBhbmQgcmVmbGVjdC1tZXRhZGF0YSlcbnZhciBwbGF0Zm9ybV8xID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCIpO1xudmFyIGFwcF9tb2R1bGVfMSA9IHJlcXVpcmUoXCIuL2FwcC9hcHAubW9kdWxlXCIpO1xucGxhdGZvcm1fMS5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoYXBwX21vZHVsZV8xLkFwcE1vZHVsZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0ptYVd4bElqb2liV0ZwYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbTFoYVc0dWRITWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdRVUZCUVN3d1IwRkJNRWM3UVVGRE1VY3NNRVJCUVRSRk8wRkJSVFZGTEN0RFFVRTJRenRCUVVVM1F5eHpRMEZCTWtJc1JVRkJSU3hEUVVGRExHVkJRV1VzUTBGQlF5eHpRa0ZCVXl4RFFVRkRMRU5CUVVNaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUIwYUdseklHbHRjRzl5ZENCemFHOTFiR1FnWW1VZ1ptbHljM1FnYVc0Z2IzSmtaWElnZEc4Z2JHOWhaQ0J6YjIxbElISmxjWFZwY21Wa0lITmxkSFJwYm1keklDaHNhV3RsSUdkc2IySmhiSE1nWVc1a0lISmxabXhsWTNRdGJXVjBZV1JoZEdFcFhHNXBiWEJ2Y25RZ2V5QndiR0YwWm05eWJVNWhkR2wyWlZOamNtbHdkRVI1Ym1GdGFXTWdmU0JtY205dElGd2libUYwYVhabGMyTnlhWEIwTFdGdVozVnNZWEl2Y0d4aGRHWnZjbTFjSWp0Y2JseHVhVzF3YjNKMElIc2dRWEJ3VFc5a2RXeGxJSDBnWm5KdmJTQmNJaTR2WVhCd0wyRndjQzV0YjJSMWJHVmNJanRjYmx4dWNHeGhkR1p2Y20xT1lYUnBkbVZUWTNKcGNIUkVlVzVoYldsaktDa3VZbTl2ZEhOMGNtRndUVzlrZFd4bEtFRndjRTF2WkhWc1pTazdYRzRpWFgwPVxuICAgIFxuICAgICAgICAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbmd1bGFyL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvb3BlcmF0b3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=