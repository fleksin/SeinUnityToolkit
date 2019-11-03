(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/_cannon-dtysky@0.6.4@cannon-dtysky/build/cannon.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_cannon-dtysky@0.6.4@cannon-dtysky/build/cannon.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;// Tue, 22 Jan 2019 12:50:18 GMT

/*
 * Copyright (c) 2015 cannon.js Authors
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use, copy,
 * modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

!function(e){if(true)module.exports=e();else { var f; }}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports={
  "name": "cannon-dtysky",
  "version": "0.6.4",
  "description": "A lightweight 3D physics engine written in JavaScript.",
  "homepage": "https://github.com/schteppe/cannon.js",
  "authors": [
    "Stefan Hedman <schteppe@gmail.com> (http://steffe.se)",
    "dtysky <dtysky@outlook.com> (http://dtysky.moe)"
  ],
  "scripts": {
    "build": "grunt",
    "prepublish": "npm run build" 
  },
  "files": [
    "build",
    "README.markdown",
    "LICENSE"
  ],
  "keywords": [
    "cannon.js",
    "cannon",
    "physics",
    "engine",
    "3d"
  ],
  "main": "./build/cannon.js",
  "engines": {
    "node": "*"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/dtysky/cannon.js.git"
  },
  "bugs": {
    "url": "https://github.com/dtysky/cannon.js/issues"
  },
  "licenses": [
    {
      "type": "MIT"
    }
  ],
  "devDependencies": {
    "jshint": "latest",
    "uglify-js": "latest",
    "nodeunit": "^0.9.0",
    "grunt": "~0.4.0",
    "grunt-contrib-jshint": "~0.1.1",
    "grunt-contrib-nodeunit": "^0.4.1",
    "grunt-contrib-concat": "~0.1.3",
    "grunt-contrib-uglify": "^0.5.1",
    "grunt-browserify": "^2.1.4",
    "grunt-contrib-yuidoc": "^0.5.2",
    "browserify": "*"
  },
  "dependencies": {}
}

},{}],2:[function(_dereq_,module,exports){
// Export classes
module.exports = {
    version :                       _dereq_('../package.json').version,

    AABB :                          _dereq_('./collision/AABB'),
    ArrayCollisionMatrix :          _dereq_('./collision/ArrayCollisionMatrix'),
    Body :                          _dereq_('./objects/Body'),
    Box :                           _dereq_('./shapes/Box'),
    Broadphase :                    _dereq_('./collision/Broadphase'),
    Constraint :                    _dereq_('./constraints/Constraint'),
    ContactEquation :               _dereq_('./equations/ContactEquation'),
    Narrowphase :                   _dereq_('./world/Narrowphase'),
    ConeTwistConstraint :           _dereq_('./constraints/ConeTwistConstraint'),
    ContactMaterial :               _dereq_('./material/ContactMaterial'),
    ConvexPolyhedron :              _dereq_('./shapes/ConvexPolyhedron'),
    Cylinder :                      _dereq_('./shapes/Cylinder'),
    DistanceConstraint :            _dereq_('./constraints/DistanceConstraint'),
    Equation :                      _dereq_('./equations/Equation'),
    EventTarget :                   _dereq_('./utils/EventTarget'),
    FrictionEquation :              _dereq_('./equations/FrictionEquation'),
    GSSolver :                      _dereq_('./solver/GSSolver'),
    GridBroadphase :                _dereq_('./collision/GridBroadphase'),
    Heightfield :                   _dereq_('./shapes/Heightfield'),
    HingeConstraint :               _dereq_('./constraints/HingeConstraint'),
    LockConstraint :                _dereq_('./constraints/LockConstraint'),
    Mat3 :                          _dereq_('./math/Mat3'),
    Material :                      _dereq_('./material/Material'),
    NaiveBroadphase :               _dereq_('./collision/NaiveBroadphase'),
    ObjectCollisionMatrix :         _dereq_('./collision/ObjectCollisionMatrix'),
    Pool :                          _dereq_('./utils/Pool'),
    Particle :                      _dereq_('./shapes/Particle'),
    Plane :                         _dereq_('./shapes/Plane'),
    PointToPointConstraint :        _dereq_('./constraints/PointToPointConstraint'),
    Quaternion :                    _dereq_('./math/Quaternion'),
    Ray :                           _dereq_('./collision/Ray'),
    RaycastVehicle :                _dereq_('./objects/RaycastVehicle'),
    RaycastResult :                 _dereq_('./collision/RaycastResult'),
    RigidVehicle :                  _dereq_('./objects/RigidVehicle'),
    RotationalEquation :            _dereq_('./equations/RotationalEquation'),
    RotationalMotorEquation :       _dereq_('./equations/RotationalMotorEquation'),
    SAPBroadphase :                 _dereq_('./collision/SAPBroadphase'),
    SPHSystem :                     _dereq_('./objects/SPHSystem'),
    Shape :                         _dereq_('./shapes/Shape'),
    Solver :                        _dereq_('./solver/Solver'),
    Sphere :                        _dereq_('./shapes/Sphere'),
    SplitSolver :                   _dereq_('./solver/SplitSolver'),
    Spring :                        _dereq_('./objects/Spring'),
    Transform :                     _dereq_('./math/Transform'),
    Trimesh :                       _dereq_('./shapes/Trimesh'),
    Vec3 :                          _dereq_('./math/Vec3'),
    Vec3Pool :                      _dereq_('./utils/Vec3Pool'),
    World :                         _dereq_('./world/World'),
};

},{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":10,"./collision/RaycastResult":11,"./collision/SAPBroadphase":12,"./constraints/ConeTwistConstraint":13,"./constraints/Constraint":14,"./constraints/DistanceConstraint":15,"./constraints/HingeConstraint":16,"./constraints/LockConstraint":17,"./constraints/PointToPointConstraint":18,"./equations/ContactEquation":20,"./equations/Equation":21,"./equations/FrictionEquation":22,"./equations/RotationalEquation":23,"./equations/RotationalMotorEquation":24,"./material/ContactMaterial":25,"./material/Material":26,"./math/Mat3":28,"./math/Quaternion":29,"./math/Transform":30,"./math/Vec3":31,"./objects/Body":32,"./objects/RaycastVehicle":33,"./objects/RigidVehicle":34,"./objects/SPHSystem":35,"./objects/Spring":36,"./shapes/Box":38,"./shapes/ConvexPolyhedron":39,"./shapes/Cylinder":40,"./shapes/Heightfield":41,"./shapes/Particle":42,"./shapes/Plane":43,"./shapes/Shape":44,"./shapes/Sphere":45,"./shapes/Trimesh":46,"./solver/GSSolver":47,"./solver/Solver":48,"./solver/SplitSolver":49,"./utils/EventTarget":50,"./utils/Pool":52,"./utils/Vec3Pool":55,"./world/Narrowphase":56,"./world/World":57}],3:[function(_dereq_,module,exports){
var Vec3 = _dereq_('../math/Vec3');
var Utils = _dereq_('../utils/Utils');

module.exports = AABB;

/**
 * Axis aligned bounding box class.
 * @class AABB
 * @constructor
 * @param {Object} [options]
 * @param {Vec3}   [options.upperBound]
 * @param {Vec3}   [options.lowerBound]
 */
function AABB(options){
    options = options || {};

    /**
     * The lower bound of the bounding box.
     * @property lowerBound
     * @type {Vec3}
     */
    this.lowerBound = new Vec3();
    if(options.lowerBound){
        this.lowerBound.copy(options.lowerBound);
    }

    /**
     * The upper bound of the bounding box.
     * @property upperBound
     * @type {Vec3}
     */
    this.upperBound = new Vec3();
    if(options.upperBound){
        this.upperBound.copy(options.upperBound);
    }
}

var tmp = new Vec3();

/**
 * Set the AABB bounds from a set of points.
 * @method setFromPoints
 * @param {Array} points An array of Vec3's.
 * @param {Vec3} position
 * @param {Quaternion} quaternion
 * @param {number} skinSize
 * @return {AABB} The self object
 */
AABB.prototype.setFromPoints = function(points, position, quaternion, skinSize){
    var l = this.lowerBound,
        u = this.upperBound,
        q = quaternion;

    // Set to the first point
    l.copy(points[0]);
    if(q){
        q.vmult(l, l);
    }
    u.copy(l);

    for(var i = 1; i<points.length; i++){
        var p = points[i];

        if(q){
            q.vmult(p, tmp);
            p = tmp;
        }

        if(p.x > u.x){ u.x = p.x; }
        if(p.x < l.x){ l.x = p.x; }
        if(p.y > u.y){ u.y = p.y; }
        if(p.y < l.y){ l.y = p.y; }
        if(p.z > u.z){ u.z = p.z; }
        if(p.z < l.z){ l.z = p.z; }
    }

    // Add offset
    if (position) {
        position.vadd(l, l);
        position.vadd(u, u);
    }

    if(skinSize){
        l.x -= skinSize;
        l.y -= skinSize;
        l.z -= skinSize;
        u.x += skinSize;
        u.y += skinSize;
        u.z += skinSize;
    }

    return this;
};

/**
 * Copy bounds from an AABB to this AABB
 * @method copy
 * @param  {AABB} aabb Source to copy from
 * @return {AABB} The this object, for chainability
 */
AABB.prototype.copy = function(aabb){
    this.lowerBound.copy(aabb.lowerBound);
    this.upperBound.copy(aabb.upperBound);
    return this;
};

/**
 * Clone an AABB
 * @method clone
 */
AABB.prototype.clone = function(){
    return new AABB().copy(this);
};

/**
 * Extend this AABB so that it covers the given AABB too.
 * @method extend
 * @param  {AABB} aabb
 */
AABB.prototype.extend = function(aabb){
    this.lowerBound.x = Math.min(this.lowerBound.x, aabb.lowerBound.x);
    this.upperBound.x = Math.max(this.upperBound.x, aabb.upperBound.x);
    this.lowerBound.y = Math.min(this.lowerBound.y, aabb.lowerBound.y);
    this.upperBound.y = Math.max(this.upperBound.y, aabb.upperBound.y);
    this.lowerBound.z = Math.min(this.lowerBound.z, aabb.lowerBound.z);
    this.upperBound.z = Math.max(this.upperBound.z, aabb.upperBound.z);
};

/**
 * Returns true if the given AABB overlaps this AABB.
 * @method overlaps
 * @param  {AABB} aabb
 * @return {Boolean}
 */
AABB.prototype.overlaps = function(aabb){
    var l1 = this.lowerBound,
        u1 = this.upperBound,
        l2 = aabb.lowerBound,
        u2 = aabb.upperBound;

    //      l2        u2
    //      |---------|
    // |--------|
    // l1       u1

    var overlapsX = ((l2.x <= u1.x && u1.x <= u2.x) || (l1.x <= u2.x && u2.x <= u1.x));
    var overlapsY = ((l2.y <= u1.y && u1.y <= u2.y) || (l1.y <= u2.y && u2.y <= u1.y));
    var overlapsZ = ((l2.z <= u1.z && u1.z <= u2.z) || (l1.z <= u2.z && u2.z <= u1.z));

    return overlapsX && overlapsY && overlapsZ;
};

// Mostly for debugging
AABB.prototype.volume = function(){
    var l = this.lowerBound,
        u = this.upperBound;
    return (u.x - l.x) * (u.y - l.y) * (u.z - l.z);
};


/**
 * Returns true if the given AABB is fully contained in this AABB.
 * @method contains
 * @param {AABB} aabb
 * @return {Boolean}
 */
AABB.prototype.contains = function(aabb){
    var l1 = this.lowerBound,
        u1 = this.upperBound,
        l2 = aabb.lowerBound,
        u2 = aabb.upperBound;

    //      l2        u2
    //      |---------|
    // |---------------|
    // l1              u1

    return (
        (l1.x <= l2.x && u1.x >= u2.x) &&
        (l1.y <= l2.y && u1.y >= u2.y) &&
        (l1.z <= l2.z && u1.z >= u2.z)
    );
};

/**
 * @method getCorners
 * @param {Vec3} a
 * @param {Vec3} b
 * @param {Vec3} c
 * @param {Vec3} d
 * @param {Vec3} e
 * @param {Vec3} f
 * @param {Vec3} g
 * @param {Vec3} h
 */
AABB.prototype.getCorners = function(a, b, c, d, e, f, g, h){
    var l = this.lowerBound,
        u = this.upperBound;

    a.copy(l);
    b.set( u.x, l.y, l.z );
    c.set( u.x, u.y, l.z );
    d.set( l.x, u.y, u.z );
    e.set( u.x, l.y, l.z );
    f.set( l.x, u.y, l.z );
    g.set( l.x, l.y, u.z );
    h.copy(u);
};

var transformIntoFrame_corners = [
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3()
];

/**
 * Get the representation of an AABB in another frame.
 * @method toLocalFrame
 * @param  {Transform} frame
 * @param  {AABB} target
 * @return {AABB} The "target" AABB object.
 */
AABB.prototype.toLocalFrame = function(frame, target){

    var corners = transformIntoFrame_corners;
    var a = corners[0];
    var b = corners[1];
    var c = corners[2];
    var d = corners[3];
    var e = corners[4];
    var f = corners[5];
    var g = corners[6];
    var h = corners[7];

    // Get corners in current frame
    this.getCorners(a, b, c, d, e, f, g, h);

    // Transform them to new local frame
    for(var i=0; i !== 8; i++){
        var corner = corners[i];
        frame.pointToLocal(corner, corner);
    }

    return target.setFromPoints(corners);
};

/**
 * Get the representation of an AABB in the global frame.
 * @method toWorldFrame
 * @param  {Transform} frame
 * @param  {AABB} target
 * @return {AABB} The "target" AABB object.
 */
AABB.prototype.toWorldFrame = function(frame, target){

    var corners = transformIntoFrame_corners;
    var a = corners[0];
    var b = corners[1];
    var c = corners[2];
    var d = corners[3];
    var e = corners[4];
    var f = corners[5];
    var g = corners[6];
    var h = corners[7];

    // Get corners in current frame
    this.getCorners(a, b, c, d, e, f, g, h);

    // Transform them to new local frame
    for(var i=0; i !== 8; i++){
        var corner = corners[i];
        frame.pointToWorld(corner, corner);
    }

    return target.setFromPoints(corners);
};

/**
 * Check if the AABB is hit by a ray.
 * @param  {Ray} ray
 * @return {number}
 */
AABB.prototype.overlapsRay = function(ray){
    var t = 0;

    // ray.direction is unit direction vector of ray
    var dirFracX = 1 / ray._direction.x;
    var dirFracY = 1 / ray._direction.y;
    var dirFracZ = 1 / ray._direction.z;

    // this.lowerBound is the corner of AABB with minimal coordinates - left bottom, rt is maximal corner
    var t1 = (this.lowerBound.x - ray.from.x) * dirFracX;
    var t2 = (this.upperBound.x - ray.from.x) * dirFracX;
    var t3 = (this.lowerBound.y - ray.from.y) * dirFracY;
    var t4 = (this.upperBound.y - ray.from.y) * dirFracY;
    var t5 = (this.lowerBound.z - ray.from.z) * dirFracZ;
    var t6 = (this.upperBound.z - ray.from.z) * dirFracZ;

    // var tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)));
    // var tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)));
    var tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)), Math.min(t5, t6));
    var tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)), Math.max(t5, t6));

    // if tmax < 0, ray (line) is intersecting AABB, but whole AABB is behing us
    if (tmax < 0){
        //t = tmax;
        return false;
    }

    // if tmin > tmax, ray doesn't intersect AABB
    if (tmin > tmax){
        //t = tmax;
        return false;
    }

    return true;
};
},{"../math/Vec3":31,"../utils/Utils":54}],4:[function(_dereq_,module,exports){
module.exports = ArrayCollisionMatrix;

/**
 * Collision "matrix". It's actually a triangular-shaped array of whether two bodies are touching this step, for reference next step
 * @class ArrayCollisionMatrix
 * @constructor
 */
function ArrayCollisionMatrix() {

    /**
     * The matrix storage
     * @property matrix
     * @type {Array}
     */
    this.matrix = [];
}

/**
 * Get an element
 * @method get
 * @param  {Number} i
 * @param  {Number} j
 * @return {Number}
 */
ArrayCollisionMatrix.prototype.get = function(i, j) {
    i = i.index;
    j = j.index;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
    }
    return this.matrix[(i*(i + 1)>>1) + j-1];
};

/**
 * Set an element
 * @method set
 * @param {Number} i
 * @param {Number} j
 * @param {Number} value
 */
ArrayCollisionMatrix.prototype.set = function(i, j, value) {
    i = i.index;
    j = j.index;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
    }
    this.matrix[(i*(i + 1)>>1) + j-1] = value ? 1 : 0;
};

/**
 * Sets all elements to zero
 * @method reset
 */
ArrayCollisionMatrix.prototype.reset = function() {
    for (var i=0, l=this.matrix.length; i!==l; i++) {
        this.matrix[i]=0;
    }
};

/**
 * Sets the max number of objects
 * @method setNumObjects
 * @param {Number} n
 */
ArrayCollisionMatrix.prototype.setNumObjects = function(n) {
    this.matrix.length = n*(n-1)>>1;
};

},{}],5:[function(_dereq_,module,exports){
var Body = _dereq_('../objects/Body');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Shape = _dereq_('../shapes/Shape');
var Plane = _dereq_('../shapes/Plane');

module.exports = Broadphase;

/**
 * Base class for broadphase implementations
 * @class Broadphase
 * @constructor
 * @author schteppe
 */
function Broadphase(){
    /**
    * The world to search for collisions in.
    * @property world
    * @type {World}
    */
    this.world = null;

    /**
     * If set to true, the broadphase uses bounding boxes for intersection test, else it uses bounding spheres.
     * @property useBoundingBoxes
     * @type {Boolean}
     */
    this.useBoundingBoxes = false;

    /**
     * Set to true if the objects in the world moved.
     * @property {Boolean} dirty
     */
    this.dirty = true;
}

/**
 * Get the collision pairs from the world
 * @method collisionPairs
 * @param {World} world The world to search in
 * @param {Array} p1 Empty array to be filled with body objects
 * @param {Array} p2 Empty array to be filled with body objects
 */
Broadphase.prototype.collisionPairs = function(world,p1,p2){
    throw new Error("collisionPairs not implemented for this BroadPhase class!");
};

/**
 * Check if a body pair needs to be intersection tested at all.
 * @method needBroadphaseCollision
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @return {bool}
 */
Broadphase.prototype.needBroadphaseCollision = function(bodyA,bodyB){

    // Check collision filter masks
    if( (bodyA.collisionFilterGroup & bodyB.collisionFilterMask)===0 || (bodyB.collisionFilterGroup & bodyA.collisionFilterMask)===0){
        return false;
    }

    // Check types
    if(((bodyA.type & Body.STATIC)!==0 || bodyA.sleepState === Body.SLEEPING) &&
       ((bodyB.type & Body.STATIC)!==0 || bodyB.sleepState === Body.SLEEPING)) {
        // Both bodies are static or sleeping. Skip.
        return false;
    }

    return true;
};

/**
 * Check if the bounding volumes of two bodies intersect.
 * @method intersectionTest
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {array} pairs1
 * @param {array} pairs2
  */
Broadphase.prototype.intersectionTest = function(bodyA, bodyB, pairs1, pairs2){
    if(this.useBoundingBoxes){
        this.doBoundingBoxBroadphase(bodyA,bodyB,pairs1,pairs2);
    } else {
        this.doBoundingSphereBroadphase(bodyA,bodyB,pairs1,pairs2);
    }
};

/**
 * Check if the bounding spheres of two bodies are intersecting.
 * @method doBoundingSphereBroadphase
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Array} pairs1 bodyA is appended to this array if intersection
 * @param {Array} pairs2 bodyB is appended to this array if intersection
 */
var Broadphase_collisionPairs_r = new Vec3(), // Temp objects
    Broadphase_collisionPairs_normal =  new Vec3(),
    Broadphase_collisionPairs_quat =  new Quaternion(),
    Broadphase_collisionPairs_relpos  =  new Vec3();
Broadphase.prototype.doBoundingSphereBroadphase = function(bodyA,bodyB,pairs1,pairs2){
    var r = Broadphase_collisionPairs_r;
    bodyB.position.vsub(bodyA.position,r);
    var boundingRadiusSum2 = Math.pow(bodyA.boundingRadius + bodyB.boundingRadius, 2);
    var norm2 = r.norm2();
    if(norm2 < boundingRadiusSum2){
        pairs1.push(bodyA);
        pairs2.push(bodyB);
    }
};

/**
 * Check if the bounding boxes of two bodies are intersecting.
 * @method doBoundingBoxBroadphase
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
Broadphase.prototype.doBoundingBoxBroadphase = function(bodyA,bodyB,pairs1,pairs2){
    if(bodyA.aabbNeedsUpdate){
        bodyA.computeAABB();
    }
    if(bodyB.aabbNeedsUpdate){
        bodyB.computeAABB();
    }

    // Check AABB / AABB
    if(bodyA.aabb.overlaps(bodyB.aabb)){
        pairs1.push(bodyA);
        pairs2.push(bodyB);
    }
};

/**
 * Removes duplicate pairs from the pair arrays.
 * @method makePairsUnique
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
var Broadphase_makePairsUnique_temp = { keys:[] },
    Broadphase_makePairsUnique_p1 = [],
    Broadphase_makePairsUnique_p2 = [];
Broadphase.prototype.makePairsUnique = function(pairs1,pairs2){
    var t = Broadphase_makePairsUnique_temp,
        p1 = Broadphase_makePairsUnique_p1,
        p2 = Broadphase_makePairsUnique_p2,
        N = pairs1.length;

    for(var i=0; i!==N; i++){
        p1[i] = pairs1[i];
        p2[i] = pairs2[i];
    }

    pairs1.length = 0;
    pairs2.length = 0;

    for(var i=0; i!==N; i++){
        var id1 = p1[i].id,
            id2 = p2[i].id;
        var key = id1 < id2 ? id1+","+id2 :  id2+","+id1;
        t[key] = i;
        t.keys.push(key);
    }

    for(var i=0; i!==t.keys.length; i++){
        var key = t.keys.pop(),
            pairIndex = t[key];
        pairs1.push(p1[pairIndex]);
        pairs2.push(p2[pairIndex]);
        delete t[key];
    }
};

/**
 * To be implemented by subcasses
 * @method setWorld
 * @param {World} world
 */
Broadphase.prototype.setWorld = function(world){
};

/**
 * Check if the bounding spheres of two bodies overlap.
 * @method boundingSphereCheck
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @return {boolean}
 */
var bsc_dist = new Vec3();
Broadphase.boundingSphereCheck = function(bodyA,bodyB){
    var dist = bsc_dist;
    bodyA.position.vsub(bodyB.position,dist);
    return Math.pow(bodyA.shape.boundingSphereRadius + bodyB.shape.boundingSphereRadius,2) > dist.norm2();
};

/**
 * Returns all the bodies within the AABB.
 * @method aabbQuery
 * @param  {World} world
 * @param  {AABB} aabb
 * @param  {array} result An array to store resulting bodies in.
 * @return {array}
 */
Broadphase.prototype.aabbQuery = function(world, aabb, result){
    console.warn('.aabbQuery is not implemented in this Broadphase subclass.');
    return [];
};
},{"../math/Quaternion":29,"../math/Vec3":31,"../objects/Body":32,"../shapes/Plane":43,"../shapes/Shape":44}],6:[function(_dereq_,module,exports){
module.exports = GridBroadphase;

var Broadphase = _dereq_('./Broadphase');
var Vec3 = _dereq_('../math/Vec3');
var Shape = _dereq_('../shapes/Shape');

/**
 * Axis aligned uniform grid broadphase.
 * @class GridBroadphase
 * @constructor
 * @extends Broadphase
 * @todo Needs support for more than just planes and spheres.
 * @param {Vec3} aabbMin
 * @param {Vec3} aabbMax
 * @param {Number} nx Number of boxes along x
 * @param {Number} ny Number of boxes along y
 * @param {Number} nz Number of boxes along z
 */
function GridBroadphase(aabbMin,aabbMax,nx,ny,nz){
    Broadphase.apply(this);
    this.nx = nx || 10;
    this.ny = ny || 10;
    this.nz = nz || 10;
    this.aabbMin = aabbMin || new Vec3(100,100,100);
    this.aabbMax = aabbMax || new Vec3(-100,-100,-100);
	var nbins = this.nx * this.ny * this.nz;
	if (nbins <= 0) {
		throw "GridBroadphase: Each dimension's n must be >0";
	}
    this.bins = [];
	this.binLengths = []; //Rather than continually resizing arrays (thrashing the memory), just record length and allow them to grow
	this.bins.length = nbins;
	this.binLengths.length = nbins;
	for (var i=0;i<nbins;i++) {
		this.bins[i]=[];
		this.binLengths[i]=0;
	}
}
GridBroadphase.prototype = new Broadphase();
GridBroadphase.prototype.constructor = GridBroadphase;

/**
 * Get all the collision pairs in the physics world
 * @method collisionPairs
 * @param {World} world
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
var GridBroadphase_collisionPairs_d = new Vec3();
var GridBroadphase_collisionPairs_binPos = new Vec3();
GridBroadphase.prototype.collisionPairs = function(world,pairs1,pairs2){
    var N = world.numObjects(),
        bodies = world.bodies;

    var max = this.aabbMax,
        min = this.aabbMin,
        nx = this.nx,
        ny = this.ny,
        nz = this.nz;

	var xstep = ny*nz;
	var ystep = nz;
	var zstep = 1;

    var xmax = max.x,
        ymax = max.y,
        zmax = max.z,
        xmin = min.x,
        ymin = min.y,
        zmin = min.z;

    var xmult = nx / (xmax-xmin),
        ymult = ny / (ymax-ymin),
        zmult = nz / (zmax-zmin);

    var binsizeX = (xmax - xmin) / nx,
        binsizeY = (ymax - ymin) / ny,
        binsizeZ = (zmax - zmin) / nz;

	var binRadius = Math.sqrt(binsizeX*binsizeX + binsizeY*binsizeY + binsizeZ*binsizeZ) * 0.5;

    var types = Shape.types;
    var SPHERE =            types.SPHERE,
        PLANE =             types.PLANE,
        BOX =               types.BOX,
        COMPOUND =          types.COMPOUND,
        CONVEXPOLYHEDRON =  types.CONVEXPOLYHEDRON;

    var bins=this.bins,
		binLengths=this.binLengths,
        Nbins=this.bins.length;

    // Reset bins
    for(var i=0; i!==Nbins; i++){
        binLengths[i] = 0;
    }

    var ceil = Math.ceil;
	var min = Math.min;
	var max = Math.max;

	function addBoxToBins(x0,y0,z0,x1,y1,z1,bi) {
		var xoff0 = ((x0 - xmin) * xmult)|0,
			yoff0 = ((y0 - ymin) * ymult)|0,
			zoff0 = ((z0 - zmin) * zmult)|0,
			xoff1 = ceil((x1 - xmin) * xmult),
			yoff1 = ceil((y1 - ymin) * ymult),
			zoff1 = ceil((z1 - zmin) * zmult);

		if (xoff0 < 0) { xoff0 = 0; } else if (xoff0 >= nx) { xoff0 = nx - 1; }
		if (yoff0 < 0) { yoff0 = 0; } else if (yoff0 >= ny) { yoff0 = ny - 1; }
		if (zoff0 < 0) { zoff0 = 0; } else if (zoff0 >= nz) { zoff0 = nz - 1; }
		if (xoff1 < 0) { xoff1 = 0; } else if (xoff1 >= nx) { xoff1 = nx - 1; }
		if (yoff1 < 0) { yoff1 = 0; } else if (yoff1 >= ny) { yoff1 = ny - 1; }
		if (zoff1 < 0) { zoff1 = 0; } else if (zoff1 >= nz) { zoff1 = nz - 1; }

		xoff0 *= xstep;
		yoff0 *= ystep;
		zoff0 *= zstep;
		xoff1 *= xstep;
		yoff1 *= ystep;
		zoff1 *= zstep;

		for (var xoff = xoff0; xoff <= xoff1; xoff += xstep) {
			for (var yoff = yoff0; yoff <= yoff1; yoff += ystep) {
				for (var zoff = zoff0; zoff <= zoff1; zoff += zstep) {
					var idx = xoff+yoff+zoff;
					bins[idx][binLengths[idx]++] = bi;
				}
			}
		}
	}

    // Put all bodies into the bins
    for(var i=0; i!==N; i++){
        var bi = bodies[i];
        var si = bi.shape;

        switch(si.type){
        case SPHERE:
            // Put in bin
            // check if overlap with other bins
            var x = bi.position.x,
                y = bi.position.y,
                z = bi.position.z;
            var r = si.radius;

			addBoxToBins(x-r, y-r, z-r, x+r, y+r, z+r, bi);
            break;

        case PLANE:
            if(si.worldNormalNeedsUpdate){
                si.computeWorldNormal(bi.quaternion);
            }
            var planeNormal = si.worldNormal;

			//Relative position from origin of plane object to the first bin
			//Incremented as we iterate through the bins
			var xreset = xmin + binsizeX*0.5 - bi.position.x,
				yreset = ymin + binsizeY*0.5 - bi.position.y,
				zreset = zmin + binsizeZ*0.5 - bi.position.z;

            var d = GridBroadphase_collisionPairs_d;
			d.set(xreset, yreset, zreset);

			for (var xi = 0, xoff = 0; xi !== nx; xi++, xoff += xstep, d.y = yreset, d.x += binsizeX) {
				for (var yi = 0, yoff = 0; yi !== ny; yi++, yoff += ystep, d.z = zreset, d.y += binsizeY) {
					for (var zi = 0, zoff = 0; zi !== nz; zi++, zoff += zstep, d.z += binsizeZ) {
						if (d.dot(planeNormal) < binRadius) {
							var idx = xoff + yoff + zoff;
							bins[idx][binLengths[idx]++] = bi;
						}
					}
				}
			}
            break;

        default:
			if (bi.aabbNeedsUpdate) {
				bi.computeAABB();
			}

			addBoxToBins(
				bi.aabb.lowerBound.x,
				bi.aabb.lowerBound.y,
				bi.aabb.lowerBound.z,
				bi.aabb.upperBound.x,
				bi.aabb.upperBound.y,
				bi.aabb.upperBound.z,
				bi);
            break;
        }
    }

    // Check each bin
    for(var i=0; i!==Nbins; i++){
		var binLength = binLengths[i];
		//Skip bins with no potential collisions
		if (binLength > 1) {
			var bin = bins[i];

			// Do N^2 broadphase inside
			for(var xi=0; xi!==binLength; xi++){
				var bi = bin[xi];
				for(var yi=0; yi!==xi; yi++){
					var bj = bin[yi];
					if(this.needBroadphaseCollision(bi,bj)){
						this.intersectionTest(bi,bj,pairs1,pairs2);
					}
				}
			}
		}
    }

//	for (var zi = 0, zoff=0; zi < nz; zi++, zoff+= zstep) {
//		console.log("layer "+zi);
//		for (var yi = 0, yoff=0; yi < ny; yi++, yoff += ystep) {
//			var row = '';
//			for (var xi = 0, xoff=0; xi < nx; xi++, xoff += xstep) {
//				var idx = xoff + yoff + zoff;
//				row += ' ' + binLengths[idx];
//			}
//			console.log(row);
//		}
//	}

    this.makePairsUnique(pairs1,pairs2);
};

},{"../math/Vec3":31,"../shapes/Shape":44,"./Broadphase":5}],7:[function(_dereq_,module,exports){
module.exports = NaiveBroadphase;

var Broadphase = _dereq_('./Broadphase');
var AABB = _dereq_('./AABB');

/**
 * Naive broadphase implementation, used in lack of better ones.
 * @class NaiveBroadphase
 * @constructor
 * @description The naive broadphase looks at all possible pairs without restriction, therefore it has complexity N^2 (which is bad)
 * @extends Broadphase
 */
function NaiveBroadphase(){
    Broadphase.apply(this);
}
NaiveBroadphase.prototype = new Broadphase();
NaiveBroadphase.prototype.constructor = NaiveBroadphase;

/**
 * Get all the collision pairs in the physics world
 * @method collisionPairs
 * @param {World} world
 * @param {Array} pairs1
 * @param {Array} pairs2
 */
NaiveBroadphase.prototype.collisionPairs = function(world,pairs1,pairs2){
    var bodies = world.bodies,
        n = bodies.length,
        i,j,bi,bj;

    // Naive N^2 ftw!
    for(i=0; i!==n; i++){
        for(j=0; j!==i; j++){

            bi = bodies[i];
            bj = bodies[j];

            if(!this.needBroadphaseCollision(bi,bj)){
                continue;
            }

            this.intersectionTest(bi,bj,pairs1,pairs2);
        }
    }
};

var tmpAABB = new AABB();

/**
 * Returns all the bodies within an AABB.
 * @method aabbQuery
 * @param  {World} world
 * @param  {AABB} aabb
 * @param {array} result An array to store resulting bodies in.
 * @return {array}
 */
NaiveBroadphase.prototype.aabbQuery = function(world, aabb, result){
    result = result || [];

    for(var i = 0; i < world.bodies.length; i++){
        var b = world.bodies[i];

        if(b.aabbNeedsUpdate){
            b.computeAABB();
        }

        // Ugly hack until Body gets aabb
        if(b.aabb.overlaps(aabb)){
            result.push(b);
        }
    }

    return result;
};
},{"./AABB":3,"./Broadphase":5}],8:[function(_dereq_,module,exports){
module.exports = ObjectCollisionMatrix;

/**
 * Records what objects are colliding with each other
 * @class ObjectCollisionMatrix
 * @constructor
 */
function ObjectCollisionMatrix() {

    /**
     * The matrix storage
     * @property matrix
     * @type {Object}
     */
	this.matrix = {};
}

/**
 * @method get
 * @param  {Number} i
 * @param  {Number} j
 * @return {Number}
 */
ObjectCollisionMatrix.prototype.get = function(i, j) {
	i = i.id;
	j = j.id;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
    }
	return i+'-'+j in this.matrix;
};

/**
 * @method set
 * @param  {Number} i
 * @param  {Number} j
 * @param {Number} value
 */
ObjectCollisionMatrix.prototype.set = function(i, j, value) {
	i = i.id;
	j = j.id;
    if (j > i) {
        var temp = j;
        j = i;
        i = temp;
	}
	if (value) {
		this.matrix[i+'-'+j] = true;
	}
	else {
		delete this.matrix[i+'-'+j];
	}
};

/**
 * Empty the matrix
 * @method reset
 */
ObjectCollisionMatrix.prototype.reset = function() {
	this.matrix = {};
};

/**
 * Set max number of objects
 * @method setNumObjects
 * @param {Number} n
 */
ObjectCollisionMatrix.prototype.setNumObjects = function(n) {
};

},{}],9:[function(_dereq_,module,exports){
module.exports = OverlapKeeper;

/**
 * @class OverlapKeeper
 * @constructor
 */
function OverlapKeeper() {
    this.current = [];
    this.previous = [];
}

OverlapKeeper.prototype.getKey = function(i, j) {
    if (j < i) {
        var temp = j;
        j = i;
        i = temp;
    }
    return (i << 16) | j;
};


/**
 * @method set
 * @param {Number} i
 * @param {Number} j
 */
OverlapKeeper.prototype.set = function(i, j) {
    // Insertion sort. This way the diff will have linear complexity.
    var key = this.getKey(i, j);
    var current = this.current;
    var index = 0;
    while(key > current[index]){
        index++;
    }
    if(key === current[index]){
        return; // Pair was already added
    }
    for(var j=current.length-1; j>=index; j--){
        current[j + 1] = current[j];
    }
    current[index] = key;
};

/**
 * @method tick
 */
OverlapKeeper.prototype.tick = function() {
    var tmp = this.current;
    this.current = this.previous;
    this.previous = tmp;
    this.current.length = 0;
};

function unpackAndPush(array, key){
    array.push((key & 0xFFFF0000) >> 16, key & 0x0000FFFF);
}

/**
 * @method getDiff
 * @param  {array} additions
 * @param  {array} removals
 */
OverlapKeeper.prototype.getDiff = function(additions, removals) {
    var a = this.current;
    var b = this.previous;
    var al = a.length;
    var bl = b.length;

    var j=0;
    for (var i = 0; i < al; i++) {
        var found = false;
        var keyA = a[i];
        while(keyA > b[j]){
            j++;
        }
        found = keyA === b[j];

        if(!found){
            unpackAndPush(additions, keyA);
        }
    }
    j = 0;
    for (var i = 0; i < bl; i++) {
        var found = false;
        var keyB = b[i];
        while(keyB > a[j]){
            j++;
        }
        found = a[j] === keyB;

        if(!found){
            unpackAndPush(removals, keyB);
        }
    }
};
},{}],10:[function(_dereq_,module,exports){
module.exports = Ray;

var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Transform = _dereq_('../math/Transform');
var ConvexPolyhedron = _dereq_('../shapes/ConvexPolyhedron');
var Box = _dereq_('../shapes/Box');
var RaycastResult = _dereq_('../collision/RaycastResult');
var Shape = _dereq_('../shapes/Shape');
var AABB = _dereq_('../collision/AABB');

/**
 * A line in 3D space that intersects bodies and return points.
 * @class Ray
 * @constructor
 * @param {Vec3} from
 * @param {Vec3} to
 */
function Ray(from, to){
    /**
     * @property {Vec3} from
     */
    this.from = from ? from.clone() : new Vec3();

    /**
     * @property {Vec3} to
     */
    this.to = to ? to.clone() : new Vec3();

    /**
     * @private
     * @property {Vec3} _direction
     */
    this._direction = new Vec3();

    /**
     * The precision of the ray. Used when checking parallelity etc.
     * @property {Number} precision
     */
    this.precision = 0.0001;

    /**
     * Set to true if you want the Ray to take .collisionResponse flags into account on bodies and shapes.
     * @property {Boolean} checkCollisionResponse
     */
    this.checkCollisionResponse = true;

    /**
     * If set to true, the ray skips any hits with normal.dot(rayDirection) < 0.
     * @property {Boolean} skipBackfaces
     */
    this.skipBackfaces = false;

    /**
     * @property {number} collisionFilterMask
     * @default -1
     */
    this.collisionFilterMask = -1;

    /**
     * @property {number} collisionFilterGroup
     * @default -1
     */
    this.collisionFilterGroup = -1;

    /**
     * The intersection mode. Should be Ray.ANY, Ray.ALL or Ray.CLOSEST.
     * @property {number} mode
     */
    this.mode = Ray.ANY;

    /**
     * Current result object.
     * @property {RaycastResult} result
     */
    this.result = new RaycastResult();

    /**
     * Will be set to true during intersectWorld() if the ray hit anything.
     * @property {Boolean} hasHit
     */
    this.hasHit = false;

    /**
     * Current, user-provided result callback. Will be used if mode is Ray.ALL.
     * @property {Function} callback
     */
    this.callback = function(result){};
}
Ray.prototype.constructor = Ray;

Ray.CLOSEST = 1;
Ray.ANY = 2;
Ray.ALL = 4;

var tmpAABB = new AABB();
var tmpArray = [];

/**
 * Do itersection against all bodies in the given World.
 * @method intersectWorld
 * @param  {World} world
 * @param  {object} options
 * @return {Boolean} True if the ray hit anything, otherwise false.
 */
Ray.prototype.intersectWorld = function (world, options) {
    this.mode = options.mode || Ray.ANY;
    this.result = options.result || new RaycastResult();
    this.skipBackfaces = !!options.skipBackfaces;
    this.collisionFilterMask = typeof(options.collisionFilterMask) !== 'undefined' ? options.collisionFilterMask : -1;
    this.collisionFilterGroup = typeof(options.collisionFilterGroup) !== 'undefined' ? options.collisionFilterGroup : -1;
    if(options.from){
        this.from.copy(options.from);
    }
    if(options.to){
        this.to.copy(options.to);
    }
    this.callback = options.callback || function(){};
    this.hasHit = false;

    this.result.reset();
    this._updateDirection();

    this.getAABB(tmpAABB);
    tmpArray.length = 0;

    // hack for performance
    var bodies = world;
    if (options.bodies) {
        bodies = {bodies: options.bodies};
    }

    world.broadphase.aabbQuery(bodies, tmpAABB, tmpArray);
    this.intersectBodies(tmpArray);

    return this.hasHit;
};

var v1 = new Vec3(),
    v2 = new Vec3();

/*
 * As per "Barycentric Technique" as named here http://www.blackpawn.com/texts/pointinpoly/default.html But without the division
 */
Ray.pointInTriangle = pointInTriangle;
function pointInTriangle(p, a, b, c) {
    c.vsub(a,v0);
    b.vsub(a,v1);
    p.vsub(a,v2);

    var dot00 = v0.dot( v0 );
    var dot01 = v0.dot( v1 );
    var dot02 = v0.dot( v2 );
    var dot11 = v1.dot( v1 );
    var dot12 = v1.dot( v2 );

    var u,v;

    return  ( (u = dot11 * dot02 - dot01 * dot12) >= 0 ) &&
            ( (v = dot00 * dot12 - dot01 * dot02) >= 0 ) &&
            ( u + v < ( dot00 * dot11 - dot01 * dot01 ) );
}

/**
 * Shoot a ray at a body, get back information about the hit.
 * @method intersectBody
 * @private
 * @param {Body} body
 * @param {RaycastResult} [result] Deprecated - set the result property of the Ray instead.
 */
var intersectBody_xi = new Vec3();
var intersectBody_qi = new Quaternion();
Ray.prototype.intersectBody = function (body, result) {
    if(result){
        this.result = result;
        this._updateDirection();
    }
    var checkCollisionResponse = this.checkCollisionResponse;

    if(checkCollisionResponse && !body.collisionResponse){
        return;
    }

    if((this.collisionFilterGroup & body.collisionFilterMask)===0 || (body.collisionFilterGroup & this.collisionFilterMask)===0){
        return;
    }

    var xi = intersectBody_xi;
    var qi = intersectBody_qi;

    for (var i = 0, N = body.shapes.length; i < N; i++) {
        var shape = body.shapes[i];

        if(checkCollisionResponse && !shape.collisionResponse){
            continue; // Skip
        }

        body.quaternion.mult(body.shapeOrientations[i], qi);
        body.quaternion.vmult(body.shapeOffsets[i], xi);
        xi.vadd(body.position, xi);

        this.intersectShape(
            shape,
            qi,
            xi,
            body
        );

        if(this.result._shouldStop){
            break;
        }
    }
};

/**
 * @method intersectBodies
 * @param {Array} bodies An array of Body objects.
 * @param {RaycastResult} [result] Deprecated
 */
Ray.prototype.intersectBodies = function (bodies, result) {
    if(result){
        this.result = result;
        this._updateDirection();
    }

    for ( var i = 0, l = bodies.length; !this.result._shouldStop && i < l; i ++ ) {
        this.intersectBody(bodies[i]);
    }
};

/**
 * Updates the _direction vector.
 * @private
 * @method _updateDirection
 */
Ray.prototype._updateDirection = function(){
    this.to.vsub(this.from, this._direction);
    this._direction.normalize();
};

/**
 * @method intersectShape
 * @private
 * @param {Shape} shape
 * @param {Quaternion} quat
 * @param {Vec3} position
 * @param {Body} body
 */
Ray.prototype.intersectShape = function(shape, quat, position, body){
    var from = this.from;


    // Checking boundingSphere
    var distance = distanceFromIntersection(from, this._direction, position);
    if ( distance > shape.boundingSphereRadius ) {
        return;
    }

    var intersectMethod = this[shape.type];
    if(intersectMethod){
        intersectMethod.call(this, shape, quat, position, body, shape);
    }
};

var vector = new Vec3();
var normal = new Vec3();
var intersectPoint = new Vec3();

var a = new Vec3();
var b = new Vec3();
var c = new Vec3();
var d = new Vec3();

var tmpRaycastResult = new RaycastResult();

/**
 * @method intersectBox
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectBox = function(shape, quat, position, body, reportedShape){
    return this.intersectConvex(shape.convexPolyhedronRepresentation, quat, position, body, reportedShape);
};
Ray.prototype[Shape.types.BOX] = Ray.prototype.intersectBox;

/**
 * @method intersectPlane
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectPlane = function(shape, quat, position, body, reportedShape){
    var from = this.from;
    var to = this.to;
    var direction = this._direction;

    // Get plane normal
    var worldNormal = new Vec3(0, 0, 1);
    quat.vmult(worldNormal, worldNormal);

    var len = new Vec3();
    from.vsub(position, len);
    var planeToFrom = len.dot(worldNormal);
    to.vsub(position, len);
    var planeToTo = len.dot(worldNormal);

    if(planeToFrom * planeToTo > 0){
        // "from" and "to" are on the same side of the plane... bail out
        return;
    }

    if(from.distanceTo(to) < planeToFrom){
        return;
    }

    var n_dot_dir = worldNormal.dot(direction);

    if (Math.abs(n_dot_dir) < this.precision) {
        // No intersection
        return;
    }

    var planePointToFrom = new Vec3();
    var dir_scaled_with_t = new Vec3();
    var hitPointWorld = new Vec3();

    from.vsub(position, planePointToFrom);
    var t = -worldNormal.dot(planePointToFrom) / n_dot_dir;
    direction.scale(t, dir_scaled_with_t);
    from.vadd(dir_scaled_with_t, hitPointWorld);

    this.reportIntersection(worldNormal, hitPointWorld, reportedShape, body, -1);
};
Ray.prototype[Shape.types.PLANE] = Ray.prototype.intersectPlane;

/**
 * Get the world AABB of the ray.
 * @method getAABB
 * @param  {AABB} aabb
 */
Ray.prototype.getAABB = function(result){
    var to = this.to;
    var from = this.from;
    result.lowerBound.x = Math.min(to.x, from.x);
    result.lowerBound.y = Math.min(to.y, from.y);
    result.lowerBound.z = Math.min(to.z, from.z);
    result.upperBound.x = Math.max(to.x, from.x);
    result.upperBound.y = Math.max(to.y, from.y);
    result.upperBound.z = Math.max(to.z, from.z);
};

var intersectConvexOptions = {
    faceList: [0]
};
var worldPillarOffset = new Vec3();
var intersectHeightfield_localRay = new Ray();
var intersectHeightfield_index = [];
var intersectHeightfield_minMax = [];

/**
 * @method intersectHeightfield
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectHeightfield = function(shape, quat, position, body, reportedShape){
    var data = shape.data,
        w = shape.elementSize;

    // Convert the ray to local heightfield coordinates
    var localRay = intersectHeightfield_localRay; //new Ray(this.from, this.to);
    localRay.from.copy(this.from);
    localRay.to.copy(this.to);
    Transform.pointToLocalFrame(position, quat, localRay.from, localRay.from);
    Transform.pointToLocalFrame(position, quat, localRay.to, localRay.to);
    localRay._updateDirection();

    // Get the index of the data points to test against
    var index = intersectHeightfield_index;
    var iMinX, iMinY, iMaxX, iMaxY;

    // Set to max
    iMinX = iMinY = 0;
    iMaxX = iMaxY = shape.data.length - 1;

    var aabb = new AABB();
    localRay.getAABB(aabb);

    shape.getIndexOfPosition(aabb.lowerBound.x, aabb.lowerBound.y, index, true);
    iMinX = Math.max(iMinX, index[0]);
    iMinY = Math.max(iMinY, index[1]);
    shape.getIndexOfPosition(aabb.upperBound.x, aabb.upperBound.y, index, true);
    iMaxX = Math.min(iMaxX, index[0] + 1);
    iMaxY = Math.min(iMaxY, index[1] + 1);

    for(var i = iMinX; i < iMaxX; i++){
        for(var j = iMinY; j < iMaxY; j++){

            if(this.result._shouldStop){
                return;
            }

            shape.getAabbAtIndex(i, j, aabb);
            if(!aabb.overlapsRay(localRay)){
                continue;
            }

            // Lower triangle
            shape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
            this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, reportedShape, intersectConvexOptions);

            if(this.result._shouldStop){
                return;
            }

            // Upper triangle
            shape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
            this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, reportedShape, intersectConvexOptions);
        }
    }
};
Ray.prototype[Shape.types.HEIGHTFIELD] = Ray.prototype.intersectHeightfield;

var Ray_intersectSphere_intersectionPoint = new Vec3();
var Ray_intersectSphere_normal = new Vec3();

/**
 * @method intersectSphere
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 */
Ray.prototype.intersectSphere = function(shape, quat, position, body, reportedShape){
    var from = this.from,
        to = this.to,
        r = shape.radius;

    var a = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2) + Math.pow(to.z - from.z, 2);
    var b = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y) + (to.z - from.z) * (from.z - position.z));
    var c = Math.pow(from.x - position.x, 2) + Math.pow(from.y - position.y, 2) + Math.pow(from.z - position.z, 2) - Math.pow(r, 2);

    var delta = Math.pow(b, 2) - 4 * a * c;

    var intersectionPoint = Ray_intersectSphere_intersectionPoint;
    var normal = Ray_intersectSphere_normal;

    if(delta < 0){
        // No intersection
        return;

    } else if(delta === 0){
        // single intersection point
        from.lerp(to, delta, intersectionPoint);

        intersectionPoint.vsub(position, normal);
        normal.normalize();

        this.reportIntersection(normal, intersectionPoint, reportedShape, body, -1);

    } else {
        var d1 = (- b - Math.sqrt(delta)) / (2 * a);
        var d2 = (- b + Math.sqrt(delta)) / (2 * a);

        if(d1 >= 0 && d1 <= 1){
            from.lerp(to, d1, intersectionPoint);
            intersectionPoint.vsub(position, normal);
            normal.normalize();
            this.reportIntersection(normal, intersectionPoint, reportedShape, body, -1);
        }

        if(this.result._shouldStop){
            return;
        }

        if(d2 >= 0 && d2 <= 1){
            from.lerp(to, d2, intersectionPoint);
            intersectionPoint.vsub(position, normal);
            normal.normalize();
            this.reportIntersection(normal, intersectionPoint, reportedShape, body, -1);
        }
    }
};
Ray.prototype[Shape.types.SPHERE] = Ray.prototype.intersectSphere;


var intersectConvex_normal = new Vec3();
var intersectConvex_minDistNormal = new Vec3();
var intersectConvex_minDistIntersect = new Vec3();
var intersectConvex_vector = new Vec3();

/**
 * @method intersectConvex
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 * @param {object} [options]
 * @param {array} [options.faceList]
 */
Ray.prototype.intersectConvex = function intersectConvex(
    shape,
    quat,
    position,
    body,
    reportedShape,
    options
){
    var minDistNormal = intersectConvex_minDistNormal;
    var normal = intersectConvex_normal;
    var vector = intersectConvex_vector;
    var minDistIntersect = intersectConvex_minDistIntersect;
    var faceList = (options && options.faceList) || null;

    // Checking faces
    var faces = shape.faces,
        vertices = shape.vertices,
        normals = shape.faceNormals;
    var direction = this._direction;

    var from = this.from;
    var to = this.to;
    var fromToDistance = from.distanceTo(to);

    var minDist = -1;
    var Nfaces = faceList ? faceList.length : faces.length;
    var result = this.result;

    for (var j = 0; !result._shouldStop && j < Nfaces; j++) {
        var fi = faceList ? faceList[j] : j;

        var face = faces[fi];
        var faceNormal = normals[fi];
        var q = quat;
        var x = position;

        // determine if ray intersects the plane of the face
        // note: this works regardless of the direction of the face normal

        // Get plane point in world coordinates...
        vector.copy(vertices[face[0]]);
        q.vmult(vector,vector);
        vector.vadd(x,vector);

        // ...but make it relative to the ray from. We'll fix this later.
        vector.vsub(from,vector);

        // Get plane normal
        q.vmult(faceNormal,normal);

        // If this dot product is negative, we have something interesting
        var dot = direction.dot(normal);

        // Bail out if ray and plane are parallel
        if ( Math.abs( dot ) < this.precision ){
            continue;
        }

        // calc distance to plane
        var scalar = normal.dot(vector) / dot;

        // if negative distance, then plane is behind ray
        if (scalar < 0){
            continue;
        }

        // if (dot < 0) {

        // Intersection point is from + direction * scalar
        direction.mult(scalar,intersectPoint);
        intersectPoint.vadd(from,intersectPoint);

        // a is the point we compare points b and c with.
        a.copy(vertices[face[0]]);
        q.vmult(a,a);
        x.vadd(a,a);

        for(var i = 1; !result._shouldStop && i < face.length - 1; i++){
            // Transform 3 vertices to world coords
            b.copy(vertices[face[i]]);
            c.copy(vertices[face[i+1]]);
            q.vmult(b,b);
            q.vmult(c,c);
            x.vadd(b,b);
            x.vadd(c,c);

            var distance = intersectPoint.distanceTo(from);

            if(!(pointInTriangle(intersectPoint, a, b, c) || pointInTriangle(intersectPoint, b, a, c)) || distance > fromToDistance){
                continue;
            }

            this.reportIntersection(normal, intersectPoint, reportedShape, body, fi);
        }
        // }
    }
};
Ray.prototype[Shape.types.CONVEXPOLYHEDRON] = Ray.prototype.intersectConvex;

var intersectTrimesh_normal = new Vec3();
var intersectTrimesh_localDirection = new Vec3();
var intersectTrimesh_localFrom = new Vec3();
var intersectTrimesh_localTo = new Vec3();
var intersectTrimesh_worldNormal = new Vec3();
var intersectTrimesh_worldIntersectPoint = new Vec3();
var intersectTrimesh_localAABB = new AABB();
var intersectTrimesh_triangles = [];
var intersectTrimesh_treeTransform = new Transform();

/**
 * @method intersectTrimesh
 * @private
 * @param  {Shape} shape
 * @param  {Quaternion} quat
 * @param  {Vec3} position
 * @param  {Body} body
 * @param {object} [options]
 * @todo Optimize by transforming the world to local space first.
 * @todo Use Octree lookup
 */
Ray.prototype.intersectTrimesh = function intersectTrimesh(
    mesh,
    quat,
    position,
    body,
    reportedShape,
    options
){
    var normal = intersectTrimesh_normal;
    var triangles = intersectTrimesh_triangles;
    var treeTransform = intersectTrimesh_treeTransform;
    var minDistNormal = intersectConvex_minDistNormal;
    var vector = intersectConvex_vector;
    var minDistIntersect = intersectConvex_minDistIntersect;
    var localAABB = intersectTrimesh_localAABB;
    var localDirection = intersectTrimesh_localDirection;
    var localFrom = intersectTrimesh_localFrom;
    var localTo = intersectTrimesh_localTo;
    var worldIntersectPoint = intersectTrimesh_worldIntersectPoint;
    var worldNormal = intersectTrimesh_worldNormal;
    var faceList = (options && options.faceList) || null;

    // Checking faces
    var indices = mesh.indices,
        vertices = mesh.vertices,
        normals = mesh.faceNormals;

    var from = this.from;
    var to = this.to;
    var direction = this._direction;

    var minDist = -1;
    treeTransform.position.copy(position);
    treeTransform.quaternion.copy(quat);

    // Transform ray to local space!
    Transform.vectorToLocalFrame(position, quat, direction, localDirection);
    Transform.pointToLocalFrame(position, quat, from, localFrom);
    Transform.pointToLocalFrame(position, quat, to, localTo);

    localTo.x *= mesh.scale.x;
    localTo.y *= mesh.scale.y;
    localTo.z *= mesh.scale.z;
    localFrom.x *= mesh.scale.x;
    localFrom.y *= mesh.scale.y;
    localFrom.z *= mesh.scale.z;

    localTo.vsub(localFrom, localDirection);
    localDirection.normalize();

    var fromToDistanceSquared = localFrom.distanceSquared(localTo);

    mesh.tree.rayQuery(this, treeTransform, triangles);

    for (var i = 0, N = triangles.length; !this.result._shouldStop && i !== N; i++) {
        var trianglesIndex = triangles[i];

        mesh.getNormal(trianglesIndex, normal);

        // determine if ray intersects the plane of the face
        // note: this works regardless of the direction of the face normal

        // Get plane point in world coordinates...
        mesh.getVertex(indices[trianglesIndex * 3], a);

        // ...but make it relative to the ray from. We'll fix this later.
        a.vsub(localFrom,vector);

        // If this dot product is negative, we have something interesting
        var dot = localDirection.dot(normal);

        // Bail out if ray and plane are parallel
        // if (Math.abs( dot ) < this.precision){
        //     continue;
        // }

        // calc distance to plane
        var scalar = normal.dot(vector) / dot;

        // if negative distance, then plane is behind ray
        if (scalar < 0){
            continue;
        }

        // Intersection point is from + direction * scalar
        localDirection.scale(scalar,intersectPoint);
        intersectPoint.vadd(localFrom,intersectPoint);

        // Get triangle vertices
        mesh.getVertex(indices[trianglesIndex * 3 + 1], b);
        mesh.getVertex(indices[trianglesIndex * 3 + 2], c);

        var squaredDistance = intersectPoint.distanceSquared(localFrom);

        if(!(pointInTriangle(intersectPoint, b, a, c) || pointInTriangle(intersectPoint, a, b, c)) || squaredDistance > fromToDistanceSquared){
            continue;
        }

        // transform intersectpoint and normal to world
        Transform.vectorToWorldFrame(quat, normal, worldNormal);
        Transform.pointToWorldFrame(position, quat, intersectPoint, worldIntersectPoint);
        this.reportIntersection(worldNormal, worldIntersectPoint, reportedShape, body, trianglesIndex);
    }
    triangles.length = 0;
};
Ray.prototype[Shape.types.TRIMESH] = Ray.prototype.intersectTrimesh;


/**
 * @method reportIntersection
 * @private
 * @param  {Vec3} normal
 * @param  {Vec3} hitPointWorld
 * @param  {Shape} shape
 * @param  {Body} body
 * @return {boolean} True if the intersections should continue
 */
Ray.prototype.reportIntersection = function(normal, hitPointWorld, shape, body, hitFaceIndex){
    var from = this.from;
    var to = this.to;
    var distance = from.distanceTo(hitPointWorld);
    var result = this.result;

    // Skip back faces?
    if(this.skipBackfaces && normal.dot(this._direction) > 0){
        return;
    }

    result.hitFaceIndex = typeof(hitFaceIndex) !== 'undefined' ? hitFaceIndex : -1;

    switch(this.mode){
    case Ray.ALL:
        this.hasHit = true;
        result.set(
            from,
            to,
            normal,
            hitPointWorld,
            shape,
            body,
            distance
        );
        result.hasHit = true;
        this.callback(result);
        break;

    case Ray.CLOSEST:

        // Store if closer than current closest
        if(distance < result.distance || !result.hasHit){
            this.hasHit = true;
            result.hasHit = true;
            result.set(
                from,
                to,
                normal,
                hitPointWorld,
                shape,
                body,
                distance
            );
        }
        break;

    case Ray.ANY:

        // Report and stop.
        this.hasHit = true;
        result.hasHit = true;
        result.set(
            from,
            to,
            normal,
            hitPointWorld,
            shape,
            body,
            distance
        );
        result._shouldStop = true;
        break;
    }
};

var v0 = new Vec3(),
    intersect = new Vec3();
function distanceFromIntersection(from, direction, position) {

    // v0 is vector from from to position
    position.vsub(from,v0);
    var dot = v0.dot(direction);

    // intersect = direction*dot + from
    direction.mult(dot,intersect);
    intersect.vadd(from,intersect);

    var distance = position.distanceTo(intersect);

    return distance;
}


},{"../collision/AABB":3,"../collision/RaycastResult":11,"../math/Quaternion":29,"../math/Transform":30,"../math/Vec3":31,"../shapes/Box":38,"../shapes/ConvexPolyhedron":39,"../shapes/Shape":44}],11:[function(_dereq_,module,exports){
var Vec3 = _dereq_('../math/Vec3');

module.exports = RaycastResult;

/**
 * Storage for Ray casting data.
 * @class RaycastResult
 * @constructor
 */
function RaycastResult(){

	/**
	 * @property {Vec3} rayFromWorld
	 */
	this.rayFromWorld = new Vec3();

	/**
	 * @property {Vec3} rayToWorld
	 */
	this.rayToWorld = new Vec3();

	/**
	 * @property {Vec3} hitNormalWorld
	 */
	this.hitNormalWorld = new Vec3();

	/**
	 * @property {Vec3} hitPointWorld
	 */
	this.hitPointWorld = new Vec3();

	/**
	 * @property {boolean} hasHit
	 */
	this.hasHit = false;

	/**
	 * The hit shape, or null.
	 * @property {Shape} shape
	 */
	this.shape = null;

	/**
	 * The hit body, or null.
	 * @property {Body} body
	 */
	this.body = null;

	/**
	 * The index of the hit triangle, if the hit shape was a trimesh.
	 * @property {number} hitFaceIndex
	 * @default -1
	 */
	this.hitFaceIndex = -1;

	/**
	 * Distance to the hit. Will be set to -1 if there was no hit.
	 * @property {number} distance
	 * @default -1
	 */
	this.distance = -1;

	/**
	 * If the ray should stop traversing the bodies.
	 * @private
	 * @property {Boolean} _shouldStop
	 * @default false
	 */
	this._shouldStop = false;
}

/**
 * Reset all result data.
 * @method reset
 */
RaycastResult.prototype.reset = function () {
	this.rayFromWorld.setZero();
	this.rayToWorld.setZero();
	this.hitNormalWorld.setZero();
	this.hitPointWorld.setZero();
	this.hasHit = false;
	this.shape = null;
	this.body = null;
	this.hitFaceIndex = -1;
	this.distance = -1;
	this._shouldStop = false;
};

/**
 * @method abort
 */
RaycastResult.prototype.abort = function(){
	this._shouldStop = true;
};

/**
 * @method set
 * @param {Vec3} rayFromWorld
 * @param {Vec3} rayToWorld
 * @param {Vec3} hitNormalWorld
 * @param {Vec3} hitPointWorld
 * @param {Shape} shape
 * @param {Body} body
 * @param {number} distance
 */
RaycastResult.prototype.set = function(
	rayFromWorld,
	rayToWorld,
	hitNormalWorld,
	hitPointWorld,
	shape,
	body,
	distance
){
	this.rayFromWorld.copy(rayFromWorld);
	this.rayToWorld.copy(rayToWorld);
	this.hitNormalWorld.copy(hitNormalWorld);
	this.hitPointWorld.copy(hitPointWorld);
	this.shape = shape;
	this.body = body;
	this.distance = distance;
};
},{"../math/Vec3":31}],12:[function(_dereq_,module,exports){
var Shape = _dereq_('../shapes/Shape');
var Broadphase = _dereq_('../collision/Broadphase');

module.exports = SAPBroadphase;

/**
 * Sweep and prune broadphase along one axis.
 *
 * @class SAPBroadphase
 * @constructor
 * @param {World} [world]
 * @extends Broadphase
 */
function SAPBroadphase(world){
    Broadphase.apply(this);

    /**
     * List of bodies currently in the broadphase.
     * @property axisList
     * @type {Array}
     */
    this.axisList = [];

    /**
     * The world to search in.
     * @property world
     * @type {World}
     */
    this.world = null;

    /**
     * Axis to sort the bodies along. Set to 0 for x axis, and 1 for y axis. For best performance, choose an axis that the bodies are spread out more on.
     * @property axisIndex
     * @type {Number}
     */
    this.axisIndex = 0;

    var axisList = this.axisList;

    this._addBodyHandler = function(e){
        axisList.push(e.body);
    };

    this._removeBodyHandler = function(e){
        var idx = axisList.indexOf(e.body);
        if(idx !== -1){
            axisList.splice(idx,1);
        }
    };

    if(world){
        this.setWorld(world);
    }
}
SAPBroadphase.prototype = new Broadphase();

/**
 * Change the world
 * @method setWorld
 * @param  {World} world
 */
SAPBroadphase.prototype.setWorld = function(world){
    // Clear the old axis array
    this.axisList.length = 0;

    // Add all bodies from the new world
    for(var i=0; i<world.bodies.length; i++){
        this.axisList.push(world.bodies[i]);
    }

    // Remove old handlers, if any
    world.removeEventListener("addBody", this._addBodyHandler);
    world.removeEventListener("removeBody", this._removeBodyHandler);

    // Add handlers to update the list of bodies.
    world.addEventListener("addBody", this._addBodyHandler);
    world.addEventListener("removeBody", this._removeBodyHandler);

    this.world = world;
    this.dirty = true;
};

/**
 * @static
 * @method insertionSortX
 * @param  {Array} a
 * @return {Array}
 */
SAPBroadphase.insertionSortX = function(a) {
    for(var i=1,l=a.length;i<l;i++) {
        var v = a[i];
        for(var j=i - 1;j>=0;j--) {
            if(a[j].aabb.lowerBound.x <= v.aabb.lowerBound.x){
                break;
            }
            a[j+1] = a[j];
        }
        a[j+1] = v;
    }
    return a;
};

/**
 * @static
 * @method insertionSortY
 * @param  {Array} a
 * @return {Array}
 */
SAPBroadphase.insertionSortY = function(a) {
    for(var i=1,l=a.length;i<l;i++) {
        var v = a[i];
        for(var j=i - 1;j>=0;j--) {
            if(a[j].aabb.lowerBound.y <= v.aabb.lowerBound.y){
                break;
            }
            a[j+1] = a[j];
        }
        a[j+1] = v;
    }
    return a;
};

/**
 * @static
 * @method insertionSortZ
 * @param  {Array} a
 * @return {Array}
 */
SAPBroadphase.insertionSortZ = function(a) {
    for(var i=1,l=a.length;i<l;i++) {
        var v = a[i];
        for(var j=i - 1;j>=0;j--) {
            if(a[j].aabb.lowerBound.z <= v.aabb.lowerBound.z){
                break;
            }
            a[j+1] = a[j];
        }
        a[j+1] = v;
    }
    return a;
};

/**
 * Collect all collision pairs
 * @method collisionPairs
 * @param  {World} world
 * @param  {Array} p1
 * @param  {Array} p2
 */
SAPBroadphase.prototype.collisionPairs = function(world,p1,p2){
    var bodies = this.axisList,
        N = bodies.length,
        axisIndex = this.axisIndex,
        i, j;

    if(this.dirty){
        this.sortList();
        this.dirty = false;
    }

    // Look through the list
    for(i=0; i !== N; i++){
        var bi = bodies[i];

        for(j=i+1; j < N; j++){
            var bj = bodies[j];

            if(!this.needBroadphaseCollision(bi,bj)){
                continue;
            }

            if(!SAPBroadphase.checkBounds(bi,bj,axisIndex)){
                break;
            }

            this.intersectionTest(bi,bj,p1,p2);
        }
    }
};

SAPBroadphase.prototype.sortList = function(){
    var axisList = this.axisList;
    var axisIndex = this.axisIndex;
    var N = axisList.length;

    // Update AABBs
    for(var i = 0; i!==N; i++){
        var bi = axisList[i];
        if(bi.aabbNeedsUpdate){
            bi.computeAABB();
        }
    }

    // Sort the list
    if(axisIndex === 0){
        SAPBroadphase.insertionSortX(axisList);
    } else if(axisIndex === 1){
        SAPBroadphase.insertionSortY(axisList);
    } else if(axisIndex === 2){
        SAPBroadphase.insertionSortZ(axisList);
    }
};

/**
 * Check if the bounds of two bodies overlap, along the given SAP axis.
 * @static
 * @method checkBounds
 * @param  {Body} bi
 * @param  {Body} bj
 * @param  {Number} axisIndex
 * @return {Boolean}
 */
SAPBroadphase.checkBounds = function(bi, bj, axisIndex){
    var biPos;
    var bjPos;

    if(axisIndex === 0){
        biPos = bi.position.x;
        bjPos = bj.position.x;
    } else if(axisIndex === 1){
        biPos = bi.position.y;
        bjPos = bj.position.y;
    } else if(axisIndex === 2){
        biPos = bi.position.z;
        bjPos = bj.position.z;
    }

    var ri = bi.boundingRadius,
        rj = bj.boundingRadius,
        boundA1 = biPos - ri,
        boundA2 = biPos + ri,
        boundB1 = bjPos - rj,
        boundB2 = bjPos + rj;

    return boundB1 < boundA2;
};

/**
 * Computes the variance of the body positions and estimates the best
 * axis to use. Will automatically set property .axisIndex.
 * @method autoDetectAxis
 */
SAPBroadphase.prototype.autoDetectAxis = function(){
    var sumX=0,
        sumX2=0,
        sumY=0,
        sumY2=0,
        sumZ=0,
        sumZ2=0,
        bodies = this.axisList,
        N = bodies.length,
        invN=1/N;

    for(var i=0; i!==N; i++){
        var b = bodies[i];

        var centerX = b.position.x;
        sumX += centerX;
        sumX2 += centerX*centerX;

        var centerY = b.position.y;
        sumY += centerY;
        sumY2 += centerY*centerY;

        var centerZ = b.position.z;
        sumZ += centerZ;
        sumZ2 += centerZ*centerZ;
    }

    var varianceX = sumX2 - sumX*sumX*invN,
        varianceY = sumY2 - sumY*sumY*invN,
        varianceZ = sumZ2 - sumZ*sumZ*invN;

    if(varianceX > varianceY){
        if(varianceX > varianceZ){
            this.axisIndex = 0;
        } else{
            this.axisIndex = 2;
        }
    } else if(varianceY > varianceZ){
        this.axisIndex = 1;
    } else{
        this.axisIndex = 2;
    }
};

/**
 * Returns all the bodies within an AABB.
 * @method aabbQuery
 * @param  {World} world
 * @param  {AABB} aabb
 * @param {array} result An array to store resulting bodies in.
 * @return {array}
 */
SAPBroadphase.prototype.aabbQuery = function(world, aabb, result){
    result = result || [];

    if(this.dirty){
        this.sortList();
        this.dirty = false;
    }

    var axisIndex = this.axisIndex, axis = 'x';
    if(axisIndex === 1){ axis = 'y'; }
    if(axisIndex === 2){ axis = 'z'; }

    var axisList = this.axisList;
    var lower = aabb.lowerBound[axis];
    var upper = aabb.upperBound[axis];
    for(var i = 0; i < axisList.length; i++){
        var b = axisList[i];

        if(b.aabbNeedsUpdate){
            b.computeAABB();
        }

        if(b.aabb.overlaps(aabb)){
            result.push(b);
        }
    }

    return result;
};
},{"../collision/Broadphase":5,"../shapes/Shape":44}],13:[function(_dereq_,module,exports){
module.exports = ConeTwistConstraint;

var Constraint = _dereq_('./Constraint');
var PointToPointConstraint = _dereq_('./PointToPointConstraint');
var ConeEquation = _dereq_('../equations/ConeEquation');
var RotationalEquation = _dereq_('../equations/RotationalEquation');
var ContactEquation = _dereq_('../equations/ContactEquation');
var Vec3 = _dereq_('../math/Vec3');

/**
 * @class ConeTwistConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Vec3} [options.pivotA]
 * @param {Vec3} [options.pivotB]
 * @param {Vec3} [options.axisA]
 * @param {Vec3} [options.axisB]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
function ConeTwistConstraint(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    // Set pivot point in between
    var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
    var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
    this.axisA = options.axisA ? options.axisA.clone() : new Vec3();
    this.axisB = options.axisB ? options.axisB.clone() : new Vec3();

    PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

    this.collideConnected = !!options.collideConnected;

    this.angle = typeof(options.angle) !== 'undefined' ? options.angle : 0;

    /**
     * @property {ConeEquation} coneEquation
     */
    var c = this.coneEquation = new ConeEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} twistEquation
     */
    var t = this.twistEquation = new RotationalEquation(bodyA,bodyB,options);
    this.twistAngle = typeof(options.twistAngle) !== 'undefined' ? options.twistAngle : 0;

    // Make the cone equation push the bodies toward the cone axis, not outward
    c.maxForce = 0;
    c.minForce = -maxForce;

    // Make the twist equation add torque toward the initial position
    t.maxForce = 0;
    t.minForce = -maxForce;

    this.equations.push(c, t);
}
ConeTwistConstraint.prototype = new PointToPointConstraint();
ConeTwistConstraint.constructor = ConeTwistConstraint;

var ConeTwistConstraint_update_tmpVec1 = new Vec3();
var ConeTwistConstraint_update_tmpVec2 = new Vec3();

ConeTwistConstraint.prototype.update = function(){
    var bodyA = this.bodyA,
        bodyB = this.bodyB,
        cone = this.coneEquation,
        twist = this.twistEquation;

    PointToPointConstraint.prototype.update.call(this);

    // Update the axes to the cone constraint
    bodyA.vectorToWorldFrame(this.axisA, cone.axisA);
    bodyB.vectorToWorldFrame(this.axisB, cone.axisB);

    // Update the world axes in the twist constraint
    this.axisA.tangents(twist.axisA, twist.axisA);
    bodyA.vectorToWorldFrame(twist.axisA, twist.axisA);

    this.axisB.tangents(twist.axisB, twist.axisB);
    bodyB.vectorToWorldFrame(twist.axisB, twist.axisB);

    cone.angle = this.angle;
    twist.maxAngle = this.twistAngle;
};


},{"../equations/ConeEquation":19,"../equations/ContactEquation":20,"../equations/RotationalEquation":23,"../math/Vec3":31,"./Constraint":14,"./PointToPointConstraint":18}],14:[function(_dereq_,module,exports){
module.exports = Constraint;

var Utils = _dereq_('../utils/Utils');

/**
 * Constraint base class
 * @class Constraint
 * @author schteppe
 * @constructor
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {boolean} [options.collideConnected=true]
 * @param {boolean} [options.wakeUpBodies=true]
 */
function Constraint(bodyA, bodyB, options){
    options = Utils.defaults(options,{
        collideConnected : true,
        wakeUpBodies : true,
    });

    /**
     * Equations to be solved in this constraint
     * @property equations
     * @type {Array}
     */
    this.equations = [];

    /**
     * @property {Body} bodyA
     */
    this.bodyA = bodyA;

    /**
     * @property {Body} bodyB
     */
    this.bodyB = bodyB;

    /**
     * @property {Number} id
     */
    this.id = Constraint.idCounter++;

    /**
     * Set to true if you want the bodies to collide when they are connected.
     * @property collideConnected
     * @type {boolean}
     */
    this.collideConnected = options.collideConnected;

    if(options.wakeUpBodies){
        if(bodyA){
            bodyA.wakeUp();
        }
        if(bodyB){
            bodyB.wakeUp();
        }
    }
}

/**
 * Update all the equations with data.
 * @method update
 */
Constraint.prototype.update = function(){
    throw new Error("method update() not implmemented in this Constraint subclass!");
};

/**
 * Enables all equations in the constraint.
 * @method enable
 */
Constraint.prototype.enable = function(){
    var eqs = this.equations;
    for(var i=0; i<eqs.length; i++){
        eqs[i].enabled = true;
    }
};

/**
 * Disables all equations in the constraint.
 * @method disable
 */
Constraint.prototype.disable = function(){
    var eqs = this.equations;
    for(var i=0; i<eqs.length; i++){
        eqs[i].enabled = false;
    }
};

Constraint.idCounter = 0;

},{"../utils/Utils":54}],15:[function(_dereq_,module,exports){
module.exports = DistanceConstraint;

var Constraint = _dereq_('./Constraint');
var ContactEquation = _dereq_('../equations/ContactEquation');

/**
 * Constrains two bodies to be at a constant distance from each others center of mass.
 * @class DistanceConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} [distance] The distance to keep. If undefined, it will be set to the current distance between bodyA and bodyB
 * @param {Number} [maxForce=1e6]
 * @extends Constraint
 */
function DistanceConstraint(bodyA,bodyB,distance,maxForce){
    Constraint.call(this,bodyA,bodyB);

    if(typeof(distance)==="undefined") {
        distance = bodyA.position.distanceTo(bodyB.position);
    }

    if(typeof(maxForce)==="undefined") {
        maxForce = 1e6;
    }

    /**
     * @property {number} distance
     */
    this.distance = distance;

    /**
     * @property {ContactEquation} distanceEquation
     */
    var eq = this.distanceEquation = new ContactEquation(bodyA, bodyB);
    this.equations.push(eq);

    // Make it bidirectional
    eq.minForce = -maxForce;
    eq.maxForce =  maxForce;
}
DistanceConstraint.prototype = new Constraint();

DistanceConstraint.prototype.update = function(){
    var bodyA = this.bodyA;
    var bodyB = this.bodyB;
    var eq = this.distanceEquation;
    var halfDist = this.distance * 0.5;
    var normal = eq.ni;

    bodyB.position.vsub(bodyA.position, normal);
    normal.normalize();
    normal.mult(halfDist, eq.ri);
    normal.mult(-halfDist, eq.rj);
};
},{"../equations/ContactEquation":20,"./Constraint":14}],16:[function(_dereq_,module,exports){
module.exports = HingeConstraint;

var Constraint = _dereq_('./Constraint');
var PointToPointConstraint = _dereq_('./PointToPointConstraint');
var RotationalEquation = _dereq_('../equations/RotationalEquation');
var RotationalMotorEquation = _dereq_('../equations/RotationalMotorEquation');
var ContactEquation = _dereq_('../equations/ContactEquation');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Hinge constraint. Think of it as a door hinge. It tries to keep the door in the correct place and with the correct orientation.
 * @class HingeConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Vec3} [options.pivotA] A point defined locally in bodyA. This defines the offset of axisA.
 * @param {Vec3} [options.axisA] An axis that bodyA can rotate around, defined locally in bodyA.
 * @param {Vec3} [options.pivotB]
 * @param {Vec3} [options.axisB]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
function HingeConstraint(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;
    var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
    var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();

    PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

    /**
     * Rotation axis, defined locally in bodyA.
     * @property {Vec3} axisA
     */
    var axisA = this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1,0,0);
    axisA.normalize();

    /**
     * Rotation axis, defined locally in bodyB.
     * @property {Vec3} axisB
     */
    var axisB = this.axisB = options.axisB ? options.axisB.clone() : new Vec3(1,0,0);
    axisB.normalize();

    /**
     * @property {RotationalEquation} rotationalEquation1
     */
    var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} rotationalEquation2
     */
    var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalMotorEquation} motorEquation
     */
    var motor = this.motorEquation = new RotationalMotorEquation(bodyA,bodyB,maxForce);
    motor.enabled = false; // Not enabled by default

    // Equations to be fed to the solver
    this.equations.push(
        r1, // rotational1
        r2, // rotational2
        motor
    );
}
HingeConstraint.prototype = new PointToPointConstraint();
HingeConstraint.constructor = HingeConstraint;

/**
 * @method enableMotor
 */
HingeConstraint.prototype.enableMotor = function(){
    this.motorEquation.enabled = true;
};

/**
 * @method disableMotor
 */
HingeConstraint.prototype.disableMotor = function(){
    this.motorEquation.enabled = false;
};

/**
 * @method setMotorSpeed
 * @param {number} speed
 */
HingeConstraint.prototype.setMotorSpeed = function(speed){
    this.motorEquation.targetVelocity = speed;
};

/**
 * @method setMotorMaxForce
 * @param {number} maxForce
 */
HingeConstraint.prototype.setMotorMaxForce = function(maxForce){
    this.motorEquation.maxForce = maxForce;
    this.motorEquation.minForce = -maxForce;
};

var HingeConstraint_update_tmpVec1 = new Vec3();
var HingeConstraint_update_tmpVec2 = new Vec3();

HingeConstraint.prototype.update = function(){
    var bodyA = this.bodyA,
        bodyB = this.bodyB,
        motor = this.motorEquation,
        r1 = this.rotationalEquation1,
        r2 = this.rotationalEquation2,
        worldAxisA = HingeConstraint_update_tmpVec1,
        worldAxisB = HingeConstraint_update_tmpVec2;

    var axisA = this.axisA;
    var axisB = this.axisB;

    PointToPointConstraint.prototype.update.call(this);

    // Get world axes
    bodyA.quaternion.vmult(axisA, worldAxisA);
    bodyB.quaternion.vmult(axisB, worldAxisB);

    worldAxisA.tangents(r1.axisA, r2.axisA);
    r1.axisB.copy(worldAxisB);
    r2.axisB.copy(worldAxisB);

    if(this.motorEquation.enabled){
        bodyA.quaternion.vmult(this.axisA, motor.axisA);
        bodyB.quaternion.vmult(this.axisB, motor.axisB);
    }
};


},{"../equations/ContactEquation":20,"../equations/RotationalEquation":23,"../equations/RotationalMotorEquation":24,"../math/Vec3":31,"./Constraint":14,"./PointToPointConstraint":18}],17:[function(_dereq_,module,exports){
module.exports = LockConstraint;

var Constraint = _dereq_('./Constraint');
var PointToPointConstraint = _dereq_('./PointToPointConstraint');
var RotationalEquation = _dereq_('../equations/RotationalEquation');
var RotationalMotorEquation = _dereq_('../equations/RotationalMotorEquation');
var ContactEquation = _dereq_('../equations/ContactEquation');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Lock constraint. Will remove all degrees of freedom between the bodies.
 * @class LockConstraint
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {object} [options]
 * @param {Number} [options.maxForce=1e6]
 * @extends PointToPointConstraint
 */
function LockConstraint(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    // Set pivot point in between
    var pivotA = new Vec3();
    var pivotB = new Vec3();
    var halfWay = new Vec3();
    bodyA.position.vadd(bodyB.position, halfWay);
    halfWay.scale(0.5, halfWay);
    bodyB.pointToLocalFrame(halfWay, pivotB);
    bodyA.pointToLocalFrame(halfWay, pivotA);

    // The point-to-point constraint will keep a point shared between the bodies
    PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

    // Store initial rotation of the bodies as unit vectors in the local body spaces
    this.xA = bodyA.vectorToLocalFrame(Vec3.UNIT_X);
    this.xB = bodyB.vectorToLocalFrame(Vec3.UNIT_X);
    this.yA = bodyA.vectorToLocalFrame(Vec3.UNIT_Y);
    this.yB = bodyB.vectorToLocalFrame(Vec3.UNIT_Y);
    this.zA = bodyA.vectorToLocalFrame(Vec3.UNIT_Z);
    this.zB = bodyB.vectorToLocalFrame(Vec3.UNIT_Z);

    // ...and the following rotational equations will keep all rotational DOF's in place

    /**
     * @property {RotationalEquation} rotationalEquation1
     */
    var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} rotationalEquation2
     */
    var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA,bodyB,options);

    /**
     * @property {RotationalEquation} rotationalEquation3
     */
    var r3 = this.rotationalEquation3 = new RotationalEquation(bodyA,bodyB,options);

    this.equations.push(r1, r2, r3);
}
LockConstraint.prototype = new PointToPointConstraint();
LockConstraint.constructor = LockConstraint;

var LockConstraint_update_tmpVec1 = new Vec3();
var LockConstraint_update_tmpVec2 = new Vec3();

LockConstraint.prototype.update = function(){
    var bodyA = this.bodyA,
        bodyB = this.bodyB,
        motor = this.motorEquation,
        r1 = this.rotationalEquation1,
        r2 = this.rotationalEquation2,
        r3 = this.rotationalEquation3,
        worldAxisA = LockConstraint_update_tmpVec1,
        worldAxisB = LockConstraint_update_tmpVec2;

    PointToPointConstraint.prototype.update.call(this);

    // These vector pairs must be orthogonal
    bodyA.vectorToWorldFrame(this.xA, r1.axisA);
    bodyB.vectorToWorldFrame(this.yB, r1.axisB);

    bodyA.vectorToWorldFrame(this.yA, r2.axisA);
    bodyB.vectorToWorldFrame(this.zB, r2.axisB);

    bodyA.vectorToWorldFrame(this.zA, r3.axisA);
    bodyB.vectorToWorldFrame(this.xB, r3.axisB);
};


},{"../equations/ContactEquation":20,"../equations/RotationalEquation":23,"../equations/RotationalMotorEquation":24,"../math/Vec3":31,"./Constraint":14,"./PointToPointConstraint":18}],18:[function(_dereq_,module,exports){
module.exports = PointToPointConstraint;

var Constraint = _dereq_('./Constraint');
var ContactEquation = _dereq_('../equations/ContactEquation');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Connects two bodies at given offset points.
 * @class PointToPointConstraint
 * @extends Constraint
 * @constructor
 * @param {Body} bodyA
 * @param {Vec3} pivotA The point relative to the center of mass of bodyA which bodyA is constrained to.
 * @param {Body} bodyB Body that will be constrained in a similar way to the same point as bodyA. We will therefore get a link between bodyA and bodyB. If not specified, bodyA will be constrained to a static point.
 * @param {Vec3} pivotB See pivotA.
 * @param {Number} maxForce The maximum force that should be applied to constrain the bodies.
 *
 * @example
 *     var bodyA = new Body({ mass: 1 });
 *     var bodyB = new Body({ mass: 1 });
 *     bodyA.position.set(-1, 0, 0);
 *     bodyB.position.set(1, 0, 0);
 *     bodyA.addShape(shapeA);
 *     bodyB.addShape(shapeB);
 *     world.addBody(bodyA);
 *     world.addBody(bodyB);
 *     var localPivotA = new Vec3(1, 0, 0);
 *     var localPivotB = new Vec3(-1, 0, 0);
 *     var constraint = new PointToPointConstraint(bodyA, localPivotA, bodyB, localPivotB);
 *     world.addConstraint(constraint);
 */
function PointToPointConstraint(bodyA,pivotA,bodyB,pivotB,maxForce){
    Constraint.call(this,bodyA,bodyB);

    maxForce = typeof(maxForce) !== 'undefined' ? maxForce : 1e6;

    /**
     * Pivot, defined locally in bodyA.
     * @property {Vec3} pivotA
     */
    this.pivotA = pivotA ? pivotA.clone() : new Vec3();

    /**
     * Pivot, defined locally in bodyB.
     * @property {Vec3} pivotB
     */
    this.pivotB = pivotB ? pivotB.clone() : new Vec3();

    /**
     * @property {ContactEquation} equationX
     */
    var x = this.equationX = new ContactEquation(bodyA,bodyB);

    /**
     * @property {ContactEquation} equationY
     */
    var y = this.equationY = new ContactEquation(bodyA,bodyB);

    /**
     * @property {ContactEquation} equationZ
     */
    var z = this.equationZ = new ContactEquation(bodyA,bodyB);

    // Equations to be fed to the solver
    this.equations.push(x, y, z);

    // Make the equations bidirectional
    x.minForce = y.minForce = z.minForce = -maxForce;
    x.maxForce = y.maxForce = z.maxForce =  maxForce;

    x.ni.set(1, 0, 0);
    y.ni.set(0, 1, 0);
    z.ni.set(0, 0, 1);
}
PointToPointConstraint.prototype = new Constraint();

PointToPointConstraint.prototype.update = function(){
    var bodyA = this.bodyA;
    var bodyB = this.bodyB;
    var x = this.equationX;
    var y = this.equationY;
    var z = this.equationZ;

    // Rotate the pivots to world space
    bodyA.quaternion.vmult(this.pivotA,x.ri);
    bodyB.quaternion.vmult(this.pivotB,x.rj);

    y.ri.copy(x.ri);
    y.rj.copy(x.rj);
    z.ri.copy(x.ri);
    z.rj.copy(x.rj);
};
},{"../equations/ContactEquation":20,"../math/Vec3":31,"./Constraint":14}],19:[function(_dereq_,module,exports){
module.exports = ConeEquation;

var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');
var Equation = _dereq_('./Equation');

/**
 * Cone equation. Works to keep the given body world vectors aligned, or tilted within a given angle from each other.
 * @class ConeEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Vec3} [options.axisA] Local axis in A
 * @param {Vec3} [options.axisB] Local axis in B
 * @param {Vec3} [options.angle] The "cone angle" to keep
 * @param {number} [options.maxForce=1e6]
 * @extends Equation
 */
function ConeEquation(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    Equation.call(this,bodyA,bodyB,-maxForce, maxForce);

    this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
    this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);

    /**
     * The cone angle to keep
     * @property {number} angle
     */
    this.angle = typeof(options.angle) !== 'undefined' ? options.angle : 0;
}

ConeEquation.prototype = new Equation();
ConeEquation.prototype.constructor = ConeEquation;

var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();

ConeEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,

        ni = this.axisA,
        nj = this.axisB,

        nixnj = tmpVec1,
        njxni = tmpVec2,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB;

    // Caluclate cross products
    ni.cross(nj, nixnj);
    nj.cross(ni, njxni);

    // The angle between two vector is:
    // cos(theta) = a * b / (length(a) * length(b) = { len(a) = len(b) = 1 } = a * b

    // g = a * b
    // gdot = (b x a) * wi + (a x b) * wj
    // G = [0 bxa 0 axb]
    // W = [vi wi vj wj]
    GA.rotational.copy(njxni);
    GB.rotational.copy(nixnj);

    var g = Math.cos(this.angle) - ni.dot(nj),
        GW = this.computeGW(),
        GiMf = this.computeGiMf();

    var B = - g * a - GW * b - h * GiMf;

    return B;
};


},{"../math/Mat3":28,"../math/Vec3":31,"./Equation":21}],20:[function(_dereq_,module,exports){
module.exports = ContactEquation;

var Equation = _dereq_('./Equation');
var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');

/**
 * Contact/non-penetration constraint equation
 * @class ContactEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @extends Equation
 */
function ContactEquation(bodyA, bodyB, maxForce){
    maxForce = typeof(maxForce) !== 'undefined' ? maxForce : 1e6;
    Equation.call(this, bodyA, bodyB, 0, maxForce);

    /**
     * @property restitution
     * @type {Number}
     */
    this.restitution = 0.0; // "bounciness": u1 = -e*u0

    /**
     * World-oriented vector that goes from the center of bi to the contact point.
     * @property {Vec3} ri
     */
    this.ri = new Vec3();

    /**
     * World-oriented vector that starts in body j position and goes to the contact point.
     * @property {Vec3} rj
     */
    this.rj = new Vec3();

    /**
     * Contact normal, pointing out of body i.
     * @property {Vec3} ni
     */
    this.ni = new Vec3();
}

ContactEquation.prototype = new Equation();
ContactEquation.prototype.constructor = ContactEquation;

var ContactEquation_computeB_temp1 = new Vec3(); // Temp vectors
var ContactEquation_computeB_temp2 = new Vec3();
var ContactEquation_computeB_temp3 = new Vec3();
ContactEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,
        bi = this.bi,
        bj = this.bj,
        ri = this.ri,
        rj = this.rj,
        rixn = ContactEquation_computeB_temp1,
        rjxn = ContactEquation_computeB_temp2,

        vi = bi.velocity,
        wi = bi.angularVelocity,
        fi = bi.force,
        taui = bi.torque,

        vj = bj.velocity,
        wj = bj.angularVelocity,
        fj = bj.force,
        tauj = bj.torque,

        penetrationVec = ContactEquation_computeB_temp3,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB,

        n = this.ni;

    // Caluclate cross products
    ri.cross(n,rixn);
    rj.cross(n,rjxn);

    // g = xj+rj -(xi+ri)
    // G = [ -ni  -rixn  ni  rjxn ]
    n.negate(GA.spatial);
    rixn.negate(GA.rotational);
    GB.spatial.copy(n);
    GB.rotational.copy(rjxn);

    // Calculate the penetration vector
    penetrationVec.copy(bj.position);
    penetrationVec.vadd(rj,penetrationVec);
    penetrationVec.vsub(bi.position,penetrationVec);
    penetrationVec.vsub(ri,penetrationVec);

    var g = n.dot(penetrationVec);

    // Compute iteration
    var ePlusOne = this.restitution + 1;
    var GW = ePlusOne * vj.dot(n) - ePlusOne * vi.dot(n) + wj.dot(rjxn) - wi.dot(rixn);
    var GiMf = this.computeGiMf();

    var B = - g * a - GW * b - h*GiMf;

    return B;
};

var ContactEquation_getImpactVelocityAlongNormal_vi = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_vj = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_xi = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_xj = new Vec3();
var ContactEquation_getImpactVelocityAlongNormal_relVel = new Vec3();

/**
 * Get the current relative velocity in the contact point.
 * @method getImpactVelocityAlongNormal
 * @return {number}
 */
ContactEquation.prototype.getImpactVelocityAlongNormal = function(){
    var vi = ContactEquation_getImpactVelocityAlongNormal_vi;
    var vj = ContactEquation_getImpactVelocityAlongNormal_vj;
    var xi = ContactEquation_getImpactVelocityAlongNormal_xi;
    var xj = ContactEquation_getImpactVelocityAlongNormal_xj;
    var relVel = ContactEquation_getImpactVelocityAlongNormal_relVel;

    this.bi.position.vadd(this.ri, xi);
    this.bj.position.vadd(this.rj, xj);

    this.bi.getVelocityAtWorldPoint(xi, vi);
    this.bj.getVelocityAtWorldPoint(xj, vj);

    vi.vsub(vj, relVel);

    return this.ni.dot(relVel);
};


},{"../math/Mat3":28,"../math/Vec3":31,"./Equation":21}],21:[function(_dereq_,module,exports){
module.exports = Equation;

var JacobianElement = _dereq_('../math/JacobianElement'),
    Vec3 = _dereq_('../math/Vec3');

/**
 * Equation base class
 * @class Equation
 * @constructor
 * @author schteppe
 * @param {Body} bi
 * @param {Body} bj
 * @param {Number} minForce Minimum (read: negative max) force to be applied by the constraint.
 * @param {Number} maxForce Maximum (read: positive max) force to be applied by the constraint.
 */
function Equation(bi,bj,minForce,maxForce){
    this.id = Equation.id++;

    /**
     * @property {number} minForce
     */
    this.minForce = typeof(minForce)==="undefined" ? -1e6 : minForce;

    /**
     * @property {number} maxForce
     */
    this.maxForce = typeof(maxForce)==="undefined" ? 1e6 : maxForce;

    /**
     * @property bi
     * @type {Body}
     */
    this.bi = bi;

    /**
     * @property bj
     * @type {Body}
     */
    this.bj = bj;

    /**
     * SPOOK parameter
     * @property {number} a
     */
    this.a = 0.0;

    /**
     * SPOOK parameter
     * @property {number} b
     */
    this.b = 0.0;

    /**
     * SPOOK parameter
     * @property {number} eps
     */
    this.eps = 0.0;

    /**
     * @property {JacobianElement} jacobianElementA
     */
    this.jacobianElementA = new JacobianElement();

    /**
     * @property {JacobianElement} jacobianElementB
     */
    this.jacobianElementB = new JacobianElement();

    /**
     * @property {boolean} enabled
     * @default true
     */
    this.enabled = true;

    /**
     * A number, proportional to the force added to the bodies.
     * @property {number} multiplier
     * @readonly
     */
    this.multiplier = 0;

    // Set typical spook params
    this.setSpookParams(1e7,4,1/60);
}
Equation.prototype.constructor = Equation;

Equation.id = 0;

/**
 * Recalculates a,b,eps.
 * @method setSpookParams
 */
Equation.prototype.setSpookParams = function(stiffness,relaxation,timeStep){
    var d = relaxation,
        k = stiffness,
        h = timeStep;
    this.a = 4.0 / (h * (1 + 4 * d));
    this.b = (4.0 * d) / (1 + 4 * d);
    this.eps = 4.0 / (h * h * k * (1 + 4 * d));
};

/**
 * Computes the RHS of the SPOOK equation
 * @method computeB
 * @return {Number}
 */
Equation.prototype.computeB = function(a,b,h){
    var GW = this.computeGW(),
        Gq = this.computeGq(),
        GiMf = this.computeGiMf();
    return - Gq * a - GW * b - GiMf*h;
};

/**
 * Computes G*q, where q are the generalized body coordinates
 * @method computeGq
 * @return {Number}
 */
Equation.prototype.computeGq = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        xi = bi.position,
        xj = bj.position;
    return GA.spatial.dot(xi) + GB.spatial.dot(xj);
};

var zero = new Vec3();

/**
 * Computes G*W, where W are the body velocities
 * @method computeGW
 * @return {Number}
 */
Equation.prototype.computeGW = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        vi = bi.velocity,
        vj = bj.velocity,
        wi = bi.angularVelocity,
        wj = bj.angularVelocity;
    return GA.multiplyVectors(vi,wi) + GB.multiplyVectors(vj,wj);
};


/**
 * Computes G*Wlambda, where W are the body velocities
 * @method computeGWlambda
 * @return {Number}
 */
Equation.prototype.computeGWlambda = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        vi = bi.vlambda,
        vj = bj.vlambda,
        wi = bi.wlambda,
        wj = bj.wlambda;
    return GA.multiplyVectors(vi,wi) + GB.multiplyVectors(vj,wj);
};

/**
 * Computes G*inv(M)*f, where M is the mass matrix with diagonal blocks for each body, and f are the forces on the bodies.
 * @method computeGiMf
 * @return {Number}
 */
var iMfi = new Vec3(),
    iMfj = new Vec3(),
    invIi_vmult_taui = new Vec3(),
    invIj_vmult_tauj = new Vec3();
Equation.prototype.computeGiMf = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        fi = bi.force,
        ti = bi.torque,
        fj = bj.force,
        tj = bj.torque,
        invMassi = bi.invMassSolve,
        invMassj = bj.invMassSolve;

    fi.scale(invMassi,iMfi);
    fj.scale(invMassj,iMfj);

    bi.invInertiaWorldSolve.vmult(ti,invIi_vmult_taui);
    bj.invInertiaWorldSolve.vmult(tj,invIj_vmult_tauj);

    return GA.multiplyVectors(iMfi,invIi_vmult_taui) + GB.multiplyVectors(iMfj,invIj_vmult_tauj);
};

/**
 * Computes G*inv(M)*G'
 * @method computeGiMGt
 * @return {Number}
 */
var tmp = new Vec3();
Equation.prototype.computeGiMGt = function(){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        invMassi = bi.invMassSolve,
        invMassj = bj.invMassSolve,
        invIi = bi.invInertiaWorldSolve,
        invIj = bj.invInertiaWorldSolve,
        result = invMassi + invMassj;

    invIi.vmult(GA.rotational,tmp);
    result += tmp.dot(GA.rotational);

    invIj.vmult(GB.rotational,tmp);
    result += tmp.dot(GB.rotational);

    return  result;
};

var addToWlambda_temp = new Vec3(),
    addToWlambda_Gi = new Vec3(),
    addToWlambda_Gj = new Vec3(),
    addToWlambda_ri = new Vec3(),
    addToWlambda_rj = new Vec3(),
    addToWlambda_Mdiag = new Vec3();

/**
 * Add constraint velocity to the bodies.
 * @method addToWlambda
 * @param {Number} deltalambda
 */
Equation.prototype.addToWlambda = function(deltalambda){
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB,
        bi = this.bi,
        bj = this.bj,
        temp = addToWlambda_temp;

    // Add to linear velocity
    // v_lambda += inv(M) * delta_lamba * G
    bi.vlambda.addScaledVector(bi.invMassSolve * deltalambda, GA.spatial, bi.vlambda);
    bj.vlambda.addScaledVector(bj.invMassSolve * deltalambda, GB.spatial, bj.vlambda);

    // Add to angular velocity
    bi.invInertiaWorldSolve.vmult(GA.rotational,temp);
    bi.wlambda.addScaledVector(deltalambda, temp, bi.wlambda);

    bj.invInertiaWorldSolve.vmult(GB.rotational,temp);
    bj.wlambda.addScaledVector(deltalambda, temp, bj.wlambda);
};

/**
 * Compute the denominator part of the SPOOK equation: C = G*inv(M)*G' + eps
 * @method computeInvC
 * @param  {Number} eps
 * @return {Number}
 */
Equation.prototype.computeC = function(){
    return this.computeGiMGt() + this.eps;
};

},{"../math/JacobianElement":27,"../math/Vec3":31}],22:[function(_dereq_,module,exports){
module.exports = FrictionEquation;

var Equation = _dereq_('./Equation');
var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');

/**
 * Constrains the slipping in a contact along a tangent
 * @class FrictionEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} slipForce should be +-F_friction = +-mu * F_normal = +-mu * m * g
 * @extends Equation
 */
function FrictionEquation(bodyA, bodyB, slipForce){
    Equation.call(this,bodyA, bodyB, -slipForce, slipForce);
    this.ri = new Vec3();
    this.rj = new Vec3();
    this.t = new Vec3(); // tangent
}

FrictionEquation.prototype = new Equation();
FrictionEquation.prototype.constructor = FrictionEquation;

var FrictionEquation_computeB_temp1 = new Vec3();
var FrictionEquation_computeB_temp2 = new Vec3();
FrictionEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,
        bi = this.bi,
        bj = this.bj,
        ri = this.ri,
        rj = this.rj,
        rixt = FrictionEquation_computeB_temp1,
        rjxt = FrictionEquation_computeB_temp2,
        t = this.t;

    // Caluclate cross products
    ri.cross(t,rixt);
    rj.cross(t,rjxt);

    // G = [-t -rixt t rjxt]
    // And remember, this is a pure velocity constraint, g is always zero!
    var GA = this.jacobianElementA,
        GB = this.jacobianElementB;
    t.negate(GA.spatial);
    rixt.negate(GA.rotational);
    GB.spatial.copy(t);
    GB.rotational.copy(rjxt);

    var GW = this.computeGW();
    var GiMf = this.computeGiMf();

    var B = - GW * b - h * GiMf;

    return B;
};

},{"../math/Mat3":28,"../math/Vec3":31,"./Equation":21}],23:[function(_dereq_,module,exports){
module.exports = RotationalEquation;

var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');
var Equation = _dereq_('./Equation');

/**
 * Rotational constraint. Works to keep the local vectors orthogonal to each other in world space.
 * @class RotationalEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Vec3} [options.axisA]
 * @param {Vec3} [options.axisB]
 * @param {number} [options.maxForce]
 * @extends Equation
 */
function RotationalEquation(bodyA, bodyB, options){
    options = options || {};
    var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

    Equation.call(this,bodyA,bodyB,-maxForce, maxForce);

    this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
    this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);

    this.maxAngle = Math.PI / 2;
}

RotationalEquation.prototype = new Equation();
RotationalEquation.prototype.constructor = RotationalEquation;

var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();

RotationalEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,

        ni = this.axisA,
        nj = this.axisB,

        nixnj = tmpVec1,
        njxni = tmpVec2,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB;

    // Caluclate cross products
    ni.cross(nj, nixnj);
    nj.cross(ni, njxni);

    // g = ni * nj
    // gdot = (nj x ni) * wi + (ni x nj) * wj
    // G = [0 njxni 0 nixnj]
    // W = [vi wi vj wj]
    GA.rotational.copy(njxni);
    GB.rotational.copy(nixnj);

    var g = Math.cos(this.maxAngle) - ni.dot(nj),
        GW = this.computeGW(),
        GiMf = this.computeGiMf();

    var B = - g * a - GW * b - h * GiMf;

    return B;
};


},{"../math/Mat3":28,"../math/Vec3":31,"./Equation":21}],24:[function(_dereq_,module,exports){
module.exports = RotationalMotorEquation;

var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');
var Equation = _dereq_('./Equation');

/**
 * Rotational motor constraint. Tries to keep the relative angular velocity of the bodies to a given value.
 * @class RotationalMotorEquation
 * @constructor
 * @author schteppe
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Number} maxForce
 * @extends Equation
 */
function RotationalMotorEquation(bodyA, bodyB, maxForce){
    maxForce = typeof(maxForce)!=='undefined' ? maxForce : 1e6;
    Equation.call(this,bodyA,bodyB,-maxForce,maxForce);

    /**
     * World oriented rotational axis
     * @property {Vec3} axisA
     */
    this.axisA = new Vec3();

    /**
     * World oriented rotational axis
     * @property {Vec3} axisB
     */
    this.axisB = new Vec3(); // World oriented rotational axis

    /**
     * Motor velocity
     * @property {Number} targetVelocity
     */
    this.targetVelocity = 0;
}

RotationalMotorEquation.prototype = new Equation();
RotationalMotorEquation.prototype.constructor = RotationalMotorEquation;

RotationalMotorEquation.prototype.computeB = function(h){
    var a = this.a,
        b = this.b,
        bi = this.bi,
        bj = this.bj,

        axisA = this.axisA,
        axisB = this.axisB,

        GA = this.jacobianElementA,
        GB = this.jacobianElementB;

    // g = 0
    // gdot = axisA * wi - axisB * wj
    // gdot = G * W = G * [vi wi vj wj]
    // =>
    // G = [0 axisA 0 -axisB]

    GA.rotational.copy(axisA);
    axisB.negate(GB.rotational);

    var GW = this.computeGW() - this.targetVelocity,
        GiMf = this.computeGiMf();

    var B = - GW * b - h * GiMf;

    return B;
};

},{"../math/Mat3":28,"../math/Vec3":31,"./Equation":21}],25:[function(_dereq_,module,exports){
var Utils = _dereq_('../utils/Utils');

module.exports = ContactMaterial;

/**
 * Defines what happens when two materials meet.
 * @class ContactMaterial
 * @constructor
 * @param {Material} m1
 * @param {Material} m2
 * @param {object} [options]
 * @param {Number} [options.friction=0.3]
 * @param {Number} [options.restitution=0.3]
 * @param {number} [options.contactEquationStiffness=1e7]
 * @param {number} [options.contactEquationRelaxation=3]
 * @param {number} [options.frictionEquationStiffness=1e7]
 * @param {Number} [options.frictionEquationRelaxation=3]
 */
function ContactMaterial(m1, m2, options){
    options = Utils.defaults(options, {
        friction: 0.3,
        restitution: 0.3,
        contactEquationStiffness: 1e7,
        contactEquationRelaxation: 3,
        frictionEquationStiffness: 1e7,
        frictionEquationRelaxation: 3
    });

    /**
     * Identifier of this material
     * @property {Number} id
     */
    this.id = ContactMaterial.idCounter++;

    /**
     * Participating materials
     * @property {Array} materials
     * @todo  Should be .materialA and .materialB instead
     */
    this.materials = [m1, m2];

    /**
     * Friction coefficient
     * @property {Number} friction
     */
    this.friction = options.friction;

    /**
     * Restitution coefficient
     * @property {Number} restitution
     */
    this.restitution = options.restitution;

    /**
     * Stiffness of the produced contact equations
     * @property {Number} contactEquationStiffness
     */
    this.contactEquationStiffness = options.contactEquationStiffness;

    /**
     * Relaxation time of the produced contact equations
     * @property {Number} contactEquationRelaxation
     */
    this.contactEquationRelaxation = options.contactEquationRelaxation;

    /**
     * Stiffness of the produced friction equations
     * @property {Number} frictionEquationStiffness
     */
    this.frictionEquationStiffness = options.frictionEquationStiffness;

    /**
     * Relaxation time of the produced friction equations
     * @property {Number} frictionEquationRelaxation
     */
    this.frictionEquationRelaxation = options.frictionEquationRelaxation;
}

ContactMaterial.idCounter = 0;

},{"../utils/Utils":54}],26:[function(_dereq_,module,exports){
module.exports = Material;

/**
 * Defines a physics material.
 * @class Material
 * @constructor
 * @param {object} [options]
 * @author schteppe
 */
function Material(options){
    var name = '';
    options = options || {};

    // Backwards compatibility fix
    if(typeof(options) === 'string'){
        name = options;
        options = {};
    } else if(typeof(options) === 'object') {
        name = '';
    }

    /**
     * @property name
     * @type {String}
     */
    this.name = name;

    /**
     * material id.
     * @property id
     * @type {number}
     */
    this.id = Material.idCounter++;

    /**
     * Friction for this material. If non-negative, it will be used instead of the friction given by ContactMaterials. If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
     * @property {number} friction
     */
    this.friction = typeof(options.friction) !== 'undefined' ? options.friction : -1;

    /**
     * Restitution for this material. If non-negative, it will be used instead of the restitution given by ContactMaterials. If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
     * @property {number} restitution
     */
    this.restitution = typeof(options.restitution) !== 'undefined' ? options.restitution : -1;
}

Material.idCounter = 0;

},{}],27:[function(_dereq_,module,exports){
module.exports = JacobianElement;

var Vec3 = _dereq_('./Vec3');

/**
 * An element containing 6 entries, 3 spatial and 3 rotational degrees of freedom.
 * @class JacobianElement
 * @constructor
 */
function JacobianElement(){

    /**
     * @property {Vec3} spatial
     */
    this.spatial = new Vec3();

    /**
     * @property {Vec3} rotational
     */
    this.rotational = new Vec3();
}

/**
 * Multiply with other JacobianElement
 * @method multiplyElement
 * @param  {JacobianElement} element
 * @return {Number}
 */
JacobianElement.prototype.multiplyElement = function(element){
    return element.spatial.dot(this.spatial) + element.rotational.dot(this.rotational);
};

/**
 * Multiply with two vectors
 * @method multiplyVectors
 * @param  {Vec3} spatial
 * @param  {Vec3} rotational
 * @return {Number}
 */
JacobianElement.prototype.multiplyVectors = function(spatial,rotational){
    return spatial.dot(this.spatial) + rotational.dot(this.rotational);
};

},{"./Vec3":31}],28:[function(_dereq_,module,exports){
module.exports = Mat3;

var Vec3 = _dereq_('./Vec3');

/**
 * A 3x3 matrix.
 * @class Mat3
 * @constructor
 * @param array elements Array of nine elements. Optional.
 * @author schteppe / http://github.com/schteppe
 */
function Mat3(elements){
    /**
     * A vector of length 9, containing all matrix elements
     * @property {Array} elements
     */
    if(elements){
        this.elements = elements;
    } else {
        this.elements = [0,0,0,0,0,0,0,0,0];
    }
}

/**
 * Sets the matrix to identity
 * @method identity
 * @todo Should perhaps be renamed to setIdentity() to be more clear.
 * @todo Create another function that immediately creates an identity matrix eg. eye()
 */
Mat3.prototype.identity = function(){
    var e = this.elements;
    e[0] = 1;
    e[1] = 0;
    e[2] = 0;

    e[3] = 0;
    e[4] = 1;
    e[5] = 0;

    e[6] = 0;
    e[7] = 0;
    e[8] = 1;
};

/**
 * Set all elements to zero
 * @method setZero
 */
Mat3.prototype.setZero = function(){
    var e = this.elements;
    e[0] = 0;
    e[1] = 0;
    e[2] = 0;
    e[3] = 0;
    e[4] = 0;
    e[5] = 0;
    e[6] = 0;
    e[7] = 0;
    e[8] = 0;
};

/**
 * Sets the matrix diagonal elements from a Vec3
 * @method setTrace
 * @param {Vec3} vec3
 */
Mat3.prototype.setTrace = function(vec3){
    var e = this.elements;
    e[0] = vec3.x;
    e[4] = vec3.y;
    e[8] = vec3.z;
};

/**
 * Gets the matrix diagonal elements
 * @method getTrace
 * @return {Vec3}
 */
Mat3.prototype.getTrace = function(target){
    var target = target || new Vec3();
    var e = this.elements;
    target.x = e[0];
    target.y = e[4];
    target.z = e[8];
};

/**
 * Matrix-Vector multiplication
 * @method vmult
 * @param {Vec3} v The vector to multiply with
 * @param {Vec3} target Optional, target to save the result in.
 */
Mat3.prototype.vmult = function(v,target){
    target = target || new Vec3();

    var e = this.elements,
        x = v.x,
        y = v.y,
        z = v.z;
    target.x = e[0]*x + e[1]*y + e[2]*z;
    target.y = e[3]*x + e[4]*y + e[5]*z;
    target.z = e[6]*x + e[7]*y + e[8]*z;

    return target;
};

/**
 * Matrix-scalar multiplication
 * @method smult
 * @param {Number} s
 */
Mat3.prototype.smult = function(s){
    for(var i=0; i<this.elements.length; i++){
        this.elements[i] *= s;
    }
};

/**
 * Matrix multiplication
 * @method mmult
 * @param {Mat3} m Matrix to multiply with from left side.
 * @return {Mat3} The result.
 */
Mat3.prototype.mmult = function(m,target){
    var r = target || new Mat3();
    for(var i=0; i<3; i++){
        for(var j=0; j<3; j++){
            var sum = 0.0;
            for(var k=0; k<3; k++){
                sum += m.elements[i+k*3] * this.elements[k+j*3];
            }
            r.elements[i+j*3] = sum;
        }
    }
    return r;
};

/**
 * Scale each column of the matrix
 * @method scale
 * @param {Vec3} v
 * @return {Mat3} The result.
 */
Mat3.prototype.scale = function(v,target){
    target = target || new Mat3();
    var e = this.elements,
        t = target.elements;
    for(var i=0; i!==3; i++){
        t[3*i + 0] = v.x * e[3*i + 0];
        t[3*i + 1] = v.y * e[3*i + 1];
        t[3*i + 2] = v.z * e[3*i + 2];
    }
    return target;
};

/**
 * Solve Ax=b
 * @method solve
 * @param {Vec3} b The right hand side
 * @param {Vec3} target Optional. Target vector to save in.
 * @return {Vec3} The solution x
 * @todo should reuse arrays
 */
Mat3.prototype.solve = function(b,target){
    target = target || new Vec3();

    // Construct equations
    var nr = 3; // num rows
    var nc = 4; // num cols
    var eqns = [];
    for(var i=0; i<nr*nc; i++){
        eqns.push(0);
    }
    var i,j;
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            eqns[i+nc*j] = this.elements[i+3*j];
        }
    }
    eqns[3+4*0] = b.x;
    eqns[3+4*1] = b.y;
    eqns[3+4*2] = b.z;

    // Compute right upper triangular version of the matrix - Gauss elimination
    var n = 3, k = n, np;
    var kp = 4; // num rows
    var p, els;
    do {
        i = k - n;
        if (eqns[i+nc*i] === 0) {
            // the pivot is null, swap lines
            for (j = i + 1; j < k; j++) {
                if (eqns[i+nc*j] !== 0) {
                    np = kp;
                    do {  // do ligne( i ) = ligne( i ) + ligne( k )
                        p = kp - np;
                        eqns[p+nc*i] += eqns[p+nc*j];
                    } while (--np);
                    break;
                }
            }
        }
        if (eqns[i+nc*i] !== 0) {
            for (j = i + 1; j < k; j++) {
                var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
                np = kp;
                do {  // do ligne( k ) = ligne( k ) - multiplier * ligne( i )
                    p = kp - np;
                    eqns[p+nc*j] = p <= i ? 0 : eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
                } while (--np);
            }
        }
    } while (--n);

    // Get the solution
    target.z = eqns[2*nc+3] / eqns[2*nc+2];
    target.y = (eqns[1*nc+3] - eqns[1*nc+2]*target.z) / eqns[1*nc+1];
    target.x = (eqns[0*nc+3] - eqns[0*nc+2]*target.z - eqns[0*nc+1]*target.y) / eqns[0*nc+0];

    if(isNaN(target.x) || isNaN(target.y) || isNaN(target.z) || target.x===Infinity || target.y===Infinity || target.z===Infinity){
        throw "Could not solve equation! Got x=["+target.toString()+"], b=["+b.toString()+"], A=["+this.toString()+"]";
    }

    return target;
};

/**
 * Get an element in the matrix by index. Index starts at 0, not 1!!!
 * @method e
 * @param {Number} row
 * @param {Number} column
 * @param {Number} value Optional. If provided, the matrix element will be set to this value.
 * @return {Number}
 */
Mat3.prototype.e = function( row , column ,value){
    if(value===undefined){
        return this.elements[column+3*row];
    } else {
        // Set value
        this.elements[column+3*row] = value;
    }
};

/**
 * Copy another matrix into this matrix object.
 * @method copy
 * @param {Mat3} source
 * @return {Mat3} this
 */
Mat3.prototype.copy = function(source){
    for(var i=0; i < source.elements.length; i++){
        this.elements[i] = source.elements[i];
    }
    return this;
};

/**
 * Returns a string representation of the matrix.
 * @method toString
 * @return string
 */
Mat3.prototype.toString = function(){
    var r = "";
    var sep = ",";
    for(var i=0; i<9; i++){
        r += this.elements[i] + sep;
    }
    return r;
};

/**
 * reverse the matrix
 * @method reverse
 * @param {Mat3} target Optional. Target matrix to save in.
 * @return {Mat3} The solution x
 */
Mat3.prototype.reverse = function(target){

    target = target || new Mat3();

    // Construct equations
    var nr = 3; // num rows
    var nc = 6; // num cols
    var eqns = [];
    for(var i=0; i<nr*nc; i++){
        eqns.push(0);
    }
    var i,j;
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            eqns[i+nc*j] = this.elements[i+3*j];
        }
    }
    eqns[3+6*0] = 1;
    eqns[3+6*1] = 0;
    eqns[3+6*2] = 0;
    eqns[4+6*0] = 0;
    eqns[4+6*1] = 1;
    eqns[4+6*2] = 0;
    eqns[5+6*0] = 0;
    eqns[5+6*1] = 0;
    eqns[5+6*2] = 1;

    // Compute right upper triangular version of the matrix - Gauss elimination
    var n = 3, k = n, np;
    var kp = nc; // num rows
    var p;
    do {
        i = k - n;
        if (eqns[i+nc*i] === 0) {
            // the pivot is null, swap lines
            for (j = i + 1; j < k; j++) {
                if (eqns[i+nc*j] !== 0) {
                    np = kp;
                    do { // do line( i ) = line( i ) + line( k )
                        p = kp - np;
                        eqns[p+nc*i] += eqns[p+nc*j];
                    } while (--np);
                    break;
                }
            }
        }
        if (eqns[i+nc*i] !== 0) {
            for (j = i + 1; j < k; j++) {
                var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
                np = kp;
                do { // do line( k ) = line( k ) - multiplier * line( i )
                    p = kp - np;
                    eqns[p+nc*j] = p <= i ? 0 : eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
                } while (--np);
            }
        }
    } while (--n);

    // eliminate the upper left triangle of the matrix
    i = 2;
    do {
        j = i-1;
        do {
            var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
            np = nc;
            do {
                p = nc - np;
                eqns[p+nc*j] =  eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
            } while (--np);
        } while (j--);
    } while (--i);

    // operations on the diagonal
    i = 2;
    do {
        var multiplier = 1 / eqns[i+nc*i];
        np = nc;
        do {
            p = nc - np;
            eqns[p+nc*i] = eqns[p+nc*i] * multiplier ;
        } while (--np);
    } while (i--);

    i = 2;
    do {
        j = 2;
        do {
            p = eqns[nr+j+nc*i];
            if( isNaN( p ) || p ===Infinity ){
                throw "Could not reverse! A=["+this.toString()+"]";
            }
            target.e( i , j , p );
        } while (j--);
    } while (i--);

    return target;
};

/**
 * Set the matrix from a quaterion
 * @method setRotationFromQuaternion
 * @param {Quaternion} q
 */
Mat3.prototype.setRotationFromQuaternion = function( q ) {
    var x = q.x, y = q.y, z = q.z, w = q.w,
        x2 = x + x, y2 = y + y, z2 = z + z,
        xx = x * x2, xy = x * y2, xz = x * z2,
        yy = y * y2, yz = y * z2, zz = z * z2,
        wx = w * x2, wy = w * y2, wz = w * z2,
        e = this.elements;

    e[3*0 + 0] = 1 - ( yy + zz );
    e[3*0 + 1] = xy - wz;
    e[3*0 + 2] = xz + wy;

    e[3*1 + 0] = xy + wz;
    e[3*1 + 1] = 1 - ( xx + zz );
    e[3*1 + 2] = yz - wx;

    e[3*2 + 0] = xz - wy;
    e[3*2 + 1] = yz + wx;
    e[3*2 + 2] = 1 - ( xx + yy );

    return this;
};

/**
 * Transpose the matrix
 * @method transpose
 * @param  {Mat3} target Where to store the result.
 * @return {Mat3} The target Mat3, or a new Mat3 if target was omitted.
 */
Mat3.prototype.transpose = function( target ) {
    target = target || new Mat3();

    var Mt = target.elements,
        M = this.elements;

    for(var i=0; i!==3; i++){
        for(var j=0; j!==3; j++){
            Mt[3*i + j] = M[3*j + i];
        }
    }

    return target;
};

},{"./Vec3":31}],29:[function(_dereq_,module,exports){
module.exports = Quaternion;

var Vec3 = _dereq_('./Vec3');

/**
 * A Quaternion describes a rotation in 3D space. The Quaternion is mathematically defined as Q = x*i + y*j + z*k + w, where (i,j,k) are imaginary basis vectors. (x,y,z) can be seen as a vector related to the axis of rotation, while the real multiplier, w, is related to the amount of rotation.
 * @class Quaternion
 * @constructor
 * @param {Number} x Multiplier of the imaginary basis vector i.
 * @param {Number} y Multiplier of the imaginary basis vector j.
 * @param {Number} z Multiplier of the imaginary basis vector k.
 * @param {Number} w Multiplier of the real part.
 * @see http://en.wikipedia.org/wiki/Quaternion
 */
function Quaternion(x,y,z,w){
    /**
     * @property {Number} x
     */
    this.x = x!==undefined ? x : 0;

    /**
     * @property {Number} y
     */
    this.y = y!==undefined ? y : 0;

    /**
     * @property {Number} z
     */
    this.z = z!==undefined ? z : 0;

    /**
     * The multiplier of the real quaternion basis vector.
     * @property {Number} w
     */
    this.w = w!==undefined ? w : 1;
}

/**
 * Set the value of the quaternion.
 * @method set
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {Number} w
 */
Quaternion.prototype.set = function(x,y,z,w){
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
    return this;
};

/**
 * Convert to a readable format
 * @method toString
 * @return string
 */
Quaternion.prototype.toString = function(){
    return this.x+","+this.y+","+this.z+","+this.w;
};

/**
 * Convert to an Array
 * @method toArray
 * @return Array
 */
Quaternion.prototype.toArray = function(){
    return [this.x, this.y, this.z, this.w];
};

/**
 * Set the quaternion components given an axis and an angle.
 * @method setFromAxisAngle
 * @param {Vec3} axis
 * @param {Number} angle in radians
 */
Quaternion.prototype.setFromAxisAngle = function(axis,angle){
    var s = Math.sin(angle*0.5);
    this.x = axis.x * s;
    this.y = axis.y * s;
    this.z = axis.z * s;
    this.w = Math.cos(angle*0.5);
    return this;
};

/**
 * Converts the quaternion to axis/angle representation.
 * @method toAxisAngle
 * @param {Vec3} [targetAxis] A vector object to reuse for storing the axis.
 * @return {Array} An array, first elemnt is the axis and the second is the angle in radians.
 */
Quaternion.prototype.toAxisAngle = function(targetAxis){
    targetAxis = targetAxis || new Vec3();
    this.normalize(); // if w>1 acos and sqrt will produce errors, this cant happen if quaternion is normalised
    var angle = 2 * Math.acos(this.w);
    var s = Math.sqrt(1-this.w*this.w); // assuming quaternion normalised then w is less than 1, so term always positive.
    if (s < 0.001) { // test to avoid divide by zero, s is always positive due to sqrt
        // if s close to zero then direction of axis not important
        targetAxis.x = this.x; // if it is important that axis is normalised then replace with x=1; y=z=0;
        targetAxis.y = this.y;
        targetAxis.z = this.z;
    } else {
        targetAxis.x = this.x / s; // normalise axis
        targetAxis.y = this.y / s;
        targetAxis.z = this.z / s;
    }
    return [targetAxis,angle];
};

var sfv_t1 = new Vec3(),
    sfv_t2 = new Vec3();

/**
 * Set the quaternion value given two vectors. The resulting rotation will be the needed rotation to rotate u to v.
 * @method setFromVectors
 * @param {Vec3} u
 * @param {Vec3} v
 */
Quaternion.prototype.setFromVectors = function(u,v){
    if(u.isAntiparallelTo(v)){
        var t1 = sfv_t1;
        var t2 = sfv_t2;

        u.tangents(t1,t2);
        this.setFromAxisAngle(t1,Math.PI);
    } else {
        var a = u.cross(v);
        this.x = a.x;
        this.y = a.y;
        this.z = a.z;
        this.w = Math.sqrt(Math.pow(u.norm(),2) * Math.pow(v.norm(),2)) + u.dot(v);
        this.normalize();
    }
    return this;
};

/**
 * Quaternion multiplication
 * @method mult
 * @param {Quaternion} q
 * @param {Quaternion} target Optional.
 * @return {Quaternion}
 */
var Quaternion_mult_va = new Vec3();
var Quaternion_mult_vb = new Vec3();
var Quaternion_mult_vaxvb = new Vec3();
Quaternion.prototype.mult = function(q,target){
    target = target || new Quaternion();

    var ax = this.x, ay = this.y, az = this.z, aw = this.w,
        bx = q.x, by = q.y, bz = q.z, bw = q.w;

    target.x = ax * bw + aw * bx + ay * bz - az * by;
    target.y = ay * bw + aw * by + az * bx - ax * bz;
    target.z = az * bw + aw * bz + ax * by - ay * bx;
    target.w = aw * bw - ax * bx - ay * by - az * bz;

    return target;
};

/**
 * Get the inverse quaternion rotation.
 * @method inverse
 * @param {Quaternion} target
 * @return {Quaternion}
 */
Quaternion.prototype.inverse = function(target){
    var x = this.x, y = this.y, z = this.z, w = this.w;
    target = target || new Quaternion();

    this.conjugate(target);
    var inorm2 = 1/(x*x + y*y + z*z + w*w);
    target.x *= inorm2;
    target.y *= inorm2;
    target.z *= inorm2;
    target.w *= inorm2;

    return target;
};

/**
 * Get the quaternion conjugate
 * @method conjugate
 * @param {Quaternion} target
 * @return {Quaternion}
 */
Quaternion.prototype.conjugate = function(target){
    target = target || new Quaternion();

    target.x = -this.x;
    target.y = -this.y;
    target.z = -this.z;
    target.w = this.w;

    return target;
};

/**
 * Normalize the quaternion. Note that this changes the values of the quaternion.
 * @method normalize
 */
Quaternion.prototype.normalize = function(){
    var l = Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);
    if ( l === 0 ) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    } else {
        l = 1 / l;
        this.x *= l;
        this.y *= l;
        this.z *= l;
        this.w *= l;
    }
    return this;
};

/**
 * Approximation of quaternion normalization. Works best when quat is already almost-normalized.
 * @method normalizeFast
 * @see http://jsperf.com/fast-quaternion-normalization
 * @author unphased, https://github.com/unphased
 */
Quaternion.prototype.normalizeFast = function () {
    var f = (3.0-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2.0;
    if ( f === 0 ) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.w = 0;
    } else {
        this.x *= f;
        this.y *= f;
        this.z *= f;
        this.w *= f;
    }
    return this;
};

/**
 * Multiply the quaternion by a vector
 * @method vmult
 * @param {Vec3} v
 * @param {Vec3} target Optional
 * @return {Vec3}
 */
Quaternion.prototype.vmult = function(v,target){
    target = target || new Vec3();

    var x = v.x,
        y = v.y,
        z = v.z;

    var qx = this.x,
        qy = this.y,
        qz = this.z,
        qw = this.w;

    // q*v
    var ix =  qw * x + qy * z - qz * y,
    iy =  qw * y + qz * x - qx * z,
    iz =  qw * z + qx * y - qy * x,
    iw = -qx * x - qy * y - qz * z;

    target.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    target.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    target.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

    return target;
};

/**
 * Copies value of source to this quaternion.
 * @method copy
 * @param {Quaternion} source
 * @return {Quaternion} this
 */
Quaternion.prototype.copy = function(source){
    this.x = source.x;
    this.y = source.y;
    this.z = source.z;
    this.w = source.w;
    return this;
};

/**
 * Convert the quaternion to euler angle representation. Order: YZX, as this page describes: http://www.euclideanspace.com/maths/standards/index.htm
 * @method toEuler
 * @param {Vec3} target
 * @param string order Three-character string e.g. "YZX", which also is default.
 */
Quaternion.prototype.toEuler = function(target,order){
    order = order || "YZX";

    var heading, attitude, bank;
    var x = this.x, y = this.y, z = this.z, w = this.w;

    switch(order){
    case "YZX":
        var test = x*y + z*w;
        if (test > 0.499) { // singularity at north pole
            heading = 2 * Math.atan2(x,w);
            attitude = Math.PI/2;
            bank = 0;
        }
        if (test < -0.499) { // singularity at south pole
            heading = -2 * Math.atan2(x,w);
            attitude = - Math.PI/2;
            bank = 0;
        }
        if(isNaN(heading)){
            var sqx = x*x;
            var sqy = y*y;
            var sqz = z*z;
            heading = Math.atan2(2*y*w - 2*x*z , 1 - 2*sqy - 2*sqz); // Heading
            attitude = Math.asin(2*test); // attitude
            bank = Math.atan2(2*x*w - 2*y*z , 1 - 2*sqx - 2*sqz); // bank
        }
        break;
    default:
        throw new Error("Euler order "+order+" not supported yet.");
    }

    target.y = heading;
    target.z = attitude;
    target.x = bank;
};

/**
 * See http://www.mathworks.com/matlabcentral/fileexchange/20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/content/SpinCalc.m
 * @method setFromEuler
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @param {String} order The order to apply angles: 'XYZ' or 'YXZ' or any other combination
 */
Quaternion.prototype.setFromEuler = function ( x, y, z, order ) {
    order = order || "XYZ";

    var c1 = Math.cos( x / 2 );
    var c2 = Math.cos( y / 2 );
    var c3 = Math.cos( z / 2 );
    var s1 = Math.sin( x / 2 );
    var s2 = Math.sin( y / 2 );
    var s3 = Math.sin( z / 2 );

    if ( order === 'XYZ' ) {

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;

    } else if ( order === 'YXZ' ) {

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;

    } else if ( order === 'ZXY' ) {

        this.x = s1 * c2 * c3 - c1 * s2 * s3;
        this.y = c1 * s2 * c3 + s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;

    } else if ( order === 'ZYX' ) {

        this.x = s1 * c2 * c3 - c1 * s2 * s3;
        this.y = c1 * s2 * c3 + s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;

    } else if ( order === 'YZX' ) {

        this.x = s1 * c2 * c3 + c1 * s2 * s3;
        this.y = c1 * s2 * c3 + s1 * c2 * s3;
        this.z = c1 * c2 * s3 - s1 * s2 * c3;
        this.w = c1 * c2 * c3 - s1 * s2 * s3;

    } else if ( order === 'XZY' ) {

        this.x = s1 * c2 * c3 - c1 * s2 * s3;
        this.y = c1 * s2 * c3 - s1 * c2 * s3;
        this.z = c1 * c2 * s3 + s1 * s2 * c3;
        this.w = c1 * c2 * c3 + s1 * s2 * s3;

    }

    return this;
};

/**
 * @method clone
 * @return {Quaternion}
 */
Quaternion.prototype.clone = function(){
    return new Quaternion(this.x, this.y, this.z, this.w);
};

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @method slerp
 * @param {Quaternion} toQuat second operand
 * @param {Number} t interpolation amount between the self quaternion and toQuat
 * @param {Quaternion} [target] A quaternion to store the result in. If not provided, a new one will be created.
 * @returns {Quaternion} The "target" object
 */
Quaternion.prototype.slerp = function (toQuat, t, target) {
    target = target || new Quaternion();

    var ax = this.x,
        ay = this.y,
        az = this.z,
        aw = this.w,
        bx = toQuat.x,
        by = toQuat.y,
        bz = toQuat.z,
        bw = toQuat.w;

    var omega, cosom, sinom, scale0, scale1;

    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;

    // adjust signs (if necessary)
    if ( cosom < 0.0 ) {
        cosom = -cosom;
        bx = - bx;
        by = - by;
        bz = - bz;
        bw = - bw;
    }

    // calculate coefficients
    if ( (1.0 - cosom) > 0.000001 ) {
        // standard case (slerp)
        omega  = Math.acos(cosom);
        sinom  = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }

    // calculate final values
    target.x = scale0 * ax + scale1 * bx;
    target.y = scale0 * ay + scale1 * by;
    target.z = scale0 * az + scale1 * bz;
    target.w = scale0 * aw + scale1 * bw;

    return target;
};

/**
 * Rotate an absolute orientation quaternion given an angular velocity and a time step.
 * @param  {Vec3} angularVelocity
 * @param  {number} dt
 * @param  {Vec3} angularFactor
 * @param  {Quaternion} target
 * @return {Quaternion} The "target" object
 */
Quaternion.prototype.integrate = function(angularVelocity, dt, angularFactor, target){
    target = target || new Quaternion();

    var ax = angularVelocity.x * angularFactor.x,
        ay = angularVelocity.y * angularFactor.y,
        az = angularVelocity.z * angularFactor.z,
        bx = this.x,
        by = this.y,
        bz = this.z,
        bw = this.w;

    var half_dt = dt * 0.5;

    target.x += half_dt * (ax * bw + ay * bz - az * by);
    target.y += half_dt * (ay * bw + az * bx - ax * bz);
    target.z += half_dt * (az * bw + ax * by - ay * bx);
    target.w += half_dt * (- ax * bx - ay * by - az * bz);

    return target;
};
},{"./Vec3":31}],30:[function(_dereq_,module,exports){
var Vec3 = _dereq_('./Vec3');
var Quaternion = _dereq_('./Quaternion');

module.exports = Transform;

/**
 * @class Transform
 * @constructor
 */
function Transform(options) {
    options = options || {};

	/**
	 * @property {Vec3} position
	 */
	this.position = new Vec3();
    if(options.position){
        this.position.copy(options.position);
    }

	/**
	 * @property {Quaternion} quaternion
	 */
	this.quaternion = new Quaternion();
    if(options.quaternion){
        this.quaternion.copy(options.quaternion);
    }
}

var tmpQuat = new Quaternion();

/**
 * @static
 * @method pointToLocaFrame
 * @param {Vec3} position
 * @param {Quaternion} quaternion
 * @param {Vec3} worldPoint
 * @param {Vec3} result
 */
Transform.pointToLocalFrame = function(position, quaternion, worldPoint, result){
    var result = result || new Vec3();
    worldPoint.vsub(position, result);
    quaternion.conjugate(tmpQuat);
    tmpQuat.vmult(result, result);
    return result;
};

/**
 * Get a global point in local transform coordinates.
 * @method pointToLocal
 * @param  {Vec3} point
 * @param  {Vec3} result
 * @return {Vec3} The "result" vector object
 */
Transform.prototype.pointToLocal = function(worldPoint, result){
    return Transform.pointToLocalFrame(this.position, this.quaternion, worldPoint, result);
};

/**
 * @static
 * @method pointToWorldFrame
 * @param {Vec3} position
 * @param {Vec3} quaternion
 * @param {Vec3} localPoint
 * @param {Vec3} result
 */
Transform.pointToWorldFrame = function(position, quaternion, localPoint, result){
    var result = result || new Vec3();
    quaternion.vmult(localPoint, result);
    result.vadd(position, result);
    return result;
};

/**
 * Get a local point in global transform coordinates.
 * @method pointToWorld
 * @param  {Vec3} point
 * @param  {Vec3} result
 * @return {Vec3} The "result" vector object
 */
Transform.prototype.pointToWorld = function(localPoint, result){
    return Transform.pointToWorldFrame(this.position, this.quaternion, localPoint, result);
};


Transform.prototype.vectorToWorldFrame = function(localVector, result){
    var result = result || new Vec3();
    this.quaternion.vmult(localVector, result);
    return result;
};

Transform.vectorToWorldFrame = function(quaternion, localVector, result){
    quaternion.vmult(localVector, result);
    return result;
};

Transform.vectorToLocalFrame = function(position, quaternion, worldVector, result){
    var result = result || new Vec3();
    quaternion.w *= -1;
    quaternion.vmult(worldVector, result);
    quaternion.w *= -1;
    return result;
};

},{"./Quaternion":29,"./Vec3":31}],31:[function(_dereq_,module,exports){
module.exports = Vec3;

var Mat3 = _dereq_('./Mat3');

/**
 * 3-dimensional vector
 * @class Vec3
 * @constructor
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @author schteppe
 * @example
 *     var v = new Vec3(1, 2, 3);
 *     console.log('x=' + v.x); // x=1
 */
function Vec3(x,y,z){
    /**
     * @property x
     * @type {Number}
     */
    this.x = x||0.0;

    /**
     * @property y
     * @type {Number}
     */
    this.y = y||0.0;

    /**
     * @property z
     * @type {Number}
     */
    this.z = z||0.0;
}

/**
 * @static
 * @property {Vec3} ZERO
 */
Vec3.ZERO = new Vec3(0, 0, 0);

/**
 * @static
 * @property {Vec3} UNIT_X
 */
Vec3.UNIT_X = new Vec3(1, 0, 0);

/**
 * @static
 * @property {Vec3} UNIT_Y
 */
Vec3.UNIT_Y = new Vec3(0, 1, 0);

/**
 * @static
 * @property {Vec3} UNIT_Z
 */
Vec3.UNIT_Z = new Vec3(0, 0, 1);

/**
 * Vector cross product
 * @method cross
 * @param {Vec3} v
 * @param {Vec3} target Optional. Target to save in.
 * @return {Vec3}
 */
Vec3.prototype.cross = function(v,target){
    var vx=v.x, vy=v.y, vz=v.z, x=this.x, y=this.y, z=this.z;
    target = target || new Vec3();

    target.x = (y * vz) - (z * vy);
    target.y = (z * vx) - (x * vz);
    target.z = (x * vy) - (y * vx);

    return target;
};

/**
 * Set the vectors' 3 elements
 * @method set
 * @param {Number} x
 * @param {Number} y
 * @param {Number} z
 * @return Vec3
 */
Vec3.prototype.set = function(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
};

/**
 * Set all components of the vector to zero.
 * @method setZero
 */
Vec3.prototype.setZero = function(){
    this.x = this.y = this.z = 0;
};

/**
 * Vector addition
 * @method vadd
 * @param {Vec3} v
 * @param {Vec3} target Optional.
 * @return {Vec3}
 */
Vec3.prototype.vadd = function(v,target){
    if(target){
        target.x = v.x + this.x;
        target.y = v.y + this.y;
        target.z = v.z + this.z;
    } else {
        return new Vec3(this.x + v.x,
                               this.y + v.y,
                               this.z + v.z);
    }
};

/**
 * Vector subtraction
 * @method vsub
 * @param {Vec3} v
 * @param {Vec3} target Optional. Target to save in.
 * @return {Vec3}
 */
Vec3.prototype.vsub = function(v,target){
    if(target){
        target.x = this.x - v.x;
        target.y = this.y - v.y;
        target.z = this.z - v.z;
    } else {
        return new Vec3(this.x-v.x,
                               this.y-v.y,
                               this.z-v.z);
    }
};

/**
 * Get the cross product matrix a_cross from a vector, such that a x b = a_cross * b = c
 * @method crossmat
 * @see http://www8.cs.umu.se/kurser/TDBD24/VT06/lectures/Lecture6.pdf
 * @return {Mat3}
 */
Vec3.prototype.crossmat = function(){
    return new Mat3([     0,  -this.z,   this.y,
                            this.z,        0,  -this.x,
                           -this.y,   this.x,        0]);
};

/**
 * Normalize the vector. Note that this changes the values in the vector.
 * @method normalize
 * @return {Number} Returns the norm of the vector
 */
Vec3.prototype.normalize = function(){
    var x=this.x, y=this.y, z=this.z;
    var n = Math.sqrt(x*x + y*y + z*z);
    if(n>0.0){
        var invN = 1/n;
        this.x *= invN;
        this.y *= invN;
        this.z *= invN;
    } else {
        // Make something up
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    return n;
};

/**
 * Get the version of this vector that is of length 1.
 * @method unit
 * @param {Vec3} target Optional target to save in
 * @return {Vec3} Returns the unit vector
 */
Vec3.prototype.unit = function(target){
    target = target || new Vec3();
    var x=this.x, y=this.y, z=this.z;
    var ninv = Math.sqrt(x*x + y*y + z*z);
    if(ninv>0.0){
        ninv = 1.0/ninv;
        target.x = x * ninv;
        target.y = y * ninv;
        target.z = z * ninv;
    } else {
        target.x = 1;
        target.y = 0;
        target.z = 0;
    }
    return target;
};

/**
 * Get the length of the vector
 * @method norm
 * @return {Number}
 * @deprecated Use .length() instead
 */
Vec3.prototype.norm = function(){
    var x=this.x, y=this.y, z=this.z;
    return Math.sqrt(x*x + y*y + z*z);
};

/**
 * Get the length of the vector
 * @method length
 * @return {Number}
 */
Vec3.prototype.length = Vec3.prototype.norm;

/**
 * Get the squared length of the vector
 * @method norm2
 * @return {Number}
 * @deprecated Use .lengthSquared() instead.
 */
Vec3.prototype.norm2 = function(){
    return this.dot(this);
};

/**
 * Get the squared length of the vector.
 * @method lengthSquared
 * @return {Number}
 */
Vec3.prototype.lengthSquared = Vec3.prototype.norm2;

/**
 * Get distance from this point to another point
 * @method distanceTo
 * @param  {Vec3} p
 * @return {Number}
 */
Vec3.prototype.distanceTo = function(p){
    var x=this.x, y=this.y, z=this.z;
    var px=p.x, py=p.y, pz=p.z;
    return Math.sqrt((px-x)*(px-x)+
                     (py-y)*(py-y)+
                     (pz-z)*(pz-z));
};

/**
 * Get squared distance from this point to another point
 * @method distanceSquared
 * @param  {Vec3} p
 * @return {Number}
 */
Vec3.prototype.distanceSquared = function(p){
    var x=this.x, y=this.y, z=this.z;
    var px=p.x, py=p.y, pz=p.z;
    return (px-x)*(px-x) + (py-y)*(py-y) + (pz-z)*(pz-z);
};

/**
 * Multiply all the components of the vector with a scalar.
 * @deprecated Use .scale instead
 * @method mult
 * @param {Number} scalar
 * @param {Vec3} target The vector to save the result in.
 * @return {Vec3}
 * @deprecated Use .scale() instead
 */
Vec3.prototype.mult = function(scalar,target){
    target = target || new Vec3();
    var x = this.x,
        y = this.y,
        z = this.z;
    target.x = scalar * x;
    target.y = scalar * y;
    target.z = scalar * z;
    return target;
};

/**
 * Multiply the vector with an other vector, component-wise.
 * @method mult
 * @param {Number} vector
 * @param {Vec3} target The vector to save the result in.
 * @return {Vec3}
 */
Vec3.prototype.vmul = function(vector, target){
    target = target || new Vec3();
    target.x = vector.x * this.x;
    target.y = vector.y * this.y;
    target.z = vector.z * this.z;
    return target;
};

/**
 * Multiply the vector with a scalar.
 * @method scale
 * @param {Number} scalar
 * @param {Vec3} target
 * @return {Vec3}
 */
Vec3.prototype.scale = Vec3.prototype.mult;

/**
 * Scale a vector and add it to this vector. Save the result in "target". (target = this + vector * scalar)
 * @method addScaledVector
 * @param {Number} scalar
 * @param {Vec3} vector
 * @param {Vec3} target The vector to save the result in.
 * @return {Vec3}
 */
Vec3.prototype.addScaledVector = function(scalar, vector, target){
    target = target || new Vec3();
    target.x = this.x + scalar * vector.x;
    target.y = this.y + scalar * vector.y;
    target.z = this.z + scalar * vector.z;
    return target;
};

/**
 * Calculate dot product
 * @method dot
 * @param {Vec3} v
 * @return {Number}
 */
Vec3.prototype.dot = function(v){
    return this.x * v.x + this.y * v.y + this.z * v.z;
};

/**
 * @method isZero
 * @return bool
 */
Vec3.prototype.isZero = function(){
    return this.x===0 && this.y===0 && this.z===0;
};

/**
 * Make the vector point in the opposite direction.
 * @method negate
 * @param {Vec3} target Optional target to save in
 * @return {Vec3}
 */
Vec3.prototype.negate = function(target){
    target = target || new Vec3();
    target.x = -this.x;
    target.y = -this.y;
    target.z = -this.z;
    return target;
};

/**
 * Compute two artificial tangents to the vector
 * @method tangents
 * @param {Vec3} t1 Vector object to save the first tangent in
 * @param {Vec3} t2 Vector object to save the second tangent in
 */
var Vec3_tangents_n = new Vec3();
var Vec3_tangents_randVec = new Vec3();
Vec3.prototype.tangents = function(t1,t2){
    var norm = this.norm();
    if(norm>0.0){
        var n = Vec3_tangents_n;
        var inorm = 1/norm;
        n.set(this.x*inorm,this.y*inorm,this.z*inorm);
        var randVec = Vec3_tangents_randVec;
        if(Math.abs(n.x) < 0.9){
            randVec.set(1,0,0);
            n.cross(randVec,t1);
        } else {
            randVec.set(0,1,0);
            n.cross(randVec,t1);
        }
        n.cross(t1,t2);
    } else {
        // The normal length is zero, make something up
        t1.set(1, 0, 0);
        t2.set(0, 1, 0);
    }
};

/**
 * Converts to a more readable format
 * @method toString
 * @return string
 */
Vec3.prototype.toString = function(){
    return this.x+","+this.y+","+this.z;
};

/**
 * Converts to an array
 * @method toArray
 * @return Array
 */
Vec3.prototype.toArray = function(){
    return [this.x, this.y, this.z];
};

/**
 * Copies value of source to this vector.
 * @method copy
 * @param {Vec3} source
 * @return {Vec3} this
 */
Vec3.prototype.copy = function(source){
    this.x = source.x;
    this.y = source.y;
    this.z = source.z;
    return this;
};


/**
 * Do a linear interpolation between two vectors
 * @method lerp
 * @param {Vec3} v
 * @param {Number} t A number between 0 and 1. 0 will make this function return u, and 1 will make it return v. Numbers in between will generate a vector in between them.
 * @param {Vec3} target
 */
Vec3.prototype.lerp = function(v,t,target){
    var x=this.x, y=this.y, z=this.z;
    target.x = x + (v.x-x)*t;
    target.y = y + (v.y-y)*t;
    target.z = z + (v.z-z)*t;
};

/**
 * Check if a vector equals is almost equal to another one.
 * @method almostEquals
 * @param {Vec3} v
 * @param {Number} precision
 * @return bool
 */
Vec3.prototype.almostEquals = function(v,precision){
    if(precision===undefined){
        precision = 1e-6;
    }
    if( Math.abs(this.x-v.x)>precision ||
        Math.abs(this.y-v.y)>precision ||
        Math.abs(this.z-v.z)>precision){
        return false;
    }
    return true;
};

/**
 * Check if a vector is almost zero
 * @method almostZero
 * @param {Number} precision
 */
Vec3.prototype.almostZero = function(precision){
    if(precision===undefined){
        precision = 1e-6;
    }
    if( Math.abs(this.x)>precision ||
        Math.abs(this.y)>precision ||
        Math.abs(this.z)>precision){
        return false;
    }
    return true;
};

var antip_neg = new Vec3();

/**
 * Check if the vector is anti-parallel to another vector.
 * @method isAntiparallelTo
 * @param  {Vec3}  v
 * @param  {Number}  precision Set to zero for exact comparisons
 * @return {Boolean}
 */
Vec3.prototype.isAntiparallelTo = function(v,precision){
    this.negate(antip_neg);
    return antip_neg.almostEquals(v,precision);
};

/**
 * Clone the vector
 * @method clone
 * @return {Vec3}
 */
Vec3.prototype.clone = function(){
    return new Vec3(this.x, this.y, this.z);
};
},{"./Mat3":28}],32:[function(_dereq_,module,exports){
module.exports = Body;

var EventTarget = _dereq_('../utils/EventTarget');
var Shape = _dereq_('../shapes/Shape');
var Vec3 = _dereq_('../math/Vec3');
var Mat3 = _dereq_('../math/Mat3');
var Quaternion = _dereq_('../math/Quaternion');
var Material = _dereq_('../material/Material');
var AABB = _dereq_('../collision/AABB');
var Box = _dereq_('../shapes/Box');

/**
 * Base class for all body types.
 * @class Body
 * @constructor
 * @extends EventTarget
 * @param {object} [options]
 * @param {Vec3} [options.position]
 * @param {Vec3} [options.velocity]
 * @param {Vec3} [options.angularVelocity]
 * @param {Quaternion} [options.quaternion]
 * @param {number} [options.mass]
 * @param {Material} [options.material]
 * @param {number} [options.type]
 * @param {number} [options.linearDamping=0.01]
 * @param {number} [options.angularDamping=0.01]
 * @param {boolean} [options.allowSleep=true]
 * @param {number} [options.sleepSpeedLimit=0.1]
 * @param {number} [options.sleepTimeLimit=1]
 * @param {number} [options.collisionFilterGroup=1]
 * @param {number} [options.collisionFilterMask=-1]
 * @param {boolean} [options.fixedRotation=false]
 * @param {Vec3} [options.linearFactor]
 * @param {Vec3} [options.angularFactor]
 * @param {Shape} [options.shape]
 * @example
 *     var body = new Body({
 *         mass: 1
 *     });
 *     var shape = new Sphere(1);
 *     body.addShape(shape);
 *     world.addBody(body);
 */
function Body(options){
    options = options || {};

    EventTarget.apply(this);

    this.id = Body.idCounter++;

    /**
     * Reference to the world the body is living in
     * @property world
     * @type {World}
     */
    this.world = null;

    /**
     * Callback function that is used BEFORE stepping the system. Use it to apply forces, for example. Inside the function, "this" will refer to this Body object.
     * @property preStep
     * @type {Function}
     * @deprecated Use World events instead
     */
    this.preStep = null;

    /**
     * Callback function that is used AFTER stepping the system. Inside the function, "this" will refer to this Body object.
     * @property postStep
     * @type {Function}
     * @deprecated Use World events instead
     */
    this.postStep = null;

    this.vlambda = new Vec3();

    /**
     * @property {Number} collisionFilterGroup
     */
    this.collisionFilterGroup = typeof(options.collisionFilterGroup) === 'number' ? options.collisionFilterGroup : 1;

    /**
     * @property {Number} collisionFilterMask
     */
    this.collisionFilterMask = typeof(options.collisionFilterMask) === 'number' ? options.collisionFilterMask : -1;

    /**
     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled.
     * @property {Number} collisionResponse
     */
	this.collisionResponse = true;

    /**
     * World space position of the body.
     * @property position
     * @type {Vec3}
     */
    this.position = new Vec3();

    /**
     * @property {Vec3} previousPosition
     */
    this.previousPosition = new Vec3();

    /**
     * Interpolated position of the body.
     * @property {Vec3} interpolatedPosition
     */
    this.interpolatedPosition = new Vec3();

    /**
     * Initial position of the body
     * @property initPosition
     * @type {Vec3}
     */
    this.initPosition = new Vec3();

    if(options.position){
        this.position.copy(options.position);
        this.previousPosition.copy(options.position);
        this.interpolatedPosition.copy(options.position);
        this.initPosition.copy(options.position);
    }

    /**
     * World space velocity of the body.
     * @property velocity
     * @type {Vec3}
     */
    this.velocity = new Vec3();

    if(options.velocity){
        this.velocity.copy(options.velocity);
    }

    /**
     * @property initVelocity
     * @type {Vec3}
     */
    this.initVelocity = new Vec3();

    /**
     * Linear force on the body in world space.
     * @property force
     * @type {Vec3}
     */
    this.force = new Vec3();

    var mass = typeof(options.mass) === 'number' ? options.mass : 0;

    /**
     * @property mass
     * @type {Number}
     * @default 0
     */
    this.mass = mass;

    /**
     * @property invMass
     * @type {Number}
     */
    this.invMass = mass > 0 ? 1.0 / mass : 0;

    /**
     * @property material
     * @type {Material}
     */
    this.material = options.material || null;

    /**
     * @property linearDamping
     * @type {Number}
     */
    this.linearDamping = typeof(options.linearDamping) === 'number' ? options.linearDamping : 0.01;

    /**
     * One of: Body.DYNAMIC, Body.STATIC and Body.KINEMATIC.
     * @property type
     * @type {Number}
     */
    this.type = (mass <= 0.0 ? Body.STATIC : Body.DYNAMIC);
    if(typeof(options.type) === typeof(Body.STATIC)){
        this.type = options.type;
    }

    /**
     * If true, the body will automatically fall to sleep.
     * @property allowSleep
     * @type {Boolean}
     * @default true
     */
    this.allowSleep = typeof(options.allowSleep) !== 'undefined' ? options.allowSleep : true;

    /**
     * Current sleep state.
     * @property sleepState
     * @type {Number}
     */
    this.sleepState = 0;

    /**
     * If the speed (the norm of the velocity) is smaller than this value, the body is considered sleepy.
     * @property sleepSpeedLimit
     * @type {Number}
     * @default 0.1
     */
    this.sleepSpeedLimit = typeof(options.sleepSpeedLimit) !== 'undefined' ? options.sleepSpeedLimit : 0.1;

    /**
     * If the body has been sleepy for this sleepTimeLimit seconds, it is considered sleeping.
     * @property sleepTimeLimit
     * @type {Number}
     * @default 1
     */
    this.sleepTimeLimit = typeof(options.sleepTimeLimit) !== 'undefined' ? options.sleepTimeLimit : 1;

    this.timeLastSleepy = 0;

    this._wakeUpAfterNarrowphase = false;

    /**
     * World space rotational force on the body, around center of mass.
     * @property {Vec3} torque
     */
    this.torque = new Vec3();

    /**
     * World space orientation of the body.
     * @property quaternion
     * @type {Quaternion}
     */
    this.quaternion = new Quaternion();

    /**
     * @property initQuaternion
     * @type {Quaternion}
     */
    this.initQuaternion = new Quaternion();

    /**
     * @property {Quaternion} previousQuaternion
     */
    this.previousQuaternion = new Quaternion();

    /**
     * Interpolated orientation of the body.
     * @property {Quaternion} interpolatedQuaternion
     */
    this.interpolatedQuaternion = new Quaternion();

    if(options.quaternion){
        this.quaternion.copy(options.quaternion);
        this.initQuaternion.copy(options.quaternion);
        this.previousQuaternion.copy(options.quaternion);
        this.interpolatedQuaternion.copy(options.quaternion);
    }

    /**
     * Angular velocity of the body, in world space. Think of the angular velocity as a vector, which the body rotates around. The length of this vector determines how fast (in radians per second) the body rotates.
     * @property angularVelocity
     * @type {Vec3}
     */
    this.angularVelocity = new Vec3();

    if(options.angularVelocity){
        this.angularVelocity.copy(options.angularVelocity);
    }

    /**
     * @property initAngularVelocity
     * @type {Vec3}
     */
    this.initAngularVelocity = new Vec3();

    /**
     * @property shapes
     * @type {array}
     */
    this.shapes = [];

    /**
     * Position of each Shape in the body, given in local Body space.
     * @property shapeOffsets
     * @type {array}
     */
    this.shapeOffsets = [];

    /**
     * Orientation of each Shape, given in local Body space.
     * @property shapeOrientations
     * @type {array}
     */
    this.shapeOrientations = [];

    /**
     * @property inertia
     * @type {Vec3}
     */
    this.inertia = new Vec3();

    /**
     * @property {Vec3} invInertia
     */
    this.invInertia = new Vec3();

    /**
     * @property {Mat3} invInertiaWorld
     */
    this.invInertiaWorld = new Mat3();

    this.invMassSolve = 0;

    /**
     * @property {Vec3} invInertiaSolve
     */
    this.invInertiaSolve = new Vec3();

    /**
     * @property {Mat3} invInertiaWorldSolve
     */
    this.invInertiaWorldSolve = new Mat3();

    /**
     * Set to true if you don't want the body to rotate. Make sure to run .updateMassProperties() after changing this.
     * @property {Boolean} fixedRotation
     * @default false
     */
    this.fixedRotation = typeof(options.fixedRotation) !== "undefined" ? options.fixedRotation : false;

    /**
     * @property {Number} angularDamping
     */
    this.angularDamping = typeof(options.angularDamping) !== 'undefined' ? options.angularDamping : 0.01;

    /**
     * Use this property to limit the motion along any world axis. (1,1,1) will allow motion along all axes while (0,0,0) allows none.
     * @property {Vec3} linearFactor
     */
    this.linearFactor = new Vec3(1,1,1);
    if(options.linearFactor){
        this.linearFactor.copy(options.linearFactor);
    }

    /**
     * Use this property to limit the rotational motion along any world axis. (1,1,1) will allow rotation along all axes while (0,0,0) allows none.
     * @property {Vec3} angularFactor
     */
    this.angularFactor = new Vec3(1,1,1);
    if(options.angularFactor){
        this.angularFactor.copy(options.angularFactor);
    }

    /**
     * World space bounding box of the body and its shapes.
     * @property aabb
     * @type {AABB}
     */
    this.aabb = new AABB();

    /**
     * Indicates if the AABB needs to be updated before use.
     * @property aabbNeedsUpdate
     * @type {Boolean}
     */
    this.aabbNeedsUpdate = true;

    /**
     * Total bounding radius of the Body including its shapes, relative to body.position.
     * @property boundingRadius
     * @type {Number}
     */
    this.boundingRadius = 0;

    this.wlambda = new Vec3();

    if(options.shape){
        this.addShape(options.shape);
    }

    this.updateMassProperties();
}
Body.prototype = new EventTarget();
Body.prototype.constructor = Body;

/**
 * Dispatched after two bodies collide. This event is dispatched on each
 * of the two bodies involved in the collision.
 * @event collide
 * @param {Body} body The body that was involved in the collision.
 * @param {ContactEquation} contact The details of the collision.
 */
Body.COLLIDE_EVENT_NAME = "collide";

/**
 * A dynamic body is fully simulated. Can be moved manually by the user, but normally they move according to forces. A dynamic body can collide with all body types. A dynamic body always has finite, non-zero mass.
 * @static
 * @property DYNAMIC
 * @type {Number}
 */
Body.DYNAMIC = 1;

/**
 * A static body does not move during simulation and behaves as if it has infinite mass. Static bodies can be moved manually by setting the position of the body. The velocity of a static body is always zero. Static bodies do not collide with other static or kinematic bodies.
 * @static
 * @property STATIC
 * @type {Number}
 */
Body.STATIC = 2;

/**
 * A kinematic body moves under simulation according to its velocity. They do not respond to forces. They can be moved manually, but normally a kinematic body is moved by setting its velocity. A kinematic body behaves as if it has infinite mass. Kinematic bodies do not collide with other static or kinematic bodies.
 * @static
 * @property KINEMATIC
 * @type {Number}
 */
Body.KINEMATIC = 4;



/**
 * @static
 * @property AWAKE
 * @type {number}
 */
Body.AWAKE = 0;

/**
 * @static
 * @property SLEEPY
 * @type {number}
 */
Body.SLEEPY = 1;

/**
 * @static
 * @property SLEEPING
 * @type {number}
 */
Body.SLEEPING = 2;

Body.idCounter = 0;

/**
 * Dispatched after a sleeping body has woken up.
 * @event wakeup
 */
Body.wakeupEvent = {
    type: "wakeup"
};

/**
 * Wake the body up.
 * @method wakeUp
 */
Body.prototype.wakeUp = function(){
    var s = this.sleepState;
    this.sleepState = 0;
    this._wakeUpAfterNarrowphase = false;
    if(s === Body.SLEEPING){
        this.dispatchEvent(Body.wakeupEvent);
    }
};

/**
 * Force body sleep
 * @method sleep
 */
Body.prototype.sleep = function(){
    this.sleepState = Body.SLEEPING;
    this.velocity.set(0,0,0);
    this.angularVelocity.set(0,0,0);
    this._wakeUpAfterNarrowphase = false;
};

/**
 * Dispatched after a body has gone in to the sleepy state.
 * @event sleepy
 */
Body.sleepyEvent = {
    type: "sleepy"
};

/**
 * Dispatched after a body has fallen asleep.
 * @event sleep
 */
Body.sleepEvent = {
    type: "sleep"
};

/**
 * Called every timestep to update internal sleep timer and change sleep state if needed.
 * @method sleepTick
 * @param {Number} time The world time in seconds
 */
Body.prototype.sleepTick = function(time){
    if(this.allowSleep){
        var sleepState = this.sleepState;
        var speedSquared = this.velocity.norm2() + this.angularVelocity.norm2();
        var speedLimitSquared = Math.pow(this.sleepSpeedLimit,2);
        if(sleepState===Body.AWAKE && speedSquared < speedLimitSquared){
            this.sleepState = Body.SLEEPY; // Sleepy
            this.timeLastSleepy = time;
            this.dispatchEvent(Body.sleepyEvent);
        } else if(sleepState===Body.SLEEPY && speedSquared > speedLimitSquared){
            this.wakeUp(); // Wake up
        } else if(sleepState===Body.SLEEPY && (time - this.timeLastSleepy ) > this.sleepTimeLimit){
            this.sleep(); // Sleeping
            this.dispatchEvent(Body.sleepEvent);
        }
    }
};

/**
 * If the body is sleeping, it should be immovable / have infinite mass during solve. We solve it by having a separate "solve mass".
 * @method updateSolveMassProperties
 */
Body.prototype.updateSolveMassProperties = function(){
    if(this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC){
        this.invMassSolve = 0;
        this.invInertiaSolve.setZero();
        this.invInertiaWorldSolve.setZero();
    } else {
        this.invMassSolve = this.invMass;
        this.invInertiaSolve.copy(this.invInertia);
        this.invInertiaWorldSolve.copy(this.invInertiaWorld);
    }
};

/**
 * Convert a world point to local body frame.
 * @method pointToLocalFrame
 * @param  {Vec3} worldPoint
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.pointToLocalFrame = function(worldPoint,result){
    var result = result || new Vec3();
    worldPoint.vsub(this.position,result);
    this.quaternion.conjugate().vmult(result,result);
    return result;
};

/**
 * Convert a world vector to local body frame.
 * @method vectorToLocalFrame
 * @param  {Vec3} worldPoint
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.vectorToLocalFrame = function(worldVector, result){
    var result = result || new Vec3();
    this.quaternion.conjugate().vmult(worldVector,result);
    return result;
};

/**
 * Convert a local body point to world frame.
 * @method pointToWorldFrame
 * @param  {Vec3} localPoint
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.pointToWorldFrame = function(localPoint,result){
    var result = result || new Vec3();
    this.quaternion.vmult(localPoint,result);
    result.vadd(this.position,result);
    return result;
};

/**
 * Convert a local body point to world frame.
 * @method vectorToWorldFrame
 * @param  {Vec3} localVector
 * @param  {Vec3} result
 * @return {Vec3}
 */
Body.prototype.vectorToWorldFrame = function(localVector, result){
    var result = result || new Vec3();
    this.quaternion.vmult(localVector, result);
    return result;
};

var tmpVec = new Vec3();
var tmpQuat = new Quaternion();

/**
 * Add a shape to the body with a local offset and orientation.
 * @method addShape
 * @param {Shape} shape
 * @param {Vec3} [_offset]
 * @param {Quaternion} [_orientation]
 * @return {Body} The body object, for chainability.
 */
Body.prototype.addShape = function(shape, _offset, _orientation){
    var offset = new Vec3();
    var orientation = new Quaternion();

    if(_offset){
        offset.copy(_offset);
    }
    if(_orientation){
        orientation.copy(_orientation);
    }

    this.shapes.push(shape);
    this.shapeOffsets.push(offset);
    this.shapeOrientations.push(orientation);
    this.updateMassProperties();
    this.updateBoundingRadius();

    this.aabbNeedsUpdate = true;

    shape.body = this;

    return this;
};

/**
 * Update the bounding radius of the body. Should be done if any of the shapes are changed.
 * @method updateBoundingRadius
 */
Body.prototype.updateBoundingRadius = function(){
    var shapes = this.shapes,
        shapeOffsets = this.shapeOffsets,
        N = shapes.length,
        radius = 0;

    for(var i=0; i!==N; i++){
        var shape = shapes[i];
        shape.updateBoundingSphereRadius();
        var offset = shapeOffsets[i].norm(),
            r = shape.boundingSphereRadius;
        if(offset + r > radius){
            radius = offset + r;
        }
    }

    this.boundingRadius = radius;
};

var computeAABB_shapeAABB = new AABB();

/**
 * Updates the .aabb
 * @method computeAABB
 * @todo rename to updateAABB()
 */
Body.prototype.computeAABB = function(){
    var shapes = this.shapes,
        shapeOffsets = this.shapeOffsets,
        shapeOrientations = this.shapeOrientations,
        N = shapes.length,
        offset = tmpVec,
        orientation = tmpQuat,
        bodyQuat = this.quaternion,
        aabb = this.aabb,
        shapeAABB = computeAABB_shapeAABB;

    for(var i=0; i!==N; i++){
        var shape = shapes[i];

        // Get shape world position
        bodyQuat.vmult(shapeOffsets[i], offset);
        offset.vadd(this.position, offset);

        // Get shape world quaternion
        shapeOrientations[i].mult(bodyQuat, orientation);

        // Get shape AABB
        shape.calculateWorldAABB(offset, orientation, shapeAABB.lowerBound, shapeAABB.upperBound);

        if(i === 0){
            aabb.copy(shapeAABB);
        } else {
            aabb.extend(shapeAABB);
        }
    }

    this.aabbNeedsUpdate = false;
};

var uiw_m1 = new Mat3(),
    uiw_m2 = new Mat3(),
    uiw_m3 = new Mat3();

/**
 * Update .inertiaWorld and .invInertiaWorld
 * @method updateInertiaWorld
 */
Body.prototype.updateInertiaWorld = function(force){
    var I = this.invInertia;
    if (I.x === I.y && I.y === I.z && !force) {
        // If inertia M = s*I, where I is identity and s a scalar, then
        //    R*M*R' = R*(s*I)*R' = s*R*I*R' = s*R*R' = s*I = M
        // where R is the rotation matrix.
        // In other words, we don't have to transform the inertia if all
        // inertia diagonal entries are equal.
    } else {
        var m1 = uiw_m1,
            m2 = uiw_m2,
            m3 = uiw_m3;
        m1.setRotationFromQuaternion(this.quaternion);
        m1.transpose(m2);
        m1.scale(I,m1);
        m1.mmult(m2,this.invInertiaWorld);
    }
};

/**
 * Apply force to a world point. This could for example be a point on the Body surface. Applying force this way will add to Body.force and Body.torque.
 * @method applyForce
 * @param  {Vec3} force The amount of force to add.
 * @param  {Vec3} relativePoint A point relative to the center of mass to apply the force on.
 */
var Body_applyForce_r = new Vec3();
var Body_applyForce_rotForce = new Vec3();
Body.prototype.applyForce = function(force,relativePoint){
    if(this.type !== Body.DYNAMIC){ // Needed?
        return;
    }

    // Compute produced rotational force
    var rotForce = Body_applyForce_rotForce;
    relativePoint.cross(force,rotForce);

    // Add linear force
    this.force.vadd(force,this.force);

    // Add rotational force
    this.torque.vadd(rotForce,this.torque);
};

/**
 * Apply force to a local point in the body.
 * @method applyLocalForce
 * @param  {Vec3} force The force vector to apply, defined locally in the body frame.
 * @param  {Vec3} localPoint A local point in the body to apply the force on.
 */
var Body_applyLocalForce_worldForce = new Vec3();
var Body_applyLocalForce_relativePointWorld = new Vec3();
Body.prototype.applyLocalForce = function(localForce, localPoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    var worldForce = Body_applyLocalForce_worldForce;
    var relativePointWorld = Body_applyLocalForce_relativePointWorld;

    // Transform the force vector to world space
    this.vectorToWorldFrame(localForce, worldForce);
    this.vectorToWorldFrame(localPoint, relativePointWorld);

    this.applyForce(worldForce, relativePointWorld);
};

/**
 * Apply impulse to a world point. This could for example be a point on the Body surface. An impulse is a force added to a body during a short period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity.
 * @method applyImpulse
 * @param  {Vec3} impulse The amount of impulse to add.
 * @param  {Vec3} relativePoint A point relative to the center of mass to apply the force on.
 */
var Body_applyImpulse_r = new Vec3();
var Body_applyImpulse_velo = new Vec3();
var Body_applyImpulse_rotVelo = new Vec3();
Body.prototype.applyImpulse = function(impulse, relativePoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    // Compute point position relative to the body center
    var r = relativePoint;

    // Compute produced central impulse velocity
    var velo = Body_applyImpulse_velo;
    velo.copy(impulse);
    velo.mult(this.invMass,velo);

    // Add linear impulse
    this.velocity.vadd(velo, this.velocity);

    // Compute produced rotational impulse velocity
    var rotVelo = Body_applyImpulse_rotVelo;
    r.cross(impulse,rotVelo);

    /*
    rotVelo.x *= this.invInertia.x;
    rotVelo.y *= this.invInertia.y;
    rotVelo.z *= this.invInertia.z;
    */
    this.invInertiaWorld.vmult(rotVelo,rotVelo);

    // Add rotational Impulse
    this.angularVelocity.vadd(rotVelo, this.angularVelocity);
};

/**
 * Apply locally-defined impulse to a local point in the body.
 * @method applyLocalImpulse
 * @param  {Vec3} force The force vector to apply, defined locally in the body frame.
 * @param  {Vec3} localPoint A local point in the body to apply the force on.
 */
var Body_applyLocalImpulse_worldImpulse = new Vec3();
var Body_applyLocalImpulse_relativePoint = new Vec3();
Body.prototype.applyLocalImpulse = function(localImpulse, localPoint){
    if(this.type !== Body.DYNAMIC){
        return;
    }

    var worldImpulse = Body_applyLocalImpulse_worldImpulse;
    var relativePointWorld = Body_applyLocalImpulse_relativePoint;

    // Transform the force vector to world space
    this.vectorToWorldFrame(localImpulse, worldImpulse);
    this.vectorToWorldFrame(localPoint, relativePointWorld);

    this.applyImpulse(worldImpulse, relativePointWorld);
};

var Body_updateMassProperties_halfExtents = new Vec3();

/**
 * Should be called whenever you change the body shape or mass.
 * @method updateMassProperties
 */
Body.prototype.updateMassProperties = function(){
    var halfExtents = Body_updateMassProperties_halfExtents;

    this.invMass = this.mass > 0 ? 1.0 / this.mass : 0;
    var I = this.inertia;
    var fixed = this.fixedRotation;

    // Approximate with AABB box
    this.computeAABB();
    halfExtents.set(
        (this.aabb.upperBound.x-this.aabb.lowerBound.x) / 2,
        (this.aabb.upperBound.y-this.aabb.lowerBound.y) / 2,
        (this.aabb.upperBound.z-this.aabb.lowerBound.z) / 2
    );
    Box.calculateInertia(halfExtents, this.mass, I);

    this.invInertia.set(
        I.x > 0 && !fixed ? 1.0 / I.x : 0,
        I.y > 0 && !fixed ? 1.0 / I.y : 0,
        I.z > 0 && !fixed ? 1.0 / I.z : 0
    );
    this.updateInertiaWorld(true);
};

/**
 * Get world velocity of a point in the body.
 * @method getVelocityAtWorldPoint
 * @param  {Vec3} worldPoint
 * @param  {Vec3} result
 * @return {Vec3} The result vector.
 */
Body.prototype.getVelocityAtWorldPoint = function(worldPoint, result){
    var r = new Vec3();
    worldPoint.vsub(this.position, r);
    this.angularVelocity.cross(r, result);
    this.velocity.vadd(result, result);
    return result;
};

var torque = new Vec3();
var invI_tau_dt = new Vec3();
var w = new Quaternion();
var wq = new Quaternion();

/**
 * Move the body forward in time.
 * @param {number} dt Time step
 * @param {boolean} quatNormalize Set to true to normalize the body quaternion
 * @param {boolean} quatNormalizeFast If the quaternion should be normalized using "fast" quaternion normalization
 */
Body.prototype.integrate = function(dt, quatNormalize, quatNormalizeFast){

    // Save previous position
    this.previousPosition.copy(this.position);
    this.previousQuaternion.copy(this.quaternion);

    if(!(this.type === Body.DYNAMIC || this.type === Body.KINEMATIC) || this.sleepState === Body.SLEEPING){ // Only for dynamic
        return;
    }

    var velo = this.velocity,
        angularVelo = this.angularVelocity,
        pos = this.position,
        force = this.force,
        torque = this.torque,
        quat = this.quaternion,
        invMass = this.invMass,
        invInertia = this.invInertiaWorld,
        linearFactor = this.linearFactor;

    var iMdt = invMass * dt;
    velo.x += force.x * iMdt * linearFactor.x;
    velo.y += force.y * iMdt * linearFactor.y;
    velo.z += force.z * iMdt * linearFactor.z;

    var e = invInertia.elements;
    var angularFactor = this.angularFactor;
    var tx = torque.x * angularFactor.x;
    var ty = torque.y * angularFactor.y;
    var tz = torque.z * angularFactor.z;
    angularVelo.x += dt * (e[0] * tx + e[1] * ty + e[2] * tz);
    angularVelo.y += dt * (e[3] * tx + e[4] * ty + e[5] * tz);
    angularVelo.z += dt * (e[6] * tx + e[7] * ty + e[8] * tz);

    // Use new velocity  - leap frog
    pos.x += velo.x * dt;
    pos.y += velo.y * dt;
    pos.z += velo.z * dt;

    quat.integrate(this.angularVelocity, dt, this.angularFactor, quat);

    if(quatNormalize){
        if(quatNormalizeFast){
            quat.normalizeFast();
        } else {
            quat.normalize();
        }
    }

    this.aabbNeedsUpdate = true;

    // Update world inertia
    this.updateInertiaWorld();
};

},{"../collision/AABB":3,"../material/Material":26,"../math/Mat3":28,"../math/Quaternion":29,"../math/Vec3":31,"../shapes/Box":38,"../shapes/Shape":44,"../utils/EventTarget":50}],33:[function(_dereq_,module,exports){
var Body = _dereq_('./Body');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var RaycastResult = _dereq_('../collision/RaycastResult');
var Ray = _dereq_('../collision/Ray');
var WheelInfo = _dereq_('../objects/WheelInfo');

module.exports = RaycastVehicle;

/**
 * Vehicle helper class that casts rays from the wheel positions towards the ground and applies forces.
 * @class RaycastVehicle
 * @constructor
 * @param {object} [options]
 * @param {Body} [options.chassisBody] The car chassis body.
 * @param {integer} [options.indexRightAxis] Axis to use for right. x=0, y=1, z=2
 * @param {integer} [options.indexLeftAxis]
 * @param {integer} [options.indexUpAxis]
 */
function RaycastVehicle(options){

    /**
     * @property {Body} chassisBody
     */
    this.chassisBody = options.chassisBody;

    /**
     * An array of WheelInfo objects.
     * @property {array} wheelInfos
     */
    this.wheelInfos = [];

    /**
     * Will be set to true if the car is sliding.
     * @property {boolean} sliding
     */
    this.sliding = false;

    /**
     * @property {World} world
     */
    this.world = null;

    /**
     * Index of the right axis, 0=x, 1=y, 2=z
     * @property {integer} indexRightAxis
     * @default 1
     */
    this.indexRightAxis = typeof(options.indexRightAxis) !== 'undefined' ? options.indexRightAxis : 1;

    /**
     * Index of the forward axis, 0=x, 1=y, 2=z
     * @property {integer} indexForwardAxis
     * @default 0
     */
    this.indexForwardAxis = typeof(options.indexForwardAxis) !== 'undefined' ? options.indexForwardAxis : 0;

    /**
     * Index of the up axis, 0=x, 1=y, 2=z
     * @property {integer} indexUpAxis
     * @default 2
     */
    this.indexUpAxis = typeof(options.indexUpAxis) !== 'undefined' ? options.indexUpAxis : 2;
}

var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();
var tmpVec3 = new Vec3();
var tmpVec4 = new Vec3();
var tmpVec5 = new Vec3();
var tmpVec6 = new Vec3();
var tmpRay = new Ray();

/**
 * Add a wheel. For information about the options, see WheelInfo.
 * @method addWheel
 * @param {object} [options]
 */
RaycastVehicle.prototype.addWheel = function(options){
    options = options || {};

    var info = new WheelInfo(options);
    var index = this.wheelInfos.length;
    this.wheelInfos.push(info);

    return index;
};

/**
 * Set the steering value of a wheel.
 * @method setSteeringValue
 * @param {number} value
 * @param {integer} wheelIndex
 */
RaycastVehicle.prototype.setSteeringValue = function(value, wheelIndex){
    var wheel = this.wheelInfos[wheelIndex];
    wheel.steering = value;
};

var torque = new Vec3();

/**
 * Set the wheel force to apply on one of the wheels each time step
 * @method applyEngineForce
 * @param  {number} value
 * @param  {integer} wheelIndex
 */
RaycastVehicle.prototype.applyEngineForce = function(value, wheelIndex){
    this.wheelInfos[wheelIndex].engineForce = value;
};

/**
 * Set the braking force of a wheel
 * @method setBrake
 * @param {number} brake
 * @param {integer} wheelIndex
 */
RaycastVehicle.prototype.setBrake = function(brake, wheelIndex){
    this.wheelInfos[wheelIndex].brake = brake;
};

/**
 * Add the vehicle including its constraints to the world.
 * @method addToWorld
 * @param {World} world
 */
RaycastVehicle.prototype.addToWorld = function(world){
    var constraints = this.constraints;
    world.addBody(this.chassisBody);
    var that = this;
    this.preStepCallback = function(){
        that.updateVehicle(world.dt);
    };
    world.addEventListener('preStep', this.preStepCallback);
    this.world = world;
};

/**
 * Get one of the wheel axles, world-oriented.
 * @private
 * @method getVehicleAxisWorld
 * @param  {integer} axisIndex
 * @param  {Vec3} result
 */
RaycastVehicle.prototype.getVehicleAxisWorld = function(axisIndex, result){
    result.set(
        axisIndex === 0 ? 1 : 0,
        axisIndex === 1 ? 1 : 0,
        axisIndex === 2 ? 1 : 0
    );
    this.chassisBody.vectorToWorldFrame(result, result);
};

RaycastVehicle.prototype.updateVehicle = function(timeStep){
    var wheelInfos = this.wheelInfos;
    var numWheels = wheelInfos.length;
    var chassisBody = this.chassisBody;

    for (var i = 0; i < numWheels; i++) {
        this.updateWheelTransform(i);
    }

    this.currentVehicleSpeedKmHour = 3.6 * chassisBody.velocity.norm();

    var forwardWorld = new Vec3();
    this.getVehicleAxisWorld(this.indexForwardAxis, forwardWorld);

    if (forwardWorld.dot(chassisBody.velocity) < 0){
        this.currentVehicleSpeedKmHour *= -1;
    }

    // simulate suspension
    for (var i = 0; i < numWheels; i++) {
        this.castRay(wheelInfos[i]);
    }

    this.updateSuspension(timeStep);

    var impulse = new Vec3();
    var relpos = new Vec3();
    for (var i = 0; i < numWheels; i++) {
        //apply suspension force
        var wheel = wheelInfos[i];
        var suspensionForce = wheel.suspensionForce;
        if (suspensionForce > wheel.maxSuspensionForce) {
            suspensionForce = wheel.maxSuspensionForce;
        }
        wheel.raycastResult.hitNormalWorld.scale(suspensionForce * timeStep, impulse);

        wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, relpos);
        chassisBody.applyImpulse(impulse, relpos);
    }

    this.updateFriction(timeStep);

    var hitNormalWorldScaledWithProj = new Vec3();
    var fwd  = new Vec3();
    var vel = new Vec3();
    for (i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];
        //var relpos = new Vec3();
        //wheel.chassisConnectionPointWorld.vsub(chassisBody.position, relpos);
        chassisBody.getVelocityAtWorldPoint(wheel.chassisConnectionPointWorld, vel);

        // Hack to get the rotation in the correct direction
        var m = 1;
        switch(this.indexUpAxis){
        case 1:
            m = -1;
            break;
        }

        if (wheel.isInContact) {

            this.getVehicleAxisWorld(this.indexForwardAxis, fwd);
            var proj = fwd.dot(wheel.raycastResult.hitNormalWorld);
            wheel.raycastResult.hitNormalWorld.scale(proj, hitNormalWorldScaledWithProj);

            fwd.vsub(hitNormalWorldScaledWithProj, fwd);

            var proj2 = fwd.dot(vel);
            wheel.deltaRotation = m * proj2 * timeStep / wheel.radius;
        }

        if((wheel.sliding || !wheel.isInContact) && wheel.engineForce !== 0 && wheel.useCustomSlidingRotationalSpeed){
            // Apply custom rotation when accelerating and sliding
            wheel.deltaRotation = (wheel.engineForce > 0 ? 1 : -1) * wheel.customSlidingRotationalSpeed * timeStep;
        }

        // Lock wheels
        if(Math.abs(wheel.brake) > Math.abs(wheel.engineForce)){
            wheel.deltaRotation = 0;
        }

        wheel.rotation += wheel.deltaRotation; // Use the old value
        wheel.deltaRotation *= 0.99; // damping of rotation when not in contact
    }
};

RaycastVehicle.prototype.updateSuspension = function(deltaTime) {
    var chassisBody = this.chassisBody;
    var chassisMass = chassisBody.mass;
    var wheelInfos = this.wheelInfos;
    var numWheels = wheelInfos.length;

    for (var w_it = 0; w_it < numWheels; w_it++){
        var wheel = wheelInfos[w_it];

        if (wheel.isInContact){
            var force;

            // Spring
            var susp_length = wheel.suspensionRestLength;
            var current_length = wheel.suspensionLength;
            var length_diff = (susp_length - current_length);

            force = wheel.suspensionStiffness * length_diff * wheel.clippedInvContactDotSuspension;

            // Damper
            var projected_rel_vel = wheel.suspensionRelativeVelocity;
            var susp_damping;
            if (projected_rel_vel < 0) {
                susp_damping = wheel.dampingCompression;
            } else {
                susp_damping = wheel.dampingRelaxation;
            }
            force -= susp_damping * projected_rel_vel;

            wheel.suspensionForce = force * chassisMass;
            if (wheel.suspensionForce < 0) {
                wheel.suspensionForce = 0;
            }
        } else {
            wheel.suspensionForce = 0;
        }
    }
};

/**
 * Remove the vehicle including its constraints from the world.
 * @method removeFromWorld
 * @param {World} world
 */
RaycastVehicle.prototype.removeFromWorld = function(world){
    var constraints = this.constraints;
    world.remove(this.chassisBody);
    world.removeEventListener('preStep', this.preStepCallback);
    this.world = null;
};

var castRay_rayvector = new Vec3();
var castRay_target = new Vec3();
RaycastVehicle.prototype.castRay = function(wheel) {
    var rayvector = castRay_rayvector;
    var target = castRay_target;

    this.updateWheelTransformWorld(wheel);
    var chassisBody = this.chassisBody;

    var depth = -1;

    var raylen = wheel.suspensionRestLength + wheel.radius;

    wheel.directionWorld.scale(raylen, rayvector);
    var source = wheel.chassisConnectionPointWorld;
    source.vadd(rayvector, target);
    var raycastResult = wheel.raycastResult;

    var param = 0;

    raycastResult.reset();
    // Turn off ray collision with the chassis temporarily
    var oldState = chassisBody.collisionResponse;
    chassisBody.collisionResponse = false;

    // Cast ray against world
    this.world.rayTest(source, target, raycastResult);
    chassisBody.collisionResponse = oldState;

    var object = raycastResult.body;

    wheel.raycastResult.groundObject = 0;

    if (object) {
        depth = raycastResult.distance;
        wheel.raycastResult.hitNormalWorld  = raycastResult.hitNormalWorld;
        wheel.isInContact = true;

        var hitDistance = raycastResult.distance;
        wheel.suspensionLength = hitDistance - wheel.radius;

        // clamp on max suspension travel
        var minSuspensionLength = wheel.suspensionRestLength - wheel.maxSuspensionTravel;
        var maxSuspensionLength = wheel.suspensionRestLength + wheel.maxSuspensionTravel;
        if (wheel.suspensionLength < minSuspensionLength) {
            wheel.suspensionLength = minSuspensionLength;
        }
        if (wheel.suspensionLength > maxSuspensionLength) {
            wheel.suspensionLength = maxSuspensionLength;
            wheel.raycastResult.reset();
        }

        var denominator = wheel.raycastResult.hitNormalWorld.dot(wheel.directionWorld);

        var chassis_velocity_at_contactPoint = new Vec3();
        chassisBody.getVelocityAtWorldPoint(wheel.raycastResult.hitPointWorld, chassis_velocity_at_contactPoint);

        var projVel = wheel.raycastResult.hitNormalWorld.dot( chassis_velocity_at_contactPoint );

        if (denominator >= -0.1) {
            wheel.suspensionRelativeVelocity = 0;
            wheel.clippedInvContactDotSuspension = 1 / 0.1;
        } else {
            var inv = -1 / denominator;
            wheel.suspensionRelativeVelocity = projVel * inv;
            wheel.clippedInvContactDotSuspension = inv;
        }

    } else {

        //put wheel info as in rest position
        wheel.suspensionLength = wheel.suspensionRestLength + 0 * wheel.maxSuspensionTravel;
        wheel.suspensionRelativeVelocity = 0.0;
        wheel.directionWorld.scale(-1, wheel.raycastResult.hitNormalWorld);
        wheel.clippedInvContactDotSuspension = 1.0;
    }

    return depth;
};

RaycastVehicle.prototype.updateWheelTransformWorld = function(wheel){
    wheel.isInContact = false;
    var chassisBody = this.chassisBody;
    chassisBody.pointToWorldFrame(wheel.chassisConnectionPointLocal, wheel.chassisConnectionPointWorld);
    chassisBody.vectorToWorldFrame(wheel.directionLocal, wheel.directionWorld);
    chassisBody.vectorToWorldFrame(wheel.axleLocal, wheel.axleWorld);
};


/**
 * Update one of the wheel transform.
 * Note when rendering wheels: during each step, wheel transforms are updated BEFORE the chassis; ie. their position becomes invalid after the step. Thus when you render wheels, you must update wheel transforms before rendering them. See raycastVehicle demo for an example.
 * @method updateWheelTransform
 * @param {integer} wheelIndex The wheel index to update.
 */
RaycastVehicle.prototype.updateWheelTransform = function(wheelIndex){
    var up = tmpVec4;
    var right = tmpVec5;
    var fwd = tmpVec6;

    var wheel = this.wheelInfos[wheelIndex];
    this.updateWheelTransformWorld(wheel);

    wheel.directionLocal.scale(-1, up);
    right.copy(wheel.axleLocal);
    up.cross(right, fwd);
    fwd.normalize();
    right.normalize();

    // Rotate around steering over the wheelAxle
    var steering = wheel.steering;
    var steeringOrn = new Quaternion();
    steeringOrn.setFromAxisAngle(up, steering);

    var rotatingOrn = new Quaternion();
    rotatingOrn.setFromAxisAngle(right, wheel.rotation);

    // World rotation of the wheel
    var q = wheel.worldTransform.quaternion;
    this.chassisBody.quaternion.mult(steeringOrn, q);
    q.mult(rotatingOrn, q);

    q.normalize();

    // world position of the wheel
    var p = wheel.worldTransform.position;
    p.copy(wheel.directionWorld);
    p.scale(wheel.suspensionLength, p);
    p.vadd(wheel.chassisConnectionPointWorld, p);
};

var directions = [
    new Vec3(1, 0, 0),
    new Vec3(0, 1, 0),
    new Vec3(0, 0, 1)
];

/**
 * Get the world transform of one of the wheels
 * @method getWheelTransformWorld
 * @param  {integer} wheelIndex
 * @return {Transform}
 */
RaycastVehicle.prototype.getWheelTransformWorld = function(wheelIndex) {
    return this.wheelInfos[wheelIndex].worldTransform;
};


var updateFriction_surfNormalWS_scaled_proj = new Vec3();
var updateFriction_axle = [];
var updateFriction_forwardWS = [];
var sideFrictionStiffness2 = 1;
RaycastVehicle.prototype.updateFriction = function(timeStep) {
    var surfNormalWS_scaled_proj = updateFriction_surfNormalWS_scaled_proj;

    //calculate the impulse, so that the wheels don't move sidewards
    var wheelInfos = this.wheelInfos;
    var numWheels = wheelInfos.length;
    var chassisBody = this.chassisBody;
    var forwardWS = updateFriction_forwardWS;
    var axle = updateFriction_axle;

    var numWheelsOnGround = 0;

    for (var i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];

        var groundObject = wheel.raycastResult.body;
        if (groundObject){
            numWheelsOnGround++;
        }

        wheel.sideImpulse = 0;
        wheel.forwardImpulse = 0;
        if(!forwardWS[i]){
            forwardWS[i] = new Vec3();
        }
        if(!axle[i]){
            axle[i] = new Vec3();
        }
    }

    for (var i = 0; i < numWheels; i++){
        var wheel = wheelInfos[i];

        var groundObject = wheel.raycastResult.body;

        if (groundObject) {
            var axlei = axle[i];
            var wheelTrans = this.getWheelTransformWorld(i);

            // Get world axle
            wheelTrans.vectorToWorldFrame(directions[this.indexRightAxis], axlei);

            var surfNormalWS = wheel.raycastResult.hitNormalWorld;
            var proj = axlei.dot(surfNormalWS);
            surfNormalWS.scale(proj, surfNormalWS_scaled_proj);
            axlei.vsub(surfNormalWS_scaled_proj, axlei);
            axlei.normalize();

            surfNormalWS.cross(axlei, forwardWS[i]);
            forwardWS[i].normalize();

            wheel.sideImpulse = resolveSingleBilateral(
                chassisBody,
                wheel.raycastResult.hitPointWorld,
                groundObject,
                wheel.raycastResult.hitPointWorld,
                axlei
            );

            wheel.sideImpulse *= sideFrictionStiffness2;
        }
    }

    var sideFactor = 1;
    var fwdFactor = 0.5;

    this.sliding = false;
    for (var i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];
        var groundObject = wheel.raycastResult.body;

        var rollingFriction = 0;

        wheel.slipInfo = 1;
        if (groundObject) {
            var defaultRollingFrictionImpulse = 0;
            var maxImpulse = wheel.brake ? wheel.brake : defaultRollingFrictionImpulse;

            // btWheelContactPoint contactPt(chassisBody,groundObject,wheelInfraycastInfo.hitPointWorld,forwardWS[wheel],maxImpulse);
            // rollingFriction = calcRollingFriction(contactPt);
            rollingFriction = calcRollingFriction(chassisBody, groundObject, wheel.raycastResult.hitPointWorld, forwardWS[i], maxImpulse);

            rollingFriction += wheel.engineForce * timeStep;

            // rollingFriction = 0;
            var factor = maxImpulse / rollingFriction;
            wheel.slipInfo *= factor;
        }

        //switch between active rolling (throttle), braking and non-active rolling friction (nthrottle/break)

        wheel.forwardImpulse = 0;
        wheel.skidInfo = 1;

        if (groundObject) {
            wheel.skidInfo = 1;

            var maximp = wheel.suspensionForce * timeStep * wheel.frictionSlip;
            var maximpSide = maximp;

            var maximpSquared = maximp * maximpSide;

            wheel.forwardImpulse = rollingFriction;//wheelInfo.engineForce* timeStep;

            var x = wheel.forwardImpulse * fwdFactor;
            var y = wheel.sideImpulse * sideFactor;

            var impulseSquared = x * x + y * y;

            wheel.sliding = false;
            if (impulseSquared > maximpSquared) {
                this.sliding = true;
                wheel.sliding = true;

                var factor = maximp / Math.sqrt(impulseSquared);

                wheel.skidInfo *= factor;
            }
        }
    }

    if (this.sliding) {
        for (var i = 0; i < numWheels; i++) {
            var wheel = wheelInfos[i];
            if (wheel.sideImpulse !== 0) {
                if (wheel.skidInfo < 1){
                    wheel.forwardImpulse *= wheel.skidInfo;
                    wheel.sideImpulse *= wheel.skidInfo;
                }
            }
        }
    }

    // apply the impulses
    for (var i = 0; i < numWheels; i++) {
        var wheel = wheelInfos[i];

        var rel_pos = new Vec3();
        wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, rel_pos);
        // cannons applyimpulse is using world coord for the position
        //rel_pos.copy(wheel.raycastResult.hitPointWorld);

        if (wheel.forwardImpulse !== 0) {
            var impulse = new Vec3();
            forwardWS[i].scale(wheel.forwardImpulse, impulse);
            chassisBody.applyImpulse(impulse, rel_pos);
        }

        if (wheel.sideImpulse !== 0){
            var groundObject = wheel.raycastResult.body;

            var rel_pos2 = new Vec3();
            wheel.raycastResult.hitPointWorld.vsub(groundObject.position, rel_pos2);
            //rel_pos2.copy(wheel.raycastResult.hitPointWorld);
            var sideImp = new Vec3();
            axle[i].scale(wheel.sideImpulse, sideImp);

            // Scale the relative position in the up direction with rollInfluence.
            // If rollInfluence is 1, the impulse will be applied on the hitPoint (easy to roll over), if it is zero it will be applied in the same plane as the center of mass (not easy to roll over).
            chassisBody.vectorToLocalFrame(rel_pos, rel_pos);
            rel_pos['xyz'[this.indexUpAxis]] *= wheel.rollInfluence;
            chassisBody.vectorToWorldFrame(rel_pos, rel_pos);
            chassisBody.applyImpulse(sideImp, rel_pos);

            //apply friction impulse on the ground
            sideImp.scale(-1, sideImp);
            groundObject.applyImpulse(sideImp, rel_pos2);
        }
    }
};

var calcRollingFriction_vel1 = new Vec3();
var calcRollingFriction_vel2 = new Vec3();
var calcRollingFriction_vel = new Vec3();

function calcRollingFriction(body0, body1, frictionPosWorld, frictionDirectionWorld, maxImpulse) {
    var j1 = 0;
    var contactPosWorld = frictionPosWorld;

    // var rel_pos1 = new Vec3();
    // var rel_pos2 = new Vec3();
    var vel1 = calcRollingFriction_vel1;
    var vel2 = calcRollingFriction_vel2;
    var vel = calcRollingFriction_vel;
    // contactPosWorld.vsub(body0.position, rel_pos1);
    // contactPosWorld.vsub(body1.position, rel_pos2);

    body0.getVelocityAtWorldPoint(contactPosWorld, vel1);
    body1.getVelocityAtWorldPoint(contactPosWorld, vel2);
    vel1.vsub(vel2, vel);

    var vrel = frictionDirectionWorld.dot(vel);

    var denom0 = computeImpulseDenominator(body0, frictionPosWorld, frictionDirectionWorld);
    var denom1 = computeImpulseDenominator(body1, frictionPosWorld, frictionDirectionWorld);
    var relaxation = 1;
    var jacDiagABInv = relaxation / (denom0 + denom1);

    // calculate j that moves us to zero relative velocity
    j1 = -vrel * jacDiagABInv;

    if (maxImpulse < j1) {
        j1 = maxImpulse;
    }
    if (j1 < -maxImpulse) {
        j1 = -maxImpulse;
    }

    return j1;
}

var computeImpulseDenominator_r0 = new Vec3();
var computeImpulseDenominator_c0 = new Vec3();
var computeImpulseDenominator_vec = new Vec3();
var computeImpulseDenominator_m = new Vec3();
function computeImpulseDenominator(body, pos, normal) {
    var r0 = computeImpulseDenominator_r0;
    var c0 = computeImpulseDenominator_c0;
    var vec = computeImpulseDenominator_vec;
    var m = computeImpulseDenominator_m;

    pos.vsub(body.position, r0);
    r0.cross(normal, c0);
    body.invInertiaWorld.vmult(c0, m);
    m.cross(r0, vec);

    return body.invMass + normal.dot(vec);
}


var resolveSingleBilateral_vel1 = new Vec3();
var resolveSingleBilateral_vel2 = new Vec3();
var resolveSingleBilateral_vel = new Vec3();

//bilateral constraint between two dynamic objects
function resolveSingleBilateral(body1, pos1, body2, pos2, normal, impulse){
    var normalLenSqr = normal.norm2();
    if (normalLenSqr > 1.1){
        return 0; // no impulse
    }
    // var rel_pos1 = new Vec3();
    // var rel_pos2 = new Vec3();
    // pos1.vsub(body1.position, rel_pos1);
    // pos2.vsub(body2.position, rel_pos2);

    var vel1 = resolveSingleBilateral_vel1;
    var vel2 = resolveSingleBilateral_vel2;
    var vel = resolveSingleBilateral_vel;
    body1.getVelocityAtWorldPoint(pos1, vel1);
    body2.getVelocityAtWorldPoint(pos2, vel2);

    vel1.vsub(vel2, vel);

    var rel_vel = normal.dot(vel);

    var contactDamping = 0.2;
    var massTerm = 1 / (body1.invMass + body2.invMass);
    var impulse = - contactDamping * rel_vel * massTerm;

    return impulse;
}
},{"../collision/Ray":10,"../collision/RaycastResult":11,"../math/Quaternion":29,"../math/Vec3":31,"../objects/WheelInfo":37,"./Body":32}],34:[function(_dereq_,module,exports){
var Body = _dereq_('./Body');
var Sphere = _dereq_('../shapes/Sphere');
var Box = _dereq_('../shapes/Box');
var Vec3 = _dereq_('../math/Vec3');
var HingeConstraint = _dereq_('../constraints/HingeConstraint');

module.exports = RigidVehicle;

/**
 * Simple vehicle helper class with spherical rigid body wheels.
 * @class RigidVehicle
 * @constructor
 * @param {Body} [options.chassisBody]
 */
function RigidVehicle(options){
    this.wheelBodies = [];

    /**
     * @property coordinateSystem
     * @type {Vec3}
     */
    this.coordinateSystem = typeof(options.coordinateSystem)==='undefined' ? new Vec3(1, 2, 3) : options.coordinateSystem.clone();

    /**
     * @property {Body} chassisBody
     */
    this.chassisBody = options.chassisBody;

    if(!this.chassisBody){
        // No chassis body given. Create it!
        var chassisShape = new Box(new Vec3(5, 2, 0.5));
        this.chassisBody = new Body(1, chassisShape);
    }

    /**
     * @property constraints
     * @type {Array}
     */
    this.constraints = [];

    this.wheelAxes = [];
    this.wheelForces = [];
}

/**
 * Add a wheel
 * @method addWheel
 * @param {object} options
 * @param {boolean} [options.isFrontWheel]
 * @param {Vec3} [options.position] Position of the wheel, locally in the chassis body.
 * @param {Vec3} [options.direction] Slide direction of the wheel along the suspension.
 * @param {Vec3} [options.axis] Axis of rotation of the wheel, locally defined in the chassis.
 * @param {Body} [options.body] The wheel body.
 */
RigidVehicle.prototype.addWheel = function(options){
    options = options || {};
    var wheelBody = options.body;
    if(!wheelBody){
        wheelBody =  new Body(1, new Sphere(1.2));
    }
    this.wheelBodies.push(wheelBody);
    this.wheelForces.push(0);

    // Position constrain wheels
    var zero = new Vec3();
    var position = typeof(options.position) !== 'undefined' ? options.position.clone() : new Vec3();

    // Set position locally to the chassis
    var worldPosition = new Vec3();
    this.chassisBody.pointToWorldFrame(position, worldPosition);
    wheelBody.position.set(worldPosition.x, worldPosition.y, worldPosition.z);

    // Constrain wheel
    var axis = typeof(options.axis) !== 'undefined' ? options.axis.clone() : new Vec3(0, 1, 0);
    this.wheelAxes.push(axis);

    var hingeConstraint = new HingeConstraint(this.chassisBody, wheelBody, {
        pivotA: position,
        axisA: axis,
        pivotB: Vec3.ZERO,
        axisB: axis,
        collideConnected: false
    });
    this.constraints.push(hingeConstraint);

    return this.wheelBodies.length - 1;
};

/**
 * Set the steering value of a wheel.
 * @method setSteeringValue
 * @param {number} value
 * @param {integer} wheelIndex
 * @todo check coordinateSystem
 */
RigidVehicle.prototype.setSteeringValue = function(value, wheelIndex){
    // Set angle of the hinge axis
    var axis = this.wheelAxes[wheelIndex];

    var c = Math.cos(value),
        s = Math.sin(value),
        x = axis.x,
        y = axis.y;
    this.constraints[wheelIndex].axisA.set(
        c*x -s*y,
        s*x +c*y,
        0
    );
};

/**
 * Set the target rotational speed of the hinge constraint.
 * @method setMotorSpeed
 * @param {number} value
 * @param {integer} wheelIndex
 */
RigidVehicle.prototype.setMotorSpeed = function(value, wheelIndex){
    var hingeConstraint = this.constraints[wheelIndex];
    hingeConstraint.enableMotor();
    hingeConstraint.motorTargetVelocity = value;
};

/**
 * Set the target rotational speed of the hinge constraint.
 * @method disableMotor
 * @param {number} value
 * @param {integer} wheelIndex
 */
RigidVehicle.prototype.disableMotor = function(wheelIndex){
    var hingeConstraint = this.constraints[wheelIndex];
    hingeConstraint.disableMotor();
};

var torque = new Vec3();

/**
 * Set the wheel force to apply on one of the wheels each time step
 * @method setWheelForce
 * @param  {number} value
 * @param  {integer} wheelIndex
 */
RigidVehicle.prototype.setWheelForce = function(value, wheelIndex){
    this.wheelForces[wheelIndex] = value;
};

/**
 * Apply a torque on one of the wheels.
 * @method applyWheelForce
 * @param  {number} value
 * @param  {integer} wheelIndex
 */
RigidVehicle.prototype.applyWheelForce = function(value, wheelIndex){
    var axis = this.wheelAxes[wheelIndex];
    var wheelBody = this.wheelBodies[wheelIndex];
    var bodyTorque = wheelBody.torque;

    axis.scale(value, torque);
    wheelBody.vectorToWorldFrame(torque, torque);
    bodyTorque.vadd(torque, bodyTorque);
};

/**
 * Add the vehicle including its constraints to the world.
 * @method addToWorld
 * @param {World} world
 */
RigidVehicle.prototype.addToWorld = function(world){
    var constraints = this.constraints;
    var bodies = this.wheelBodies.concat([this.chassisBody]);

    for (var i = 0; i < bodies.length; i++) {
        world.addBody(bodies[i]);
    }

    for (var i = 0; i < constraints.length; i++) {
        world.addConstraint(constraints[i]);
    }

    world.addEventListener('preStep', this._update.bind(this));
};

RigidVehicle.prototype._update = function(){
    var wheelForces = this.wheelForces;
    for (var i = 0; i < wheelForces.length; i++) {
        this.applyWheelForce(wheelForces[i], i);
    }
};

/**
 * Remove the vehicle including its constraints from the world.
 * @method removeFromWorld
 * @param {World} world
 */
RigidVehicle.prototype.removeFromWorld = function(world){
    var constraints = this.constraints;
    var bodies = this.wheelBodies.concat([this.chassisBody]);

    for (var i = 0; i < bodies.length; i++) {
        world.remove(bodies[i]);
    }

    for (var i = 0; i < constraints.length; i++) {
        world.removeConstraint(constraints[i]);
    }
};

var worldAxis = new Vec3();

/**
 * Get current rotational velocity of a wheel
 * @method getWheelSpeed
 * @param {integer} wheelIndex
 */
RigidVehicle.prototype.getWheelSpeed = function(wheelIndex){
    var axis = this.wheelAxes[wheelIndex];
    var wheelBody = this.wheelBodies[wheelIndex];
    var w = wheelBody.angularVelocity;
    this.chassisBody.vectorToWorldFrame(axis, worldAxis);
    return w.dot(worldAxis);
};

},{"../constraints/HingeConstraint":16,"../math/Vec3":31,"../shapes/Box":38,"../shapes/Sphere":45,"./Body":32}],35:[function(_dereq_,module,exports){
module.exports = SPHSystem;

var Shape = _dereq_('../shapes/Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Particle = _dereq_('../shapes/Particle');
var Body = _dereq_('../objects/Body');
var Material = _dereq_('../material/Material');

/**
 * Smoothed-particle hydrodynamics system
 * @class SPHSystem
 * @constructor
 */
function SPHSystem(){
    this.particles = [];
	
    /**
     * Density of the system (kg/m3).
     * @property {number} density
     */
    this.density = 1;
	
    /**
     * Distance below which two particles are considered to be neighbors.
     * It should be adjusted so there are about 15-20 neighbor particles within this radius.
     * @property {number} smoothingRadius
     */
    this.smoothingRadius = 1;
    this.speedOfSound = 1;
	
    /**
     * Viscosity of the system.
     * @property {number} viscosity
     */
    this.viscosity = 0.01;
    this.eps = 0.000001;

    // Stuff Computed per particle
    this.pressures = [];
    this.densities = [];
    this.neighbors = [];
}

/**
 * Add a particle to the system.
 * @method add
 * @param {Body} particle
 */
SPHSystem.prototype.add = function(particle){
    this.particles.push(particle);
    if(this.neighbors.length < this.particles.length){
        this.neighbors.push([]);
    }
};

/**
 * Remove a particle from the system.
 * @method remove
 * @param {Body} particle
 */
SPHSystem.prototype.remove = function(particle){
    var idx = this.particles.indexOf(particle);
    if(idx !== -1){
        this.particles.splice(idx,1);
        if(this.neighbors.length > this.particles.length){
            this.neighbors.pop();
        }
    }
};

/**
 * Get neighbors within smoothing volume, save in the array neighbors
 * @method getNeighbors
 * @param {Body} particle
 * @param {Array} neighbors
 */
var SPHSystem_getNeighbors_dist = new Vec3();
SPHSystem.prototype.getNeighbors = function(particle,neighbors){
    var N = this.particles.length,
        id = particle.id,
        R2 = this.smoothingRadius * this.smoothingRadius,
        dist = SPHSystem_getNeighbors_dist;
    for(var i=0; i!==N; i++){
        var p = this.particles[i];
        p.position.vsub(particle.position,dist);
        if(id!==p.id && dist.norm2() < R2){
            neighbors.push(p);
        }
    }
};

// Temp vectors for calculation
var SPHSystem_update_dist = new Vec3(),
    SPHSystem_update_a_pressure = new Vec3(),
    SPHSystem_update_a_visc = new Vec3(),
    SPHSystem_update_gradW = new Vec3(),
    SPHSystem_update_r_vec = new Vec3(),
    SPHSystem_update_u = new Vec3(); // Relative velocity
SPHSystem.prototype.update = function(){
    var N = this.particles.length,
        dist = SPHSystem_update_dist,
        cs = this.speedOfSound,
        eps = this.eps;

    for(var i=0; i!==N; i++){
        var p = this.particles[i]; // Current particle
        var neighbors = this.neighbors[i];

        // Get neighbors
        neighbors.length = 0;
        this.getNeighbors(p,neighbors);
        neighbors.push(this.particles[i]); // Add current too
        var numNeighbors = neighbors.length;

        // Accumulate density for the particle
        var sum = 0.0;
        for(var j=0; j!==numNeighbors; j++){

            //printf("Current particle has position %f %f %f\n",objects[id].pos.x(),objects[id].pos.y(),objects[id].pos.z());
            p.position.vsub(neighbors[j].position, dist);
            var len = dist.norm();

            var weight = this.w(len);
            sum += neighbors[j].mass * weight;
        }

        // Save
        this.densities[i] = sum;
        this.pressures[i] = cs * cs * (this.densities[i] - this.density);
    }

    // Add forces

    // Sum to these accelerations
    var a_pressure= SPHSystem_update_a_pressure;
    var a_visc =    SPHSystem_update_a_visc;
    var gradW =     SPHSystem_update_gradW;
    var r_vec =     SPHSystem_update_r_vec;
    var u =         SPHSystem_update_u;

    for(var i=0; i!==N; i++){

        var particle = this.particles[i];

        a_pressure.set(0,0,0);
        a_visc.set(0,0,0);

        // Init vars
        var Pij;
        var nabla;
        var Vij;

        // Sum up for all other neighbors
        var neighbors = this.neighbors[i];
        var numNeighbors = neighbors.length;

        //printf("Neighbors: ");
        for(var j=0; j!==numNeighbors; j++){

            var neighbor = neighbors[j];
            //printf("%d ",nj);

            // Get r once for all..
            particle.position.vsub(neighbor.position,r_vec);
            var r = r_vec.norm();

            // Pressure contribution
            Pij = -neighbor.mass * (this.pressures[i] / (this.densities[i]*this.densities[i] + eps) + this.pressures[j] / (this.densities[j]*this.densities[j] + eps));
            this.gradw(r_vec, gradW);
            // Add to pressure acceleration
            gradW.mult(Pij , gradW);
            a_pressure.vadd(gradW, a_pressure);

            // Viscosity contribution
            neighbor.velocity.vsub(particle.velocity, u);
            u.mult( 1.0 / (0.0001+this.densities[i] * this.densities[j]) * this.viscosity * neighbor.mass , u );
            nabla = this.nablaw(r);
            u.mult(nabla,u);
            // Add to viscosity acceleration
            a_visc.vadd( u, a_visc );
        }

        // Calculate force
        a_visc.mult(particle.mass, a_visc);
        a_pressure.mult(particle.mass, a_pressure);

        // Add force to particles
        particle.force.vadd(a_visc, particle.force);
        particle.force.vadd(a_pressure, particle.force);
    }
};

// Calculate the weight using the W(r) weightfunction
SPHSystem.prototype.w = function(r){
    // 315
    var h = this.smoothingRadius;
    return 315.0/(64.0*Math.PI*Math.pow(h,9)) * Math.pow(h*h-r*r,3);
};

// calculate gradient of the weight function
SPHSystem.prototype.gradw = function(rVec,resultVec){
    var r = rVec.norm(),
        h = this.smoothingRadius;
    rVec.mult(945.0/(32.0*Math.PI*Math.pow(h,9)) * Math.pow((h*h-r*r),2) , resultVec);
};

// Calculate nabla(W)
SPHSystem.prototype.nablaw = function(r){
    var h = this.smoothingRadius;
    var nabla = 945.0/(32.0*Math.PI*Math.pow(h,9)) * (h*h-r*r)*(7*r*r - 3*h*h);
    return nabla;
};

},{"../material/Material":26,"../math/Quaternion":29,"../math/Vec3":31,"../objects/Body":32,"../shapes/Particle":42,"../shapes/Shape":44}],36:[function(_dereq_,module,exports){
var Vec3 = _dereq_('../math/Vec3');

module.exports = Spring;

/**
 * A spring, connecting two bodies.
 *
 * @class Spring
 * @constructor
 * @param {Body} bodyA
 * @param {Body} bodyB
 * @param {Object} [options]
 * @param {number} [options.restLength]   A number > 0. Default: 1
 * @param {number} [options.stiffness]    A number >= 0. Default: 100
 * @param {number} [options.damping]      A number >= 0. Default: 1
 * @param {Vec3}  [options.worldAnchorA] Where to hook the spring to body A, in world coordinates.
 * @param {Vec3}  [options.worldAnchorB]
 * @param {Vec3}  [options.localAnchorA] Where to hook the spring to body A, in local body coordinates.
 * @param {Vec3}  [options.localAnchorB]
 */
function Spring(bodyA,bodyB,options){
    options = options || {};

    /**
     * Rest length of the spring.
     * @property restLength
     * @type {number}
     */
    this.restLength = typeof(options.restLength) === "number" ? options.restLength : 1;

    /**
     * Stiffness of the spring.
     * @property stiffness
     * @type {number}
     */
    this.stiffness = options.stiffness || 100;

    /**
     * Damping of the spring.
     * @property damping
     * @type {number}
     */
    this.damping = options.damping || 1;

    /**
     * First connected body.
     * @property bodyA
     * @type {Body}
     */
    this.bodyA = bodyA;

    /**
     * Second connected body.
     * @property bodyB
     * @type {Body}
     */
    this.bodyB = bodyB;

    /**
     * Anchor for bodyA in local bodyA coordinates.
     * @property localAnchorA
     * @type {Vec3}
     */
    this.localAnchorA = new Vec3();

    /**
     * Anchor for bodyB in local bodyB coordinates.
     * @property localAnchorB
     * @type {Vec3}
     */
    this.localAnchorB = new Vec3();

    if(options.localAnchorA){
        this.localAnchorA.copy(options.localAnchorA);
    }
    if(options.localAnchorB){
        this.localAnchorB.copy(options.localAnchorB);
    }
    if(options.worldAnchorA){
        this.setWorldAnchorA(options.worldAnchorA);
    }
    if(options.worldAnchorB){
        this.setWorldAnchorB(options.worldAnchorB);
    }
}

/**
 * Set the anchor point on body A, using world coordinates.
 * @method setWorldAnchorA
 * @param {Vec3} worldAnchorA
 */
Spring.prototype.setWorldAnchorA = function(worldAnchorA){
    this.bodyA.pointToLocalFrame(worldAnchorA,this.localAnchorA);
};

/**
 * Set the anchor point on body B, using world coordinates.
 * @method setWorldAnchorB
 * @param {Vec3} worldAnchorB
 */
Spring.prototype.setWorldAnchorB = function(worldAnchorB){
    this.bodyB.pointToLocalFrame(worldAnchorB,this.localAnchorB);
};

/**
 * Get the anchor point on body A, in world coordinates.
 * @method getWorldAnchorA
 * @param {Vec3} result The vector to store the result in.
 */
Spring.prototype.getWorldAnchorA = function(result){
    this.bodyA.pointToWorldFrame(this.localAnchorA,result);
};

/**
 * Get the anchor point on body B, in world coordinates.
 * @method getWorldAnchorB
 * @param {Vec3} result The vector to store the result in.
 */
Spring.prototype.getWorldAnchorB = function(result){
    this.bodyB.pointToWorldFrame(this.localAnchorB,result);
};

var applyForce_r =              new Vec3(),
    applyForce_r_unit =         new Vec3(),
    applyForce_u =              new Vec3(),
    applyForce_f =              new Vec3(),
    applyForce_worldAnchorA =   new Vec3(),
    applyForce_worldAnchorB =   new Vec3(),
    applyForce_ri =             new Vec3(),
    applyForce_rj =             new Vec3(),
    applyForce_ri_x_f =         new Vec3(),
    applyForce_rj_x_f =         new Vec3(),
    applyForce_tmp =            new Vec3();

/**
 * Apply the spring force to the connected bodies.
 * @method applyForce
 */
Spring.prototype.applyForce = function(){
    var k = this.stiffness,
        d = this.damping,
        l = this.restLength,
        bodyA = this.bodyA,
        bodyB = this.bodyB,
        r = applyForce_r,
        r_unit = applyForce_r_unit,
        u = applyForce_u,
        f = applyForce_f,
        tmp = applyForce_tmp;

    var worldAnchorA = applyForce_worldAnchorA,
        worldAnchorB = applyForce_worldAnchorB,
        ri = applyForce_ri,
        rj = applyForce_rj,
        ri_x_f = applyForce_ri_x_f,
        rj_x_f = applyForce_rj_x_f;

    // Get world anchors
    this.getWorldAnchorA(worldAnchorA);
    this.getWorldAnchorB(worldAnchorB);

    // Get offset points
    worldAnchorA.vsub(bodyA.position,ri);
    worldAnchorB.vsub(bodyB.position,rj);

    // Compute distance vector between world anchor points
    worldAnchorB.vsub(worldAnchorA,r);
    var rlen = r.norm();
    r_unit.copy(r);
    r_unit.normalize();

    // Compute relative velocity of the anchor points, u
    bodyB.velocity.vsub(bodyA.velocity,u);
    // Add rotational velocity

    bodyB.angularVelocity.cross(rj,tmp);
    u.vadd(tmp,u);
    bodyA.angularVelocity.cross(ri,tmp);
    u.vsub(tmp,u);

    // F = - k * ( x - L ) - D * ( u )
    r_unit.mult(-k*(rlen-l) - d*u.dot(r_unit), f);

    // Add forces to bodies
    bodyA.force.vsub(f,bodyA.force);
    bodyB.force.vadd(f,bodyB.force);

    // Angular force
    ri.cross(f,ri_x_f);
    rj.cross(f,rj_x_f);
    bodyA.torque.vsub(ri_x_f,bodyA.torque);
    bodyB.torque.vadd(rj_x_f,bodyB.torque);
};

},{"../math/Vec3":31}],37:[function(_dereq_,module,exports){
var Vec3 = _dereq_('../math/Vec3');
var Transform = _dereq_('../math/Transform');
var RaycastResult = _dereq_('../collision/RaycastResult');
var Utils = _dereq_('../utils/Utils');

module.exports = WheelInfo;

/**
 * @class WheelInfo
 * @constructor
 * @param {Object} [options]
 *
 * @param {Vec3} [options.chassisConnectionPointLocal]
 * @param {Vec3} [options.chassisConnectionPointWorld]
 * @param {Vec3} [options.directionLocal]
 * @param {Vec3} [options.directionWorld]
 * @param {Vec3} [options.axleLocal]
 * @param {Vec3} [options.axleWorld]
 * @param {number} [options.suspensionRestLength=1]
 * @param {number} [options.suspensionMaxLength=2]
 * @param {number} [options.radius=1]
 * @param {number} [options.suspensionStiffness=100]
 * @param {number} [options.dampingCompression=10]
 * @param {number} [options.dampingRelaxation=10]
 * @param {number} [options.frictionSlip=10000]
 * @param {number} [options.steering=0]
 * @param {number} [options.rotation=0]
 * @param {number} [options.deltaRotation=0]
 * @param {number} [options.rollInfluence=0.01]
 * @param {number} [options.maxSuspensionForce]
 * @param {boolean} [options.isFrontWheel=true]
 * @param {number} [options.clippedInvContactDotSuspension=1]
 * @param {number} [options.suspensionRelativeVelocity=0]
 * @param {number} [options.suspensionForce=0]
 * @param {number} [options.skidInfo=0]
 * @param {number} [options.suspensionLength=0]
 * @param {number} [options.maxSuspensionTravel=1]
 * @param {boolean} [options.useCustomSlidingRotationalSpeed=false]
 * @param {number} [options.customSlidingRotationalSpeed=-0.1]
 */
function WheelInfo(options){
    options = Utils.defaults(options, {
        chassisConnectionPointLocal: new Vec3(),
        chassisConnectionPointWorld: new Vec3(),
        directionLocal: new Vec3(),
        directionWorld: new Vec3(),
        axleLocal: new Vec3(),
        axleWorld: new Vec3(),
        suspensionRestLength: 1,
        suspensionMaxLength: 2,
        radius: 1,
        suspensionStiffness: 100,
        dampingCompression: 10,
        dampingRelaxation: 10,
        frictionSlip: 10000,
        steering: 0,
        rotation: 0,
        deltaRotation: 0,
        rollInfluence: 0.01,
        maxSuspensionForce: Number.MAX_VALUE,
        isFrontWheel: true,
        clippedInvContactDotSuspension: 1,
        suspensionRelativeVelocity: 0,
        suspensionForce: 0,
        skidInfo: 0,
        suspensionLength: 0,
        maxSuspensionTravel: 1,
        useCustomSlidingRotationalSpeed: false,
        customSlidingRotationalSpeed: -0.1
    });

    /**
     * Max travel distance of the suspension, in meters.
     * @property {number} maxSuspensionTravel
     */
    this.maxSuspensionTravel = options.maxSuspensionTravel;

    /**
     * Speed to apply to the wheel rotation when the wheel is sliding.
     * @property {number} customSlidingRotationalSpeed
     */
    this.customSlidingRotationalSpeed = options.customSlidingRotationalSpeed;

    /**
     * If the customSlidingRotationalSpeed should be used.
     * @property {Boolean} useCustomSlidingRotationalSpeed
     */
    this.useCustomSlidingRotationalSpeed = options.useCustomSlidingRotationalSpeed;

    /**
     * @property {Boolean} sliding
     */
    this.sliding = false;

    /**
     * Connection point, defined locally in the chassis body frame.
     * @property {Vec3} chassisConnectionPointLocal
     */
    this.chassisConnectionPointLocal = options.chassisConnectionPointLocal.clone();

    /**
     * @property {Vec3} chassisConnectionPointWorld
     */
    this.chassisConnectionPointWorld = options.chassisConnectionPointWorld.clone();

    /**
     * @property {Vec3} directionLocal
     */
    this.directionLocal = options.directionLocal.clone();

    /**
     * @property {Vec3} directionWorld
     */
    this.directionWorld = options.directionWorld.clone();

    /**
     * @property {Vec3} axleLocal
     */
    this.axleLocal = options.axleLocal.clone();

    /**
     * @property {Vec3} axleWorld
     */
    this.axleWorld = options.axleWorld.clone();

    /**
     * @property {number} suspensionRestLength
     */
    this.suspensionRestLength = options.suspensionRestLength;

    /**
     * @property {number} suspensionMaxLength
     */
    this.suspensionMaxLength = options.suspensionMaxLength;

    /**
     * @property {number} radius
     */
    this.radius = options.radius;

    /**
     * @property {number} suspensionStiffness
     */
    this.suspensionStiffness = options.suspensionStiffness;

    /**
     * @property {number} dampingCompression
     */
    this.dampingCompression = options.dampingCompression;

    /**
     * @property {number} dampingRelaxation
     */
    this.dampingRelaxation = options.dampingRelaxation;

    /**
     * @property {number} frictionSlip
     */
    this.frictionSlip = options.frictionSlip;

    /**
     * @property {number} steering
     */
    this.steering = 0;

    /**
     * Rotation value, in radians.
     * @property {number} rotation
     */
    this.rotation = 0;

    /**
     * @property {number} deltaRotation
     */
    this.deltaRotation = 0;

    /**
     * @property {number} rollInfluence
     */
    this.rollInfluence = options.rollInfluence;

    /**
     * @property {number} maxSuspensionForce
     */
    this.maxSuspensionForce = options.maxSuspensionForce;

    /**
     * @property {number} engineForce
     */
    this.engineForce = 0;

    /**
     * @property {number} brake
     */
    this.brake = 0;

    /**
     * @property {number} isFrontWheel
     */
    this.isFrontWheel = options.isFrontWheel;

    /**
     * @property {number} clippedInvContactDotSuspension
     */
    this.clippedInvContactDotSuspension = 1;

    /**
     * @property {number} suspensionRelativeVelocity
     */
    this.suspensionRelativeVelocity = 0;

    /**
     * @property {number} suspensionForce
     */
    this.suspensionForce = 0;

    /**
     * @property {number} skidInfo
     */
    this.skidInfo = 0;

    /**
     * @property {number} suspensionLength
     */
    this.suspensionLength = 0;

    /**
     * @property {number} sideImpulse
     */
    this.sideImpulse = 0;

    /**
     * @property {number} forwardImpulse
     */
    this.forwardImpulse = 0;

    /**
     * The result from raycasting
     * @property {RaycastResult} raycastResult
     */
    this.raycastResult = new RaycastResult();

    /**
     * Wheel world transform
     * @property {Transform} worldTransform
     */
    this.worldTransform = new Transform();

    /**
     * @property {boolean} isInContact
     */
    this.isInContact = false;
}

var chassis_velocity_at_contactPoint = new Vec3();
var relpos = new Vec3();
var chassis_velocity_at_contactPoint = new Vec3();
WheelInfo.prototype.updateWheel = function(chassis){
    var raycastResult = this.raycastResult;

    if (this.isInContact){
        var project= raycastResult.hitNormalWorld.dot(raycastResult.directionWorld);
        raycastResult.hitPointWorld.vsub(chassis.position, relpos);
        chassis.getVelocityAtWorldPoint(relpos, chassis_velocity_at_contactPoint);
        var projVel = raycastResult.hitNormalWorld.dot( chassis_velocity_at_contactPoint );
        if (project >= -0.1) {
            this.suspensionRelativeVelocity = 0.0;
            this.clippedInvContactDotSuspension = 1.0 / 0.1;
        } else {
            var inv = -1 / project;
            this.suspensionRelativeVelocity = projVel * inv;
            this.clippedInvContactDotSuspension = inv;
        }

    } else {
        // Not in contact : position wheel in a nice (rest length) position
        raycastResult.suspensionLength = this.suspensionRestLength;
        this.suspensionRelativeVelocity = 0.0;
        raycastResult.directionWorld.scale(-1, raycastResult.hitNormalWorld);
        this.clippedInvContactDotSuspension = 1.0;
    }
};
},{"../collision/RaycastResult":11,"../math/Transform":30,"../math/Vec3":31,"../utils/Utils":54}],38:[function(_dereq_,module,exports){
module.exports = Box;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');

/**
 * A 3d box shape.
 * @class Box
 * @constructor
 * @param {Vec3} halfExtents
 * @author schteppe
 * @extends Shape
 */
function Box(halfExtents){
    Shape.call(this, {
        type: Shape.types.BOX
    });

    /**
     * @property halfExtents
     * @type {Vec3}
     */
    this.halfExtents = halfExtents;

    /**
     * Used by the contact generator to make contacts with other convex polyhedra for example
     * @property convexPolyhedronRepresentation
     * @type {ConvexPolyhedron}
     */
    this.convexPolyhedronRepresentation = null;

    this.updateConvexPolyhedronRepresentation();
    this.updateBoundingSphereRadius();
}
Box.prototype = new Shape();
Box.prototype.constructor = Box;

/**
 * Updates the local convex polyhedron representation used for some collisions.
 * @method updateConvexPolyhedronRepresentation
 */
Box.prototype.updateConvexPolyhedronRepresentation = function(){
    var sx = this.halfExtents.x;
    var sy = this.halfExtents.y;
    var sz = this.halfExtents.z;
    var V = Vec3;

    var vertices = [
        new V(-sx,-sy,-sz),
        new V( sx,-sy,-sz),
        new V( sx, sy,-sz),
        new V(-sx, sy,-sz),
        new V(-sx,-sy, sz),
        new V( sx,-sy, sz),
        new V( sx, sy, sz),
        new V(-sx, sy, sz)
    ];

    var indices = [
        [3,2,1,0], // -z
        [4,5,6,7], // +z
        [5,4,0,1], // -y
        [2,3,7,6], // +y
        [0,4,7,3], // -x
        [1,2,6,5], // +x
    ];

    var axes = [
        new V(0, 0, 1),
        new V(0, 1, 0),
        new V(1, 0, 0)
    ];

    var h = new ConvexPolyhedron(vertices, indices);
    this.convexPolyhedronRepresentation = h;
    h.material = this.material;
};

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 * @return {Vec3}
 */
Box.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    Box.calculateInertia(this.halfExtents, mass, target);
    return target;
};

Box.calculateInertia = function(halfExtents,mass,target){
    var e = halfExtents;
    target.x = 1.0 / 12.0 * mass * (   2*e.y*2*e.y + 2*e.z*2*e.z );
    target.y = 1.0 / 12.0 * mass * (   2*e.x*2*e.x + 2*e.z*2*e.z );
    target.z = 1.0 / 12.0 * mass * (   2*e.y*2*e.y + 2*e.x*2*e.x );
};

/**
 * Get the box 6 side normals
 * @method getSideNormals
 * @param {array}      sixTargetVectors An array of 6 vectors, to store the resulting side normals in.
 * @param {Quaternion} quat             Orientation to apply to the normal vectors. If not provided, the vectors will be in respect to the local frame.
 * @return {array}
 */
Box.prototype.getSideNormals = function(sixTargetVectors,quat){
    var sides = sixTargetVectors;
    var ex = this.halfExtents;
    sides[0].set(  ex.x,     0,     0);
    sides[1].set(     0,  ex.y,     0);
    sides[2].set(     0,     0,  ex.z);
    sides[3].set( -ex.x,     0,     0);
    sides[4].set(     0, -ex.y,     0);
    sides[5].set(     0,     0, -ex.z);

    if(quat!==undefined){
        for(var i=0; i!==sides.length; i++){
            quat.vmult(sides[i],sides[i]);
        }
    }

    return sides;
};

Box.prototype.volume = function(){
    return 8.0 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
};

Box.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = this.halfExtents.norm();
};

var worldCornerTempPos = new Vec3();
var worldCornerTempNeg = new Vec3();
Box.prototype.forEachWorldCorner = function(pos,quat,callback){

    var e = this.halfExtents;
    var corners = [[  e.x,  e.y,  e.z],
                   [ -e.x,  e.y,  e.z],
                   [ -e.x, -e.y,  e.z],
                   [ -e.x, -e.y, -e.z],
                   [  e.x, -e.y, -e.z],
                   [  e.x,  e.y, -e.z],
                   [ -e.x,  e.y, -e.z],
                   [  e.x, -e.y,  e.z]];
    for(var i=0; i<corners.length; i++){
        worldCornerTempPos.set(corners[i][0],corners[i][1],corners[i][2]);
        quat.vmult(worldCornerTempPos,worldCornerTempPos);
        pos.vadd(worldCornerTempPos,worldCornerTempPos);
        callback(worldCornerTempPos.x,
                 worldCornerTempPos.y,
                 worldCornerTempPos.z);
    }
};

var worldCornersTemp = [
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3(),
    new Vec3()
];
Box.prototype.calculateWorldAABB = function(pos,quat,min,max){

    var e = this.halfExtents;
    worldCornersTemp[0].set(e.x, e.y, e.z);
    worldCornersTemp[1].set(-e.x,  e.y, e.z);
    worldCornersTemp[2].set(-e.x, -e.y, e.z);
    worldCornersTemp[3].set(-e.x, -e.y, -e.z);
    worldCornersTemp[4].set(e.x, -e.y, -e.z);
    worldCornersTemp[5].set(e.x,  e.y, -e.z);
    worldCornersTemp[6].set(-e.x,  e.y, -e.z);
    worldCornersTemp[7].set(e.x, -e.y,  e.z);

    var wc = worldCornersTemp[0];
    quat.vmult(wc, wc);
    pos.vadd(wc, wc);
    max.copy(wc);
    min.copy(wc);
    for(var i=1; i<8; i++){
        var wc = worldCornersTemp[i];
        quat.vmult(wc, wc);
        pos.vadd(wc, wc);
        var x = wc.x;
        var y = wc.y;
        var z = wc.z;
        if(x > max.x){
            max.x = x;
        }
        if(y > max.y){
            max.y = y;
        }
        if(z > max.z){
            max.z = z;
        }

        if(x < min.x){
            min.x = x;
        }
        if(y < min.y){
            min.y = y;
        }
        if(z < min.z){
            min.z = z;
        }
    }

    // Get each axis max
    // min.set(Infinity,Infinity,Infinity);
    // max.set(-Infinity,-Infinity,-Infinity);
    // this.forEachWorldCorner(pos,quat,function(x,y,z){
    //     if(x > max.x){
    //         max.x = x;
    //     }
    //     if(y > max.y){
    //         max.y = y;
    //     }
    //     if(z > max.z){
    //         max.z = z;
    //     }

    //     if(x < min.x){
    //         min.x = x;
    //     }
    //     if(y < min.y){
    //         min.y = y;
    //     }
    //     if(z < min.z){
    //         min.z = z;
    //     }
    // });
};

},{"../math/Vec3":31,"./ConvexPolyhedron":39,"./Shape":44}],39:[function(_dereq_,module,exports){
module.exports = ConvexPolyhedron;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Transform = _dereq_('../math/Transform');

/**
 * A set of polygons describing a convex shape.
 * @class ConvexPolyhedron
 * @constructor
 * @extends Shape
 * @description The shape MUST be convex for the code to work properly. No polygons may be coplanar (contained
 * in the same 3D plane), instead these should be merged into one polygon.
 *
 * @param {array} points An array of Vec3's
 * @param {array} faces Array of integer arrays, describing which vertices that is included in each face.
 *
 * @author qiao / https://github.com/qiao (original author, see https://github.com/qiao/three.js/commit/85026f0c769e4000148a67d45a9e9b9c5108836f)
 * @author schteppe / https://github.com/schteppe
 * @see http://www.altdevblogaday.com/2011/05/13/contact-generation-between-3d-convex-meshes/
 * @see http://bullet.googlecode.com/svn/trunk/src/BulletCollision/NarrowPhaseCollision/btPolyhedralContactClipping.cpp
 *
 * @todo Move the clipping functions to ContactGenerator?
 * @todo Automatically merge coplanar polygons in constructor.
 */
function ConvexPolyhedron(points, faces, uniqueAxes) {
    Shape.call(this, {
        type: Shape.types.CONVEXPOLYHEDRON
    });

    /**
     * Array of Vec3
     * @property vertices
     * @type {Array}
     */
    this.vertices = points||[];

    this.worldVertices = []; // World transformed version of .vertices
    this.worldVerticesNeedsUpdate = true;

    /**
     * Array of integer arrays, indicating which vertices each face consists of
     * @property faces
     * @type {Array}
     */
    this.faces = faces||[];

    /**
     * Array of Vec3
     * @property faceNormals
     * @type {Array}
     */
    this.faceNormals = [];
    this.computeNormals();

    this.worldFaceNormalsNeedsUpdate = true;
    this.worldFaceNormals = []; // World transformed version of .faceNormals

    /**
     * Array of Vec3
     * @property uniqueEdges
     * @type {Array}
     */
    this.uniqueEdges = [];

    /**
     * If given, these locally defined, normalized axes are the only ones being checked when doing separating axis check.
     * @property {Array} uniqueAxes
     */
    this.uniqueAxes = uniqueAxes ? uniqueAxes.slice() : null;

    this.computeEdges();
    this.updateBoundingSphereRadius();
}
ConvexPolyhedron.prototype = new Shape();
ConvexPolyhedron.prototype.constructor = ConvexPolyhedron;

var computeEdges_tmpEdge = new Vec3();
/**
 * Computes uniqueEdges
 * @method computeEdges
 */
ConvexPolyhedron.prototype.computeEdges = function(){
    var faces = this.faces;
    var vertices = this.vertices;
    var nv = vertices.length;
    var edges = this.uniqueEdges;

    edges.length = 0;

    var edge = computeEdges_tmpEdge;

    for(var i=0; i !== faces.length; i++){
        var face = faces[i];
        var numVertices = face.length;
        for(var j = 0; j !== numVertices; j++){
            var k = ( j+1 ) % numVertices;
            vertices[face[j]].vsub(vertices[face[k]], edge);
            edge.normalize();
            var found = false;
            for(var p=0; p !== edges.length; p++){
                if (edges[p].almostEquals(edge) || edges[p].almostEquals(edge)){
                    found = true;
                    break;
                }
            }

            if (!found){
                edges.push(edge.clone());
            }
        }
    }
};

/**
 * Compute the normals of the faces. Will reuse existing Vec3 objects in the .faceNormals array if they exist.
 * @method computeNormals
 */
ConvexPolyhedron.prototype.computeNormals = function(){
    this.faceNormals.length = this.faces.length;

    // Generate normals
    for(var i=0; i<this.faces.length; i++){

        // Check so all vertices exists for this face
        for(var j=0; j<this.faces[i].length; j++){
            if(!this.vertices[this.faces[i][j]]){
                throw new Error("Vertex "+this.faces[i][j]+" not found!");
            }
        }

        var n = this.faceNormals[i] || new Vec3();
        this.getFaceNormal(i,n);
        n.negate(n);
        this.faceNormals[i] = n;
        var vertex = this.vertices[this.faces[i][0]];
        if(n.dot(vertex) < 0){
            console.error(".faceNormals[" + i + "] = Vec3("+n.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
            for(var j=0; j<this.faces[i].length; j++){
                console.warn(".vertices["+this.faces[i][j]+"] = Vec3("+this.vertices[this.faces[i][j]].toString()+")");
            }
        }
    }
};

/**
 * Get face normal given 3 vertices
 * @static
 * @method getFaceNormal
 * @param {Vec3} va
 * @param {Vec3} vb
 * @param {Vec3} vc
 * @param {Vec3} target
 */
var cb = new Vec3();
var ab = new Vec3();
ConvexPolyhedron.computeNormal = function ( va, vb, vc, target ) {
    vb.vsub(va,ab);
    vc.vsub(vb,cb);
    cb.cross(ab,target);
    if ( !target.isZero() ) {
        target.normalize();
    }
};

/**
 * Compute the normal of a face from its vertices
 * @method getFaceNormal
 * @param  {Number} i
 * @param  {Vec3} target
 */
ConvexPolyhedron.prototype.getFaceNormal = function(i,target){
    var f = this.faces[i];
    var va = this.vertices[f[0]];
    var vb = this.vertices[f[1]];
    var vc = this.vertices[f[2]];
    return ConvexPolyhedron.computeNormal(va,vb,vc,target);
};

/**
 * @method clipAgainstHull
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {ConvexPolyhedron} hullB
 * @param {Vec3} posB
 * @param {Quaternion} quatB
 * @param {Vec3} separatingNormal
 * @param {Number} minDist Clamp distance
 * @param {Number} maxDist
 * @param {array} result The an array of contact point objects, see clipFaceAgainstHull
 * @see http://bullet.googlecode.com/svn/trunk/src/BulletCollision/NarrowPhaseCollision/btPolyhedralContactClipping.cpp
 */
var cah_WorldNormal = new Vec3();
ConvexPolyhedron.prototype.clipAgainstHull = function(posA,quatA,hullB,posB,quatB,separatingNormal,minDist,maxDist,result){
    var WorldNormal = cah_WorldNormal;
    var hullA = this;
    var curMaxDist = maxDist;
    var closestFaceB = -1;
    var dmax = -Number.MAX_VALUE;
    for(var face=0; face < hullB.faces.length; face++){
        WorldNormal.copy(hullB.faceNormals[face]);
        quatB.vmult(WorldNormal,WorldNormal);
        //posB.vadd(WorldNormal,WorldNormal);
        var d = WorldNormal.dot(separatingNormal);
        if (d > dmax){
            dmax = d;
            closestFaceB = face;
        }
    }
    var worldVertsB1 = [];
    var polyB = hullB.faces[closestFaceB];
    var numVertices = polyB.length;
    for(var e0=0; e0<numVertices; e0++){
        var b = hullB.vertices[polyB[e0]];
        var worldb = new Vec3();
        worldb.copy(b);
        quatB.vmult(worldb,worldb);
        posB.vadd(worldb,worldb);
        worldVertsB1.push(worldb);
    }

    if (closestFaceB>=0){
        this.clipFaceAgainstHull(separatingNormal,
                                 posA,
                                 quatA,
                                 worldVertsB1,
                                 minDist,
                                 maxDist,
                                 result);
    }
};

/**
 * Find the separating axis between this hull and another
 * @method findSeparatingAxis
 * @param {ConvexPolyhedron} hullB
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {Vec3} posB
 * @param {Quaternion} quatB
 * @param {Vec3} target The target vector to save the axis in
 * @return {bool} Returns false if a separation is found, else true
 */
var fsa_faceANormalWS3 = new Vec3(),
    fsa_Worldnormal1 = new Vec3(),
    fsa_deltaC = new Vec3(),
    fsa_worldEdge0 = new Vec3(),
    fsa_worldEdge1 = new Vec3(),
    fsa_Cross = new Vec3();
ConvexPolyhedron.prototype.findSeparatingAxis = function(hullB,posA,quatA,posB,quatB,target, faceListA, faceListB){
    var faceANormalWS3 = fsa_faceANormalWS3,
        Worldnormal1 = fsa_Worldnormal1,
        deltaC = fsa_deltaC,
        worldEdge0 = fsa_worldEdge0,
        worldEdge1 = fsa_worldEdge1,
        Cross = fsa_Cross;

    var dmin = Number.MAX_VALUE;
    var hullA = this;
    var curPlaneTests=0;

    if(!hullA.uniqueAxes){

        var numFacesA = faceListA ? faceListA.length : hullA.faces.length;

        // Test face normals from hullA
        for(var i=0; i<numFacesA; i++){
            var fi = faceListA ? faceListA[i] : i;

            // Get world face normal
            faceANormalWS3.copy(hullA.faceNormals[fi]);
            quatA.vmult(faceANormalWS3,faceANormalWS3);

            var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(faceANormalWS3);
            }
        }

    } else {

        // Test unique axes
        for(var i = 0; i !== hullA.uniqueAxes.length; i++){

            // Get world axis
            quatA.vmult(hullA.uniqueAxes[i],faceANormalWS3);

            var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(faceANormalWS3);
            }
        }
    }

    if(!hullB.uniqueAxes){

        // Test face normals from hullB
        var numFacesB = faceListB ? faceListB.length : hullB.faces.length;
        for(var i=0;i<numFacesB;i++){

            var fi = faceListB ? faceListB[i] : i;

            Worldnormal1.copy(hullB.faceNormals[fi]);
            quatB.vmult(Worldnormal1,Worldnormal1);
            curPlaneTests++;
            var d = hullA.testSepAxis(Worldnormal1, hullB,posA,quatA,posB,quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(Worldnormal1);
            }
        }
    } else {

        // Test unique axes in B
        for(var i = 0; i !== hullB.uniqueAxes.length; i++){
            quatB.vmult(hullB.uniqueAxes[i],Worldnormal1);

            curPlaneTests++;
            var d = hullA.testSepAxis(Worldnormal1, hullB,posA,quatA,posB,quatB);
            if(d===false){
                return false;
            }

            if(d<dmin){
                dmin = d;
                target.copy(Worldnormal1);
            }
        }
    }

    // Test edges
    for(var e0=0; e0 !== hullA.uniqueEdges.length; e0++){

        // Get world edge
        quatA.vmult(hullA.uniqueEdges[e0],worldEdge0);

        for(var e1=0; e1 !== hullB.uniqueEdges.length; e1++){

            // Get world edge 2
            quatB.vmult(hullB.uniqueEdges[e1], worldEdge1);
            worldEdge0.cross(worldEdge1,Cross);

            if(!Cross.almostZero()){
                Cross.normalize();
                var dist = hullA.testSepAxis(Cross, hullB, posA, quatA, posB, quatB);
                if(dist === false){
                    return false;
                }
                if(dist < dmin){
                    dmin = dist;
                    target.copy(Cross);
                }
            }
        }
    }

    posB.vsub(posA,deltaC);
    if((deltaC.dot(target))>0.0){
        target.negate(target);
    }

    return true;
};

var maxminA=[], maxminB=[];

/**
 * Test separating axis against two hulls. Both hulls are projected onto the axis and the overlap size is returned if there is one.
 * @method testSepAxis
 * @param {Vec3} axis
 * @param {ConvexPolyhedron} hullB
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {Vec3} posB
 * @param {Quaternion} quatB
 * @return {number} The overlap depth, or FALSE if no penetration.
 */
ConvexPolyhedron.prototype.testSepAxis = function(axis, hullB, posA, quatA, posB, quatB){
    var hullA=this;
    ConvexPolyhedron.project(hullA, axis, posA, quatA, maxminA);
    ConvexPolyhedron.project(hullB, axis, posB, quatB, maxminB);
    var maxA = maxminA[0];
    var minA = maxminA[1];
    var maxB = maxminB[0];
    var minB = maxminB[1];
    if(maxA<minB || maxB<minA){
        return false; // Separated
    }
    var d0 = maxA - minB;
    var d1 = maxB - minA;
    var depth = d0<d1 ? d0:d1;
    return depth;
};

var cli_aabbmin = new Vec3(),
    cli_aabbmax = new Vec3();

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 */
ConvexPolyhedron.prototype.calculateLocalInertia = function(mass,target){
    // Approximate with box inertia
    // Exact inertia calculation is overkill, but see http://geometrictools.com/Documentation/PolyhedralMassProperties.pdf for the correct way to do it
    this.computeLocalAABB(cli_aabbmin,cli_aabbmax);
    var x = cli_aabbmax.x - cli_aabbmin.x,
        y = cli_aabbmax.y - cli_aabbmin.y,
        z = cli_aabbmax.z - cli_aabbmin.z;
    target.x = 1.0 / 12.0 * mass * ( 2*y*2*y + 2*z*2*z );
    target.y = 1.0 / 12.0 * mass * ( 2*x*2*x + 2*z*2*z );
    target.z = 1.0 / 12.0 * mass * ( 2*y*2*y + 2*x*2*x );
};

/**
 * @method getPlaneConstantOfFace
 * @param  {Number} face_i Index of the face
 * @return {Number}
 */
ConvexPolyhedron.prototype.getPlaneConstantOfFace = function(face_i){
    var f = this.faces[face_i];
    var n = this.faceNormals[face_i];
    var v = this.vertices[f[0]];
    var c = -n.dot(v);
    return c;
};

/**
 * Clip a face against a hull.
 * @method clipFaceAgainstHull
 * @param {Vec3} separatingNormal
 * @param {Vec3} posA
 * @param {Quaternion} quatA
 * @param {Array} worldVertsB1 An array of Vec3 with vertices in the world frame.
 * @param {Number} minDist Distance clamping
 * @param {Number} maxDist
 * @param Array result Array to store resulting contact points in. Will be objects with properties: point, depth, normal. These are represented in world coordinates.
 */
var cfah_faceANormalWS = new Vec3(),
    cfah_edge0 = new Vec3(),
    cfah_WorldEdge0 = new Vec3(),
    cfah_worldPlaneAnormal1 = new Vec3(),
    cfah_planeNormalWS1 = new Vec3(),
    cfah_worldA1 = new Vec3(),
    cfah_localPlaneNormal = new Vec3(),
    cfah_planeNormalWS = new Vec3();
ConvexPolyhedron.prototype.clipFaceAgainstHull = function(separatingNormal, posA, quatA, worldVertsB1, minDist, maxDist,result){
    var faceANormalWS = cfah_faceANormalWS,
        edge0 = cfah_edge0,
        WorldEdge0 = cfah_WorldEdge0,
        worldPlaneAnormal1 = cfah_worldPlaneAnormal1,
        planeNormalWS1 = cfah_planeNormalWS1,
        worldA1 = cfah_worldA1,
        localPlaneNormal = cfah_localPlaneNormal,
        planeNormalWS = cfah_planeNormalWS;

    var hullA = this;
    var worldVertsB2 = [];
    var pVtxIn = worldVertsB1;
    var pVtxOut = worldVertsB2;
    // Find the face with normal closest to the separating axis
    var closestFaceA = -1;
    var dmin = Number.MAX_VALUE;
    for(var face=0; face<hullA.faces.length; face++){
        faceANormalWS.copy(hullA.faceNormals[face]);
        quatA.vmult(faceANormalWS,faceANormalWS);
        //posA.vadd(faceANormalWS,faceANormalWS);
        var d = faceANormalWS.dot(separatingNormal);
        if (d < dmin){
            dmin = d;
            closestFaceA = face;
        }
    }
    if (closestFaceA < 0){
        // console.log("--- did not find any closest face... ---");
        return;
    }
    //console.log("closest A: ",closestFaceA);
    // Get the face and construct connected faces
    var polyA = hullA.faces[closestFaceA];
    polyA.connectedFaces = [];
    for(var i=0; i<hullA.faces.length; i++){
        for(var j=0; j<hullA.faces[i].length; j++){
            if(polyA.indexOf(hullA.faces[i][j])!==-1 /* Sharing a vertex*/ && i!==closestFaceA /* Not the one we are looking for connections from */ && polyA.connectedFaces.indexOf(i)===-1 /* Not already added */ ){
                polyA.connectedFaces.push(i);
            }
        }
    }
    // Clip the polygon to the back of the planes of all faces of hull A, that are adjacent to the witness face
    var numContacts = pVtxIn.length;
    var numVerticesA = polyA.length;
    var res = [];
    for(var e0=0; e0<numVerticesA; e0++){
        var a = hullA.vertices[polyA[e0]];
        var b = hullA.vertices[polyA[(e0+1)%numVerticesA]];
        a.vsub(b,edge0);
        WorldEdge0.copy(edge0);
        quatA.vmult(WorldEdge0,WorldEdge0);
        posA.vadd(WorldEdge0,WorldEdge0);
        worldPlaneAnormal1.copy(this.faceNormals[closestFaceA]);//transA.getBasis()* btVector3(polyA.m_plane[0],polyA.m_plane[1],polyA.m_plane[2]);
        quatA.vmult(worldPlaneAnormal1,worldPlaneAnormal1);
        posA.vadd(worldPlaneAnormal1,worldPlaneAnormal1);
        WorldEdge0.cross(worldPlaneAnormal1,planeNormalWS1);
        planeNormalWS1.negate(planeNormalWS1);
        worldA1.copy(a);
        quatA.vmult(worldA1,worldA1);
        posA.vadd(worldA1,worldA1);
        var planeEqWS1 = -worldA1.dot(planeNormalWS1);
        var planeEqWS;
        if(true){
            var otherFace = polyA.connectedFaces[e0];
            localPlaneNormal.copy(this.faceNormals[otherFace]);
            var localPlaneEq = this.getPlaneConstantOfFace(otherFace);

            planeNormalWS.copy(localPlaneNormal);
            quatA.vmult(planeNormalWS,planeNormalWS);
            //posA.vadd(planeNormalWS,planeNormalWS);
            var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
        } else  {}

        // Clip face against our constructed plane
        this.clipFaceAgainstPlane(pVtxIn, pVtxOut, planeNormalWS, planeEqWS);

        // Throw away all clipped points, but save the reamining until next clip
        while(pVtxIn.length){
            pVtxIn.shift();
        }
        while(pVtxOut.length){
            pVtxIn.push(pVtxOut.shift());
        }
    }

    //console.log("Resulting points after clip:",pVtxIn);

    // only keep contact points that are behind the witness face
    localPlaneNormal.copy(this.faceNormals[closestFaceA]);

    var localPlaneEq = this.getPlaneConstantOfFace(closestFaceA);
    planeNormalWS.copy(localPlaneNormal);
    quatA.vmult(planeNormalWS,planeNormalWS);

    var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
    for (var i=0; i<pVtxIn.length; i++){
        var depth = planeNormalWS.dot(pVtxIn[i]) + planeEqWS; //???
        /*console.log("depth calc from normal=",planeNormalWS.toString()," and constant "+planeEqWS+" and vertex ",pVtxIn[i].toString()," gives "+depth);*/
        if (depth <=minDist){
            console.log("clamped: depth="+depth+" to minDist="+(minDist+""));
            depth = minDist;
        }

        if (depth <=maxDist){
            var point = pVtxIn[i];
            if(depth<=0){
                /*console.log("Got contact point ",point.toString(),
                  ", depth=",depth,
                  "contact normal=",separatingNormal.toString(),
                  "plane",planeNormalWS.toString(),
                  "planeConstant",planeEqWS);*/
                var p = {
                    point:point,
                    normal:planeNormalWS,
                    depth: depth,
                };
                result.push(p);
            }
        }
    }
};

/**
 * Clip a face in a hull against the back of a plane.
 * @method clipFaceAgainstPlane
 * @param {Array} inVertices
 * @param {Array} outVertices
 * @param {Vec3} planeNormal
 * @param {Number} planeConstant The constant in the mathematical plane equation
 */
ConvexPolyhedron.prototype.clipFaceAgainstPlane = function(inVertices,outVertices, planeNormal, planeConstant){
    var n_dot_first, n_dot_last;
    var numVerts = inVertices.length;

    if(numVerts < 2){
        return outVertices;
    }

    var firstVertex = inVertices[inVertices.length-1],
        lastVertex =   inVertices[0];

    n_dot_first = planeNormal.dot(firstVertex) + planeConstant;

    for(var vi = 0; vi < numVerts; vi++){
        lastVertex = inVertices[vi];
        n_dot_last = planeNormal.dot(lastVertex) + planeConstant;
        if(n_dot_first < 0){
            if(n_dot_last < 0){
                // Start < 0, end < 0, so output lastVertex
                var newv = new Vec3();
                newv.copy(lastVertex);
                outVertices.push(newv);
            } else {
                // Start < 0, end >= 0, so output intersection
                var newv = new Vec3();
                firstVertex.lerp(lastVertex,
                                 n_dot_first / (n_dot_first - n_dot_last),
                                 newv);
                outVertices.push(newv);
            }
        } else {
            if(n_dot_last<0){
                // Start >= 0, end < 0 so output intersection and end
                var newv = new Vec3();
                firstVertex.lerp(lastVertex,
                                 n_dot_first / (n_dot_first - n_dot_last),
                                 newv);
                outVertices.push(newv);
                outVertices.push(lastVertex);
            }
        }
        firstVertex = lastVertex;
        n_dot_first = n_dot_last;
    }
    return outVertices;
};

// Updates .worldVertices and sets .worldVerticesNeedsUpdate to false.
ConvexPolyhedron.prototype.computeWorldVertices = function(position,quat){
    var N = this.vertices.length;
    while(this.worldVertices.length < N){
        this.worldVertices.push( new Vec3() );
    }

    var verts = this.vertices,
        worldVerts = this.worldVertices;
    for(var i=0; i!==N; i++){
        quat.vmult( verts[i] , worldVerts[i] );
        position.vadd( worldVerts[i] , worldVerts[i] );
    }

    this.worldVerticesNeedsUpdate = false;
};

var computeLocalAABB_worldVert = new Vec3();
ConvexPolyhedron.prototype.computeLocalAABB = function(aabbmin,aabbmax){
    var n = this.vertices.length,
        vertices = this.vertices,
        worldVert = computeLocalAABB_worldVert;

    aabbmin.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
    aabbmax.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);

    for(var i=0; i<n; i++){
        var v = vertices[i];
        if     (v.x < aabbmin.x){
            aabbmin.x = v.x;
        } else if(v.x > aabbmax.x){
            aabbmax.x = v.x;
        }
        if     (v.y < aabbmin.y){
            aabbmin.y = v.y;
        } else if(v.y > aabbmax.y){
            aabbmax.y = v.y;
        }
        if     (v.z < aabbmin.z){
            aabbmin.z = v.z;
        } else if(v.z > aabbmax.z){
            aabbmax.z = v.z;
        }
    }
};

/**
 * Updates .worldVertices and sets .worldVerticesNeedsUpdate to false.
 * @method computeWorldFaceNormals
 * @param  {Quaternion} quat
 */
ConvexPolyhedron.prototype.computeWorldFaceNormals = function(quat){
    var N = this.faceNormals.length;
    while(this.worldFaceNormals.length < N){
        this.worldFaceNormals.push( new Vec3() );
    }

    var normals = this.faceNormals,
        worldNormals = this.worldFaceNormals;
    for(var i=0; i!==N; i++){
        quat.vmult( normals[i] , worldNormals[i] );
    }

    this.worldFaceNormalsNeedsUpdate = false;
};

/**
 * @method updateBoundingSphereRadius
 */
ConvexPolyhedron.prototype.updateBoundingSphereRadius = function(){
    // Assume points are distributed with local (0,0,0) as center
    var max2 = 0;
    var verts = this.vertices;
    for(var i=0, N=verts.length; i!==N; i++) {
        var norm2 = verts[i].norm2();
        if(norm2 > max2){
            max2 = norm2;
        }
    }
    this.boundingSphereRadius = Math.sqrt(max2);
};

var tempWorldVertex = new Vec3();

/**
 * @method calculateWorldAABB
 * @param {Vec3}        pos
 * @param {Quaternion}  quat
 * @param {Vec3}        min
 * @param {Vec3}        max
 */
ConvexPolyhedron.prototype.calculateWorldAABB = function(pos,quat,min,max){
    var n = this.vertices.length, verts = this.vertices;
    var minx,miny,minz,maxx,maxy,maxz;
    for(var i=0; i<n; i++){
        tempWorldVertex.copy(verts[i]);
        quat.vmult(tempWorldVertex,tempWorldVertex);
        pos.vadd(tempWorldVertex,tempWorldVertex);
        var v = tempWorldVertex;
        if     (v.x < minx || minx===undefined){
            minx = v.x;
        } else if(v.x > maxx || maxx===undefined){
            maxx = v.x;
        }

        if     (v.y < miny || miny===undefined){
            miny = v.y;
        } else if(v.y > maxy || maxy===undefined){
            maxy = v.y;
        }

        if     (v.z < minz || minz===undefined){
            minz = v.z;
        } else if(v.z > maxz || maxz===undefined){
            maxz = v.z;
        }
    }
    min.set(minx,miny,minz);
    max.set(maxx,maxy,maxz);
};

/**
 * Get approximate convex volume
 * @method volume
 * @return {Number}
 */
ConvexPolyhedron.prototype.volume = function(){
    return 4.0 * Math.PI * this.boundingSphereRadius / 3.0;
};

/**
 * Get an average of all the vertices positions
 * @method getAveragePointLocal
 * @param  {Vec3} target
 * @return {Vec3}
 */
ConvexPolyhedron.prototype.getAveragePointLocal = function(target){
    target = target || new Vec3();
    var n = this.vertices.length,
        verts = this.vertices;
    for(var i=0; i<n; i++){
        target.vadd(verts[i],target);
    }
    target.mult(1/n,target);
    return target;
};

/**
 * Transform all local points. Will change the .vertices
 * @method transformAllPoints
 * @param  {Vec3} offset
 * @param  {Quaternion} quat
 */
ConvexPolyhedron.prototype.transformAllPoints = function(offset,quat){
    var n = this.vertices.length,
        verts = this.vertices;

    // Apply rotation
    if(quat){
        // Rotate vertices
        for(var i=0; i<n; i++){
            var v = verts[i];
            quat.vmult(v,v);
        }
        // Rotate face normals
        for(var i=0; i<this.faceNormals.length; i++){
            var v = this.faceNormals[i];
            quat.vmult(v,v);
        }
        /*
        // Rotate edges
        for(var i=0; i<this.uniqueEdges.length; i++){
            var v = this.uniqueEdges[i];
            quat.vmult(v,v);
        }*/
    }

    // Apply offset
    if(offset){
        for(var i=0; i<n; i++){
            var v = verts[i];
            v.vadd(offset,v);
        }
    }
};

/**
 * Checks whether p is inside the polyhedra. Must be in local coords. The point lies outside of the convex hull of the other points if and only if the direction of all the vectors from it to those other points are on less than one half of a sphere around it.
 * @method pointIsInside
 * @param  {Vec3} p      A point given in local coordinates
 * @return {Boolean}
 */
var ConvexPolyhedron_pointIsInside = new Vec3();
var ConvexPolyhedron_vToP = new Vec3();
var ConvexPolyhedron_vToPointInside = new Vec3();
ConvexPolyhedron.prototype.pointIsInside = function(p){
    var n = this.vertices.length,
        verts = this.vertices,
        faces = this.faces,
        normals = this.faceNormals;
    var positiveResult = null;
    var N = this.faces.length;
    var pointInside = ConvexPolyhedron_pointIsInside;
    this.getAveragePointLocal(pointInside);
    for(var i=0; i<N; i++){
        var numVertices = this.faces[i].length;
        var n = normals[i];
        var v = verts[faces[i][0]]; // We only need one point in the face

        // This dot product determines which side of the edge the point is
        var vToP = ConvexPolyhedron_vToP;
        p.vsub(v,vToP);
        var r1 = n.dot(vToP);

        var vToPointInside = ConvexPolyhedron_vToPointInside;
        pointInside.vsub(v,vToPointInside);
        var r2 = n.dot(vToPointInside);

        if((r1<0 && r2>0) || (r1>0 && r2<0)){
            return false; // Encountered some other sign. Exit.
        } else {
        }
    }

    // If we got here, all dot products were of the same sign.
    return positiveResult ? 1 : -1;
};

/**
 * Get max and min dot product of a convex hull at position (pos,quat) projected onto an axis. Results are saved in the array maxmin.
 * @static
 * @method project
 * @param {ConvexPolyhedron} hull
 * @param {Vec3} axis
 * @param {Vec3} pos
 * @param {Quaternion} quat
 * @param {array} result result[0] and result[1] will be set to maximum and minimum, respectively.
 */
var project_worldVertex = new Vec3();
var project_localAxis = new Vec3();
var project_localOrigin = new Vec3();
ConvexPolyhedron.project = function(hull, axis, pos, quat, result){
    var n = hull.vertices.length,
        worldVertex = project_worldVertex,
        localAxis = project_localAxis,
        max = 0,
        min = 0,
        localOrigin = project_localOrigin,
        vs = hull.vertices;

    localOrigin.setZero();

    // Transform the axis to local
    Transform.vectorToLocalFrame(pos, quat, axis, localAxis);
    Transform.pointToLocalFrame(pos, quat, localOrigin, localOrigin);
    var add = localOrigin.dot(localAxis);

    min = max = vs[0].dot(localAxis);

    for(var i = 1; i < n; i++){
        var val = vs[i].dot(localAxis);

        if(val > max){
            max = val;
        }

        if(val < min){
            min = val;
        }
    }

    min -= add;
    max -= add;

    if(min > max){
        // Inconsistent - swap
        var temp = min;
        min = max;
        max = temp;
    }
    // Output
    result[0] = max;
    result[1] = min;
};

},{"../math/Quaternion":29,"../math/Transform":30,"../math/Vec3":31,"./Shape":44}],40:[function(_dereq_,module,exports){
module.exports = Cylinder;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');

/**
 * @class Cylinder
 * @constructor
 * @extends ConvexPolyhedron
 * @author schteppe / https://github.com/schteppe
 * @param {Number} radiusTop
 * @param {Number} radiusBottom
 * @param {Number} height
 * @param {Number} numSegments The number of segments to build the cylinder out of
 */
function Cylinder( radiusTop, radiusBottom, height , numSegments ) {
    var N = numSegments,
        verts = [],
        axes = [],
        faces = [],
        bottomface = [],
        topface = [],
        cos = Math.cos,
        sin = Math.sin;

    // First bottom point
    verts.push(new Vec3(radiusBottom*cos(0),
                               radiusBottom*sin(0),
                               -height*0.5));
    bottomface.push(0);

    // First top point
    verts.push(new Vec3(radiusTop*cos(0),
                               radiusTop*sin(0),
                               height*0.5));
    topface.push(1);

    for(var i=0; i<N; i++){
        var theta = 2*Math.PI/N * (i+1);
        var thetaN = 2*Math.PI/N * (i+0.5);
        if(i<N-1){
            // Bottom
            verts.push(new Vec3(radiusBottom*cos(theta),
                                       radiusBottom*sin(theta),
                                       -height*0.5));
            bottomface.push(2*i+2);
            // Top
            verts.push(new Vec3(radiusTop*cos(theta),
                                       radiusTop*sin(theta),
                                       height*0.5));
            topface.push(2*i+3);

            // Face
            faces.push([2*i+2, 2*i+3, 2*i+1,2*i]);
        } else {
            faces.push([0,1, 2*i+1, 2*i]); // Connect
        }

        // Axis: we can cut off half of them if we have even number of segments
        if(N % 2 === 1 || i < N / 2){
            axes.push(new Vec3(cos(thetaN), sin(thetaN), 0));
        }
    }
    faces.push(topface);
    axes.push(new Vec3(0,0,1));

    // Reorder bottom face
    var temp = [];
    for(var i=0; i<bottomface.length; i++){
        temp.push(bottomface[bottomface.length - i - 1]);
    }
    faces.push(temp);

    ConvexPolyhedron.call( this, verts, faces, axes );
}

Cylinder.prototype = new ConvexPolyhedron();

},{"../math/Quaternion":29,"../math/Vec3":31,"./ConvexPolyhedron":39,"./Shape":44}],41:[function(_dereq_,module,exports){
var Shape = _dereq_('./Shape');
var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');
var Vec3 = _dereq_('../math/Vec3');
var Utils = _dereq_('../utils/Utils');

module.exports = Heightfield;

/**
 * Heightfield shape class. Height data is given as an array. These data points are spread out evenly with a given distance.
 * @class Heightfield
 * @extends Shape
 * @constructor
 * @param {Array} data An array of Y values that will be used to construct the terrain.
 * @param {object} options
 * @param {Number} [options.minValue] Minimum value of the data points in the data array. Will be computed automatically if not given.
 * @param {Number} [options.maxValue] Maximum value.
 * @param {Number} [options.elementSize=0.1] World spacing between the data points in X direction.
 * @todo Should be possible to use along all axes, not just y
 * @todo should be possible to scale along all axes
 *
 * @example
 *     // Generate some height data (y-values).
 *     var data = [];
 *     for(var i = 0; i < 1000; i++){
 *         var y = 0.5 * Math.cos(0.2 * i);
 *         data.push(y);
 *     }
 *
 *     // Create the heightfield shape
 *     var heightfieldShape = new Heightfield(data, {
 *         elementSize: 1 // Distance between the data points in X and Y directions
 *     });
 *     var heightfieldBody = new Body();
 *     heightfieldBody.addShape(heightfieldShape);
 *     world.addBody(heightfieldBody);
 */
function Heightfield(data, options){
    options = Utils.defaults(options, {
        maxValue : null,
        minValue : null,
        elementSize : 1
    });

    /**
     * An array of numbers, or height values, that are spread out along the x axis.
     * @property {array} data
     */
    this.data = data;

    /**
     * Max value of the data
     * @property {number} maxValue
     */
    this.maxValue = options.maxValue;

    /**
     * Max value of the data
     * @property {number} minValue
     */
    this.minValue = options.minValue;

    /**
     * The width of each element
     * @property {number} elementSize
     * @todo elementSizeX and Y
     */
    this.elementSize = options.elementSize;

    if(options.minValue === null){
        this.updateMinValue();
    }
    if(options.maxValue === null){
        this.updateMaxValue();
    }

    this.cacheEnabled = true;

    Shape.call(this, {
        type: Shape.types.HEIGHTFIELD
    });

    this.pillarConvex = new ConvexPolyhedron();
    this.pillarOffset = new Vec3();

    this.updateBoundingSphereRadius();

    // "i_j_isUpper" => { convex: ..., offset: ... }
    // for example:
    // _cachedPillars["0_2_1"]
    this._cachedPillars = {};
}
Heightfield.prototype = new Shape();

/**
 * Call whenever you change the data array.
 * @method update
 */
Heightfield.prototype.update = function(){
    this._cachedPillars = {};
};

/**
 * Update the .minValue property
 * @method updateMinValue
 */
Heightfield.prototype.updateMinValue = function(){
    var data = this.data;
    var minValue = data[0][0];
    for(var i=0; i !== data.length; i++){
        for(var j=0; j !== data[i].length; j++){
            var v = data[i][j];
            if(v < minValue){
                minValue = v;
            }
        }
    }
    this.minValue = minValue;
};

/**
 * Update the .maxValue property
 * @method updateMaxValue
 */
Heightfield.prototype.updateMaxValue = function(){
    var data = this.data;
    var maxValue = data[0][0];
    for(var i=0; i !== data.length; i++){
        for(var j=0; j !== data[i].length; j++){
            var v = data[i][j];
            if(v > maxValue){
                maxValue = v;
            }
        }
    }
    this.maxValue = maxValue;
};

/**
 * Set the height value at an index. Don't forget to update maxValue and minValue after you're done.
 * @method setHeightValueAtIndex
 * @param {integer} xi
 * @param {integer} yi
 * @param {number} value
 */
Heightfield.prototype.setHeightValueAtIndex = function(xi, yi, value){
    var data = this.data;
    data[xi][yi] = value;

    // Invalidate cache
    this.clearCachedConvexTrianglePillar(xi, yi, false);
    if(xi > 0){
        this.clearCachedConvexTrianglePillar(xi - 1, yi, true);
        this.clearCachedConvexTrianglePillar(xi - 1, yi, false);
    }
    if(yi > 0){
        this.clearCachedConvexTrianglePillar(xi, yi - 1, true);
        this.clearCachedConvexTrianglePillar(xi, yi - 1, false);
    }
    if(yi > 0 && xi > 0){
        this.clearCachedConvexTrianglePillar(xi - 1, yi - 1, true);
    }
};

/**
 * Get max/min in a rectangle in the matrix data
 * @method getRectMinMax
 * @param  {integer} iMinX
 * @param  {integer} iMinY
 * @param  {integer} iMaxX
 * @param  {integer} iMaxY
 * @param  {array} [result] An array to store the results in.
 * @return {array} The result array, if it was passed in. Minimum will be at position 0 and max at 1.
 */
Heightfield.prototype.getRectMinMax = function (iMinX, iMinY, iMaxX, iMaxY, result) {
    result = result || [];

    // Get max and min of the data
    var data = this.data,
        max = this.minValue; // Set first value
    for(var i = iMinX; i <= iMaxX; i++){
        for(var j = iMinY; j <= iMaxY; j++){
            var height = data[i][j];
            if(height > max){
                max = height;
            }
        }
    }

    result[0] = this.minValue;
    result[1] = max;
};



/**
 * Get the index of a local position on the heightfield. The indexes indicate the rectangles, so if your terrain is made of N x N height data points, you will have rectangle indexes ranging from 0 to N-1.
 * @method getIndexOfPosition
 * @param  {number} x
 * @param  {number} y
 * @param  {array} result Two-element array
 * @param  {boolean} clamp If the position should be clamped to the heightfield edge.
 * @return {boolean}
 */
Heightfield.prototype.getIndexOfPosition = function (x, y, result, clamp) {

    // Get the index of the data points to test against
    var w = this.elementSize;
    var data = this.data;
    var xi = Math.floor(x / w);
    var yi = Math.floor(y / w);

    result[0] = xi;
    result[1] = yi;

    if(clamp){
        // Clamp index to edges
        if(xi < 0){ xi = 0; }
        if(yi < 0){ yi = 0; }
        if(xi >= data.length - 1){ xi = data.length - 1; }
        if(yi >= data[0].length - 1){ yi = data[0].length - 1; }
    }

    // Bail out if we are out of the terrain
    if(xi < 0 || yi < 0 || xi >= data.length-1 || yi >= data[0].length-1){
        return false;
    }

    return true;
};


var getHeightAt_idx = [];
var getHeightAt_weights = new Vec3();
var getHeightAt_a = new Vec3();
var getHeightAt_b = new Vec3();
var getHeightAt_c = new Vec3();

Heightfield.prototype.getTriangleAt = function(x, y, edgeClamp, a, b, c){
    var idx = getHeightAt_idx;
    this.getIndexOfPosition(x, y, idx, edgeClamp);
    var xi = idx[0];
    var yi = idx[1];

    var data = this.data;
    if(edgeClamp){
        xi = Math.min(data.length - 2, Math.max(0, xi));
        yi = Math.min(data[0].length - 2, Math.max(0, yi));
    }

    var elementSize = this.elementSize;
    var lowerDist2 = Math.pow(x / elementSize - xi, 2) + Math.pow(y / elementSize - yi, 2);
    var upperDist2 = Math.pow(x / elementSize - (xi + 1), 2) + Math.pow(y / elementSize - (yi + 1), 2);
    var upper = lowerDist2 > upperDist2;
    this.getTriangle(xi, yi, upper, a, b, c);
    return upper;
};

var getNormalAt_a = new Vec3();
var getNormalAt_b = new Vec3();
var getNormalAt_c = new Vec3();
var getNormalAt_e0 = new Vec3();
var getNormalAt_e1 = new Vec3();
Heightfield.prototype.getNormalAt = function(x, y, edgeClamp, result){
    var a = getNormalAt_a;
    var b = getNormalAt_b;
    var c = getNormalAt_c;
    var e0 = getNormalAt_e0;
    var e1 = getNormalAt_e1;
    this.getTriangleAt(x, y, edgeClamp, a, b, c);
    b.vsub(a, e0);
    c.vsub(a, e1);
    e0.cross(e1, result);
    result.normalize();
};


/**
 * Get an AABB of a square in the heightfield
 * @param  {number} xi
 * @param  {number} yi
 * @param  {AABB} result
 */
Heightfield.prototype.getAabbAtIndex = function(xi, yi, result){
    var data = this.data;
    var elementSize = this.elementSize;

    result.lowerBound.set(
        xi * elementSize,
        yi * elementSize,
        data[xi][yi]
    );
    result.upperBound.set(
        (xi + 1) * elementSize,
        (yi + 1) * elementSize,
        data[xi + 1][yi + 1]
    );
};


/**
 * Get the height in the heightfield at a given position
 * @param  {number} x
 * @param  {number} y
 * @param  {boolean} edgeClamp
 * @return {number}
 */
Heightfield.prototype.getHeightAt = function(x, y, edgeClamp){
    var data = this.data;
    var a = getHeightAt_a;
    var b = getHeightAt_b;
    var c = getHeightAt_c;
    var idx = getHeightAt_idx;

    this.getIndexOfPosition(x, y, idx, edgeClamp);
    var xi = idx[0];
    var yi = idx[1];
    if(edgeClamp){
        xi = Math.min(data.length - 2, Math.max(0, xi));
        yi = Math.min(data[0].length - 2, Math.max(0, yi));
    }
    var upper = this.getTriangleAt(x, y, edgeClamp, a, b, c);
    barycentricWeights(x, y, a.x, a.y, b.x, b.y, c.x, c.y, getHeightAt_weights);

    var w = getHeightAt_weights;

    if(upper){

        // Top triangle verts
        return data[xi + 1][yi + 1] * w.x + data[xi][yi + 1] * w.y + data[xi + 1][yi] * w.z;

    } else {

        // Top triangle verts
        return data[xi][yi] * w.x + data[xi + 1][yi] * w.y + data[xi][yi + 1] * w.z;
    }
};

// from https://en.wikipedia.org/wiki/Barycentric_coordinate_system
function barycentricWeights(x, y, ax, ay, bx, by, cx, cy, result){
    result.x = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / ((by - cy) * (ax - cx) + (cx - bx) * (ay - cy));
    result.y = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / ((by - cy) * (ax - cx) + (cx - bx) * (ay - cy));
    result.z = 1 - result.x - result.y;
}

Heightfield.prototype.getCacheConvexTrianglePillarKey = function(xi, yi, getUpperTriangle){
    return xi + '_' + yi + '_' + (getUpperTriangle ? 1 : 0);
};

Heightfield.prototype.getCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle){
    return this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
};

Heightfield.prototype.setCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle, convex, offset){
    this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)] = {
        convex: convex,
        offset: offset
    };
};

Heightfield.prototype.clearCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle){
    delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
};

/**
 * Get a triangle from the heightfield
 * @param  {number} xi
 * @param  {number} yi
 * @param  {boolean} upper
 * @param  {Vec3} a
 * @param  {Vec3} b
 * @param  {Vec3} c
 */
Heightfield.prototype.getTriangle = function(xi, yi, upper, a, b, c){
    var data = this.data;
    var elementSize = this.elementSize;

    if(upper){

        // Top triangle verts
        a.set(
            (xi + 1) * elementSize,
            (yi + 1) * elementSize,
            data[xi + 1][yi + 1]
        );
        b.set(
            xi * elementSize,
            (yi + 1) * elementSize,
            data[xi][yi + 1]
        );
        c.set(
            (xi + 1) * elementSize,
            yi * elementSize,
            data[xi + 1][yi]
        );

    } else {

        // Top triangle verts
        a.set(
            xi * elementSize,
            yi * elementSize,
            data[xi][yi]
        );
        b.set(
            (xi + 1) * elementSize,
            yi * elementSize,
            data[xi + 1][yi]
        );
        c.set(
            xi * elementSize,
            (yi + 1) * elementSize,
            data[xi][yi + 1]
        );
    }
};

/**
 * Get a triangle in the terrain in the form of a triangular convex shape.
 * @method getConvexTrianglePillar
 * @param  {integer} i
 * @param  {integer} j
 * @param  {boolean} getUpperTriangle
 */
Heightfield.prototype.getConvexTrianglePillar = function(xi, yi, getUpperTriangle){
    var result = this.pillarConvex;
    var offsetResult = this.pillarOffset;

    if(this.cacheEnabled){
        var data = this.getCachedConvexTrianglePillar(xi, yi, getUpperTriangle);
        if(data){
            this.pillarConvex = data.convex;
            this.pillarOffset = data.offset;
            return;
        }

        result = new ConvexPolyhedron();
        offsetResult = new Vec3();

        this.pillarConvex = result;
        this.pillarOffset = offsetResult;
    }

    var data = this.data;
    var elementSize = this.elementSize;
    var faces = result.faces;

    // Reuse verts if possible
    result.vertices.length = 6;
    for (var i = 0; i < 6; i++) {
        if(!result.vertices[i]){
            result.vertices[i] = new Vec3();
        }
    }

    // Reuse faces if possible
    faces.length = 5;
    for (var i = 0; i < 5; i++) {
        if(!faces[i]){
            faces[i] = [];
        }
    }

    var verts = result.vertices;

    var h = (Math.min(
        data[xi][yi],
        data[xi+1][yi],
        data[xi][yi+1],
        data[xi+1][yi+1]
    ) - this.minValue ) / 2 + this.minValue;

    if (!getUpperTriangle) {

        // Center of the triangle pillar - all polygons are given relative to this one
        offsetResult.set(
            (xi + 0.25) * elementSize, // sort of center of a triangle
            (yi + 0.25) * elementSize,
            h // vertical center
        );

        // Top triangle verts
        verts[0].set(
            -0.25 * elementSize,
            -0.25 * elementSize,
            data[xi][yi] - h
        );
        verts[1].set(
            0.75 * elementSize,
            -0.25 * elementSize,
            data[xi + 1][yi] - h
        );
        verts[2].set(
            -0.25 * elementSize,
            0.75 * elementSize,
            data[xi][yi + 1] - h
        );

        // bottom triangle verts
        verts[3].set(
            -0.25 * elementSize,
            -0.25 * elementSize,
            -h-1
        );
        verts[4].set(
            0.75 * elementSize,
            -0.25 * elementSize,
            -h-1
        );
        verts[5].set(
            -0.25 * elementSize,
            0.75  * elementSize,
            -h-1
        );

        // top triangle
        faces[0][0] = 0;
        faces[0][1] = 1;
        faces[0][2] = 2;

        // bottom triangle
        faces[1][0] = 5;
        faces[1][1] = 4;
        faces[1][2] = 3;

        // -x facing quad
        faces[2][0] = 0;
        faces[2][1] = 2;
        faces[2][2] = 5;
        faces[2][3] = 3;

        // -y facing quad
        faces[3][0] = 1;
        faces[3][1] = 0;
        faces[3][2] = 3;
        faces[3][3] = 4;

        // +xy facing quad
        faces[4][0] = 4;
        faces[4][1] = 5;
        faces[4][2] = 2;
        faces[4][3] = 1;


    } else {

        // Center of the triangle pillar - all polygons are given relative to this one
        offsetResult.set(
            (xi + 0.75) * elementSize, // sort of center of a triangle
            (yi + 0.75) * elementSize,
            h // vertical center
        );

        // Top triangle verts
        verts[0].set(
            0.25 * elementSize,
            0.25 * elementSize,
            data[xi + 1][yi + 1] - h
        );
        verts[1].set(
            -0.75 * elementSize,
            0.25 * elementSize,
            data[xi][yi + 1] - h
        );
        verts[2].set(
            0.25 * elementSize,
            -0.75 * elementSize,
            data[xi + 1][yi] - h
        );

        // bottom triangle verts
        verts[3].set(
            0.25 * elementSize,
            0.25 * elementSize,
            - h-1
        );
        verts[4].set(
            -0.75 * elementSize,
            0.25 * elementSize,
            - h-1
        );
        verts[5].set(
            0.25 * elementSize,
            -0.75 * elementSize,
            - h-1
        );

        // Top triangle
        faces[0][0] = 0;
        faces[0][1] = 1;
        faces[0][2] = 2;

        // bottom triangle
        faces[1][0] = 5;
        faces[1][1] = 4;
        faces[1][2] = 3;

        // +x facing quad
        faces[2][0] = 2;
        faces[2][1] = 5;
        faces[2][2] = 3;
        faces[2][3] = 0;

        // +y facing quad
        faces[3][0] = 3;
        faces[3][1] = 4;
        faces[3][2] = 1;
        faces[3][3] = 0;

        // -xy facing quad
        faces[4][0] = 1;
        faces[4][1] = 4;
        faces[4][2] = 5;
        faces[4][3] = 2;
    }

    result.computeNormals();
    result.computeEdges();
    result.updateBoundingSphereRadius();

    this.setCachedConvexTrianglePillar(xi, yi, getUpperTriangle, result, offsetResult);
};

Heightfield.prototype.calculateLocalInertia = function(mass, target){
    target = target || new Vec3();
    target.set(0, 0, 0);
    return target;
};

Heightfield.prototype.volume = function(){
    return Number.MAX_VALUE; // The terrain is infinite
};

Heightfield.prototype.calculateWorldAABB = function(pos, quat, min, max){
    // TODO: do it properly
    min.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
    max.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
};

Heightfield.prototype.updateBoundingSphereRadius = function(){
    // Use the bounding box of the min/max values
    var data = this.data,
        s = this.elementSize;
    this.boundingSphereRadius = new Vec3(data.length * s, data[0].length * s, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
};

/**
 * Sets the height values from an image. Currently only supported in browser.
 * @method setHeightsFromImage
 * @param {Image} image
 * @param {Vec3} scale
 */
Heightfield.prototype.setHeightsFromImage = function(image, scale){
    var canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    var context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    var imageData = context.getImageData(0, 0, image.width, image.height);

    var matrix = this.data;
    matrix.length = 0;
    this.elementSize = Math.abs(scale.x) / imageData.width;
    for(var i=0; i<imageData.height; i++){
        var row = [];
        for(var j=0; j<imageData.width; j++){
            var a = imageData.data[(i*imageData.height + j) * 4];
            var b = imageData.data[(i*imageData.height + j) * 4 + 1];
            var c = imageData.data[(i*imageData.height + j) * 4 + 2];
            var height = (a + b + c) / 4 / 255 * scale.z;
            if(scale.x < 0){
                row.push(height);
            } else {
                row.unshift(height);
            }
        }
        if(scale.y < 0){
            matrix.unshift(row);
        } else {
            matrix.push(row);
        }
    }
    this.updateMaxValue();
    this.updateMinValue();
    this.update();
};
},{"../math/Vec3":31,"../utils/Utils":54,"./ConvexPolyhedron":39,"./Shape":44}],42:[function(_dereq_,module,exports){
module.exports = Particle;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Particle shape.
 * @class Particle
 * @constructor
 * @author schteppe
 * @extends Shape
 */
function Particle(){
    Shape.call(this, {
        type: Shape.types.PARTICLE
    });
}
Particle.prototype = new Shape();
Particle.prototype.constructor = Particle;

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 * @return {Vec3}
 */
Particle.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    target.set(0, 0, 0);
    return target;
};

Particle.prototype.volume = function(){
    return 0;
};

Particle.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = 0;
};

Particle.prototype.calculateWorldAABB = function(pos,quat,min,max){
    // Get each axis max
    min.copy(pos);
    max.copy(pos);
};

},{"../math/Vec3":31,"./Shape":44}],43:[function(_dereq_,module,exports){
module.exports = Plane;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');

/**
 * A plane, facing in the Z direction. The plane has its surface at z=0 and everything below z=0 is assumed to be solid plane. To make the plane face in some other direction than z, you must put it inside a Body and rotate that body. See the demos.
 * @class Plane
 * @constructor
 * @extends Shape
 * @author schteppe
 */
function Plane(){
    Shape.call(this, {
        type: Shape.types.PLANE
    });

    // World oriented normal
    this.worldNormal = new Vec3();
    this.worldNormalNeedsUpdate = true;

    this.boundingSphereRadius = Number.MAX_VALUE;
}
Plane.prototype = new Shape();
Plane.prototype.constructor = Plane;

Plane.prototype.computeWorldNormal = function(quat){
    var n = this.worldNormal;
    n.set(0,0,1);
    quat.vmult(n,n);
    this.worldNormalNeedsUpdate = false;
};

Plane.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    return target;
};

Plane.prototype.volume = function(){
    return Number.MAX_VALUE; // The plane is infinite...
};

var tempNormal = new Vec3();
Plane.prototype.calculateWorldAABB = function(pos, quat, min, max){
    // The plane AABB is infinite, except if the normal is pointing along any axis
    tempNormal.set(0,0,1); // Default plane normal is z
    quat.vmult(tempNormal,tempNormal);
    var maxVal = Number.MAX_VALUE;
    min.set(-maxVal, -maxVal, -maxVal);
    max.set(maxVal, maxVal, maxVal);

    if(tempNormal.x === 1){ max.x = pos.x; }
    if(tempNormal.y === 1){ max.y = pos.y; }
    if(tempNormal.z === 1){ max.z = pos.z; }

    if(tempNormal.x === -1){ min.x = pos.x; }
    if(tempNormal.y === -1){ min.y = pos.y; }
    if(tempNormal.z === -1){ min.z = pos.z; }
};

Plane.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = Number.MAX_VALUE;
};
},{"../math/Vec3":31,"./Shape":44}],44:[function(_dereq_,module,exports){
module.exports = Shape;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Material = _dereq_('../material/Material');

/**
 * Base class for shapes
 * @class Shape
 * @constructor
 * @param {object} [options]
 * @param {number} [options.collisionFilterGroup=1]
 * @param {number} [options.collisionFilterMask=-1]
 * @param {number} [options.collisionResponse=true]
 * @param {number} [options.material=null]
 * @author schteppe
 */
function Shape(options){
    options = options || {};

    /**
     * Identifyer of the Shape.
     * @property {number} id
     */
    this.id = Shape.idCounter++;

    /**
     * The type of this shape. Must be set to an int > 0 by subclasses.
     * @property type
     * @type {Number}
     * @see Shape.types
     */
    this.type = options.type || 0;

    /**
     * The local bounding sphere radius of this shape.
     * @property {Number} boundingSphereRadius
     */
    this.boundingSphereRadius = 0;

    /**
     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled.
     * @property {boolean} collisionResponse
     */
    this.collisionResponse = options.collisionResponse ? options.collisionResponse : true;

    /**
     * @property {Number} collisionFilterGroup
     */
    this.collisionFilterGroup = options.collisionFilterGroup !== undefined ? options.collisionFilterGroup : 1;

    /**
     * @property {Number} collisionFilterMask
     */
    this.collisionFilterMask = options.collisionFilterMask !== undefined ? options.collisionFilterMask : -1;

    /**
     * @property {Material} material
     */
    this.material = options.material ? options.material : null;

    /**
     * @property {Body} body
     */
    this.body = null;
}
Shape.prototype.constructor = Shape;

/**
 * Computes the bounding sphere radius. The result is stored in the property .boundingSphereRadius
 * @method updateBoundingSphereRadius
 */
Shape.prototype.updateBoundingSphereRadius = function(){
    throw "computeBoundingSphereRadius() not implemented for shape type "+this.type;
};

/**
 * Get the volume of this shape
 * @method volume
 * @return {Number}
 */
Shape.prototype.volume = function(){
    throw "volume() not implemented for shape type "+this.type;
};

/**
 * Calculates the inertia in the local frame for this shape.
 * @method calculateLocalInertia
 * @param {Number} mass
 * @param {Vec3} target
 * @see http://en.wikipedia.org/wiki/List_of_moments_of_inertia
 */
Shape.prototype.calculateLocalInertia = function(mass,target){
    throw "calculateLocalInertia() not implemented for shape type "+this.type;
};

Shape.idCounter = 0;

/**
 * The available shape types.
 * @static
 * @property types
 * @type {Object}
 */
Shape.types = {
    SPHERE:1,
    PLANE:2,
    BOX:4,
    COMPOUND:8,
    CONVEXPOLYHEDRON:16,
    HEIGHTFIELD:32,
    PARTICLE:64,
    CYLINDER:128,
    TRIMESH:256
};


},{"../material/Material":26,"../math/Quaternion":29,"../math/Vec3":31,"./Shape":44}],45:[function(_dereq_,module,exports){
module.exports = Sphere;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');

/**
 * Spherical shape
 * @class Sphere
 * @constructor
 * @extends Shape
 * @param {Number} radius The radius of the sphere, a non-negative number.
 * @author schteppe / http://github.com/schteppe
 */
function Sphere(radius){
    Shape.call(this, {
        type: Shape.types.SPHERE
    });

    /**
     * @property {Number} radius
     */
    this.radius = radius !== undefined ? radius : 1.0;

    if(this.radius < 0){
        throw new Error('The sphere radius cannot be negative.');
    }

    this.updateBoundingSphereRadius();
}
Sphere.prototype = new Shape();
Sphere.prototype.constructor = Sphere;

Sphere.prototype.calculateLocalInertia = function(mass,target){
    target = target || new Vec3();
    var I = 2.0*mass*this.radius*this.radius/5.0;
    target.x = I;
    target.y = I;
    target.z = I;
    return target;
};

Sphere.prototype.volume = function(){
    return 4.0 * Math.PI * this.radius / 3.0;
};

Sphere.prototype.updateBoundingSphereRadius = function(){
    this.boundingSphereRadius = this.radius;
};

Sphere.prototype.calculateWorldAABB = function(pos,quat,min,max){
    var r = this.radius;
    var axes = ['x','y','z'];
    for(var i=0; i<axes.length; i++){
        var ax = axes[i];
        min[ax] = pos[ax] - r;
        max[ax] = pos[ax] + r;
    }
};

},{"../math/Vec3":31,"./Shape":44}],46:[function(_dereq_,module,exports){
module.exports = Trimesh;

var Shape = _dereq_('./Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Transform = _dereq_('../math/Transform');
var AABB = _dereq_('../collision/AABB');
var Octree = _dereq_('../utils/Octree');

/**
 * @class Trimesh
 * @constructor
 * @param {array} vertices
 * @param {array} indices
 * @extends Shape
 * @example
 *     // How to make a mesh with a single triangle
 *     var vertices = [
 *         0, 0, 0, // vertex 0
 *         1, 0, 0, // vertex 1
 *         0, 1, 0  // vertex 2
 *     ];
 *     var indices = [
 *         0, 1, 2  // triangle 0
 *     ];
 *     var trimeshShape = new Trimesh(vertices, indices);
 */
function Trimesh(vertices, indices) {
    Shape.call(this, {
        type: Shape.types.TRIMESH
    });

    /**
     * @property vertices
     * @type {Array}
     */
    this.vertices = new Float32Array(vertices);

    /**
     * Array of integers, indicating which vertices each triangle consists of. The length of this array is thus 3 times the number of triangles.
     * @property indices
     * @type {Array}
     */
    this.indices = new Int16Array(indices);

    /**
     * The normals data.
     * @property normals
     * @type {Array}
     */
    this.normals = new Float32Array(indices.length);

    /**
     * The local AABB of the mesh.
     * @property aabb
     * @type {Array}
     */
    this.aabb = new AABB();

    /**
     * References to vertex pairs, making up all unique edges in the trimesh.
     * @property {array} edges
     */
    this.edges = null;

    /**
     * Local scaling of the mesh. Use .setScale() to set it.
     * @property {Vec3} scale
     */
    this.scale = new Vec3(1, 1, 1);

    /**
     * The indexed triangles. Use .updateTree() to update it.
     * @property {Octree} tree
     */
    this.tree = new Octree();

    this.updateEdges();
    this.updateNormals();
    this.updateAABB();
    this.updateBoundingSphereRadius();
    this.updateTree();
}
Trimesh.prototype = new Shape();
Trimesh.prototype.constructor = Trimesh;

var computeNormals_n = new Vec3();

/**
 * @method updateTree
 */
Trimesh.prototype.updateTree = function(){
    var tree = this.tree;

    tree.reset();
    tree.aabb.copy(this.aabb);
    var scale = this.scale; // The local mesh AABB is scaled, but the octree AABB should be unscaled
    tree.aabb.lowerBound.x *= 1 / scale.x;
    tree.aabb.lowerBound.y *= 1 / scale.y;
    tree.aabb.lowerBound.z *= 1 / scale.z;
    tree.aabb.upperBound.x *= 1 / scale.x;
    tree.aabb.upperBound.y *= 1 / scale.y;
    tree.aabb.upperBound.z *= 1 / scale.z;

    // Insert all triangles
    var triangleAABB = new AABB();
    var a = new Vec3();
    var b = new Vec3();
    var c = new Vec3();
    var points = [a, b, c];
    for (var i = 0; i < this.indices.length / 3; i++) {
        //this.getTriangleVertices(i, a, b, c);

        // Get unscaled triangle verts
        var i3 = i * 3;
        this._getUnscaledVertex(this.indices[i3], a);
        this._getUnscaledVertex(this.indices[i3 + 1], b);
        this._getUnscaledVertex(this.indices[i3 + 2], c);

        triangleAABB.setFromPoints(points);
        tree.insert(triangleAABB, i);
    }
    tree.removeEmptyNodes();
};

var unscaledAABB = new AABB();

/**
 * Get triangles in a local AABB from the trimesh.
 * @method getTrianglesInAABB
 * @param  {AABB} aabb
 * @param  {array} result An array of integers, referencing the queried triangles.
 */
Trimesh.prototype.getTrianglesInAABB = function(aabb, result){
    unscaledAABB.copy(aabb);

    // Scale it to local
    var scale = this.scale;
    var isx = scale.x;
    var isy = scale.y;
    var isz = scale.z;
    var l = unscaledAABB.lowerBound;
    var u = unscaledAABB.upperBound;
    l.x /= isx;
    l.y /= isy;
    l.z /= isz;
    u.x /= isx;
    u.y /= isy;
    u.z /= isz;

    return this.tree.aabbQuery(unscaledAABB, result);
};

/**
 * @method setScale
 * @param {Vec3} scale
 */
Trimesh.prototype.setScale = function(scale){
    var wasUniform = this.scale.x === this.scale.y === this.scale.z;
    var isUniform = scale.x === scale.y === scale.z;

    if(!(wasUniform && isUniform)){
        // Non-uniform scaling. Need to update normals.
        this.updateNormals();
    }
    this.scale.copy(scale);
    this.updateAABB();
    this.updateBoundingSphereRadius();
};

/**
 * Compute the normals of the faces. Will save in the .normals array.
 * @method updateNormals
 */
Trimesh.prototype.updateNormals = function(){
    var n = computeNormals_n;

    // Generate normals
    var normals = this.normals;
    for(var i=0; i < this.indices.length / 3; i++){
        var i3 = i * 3;

        var a = this.indices[i3],
            b = this.indices[i3 + 1],
            c = this.indices[i3 + 2];

        this.getVertex(a, va);
        this.getVertex(b, vb);
        this.getVertex(c, vc);

        Trimesh.computeNormal(vb, va, vc, n);

        normals[i3] = n.x;
        normals[i3 + 1] = n.y;
        normals[i3 + 2] = n.z;
    }
};

/**
 * Update the .edges property
 * @method updateEdges
 */
Trimesh.prototype.updateEdges = function(){
    var edges = {};
    var add = function(indexA, indexB){
        var key = a < b ? a + '_' + b : b + '_' + a;
        edges[key] = true;
    };
    for(var i=0; i < this.indices.length / 3; i++){
        var i3 = i * 3;
        var a = this.indices[i3],
            b = this.indices[i3 + 1],
            c = this.indices[i3 + 2];
        add(a,b);
        add(b,c);
        add(c,a);
    }
    var keys = Object.keys(edges);
    this.edges = new Int16Array(keys.length * 2);
    for (var i = 0; i < keys.length; i++) {
        var indices = keys[i].split('_');
        this.edges[2 * i] = parseInt(indices[0], 10);
        this.edges[2 * i + 1] = parseInt(indices[1], 10);
    }
};

/**
 * Get an edge vertex
 * @method getEdgeVertex
 * @param  {number} edgeIndex
 * @param  {number} firstOrSecond 0 or 1, depending on which one of the vertices you need.
 * @param  {Vec3} vertexStore Where to store the result
 */
Trimesh.prototype.getEdgeVertex = function(edgeIndex, firstOrSecond, vertexStore){
    var vertexIndex = this.edges[edgeIndex * 2 + (firstOrSecond ? 1 : 0)];
    this.getVertex(vertexIndex, vertexStore);
};

var getEdgeVector_va = new Vec3();
var getEdgeVector_vb = new Vec3();

/**
 * Get a vector along an edge.
 * @method getEdgeVector
 * @param  {number} edgeIndex
 * @param  {Vec3} vectorStore
 */
Trimesh.prototype.getEdgeVector = function(edgeIndex, vectorStore){
    var va = getEdgeVector_va;
    var vb = getEdgeVector_vb;
    this.getEdgeVertex(edgeIndex, 0, va);
    this.getEdgeVertex(edgeIndex, 1, vb);
    vb.vsub(va, vectorStore);
};

/**
 * Get face normal given 3 vertices
 * @static
 * @method computeNormal
 * @param {Vec3} va
 * @param {Vec3} vb
 * @param {Vec3} vc
 * @param {Vec3} target
 */
var cb = new Vec3();
var ab = new Vec3();
Trimesh.computeNormal = function ( va, vb, vc, target ) {
    vb.vsub(va,ab);
    vc.vsub(vb,cb);
    cb.cross(ab,target);
    if ( !target.isZero() ) {
        target.normalize();
    }
};

var va = new Vec3();
var vb = new Vec3();
var vc = new Vec3();

/**
 * Get vertex i.
 * @method getVertex
 * @param  {number} i
 * @param  {Vec3} out
 * @return {Vec3} The "out" vector object
 */
Trimesh.prototype.getVertex = function(i, out){
    var scale = this.scale;
    this._getUnscaledVertex(i, out);
    out.x *= scale.x;
    out.y *= scale.y;
    out.z *= scale.z;
    return out;
};

/**
 * Get raw vertex i
 * @private
 * @method _getUnscaledVertex
 * @param  {number} i
 * @param  {Vec3} out
 * @return {Vec3} The "out" vector object
 */
Trimesh.prototype._getUnscaledVertex = function(i, out){
    var i3 = i * 3;
    var vertices = this.vertices;
    return out.set(
        vertices[i3],
        vertices[i3 + 1],
        vertices[i3 + 2]
    );
};

/**
 * Get a vertex from the trimesh,transformed by the given position and quaternion.
 * @method getWorldVertex
 * @param  {number} i
 * @param  {Vec3} pos
 * @param  {Quaternion} quat
 * @param  {Vec3} out
 * @return {Vec3} The "out" vector object
 */
Trimesh.prototype.getWorldVertex = function(i, pos, quat, out){
    this.getVertex(i, out);
    Transform.pointToWorldFrame(pos, quat, out, out);
    return out;
};

/**
 * Get the three vertices for triangle i.
 * @method getTriangleVertices
 * @param  {number} i
 * @param  {Vec3} a
 * @param  {Vec3} b
 * @param  {Vec3} c
 */
Trimesh.prototype.getTriangleVertices = function(i, a, b, c){
    var i3 = i * 3;
    this.getVertex(this.indices[i3], a);
    this.getVertex(this.indices[i3 + 1], b);
    this.getVertex(this.indices[i3 + 2], c);
};

/**
 * Compute the normal of triangle i.
 * @method getNormal
 * @param  {Number} i
 * @param  {Vec3} target
 * @return {Vec3} The "target" vector object
 */
Trimesh.prototype.getNormal = function(i, target){
    var i3 = i * 3;
    return target.set(
        this.normals[i3],
        this.normals[i3 + 1],
        this.normals[i3 + 2]
    );
};

var cli_aabb = new AABB();

/**
 * @method calculateLocalInertia
 * @param  {Number} mass
 * @param  {Vec3} target
 * @return {Vec3} The "target" vector object
 */
Trimesh.prototype.calculateLocalInertia = function(mass,target){
    // Approximate with box inertia
    // Exact inertia calculation is overkill, but see http://geometrictools.com/Documentation/PolyhedralMassProperties.pdf for the correct way to do it
    this.computeLocalAABB(cli_aabb);
    var x = cli_aabb.upperBound.x - cli_aabb.lowerBound.x,
        y = cli_aabb.upperBound.y - cli_aabb.lowerBound.y,
        z = cli_aabb.upperBound.z - cli_aabb.lowerBound.z;
    return target.set(
        1.0 / 12.0 * mass * ( 2*y*2*y + 2*z*2*z ),
        1.0 / 12.0 * mass * ( 2*x*2*x + 2*z*2*z ),
        1.0 / 12.0 * mass * ( 2*y*2*y + 2*x*2*x )
    );
};

var computeLocalAABB_worldVert = new Vec3();

/**
 * Compute the local AABB for the trimesh
 * @method computeLocalAABB
 * @param  {AABB} aabb
 */
Trimesh.prototype.computeLocalAABB = function(aabb){
    var l = aabb.lowerBound,
        u = aabb.upperBound,
        n = this.vertices.length,
        vertices = this.vertices,
        v = computeLocalAABB_worldVert;

    this.getVertex(0, v);
    l.copy(v);
    u.copy(v);

    for(var i=0; i !== n; i++){
        this.getVertex(i, v);

        if(v.x < l.x){
            l.x = v.x;
        } else if(v.x > u.x){
            u.x = v.x;
        }

        if(v.y < l.y){
            l.y = v.y;
        } else if(v.y > u.y){
            u.y = v.y;
        }

        if(v.z < l.z){
            l.z = v.z;
        } else if(v.z > u.z){
            u.z = v.z;
        }
    }
};


/**
 * Update the .aabb property
 * @method updateAABB
 */
Trimesh.prototype.updateAABB = function(){
    this.computeLocalAABB(this.aabb);
};

/**
 * Will update the .boundingSphereRadius property
 * @method updateBoundingSphereRadius
 */
Trimesh.prototype.updateBoundingSphereRadius = function(){
    // Assume points are distributed with local (0,0,0) as center
    var max2 = 0;
    var vertices = this.vertices;
    var v = new Vec3();
    for(var i=0, N=vertices.length / 3; i !== N; i++) {
        this.getVertex(i, v);
        var norm2 = v.norm2();
        if(norm2 > max2){
            max2 = norm2;
        }
    }
    this.boundingSphereRadius = Math.sqrt(max2);
};

var tempWorldVertex = new Vec3();
var calculateWorldAABB_frame = new Transform();
var calculateWorldAABB_aabb = new AABB();

/**
 * @method calculateWorldAABB
 * @param {Vec3}        pos
 * @param {Quaternion}  quat
 * @param {Vec3}        min
 * @param {Vec3}        max
 */
Trimesh.prototype.calculateWorldAABB = function(pos,quat,min,max){
    /*
    var n = this.vertices.length / 3,
        verts = this.vertices;
    var minx,miny,minz,maxx,maxy,maxz;

    var v = tempWorldVertex;
    for(var i=0; i<n; i++){
        this.getVertex(i, v);
        quat.vmult(v, v);
        pos.vadd(v, v);
        if (v.x < minx || minx===undefined){
            minx = v.x;
        } else if(v.x > maxx || maxx===undefined){
            maxx = v.x;
        }

        if (v.y < miny || miny===undefined){
            miny = v.y;
        } else if(v.y > maxy || maxy===undefined){
            maxy = v.y;
        }

        if (v.z < minz || minz===undefined){
            minz = v.z;
        } else if(v.z > maxz || maxz===undefined){
            maxz = v.z;
        }
    }
    min.set(minx,miny,minz);
    max.set(maxx,maxy,maxz);
    */

    // Faster approximation using local AABB
    var frame = calculateWorldAABB_frame;
    var result = calculateWorldAABB_aabb;
    frame.position = pos;
    frame.quaternion = quat;
    this.aabb.toWorldFrame(frame, result);
    min.copy(result.lowerBound);
    max.copy(result.upperBound);
};

/**
 * Get approximate volume
 * @method volume
 * @return {Number}
 */
Trimesh.prototype.volume = function(){
    return 4.0 * Math.PI * this.boundingSphereRadius / 3.0;
};

/**
 * Create a Trimesh instance, shaped as a torus.
 * @static
 * @method createTorus
 * @param  {number} [radius=1]
 * @param  {number} [tube=0.5]
 * @param  {number} [radialSegments=8]
 * @param  {number} [tubularSegments=6]
 * @param  {number} [arc=6.283185307179586]
 * @return {Trimesh} A torus
 */
Trimesh.createTorus = function (radius, tube, radialSegments, tubularSegments, arc) {
    radius = radius || 1;
    tube = tube || 0.5;
    radialSegments = radialSegments || 8;
    tubularSegments = tubularSegments || 6;
    arc = arc || Math.PI * 2;

    var vertices = [];
    var indices = [];

    for ( var j = 0; j <= radialSegments; j ++ ) {
        for ( var i = 0; i <= tubularSegments; i ++ ) {
            var u = i / tubularSegments * arc;
            var v = j / radialSegments * Math.PI * 2;

            var x = ( radius + tube * Math.cos( v ) ) * Math.cos( u );
            var y = ( radius + tube * Math.cos( v ) ) * Math.sin( u );
            var z = tube * Math.sin( v );

            vertices.push( x, y, z );
        }
    }

    for ( var j = 1; j <= radialSegments; j ++ ) {
        for ( var i = 1; i <= tubularSegments; i ++ ) {
            var a = ( tubularSegments + 1 ) * j + i - 1;
            var b = ( tubularSegments + 1 ) * ( j - 1 ) + i - 1;
            var c = ( tubularSegments + 1 ) * ( j - 1 ) + i;
            var d = ( tubularSegments + 1 ) * j + i;

            indices.push(a, b, d);
            indices.push(b, c, d);
        }
    }

    return new Trimesh(vertices, indices);
};

},{"../collision/AABB":3,"../math/Quaternion":29,"../math/Transform":30,"../math/Vec3":31,"../utils/Octree":51,"./Shape":44}],47:[function(_dereq_,module,exports){
module.exports = GSSolver;

var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Solver = _dereq_('./Solver');

/**
 * Constraint equation Gauss-Seidel solver.
 * @class GSSolver
 * @constructor
 * @todo The spook parameters should be specified for each constraint, not globally.
 * @author schteppe / https://github.com/schteppe
 * @see https://www8.cs.umu.se/kurser/5DV058/VT09/lectures/spooknotes.pdf
 * @extends Solver
 */
function GSSolver(){
    Solver.call(this);

    /**
     * The number of solver iterations determines quality of the constraints in the world. The more iterations, the more correct simulation. More iterations need more computations though. If you have a large gravity force in your world, you will need more iterations.
     * @property iterations
     * @type {Number}
     * @todo write more about solver and iterations in the wiki
     */
    this.iterations = 10;

    /**
     * When tolerance is reached, the system is assumed to be converged.
     * @property tolerance
     * @type {Number}
     */
    this.tolerance = 1e-7;
}
GSSolver.prototype = new Solver();

var GSSolver_solve_lambda = []; // Just temporary number holders that we want to reuse each solve.
var GSSolver_solve_invCs = [];
var GSSolver_solve_Bs = [];
GSSolver.prototype.solve = function(dt,world){
    var iter = 0,
        maxIter = this.iterations,
        tolSquared = this.tolerance*this.tolerance,
        equations = this.equations,
        Neq = equations.length,
        bodies = world.bodies,
        Nbodies = bodies.length,
        h = dt,
        q, B, invC, deltalambda, deltalambdaTot, GWlambda, lambdaj;

    // Update solve mass
    if(Neq !== 0){
        for(var i=0; i!==Nbodies; i++){
            bodies[i].updateSolveMassProperties();
        }
    }

    // Things that does not change during iteration can be computed once
    var invCs = GSSolver_solve_invCs,
        Bs = GSSolver_solve_Bs,
        lambda = GSSolver_solve_lambda;
    invCs.length = Neq;
    Bs.length = Neq;
    lambda.length = Neq;
    for(var i=0; i!==Neq; i++){
        var c = equations[i];
        lambda[i] = 0.0;
        Bs[i] = c.computeB(h);
        invCs[i] = 1.0 / c.computeC();
    }

    if(Neq !== 0){

        // Reset vlambda
        for(var i=0; i!==Nbodies; i++){
            var b=bodies[i],
                vlambda=b.vlambda,
                wlambda=b.wlambda;
            vlambda.set(0,0,0);
            wlambda.set(0,0,0);
        }

        // Iterate over equations
        for(iter=0; iter!==maxIter; iter++){

            // Accumulate the total error for each iteration.
            deltalambdaTot = 0.0;

            for(var j=0; j!==Neq; j++){

                var c = equations[j];

                // Compute iteration
                B = Bs[j];
                invC = invCs[j];
                lambdaj = lambda[j];
                GWlambda = c.computeGWlambda();
                deltalambda = invC * ( B - GWlambda - c.eps * lambdaj );

                // Clamp if we are not within the min/max interval
                if(lambdaj + deltalambda < c.minForce){
                    deltalambda = c.minForce - lambdaj;
                } else if(lambdaj + deltalambda > c.maxForce){
                    deltalambda = c.maxForce - lambdaj;
                }
                lambda[j] += deltalambda;

                deltalambdaTot += deltalambda > 0.0 ? deltalambda : -deltalambda; // abs(deltalambda)

                c.addToWlambda(deltalambda);
            }

            // If the total error is small enough - stop iterate
            if(deltalambdaTot*deltalambdaTot < tolSquared){
                break;
            }
        }

        // Add result to velocity
        for(var i=0; i!==Nbodies; i++){
            var b=bodies[i],
                v=b.velocity,
                w=b.angularVelocity;

            b.vlambda.vmul(b.linearFactor, b.vlambda);
            v.vadd(b.vlambda, v);

            b.wlambda.vmul(b.angularFactor, b.wlambda);
            w.vadd(b.wlambda, w);
        }

        // Set the .multiplier property of each equation
        var l = equations.length;
        var invDt = 1 / h;
        while(l--){
            equations[l].multiplier = lambda[l] * invDt;
        }
    }

    return iter;
};

},{"../math/Quaternion":29,"../math/Vec3":31,"./Solver":48}],48:[function(_dereq_,module,exports){
module.exports = Solver;

/**
 * Constraint equation solver base class.
 * @class Solver
 * @constructor
 * @author schteppe / https://github.com/schteppe
 */
function Solver(){
    /**
     * All equations to be solved
     * @property {Array} equations
     */
    this.equations = [];
}

/**
 * Should be implemented in subclasses!
 * @method solve
 * @param  {Number} dt
 * @param  {World} world
 */
Solver.prototype.solve = function(dt,world){
    // Should return the number of iterations done!
    return 0;
};

/**
 * Add an equation
 * @method addEquation
 * @param {Equation} eq
 */
Solver.prototype.addEquation = function(eq){
    if (eq.enabled) {
        this.equations.push(eq);
    }
};

/**
 * Remove an equation
 * @method removeEquation
 * @param {Equation} eq
 */
Solver.prototype.removeEquation = function(eq){
    var eqs = this.equations;
    var i = eqs.indexOf(eq);
    if(i !== -1){
        eqs.splice(i,1);
    }
};

/**
 * Add all equations
 * @method removeAllEquations
 */
Solver.prototype.removeAllEquations = function(){
    this.equations.length = 0;
};


},{}],49:[function(_dereq_,module,exports){
module.exports = SplitSolver;

var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var Solver = _dereq_('./Solver');
var Body = _dereq_('../objects/Body');

/**
 * Splits the equations into islands and solves them independently. Can improve performance.
 * @class SplitSolver
 * @constructor
 * @extends Solver
 * @param {Solver} subsolver
 */
function SplitSolver(subsolver){
    Solver.call(this);
    this.iterations = 10;
    this.tolerance = 1e-7;
    this.subsolver = subsolver;
    this.nodes = [];
    this.nodePool = [];

    // Create needed nodes, reuse if possible
    while(this.nodePool.length < 128){
        this.nodePool.push(this.createNode());
    }
}
SplitSolver.prototype = new Solver();

// Returns the number of subsystems
var SplitSolver_solve_nodes = []; // All allocated node objects
var SplitSolver_solve_nodePool = []; // All allocated node objects
var SplitSolver_solve_eqs = [];   // Temp array
var SplitSolver_solve_bds = [];   // Temp array
var SplitSolver_solve_dummyWorld = {bodies:[]}; // Temp object

var STATIC = Body.STATIC;
function getUnvisitedNode(nodes){
    var Nnodes = nodes.length;
    for(var i=0; i!==Nnodes; i++){
        var node = nodes[i];
        if(!node.visited && !(node.body.type & STATIC)){
            return node;
        }
    }
    return false;
}

var queue = [];
function bfs(root,visitFunc,bds,eqs){
    queue.push(root);
    root.visited = true;
    visitFunc(root,bds,eqs);
    while(queue.length) {
        var node = queue.pop();
        // Loop over unvisited child nodes
        var child;
        while((child = getUnvisitedNode(node.children))) {
            child.visited = true;
            visitFunc(child,bds,eqs);
            queue.push(child);
        }
    }
}

function visitFunc(node,bds,eqs){
    bds.push(node.body);
    var Neqs = node.eqs.length;
    for(var i=0; i!==Neqs; i++){
        var eq = node.eqs[i];
        if(eqs.indexOf(eq) === -1){
            eqs.push(eq);
        }
    }
}

SplitSolver.prototype.createNode = function(){
    return { body:null, children:[], eqs:[], visited:false };
};

/**
 * Solve the subsystems
 * @method solve
 * @param  {Number} dt
 * @param  {World} world
 */
SplitSolver.prototype.solve = function(dt,world){
    var nodes=SplitSolver_solve_nodes,
        nodePool=this.nodePool,
        bodies=world.bodies,
        equations=this.equations,
        Neq=equations.length,
        Nbodies=bodies.length,
        subsolver=this.subsolver;

    // Create needed nodes, reuse if possible
    while(nodePool.length < Nbodies){
        nodePool.push(this.createNode());
    }
    nodes.length = Nbodies;
    for (var i = 0; i < Nbodies; i++) {
        nodes[i] = nodePool[i];
    }

    // Reset node values
    for(var i=0; i!==Nbodies; i++){
        var node = nodes[i];
        node.body = bodies[i];
        node.children.length = 0;
        node.eqs.length = 0;
        node.visited = false;
    }
    for(var k=0; k!==Neq; k++){
        var eq=equations[k],
            i=bodies.indexOf(eq.bi),
            j=bodies.indexOf(eq.bj),
            ni=nodes[i],
            nj=nodes[j];
        ni.children.push(nj);
        ni.eqs.push(eq);
        nj.children.push(ni);
        nj.eqs.push(eq);
    }

    var child, n=0, eqs=SplitSolver_solve_eqs;

    subsolver.tolerance = this.tolerance;
    subsolver.iterations = this.iterations;

    var dummyWorld = SplitSolver_solve_dummyWorld;
    while((child = getUnvisitedNode(nodes))){
        eqs.length = 0;
        dummyWorld.bodies.length = 0;
        bfs(child, visitFunc, dummyWorld.bodies, eqs);

        var Neqs = eqs.length;

        eqs = eqs.sort(sortById);

        for(var i=0; i!==Neqs; i++){
            subsolver.addEquation(eqs[i]);
        }

        var iter = subsolver.solve(dt,dummyWorld);
        subsolver.removeAllEquations();
        n++;
    }

    return n;
};

function sortById(a, b){
    return b.id - a.id;
}
},{"../math/Quaternion":29,"../math/Vec3":31,"../objects/Body":32,"./Solver":48}],50:[function(_dereq_,module,exports){
/**
 * Base class for objects that dispatches events.
 * @class EventTarget
 * @constructor
 */
var EventTarget = function () {

};

module.exports = EventTarget;

EventTarget.prototype = {
    constructor: EventTarget,

    /**
     * Add an event listener
     * @method addEventListener
     * @param  {String} type
     * @param  {Function} listener
     * @return {EventTarget} The self object, for chainability.
     */
    addEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ){ this._listeners = {}; }
        var listeners = this._listeners;
        if ( listeners[ type ] === undefined ) {
            listeners[ type ] = [];
        }
        if ( listeners[ type ].indexOf( listener ) === - 1 ) {
            listeners[ type ].push( listener );
        }
        return this;
    },

    /**
     * Check if an event listener is added
     * @method hasEventListener
     * @param  {String} type
     * @param  {Function} listener
     * @return {Boolean}
     */
    hasEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ){ return false; }
        var listeners = this._listeners;
        if ( listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1 ) {
            return true;
        }
        return false;
    },

    /**
     * Check if any event listener of the given type is added
     * @method hasAnyEventListener
     * @param  {String} type
     * @return {Boolean}
     */
    hasAnyEventListener: function ( type ) {
        if ( this._listeners === undefined ){ return false; }
        var listeners = this._listeners;
        return ( listeners[ type ] !== undefined );
    },

    /**
     * Remove an event listener
     * @method removeEventListener
     * @param  {String} type
     * @param  {Function} listener
     * @return {EventTarget} The self object, for chainability.
     */
    removeEventListener: function ( type, listener ) {
        if ( this._listeners === undefined ){ return this; }
        var listeners = this._listeners;
        if ( listeners[type] === undefined ){ return this; }
        var index = listeners[ type ].indexOf( listener );
        if ( index !== - 1 ) {
            listeners[ type ].splice( index, 1 );
        }
        return this;
    },

    /**
     * Emit an event.
     * @method dispatchEvent
     * @param  {Object} event
     * @param  {String} event.type
     * @return {EventTarget} The self object, for chainability.
     */
    dispatchEvent: function ( event ) {
        if ( this._listeners === undefined ){ return this; }
        var listeners = this._listeners;
        var listenerArray = listeners[ event.type ];
        if ( listenerArray !== undefined ) {
            event.target = this;
            for ( var i = 0, l = listenerArray.length; i < l; i ++ ) {
                listenerArray[ i ].call( this, event );
            }
        }
        return this;
    }
};

},{}],51:[function(_dereq_,module,exports){
var AABB = _dereq_('../collision/AABB');
var Vec3 = _dereq_('../math/Vec3');

module.exports = Octree;

/**
 * @class OctreeNode
 * @param {object} [options]
 * @param {Octree} [options.root]
 * @param {AABB} [options.aabb]
 */
function OctreeNode(options){
    options = options || {};

    /**
     * The root node
     * @property {OctreeNode} root
     */
    this.root = options.root || null;

    /**
     * Boundary of this node
     * @property {AABB} aabb
     */
    this.aabb = options.aabb ? options.aabb.clone() : new AABB();

    /**
     * Contained data at the current node level.
     * @property {Array} data
     */
    this.data = [];

    /**
     * Children to this node
     * @property {Array} children
     */
    this.children = [];
}

/**
 * @class Octree
 * @param {AABB} aabb The total AABB of the tree
 * @param {object} [options]
 * @param {number} [options.maxDepth=8]
 * @extends OctreeNode
 */
function Octree(aabb, options){
    options = options || {};
    options.root = null;
    options.aabb = aabb;
    OctreeNode.call(this, options);

    /**
     * Maximum subdivision depth
     * @property {number} maxDepth
     */
    this.maxDepth = typeof(options.maxDepth) !== 'undefined' ? options.maxDepth : 8;
}
Octree.prototype = new OctreeNode();

OctreeNode.prototype.reset = function(aabb, options){
    this.children.length = this.data.length = 0;
};

/**
 * Insert data into this node
 * @method insert
 * @param  {AABB} aabb
 * @param  {object} elementData
 * @return {boolean} True if successful, otherwise false
 */
OctreeNode.prototype.insert = function(aabb, elementData, level){
    var nodeData = this.data;
    level = level || 0;

    // Ignore objects that do not belong in this node
    if (!this.aabb.contains(aabb)){
        return false; // object cannot be added
    }

    var children = this.children;

    if(level < (this.maxDepth || this.root.maxDepth)){
        // Subdivide if there are no children yet
        var subdivided = false;
        if (!children.length){
            this.subdivide();
            subdivided = true;
        }

        // add to whichever node will accept it
        for (var i = 0; i !== 8; i++) {
            if (children[i].insert(aabb, elementData, level + 1)){
                return true;
            }
        }

        if(subdivided){
            // No children accepted! Might as well just remove em since they contain none
            children.length = 0;
        }
    }

    // Too deep, or children didnt want it. add it in current node
    nodeData.push(elementData);

    return true;
};

var halfDiagonal = new Vec3();

/**
 * Create 8 equally sized children nodes and put them in the .children array.
 * @method subdivide
 */
OctreeNode.prototype.subdivide = function() {
    var aabb = this.aabb;
    var l = aabb.lowerBound;
    var u = aabb.upperBound;

    var children = this.children;

    children.push(
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,0,0) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,0,0) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,1,0) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,1,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,1,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,0,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,0,1) }) }),
        new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,1,0) }) })
    );

    u.vsub(l, halfDiagonal);
    halfDiagonal.scale(0.5, halfDiagonal);

    var root = this.root || this;

    for (var i = 0; i !== 8; i++) {
        var child = children[i];

        // Set current node as root
        child.root = root;

        // Compute bounds
        var lowerBound = child.aabb.lowerBound;
        lowerBound.x *= halfDiagonal.x;
        lowerBound.y *= halfDiagonal.y;
        lowerBound.z *= halfDiagonal.z;

        lowerBound.vadd(l, lowerBound);

        // Upper bound is always lower bound + halfDiagonal
        lowerBound.vadd(halfDiagonal, child.aabb.upperBound);
    }
};

/**
 * Get all data, potentially within an AABB
 * @method aabbQuery
 * @param  {AABB} aabb
 * @param  {array} result
 * @return {array} The "result" object
 */
OctreeNode.prototype.aabbQuery = function(aabb, result) {

    var nodeData = this.data;

    // abort if the range does not intersect this node
    // if (!this.aabb.overlaps(aabb)){
    //     return result;
    // }

    // Add objects at this level
    // Array.prototype.push.apply(result, nodeData);

    // Add child data
    // @todo unwrap recursion into a queue / loop, that's faster in JS
    var children = this.children;


    // for (var i = 0, N = this.children.length; i !== N; i++) {
    //     children[i].aabbQuery(aabb, result);
    // }

    var queue = [this];
    while (queue.length) {
        var node = queue.pop();
        if (node.aabb.overlaps(aabb)){
            Array.prototype.push.apply(result, node.data);
        }
        Array.prototype.push.apply(queue, node.children);
    }

    return result;
};

var tmpAABB = new AABB();

/**
 * Get all data, potentially intersected by a ray.
 * @method rayQuery
 * @param  {Ray} ray
 * @param  {Transform} treeTransform
 * @param  {array} result
 * @return {array} The "result" object
 */
OctreeNode.prototype.rayQuery = function(ray, treeTransform, result) {

    // Use aabb query for now.
    // @todo implement real ray query which needs less lookups
    ray.getAABB(tmpAABB);
    tmpAABB.toLocalFrame(treeTransform, tmpAABB);
    this.aabbQuery(tmpAABB, result);

    return result;
};

/**
 * @method removeEmptyNodes
 */
OctreeNode.prototype.removeEmptyNodes = function() {
    var queue = [this];
    while (queue.length) {
        var node = queue.pop();
        for (var i = node.children.length - 1; i >= 0; i--) {
            if(!node.children[i].data.length){
                node.children.splice(i, 1);
            }
        }
        Array.prototype.push.apply(queue, node.children);
    }
};

},{"../collision/AABB":3,"../math/Vec3":31}],52:[function(_dereq_,module,exports){
module.exports = Pool;

/**
 * For pooling objects that can be reused.
 * @class Pool
 * @constructor
 */
function Pool(){
    /**
     * The pooled objects
     * @property {Array} objects
     */
    this.objects = [];

    /**
     * Constructor of the objects
     * @property {mixed} type
     */
    this.type = Object;
}

/**
 * Release an object after use
 * @method release
 * @param {Object} obj
 */
Pool.prototype.release = function(){
    var Nargs = arguments.length;
    for(var i=0; i!==Nargs; i++){
        this.objects.push(arguments[i]);
    }
    return this;
};

/**
 * Get an object
 * @method get
 * @return {mixed}
 */
Pool.prototype.get = function(){
    if(this.objects.length===0){
        return this.constructObject();
    } else {
        return this.objects.pop();
    }
};

/**
 * Construct an object. Should be implmented in each subclass.
 * @method constructObject
 * @return {mixed}
 */
Pool.prototype.constructObject = function(){
    throw new Error("constructObject() not implemented in this Pool subclass yet!");
};

/**
 * @method resize
 * @param {number} size
 * @return {Pool} Self, for chaining
 */
Pool.prototype.resize = function (size) {
    var objects = this.objects;

    while (objects.length > size) {
        objects.pop();
    }

    while (objects.length < size) {
        objects.push(this.constructObject());
    }

    return this;
};


},{}],53:[function(_dereq_,module,exports){
module.exports = TupleDictionary;

/**
 * @class TupleDictionary
 * @constructor
 */
function TupleDictionary() {

    /**
     * The data storage
     * @property data
     * @type {Object}
     */
    this.data = { keys:[] };
}

/**
 * @method get
 * @param  {Number} i
 * @param  {Number} j
 * @return {Number}
 */
TupleDictionary.prototype.get = function(i, j) {
    if (i > j) {
        // swap
        var temp = j;
        j = i;
        i = temp;
    }
    return this.data[i+'-'+j];
};

/**
 * @method set
 * @param  {Number} i
 * @param  {Number} j
 * @param {Number} value
 */
TupleDictionary.prototype.set = function(i, j, value) {
    if (i > j) {
        var temp = j;
        j = i;
        i = temp;
    }
    var key = i+'-'+j;

    // Check if key already exists
    if(!this.get(i,j)){
        this.data.keys.push(key);
    }

    this.data[key] = value;
};

/**
 * @method reset
 */
TupleDictionary.prototype.reset = function() {
    var data = this.data,
        keys = data.keys;
    while(keys.length > 0){
        var key = keys.pop();
        delete data[key];
    }
};

},{}],54:[function(_dereq_,module,exports){
function Utils(){}

module.exports = Utils;

/**
 * Extend an options object with default values.
 * @static
 * @method defaults
 * @param  {object} options The options object. May be falsy: in this case, a new object is created and returned.
 * @param  {object} defaults An object containing default values.
 * @return {object} The modified options object.
 */
Utils.defaults = function(options, defaults){
    options = options || {};

    for(var key in defaults){
        if(!(key in options)){
            options[key] = defaults[key];
        }
    }

    return options;
};

},{}],55:[function(_dereq_,module,exports){
module.exports = Vec3Pool;

var Vec3 = _dereq_('../math/Vec3');
var Pool = _dereq_('./Pool');

/**
 * @class Vec3Pool
 * @constructor
 * @extends Pool
 */
function Vec3Pool(){
    Pool.call(this);
    this.type = Vec3;
}
Vec3Pool.prototype = new Pool();

/**
 * Construct a vector
 * @method constructObject
 * @return {Vec3}
 */
Vec3Pool.prototype.constructObject = function(){
    return new Vec3();
};

},{"../math/Vec3":31,"./Pool":52}],56:[function(_dereq_,module,exports){
module.exports = Narrowphase;

var AABB = _dereq_('../collision/AABB');
var Body = _dereq_('../objects/Body');
var Shape = _dereq_('../shapes/Shape');
var Ray = _dereq_('../collision/Ray');
var Vec3 = _dereq_('../math/Vec3');
var Transform = _dereq_('../math/Transform');
var ConvexPolyhedron = _dereq_('../shapes/ConvexPolyhedron');
var Quaternion = _dereq_('../math/Quaternion');
var Solver = _dereq_('../solver/Solver');
var Vec3Pool = _dereq_('../utils/Vec3Pool');
var ContactEquation = _dereq_('../equations/ContactEquation');
var FrictionEquation = _dereq_('../equations/FrictionEquation');

/**
 * Helper class for the World. Generates ContactEquations.
 * @class Narrowphase
 * @constructor
 * @todo Sphere-ConvexPolyhedron contacts
 * @todo Contact reduction
 * @todo  should move methods to prototype
 */
function Narrowphase(world){

    /**
     * Internal storage of pooled contact points.
     * @property {Array} contactPointPool
     */
    this.contactPointPool = [];

    this.frictionEquationPool = [];

    this.result = [];
    this.frictionResult = [];

    /**
     * Pooled vectors.
     * @property {Vec3Pool} v3pool
     */
    this.v3pool = new Vec3Pool();

    this.world = world;
    this.currentContactMaterial = null;

    /**
     * @property {Boolean} enableFrictionReduction
     */
    this.enableFrictionReduction = false;
}

/**
 * Make a contact object, by using the internal pool or creating a new one.
 * @method createContactEquation
 * @param {Body} bi
 * @param {Body} bj
 * @param {Shape} si
 * @param {Shape} sj
 * @param {Shape} overrideShapeA
 * @param {Shape} overrideShapeB
 * @return {ContactEquation}
 */
Narrowphase.prototype.createContactEquation = function(bi, bj, si, sj, overrideShapeA, overrideShapeB){
    var c;
    if(this.contactPointPool.length){
        c = this.contactPointPool.pop();
        c.bi = bi;
        c.bj = bj;
    } else {
        c = new ContactEquation(bi, bj);
    }

    c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;

    var cm = this.currentContactMaterial;

    c.restitution = cm.restitution;

    c.setSpookParams(
        cm.contactEquationStiffness,
        cm.contactEquationRelaxation,
        this.world.dt
    );

    var matA = si.material || bi.material;
    var matB = sj.material || bj.material;
    if(matA && matB && matA.restitution >= 0 && matB.restitution >= 0){
        c.restitution = matA.restitution * matB.restitution;
    }

    c.si = overrideShapeA || si;
    c.sj = overrideShapeB || sj;

    return c;
};

Narrowphase.prototype.createFrictionEquationsFromContact = function(contactEquation, outArray){
    var bodyA = contactEquation.bi;
    var bodyB = contactEquation.bj;
    var shapeA = contactEquation.si;
    var shapeB = contactEquation.sj;

    var world = this.world;
    var cm = this.currentContactMaterial;

    // If friction or restitution were specified in the material, use them
    var friction = cm.friction;
    var matA = shapeA.material || bodyA.material;
    var matB = shapeB.material || bodyB.material;
    if(matA && matB && matA.friction >= 0 && matB.friction >= 0){
        friction = matA.friction * matB.friction;
    }

    if(friction > 0){

        // Create 2 tangent equations
        var mug = friction * world.gravity.length();
        var reducedMass = (bodyA.invMass + bodyB.invMass);
        if(reducedMass > 0){
            reducedMass = 1/reducedMass;
        }
        var pool = this.frictionEquationPool;
        var c1 = pool.length ? pool.pop() : new FrictionEquation(bodyA,bodyB,mug*reducedMass);
        var c2 = pool.length ? pool.pop() : new FrictionEquation(bodyA,bodyB,mug*reducedMass);

        c1.bi = c2.bi = bodyA;
        c1.bj = c2.bj = bodyB;
        c1.minForce = c2.minForce = -mug*reducedMass;
        c1.maxForce = c2.maxForce = mug*reducedMass;

        // Copy over the relative vectors
        c1.ri.copy(contactEquation.ri);
        c1.rj.copy(contactEquation.rj);
        c2.ri.copy(contactEquation.ri);
        c2.rj.copy(contactEquation.rj);

        // Construct tangents
        contactEquation.ni.tangents(c1.t, c2.t);

        // Set spook params
        c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
        c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);

        c1.enabled = c2.enabled = contactEquation.enabled;

        outArray.push(c1, c2);

        return true;
    }

    return false;
};

var averageNormal = new Vec3();
var averageContactPointA = new Vec3();
var averageContactPointB = new Vec3();

// Take the average N latest contact point on the plane.
Narrowphase.prototype.createFrictionFromAverage = function(numContacts){
    // The last contactEquation
    var c = this.result[this.result.length - 1];

    // Create the result: two "average" friction equations
    if (!this.createFrictionEquationsFromContact(c, this.frictionResult) || numContacts === 1) {
        return;
    }

    var f1 = this.frictionResult[this.frictionResult.length - 2];
    var f2 = this.frictionResult[this.frictionResult.length - 1];

    averageNormal.setZero();
    averageContactPointA.setZero();
    averageContactPointB.setZero();

    var bodyA = c.bi;
    var bodyB = c.bj;
    for(var i=0; i!==numContacts; i++){
        c = this.result[this.result.length - 1 - i];
        if(c.bodyA !== bodyA){
            averageNormal.vadd(c.ni, averageNormal);
            averageContactPointA.vadd(c.ri, averageContactPointA);
            averageContactPointB.vadd(c.rj, averageContactPointB);
        } else {
            averageNormal.vsub(c.ni, averageNormal);
            averageContactPointA.vadd(c.rj, averageContactPointA);
            averageContactPointB.vadd(c.ri, averageContactPointB);
        }
    }

    var invNumContacts = 1 / numContacts;
    averageContactPointA.scale(invNumContacts, f1.ri);
    averageContactPointB.scale(invNumContacts, f1.rj);
    f2.ri.copy(f1.ri); // Should be the same
    f2.rj.copy(f1.rj);
    averageNormal.normalize();
    averageNormal.tangents(f1.t, f2.t);
    // return eq;
};


var tmpVec1 = new Vec3();
var tmpVec2 = new Vec3();
var tmpQuat1 = new Quaternion();
var tmpQuat2 = new Quaternion();

/**
 * Generate all contacts between a list of body pairs
 * @method getContacts
 * @param {array} p1 Array of body indices
 * @param {array} p2 Array of body indices
 * @param {World} world
 * @param {array} result Array to store generated contacts
 * @param {array} oldcontacts Optional. Array of reusable contact objects
 */
Narrowphase.prototype.getContacts = function(p1, p2, world, result, oldcontacts, frictionResult, frictionPool){
    // Save old contact objects
    this.contactPointPool = oldcontacts;
    this.frictionEquationPool = frictionPool;
    this.result = result;
    this.frictionResult = frictionResult;

    var qi = tmpQuat1;
    var qj = tmpQuat2;
    var xi = tmpVec1;
    var xj = tmpVec2;

    for(var k=0, N=p1.length; k!==N; k++){

        // Get current collision bodies
        var bi = p1[k],
            bj = p2[k];

        // Get contact material
        var bodyContactMaterial = null;
        if(bi.material && bj.material){
            bodyContactMaterial = world.getContactMaterial(bi.material,bj.material) || null;
        }

        var justTest = (
            (
                (bi.type & Body.KINEMATIC) && (bj.type & Body.STATIC)
            ) || (
                (bi.type & Body.STATIC) && (bj.type & Body.KINEMATIC)
            ) || (
                (bi.type & Body.KINEMATIC) && (bj.type & Body.KINEMATIC)
            )
        );

        for (var i = 0; i < bi.shapes.length; i++) {
            bi.quaternion.mult(bi.shapeOrientations[i], qi);
            bi.quaternion.vmult(bi.shapeOffsets[i], xi);
            xi.vadd(bi.position, xi);
            var si = bi.shapes[i];

            for (var j = 0; j < bj.shapes.length; j++) {

                // Compute world transform of shapes
                bj.quaternion.mult(bj.shapeOrientations[j], qj);
                bj.quaternion.vmult(bj.shapeOffsets[j], xj);
                xj.vadd(bj.position, xj);
                var sj = bj.shapes[j];

                if(!((si.collisionFilterMask & sj.collisionFilterGroup) && (sj.collisionFilterMask & si.collisionFilterGroup))){
                    continue;
                }

                if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
                    continue;
                }

                // Get collision material
                var shapeContactMaterial = null;
                if(si.material && sj.material){
                    shapeContactMaterial = world.getContactMaterial(si.material,sj.material) || null;
                }

                this.currentContactMaterial = shapeContactMaterial || bodyContactMaterial || world.defaultContactMaterial;

                // Get contacts
                var resolver = this[si.type | sj.type];
                if(resolver){
                    var retval = false;
                    if (si.type < sj.type) {
                        retval = resolver.call(this, si, sj, xi, xj, qi, qj, bi, bj, si, sj, justTest);
                    } else {
                        retval = resolver.call(this, sj, si, xj, xi, qj, qi, bj, bi, si, sj, justTest);
                    }

                    if(retval && justTest){
                        // Register overlap
                        world.shapeOverlapKeeper.set(si.id, sj.id);
                        world.bodyOverlapKeeper.set(bi.id, bj.id);
                    }
                }
            }
        }
    }
};

var numWarnings = 0;
var maxWarnings = 10;

function warn(msg){
    if(numWarnings > maxWarnings){
        return;
    }

    numWarnings++;

    console.warn(msg);
}

Narrowphase.prototype[Shape.types.BOX | Shape.types.BOX] =
Narrowphase.prototype.boxBox = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    si.convexPolyhedronRepresentation.material = si.material;
    sj.convexPolyhedronRepresentation.material = sj.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
    return this.convexConvex(si.convexPolyhedronRepresentation,sj.convexPolyhedronRepresentation,xi,xj,qi,qj,bi,bj,si,sj,justTest);
};

Narrowphase.prototype[Shape.types.BOX | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.boxConvex = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    si.convexPolyhedronRepresentation.material = si.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    return this.convexConvex(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj,justTest);
};

Narrowphase.prototype[Shape.types.BOX | Shape.types.PARTICLE] =
Narrowphase.prototype.boxParticle = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    si.convexPolyhedronRepresentation.material = si.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    return this.convexParticle(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj,justTest);
};

/**
 * @method sphereSphere
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE] =
Narrowphase.prototype.sphereSphere = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    if(justTest){
        return xi.distanceSquared(xj) < Math.pow(si.radius + sj.radius, 2);
    }

    // We will have only one contact in this case
    var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);

    // Contact normal
    xj.vsub(xi, r.ni);
    r.ni.normalize();

    // Contact point locations
    r.ri.copy(r.ni);
    r.rj.copy(r.ni);
    r.ri.mult(si.radius, r.ri);
    r.rj.mult(-sj.radius, r.rj);

    r.ri.vadd(xi, r.ri);
    r.ri.vsub(bi.position, r.ri);

    r.rj.vadd(xj, r.rj);
    r.rj.vsub(bj.position, r.rj);

    this.result.push(r);

    this.createFrictionEquationsFromContact(r, this.frictionResult);
};

/**
 * @method planeTrimesh
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
var planeTrimesh_normal = new Vec3();
var planeTrimesh_relpos = new Vec3();
var planeTrimesh_projected = new Vec3();
Narrowphase.prototype[Shape.types.PLANE | Shape.types.TRIMESH] =
Narrowphase.prototype.planeTrimesh = function(
    planeShape,
    trimeshShape,
    planePos,
    trimeshPos,
    planeQuat,
    trimeshQuat,
    planeBody,
    trimeshBody,
    rsi,
    rsj,
    justTest
){
    // Make contacts!
    var v = new Vec3();

    var normal = planeTrimesh_normal;
    normal.set(0,0,1);
    planeQuat.vmult(normal,normal); // Turn normal according to plane

    for(var i=0; i<trimeshShape.vertices.length / 3; i++){

        // Get world vertex from trimesh
        trimeshShape.getVertex(i, v);

        // Safe up
        var v2 = new Vec3();
        v2.copy(v);
        Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);

        // Check plane side
        var relpos = planeTrimesh_relpos;
        v.vsub(planePos, relpos);
        var dot = normal.dot(relpos);

        if(dot <= 0.0){
            if(justTest){
                return true;
            }

            var r = this.createContactEquation(planeBody,trimeshBody,planeShape,trimeshShape,rsi,rsj);

            r.ni.copy(normal); // Contact normal is the plane normal

            // Get vertex position projected on plane
            var projected = planeTrimesh_projected;
            normal.scale(relpos.dot(normal), projected);
            v.vsub(projected,projected);

            // ri is the projected world position minus plane position
            r.ri.copy(projected);
            r.ri.vsub(planeBody.position, r.ri);

            r.rj.copy(v);
            r.rj.vsub(trimeshBody.position, r.rj);

            // Store result
            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
        }
    }
};

/**
 * @method sphereTrimesh
 * @param  {Shape}      sphereShape
 * @param  {Shape}      trimeshShape
 * @param  {Vec3}       spherePos
 * @param  {Vec3}       trimeshPos
 * @param  {Quaternion} sphereQuat
 * @param  {Quaternion} trimeshQuat
 * @param  {Body}       sphereBody
 * @param  {Body}       trimeshBody
 */
var sphereTrimesh_normal = new Vec3();
var sphereTrimesh_relpos = new Vec3();
var sphereTrimesh_projected = new Vec3();
var sphereTrimesh_v = new Vec3();
var sphereTrimesh_v2 = new Vec3();
var sphereTrimesh_edgeVertexA = new Vec3();
var sphereTrimesh_edgeVertexB = new Vec3();
var sphereTrimesh_edgeVector = new Vec3();
var sphereTrimesh_edgeVectorUnit = new Vec3();
var sphereTrimesh_localSpherePos = new Vec3();
var sphereTrimesh_tmp = new Vec3();
var sphereTrimesh_va = new Vec3();
var sphereTrimesh_vb = new Vec3();
var sphereTrimesh_vc = new Vec3();
var sphereTrimesh_localSphereAABB = new AABB();
var sphereTrimesh_triangles = [];
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.TRIMESH] =
Narrowphase.prototype.sphereTrimesh = function (
    sphereShape,
    trimeshShape,
    spherePos,
    trimeshPos,
    sphereQuat,
    trimeshQuat,
    sphereBody,
    trimeshBody,
    rsi,
    rsj,
    justTest
) {

    var edgeVertexA = sphereTrimesh_edgeVertexA;
    var edgeVertexB = sphereTrimesh_edgeVertexB;
    var edgeVector = sphereTrimesh_edgeVector;
    var edgeVectorUnit = sphereTrimesh_edgeVectorUnit;
    var localSpherePos = sphereTrimesh_localSpherePos;
    var tmp = sphereTrimesh_tmp;
    var localSphereAABB = sphereTrimesh_localSphereAABB;
    var v2 = sphereTrimesh_v2;
    var relpos = sphereTrimesh_relpos;
    var triangles = sphereTrimesh_triangles;

    // Convert sphere position to local in the trimesh
    Transform.pointToLocalFrame(trimeshPos, trimeshQuat, spherePos, localSpherePos);

    // Get the aabb of the sphere locally in the trimesh
    var sphereRadius = sphereShape.radius;
    localSphereAABB.lowerBound.set(
        localSpherePos.x - sphereRadius,
        localSpherePos.y - sphereRadius,
        localSpherePos.z - sphereRadius
    );
    localSphereAABB.upperBound.set(
        localSpherePos.x + sphereRadius,
        localSpherePos.y + sphereRadius,
        localSpherePos.z + sphereRadius
    );

    trimeshShape.getTrianglesInAABB(localSphereAABB, triangles);
    //for (var i = 0; i < trimeshShape.indices.length / 3; i++) triangles.push(i); // All

    // Vertices
    var v = sphereTrimesh_v;
    var radiusSquared = sphereShape.radius * sphereShape.radius;
    for(var i=0; i<triangles.length; i++){
        for (var j = 0; j < 3; j++) {

            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], v);

            // Check vertex overlap in sphere
            v.vsub(localSpherePos, relpos);

            if(relpos.norm2() <= radiusSquared){

                // Safe up
                v2.copy(v);
                Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);

                v.vsub(spherePos, relpos);

                if(justTest){
                    return true;
                }

                var r = this.createContactEquation(sphereBody,trimeshBody,sphereShape,trimeshShape,rsi,rsj);
                r.ni.copy(relpos);
                r.ni.normalize();

                // ri is the vector from sphere center to the sphere surface
                r.ri.copy(r.ni);
                r.ri.scale(sphereShape.radius, r.ri);
                r.ri.vadd(spherePos, r.ri);
                r.ri.vsub(sphereBody.position, r.ri);

                r.rj.copy(v);
                r.rj.vsub(trimeshBody.position, r.rj);

                // Store result
                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
        }
    }

    // Check all edges
    for(var i=0; i<triangles.length; i++){
        for (var j = 0; j < 3; j++) {

            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], edgeVertexA);
            trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + ((j+1)%3)], edgeVertexB);
            edgeVertexB.vsub(edgeVertexA, edgeVector);

            // Project sphere position to the edge
            localSpherePos.vsub(edgeVertexB, tmp);
            var positionAlongEdgeB = tmp.dot(edgeVector);

            localSpherePos.vsub(edgeVertexA, tmp);
            var positionAlongEdgeA = tmp.dot(edgeVector);

            if(positionAlongEdgeA > 0 && positionAlongEdgeB < 0){

                // Now check the orthogonal distance from edge to sphere center
                localSpherePos.vsub(edgeVertexA, tmp);

                edgeVectorUnit.copy(edgeVector);
                edgeVectorUnit.normalize();
                positionAlongEdgeA = tmp.dot(edgeVectorUnit);

                edgeVectorUnit.scale(positionAlongEdgeA, tmp);
                tmp.vadd(edgeVertexA, tmp);

                // tmp is now the sphere center position projected to the edge, defined locally in the trimesh frame
                var dist = tmp.distanceTo(localSpherePos);
                if(dist < sphereShape.radius){

                    if(justTest){
                        return true;
                    }

                    var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape,rsi,rsj);

                    tmp.vsub(localSpherePos, r.ni);
                    r.ni.normalize();
                    r.ni.scale(sphereShape.radius, r.ri);

                    Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
                    tmp.vsub(trimeshBody.position, r.rj);

                    Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
                    Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);

                    this.result.push(r);
                    this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
            }
        }
    }

    // Triangle faces
    var va = sphereTrimesh_va;
    var vb = sphereTrimesh_vb;
    var vc = sphereTrimesh_vc;
    var normal = sphereTrimesh_normal;
    for(var i=0, N = triangles.length; i !== N; i++){
        trimeshShape.getTriangleVertices(triangles[i], va, vb, vc);
        trimeshShape.getNormal(triangles[i], normal);
        localSpherePos.vsub(va, tmp);
        var dist = tmp.dot(normal);
        normal.scale(dist, tmp);
        localSpherePos.vsub(tmp, tmp);

        // tmp is now the sphere position projected to the triangle plane
        dist = tmp.distanceTo(localSpherePos);
        if(Ray.pointInTriangle(tmp, va, vb, vc) && dist < sphereShape.radius){
            if(justTest){
                return true;
            }
            var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape,rsi,rsj);

            tmp.vsub(localSpherePos, r.ni);
            r.ni.normalize();
            r.ni.scale(sphereShape.radius, r.ri);

            Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
            tmp.vsub(trimeshBody.position, r.rj);

            Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
            Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);

            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
        }
    }

    triangles.length = 0;
};

var point_on_plane_to_sphere = new Vec3();
var plane_to_sphere_ortho = new Vec3();

/**
 * @method spherePlane
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.PLANE] =
Narrowphase.prototype.spherePlane = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    // We will have one contact in this case
    var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);

    // Contact normal
    r.ni.set(0,0,1);
    qj.vmult(r.ni, r.ni);
    r.ni.negate(r.ni); // body i is the sphere, flip normal
    r.ni.normalize(); // Needed?

    // Vector from sphere center to contact point
    r.ni.mult(si.radius, r.ri);

    // Project down sphere on plane
    xi.vsub(xj, point_on_plane_to_sphere);
    r.ni.mult(r.ni.dot(point_on_plane_to_sphere), plane_to_sphere_ortho);
    point_on_plane_to_sphere.vsub(plane_to_sphere_ortho,r.rj); // The sphere position projected to plane

    if(-point_on_plane_to_sphere.dot(r.ni) <= si.radius){

        if(justTest){
            return true;
        }

        // Make it relative to the body
        var ri = r.ri;
        var rj = r.rj;
        ri.vadd(xi, ri);
        ri.vsub(bi.position, ri);
        rj.vadd(xj, rj);
        rj.vsub(bj.position, rj);

        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }
};

// See http://bulletphysics.com/Bullet/BulletFull/SphereTriangleDetector_8cpp_source.html
var pointInPolygon_edge = new Vec3();
var pointInPolygon_edge_x_normal = new Vec3();
var pointInPolygon_vtp = new Vec3();
function pointInPolygon(verts, normal, p){
    var positiveResult = null;
    var N = verts.length;
    for(var i=0; i!==N; i++){
        var v = verts[i];

        // Get edge to the next vertex
        var edge = pointInPolygon_edge;
        verts[(i+1) % (N)].vsub(v,edge);

        // Get cross product between polygon normal and the edge
        var edge_x_normal = pointInPolygon_edge_x_normal;
        //var edge_x_normal = new Vec3();
        edge.cross(normal,edge_x_normal);

        // Get vector between point and current vertex
        var vertex_to_p = pointInPolygon_vtp;
        p.vsub(v,vertex_to_p);

        // This dot product determines which side of the edge the point is
        var r = edge_x_normal.dot(vertex_to_p);

        // If all such dot products have same sign, we are inside the polygon.
        if(positiveResult===null || (r>0 && positiveResult===true) || (r<=0 && positiveResult===false)){
            if(positiveResult===null){
                positiveResult = r>0;
            }
            continue;
        } else {
            return false; // Encountered some other sign. Exit.
        }
    }

    // If we got here, all dot products were of the same sign.
    return true;
}

var box_to_sphere = new Vec3();
var sphereBox_ns = new Vec3();
var sphereBox_ns1 = new Vec3();
var sphereBox_ns2 = new Vec3();
var sphereBox_sides = [new Vec3(),new Vec3(),new Vec3(),new Vec3(),new Vec3(),new Vec3()];
var sphereBox_sphere_to_corner = new Vec3();
var sphereBox_side_ns = new Vec3();
var sphereBox_side_ns1 = new Vec3();
var sphereBox_side_ns2 = new Vec3();

/**
 * @method sphereBox
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.BOX] =
Narrowphase.prototype.sphereBox = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    var v3pool = this.v3pool;

    // we refer to the box as body j
    var sides = sphereBox_sides;
    xi.vsub(xj,box_to_sphere);
    sj.getSideNormals(sides,qj);
    var R =     si.radius;
    var penetrating_sides = [];

    // Check side (plane) intersections
    var found = false;

    // Store the resulting side penetration info
    var side_ns = sphereBox_side_ns;
    var side_ns1 = sphereBox_side_ns1;
    var side_ns2 = sphereBox_side_ns2;
    var side_h = null;
    var side_penetrations = 0;
    var side_dot1 = 0;
    var side_dot2 = 0;
    var side_distance = null;
    for(var idx=0,nsides=sides.length; idx!==nsides && found===false; idx++){
        // Get the plane side normal (ns)
        var ns = sphereBox_ns;
        ns.copy(sides[idx]);

        var h = ns.norm();
        ns.normalize();

        // The normal/distance dot product tells which side of the plane we are
        var dot = box_to_sphere.dot(ns);

        if(dot<h+R && dot>0){
            // Intersects plane. Now check the other two dimensions
            var ns1 = sphereBox_ns1;
            var ns2 = sphereBox_ns2;
            ns1.copy(sides[(idx+1)%3]);
            ns2.copy(sides[(idx+2)%3]);
            var h1 = ns1.norm();
            var h2 = ns2.norm();
            ns1.normalize();
            ns2.normalize();
            var dot1 = box_to_sphere.dot(ns1);
            var dot2 = box_to_sphere.dot(ns2);
            if(dot1<h1 && dot1>-h1 && dot2<h2 && dot2>-h2){
                var dist = Math.abs(dot-h-R);
                if(side_distance===null || dist < side_distance){
                    side_distance = dist;
                    side_dot1 = dot1;
                    side_dot2 = dot2;
                    side_h = h;
                    side_ns.copy(ns);
                    side_ns1.copy(ns1);
                    side_ns2.copy(ns2);
                    side_penetrations++;

                    if(justTest){
                        return true;
                    }
                }
            }
        }
    }
    if(side_penetrations){
        found = true;
        var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
        side_ns.mult(-R,r.ri); // Sphere r
        r.ni.copy(side_ns);
        r.ni.negate(r.ni); // Normal should be out of sphere
        side_ns.mult(side_h,side_ns);
        side_ns1.mult(side_dot1,side_ns1);
        side_ns.vadd(side_ns1,side_ns);
        side_ns2.mult(side_dot2,side_ns2);
        side_ns.vadd(side_ns2,r.rj);

        // Make relative to bodies
        r.ri.vadd(xi, r.ri);
        r.ri.vsub(bi.position, r.ri);
        r.rj.vadd(xj, r.rj);
        r.rj.vsub(bj.position, r.rj);

        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }

    // Check corners
    var rj = v3pool.get();
    var sphere_to_corner = sphereBox_sphere_to_corner;
    for(var j=0; j!==2 && !found; j++){
        for(var k=0; k!==2 && !found; k++){
            for(var l=0; l!==2 && !found; l++){
                rj.set(0,0,0);
                if(j){
                    rj.vadd(sides[0],rj);
                } else {
                    rj.vsub(sides[0],rj);
                }
                if(k){
                    rj.vadd(sides[1],rj);
                } else {
                    rj.vsub(sides[1],rj);
                }
                if(l){
                    rj.vadd(sides[2],rj);
                } else {
                    rj.vsub(sides[2],rj);
                }

                // World position of corner
                xj.vadd(rj,sphere_to_corner);
                sphere_to_corner.vsub(xi,sphere_to_corner);

                if(sphere_to_corner.norm2() < R*R){
                    if(justTest){
                        return true;
                    }
                    found = true;
                    var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
                    r.ri.copy(sphere_to_corner);
                    r.ri.normalize();
                    r.ni.copy(r.ri);
                    r.ri.mult(R,r.ri);
                    r.rj.copy(rj);

                    // Make relative to bodies
                    r.ri.vadd(xi, r.ri);
                    r.ri.vsub(bi.position, r.ri);
                    r.rj.vadd(xj, r.rj);
                    r.rj.vsub(bj.position, r.rj);

                    this.result.push(r);
                    this.createFrictionEquationsFromContact(r, this.frictionResult);
                }
            }
        }
    }
    v3pool.release(rj);
    rj = null;

    // Check edges
    var edgeTangent = v3pool.get();
    var edgeCenter = v3pool.get();
    var r = v3pool.get(); // r = edge center to sphere center
    var orthogonal = v3pool.get();
    var dist = v3pool.get();
    var Nsides = sides.length;
    for(var j=0; j!==Nsides && !found; j++){
        for(var k=0; k!==Nsides && !found; k++){
            if(j%3 !== k%3){
                // Get edge tangent
                sides[k].cross(sides[j],edgeTangent);
                edgeTangent.normalize();
                sides[j].vadd(sides[k], edgeCenter);
                r.copy(xi);
                r.vsub(edgeCenter,r);
                r.vsub(xj,r);
                var orthonorm = r.dot(edgeTangent); // distance from edge center to sphere center in the tangent direction
                edgeTangent.mult(orthonorm,orthogonal); // Vector from edge center to sphere center in the tangent direction

                // Find the third side orthogonal to this one
                var l = 0;
                while(l===j%3 || l===k%3){
                    l++;
                }

                // vec from edge center to sphere projected to the plane orthogonal to the edge tangent
                dist.copy(xi);
                dist.vsub(orthogonal,dist);
                dist.vsub(edgeCenter,dist);
                dist.vsub(xj,dist);

                // Distances in tangent direction and distance in the plane orthogonal to it
                var tdist = Math.abs(orthonorm);
                var ndist = dist.norm();

                if(tdist < sides[l].norm() && ndist<R){
                    if(justTest){
                        return true;
                    }
                    found = true;
                    var res = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
                    edgeCenter.vadd(orthogonal,res.rj); // box rj
                    res.rj.copy(res.rj);
                    dist.negate(res.ni);
                    res.ni.normalize();

                    res.ri.copy(res.rj);
                    res.ri.vadd(xj,res.ri);
                    res.ri.vsub(xi,res.ri);
                    res.ri.normalize();
                    res.ri.mult(R,res.ri);

                    // Make relative to bodies
                    res.ri.vadd(xi, res.ri);
                    res.ri.vsub(bi.position, res.ri);
                    res.rj.vadd(xj, res.rj);
                    res.rj.vsub(bj.position, res.rj);

                    this.result.push(res);
                    this.createFrictionEquationsFromContact(res, this.frictionResult);
                }
            }
        }
    }
    v3pool.release(edgeTangent,edgeCenter,r,orthogonal,dist);
};

var convex_to_sphere = new Vec3();
var sphereConvex_edge = new Vec3();
var sphereConvex_edgeUnit = new Vec3();
var sphereConvex_sphereToCorner = new Vec3();
var sphereConvex_worldCorner = new Vec3();
var sphereConvex_worldNormal = new Vec3();
var sphereConvex_worldPoint = new Vec3();
var sphereConvex_worldSpherePointClosestToPlane = new Vec3();
var sphereConvex_penetrationVec = new Vec3();
var sphereConvex_sphereToWorldPoint = new Vec3();

/**
 * @method sphereConvex
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.sphereConvex = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    var v3pool = this.v3pool;
    xi.vsub(xj,convex_to_sphere);
    var normals = sj.faceNormals;
    var faces = sj.faces;
    var verts = sj.vertices;
    var R =     si.radius;
    var penetrating_sides = [];

    // if(convex_to_sphere.norm2() > si.boundingSphereRadius + sj.boundingSphereRadius){
    //     return;
    // }

    // Check corners
    for(var i=0; i!==verts.length; i++){
        var v = verts[i];

        // World position of corner
        var worldCorner = sphereConvex_worldCorner;
        qj.vmult(v,worldCorner);
        xj.vadd(worldCorner,worldCorner);
        var sphere_to_corner = sphereConvex_sphereToCorner;
        worldCorner.vsub(xi, sphere_to_corner);
        if(sphere_to_corner.norm2() < R * R){
            if(justTest){
                return true;
            }
            found = true;
            var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
            r.ri.copy(sphere_to_corner);
            r.ri.normalize();
            r.ni.copy(r.ri);
            r.ri.mult(R,r.ri);
            worldCorner.vsub(xj,r.rj);

            // Should be relative to the body.
            r.ri.vadd(xi, r.ri);
            r.ri.vsub(bi.position, r.ri);

            // Should be relative to the body.
            r.rj.vadd(xj, r.rj);
            r.rj.vsub(bj.position, r.rj);

            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
            return;
        }
    }

    // Check side (plane) intersections
    var found = false;
    for(var i=0, nfaces=faces.length; i!==nfaces && found===false; i++){
        var normal = normals[i];
        var face = faces[i];

        // Get world-transformed normal of the face
        var worldNormal = sphereConvex_worldNormal;
        qj.vmult(normal,worldNormal);

        // Get a world vertex from the face
        var worldPoint = sphereConvex_worldPoint;
        qj.vmult(verts[face[0]],worldPoint);
        worldPoint.vadd(xj,worldPoint);

        // Get a point on the sphere, closest to the face normal
        var worldSpherePointClosestToPlane = sphereConvex_worldSpherePointClosestToPlane;
        worldNormal.mult(-R, worldSpherePointClosestToPlane);
        xi.vadd(worldSpherePointClosestToPlane, worldSpherePointClosestToPlane);

        // Vector from a face point to the closest point on the sphere
        var penetrationVec = sphereConvex_penetrationVec;
        worldSpherePointClosestToPlane.vsub(worldPoint,penetrationVec);

        // The penetration. Negative value means overlap.
        var penetration = penetrationVec.dot(worldNormal);

        var worldPointToSphere = sphereConvex_sphereToWorldPoint;
        xi.vsub(worldPoint, worldPointToSphere);

        if(penetration < 0 && worldPointToSphere.dot(worldNormal)>0){
            // Intersects plane. Now check if the sphere is inside the face polygon
            var faceVerts = []; // Face vertices, in world coords
            for(var j=0, Nverts=face.length; j!==Nverts; j++){
                var worldVertex = v3pool.get();
                qj.vmult(verts[face[j]], worldVertex);
                xj.vadd(worldVertex,worldVertex);
                faceVerts.push(worldVertex);
            }

            if(pointInPolygon(faceVerts,worldNormal,xi)){ // Is the sphere center in the face polygon?
                if(justTest){
                    return true;
                }
                found = true;
                var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);

                worldNormal.mult(-R, r.ri); // Contact offset, from sphere center to contact
                worldNormal.negate(r.ni); // Normal pointing out of sphere

                var penetrationVec2 = v3pool.get();
                worldNormal.mult(-penetration, penetrationVec2);
                var penetrationSpherePoint = v3pool.get();
                worldNormal.mult(-R, penetrationSpherePoint);

                //xi.vsub(xj).vadd(penetrationSpherePoint).vadd(penetrationVec2 , r.rj);
                xi.vsub(xj,r.rj);
                r.rj.vadd(penetrationSpherePoint,r.rj);
                r.rj.vadd(penetrationVec2 , r.rj);

                // Should be relative to the body.
                r.rj.vadd(xj, r.rj);
                r.rj.vsub(bj.position, r.rj);

                // Should be relative to the body.
                r.ri.vadd(xi, r.ri);
                r.ri.vsub(bi.position, r.ri);

                v3pool.release(penetrationVec2);
                v3pool.release(penetrationSpherePoint);

                this.result.push(r);
                this.createFrictionEquationsFromContact(r, this.frictionResult);

                // Release world vertices
                for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                    v3pool.release(faceVerts[j]);
                }

                return; // We only expect *one* face contact
            } else {
                // Edge?
                for(var j=0; j!==face.length; j++){

                    // Get two world transformed vertices
                    var v1 = v3pool.get();
                    var v2 = v3pool.get();
                    qj.vmult(verts[face[(j+1)%face.length]], v1);
                    qj.vmult(verts[face[(j+2)%face.length]], v2);
                    xj.vadd(v1, v1);
                    xj.vadd(v2, v2);

                    // Construct edge vector
                    var edge = sphereConvex_edge;
                    v2.vsub(v1,edge);

                    // Construct the same vector, but normalized
                    var edgeUnit = sphereConvex_edgeUnit;
                    edge.unit(edgeUnit);

                    // p is xi projected onto the edge
                    var p = v3pool.get();
                    var v1_to_xi = v3pool.get();
                    xi.vsub(v1, v1_to_xi);
                    var dot = v1_to_xi.dot(edgeUnit);
                    edgeUnit.mult(dot, p);
                    p.vadd(v1, p);

                    // Compute a vector from p to the center of the sphere
                    var xi_to_p = v3pool.get();
                    p.vsub(xi, xi_to_p);

                    // Collision if the edge-sphere distance is less than the radius
                    // AND if p is in between v1 and v2
                    if(dot > 0 && dot*dot<edge.norm2() && xi_to_p.norm2() < R*R){ // Collision if the edge-sphere distance is less than the radius
                        // Edge contact!
                        if(justTest){
                            return true;
                        }
                        var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
                        p.vsub(xj,r.rj);

                        p.vsub(xi,r.ni);
                        r.ni.normalize();

                        r.ni.mult(R,r.ri);

                        // Should be relative to the body.
                        r.rj.vadd(xj, r.rj);
                        r.rj.vsub(bj.position, r.rj);

                        // Should be relative to the body.
                        r.ri.vadd(xi, r.ri);
                        r.ri.vsub(bi.position, r.ri);

                        this.result.push(r);
                        this.createFrictionEquationsFromContact(r, this.frictionResult);

                        // Release world vertices
                        for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                            v3pool.release(faceVerts[j]);
                        }

                        v3pool.release(v1);
                        v3pool.release(v2);
                        v3pool.release(p);
                        v3pool.release(xi_to_p);
                        v3pool.release(v1_to_xi);

                        return;
                    }

                    v3pool.release(v1);
                    v3pool.release(v2);
                    v3pool.release(p);
                    v3pool.release(xi_to_p);
                    v3pool.release(v1_to_xi);
                }
            }

            // Release world vertices
            for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                v3pool.release(faceVerts[j]);
            }
        }
    }
};

var planeBox_normal = new Vec3();
var plane_to_corner = new Vec3();

/**
 * @method planeBox
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PLANE | Shape.types.BOX] =
Narrowphase.prototype.planeBox = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    sj.convexPolyhedronRepresentation.material = sj.material;
    sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
    sj.convexPolyhedronRepresentation.id = sj.id;
    return this.planeConvex(si,sj.convexPolyhedronRepresentation,xi,xj,qi,qj,bi,bj,si,sj,justTest);
};

var planeConvex_v = new Vec3();
var planeConvex_normal = new Vec3();
var planeConvex_relpos = new Vec3();
var planeConvex_projected = new Vec3();

/**
 * @method planeConvex
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PLANE | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.planeConvex = function(
    planeShape,
    convexShape,
    planePosition,
    convexPosition,
    planeQuat,
    convexQuat,
    planeBody,
    convexBody,
    si,
    sj,
    justTest
){
    // Simply return the points behind the plane.
    var worldVertex = planeConvex_v,
        worldNormal = planeConvex_normal;
    worldNormal.set(0,0,1);
    planeQuat.vmult(worldNormal,worldNormal); // Turn normal according to plane orientation

    var numContacts = 0;
    var relpos = planeConvex_relpos;
    for(var i = 0; i !== convexShape.vertices.length; i++){

        // Get world convex vertex
        worldVertex.copy(convexShape.vertices[i]);
        convexQuat.vmult(worldVertex, worldVertex);
        convexPosition.vadd(worldVertex, worldVertex);
        worldVertex.vsub(planePosition, relpos);

        var dot = worldNormal.dot(relpos);
        if(dot <= 0.0){
            if(justTest){
                return true;
            }

            var r = this.createContactEquation(planeBody, convexBody, planeShape, convexShape, si, sj);

            // Get vertex position projected on plane
            var projected = planeConvex_projected;
            worldNormal.mult(worldNormal.dot(relpos),projected);
            worldVertex.vsub(projected, projected);
            projected.vsub(planePosition, r.ri); // From plane to vertex projected on plane

            r.ni.copy(worldNormal); // Contact normal is the plane normal out from plane

            // rj is now just the vector from the convex center to the vertex
            worldVertex.vsub(convexPosition, r.rj);

            // Make it relative to the body
            r.ri.vadd(planePosition, r.ri);
            r.ri.vsub(planeBody.position, r.ri);
            r.rj.vadd(convexPosition, r.rj);
            r.rj.vsub(convexBody.position, r.rj);

            this.result.push(r);
            numContacts++;
            if(!this.enableFrictionReduction){
                this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
        }
    }

    if(this.enableFrictionReduction && numContacts){
        this.createFrictionFromAverage(numContacts);
    }
};

var convexConvex_sepAxis = new Vec3();
var convexConvex_q = new Vec3();

/**
 * @method convexConvex
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.convexConvex = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest,faceListA,faceListB){
    var sepAxis = convexConvex_sepAxis;

    if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
        return;
    }

    if(si.findSeparatingAxis(sj,xi,qi,xj,qj,sepAxis,faceListA,faceListB)){
        var res = [];
        var q = convexConvex_q;
        si.clipAgainstHull(xi,qi,sj,xj,qj,sepAxis,-100,100,res);
        var numContacts = 0;
        for(var j = 0; j !== res.length; j++){
            if(justTest){
                return true;
            }
            var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj),
                ri = r.ri,
                rj = r.rj;
            sepAxis.negate(r.ni);
            res[j].normal.negate(q);
            q.mult(res[j].depth, q);
            res[j].point.vadd(q, ri);
            rj.copy(res[j].point);

            // Contact points are in world coordinates. Transform back to relative
            ri.vsub(xi,ri);
            rj.vsub(xj,rj);

            // Make relative to bodies
            ri.vadd(xi, ri);
            ri.vsub(bi.position, ri);
            rj.vadd(xj, rj);
            rj.vsub(bj.position, rj);

            this.result.push(r);
            numContacts++;
            if(!this.enableFrictionReduction){
                this.createFrictionEquationsFromContact(r, this.frictionResult);
            }
        }
        if(this.enableFrictionReduction && numContacts){
            this.createFrictionFromAverage(numContacts);
        }
    }
};


/**
 * @method convexTrimesh
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
// Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.TRIMESH] =
// Narrowphase.prototype.convexTrimesh = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,faceListA,faceListB){
//     var sepAxis = convexConvex_sepAxis;

//     if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
//         return;
//     }

//     // Construct a temp hull for each triangle
//     var hullB = new ConvexPolyhedron();

//     hullB.faces = [[0,1,2]];
//     var va = new Vec3();
//     var vb = new Vec3();
//     var vc = new Vec3();
//     hullB.vertices = [
//         va,
//         vb,
//         vc
//     ];

//     for (var i = 0; i < sj.indices.length / 3; i++) {

//         var triangleNormal = new Vec3();
//         sj.getNormal(i, triangleNormal);
//         hullB.faceNormals = [triangleNormal];

//         sj.getTriangleVertices(i, va, vb, vc);

//         var d = si.testSepAxis(triangleNormal, hullB, xi, qi, xj, qj);
//         if(!d){
//             triangleNormal.scale(-1, triangleNormal);
//             d = si.testSepAxis(triangleNormal, hullB, xi, qi, xj, qj);

//             if(!d){
//                 continue;
//             }
//         }

//         var res = [];
//         var q = convexConvex_q;
//         si.clipAgainstHull(xi,qi,hullB,xj,qj,triangleNormal,-100,100,res);
//         for(var j = 0; j !== res.length; j++){
//             var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj),
//                 ri = r.ri,
//                 rj = r.rj;
//             r.ni.copy(triangleNormal);
//             r.ni.negate(r.ni);
//             res[j].normal.negate(q);
//             q.mult(res[j].depth, q);
//             res[j].point.vadd(q, ri);
//             rj.copy(res[j].point);

//             // Contact points are in world coordinates. Transform back to relative
//             ri.vsub(xi,ri);
//             rj.vsub(xj,rj);

//             // Make relative to bodies
//             ri.vadd(xi, ri);
//             ri.vsub(bi.position, ri);
//             rj.vadd(xj, rj);
//             rj.vsub(bj.position, rj);

//             result.push(r);
//         }
//     }
// };

var particlePlane_normal = new Vec3();
var particlePlane_relpos = new Vec3();
var particlePlane_projected = new Vec3();

/**
 * @method particlePlane
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PLANE | Shape.types.PARTICLE] =
Narrowphase.prototype.planeParticle = function(sj,si,xj,xi,qj,qi,bj,bi,rsi,rsj,justTest){
    var normal = particlePlane_normal;
    normal.set(0,0,1);
    bj.quaternion.vmult(normal,normal); // Turn normal according to plane orientation
    var relpos = particlePlane_relpos;
    xi.vsub(bj.position,relpos);
    var dot = normal.dot(relpos);
    if(dot <= 0.0){

        if(justTest){
            return true;
        }

        var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
        r.ni.copy(normal); // Contact normal is the plane normal
        r.ni.negate(r.ni);
        r.ri.set(0,0,0); // Center of particle

        // Get particle position projected on plane
        var projected = particlePlane_projected;
        normal.mult(normal.dot(xi),projected);
        xi.vsub(projected,projected);
        //projected.vadd(bj.position,projected);

        // rj is now the projected world position minus plane position
        r.rj.copy(projected);
        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }
};

var particleSphere_normal = new Vec3();

/**
 * @method particleSphere
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.SPHERE] =
Narrowphase.prototype.sphereParticle = function(sj,si,xj,xi,qj,qi,bj,bi,rsi,rsj,justTest){
    // The normal is the unit vector from sphere center to particle center
    var normal = particleSphere_normal;
    normal.set(0,0,1);
    xi.vsub(xj,normal);
    var lengthSquared = normal.norm2();

    if(lengthSquared <= sj.radius * sj.radius){
        if(justTest){
            return true;
        }
        var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
        normal.normalize();
        r.rj.copy(normal);
        r.rj.mult(sj.radius,r.rj);
        r.ni.copy(normal); // Contact normal
        r.ni.negate(r.ni);
        r.ri.set(0,0,0); // Center of particle
        this.result.push(r);
        this.createFrictionEquationsFromContact(r, this.frictionResult);
    }
};

// WIP
var cqj = new Quaternion();
var convexParticle_local = new Vec3();
var convexParticle_normal = new Vec3();
var convexParticle_penetratedFaceNormal = new Vec3();
var convexParticle_vertexToParticle = new Vec3();
var convexParticle_worldPenetrationVec = new Vec3();

/**
 * @method convexParticle
 * @param  {Array}      result
 * @param  {Shape}      si
 * @param  {Shape}      sj
 * @param  {Vec3}       xi
 * @param  {Vec3}       xj
 * @param  {Quaternion} qi
 * @param  {Quaternion} qj
 * @param  {Body}       bi
 * @param  {Body}       bj
 */
Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.CONVEXPOLYHEDRON] =
Narrowphase.prototype.convexParticle = function(sj,si,xj,xi,qj,qi,bj,bi,rsi,rsj,justTest){
    var penetratedFaceIndex = -1;
    var penetratedFaceNormal = convexParticle_penetratedFaceNormal;
    var worldPenetrationVec = convexParticle_worldPenetrationVec;
    var minPenetration = null;
    var numDetectedFaces = 0;

    // Convert particle position xi to local coords in the convex
    var local = convexParticle_local;
    local.copy(xi);
    local.vsub(xj,local); // Convert position to relative the convex origin
    qj.conjugate(cqj);
    cqj.vmult(local,local);

    if(sj.pointIsInside(local)){

        if(sj.worldVerticesNeedsUpdate){
            sj.computeWorldVertices(xj,qj);
        }
        if(sj.worldFaceNormalsNeedsUpdate){
            sj.computeWorldFaceNormals(qj);
        }

        // For each world polygon in the polyhedra
        for(var i=0,nfaces=sj.faces.length; i!==nfaces; i++){

            // Construct world face vertices
            var verts = [ sj.worldVertices[ sj.faces[i][0] ] ];
            var normal = sj.worldFaceNormals[i];

            // Check how much the particle penetrates the polygon plane.
            xi.vsub(verts[0],convexParticle_vertexToParticle);
            var penetration = -normal.dot(convexParticle_vertexToParticle);
            if(minPenetration===null || Math.abs(penetration)<Math.abs(minPenetration)){

                if(justTest){
                    return true;
                }

                minPenetration = penetration;
                penetratedFaceIndex = i;
                penetratedFaceNormal.copy(normal);
                numDetectedFaces++;
            }
        }

        if(penetratedFaceIndex!==-1){
            // Setup contact
            var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
            penetratedFaceNormal.mult(minPenetration, worldPenetrationVec);

            // rj is the particle position projected to the face
            worldPenetrationVec.vadd(xi,worldPenetrationVec);
            worldPenetrationVec.vsub(xj,worldPenetrationVec);
            r.rj.copy(worldPenetrationVec);
            //var projectedToFace = xi.vsub(xj).vadd(worldPenetrationVec);
            //projectedToFace.copy(r.rj);

            //qj.vmult(r.rj,r.rj);
            penetratedFaceNormal.negate( r.ni ); // Contact normal
            r.ri.set(0,0,0); // Center of particle

            var ri = r.ri,
                rj = r.rj;

            // Make relative to bodies
            ri.vadd(xi, ri);
            ri.vsub(bi.position, ri);
            rj.vadd(xj, rj);
            rj.vsub(bj.position, rj);

            this.result.push(r);
            this.createFrictionEquationsFromContact(r, this.frictionResult);
        } else {
            console.warn("Point found inside convex, but did not find penetrating face!");
        }
    }
};

Narrowphase.prototype[Shape.types.BOX | Shape.types.HEIGHTFIELD] =
Narrowphase.prototype.boxHeightfield = function (si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
    si.convexPolyhedronRepresentation.material = si.material;
    si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
    return this.convexHeightfield(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj,justTest);
};

var convexHeightfield_tmp1 = new Vec3();
var convexHeightfield_tmp2 = new Vec3();
var convexHeightfield_faceList = [0];

/**
 * @method convexHeightfield
 */
Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.HEIGHTFIELD] =
Narrowphase.prototype.convexHeightfield = function (
    convexShape,
    hfShape,
    convexPos,
    hfPos,
    convexQuat,
    hfQuat,
    convexBody,
    hfBody,
    rsi,
    rsj,
    justTest
){
    var data = hfShape.data,
        w = hfShape.elementSize,
        radius = convexShape.boundingSphereRadius,
        worldPillarOffset = convexHeightfield_tmp2,
        faceList = convexHeightfield_faceList;

    // Get sphere position to heightfield local!
    var localConvexPos = convexHeightfield_tmp1;
    Transform.pointToLocalFrame(hfPos, hfQuat, convexPos, localConvexPos);

    // Get the index of the data points to test against
    var iMinX = Math.floor((localConvexPos.x - radius) / w) - 1,
        iMaxX = Math.ceil((localConvexPos.x + radius) / w) + 1,
        iMinY = Math.floor((localConvexPos.y - radius) / w) - 1,
        iMaxY = Math.ceil((localConvexPos.y + radius) / w) + 1;

    // Bail out if we are out of the terrain
    if(iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMinY > data[0].length){
        return;
    }

    // Clamp index to edges
    if(iMinX < 0){ iMinX = 0; }
    if(iMaxX < 0){ iMaxX = 0; }
    if(iMinY < 0){ iMinY = 0; }
    if(iMaxY < 0){ iMaxY = 0; }
    if(iMinX >= data.length){ iMinX = data.length - 1; }
    if(iMaxX >= data.length){ iMaxX = data.length - 1; }
    if(iMaxY >= data[0].length){ iMaxY = data[0].length - 1; }
    if(iMinY >= data[0].length){ iMinY = data[0].length - 1; }

    var minMax = [];
    hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
    var min = minMax[0];
    var max = minMax[1];

    // Bail out if we're cant touch the bounding height box
    if(localConvexPos.z - radius > max || localConvexPos.z + radius < min){
        return;
    }

    for(var i = iMinX; i < iMaxX; i++){
        for(var j = iMinY; j < iMaxY; j++){

            var intersecting = false;

            // Lower triangle
            hfShape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                intersecting = this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, justTest, faceList, null);
            }

            if(justTest && intersecting){
                return true;
            }

            // Upper triangle
            hfShape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                intersecting = this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, null, null, justTest, faceList, null);
            }

            if(justTest && intersecting){
                return true;
            }
        }
    }
};

var sphereHeightfield_tmp1 = new Vec3();
var sphereHeightfield_tmp2 = new Vec3();

/**
 * @method sphereHeightfield
 */
Narrowphase.prototype[Shape.types.SPHERE | Shape.types.HEIGHTFIELD] =
Narrowphase.prototype.sphereHeightfield = function (
    sphereShape,
    hfShape,
    spherePos,
    hfPos,
    sphereQuat,
    hfQuat,
    sphereBody,
    hfBody,
    rsi,
    rsj,
    justTest
){
    var data = hfShape.data,
        radius = sphereShape.radius,
        w = hfShape.elementSize,
        worldPillarOffset = sphereHeightfield_tmp2;

    // Get sphere position to heightfield local!
    var localSpherePos = sphereHeightfield_tmp1;
    Transform.pointToLocalFrame(hfPos, hfQuat, spherePos, localSpherePos);

    // Get the index of the data points to test against
    var iMinX = Math.floor((localSpherePos.x - radius) / w) - 1,
        iMaxX = Math.ceil((localSpherePos.x + radius) / w) + 1,
        iMinY = Math.floor((localSpherePos.y - radius) / w) - 1,
        iMaxY = Math.ceil((localSpherePos.y + radius) / w) + 1;

    // Bail out if we are out of the terrain
    if(iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMaxY > data[0].length){
        return;
    }

    // Clamp index to edges
    if(iMinX < 0){ iMinX = 0; }
    if(iMaxX < 0){ iMaxX = 0; }
    if(iMinY < 0){ iMinY = 0; }
    if(iMaxY < 0){ iMaxY = 0; }
    if(iMinX >= data.length){ iMinX = data.length - 1; }
    if(iMaxX >= data.length){ iMaxX = data.length - 1; }
    if(iMaxY >= data[0].length){ iMaxY = data[0].length - 1; }
    if(iMinY >= data[0].length){ iMinY = data[0].length - 1; }

    var minMax = [];
    hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
    var min = minMax[0];
    var max = minMax[1];

    // Bail out if we're cant touch the bounding height box
    if(localSpherePos.z - radius > max || localSpherePos.z + radius < min){
        return;
    }

    var result = this.result;
    for(var i = iMinX; i < iMaxX; i++){
        for(var j = iMinY; j < iMaxY; j++){

            var numContactsBefore = result.length;

            var intersecting = false;

            // Lower triangle
            hfShape.getConvexTrianglePillar(i, j, false);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                intersecting = this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody, sphereShape, hfShape, justTest);
            }

            if(justTest && intersecting){
                return true;
            }

            // Upper triangle
            hfShape.getConvexTrianglePillar(i, j, true);
            Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
            if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                intersecting = this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody, sphereShape, hfShape, justTest);
            }

            if(justTest && intersecting){
                return true;
            }

            var numContacts = result.length - numContactsBefore;

            if(numContacts > 2){
                return;
            }
            /*
            // Skip all but 1
            for (var k = 0; k < numContacts - 1; k++) {
                result.pop();
            }
            */
        }
    }
};

},{"../collision/AABB":3,"../collision/Ray":10,"../equations/ContactEquation":20,"../equations/FrictionEquation":22,"../math/Quaternion":29,"../math/Transform":30,"../math/Vec3":31,"../objects/Body":32,"../shapes/ConvexPolyhedron":39,"../shapes/Shape":44,"../solver/Solver":48,"../utils/Vec3Pool":55}],57:[function(_dereq_,module,exports){
/* global performance */

module.exports = World;

var Shape = _dereq_('../shapes/Shape');
var Vec3 = _dereq_('../math/Vec3');
var Quaternion = _dereq_('../math/Quaternion');
var GSSolver = _dereq_('../solver/GSSolver');
var ContactEquation = _dereq_('../equations/ContactEquation');
var FrictionEquation = _dereq_('../equations/FrictionEquation');
var Narrowphase = _dereq_('./Narrowphase');
var EventTarget = _dereq_('../utils/EventTarget');
var ArrayCollisionMatrix = _dereq_('../collision/ArrayCollisionMatrix');
var OverlapKeeper = _dereq_('../collision/OverlapKeeper');
var Material = _dereq_('../material/Material');
var ContactMaterial = _dereq_('../material/ContactMaterial');
var Body = _dereq_('../objects/Body');
var TupleDictionary = _dereq_('../utils/TupleDictionary');
var RaycastResult = _dereq_('../collision/RaycastResult');
var AABB = _dereq_('../collision/AABB');
var Ray = _dereq_('../collision/Ray');
var NaiveBroadphase = _dereq_('../collision/NaiveBroadphase');

/**
 * The physics world
 * @class World
 * @constructor
 * @extends EventTarget
 * @param {object} [options]
 * @param {Vec3} [options.gravity]
 * @param {boolean} [options.allowSleep]
 * @param {Broadphase} [options.broadphase]
 * @param {Solver} [options.solver]
 * @param {boolean} [options.quatNormalizeFast]
 * @param {number} [options.quatNormalizeSkip]
 */
function World(options){
    options = options || {};
    EventTarget.apply(this);

    /**
     * Currently / last used timestep. Is set to -1 if not available. This value is updated before each internal step, which means that it is "fresh" inside event callbacks.
     * @property {Number} dt
     */
    this.dt = -1;

    /**
     * Makes bodies go to sleep when they've been inactive
     * @property allowSleep
     * @type {Boolean}
     * @default false
     */
    this.allowSleep = !!options.allowSleep;

    /**
     * All the current contacts (instances of ContactEquation) in the world.
     * @property contacts
     * @type {Array}
     */
    this.contacts = [];
    this.frictionEquations = [];

    /**
     * How often to normalize quaternions. Set to 0 for every step, 1 for every second etc.. A larger value increases performance. If bodies tend to explode, set to a smaller value (zero to be sure nothing can go wrong).
     * @property quatNormalizeSkip
     * @type {Number}
     * @default 0
     */
    this.quatNormalizeSkip = options.quatNormalizeSkip !== undefined ? options.quatNormalizeSkip : 0;

    /**
     * Set to true to use fast quaternion normalization. It is often enough accurate to use. If bodies tend to explode, set to false.
     * @property quatNormalizeFast
     * @type {Boolean}
     * @see Quaternion.normalizeFast
     * @see Quaternion.normalize
     * @default false
     */
    this.quatNormalizeFast = options.quatNormalizeFast !== undefined ? options.quatNormalizeFast : false;

    /**
     * The wall-clock time since simulation start
     * @property time
     * @type {Number}
     */
    this.time = 0.0;

    /**
     * Number of timesteps taken since start
     * @property stepnumber
     * @type {Number}
     */
    this.stepnumber = 0;

    /// Default and last timestep sizes
    this.default_dt = 1/60;

    this.nextId = 0;
    /**
     * @property gravity
     * @type {Vec3}
     */
    this.gravity = new Vec3();
    if(options.gravity){
        this.gravity.copy(options.gravity);
    }

    /**
     * The broadphase algorithm to use. Default is NaiveBroadphase
     * @property broadphase
     * @type {Broadphase}
     */
    this.broadphase = options.broadphase !== undefined ? options.broadphase : new NaiveBroadphase();

    /**
     * @property bodies
     * @type {Array}
     */
    this.bodies = [];

    /**
     * The solver algorithm to use. Default is GSSolver
     * @property solver
     * @type {Solver}
     */
    this.solver = options.solver !== undefined ? options.solver : new GSSolver();

    /**
     * @property constraints
     * @type {Array}
     */
    this.constraints = [];

    /**
     * @property narrowphase
     * @type {Narrowphase}
     */
    this.narrowphase = new Narrowphase(this);

    /**
     * @property {ArrayCollisionMatrix} collisionMatrix
	 * @type {ArrayCollisionMatrix}
	 */
	this.collisionMatrix = new ArrayCollisionMatrix();

    /**
     * CollisionMatrix from the previous step.
     * @property {ArrayCollisionMatrix} collisionMatrixPrevious
	 * @type {ArrayCollisionMatrix}
	 */
	this.collisionMatrixPrevious = new ArrayCollisionMatrix();

    this.bodyOverlapKeeper = new OverlapKeeper();
    this.shapeOverlapKeeper = new OverlapKeeper();

    /**
     * All added materials
     * @property materials
     * @type {Array}
     */
    this.materials = [];

    /**
     * @property contactmaterials
     * @type {Array}
     */
    this.contactmaterials = [];

    /**
     * Used to look up a ContactMaterial given two instances of Material.
     * @property {TupleDictionary} contactMaterialTable
     */
    this.contactMaterialTable = new TupleDictionary();

    this.defaultMaterial = new Material("default");

    /**
     * This contact material is used if no suitable contactmaterial is found for a contact.
     * @property defaultContactMaterial
     * @type {ContactMaterial}
     */
    this.defaultContactMaterial = new ContactMaterial(this.defaultMaterial, this.defaultMaterial, { friction: 0.3, restitution: 0.0 });

    /**
     * @property doProfiling
     * @type {Boolean}
     */
    this.doProfiling = false;

    /**
     * @property profile
     * @type {Object}
     */
    this.profile = {
        solve:0,
        makeContactConstraints:0,
        broadphase:0,
        integrate:0,
        narrowphase:0,
    };

    /**
     * Time accumulator for interpolation. See http://gafferongames.com/game-physics/fix-your-timestep/
     * @property {Number} accumulator
     */
    this.accumulator = 0;

    /**
     * @property subsystems
     * @type {Array}
     */
    this.subsystems = [];

    /**
     * Dispatched after a body has been added to the world.
     * @event addBody
     * @param {Body} body The body that has been added to the world.
     */
    this.addBodyEvent = {
        type:"addBody",
        body : null
    };

    /**
     * Dispatched after a body has been removed from the world.
     * @event removeBody
     * @param {Body} body The body that has been removed from the world.
     */
    this.removeBodyEvent = {
        type:"removeBody",
        body : null
    };

    this.idToBodyMap = {};

    this.broadphase.setWorld(this);
}
World.prototype = new EventTarget();

// Temp stuff
var tmpAABB1 = new AABB();
var tmpArray1 = [];
var tmpRay = new Ray();

/**
 * Get the contact material between materials m1 and m2
 * @method getContactMaterial
 * @param {Material} m1
 * @param {Material} m2
 * @return {ContactMaterial} The contact material if it was found.
 */
World.prototype.getContactMaterial = function(m1,m2){
    return this.contactMaterialTable.get(m1.id,m2.id); //this.contactmaterials[this.mats2cmat[i+j*this.materials.length]];
};

/**
 * Get number of objects in the world.
 * @method numObjects
 * @return {Number}
 * @deprecated
 */
World.prototype.numObjects = function(){
    return this.bodies.length;
};

/**
 * Store old collision state info
 * @method collisionMatrixTick
 */
World.prototype.collisionMatrixTick = function(){
	var temp = this.collisionMatrixPrevious;
	this.collisionMatrixPrevious = this.collisionMatrix;
	this.collisionMatrix = temp;
	this.collisionMatrix.reset();

    this.bodyOverlapKeeper.tick();
    this.shapeOverlapKeeper.tick();
};

/**
 * Add a rigid body to the simulation.
 * @method add
 * @param {Body} body
 * @todo If the simulation has not yet started, why recrete and copy arrays for each body? Accumulate in dynamic arrays in this case.
 * @todo Adding an array of bodies should be possible. This would save some loops too
 * @deprecated Use .addBody instead
 */
World.prototype.add = World.prototype.addBody = function(body){
    if(this.bodies.indexOf(body) !== -1){
        return;
    }
    body.index = this.bodies.length;
    this.bodies.push(body);
    body.world = this;
    body.initPosition.copy(body.position);
    body.initVelocity.copy(body.velocity);
    body.timeLastSleepy = this.time;
    if(body instanceof Body){
        body.initAngularVelocity.copy(body.angularVelocity);
        body.initQuaternion.copy(body.quaternion);
    }
	this.collisionMatrix.setNumObjects(this.bodies.length);
    this.addBodyEvent.body = body;
    this.idToBodyMap[body.id] = body;
    this.dispatchEvent(this.addBodyEvent);
};

/**
 * Add a constraint to the simulation.
 * @method addConstraint
 * @param {Constraint} c
 */
World.prototype.addConstraint = function(c){
    this.constraints.push(c);
};

/**
 * Removes a constraint
 * @method removeConstraint
 * @param {Constraint} c
 */
World.prototype.removeConstraint = function(c){
    var idx = this.constraints.indexOf(c);
    if(idx!==-1){
        this.constraints.splice(idx,1);
    }
};

/**
 * Raycast test
 * @method rayTest
 * @param {Vec3} from
 * @param {Vec3} to
 * @param {RaycastResult} result
 * @deprecated Use .raycastAll, .raycastClosest or .raycastAny instead.
 */
World.prototype.rayTest = function(from, to, result){
    if(result instanceof RaycastResult){
        // Do raycastclosest
        this.raycastClosest(from, to, {
            skipBackfaces: true
        }, result);
    } else {
        // Do raycastAll
        this.raycastAll(from, to, {
            skipBackfaces: true
        }, result);
    }
};

/**
 * Ray cast against all bodies. The provided callback will be executed for each hit with a RaycastResult as single argument.
 * @method raycastAll
 * @param  {Vec3} from
 * @param  {Vec3} to
 * @param  {Object} options
 * @param  {number} [options.collisionFilterMask=-1]
 * @param  {number} [options.collisionFilterGroup=-1]
 * @param  {boolean} [options.skipBackfaces=false]
 * @param  {boolean} [options.checkCollisionResponse=true]
 * @param  {Function} callback
 * @return {boolean} True if any body was hit.
 */
World.prototype.raycastAll = function(from, to, options, callback){
    options.mode = Ray.ALL;
    options.from = from;
    options.to = to;
    options.callback = callback;
    return tmpRay.intersectWorld(this, options);
};

/**
 * Ray cast, and stop at the first result. Note that the order is random - but the method is fast.
 * @method raycastAny
 * @param  {Vec3} from
 * @param  {Vec3} to
 * @param  {Object} options
 * @param  {number} [options.collisionFilterMask=-1]
 * @param  {number} [options.collisionFilterGroup=-1]
 * @param  {boolean} [options.skipBackfaces=false]
 * @param  {boolean} [options.checkCollisionResponse=true]
 * @param  {RaycastResult} result
 * @return {boolean} True if any body was hit.
 */
World.prototype.raycastAny = function(from, to, options, result){
    options.mode = Ray.ANY;
    options.from = from;
    options.to = to;
    options.result = result;
    return tmpRay.intersectWorld(this, options);
};

/**
 * Ray cast, and return information of the closest hit.
 * @method raycastClosest
 * @param  {Vec3} from
 * @param  {Vec3} to
 * @param  {Object} options
 * @param  {number} [options.collisionFilterMask=-1]
 * @param  {number} [options.collisionFilterGroup=-1]
 * @param  {boolean} [options.skipBackfaces=false]
 * @param  {boolean} [options.checkCollisionResponse=true]
 * @param  {RaycastResult} result
 * @return {boolean} True if any body was hit.
 */
World.prototype.raycastClosest = function(from, to, options, result){
    options.mode = Ray.CLOSEST;
    options.from = from;
    options.to = to;
    options.result = result;
    return tmpRay.intersectWorld(this, options);
};

/**
 * Remove a rigid body from the simulation.
 * @method remove
 * @param {Body} body
 * @deprecated Use .removeBody instead
 */
World.prototype.remove = function(body){
    body.world = null;
    var n = this.bodies.length - 1,
        bodies = this.bodies,
        idx = bodies.indexOf(body);
    if(idx !== -1){
        bodies.splice(idx, 1); // Todo: should use a garbage free method

        // Recompute index
        for(var i=0; i!==bodies.length; i++){
            bodies[i].index = i;
        }

        this.collisionMatrix.setNumObjects(n);
        this.removeBodyEvent.body = body;
        delete this.idToBodyMap[body.id];
        this.dispatchEvent(this.removeBodyEvent);
    }
};

/**
 * Remove a rigid body from the simulation.
 * @method removeBody
 * @param {Body} body
 */
World.prototype.removeBody = World.prototype.remove;

World.prototype.getBodyById = function(id){
    return this.idToBodyMap[id];
};

// TODO Make a faster map
World.prototype.getShapeById = function(id){
    var bodies = this.bodies;
    for(var i=0, bl = bodies.length; i<bl; i++){
        var shapes = bodies[i].shapes;
        for (var j = 0, sl = shapes.length; j < sl; j++) {
            var shape = shapes[j];
            if(shape.id === id){
                return shape;
            }
        }
    }
};

/**
 * Adds a material to the World.
 * @method addMaterial
 * @param {Material} m
 * @todo Necessary?
 */
World.prototype.addMaterial = function(m){
    this.materials.push(m);
};

/**
 * Adds a contact material to the World
 * @method addContactMaterial
 * @param {ContactMaterial} cmat
 */
World.prototype.addContactMaterial = function(cmat) {

    // Add contact material
    this.contactmaterials.push(cmat);

    // Add current contact material to the material table
    this.contactMaterialTable.set(cmat.materials[0].id,cmat.materials[1].id,cmat);
};

// performance.now()
if(typeof performance === 'undefined'){
    performance = {};
}
if(!performance.now){
    var nowOffset = Date.now();
    if (performance.timing && performance.timing.navigationStart){
        nowOffset = performance.timing.navigationStart;
    }
    performance.now = function(){
        return Date.now() - nowOffset;
    };
}

var step_tmp1 = new Vec3();

/**
 * Step the physics world forward in time.
 *
 * There are two modes. The simple mode is fixed timestepping without interpolation. In this case you only use the first argument. The second case uses interpolation. In that you also provide the time since the function was last used, as well as the maximum fixed timesteps to take.
 *
 * @method step
 * @param {Number} dt                       The fixed time step size to use.
 * @param {Number} [timeSinceLastCalled]    The time elapsed since the function was last called.
 * @param {Number} [maxSubSteps=10]         Maximum number of fixed steps to take per function call.
 *
 * @example
 *     // fixed timestepping without interpolation
 *     world.step(1/60);
 *
 * @see http://bulletphysics.org/mediawiki-1.5.8/index.php/Stepping_The_World
 */
World.prototype.step = function(dt, timeSinceLastCalled, maxSubSteps){
    maxSubSteps = maxSubSteps || 10;
    timeSinceLastCalled = timeSinceLastCalled || 0;

    if(timeSinceLastCalled === 0){ // Fixed, simple stepping

        this.internalStep(dt);

        // Increment time
        this.time += dt;

    } else {

        this.accumulator += timeSinceLastCalled;
        var substeps = 0;
        while (this.accumulator >= dt && substeps < maxSubSteps) {
            // Do fixed steps to catch up
            this.internalStep(dt);
            this.accumulator -= dt;
            substeps++;
        }

        var t = (this.accumulator % dt) / dt;
        for(var j=0; j !== this.bodies.length; j++){
            var b = this.bodies[j];
            b.previousPosition.lerp(b.position, t, b.interpolatedPosition);
            b.previousQuaternion.slerp(b.quaternion, t, b.interpolatedQuaternion);
            b.previousQuaternion.normalize();
        }
        this.time += timeSinceLastCalled;
    }
};

var
    /**
     * Dispatched after the world has stepped forward in time.
     * @event postStep
     */
    World_step_postStepEvent = {type:"postStep"}, // Reusable event objects to save memory
    /**
     * Dispatched before the world steps forward in time.
     * @event preStep
     */
    World_step_preStepEvent = {type:"preStep"},
    World_step_collideEvent = {type:Body.COLLIDE_EVENT_NAME, body:null, contact:null },
    World_step_oldContacts = [], // Pools for unused objects
    World_step_frictionEquationPool = [],
    World_step_p1 = [], // Reusable arrays for collision pairs
    World_step_p2 = [],
    World_step_gvec = new Vec3(), // Temporary vectors and quats
    World_step_vi = new Vec3(),
    World_step_vj = new Vec3(),
    World_step_wi = new Vec3(),
    World_step_wj = new Vec3(),
    World_step_t1 = new Vec3(),
    World_step_t2 = new Vec3(),
    World_step_rixn = new Vec3(),
    World_step_rjxn = new Vec3(),
    World_step_step_q = new Quaternion(),
    World_step_step_w = new Quaternion(),
    World_step_step_wq = new Quaternion(),
    invI_tau_dt = new Vec3();
World.prototype.internalStep = function(dt){
    this.dt = dt;

    var world = this,
        that = this,
        contacts = this.contacts,
        p1 = World_step_p1,
        p2 = World_step_p2,
        N = this.numObjects(),
        bodies = this.bodies,
        solver = this.solver,
        gravity = this.gravity,
        doProfiling = this.doProfiling,
        profile = this.profile,
        DYNAMIC = Body.DYNAMIC,
        profilingStart,
        constraints = this.constraints,
        frictionEquationPool = World_step_frictionEquationPool,
        gnorm = gravity.norm(),
        gx = gravity.x,
        gy = gravity.y,
        gz = gravity.z,
        i=0;

    if(doProfiling){
        profilingStart = performance.now();
    }

    // Add gravity to all objects
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi.type === DYNAMIC){ // Only for dynamic bodies
            var f = bi.force, m = bi.mass;
            f.x += m*gx;
            f.y += m*gy;
            f.z += m*gz;
        }
    }

    // Update subsystems
    for(var i=0, Nsubsystems=this.subsystems.length; i!==Nsubsystems; i++){
        this.subsystems[i].update();
    }

    // Collision detection
    if(doProfiling){ profilingStart = performance.now(); }
    p1.length = 0; // Clean up pair arrays from last step
    p2.length = 0;
    this.broadphase.collisionPairs(this,p1,p2);
    if(doProfiling){ profile.broadphase = performance.now() - profilingStart; }

    // Remove constrained pairs with collideConnected == false
    var Nconstraints = constraints.length;
    for(i=0; i!==Nconstraints; i++){
        var c = constraints[i];
        if(!c.collideConnected){
            for(var j = p1.length-1; j>=0; j-=1){
                if( (c.bodyA === p1[j] && c.bodyB === p2[j]) ||
                    (c.bodyB === p1[j] && c.bodyA === p2[j])){
                    p1.splice(j, 1);
                    p2.splice(j, 1);
                }
            }
        }
    }

    this.collisionMatrixTick();

    // Generate contacts
    if(doProfiling){ profilingStart = performance.now(); }
    var oldcontacts = World_step_oldContacts;
    var NoldContacts = contacts.length;

    for(i=0; i!==NoldContacts; i++){
        oldcontacts.push(contacts[i]);
    }
    contacts.length = 0;

    // Transfer FrictionEquation from current list to the pool for reuse
    var NoldFrictionEquations = this.frictionEquations.length;
    for(i=0; i!==NoldFrictionEquations; i++){
        frictionEquationPool.push(this.frictionEquations[i]);
    }
    this.frictionEquations.length = 0;

    this.narrowphase.getContacts(
        p1,
        p2,
        this,
        contacts,
        oldcontacts, // To be reused
        this.frictionEquations,
        frictionEquationPool
    );

    if(doProfiling){
        profile.narrowphase = performance.now() - profilingStart;
    }

    // Loop over all collisions
    if(doProfiling){
        profilingStart = performance.now();
    }

    // Add all friction eqs
    for (var i = 0; i < this.frictionEquations.length; i++) {
        solver.addEquation(this.frictionEquations[i]);
    }

    var ncontacts = contacts.length;
    for(var k=0; k!==ncontacts; k++){

        // Current contact
        var c = contacts[k];

        // Get current collision indeces
        var bi = c.bi,
            bj = c.bj,
            si = c.si,
            sj = c.sj;

        // Get collision properties
        var cm;
        if(bi.material && bj.material){
            cm = this.getContactMaterial(bi.material,bj.material) || this.defaultContactMaterial;
        } else {
            cm = this.defaultContactMaterial;
        }

        // c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;

        var mu = cm.friction;
        // c.restitution = cm.restitution;

        // If friction or restitution were specified in the material, use them
        if(bi.material && bj.material){
            if(bi.material.friction >= 0 && bj.material.friction >= 0){
                mu = bi.material.friction * bj.material.friction;
            }

            if(bi.material.restitution >= 0 && bj.material.restitution >= 0){
                c.restitution = bi.material.restitution * bj.material.restitution;
            }
        }

		// c.setSpookParams(
  //           cm.contactEquationStiffness,
  //           cm.contactEquationRelaxation,
  //           dt
  //       );

		solver.addEquation(c);

		// // Add friction constraint equation
		// if(mu > 0){

		// 	// Create 2 tangent equations
		// 	var mug = mu * gnorm;
		// 	var reducedMass = (bi.invMass + bj.invMass);
		// 	if(reducedMass > 0){
		// 		reducedMass = 1/reducedMass;
		// 	}
		// 	var pool = frictionEquationPool;
		// 	var c1 = pool.length ? pool.pop() : new FrictionEquation(bi,bj,mug*reducedMass);
		// 	var c2 = pool.length ? pool.pop() : new FrictionEquation(bi,bj,mug*reducedMass);
		// 	this.frictionEquations.push(c1, c2);

		// 	c1.bi = c2.bi = bi;
		// 	c1.bj = c2.bj = bj;
		// 	c1.minForce = c2.minForce = -mug*reducedMass;
		// 	c1.maxForce = c2.maxForce = mug*reducedMass;

		// 	// Copy over the relative vectors
		// 	c1.ri.copy(c.ri);
		// 	c1.rj.copy(c.rj);
		// 	c2.ri.copy(c.ri);
		// 	c2.rj.copy(c.rj);

		// 	// Construct tangents
		// 	c.ni.tangents(c1.t, c2.t);

  //           // Set spook params
  //           c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, dt);
  //           c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, dt);

  //           c1.enabled = c2.enabled = c.enabled;

		// 	// Add equations to solver
		// 	solver.addEquation(c1);
		// 	solver.addEquation(c2);
		// }

        if( bi.allowSleep &&
            bi.type === Body.DYNAMIC &&
            bi.sleepState  === Body.SLEEPING &&
            bj.sleepState  === Body.AWAKE &&
            bj.type !== Body.STATIC
        ){
            var speedSquaredB = bj.velocity.norm2() + bj.angularVelocity.norm2();
            var speedLimitSquaredB = Math.pow(bj.sleepSpeedLimit,2);
            if(speedSquaredB >= speedLimitSquaredB*2){
                bi._wakeUpAfterNarrowphase = true;
            }
        }

        if( bj.allowSleep &&
            bj.type === Body.DYNAMIC &&
            bj.sleepState  === Body.SLEEPING &&
            bi.sleepState  === Body.AWAKE &&
            bi.type !== Body.STATIC
        ){
            var speedSquaredA = bi.velocity.norm2() + bi.angularVelocity.norm2();
            var speedLimitSquaredA = Math.pow(bi.sleepSpeedLimit,2);
            if(speedSquaredA >= speedLimitSquaredA*2){
                bj._wakeUpAfterNarrowphase = true;
            }
        }

        // Now we know that i and j are in contact. Set collision matrix state
		this.collisionMatrix.set(bi, bj, true);

        if (!this.collisionMatrixPrevious.get(bi, bj)) {
            // First contact!
            // We reuse the collideEvent object, otherwise we will end up creating new objects for each new contact, even if there's no event listener attached.
            World_step_collideEvent.body = bj;
            World_step_collideEvent.contact = c;
            bi.dispatchEvent(World_step_collideEvent);

            World_step_collideEvent.body = bi;
            bj.dispatchEvent(World_step_collideEvent);
        }

        this.bodyOverlapKeeper.set(bi.id, bj.id);
        this.shapeOverlapKeeper.set(si.id, sj.id);
    }

    this.emitContactEvents();

    if(doProfiling){
        profile.makeContactConstraints = performance.now() - profilingStart;
        profilingStart = performance.now();
    }

    // Wake up bodies
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi._wakeUpAfterNarrowphase){
            bi.wakeUp();
            bi._wakeUpAfterNarrowphase = false;
        }
    }

    // Add user-added constraints
    var Nconstraints = constraints.length;
    for(i=0; i!==Nconstraints; i++){
        var c = constraints[i];
        c.update();
        for(var j=0, Neq=c.equations.length; j!==Neq; j++){
            var eq = c.equations[j];
            solver.addEquation(eq);
        }
    }

    // Solve the constrained system
    solver.solve(dt,this);

    if(doProfiling){
        profile.solve = performance.now() - profilingStart;
    }

    // Remove all contacts from solver
    solver.removeAllEquations();

    // Apply damping, see http://code.google.com/p/bullet/issues/detail?id=74 for details
    var pow = Math.pow;
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi.type & DYNAMIC){ // Only for dynamic bodies
            var ld = pow(1.0 - bi.linearDamping,dt);
            var v = bi.velocity;
            v.mult(ld,v);
            var av = bi.angularVelocity;
            if(av){
                var ad = pow(1.0 - bi.angularDamping,dt);
                av.mult(ad,av);
            }
        }
    }

    this.dispatchEvent(World_step_preStepEvent);

    // Invoke pre-step callbacks
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        if(bi.preStep){
            bi.preStep.call(bi);
        }
    }

    // Leap frog
    // vnew = v + h*f/m
    // xnew = x + h*vnew
    if(doProfiling){
        profilingStart = performance.now();
    }
    var stepnumber = this.stepnumber;
    var quatNormalize = stepnumber % (this.quatNormalizeSkip + 1) === 0;
    var quatNormalizeFast = this.quatNormalizeFast;

    for(i=0; i!==N; i++){
        bodies[i].integrate(dt, quatNormalize, quatNormalizeFast);
    }
    this.clearForces();

    this.broadphase.dirty = true;

    if(doProfiling){
        profile.integrate = performance.now() - profilingStart;
    }

    // Update world time
    this.time += dt;
    this.stepnumber += 1;

    this.dispatchEvent(World_step_postStepEvent);

    // Invoke post-step callbacks
    for(i=0; i!==N; i++){
        var bi = bodies[i];
        var postStep = bi.postStep;
        if(postStep){
            postStep.call(bi);
        }
    }

    // Sleeping update
    if(this.allowSleep){
        for(i=0; i!==N; i++){
            bodies[i].sleepTick(this.time);
        }
    }
};

World.prototype.emitContactEvents = (function(){
    var additions = [];
    var removals = [];
    var beginContactEvent = {
        type: 'beginContact',
        bodyA: null,
        bodyB: null
    };
    var endContactEvent = {
        type: 'endContact',
        bodyA: null,
        bodyB: null
    };
    var beginShapeContactEvent = {
        type: 'beginShapeContact',
        bodyA: null,
        bodyB: null,
        shapeA: null,
        shapeB: null
    };
    var endShapeContactEvent = {
        type: 'endShapeContact',
        bodyA: null,
        bodyB: null,
        shapeA: null,
        shapeB: null
    };
    return function(){
        var hasBeginContact = this.hasAnyEventListener('beginContact');
        var hasEndContact = this.hasAnyEventListener('endContact');

        if(hasBeginContact || hasEndContact){
            this.bodyOverlapKeeper.getDiff(additions, removals);
        }

        if(hasBeginContact){
            for (var i = 0, l = additions.length; i < l; i += 2) {
                beginContactEvent.bodyA = this.getBodyById(additions[i]);
                beginContactEvent.bodyB = this.getBodyById(additions[i+1]);
                this.dispatchEvent(beginContactEvent);
            }
            beginContactEvent.bodyA = beginContactEvent.bodyB = null;
        }

        if(hasEndContact){
            for (var i = 0, l = removals.length; i < l; i += 2) {
                endContactEvent.bodyA = this.getBodyById(removals[i]);
                endContactEvent.bodyB = this.getBodyById(removals[i+1]);
                this.dispatchEvent(endContactEvent);
            }
            endContactEvent.bodyA = endContactEvent.bodyB = null;
        }

        additions.length = removals.length = 0;

        var hasBeginShapeContact = this.hasAnyEventListener('beginShapeContact');
        var hasEndShapeContact = this.hasAnyEventListener('endShapeContact');

        if(hasBeginShapeContact || hasEndShapeContact){
            this.shapeOverlapKeeper.getDiff(additions, removals);
        }

        if(hasBeginShapeContact){
            for (var i = 0, l = additions.length; i < l; i += 2) {
                var shapeA = this.getShapeById(additions[i]);
                var shapeB = this.getShapeById(additions[i+1]);
                beginShapeContactEvent.shapeA = shapeA;
                beginShapeContactEvent.shapeB = shapeB;
                beginShapeContactEvent.bodyA = shapeA.body;
                beginShapeContactEvent.bodyB = shapeB.body;
                this.dispatchEvent(beginShapeContactEvent);
            }
            beginShapeContactEvent.bodyA = beginShapeContactEvent.bodyB = beginShapeContactEvent.shapeA = beginShapeContactEvent.shapeB = null;
        }

        if(hasEndShapeContact){
            for (var i = 0, l = removals.length; i < l; i += 2) {
                var shapeA = this.getShapeById(removals[i]);
                var shapeB = this.getShapeById(removals[i+1]);

                if (shapeA && shapeB) {
                    endShapeContactEvent.shapeA = shapeA;
                    endShapeContactEvent.shapeB = shapeB;
                    endShapeContactEvent.bodyA = shapeA.body;
                    endShapeContactEvent.bodyB = shapeB.body;
                    this.dispatchEvent(endShapeContactEvent);
                }
            }
            endShapeContactEvent.bodyA = endShapeContactEvent.bodyB = endShapeContactEvent.shapeA = endShapeContactEvent.shapeB = null;
        }

    };
})();

/**
 * Sets all body forces in the world to zero.
 * @method clearForces
 */
World.prototype.clearForces = function(){
    var bodies = this.bodies;
    var N = bodies.length;
    for(var i=0; i !== N; i++){
        var b = bodies[i],
            force = b.force,
            tau = b.torque;

        b.force.set(0,0,0);
        b.torque.set(0,0,0);
    }
};

},{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/OverlapKeeper":9,"../collision/Ray":10,"../collision/RaycastResult":11,"../equations/ContactEquation":20,"../equations/FrictionEquation":22,"../material/ContactMaterial":25,"../material/Material":26,"../math/Quaternion":29,"../math/Vec3":31,"../objects/Body":32,"../shapes/Shape":44,"../solver/GSSolver":47,"../utils/EventTarget":50,"../utils/TupleDictionary":53,"./Narrowphase":56}]},{},[2])
(2)
});

/***/ }),

/***/ "./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/_process@0.11.10@process/browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/_process@0.11.10@process/browser.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/GlTFExtensions.js":
/*!******************************************************************************!*\
  !*** ./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/GlTFExtensions.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : GlTFExtensions.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/24/2019, 2:37:20 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
var SourceComponent_1 = __webpack_require__(/*! ./SourceComponent */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SourceComponent.js");
var SystemActor_1 = __webpack_require__(/*! ./SystemActor */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SystemActor.js");
var ListenerComponent_1 = __webpack_require__(/*! ./ListenerComponent */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/ListenerComponent.js");
function getRelativePath(basePath, path) {
    if (/^(?:http|blob|data:|\/)/.test(path)) {
        return path;
    }
    var basePaths = basePath.replace(/\/[^/]*?$/, '').split('/');
    var paths = path.split('/');
    var i = 0;
    for (i = 0; i < paths.length; i += 1) {
        var p = paths[i];
        if (p === '..') {
            basePaths.pop();
        }
        else if (p !== '.') {
            break;
        }
    }
    return basePaths.join('/') + '/' + paths.slice(i).join('/');
}
exports.SeinAudioClipsExtension = {
    name: 'Sein_audioClips',
    init: function (_, parser) {
        var game = parser.game;
        var audioLoader = game.resource.getLoader('Audio');
        if (!audioLoader) {
            throw new Error("Before load gltf contains audioClips, you must register Audio.Loader for type 'Audio' !");
        }
        var actions = [];
        var extensions = parser.json.extensions || {};
        var audioClips = extensions.Sein_audioClips || {};
        var clips = audioClips.clips || [];
        parser.audioClips = {};
        var uri = '';
        var buffer = null;
        clips.forEach(function (clip, index) {
            if (clip.uri) {
                uri = getRelativePath(parser.src, clip.uri);
            }
            else if (clip.bufferView !== undefined && clip.bufferView !== null) {
                var bv = parser.json.bufferViews[clip.bufferView];
                buffer = parser.binaryBody.slice(bv.byteOffset, bv.byteOffset + bv.byteLength);
            }
            actions.push(new Promise(function (resolve, reject) {
                audioLoader.load({ type: 'Audio', url: uri, buffer: buffer, name: '', mode: clip.mode, isLazy: clip.isLazy }, {
                    onLoading: function (_, progress) { },
                    onLoaded: function (entity) {
                        parser.audioClips[index] = entity.result;
                        resolve();
                    },
                    onError: function (_, error) { return reject(error); }
                });
            }));
        });
        return Promise.all(actions);
    },
    parse: function (_, parser, model) {
        model.audioClips = parser.audioClips;
        return model;
    }
};
exports.SeinAudioSourceExtension = {
    name: 'Sein_audioSource',
    instantiate: function (entity, info, game, _, resource) {
        if (Sein.isSceneComponent(entity)) {
            return;
        }
        var clips = info.clips, defaultClip = info.defaultClip, needAutoPlay = info.needAutoPlay, autoPlayOptions = info.autoPlayOptions, spaceOptions = info.spaceOptions, isSpaceAudio = info.isSpaceAudio;
        var realClips = [];
        Object.keys(clips).forEach(function (key) {
            realClips.push({
                name: key,
                clip: resource.audioClips[clips[key]],
                isDefault: key === defaultClip
            });
        });
        var audioSystem = Sein.findActorByClass(game, SystemActor_1.default);
        entity.addComponent('audioSource', SourceComponent_1.default, {
            system: audioSystem,
            autoPlay: needAutoPlay ? autoPlayOptions : null,
            spaceOptions: isSpaceAudio ? spaceOptions : null,
            rotatable: isSpaceAudio ? spaceOptions.rotatable : false,
            clips: realClips
        });
    }
};
exports.SeinAudioListenerExtension = {
    name: 'Sein_audioListener',
    instantiate: function (entity, info) {
        if (Sein.isSceneComponent(entity)) {
            return;
        }
        entity.addComponent('audioListener', ListenerComponent_1.default, {
            rotatable: info.rotatable
        });
    }
};
Sein.GlTFLoader.REGISTER_EXTENSION(exports.SeinAudioClipsExtension);
Sein.GlTFLoader.REGISTER_EXTENSION(exports.SeinAudioSourceExtension);
Sein.GlTFLoader.REGISTER_EXTENSION(exports.SeinAudioListenerExtension);


/***/ }),

/***/ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/ListenerActor.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/ListenerActor.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : ListenerActor.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/22/2019, 6:38:07 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
var ListenerComponent_1 = __webpack_require__(/*! ./ListenerComponent */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/ListenerComponent.js");
/**
 * ListenerComponent的一个简单封装容器。
 */
var ListenerActor = /** @class */ (function (_super) {
    __extends(ListenerActor, _super);
    function ListenerActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListenerActor.prototype.onCreateRoot = function (initState) {
        return this.addComponent('root', ListenerComponent_1.default, initState);
    };
    /**
     * 使其成为主监听器，默认将指定第一个添加的为主监听器。
     */
    ListenerActor.prototype.enable = function () {
        this.root.enable();
        return this;
    };
    /**
     * 取消为主监听器，若不指定其他的监听器，将会使得音频失效。
     */
    ListenerActor.prototype.disable = function () {
        this.root.disable();
        return this;
    };
    ListenerActor = __decorate([
        Sein.SClass({ className: 'AudioListenerActor' })
    ], ListenerActor);
    return ListenerActor;
}(Sein.SceneActor));
exports.default = ListenerActor;


/***/ }),

/***/ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/ListenerComponent.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/ListenerComponent.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : ListenerComponent.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/22/2019, 6:37:56 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
var SystemActor_1 = __webpack_require__(/*! ./SystemActor */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SystemActor.js");
/**
 * 判断一个实例是否为`ListenerComponent`。
 */
function isListenerComponent(value) {
    return value.isAudioListenerComponent;
}
exports.isListenerComponent = isListenerComponent;
/**
 * 判断一个实例是否为`ListenerActor`。
 */
function isListenerActor(value) {
    return value.root.isAudioListenerComponent;
}
exports.isListenerActor = isListenerActor;
/**
 * 音频源组件类。
 *
 * @noInheritDoc
 */
var ListenerComponent = /** @class */ (function (_super) {
    __extends(ListenerComponent, _super);
    function ListenerComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAudioListenerComponent = true;
        /**
         * 此监听器是否是和旋转朝向相关的，如果不是，则无论父级如何旋转，都不会改变音频监听的朝向。
         */
        _this.rotatable = true;
        return _this;
    }
    /**
     * 使其成为主监听器，默认将指定第一个添加的为主监听器。
     */
    ListenerComponent.prototype.enable = function () {
        var _this = this;
        var systems = Sein.findActorsByClass(this.getGame(), SystemActor_1.default, function (actor) { return actor.updatePriority > Sein.SystemActor.UPDATE_PRIORITY.System; });
        if (systems.length <= 0 || systems[0].listener === this) {
            return this;
        }
        systems.forEach(function (system) { return system.setListener(_this); });
        return this;
    };
    /**
     * 取消为主监听器，若不指定其他的监听器，将会使得音频失效。
     */
    ListenerComponent.prototype.disable = function () {
        var systems = Sein.findActorsByClass(this.getGame(), SystemActor_1.default, function (actor) { return actor.updatePriority > Sein.SystemActor.UPDATE_PRIORITY.System; });
        if (systems.length <= 0 || systems[0].listener !== this) {
            return this;
        }
        systems.forEach(function (system) { return system.setListener(null); });
        return this;
    };
    /**
     * 验证是否允许添加，至少要有一个`Audio.SystemActor`才可以。
     */
    ListenerComponent.prototype.verifyAdding = function () {
        var system = Sein.findActorByClass(this.getGame(), SystemActor_1.default);
        if (!system) {
            throw new Error("Before using 'Listener', you must add an 'Audio.SystemActor' to game !");
        }
    };
    /**
     * 加入世界，继承请先`super.onUpdate()`。
     */
    ListenerComponent.prototype.onAdd = function (initState) {
        var system = Sein.findActorByClass(this.getGame(), SystemActor_1.default);
        this.rotatable = initState.rotatable === false ? false : true;
        if (!system.listener) {
            this.enable();
        }
    };
    /**
     * 继承请先`super.onUnLink()`。
     */
    ListenerComponent.prototype.onUnLink = function () {
        this.disable();
    };
    /**
     * 继承请先`super.onReLink()`。
     */
    ListenerComponent.prototype.onReLink = function () {
        this.enable();
    };
    /**
     * 销毁，继承请先`super.onDestroy()`。
     */
    ListenerComponent.prototype.onDestroy = function () {
        this.disable();
    };
    ListenerComponent = __decorate([
        Sein.SClass({ className: 'AudioListenerComponent' })
    ], ListenerComponent);
    return ListenerComponent;
}(Sein.SceneComponent));
exports.default = ListenerComponent;


/***/ }),

/***/ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/Loader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/Loader.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : AudioLoader.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/22/2019, 6:39:12 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
var StreamClip_1 = __webpack_require__(/*! ./clip/StreamClip */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/StreamClip.js");
var BufferClip_1 = __webpack_require__(/*! ./clip/BufferClip */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/BufferClip.js");
var SystemActor_1 = __webpack_require__(/*! ./SystemActor */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SystemActor.js");
/**
 * 判断一个实例是否为`AudioLoader`。
 */
function isLoader(value) {
    return value.isAudioLoader;
}
exports.isLoader = isLoader;
/**
 * @hidden
 */
function decodeAudioData(data, audioSystem) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                return [2 /*return*/, audioSystem.context.decodeAudioData(data)];
            }
            catch (_b) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        try {
                            audioSystem.context.decodeAudioData(data, function (buffer) { return resolve(buffer); });
                        }
                        catch (error) {
                            reject(error);
                        }
                    })];
            }
            return [2 /*return*/];
        });
    });
}
/**
 * 音频加载器。
 *
 * @noInheritDoc
 */
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAudioLoader = true;
        return _this;
    }
    /**
     * 加载一个资源，并根据情况执行`callbacks`中的回调。
     */
    Loader.prototype.load = function (entity, callbacks) {
        var _this = this;
        var audioSystem = Sein.findActorByClass(this.game, SystemActor_1.default);
        if (!audioSystem) {
            throw new Error("Before using 'AudioLoader', you must add an 'Audio.SystemActor' to game !");
        }
        entity.mode = entity.mode || 'Stream';
        if (entity.mode === 'Stream') {
            var element_1 = document.createElement('audio');
            if (entity.isLazy) {
                if (entity.buffer && !entity.canceled) {
                    var url = URL.createObjectURL(new Blob([entity.buffer]));
                    entity.blobUrl = url;
                    element_1.src = url;
                }
                else {
                    element_1.src = entity.url;
                }
                element_1.crossOrigin = (entity.crossOrigin || false) ? 'Anonymous' : '';
                entity.result = new StreamClip_1.default({ isLazy: true, element: element_1 });
                setTimeout(function () { return callbacks.onLoaded(entity); }, 0);
                return;
            }
            if (entity.buffer && !entity.canceled) {
                var url = URL.createObjectURL(new Blob([entity.buffer]));
                entity.blobUrl = url;
                element_1.src = url;
                entity.result = new StreamClip_1.default({ isLazy: false, element: element_1 });
                setTimeout(function () { return callbacks.onLoaded(entity); }, 0);
                return;
            }
            Sein.HTTP.get(entity.url, {
                responseType: 'arraybuffer',
                onDownloadProgress: function (_a) {
                    var loaded = _a.loaded, total = _a.total;
                    return callbacks.onLoading(entity, loaded / total);
                }
            })
                .then(function (_a) {
                var data = _a.data;
                if (entity.canceled) {
                    callbacks.onLoaded(entity);
                    return;
                }
                var url = URL.createObjectURL(new Blob([data]));
                entity.blobUrl = url;
                element_1.src = url;
                entity.result = new StreamClip_1.default({ isLazy: false, element: element_1 });
                callbacks.onLoaded(entity);
            })
                .catch(function (error) {
                Sein.throwException(error, _this);
            });
            return;
        }
        if (entity.buffer && !entity.canceled) {
            if (entity.isLazy) {
                entity.result = new BufferClip_1.default({ isLazy: true, buffer: entity.buffer });
                setTimeout(function () { return callbacks.onLoaded(entity); }, 0);
                return;
            }
            else {
                decodeAudioData(entity.buffer, audioSystem)
                    .then(function (buffer) {
                    entity.result = new BufferClip_1.default({ isLazy: false, buffer: buffer });
                    callbacks.onLoaded(entity);
                });
            }
            return;
        }
        Sein.HTTP.get(entity.url, {
            responseType: 'arraybuffer',
            onDownloadProgress: function (_a) {
                var loaded = _a.loaded, total = _a.total;
                return callbacks.onLoading(entity, loaded / total);
            }
        })
            .then(function (_a) {
            var data = _a.data;
            return __awaiter(_this, void 0, void 0, function () {
                var audioBuffer;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (entity.canceled) {
                                callbacks.onLoaded(entity);
                                return [2 /*return*/];
                            }
                            if (!entity.isLazy) return [3 /*break*/, 1];
                            entity.result = new BufferClip_1.default({ isLazy: true, buffer: data });
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, decodeAudioData(data, audioSystem)];
                        case 2:
                            audioBuffer = _b.sent();
                            entity.result = new BufferClip_1.default({ isLazy: false, buffer: audioBuffer });
                            _b.label = 3;
                        case 3:
                            callbacks.onLoaded(entity);
                            return [2 /*return*/];
                    }
                });
            });
        })
            .catch(function (error) {
            Sein.throwException(error, _this);
        });
    };
    /**
     * 释放资源时将会调用，用于自定义释放逻辑。
     */
    Loader.prototype.release = function (entity) {
        if (entity.blobUrl) {
            URL.revokeObjectURL(entity.blobUrl);
        }
    };
    Loader = __decorate([
        Sein.SClass({ className: 'AudioLoader' })
    ], Loader);
    return Loader;
}(Sein.ResourceLoader));
exports.default = Loader;


/***/ }),

/***/ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SourceActor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SourceActor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : SourceActor.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/22/2019, 8:12:59 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
var SourceComponent_1 = __webpack_require__(/*! ./SourceComponent */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SourceComponent.js");
/**
 * SourceComponent的一个简单封装容器。
 */
var SourceActor = /** @class */ (function (_super) {
    __extends(SourceActor, _super);
    function SourceActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SourceActor.prototype.onCreateRoot = function (initState) {
        return this.addComponent('root', SourceComponent_1.default, initState);
    };
    Object.defineProperty(SourceActor.prototype, "audio", {
        /**
         * 获取默认的音频源组件实例。
         */
        get: function () {
            return this._root;
        },
        enumerable: true,
        configurable: true
    });
    SourceActor = __decorate([
        Sein.SClass({ className: 'AudioSourceActor' })
    ], SourceActor);
    return SourceActor;
}(Sein.SceneActor));
exports.default = SourceActor;


/***/ }),

/***/ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SourceComponent.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SourceComponent.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : SourceComponent.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/22/2019, 8:12:53 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
var SystemActor_1 = __webpack_require__(/*! ./SystemActor */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SystemActor.js");
/**
 * @hidden
 */
var DEFAULT_SPACE_OPTIONS = {
    panningModel: 'HRTF',
    distanceModel: 'linear',
    refDistance: 1,
    maxDistance: 10000,
    rolloffFactor: 1,
    coneInnerAngle: 360,
    coneOuterAngle: 0,
    coneOuterGain: 0
};
/**
 * 判断一个实例是否为`SourceComponent`。
 */
function isSourceComponent(value) {
    return value.isAudioSourceComponent;
}
exports.isSourceComponent = isSourceComponent;
/**
 * 判断一个实例是否为`SourceActor`。
 */
function isSourceActor(value) {
    return value.root.isAudioSourceComponent;
}
exports.isSourceActor = isSourceActor;
/**
 * 音频源组件类。
 *
 * @noInheritDoc
 */
var SourceComponent = /** @class */ (function (_super) {
    __extends(SourceComponent, _super);
    function SourceComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAudioSourceComponent = true;
        /**
         * 若是空间音源，是否是可旋转的，即是否同步朝向。
         */
        _this.rotatable = false;
        _this._clips = {};
        _this._current = null;
        _this._default = null;
        _this._disabled = false;
        return _this;
    }
    Object.defineProperty(SourceComponent.prototype, "inNode", {
        /**
         * 开发者无需关心。
         *
         * @hidden
         */
        get: function () {
            return this._gain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceComponent.prototype, "outNode", {
        /**
         * 开发者无需关心。
         *
         * @hidden
         */
        get: function () {
            return this._panner || this._gain;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceComponent.prototype, "system", {
        /**
         * 开发者无需关心。
         *
         * @hidden
         */
        get: function () {
            return this._system;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceComponent.prototype, "event", {
        /**
         * SourceComponent的事件管理器。
         *
         * ```ts
         * EventManager<{
         *  Start: ISourceEvent;
         *  Pause: ISourceEvent;
         *  Resume: ISourceEvent;
         *  End: ISourceEvent;
         * }>
         * ```
         */
        get: function () {
            return this._event;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceComponent.prototype, "volume", {
        /**
         * 获取音量。
         */
        get: function () {
            return this._gain.gain.value;
        },
        /**
         * 设置音量。
         */
        set: function (value) {
            this._gain.gain.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceComponent.prototype, "spaceOption", {
        /**
         * 若开启空间音频，可用于修改空间音频配置。
         */
        get: function () {
            return this._panner;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceComponent.prototype, "current", {
        /**
         * 获取当前Clip。
         */
        get: function () {
            return this._current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceComponent.prototype, "clipNames", {
        /**
         * 获取当前所有的Clip名字。
         */
        get: function () {
            return Object.keys(this._clips);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SourceComponent.prototype, "disabled", {
        /**
         *
         * 该音频是否有效。
         */
        get: function () {
            return this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 添加一个Clip。
     */
    SourceComponent.prototype.add = function (name, clip, isDefault) {
        clip.audioSource = this;
        clip.initialize();
        this._clips[name] = clip;
        if (isDefault || this._default === null) {
            this._default = name;
        }
        return this;
    };
    /**
     * 移除一个Clip。
     */
    SourceComponent.prototype.remove = function (name, clip, isDefault) {
        if (this._current === clip) {
            Sein.Debug.warn("Clip " + name + " is using, stop it before removing !");
            return this;
        }
        this._clips[name].destroy();
        delete this._clips[name];
        if (name === this._default) {
            this._default = this.clipNames[0] || null;
        }
        return this;
    };
    /**
     * 判断一个Clip是否在内。
     */
    SourceComponent.prototype.has = function (name) {
        return !!this._clips[name];
    };
    /**
     * 获取Clip。
     */
    SourceComponent.prototype.get = function (name) {
        if (!this._clips[name]) {
            Sein.Debug.warn("Clip " + name + " is not existed in " + (this._owner && this._owner.name));
        }
        return this._clips[name];
    };
    /**
     * 获取当前Clip。
     */
    SourceComponent.prototype.getCurrent = function () {
        return this._current;
    };
    /**
     * 通过名字和配置播放一个Clip，没有指定名字或为`null`则播放默认Clip。
     * 注意如果是`Buffer`模式且为`isLazy`的Clip，则播放请求会被缓存，**直到解码完毕时**才会开始播放。
     *
     * @param options 播放配置，`loop`控制是否循环，`start`与`end`分别控制播放区间的开始和结束。
     */
    SourceComponent.prototype.play = function (name, options) {
        if (this._disabled) {
            Sein.Debug.warn("Audio " + this.name + " in actor " + (this._owner && this._owner.name) + " is disabled !");
            return this;
        }
        options = options || {};
        name = name || this._default;
        if (!this.has(name)) {
            Sein.Debug.warn("Clip " + name + " is not added !");
            return this;
        }
        this._current = this._clips[name];
        this._current.play(options.loop || false, options.start, options.end);
        return this;
    };
    /**
     * 暂停。
     */
    SourceComponent.prototype.pause = function () {
        this._current.pause();
    };
    /**
     * 恢复。
     */
    SourceComponent.prototype.resume = function () {
        this._current.resume();
    };
    /**
     * 停止。
     */
    SourceComponent.prototype.stop = function () {
        this._current.stop();
        this._current = null;
    };
    /**
     * 将该音频重新开启。
     */
    SourceComponent.prototype.enable = function () {
        this._system.enableSource(this);
        this._disabled = false;
    };
    /**
     * 将该音频关闭。
     */
    SourceComponent.prototype.disable = function () {
        this._disabled = true;
        if (this._current) {
            this._current.stop();
        }
        this._system.disableSource(this);
    };
    /**
     * 验证是否允许添加，至少要有一个`Audio.SystemActor`才可以。
     * 继承请先`super.verifyAdding()`。
     */
    SourceComponent.prototype.verifyAdding = function () {
        var system = Sein.findActorByClass(this.getGame(), SystemActor_1.default);
        if (!system) {
            throw new Error("Before using 'Source', you must add an 'Audio.SystemActor' to game !");
        }
    };
    /**
     * 初始化，继承请先`super.onUpdate()`。
     */
    SourceComponent.prototype.onInit = function (initState) {
        var _this = this;
        _super.prototype.onInit.call(this, initState);
        this.rotatable = initState.rotatable;
        this._event.register('Start');
        this._event.register('End');
        this._event.register('Pause');
        this._event.register('Resume');
        var game = this.getGame();
        game.event.addOnce('GameWillPause', function () {
            if (_this._current.paused) {
                return;
            }
            game.event.addOnce('GameDidResume', function () {
                _this._current.resume();
            });
            _this._current.pause();
        });
    };
    /**
     * 加入世界，继承请先`super.onUpdate()`。
     */
    SourceComponent.prototype.onAdd = function (initState) {
        var system = initState.system, clips = initState.clips, autoPlay = initState.autoPlay, spaceOptions = initState.spaceOptions;
        this._system = system;
        this._gain = system.context.createGain();
        if (spaceOptions) {
            this._panner = system.context.createPanner();
            for (var key in DEFAULT_SPACE_OPTIONS) {
                if (DEFAULT_SPACE_OPTIONS.hasOwnProperty(key)) {
                    this._panner[key] = spaceOptions[key] || DEFAULT_SPACE_OPTIONS[key];
                }
            }
            this._gain.connect(this._panner);
            this.syncSpace();
        }
        system.addSource(this);
        if (clips) {
            var length_1 = clips.length;
            for (var index = 0; index < length_1; index += 1) {
                var _a = clips[index], name_1 = _a.name, clip = _a.clip, isDefault = _a.isDefault;
                this.add(name_1, clip, isDefault);
            }
            if (length_1 && autoPlay) {
                this.play(null, autoPlay);
            }
        }
    };
    /**
     * 继承请先`super.onUnLink()`。
     */
    SourceComponent.prototype.onUnLink = function () {
        this.disable();
    };
    /**
     * 继承请先`super.onReLink()`。
     */
    SourceComponent.prototype.onReLink = function () {
        this.enable();
    };
    /**
     * 每一帧更新，继承请先`super.onUpdate()`。
     */
    SourceComponent.prototype.onUpdate = function (delta) {
        if (this._disabled) {
            return;
        }
        if (this._current) {
            this._current.update(delta);
        }
        if (this._owner.isStatic) {
            return;
        }
        this.syncSpace();
    };
    SourceComponent.prototype.syncSpace = function () {
        var panner = this._panner;
        if (!this._panner) {
            return;
        }
        var _a = this.absolutePosition, x = _a.x, y = _a.y, z = _a.z;
        panner.setPosition(x, y, z);
        if (this.rotatable) {
            var _b = this.worldForwardVector, rx = _b.x, ry = _b.y, rz = _b.z;
            panner.setOrientation(rx, ry, rz);
        }
        else {
            panner.setOrientation(0, 0, 0);
        }
    };
    /**
     * 销毁，继承请先`super.onDestroy()`。
     */
    SourceComponent.prototype.onDestroy = function () {
        this._system.removeSource(this);
    };
    SourceComponent = __decorate([
        Sein.SClass({ className: 'AudioSourceComponent' })
    ], SourceComponent);
    return SourceComponent;
}(Sein.SceneComponent));
exports.default = SourceComponent;


/***/ }),

/***/ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SystemActor.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SystemActor.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : SystemActor.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/22/2019, 6:37:35 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
/**
 * 判断一个实例是否为`SystemActor`。
 */
function isSystemActor(value) {
    return value.isAudioSystemActor;
}
exports.isSystemActor = isSystemActor;
/**
 * @hidden
 */
var UP = Sein.World.UP;
/**
 * @hidden
 */
var FORWARD = Sein.World.FORWARD;
/**
 * 音频系统Actor，用于控制整个游戏全局的音频。是使用音频系统的先决条件！
 *
 * 你可以添加多个此Actor，但最多**不超过6个！**
 */
var SystemActor = /** @class */ (function (_super) {
    __extends(SystemActor, _super);
    function SystemActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAudioSystemActor = true;
        _this._sources = [];
        _this._connected = false;
        return _this;
    }
    SystemActor_1 = SystemActor;
    Object.defineProperty(SystemActor.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SystemActor.prototype, "volume", {
        /**
         * 设置全局音量。
         */
        get: function () {
            return this._gain.gain.value;
        },
        /**
         * 设置全局音量。
         */
        set: function (value) {
            this._gain.gain.value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SystemActor.prototype, "listener", {
        /**
         * 当前的监听器。
         */
        get: function () {
            return this._listener;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SystemActor.prototype, "running", {
        /**
         * 是否正在运行
        */
        get: function () {
            return this._context.state === 'running';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SystemActor.prototype, "closed", {
        /**
         * 是否已经关闭
        */
        get: function () {
            return this._context.state === 'closed';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * **不要自己调用！！！**
     */
    SystemActor.prototype.addSource = function (source) {
        this._sources.push(source);
        source.outNode.connect(this._gain);
    };
    /**
     * **不要自己调用！！！**
     */
    SystemActor.prototype.enableSource = function (source) {
        source.outNode.connect(this._gain);
    };
    /**
     * **不要自己调用！！！**
     */
    SystemActor.prototype.disableSource = function (source) {
        source.outNode.disconnect(this._gain);
    };
    /**
     * **不要自己调用！！！**
     */
    SystemActor.prototype.removeSource = function (source) {
        var index = this._sources.indexOf(source);
        if (index < 0) {
            return;
        }
        source.outNode.disconnect(this._gain);
        this._sources.splice(index, 1);
    };
    /**
     * **不要自己调用！！！**
     */
    SystemActor.prototype.setListener = function (listener) {
        this._listener = listener;
    };
    /**
     * 在无法自动播放的场合，比如移动设备，你可能需要在监听到用户的行为后，手动调用此方法来启动整个音频系统。
     *
     * 一般来讲系统会自动执行以上流程，如果实在不行则需要自行调用。
     */
    SystemActor.prototype.start = function () {
        // 'interrupted' is for iOS
        if (this._context.state === 'suspended' || this._context.state === 'interrupted') {
            this._context.resume();
        }
    };
    /**
     * 暂停所有Source
     */
    SystemActor.prototype.pause = function () {
        if (this.running) {
            this._context.suspend();
        }
    };
    /**
     * 唤醒所有Source
     */
    SystemActor.prototype.resume = function () {
        if (!this.running) {
            this._context.resume();
        }
    };
    /**
     * 初始化，继承请先`super.onInit()`。
     */
    SystemActor.prototype.onInit = function () {
        var _this = this;
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        this._context = new AudioContext();
        this._gain = this._context.createGain();
        var game = this.getGame();
        game.hid.addOnce('MouseClick', function () { return _this.start(); });
        game.hid.addOnce('TouchEnd', function () { return _this.start(); });
        game.event.addOnce('GameWillPause', function () {
            game.event.addOnce('GameDidResume', function () { return _this.start(); });
        });
    };
    /**
     * 加入游戏，继承请先`super.onAdd()`。
     */
    SystemActor.prototype.onAdd = function () {
        var preSystem = Sein.findActorByClass(this.getGame(), SystemActor_1);
        if (SystemActor_1) {
            this.setListener(preSystem.listener);
        }
    };
    /**
     * 每一帧更新，继承请先`super.onUpdate()`。
     */
    SystemActor.prototype.onUpdate = function () {
        if (this._connected && !this._listener) {
            this._gain.disconnect(this._context.destination);
        }
        else if (!this._connected && this._listener) {
            this._gain.connect(this._context.destination);
        }
        if (!this._listener) {
            return;
        }
        var listener = this._context.listener;
        var pos = this._listener.absolutePosition;
        listener.setPosition(pos.x, pos.y, pos.z);
        var forward;
        var up;
        if (!this._listener.rotatable) {
            forward = FORWARD;
            up = UP;
        }
        else {
            var rtt = this._listener.absoluteRotation;
            var _a = this.getWorld(), forwardVector = _a.forwardVector, upVector = _a.upVector;
            forward = forwardVector.transformQuat(rtt);
            up = upVector.transformQuat(rtt);
        }
        listener.setOrientation(forward.x, forward.y, forward.z, up.x, up.y, up.z);
    };
    /**
     * 验证是否允许移除，如果还有隶属于此系统的音频组件则不允许。
     * 继承请先`super.verifyRemoving()`。
     */
    SystemActor.prototype.verifyRemoving = function () {
        if (this._sources.length > 0) {
            throw new Error("This audio system " + this.name + " has been linked in " + this._sources.length + " sources, you cannot remove it !");
        }
    };
    /**
     * 销毁，继承请先`super.onDestroy()`。
     */
    SystemActor.prototype.onDestroy = function () {
        this._gain.disconnect();
        this._context.close();
    };
    var SystemActor_1;
    SystemActor = SystemActor_1 = __decorate([
        Sein.SClass({ className: 'AudioSystemActor' })
    ], SystemActor);
    return SystemActor;
}(Sein.SystemActor));
exports.default = SystemActor;


/***/ }),

/***/ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/BufferClip.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/BufferClip.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : BufferClip.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/23/2019, 8:11:01 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
var Clip_1 = __webpack_require__(/*! ./Clip */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/Clip.js");
var BufferClip = /** @class */ (function (_super) {
    __extends(BufferClip, _super);
    function BufferClip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAudioBufferClip = true;
        _this._isReady = false;
        _this._initPlayRequired = {
            required: false
        };
        _this._paused = true;
        _this._stopt = true;
        _this._startTime = 0;
        _this._currentTime = 0;
        _this._startAt = 0;
        _this._pauseAt = 0;
        _this._endAt = 0;
        return _this;
    }
    Object.defineProperty(BufferClip.prototype, "paused", {
        /**
         * 返回是否暂停。
         */
        get: function () {
            return this._paused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BufferClip.prototype, "stopt", {
        /**
         * 返回是否停止。
         */
        get: function () {
            return this._stopt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BufferClip.prototype, "duration", {
        /**
         * 返回音频长度。
         */
        get: function () {
            return this._buffer.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BufferClip.prototype, "currentTime", {
        /**
         * 返回音频当前播放时间。
         */
        get: function () {
            return this._currentTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BufferClip.prototype, "loop", {
        /**
         * 返回音频当前是否循环。
         */
        get: function () {
            return this._source.loop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BufferClip.prototype, "range", {
        /**
         * 返回音频当前播放区间。
         */
        get: function () {
            return [this._startAt, this._endAt];
        },
        enumerable: true,
        configurable: true
    });
    BufferClip.prototype.onInit = function (initState) {
        var _this = this;
        this.createTrack(initState)
            .catch(function (error) { return Sein.throwException(error, _this); });
    };
    BufferClip.prototype.createTrack = function (state) {
        return __awaiter(this, void 0, void 0, function () {
            var context, _a, _b, loop, from, to;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        context = this.system.context;
                        if (!state.isLazy) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, context.decodeAudioData(state.buffer)];
                    case 1:
                        _a._buffer = _c.sent();
                        this._isReady = true;
                        // Avoid decode a buffer multiple times.
                        state.isLazy = false;
                        state.buffer = this._buffer;
                        if (this._initPlayRequired.required) {
                            _b = this._initPlayRequired, loop = _b.loop, from = _b.from, to = _b.to;
                            this.play(loop, from, to);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        this._buffer = state.buffer;
                        this._isReady = true;
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BufferClip.prototype.createSource = function () {
        var _this = this;
        if (this._source && this._source.numberOfOutputs > 0) {
            this._source.disconnect(this.audioSource.inNode);
        }
        this._source = this.system.context.createBufferSource();
        this._source.buffer = this._buffer;
        this._source.connect(this.audioSource.inNode);
        this._source.onended = function () { return _this.handleEnd(_this, _this.actor); };
    };
    BufferClip.prototype.onPlay = function (loop, from, to) {
        if (!this._isReady) {
            this._initPlayRequired = { required: true, loop: loop, from: from, to: to };
            return;
        }
        if (!this._stopt && !this._paused) {
            this.stop();
        }
        this.createSource();
        this._startAt = from || 0;
        this._endAt = to || this._buffer.duration;
        this._source.loop = loop || false;
        this._source.loopStart = this._startAt;
        this._source.loopEnd = this._endAt;
        if (this._source.loop) {
            this._source.start(0, this._startAt);
        }
        else {
            this._source.start(0, this._startAt, this._endAt - this._startAt);
        }
        this._startTime = Date.now() / 1000;
        this._currentTime = this._startAt;
        this._paused = false;
        this._stopt = false;
    };
    BufferClip.prototype.onPause = function () {
        if (!this._isReady) {
            this._initPlayRequired.required = false;
            return;
        }
        if (this._stopt || this._paused) {
            return;
        }
        this._source.stop();
        this._pauseAt = Date.now() / 1000 - this._startTime;
        this._paused = true;
    };
    BufferClip.prototype.onResume = function () {
        if (!this._isReady) {
            this._initPlayRequired.required = true;
            return;
        }
        if (this._stopt || !this._paused) {
            return;
        }
        var _a = this._source, loop = _a.loop, loopStart = _a.loopStart, loopEnd = _a.loopEnd;
        this.createSource();
        if (loop) {
            this._source.loop = loop;
            this._source.loopStart = loopStart;
            this._source.loopEnd = loopEnd;
            this._source.start(0, this._pauseAt);
        }
        else {
            this._source.start(0, this._pauseAt, this._endAt - this._pauseAt);
        }
        this._startTime = Date.now() / 1000 - this._pauseAt - this._startAt;
        this._paused = false;
    };
    BufferClip.prototype.onStop = function () {
        if (!this._isReady) {
            this._initPlayRequired.required = false;
            return;
        }
        if (this._stopt) {
            return;
        }
        if (!this._paused) {
            this._source.stop();
        }
        this._startAt = 0;
        this._pauseAt = 0;
        this._currentTime = 0;
        this._paused = true;
        this._stopt = true;
    };
    BufferClip.prototype.onUpdate = function (delta) {
        if (this._paused) {
            return;
        }
        this._currentTime += delta / 1000;
        if (this._currentTime >= this._endAt) {
            if (this._source.loop) {
                this._currentTime -= (this._endAt - this._startAt);
            }
            else {
                this._paused = true;
                this._stopt = true;
            }
        }
    };
    BufferClip.prototype.onDestroy = function () {
        if (this._source && this._source.numberOfOutputs > 0) {
            this._source.disconnect(this.audioSource.inNode);
        }
    };
    BufferClip = __decorate([
        Sein.SClass({ className: 'AudioBufferClip' })
    ], BufferClip);
    return BufferClip;
}(Clip_1.default));
exports.default = BufferClip;


/***/ }),

/***/ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/Clip.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/Clip.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Clip.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/23/2019, 10:29:13 AM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
/**
 * @hidden
 */
function nop() { }
var Clip = /** @class */ (function (_super) {
    __extends(Clip, _super);
    function Clip(initState) {
        var _this = _super.call(this) || this;
        _this.isAudioClip = true;
        /**
         * 当前从属的父级音频组件。
         */
        _this.audioSource = null;
        _this.handleStart = nop;
        _this.handleEnd = nop;
        _this.handlePause = nop;
        _this.handleResume = nop;
        _this._initState = null;
        _this._initState = initState;
        return _this;
    }
    Object.defineProperty(Clip.prototype, "parent", {
        /**
         * 获取自身的父级音频组件实例引用，一般不需要自己使用。
         */
        get: function () {
            return this.audioSource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clip.prototype, "actor", {
        /**
         * 获取自身的父级音频组件的Onwer实例引用。
         */
        get: function () {
            return this.audioSource.getOwner();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clip.prototype, "system", {
        /**
         * 当前从属的System。
         */
        get: function () {
            return this.audioSource.system;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clip.prototype, "paused", {
        /**
         * 需要派生类实现，返回是否暂停。
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clip.prototype, "stopt", {
        /**
         * 需要派生类实现，返回是否停止。
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clip.prototype, "duration", {
        /**
         * 需要派生类实现，返回音频长度。
         */
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clip.prototype, "currentTime", {
        /**
         * 需要派生类实现，返回音频当前播放时间。
         */
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clip.prototype, "loop", {
        /**
         * 需要派生类实现，返回音频当前是否循环。
         */
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clip.prototype, "range", {
        /**
         * 需要派生类实现，返回音频当前播放区间。
         */
        get: function () {
            return [0, 0];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取当前`Game`实例。
     *
     * @template IGameState 当前游戏状态管理器的类型。
     */
    Clip.prototype.getGame = function () {
        return this.actor.getGame();
    };
    /**
     * 获取当前`World`实例。
     *
     * @template IWorldState 当前世界状态管理器的类型。
     */
    Clip.prototype.getWorld = function () {
        return this.actor.getWorld();
    };
    /**
     * 获取当前`Level`实例。
     *
     * @template ILevelState 当前关卡状态管理器的类型。
     */
    Clip.prototype.getLevel = function () {
        return this.actor.getLevel();
    };
    /**
     * 生命周期，将在初始化时触发。
     */
    Clip.prototype.onInit = function (initState) {
    };
    /**
     * 生命周期，将在`play`时触发。
     */
    Clip.prototype.onPlay = function (loop, from, to) {
    };
    /**
     * 生命周期，将在`pause`时触发。
     */
    Clip.prototype.onPause = function () {
    };
    /**
     * 生命周期，将在`resume`时触发。
     */
    Clip.prototype.onResume = function () {
    };
    /**
     * 生命周期，将在`stop`时触发。
     */
    Clip.prototype.onStop = function () {
    };
    /**
     * 生命周期，将在每一帧`update`时触发。
     */
    Clip.prototype.onUpdate = function (delta) {
    };
    /**
     * 生命周期，用于错误边界处理。将在游戏中大部分可预知错误发生时被调用（通常是生命周期中的非异步错误）。
     * 错误将会根据一定的路径向上传递，一直到`Engine`的层次，你可以在确保完美处理了问题后返回`true`来通知引擎不再向上传递。
     * 当然你也可以将自定义的一些错误加入错误边界机制中，详见[Exception](../../guide/exception)。
     */
    Clip.prototype.onError = function (error, details) {
    };
    /**
     * **不要自己调用！！**
     *
     * @hidden
     */
    Clip.prototype.initialize = function () {
        try {
            this.onInit(this._initState);
        }
        catch (error) {
            Sein.throwException(error, this);
        }
    };
    /**
     * **不要自己调用！！**
     *
     * @hidden
     */
    Clip.prototype.play = function (loop, from, to) {
        try {
            this.onPlay(loop || false, from, to);
            this.handleStart(this, this.actor);
        }
        catch (error) {
            Sein.throwException(error, this);
        }
    };
    /**
     * **不要自己调用！！**
     *
     * @hidden
     */
    Clip.prototype.pause = function () {
        try {
            this.onPause();
            this.handlePause(this, this.actor);
        }
        catch (error) {
            Sein.throwException(error, this);
        }
    };
    /**
     * **不要自己调用！！**
     *
     * @hidden
     */
    Clip.prototype.resume = function () {
        try {
            this.onResume();
            this.handleResume(this, this.actor);
        }
        catch (error) {
            Sein.throwException(error, this);
        }
    };
    /**
     * **不要自己调用！！**
     *
     * @hidden
     */
    Clip.prototype.stop = function () {
        try {
            this.onStop();
            this.handleEnd(this, this.actor);
        }
        catch (error) {
            Sein.throwException(error, this);
        }
    };
    /**
     * **不要自己调用！！**
     *
     * @hidden
     */
    Clip.prototype.update = function (delta) {
        try {
            this.onUpdate(delta);
        }
        catch (error) {
            Sein.throwException(error, this);
        }
    };
    /**
     * 复制生成一个新的Clip，如果你想让一段音频被多次使用，便需要Clone。
     */
    Clip.prototype.clone = function () {
        return new this.constructor(this._initState);
    };
    Clip = __decorate([
        Sein.SClass({ className: 'AudioClip' })
    ], Clip);
    return Clip;
}(Sein.SObject));
exports.default = Clip;


/***/ }),

/***/ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/StreamClip.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/StreamClip.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : StreamClip.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 4/23/2019, 8:10:52 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
var Clip_1 = __webpack_require__(/*! ./Clip */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/Clip.js");
var StreamClip = /** @class */ (function (_super) {
    __extends(StreamClip, _super);
    function StreamClip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAudioStreamClip = true;
        _this._stopt = true;
        _this._startAt = 0;
        _this._endAt = 0;
        _this.onTimeUpdate = function () {
            if (isNaN(_this._endAt)) {
                _this._endAt = _this.duration;
            }
            var currentTime = _this._element.currentTime;
            if (!_this.loop) {
                if (currentTime >= _this._endAt) {
                    _this.stop();
                }
                return;
            }
            if (_this._startAt <= 0.1 && _this.duration - _this._endAt < .1) {
                return;
            }
            if (currentTime > _this._endAt || currentTime < _this._startAt) {
                _this._element.currentTime = _this._startAt;
            }
        };
        return _this;
    }
    Object.defineProperty(StreamClip.prototype, "paused", {
        /**
         * 返回是否暂停。
         */
        get: function () {
            return this._element.paused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StreamClip.prototype, "stopt", {
        /**
         * 返回是否停止。
         */
        get: function () {
            return this._stopt;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StreamClip.prototype, "duration", {
        /**
         * 返回音频长度。
         */
        get: function () {
            return this._element.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StreamClip.prototype, "currentTime", {
        /**
         * 返回音频当前播放时间。
         */
        get: function () {
            return this._element.currentTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StreamClip.prototype, "loop", {
        /**
         * 返回音频当前是否循环。
         */
        get: function () {
            return this._element.loop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StreamClip.prototype, "range", {
        /**
         * 返回音频当前播放区间。
         */
        get: function () {
            return [this._startAt, this._endAt];
        },
        enumerable: true,
        configurable: true
    });
    StreamClip.prototype.onInit = function (initState) {
        var _this = this;
        var context = this.system.context;
        this._element = initState.element.cloneNode();
        this._track = context.createMediaElementSource(this._element);
        this._track.connect(this.audioSource.inNode);
        this._element.onended = function () {
            _this.handleEnd(_this, _this.actor);
            _this._stopt = true;
        };
        this._element.ontimeupdate = this.onTimeUpdate;
    };
    StreamClip.prototype.onPlay = function (loop, from, to) {
        var _this = this;
        this._element.loop = loop;
        this._startAt = from || 0;
        this._endAt = to || this.duration;
        this._element.currentTime = this._startAt;
        this._stopt = false;
        this._element.play().catch(function (error) { return Sein.throwException(error, _this); });
    };
    StreamClip.prototype.onPause = function () {
        if (this._stopt) {
            return;
        }
        this._element.pause();
    };
    StreamClip.prototype.onResume = function () {
        if (this._stopt) {
            return;
        }
        this._element.play();
    };
    StreamClip.prototype.onStop = function () {
        this._element.pause();
        this._element.currentTime = 0;
        this._stopt = true;
    };
    StreamClip.prototype.onDestroy = function () {
        if (this._track) {
            this._track.disconnect(this.audioSource.inNode);
        }
    };
    StreamClip = __decorate([
        Sein.SClass({ className: 'AudioStreamClip' })
    ], StreamClip);
    return StreamClip;
}(Clip_1.default));
exports.default = StreamClip;


/***/ }),

/***/ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Sound.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 2018/9/25 上午11:58:00
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
var SystemActor_1 = __webpack_require__(/*! ./SystemActor */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SystemActor.js");
exports.SystemActor = SystemActor_1.default;
exports.isSystemActor = SystemActor_1.isSystemActor;
var Loader_1 = __webpack_require__(/*! ./Loader */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/Loader.js");
exports.Loader = Loader_1.default;
exports.isLoader = Loader_1.isLoader;
var SourceComponent_1 = __webpack_require__(/*! ./SourceComponent */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SourceComponent.js");
exports.SourceComponent = SourceComponent_1.default;
exports.isSourceActor = SourceComponent_1.isSourceActor;
exports.isSourceComponent = SourceComponent_1.isSourceComponent;
var SourceActor_1 = __webpack_require__(/*! ./SourceActor */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/SourceActor.js");
exports.SourceActor = SourceActor_1.default;
var ListenerComponent_1 = __webpack_require__(/*! ./ListenerComponent */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/ListenerComponent.js");
exports.ListenerComponent = ListenerComponent_1.default;
exports.isListenerActor = ListenerComponent_1.isListenerActor;
exports.isListenerComponent = ListenerComponent_1.isListenerComponent;
var ListenerActor_1 = __webpack_require__(/*! ./ListenerActor */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/ListenerActor.js");
exports.ListenerActor = ListenerActor_1.default;
var Clip_1 = __webpack_require__(/*! ./clip/Clip */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/Clip.js");
exports.Clip = Clip_1.default;
var StreamClip_1 = __webpack_require__(/*! ./clip/StreamClip */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/StreamClip.js");
exports.StreamClip = StreamClip_1.default;
var BufferClip_1 = __webpack_require__(/*! ./clip/BufferClip */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/clip/BufferClip.js");
exports.BufferClip = BufferClip_1.default;
__webpack_require__(/*! ./GlTFExtensions */ "./node_modules/_seinjs-audio@0.8.11@seinjs-audio/lib/GlTFExtensions.js");
Sein.Audio = {
    SystemActor: SystemActor_1.default,
    isSystemActor: SystemActor_1.isSystemActor,
    Loader: Loader_1.default,
    isLoader: Loader_1.isLoader,
    SourceComponent: SourceComponent_1.default,
    isSourceActor: SourceComponent_1.isSourceActor,
    isSourceComponent: SourceComponent_1.isSourceComponent,
    SourceActor: SourceActor_1.default,
    ListenerComponent: ListenerComponent_1.default,
    isListenerActor: ListenerComponent_1.isListenerActor,
    isListenerComponent: ListenerComponent_1.isListenerComponent,
    ListenerActor: ListenerActor_1.default,
    Clip: Clip_1.default,
    StreamClip: StreamClip_1.default,
    BufferClip: BufferClip_1.default
};


/***/ }),

/***/ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/ActorObserveControlComponent/ActorObserveControlComponent.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/ActorObserveControlComponent/ActorObserveControlComponent.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : ActorObserveControlComponent.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/1/2018, 5:20:10 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
/**
 * @hidden
 */
var tempEuler = new Sein.Euler();
tempEuler.order = 'XYZ';
/**
 * @hidden
 */
var tempQuat = new Sein.Quaternion();
/**
 * @hidden
 */
var tempVector = new Sein.Vector3();
var tempScaleDelta = 0;
/**
 * @hidden
 */
var tempEulerXYDelta = new Sein.Vector2(0, 0);
/**
 * @hidden
 */
var tempPanDelta = new Sein.Vector2(0, 0);
/**
 * @hidden
 */
var MOUSE = {
    LEFT: 0,
    MID: 1,
    RIGHT: 2
};
/**
 * @hidden
 */
var STATE = {
    NONE: -1,
    MOVE: 0,
    ZOOM: 1,
    PAN: 2
};
/**
 * Actor观察期组件，用于挂载任意Actor上来对其进行观察。
 * 注意此控制器控制的不是摄像机！
 *
 * @noInheritDoc
 */
var ActorObserveControlComponent = /** @class */ (function (_super) {
    __extends(ActorObserveControlComponent, _super);
    function ActorObserveControlComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mouseInfo = {};
        _this.onMouseDown = function (event) {
            _this._mouseInfo.isDown = true;
            switch (event.button) {
                case MOUSE.LEFT:
                    _this._mouseInfo.startX = event.pageX;
                    _this._mouseInfo.startY = event.pageY;
                    _this._mouseInfo.state = _this.reverseRotateAndPan ? STATE.PAN : STATE.MOVE;
                    break;
                case MOUSE.RIGHT:
                    _this._mouseInfo.startX = event.pageX;
                    _this._mouseInfo.startY = event.pageY;
                    _this._mouseInfo.state = _this.reverseRotateAndPan ? STATE.MOVE : STATE.PAN;
                    break;
                default:
                    break;
            }
            var hid = _this.getGame().hid;
            hid.add('MouseMove', _this.onMouseMove);
            hid.add('MouseUp', _this.onMouseUp);
            hid.add('MouseOut', _this.onMouseUp);
            hid.remove('MouseDown', _this.onMouseDown);
        };
        _this.onMouseMove = function (event) {
            if (!_this._mouseInfo.isDown) {
                return;
            }
            switch (_this._mouseInfo.state) {
                case STATE.MOVE:
                    _this.handleMouseMove(event);
                    break;
                case STATE.PAN:
                    _this.handleMousePan(event);
                    break;
                default:
                    break;
            }
        };
        _this.onMouseUp = function (event) {
            _this._mouseInfo.isDown = false;
            _this._mouseInfo.state = STATE.NONE;
            var hid = _this.getGame().hid;
            hid.add('MouseDown', _this.onMouseDown);
            hid.remove('MouseMove', _this.onMouseMove);
            hid.remove('MouseUp', _this.onMouseUp);
            hid.remove('MouseOut', _this.onMouseUp);
        };
        _this.onContextMenu = function () {
        };
        _this.onTouchStart = function (event) {
            _this._mouseInfo.isDown = true;
            _this._mouseInfo.startX = event.touches[0].pageX;
            _this._mouseInfo.startY = event.touches[0].pageY;
            switch (event.touches.length) {
                case 1:
                    _this._mouseInfo.state = STATE.MOVE;
                    break;
                case 2:
                    _this._mouseInfo.state = STATE.ZOOM;
                    break;
                case 3:
                    _this._mouseInfo.state = STATE.PAN;
                    break;
                default:
                    break;
            }
            var hid = _this.getGame().hid;
            hid.add('TouchMove', _this.onTouchMove);
            hid.add('TouchEnd', _this.onTouchEnd);
            hid.remove('TouchStart', _this.onTouchStart);
        };
        _this.onTouchMove = function (event) {
            if (!_this._mouseInfo.isDown || !event.touches[0]) {
                return;
            }
            switch (_this._mouseInfo.state) {
                case STATE.MOVE:
                    _this.handleToucheMove(event);
                    break;
                case STATE.ZOOM:
                    if (event.touches.length === 2) {
                        _this.handleToucheZoom(event);
                    }
                    break;
                case STATE.PAN:
                    if (event.touches.length === 3) {
                        _this.handleTouchePan(event);
                    }
                    break;
                default:
                    break;
            }
        };
        _this.onTouchEnd = function (event) {
            _this._mouseInfo.isDown = false;
            _this._mouseInfo.state = STATE.NONE;
            var hid = _this.getGame().hid;
            hid.add('TouchStart', _this.onTouchStart);
            hid.remove('TouchMove', _this.onTouchMove);
            hid.remove('TouchEnd', _this.onTouchEnd);
        };
        _this.onWheel = function (event) {
            var deltaY = event.deltaY;
            if (deltaY < -100) {
                deltaY = -100;
            }
            else if (deltaY > 100) {
                deltaY = 100;
            }
            var s = deltaY * .001 + 1;
            _this.scale(s);
        };
        _this.handleMousePan = function (event) {
            var distanceX = event.pageX - _this._mouseInfo.startX;
            var distanceY = event.pageY - _this._mouseInfo.startY;
            _this._mouseInfo.startX = event.pageX;
            _this._mouseInfo.startY = event.pageY;
            _this.getRoot().worldMatrix.getScaling(tempVector);
            _this.move(distanceX * .2 * tempVector.x, distanceY * .2 * tempVector.y);
        };
        _this.handleMouseMove = function (event) {
            var distanceX = event.pageX - _this._mouseInfo.startX;
            var distanceY = event.pageY - _this._mouseInfo.startY;
            _this._mouseInfo.startX = event.pageX;
            _this._mouseInfo.startY = event.pageY;
            _this.rotate(distanceX, distanceY);
        };
        _this.handleToucheZoom = function (evt) {
            var event = evt.touches[0];
            var delta = event.pageY - _this._mouseInfo.startY;
            _this._mouseInfo.startX = event.pageX;
            _this._mouseInfo.startY = event.pageY;
            if (delta < -25) {
                delta = -25;
            }
            else if (delta > 25) {
                delta = 25;
            }
            var s = delta * .004 + 1;
            _this.scale(s);
        };
        _this.handleTouchePan = function (evt) {
            var event = evt.touches[0];
            var distanceX = event.pageX - _this._mouseInfo.startX;
            var distanceY = event.pageY - _this._mouseInfo.startY;
            _this._mouseInfo.startX = event.pageX;
            _this._mouseInfo.startY = event.pageY;
            _this.move(distanceX * .01, -distanceY * .01);
        };
        return _this;
    }
    Object.defineProperty(ActorObserveControlComponent.prototype, "active", {
        /**
         * 当前是否正在控制。
         */
        get: function () {
            return this._mouseInfo.state !== STATE.NONE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorObserveControlComponent.prototype, "damping", {
        /**
         * 当前是否正在缓动。
         */
        get: function () {
            return Math.abs(tempEulerXYDelta.x) > 0.001
                || Math.abs(tempEulerXYDelta.y) > 0.001
                || Math.abs(tempScaleDelta) > 0.001
                || Math.abs(tempPanDelta.x) > 0.001
                || Math.abs(tempPanDelta.y) > 0.001;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化，继承请先`super.onInit()`。
     */
    ActorObserveControlComponent.prototype.onInit = function (options) {
        if (options === void 0) { options = {}; }
        this.isEnabled = false;
        this.isLockX = !!options.isLockX;
        this.isLockY = !!options.isLockY;
        this.isLockScale = !!options.isLockScale;
        this.isLockRotate = !!options.isLockRotate;
        this.isLockMove = !!options.isLockMove;
        this.zoomMax = options.zoomMax || Infinity;
        this.zoomMin = options.zoomMin || -Infinity;
        this.enableDamping = !!options.enableDamping;
        this.dampingFactor = options.dampingFactor || 1;
        this.panSpeed = options.panSpeed || 1;
        this.rotateSpeed = options.rotateSpeed || 1;
        this.reverseRotateAndPan = !!options.reverseRotateAndPan;
        if (options.eulerOrder) {
            tempEuler.order = options.eulerOrder;
        }
    };
    /**
     * 添加到世界，继承请先`super.onAdd()`。
     */
    ActorObserveControlComponent.prototype.onAdd = function () {
        this.enable();
    };
    /**
     * 每一帧更新，继承请先`super.onUpdate()`。
     */
    ActorObserveControlComponent.prototype.onUpdate = function () {
        this.updateTransform();
    };
    /**
     * 继承请先`super.onUnLink()`。
     */
    ActorObserveControlComponent.prototype.onUnLink = function () {
        this.disable();
    };
    /**
     * 继承请先`super.reUnLink()`。
     */
    ActorObserveControlComponent.prototype.reUnLink = function () {
        this.enable();
    };
    /**
     * 销毁，继承请先`super.onUpdate()`。
     */
    ActorObserveControlComponent.prototype.onDestroy = function () {
        this.disable();
    };
    /**
     * 手动设置四元数。
     */
    ActorObserveControlComponent.prototype.setQuat = function (x, y, z, w) {
        tempQuat.x = x;
        tempQuat.y = y;
        tempQuat.z = z;
        tempQuat.w = w;
        tempEuler.fromQuat(tempQuat);
        this.getRoot().quaternion.copy(tempQuat);
    };
    /**
     * 启动控制器。
     */
    ActorObserveControlComponent.prototype.enable = function () {
        if (this.isEnabled) {
            return;
        }
        var root = this.getRoot();
        tempEuler.x = root.rotation.x;
        tempEuler.y = root.rotation.y;
        tempEuler.z = root.rotation.z;
        this._mouseInfo = {
            startX: 0,
            startY: 0,
            isDown: false,
            state: STATE.NONE
        };
        var _a = this.getGame(), hid = _a.hid, deviceInfo = _a.deviceInfo;
        hid.add('Wheel', this.onWheel);
        if (deviceInfo.touchable) {
            hid.add('TouchStart', this.onTouchStart);
        }
        else {
            hid.add('ContextMenu', this.onContextMenu);
            hid.add('MouseDown', this.onMouseDown);
        }
        this.isEnabled = true;
    };
    /**
     * 关闭控制器。
     */
    ActorObserveControlComponent.prototype.disable = function () {
        if (!this.isEnabled) {
            return;
        }
        var _a = this.getGame(), hid = _a.hid, deviceInfo = _a.deviceInfo;
        hid.remove('Wheel', this.onWheel);
        if (deviceInfo.touchable) {
            hid.remove('TouchStart', this.onTouchStart);
            hid.remove('TouchMove', this.onTouchMove);
            hid.remove('TouchEnd', this.onTouchEnd);
        }
        else {
            hid.remove('ContextMenu', this.onContextMenu);
            hid.remove('MouseDown', this.onMouseDown);
            hid.remove('MouseMove', this.onMouseMove);
            hid.remove('MouseUp', this.onMouseUp);
            hid.remove('MouseOut', this.onMouseUp);
        }
        this.isEnabled = false;
    };
    ActorObserveControlComponent.prototype.rotate = function (distanceX, distanceY) {
        if (this.isLockRotate) {
            return;
        }
        var x = distanceY / 100;
        var y = distanceX / 100;
        if (!this.isLockY) {
            tempEulerXYDelta.y = y;
        }
        else {
            tempEulerXYDelta.y = 0;
        }
        if (!this.isLockX) {
            tempEulerXYDelta.x = x;
        }
        else {
            tempEulerXYDelta.x = 0;
        }
    };
    ActorObserveControlComponent.prototype.scale = function (s) {
        if (this.isLockScale) {
            return;
        }
        var transform = this.getRoot();
        tempScaleDelta = transform.scale.x * s - transform.scale.x;
    };
    ;
    ActorObserveControlComponent.prototype.move = function (x, y) {
        if (this.isLockMove) {
            return;
        }
        tempPanDelta.x = x * -.1;
        tempPanDelta.y = y * -.1;
    };
    ;
    ActorObserveControlComponent.prototype.updateTransform = function () {
        if (!this.damping) {
            return;
        }
        var transform = this.getRoot();
        if (tempScaleDelta) {
            var scale = transform.scale.x + tempScaleDelta;
            if (scale > this.zoomMax) {
                scale = this.zoomMax;
            }
            if (scale < this.zoomMin) {
                scale = this.zoomMin;
            }
            transform.setScale(scale, scale, scale);
        }
        tempEuler.x += tempEulerXYDelta.x * this.rotateSpeed;
        tempEuler.y += tempEulerXYDelta.y * this.rotateSpeed;
        transform.quaternion.fromEuler(tempEuler);
        transform.position.x += tempPanDelta.x * this.panSpeed;
        transform.position.y += tempPanDelta.y * this.panSpeed;
        if (!this.enableDamping) {
            tempEulerXYDelta.set(0, 0);
            tempScaleDelta = 0;
            tempPanDelta.set(0, 0);
            return;
        }
        var factor = 1 - this.dampingFactor;
        tempEulerXYDelta.scale(factor);
        tempPanDelta.scale(factor);
        tempScaleDelta *= factor;
    };
    ActorObserveControlComponent.prototype.handleToucheMove = function (event) {
        this.handleMouseMove(event.touches[0]);
    };
    ActorObserveControlComponent = __decorate([
        Sein.SClass({ className: 'ActorObserveControlComponent' })
    ], ActorObserveControlComponent);
    return ActorObserveControlComponent;
}(Sein.Component));
exports.default = ActorObserveControlComponent;


/***/ }),

/***/ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/ActorObserveControlComponent/index.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/ActorObserveControlComponent/index.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : index.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/1/2018, 5:20:06 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
var ActorObserveControlComponent_1 = __webpack_require__(/*! ./ActorObserveControlComponent */ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/ActorObserveControlComponent/ActorObserveControlComponent.js");
exports.ActorObserveControlComponent = ActorObserveControlComponent_1.default;
Sein.CameraControls = Sein.CameraControls || {};
Sein.CameraControls.ActorObserveControlComponent = ActorObserveControlComponent_1.default;


/***/ }),

/***/ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/CameraFreeControlComponent/CameraFreeControlComponent.js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/CameraFreeControlComponent/CameraFreeControlComponent.js ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : CameraFreeControlComponent.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/1/2018, 5:20:10 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
/**
 * @hidden
 */
var tempScaleDelta = 0;
/**
 * @hidden
 */
var tempEulerXYDelta = new Sein.Vector2(0, 0);
/**
 * @hidden
 */
var tempQuat = new Sein.Quaternion();
/**
 * @hidden
 */
var tempPanDelta = new Sein.Vector2(0, 0);
/**
 * @hidden
 */
var tempUp = new Sein.Vector3(0, 1, 0);
/**
 * @hidden
 */
var MOUSE = {
    LEFT: 0,
    MID: 1,
    RIGHT: 2
};
/**
 * @hidden
 */
var STATE = {
    NONE: -1,
    MOVE: 0,
    ZOOM: 1,
    PAN: 2
};
/**
 * 自由摄像机控制器，用于为指定的Actor下挂载的摄相机组件提供添加**标准鼠标或触摸**控制。
 * 此控制器将会使得摄像机在世界中自由得**漫游**，若想让摄像机绕某个Actor或一点转动，请用[CameraOrbitControlComponent](../cameraorbitcontrolcomponent)。
 *
 * @noInheritDoc
 */
var CameraFreeControlComponent = /** @class */ (function (_super) {
    __extends(CameraFreeControlComponent, _super);
    function CameraFreeControlComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._mouseInfo = {};
        _this._currentScale = 1;
        _this._rotateXMaxCos = 0;
        _this._rotateXMinCos = 0;
        _this.onMouseDown = function (event) {
            _this._mouseInfo.isDown = true;
            switch (event.button) {
                case MOUSE.LEFT:
                    _this._mouseInfo.startX = event.pageX;
                    _this._mouseInfo.startY = event.pageY;
                    _this._mouseInfo.state = _this.reverseRotateAndPan ? STATE.PAN : STATE.MOVE;
                    break;
                case MOUSE.RIGHT:
                    _this._mouseInfo.startX = event.pageX;
                    _this._mouseInfo.startY = event.pageY;
                    _this._mouseInfo.state = _this.reverseRotateAndPan ? STATE.MOVE : STATE.PAN;
                    break;
                default:
                    break;
            }
            var hid = _this.getGame().hid;
            hid.add('MouseMove', _this.onMouseMove);
            hid.add('MouseUp', _this.onMouseUp);
            hid.add('MouseOut', _this.onMouseUp);
            hid.remove('MouseDown', _this.onMouseDown);
        };
        _this.onMouseMove = function (event) {
            if (!_this._mouseInfo.isDown) {
                return;
            }
            switch (_this._mouseInfo.state) {
                case STATE.MOVE:
                    _this.handleMouseMove(event);
                    break;
                case STATE.PAN:
                    _this.handleMousePan(event);
                    break;
                default:
                    break;
            }
        };
        _this.onMouseUp = function (event) {
            _this._mouseInfo.isDown = false;
            _this._mouseInfo.state = STATE.NONE;
            var hid = _this.getGame().hid;
            hid.add('MouseDown', _this.onMouseDown);
            hid.remove('MouseMove', _this.onMouseMove);
            hid.remove('MouseUp', _this.onMouseUp);
            hid.remove('MouseOut', _this.onMouseUp);
        };
        _this.onContextMenu = function () {
        };
        _this.onTouchStart = function (event) {
            _this._mouseInfo.isDown = true;
            _this._mouseInfo.startX = event.touches[0].pageX;
            _this._mouseInfo.startY = event.touches[0].pageY;
            switch (event.touches.length) {
                case 1:
                    _this._mouseInfo.state = STATE.MOVE;
                    break;
                case 2:
                    _this._mouseInfo.state = STATE.ZOOM;
                    break;
                case 3:
                    _this._mouseInfo.state = STATE.PAN;
                    break;
                default:
                    break;
            }
            var hid = _this.getGame().hid;
            hid.add('TouchMove', _this.onTouchMove);
            hid.add('TouchEnd', _this.onTouchEnd);
            hid.remove('TouchStart', _this.onTouchStart);
        };
        _this.onTouchMove = function (event) {
            if (!_this._mouseInfo.isDown) {
                return;
            }
            switch (_this._mouseInfo.state) {
                case STATE.MOVE:
                    _this.handleToucheMove(event);
                    break;
                case STATE.ZOOM:
                    if (event.touches.length === 2) {
                        _this.handleToucheZoom(event);
                    }
                    break;
                case STATE.PAN:
                    if (event.touches.length === 3) {
                        _this.handleTouchePan(event);
                    }
                    break;
                default:
                    break;
            }
        };
        _this.onTouchEnd = function (event) {
            _this._mouseInfo.isDown = false;
            _this._mouseInfo.state = STATE.NONE;
            var hid = _this.getGame().hid;
            hid.add('TouchStart', _this.onTouchStart);
            hid.remove('TouchMove', _this.onTouchMove);
            hid.remove('TouchEnd', _this.onTouchEnd);
        };
        _this.onWheel = function (event) {
            var deltaY = event.deltaY;
            if (deltaY < -100) {
                deltaY = -100;
            }
            else if (deltaY > 100) {
                deltaY = 100;
            }
            var s = deltaY * .01 * _this.zoomSpeed;
            _this.scale(s);
        };
        _this.handleMousePan = function (event) {
            var distanceX = event.pageX - _this._mouseInfo.startX;
            var distanceY = event.pageY - _this._mouseInfo.startY;
            _this._mouseInfo.startX = event.pageX;
            _this._mouseInfo.startY = event.pageY;
            _this.move(distanceX * .1, distanceY * .1);
        };
        _this.handleMouseMove = function (event) {
            var distanceX = event.pageX - _this._mouseInfo.startX;
            var distanceY = event.pageY - _this._mouseInfo.startY;
            _this._mouseInfo.startX = event.pageX;
            _this._mouseInfo.startY = event.pageY;
            _this.rotate(distanceX, distanceY);
        };
        _this.handleToucheZoom = function (evt) {
            var event = evt.touches[0];
            var delta = event.pageY - _this._mouseInfo.startY;
            _this._mouseInfo.startX = event.pageX;
            _this._mouseInfo.startY = event.pageY;
            if (delta < -25) {
                delta = -25;
            }
            else if (delta > 25) {
                delta = 25;
            }
            var s = delta * .004 + 1;
            _this.scale(s);
        };
        _this.handleTouchePan = function (evt) {
            var event = evt.touches[0];
            var distanceX = event.pageX - _this._mouseInfo.startX;
            var distanceY = event.pageY - _this._mouseInfo.startY;
            _this._mouseInfo.startX = event.pageX;
            _this._mouseInfo.startY = event.pageY;
            _this.move(distanceX * .1, -distanceY * .1);
        };
        return _this;
    }
    Object.defineProperty(CameraFreeControlComponent.prototype, "active", {
        /**
         * 当前是否正在控制。
         */
        get: function () {
            return this._mouseInfo.state !== STATE.NONE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraFreeControlComponent.prototype, "damping", {
        /**
         * 当前是否正在缓动。
         */
        get: function () {
            return Math.abs(tempEulerXYDelta.x) > 0.001
                || Math.abs(tempEulerXYDelta.y) > 0.001
                || Math.abs(tempScaleDelta) > 0.001
                || Math.abs(tempPanDelta.x) > 0.001
                || Math.abs(tempPanDelta.y) > 0.001;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化，继承请先`super.onInit()`。
     */
    CameraFreeControlComponent.prototype.onInit = function (options) {
        if (options === void 0) { options = {}; }
        this.switchCamera(options.cameraComponentName);
        this.isLockX = !!options.isLockX;
        this.isLockZoom = !!options.isLockZoom;
        this.isLockRotate = !!options.isLockRotate;
        this.isLockMove = !!options.isLockMove;
        this.zoomMax = options.zoomMax || Infinity;
        this.zoomMin = options.zoomMin || -Infinity;
        this.panXMax = options.panXMax || Infinity;
        this.panXMin = options.panXMin || -Infinity;
        this.panYMax = options.panYMax || Infinity;
        this.panYMin = options.panYMin || -Infinity;
        this.rotateXMax = options.rotateXMax;
        this.rotateXMin = options.rotateXMin;
        this._rotateXMaxCos = options.rotateXMax ? Math.cos(Math.PI / 2 - options.rotateXMax) : 1;
        this._rotateXMinCos = options.rotateXMin ? Math.cos(Math.PI / 2 + options.rotateXMin) : -1;
        this.enableDamping = !!options.enableDamping;
        this.dampingFactor = options.dampingFactor || 1;
        this.panSpeed = options.panSpeed || 1;
        this.rotateXSpeed = options.rotateXSpeed || 1;
        this.rotateYSpeed = options.rotateYSpeed || 1;
        this.zoomSpeed = options.zoomSpeed || 1;
        this.reverseRotateAndPan = !!options.reverseRotateAndPan;
        this.customMovingX = options.customMovingX;
        this.customMovingY = options.customMovingY;
        this.useZBounding = !!options.useZBounding;
        this.isEnabled = false;
    };
    /**
     * 添加到世界，继承请先`super.onAdd()`。
     */
    CameraFreeControlComponent.prototype.onAdd = function () {
        this.enable();
    };
    /**
     * 每一帧更新，继承请先`super.onUpdate()`。
     */
    CameraFreeControlComponent.prototype.onUpdate = function () {
        this.updateTransform();
    };
    /**
     * 继承请先`super.onUnLink()`。
     */
    CameraFreeControlComponent.prototype.onUnLink = function () {
        this.disable();
    };
    /**
     * 继承请先`super.reUnLink()`。
     */
    CameraFreeControlComponent.prototype.reUnLink = function () {
        this.enable();
    };
    /**
     * 销毁，继承请先`super.onUpdate()`。
     */
    CameraFreeControlComponent.prototype.onDestroy = function () {
        this.disable();
    };
    /**
     * 通过组件名称`cameraComponentName`来切换当前控制的摄相机。
     */
    CameraFreeControlComponent.prototype.switchCamera = function (cameraComponentName) {
        if (cameraComponentName === void 0) { cameraComponentName = 'root'; }
        this._camera = this.getOwner().findComponentByName(cameraComponentName);
        if (!this._camera) {
            throw new Sein.UnmetRequireException(this, 'You muse give a valid component name !.');
        }
        if (!this._camera.isCameraComponent) {
            throw new Sein.TypeConflictException(this._camera, 'Camera', this);
        }
    };
    /**
     * 启动控制器。
     */
    CameraFreeControlComponent.prototype.enable = function () {
        if (this.isEnabled) {
            return;
        }
        this._mouseInfo = {
            startX: 0,
            startY: 0,
            isDown: false,
            state: STATE.NONE
        };
        var _a = this.getGame(), hid = _a.hid, deviceInfo = _a.deviceInfo;
        hid.add('Wheel', this.onWheel);
        if (deviceInfo.touchable) {
            hid.add('TouchStart', this.onTouchStart);
        }
        else {
            hid.add('ContextMenu', this.onContextMenu);
            hid.add('MouseDown', this.onMouseDown);
        }
        this.isEnabled = true;
    };
    /**
     * 关闭控制器。
     */
    CameraFreeControlComponent.prototype.disable = function () {
        if (!this.isEnabled) {
            return;
        }
        var _a = this.getGame(), hid = _a.hid, deviceInfo = _a.deviceInfo;
        hid.remove('Wheel', this.onWheel);
        if (deviceInfo.touchable) {
            hid.remove('TouchStart', this.onTouchStart);
            hid.remove('TouchMove', this.onTouchMove);
            hid.remove('TouchEnd', this.onTouchEnd);
        }
        else {
            hid.remove('ContextMenu', this.onContextMenu);
            hid.remove('MouseDown', this.onMouseDown);
            hid.remove('MouseMove', this.onMouseMove);
            hid.remove('MouseUp', this.onMouseUp);
            hid.remove('MouseOut', this.onMouseUp);
        }
        this.isEnabled = false;
    };
    CameraFreeControlComponent.prototype.rotate = function (distanceX, distanceY) {
        if (this.isLockRotate) {
            return;
        }
        var x = distanceY / 100;
        var y = distanceX / 100;
        tempEulerXYDelta.y = y;
        if (this.isLockX) {
            tempEulerXYDelta.x = 0;
        }
        else {
            tempEulerXYDelta.x = x;
        }
    };
    CameraFreeControlComponent.prototype.scale = function (s) {
        if (this.isLockZoom) {
            return;
        }
        tempScaleDelta = s;
        var scale = this._currentScale + tempScaleDelta;
        if (scale >= this.zoomMax) {
            tempScaleDelta = this.zoomMax - this._currentScale;
        }
        if (scale <= this.zoomMin) {
            tempScaleDelta = this.zoomMin - this._currentScale;
        }
    };
    CameraFreeControlComponent.prototype.move = function (mx, my) {
        if (this.isLockMove) {
            return;
        }
        var position = this._camera.position;
        tempPanDelta.x = mx * -.1 * this.panSpeed;
        tempPanDelta.y = my * -.1 * this.panSpeed;
        var x = position.x;
        var y = this.useZBounding ? position.z : position.y;
        var resX = x + tempPanDelta.x;
        var resY = y + tempPanDelta.y;
        if (resX >= this.panXMax) {
            tempPanDelta.x = this.panXMax - position.x;
        }
        else if (resX <= this.panXMin) {
            tempPanDelta.x = this.panXMin - position.x;
        }
        if (resY >= this.panYMax) {
            tempPanDelta.y = this.panYMax - y;
        }
        else if (resY <= this.panYMin) {
            tempPanDelta.y = this.panYMin - y;
        }
    };
    CameraFreeControlComponent.prototype.updateTransform = function () {
        if (!this.damping) {
            return;
        }
        var transform = this._camera;
        var position = transform.position;
        if (tempScaleDelta) {
            if (Sein.isOrthographicCameraComponent(transform)) {
                var _a = this.getGame().bound, width = _a.width, height = _a.height;
                var deltaY = tempScaleDelta * height / width;
                transform.left -= tempScaleDelta;
                transform.right += tempScaleDelta;
                transform.bottom -= deltaY;
                transform.top += deltaY;
            }
            else {
                var forwardVector = transform.forwardVector;
                position.add(forwardVector.scale(tempScaleDelta));
            }
            this._currentScale += tempScaleDelta;
        }
        var rotateDeltaX = tempEulerXYDelta.x * this.rotateXSpeed;
        transform.quaternion.rotateX(rotateDeltaX);
        tempQuat.copy(transform.quaternion).invert();
        tempUp.set(0, 1, 0).transformQuat(tempQuat);
        transform.rotate(tempUp, -tempEulerXYDelta.y * this.rotateYSpeed);
        position.add((this.customMovingX ? this.customMovingX.clone() : transform.rightVector).scale(tempPanDelta.x)).add((this.customMovingY ? this.customMovingY.clone() : transform.upVector).scale(tempPanDelta.y));
        if (!this.enableDamping) {
            tempEulerXYDelta.set(0, 0);
            tempScaleDelta = 0;
            tempPanDelta.set(0, 0);
            return;
        }
        var factor = 1 - this.dampingFactor;
        tempPanDelta.scale(factor);
        if (this.panXMax !== Infinity || this.panXMin !== -Infinity) {
            var x = position.x;
            var resX = x + tempPanDelta.x;
            if (resX >= this.panXMax || resX <= this.panXMin) {
                tempPanDelta.x = 0;
            }
        }
        if (this.panYMax !== Infinity || this.panYMin !== -Infinity) {
            var y = this.useZBounding ? position.z : position.y;
            var resY = y + tempPanDelta.y;
            if (resY >= this.panYMax || resY <= this.panYMin) {
                tempPanDelta.y = 0;
            }
        }
        if (this._currentScale < this.zoomMax && this._currentScale > this.zoomMin) {
            tempScaleDelta *= factor;
        }
        else {
            tempScaleDelta = 0;
        }
        tempEulerXYDelta.scale(factor);
        if (this.rotateXMax !== 1 || this.rotateXMin !== -1) {
            var forwardVector = this._camera.forwardVector;
            var cos = forwardVector.dot(Sein.World.UP);
            if (cos < this._rotateXMinCos) {
                tempEulerXYDelta.x = 0;
                transform.quaternion.rotateX(-rotateDeltaX);
            }
            if (cos > this._rotateXMaxCos) {
                tempEulerXYDelta.x = 0;
                transform.quaternion.rotateX(-rotateDeltaX);
            }
        }
    };
    CameraFreeControlComponent.prototype.handleToucheMove = function (event) {
        this.handleMouseMove(event.touches[0]);
    };
    CameraFreeControlComponent = __decorate([
        Sein.SClass({ className: 'CameraFreeControlComponent' })
    ], CameraFreeControlComponent);
    return CameraFreeControlComponent;
}(Sein.Component));
exports.default = CameraFreeControlComponent;


/***/ }),

/***/ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/CameraFreeControlComponent/index.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/CameraFreeControlComponent/index.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : index.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/1/2018, 5:20:06 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
var CameraFreeControlComponent_1 = __webpack_require__(/*! ./CameraFreeControlComponent */ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/CameraFreeControlComponent/CameraFreeControlComponent.js");
exports.CameraFreeControlComponent = CameraFreeControlComponent_1.default;
Sein.CameraControls = Sein.CameraControls || {};
Sein.CameraControls.CameraFreeControlComponent = CameraFreeControlComponent_1.default;


/***/ }),

/***/ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/CameraOrbitControlComponent/CameraOrbitControlComponent.js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/CameraOrbitControlComponent/CameraOrbitControlComponent.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : CameraOrbitControlComponent.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 5:52:40 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
/**
 * @hidden
 */
var MOUSE = {
    LEFT: 0,
    MID: 1,
    RIGHT: 2
};
/**
 * @hidden
 */
var STATE = {
    NONE: -1,
    MOVE: 0,
    ZOOM: 1,
    PAN: 2
};
/**
 * @hidden
 */
var deltaEye = new Sein.Vector3();
/**
 * @hidden
 */
var deltaSpherical = new Sein.Spherical();
/**
 * @hidden
 */
function isSceneActor(value) {
    return value.isSceneActor;
}
/**
 * @hidden
 */
function isSceneComponent(value) {
    return value.isSceneComponent;
}
/**
 * 绕轨摄像机控制器，用于为指定的Actor下挂载的摄相机组件提供添加**标准鼠标或触摸**控制。
 * 此控制器将会使得摄像机在绕着世界中一点或者Actor的轨迹上运动，若想让摄像机自有得运动，请用[CameraFreeControlComponent](../camerafreecontrolcomponent)。
 *
 * @noInheritDoc
 */
var CameraOrbitControlComponent = /** @class */ (function (_super) {
    __extends(CameraOrbitControlComponent, _super);
    function CameraOrbitControlComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._eye = new Sein.Vector3();
        _this._spherical = new Sein.Spherical();
        _this._originSpherical = new Sein.Spherical();
        _this._mouseInfo = null;
        _this._tmpVec = new Sein.Vector3();
        _this._tmpUp = new Sein.Vector3();
        _this.overBounding = false;
        _this.onResize = function () {
            var _a = _this.getGame(), screenWidth = _a.screenWidth, screenHeight = _a.screenHeight;
            _this._radius = (screenWidth + screenHeight) / 4;
        };
        _this.onMouseDown = function (event) {
            _this._mouseInfo.isDown = true;
            switch (event.button) {
                case MOUSE.LEFT:
                    _this._mouseInfo.startX = event.pageX;
                    _this._mouseInfo.startY = event.pageY;
                    _this._mouseInfo.state = STATE.MOVE;
                    break;
                case MOUSE.RIGHT:
                    _this._mouseInfo.startX = event.pageX;
                    _this._mouseInfo.startY = event.pageY;
                    _this._mouseInfo.state = STATE.PAN;
                    break;
                default:
                    break;
            }
            var hid = _this.getGame().hid;
            hid.add('MouseMove', _this.onMouseMove);
            hid.add('MouseUp', _this.onMouseUp);
            hid.add('MouseOut', _this.onMouseUp);
            hid.remove('MouseDown', _this.onMouseDown);
        };
        _this.onMouseMove = function (event) {
            if (!_this._mouseInfo.isDown) {
                return;
            }
            switch (_this._mouseInfo.state) {
                case STATE.MOVE:
                    _this.handleMouseMove(event);
                    break;
                case STATE.PAN:
                    _this.handleMousePan(event);
                    break;
                default:
                    break;
            }
        };
        _this.onMouseUp = function (event) {
            _this._mouseInfo.isDown = false;
            _this._mouseInfo.state = STATE.NONE;
            var hid = _this.getGame().hid;
            hid.add('MouseDown', _this.onMouseDown);
            hid.remove('MouseMove', _this.onMouseMove);
            hid.remove('MouseUp', _this.onMouseUp);
            hid.remove('MouseOut', _this.onMouseUp);
        };
        _this.onContextMenu = function () {
        };
        _this.onTouchStart = function (event) {
            _this._mouseInfo.isDown = true;
            var touch0 = event.touches[0];
            _this._mouseInfo.startX = touch0.pageX;
            _this._mouseInfo.startY = touch0.pageY;
            switch (event.touches.length) {
                case 1:
                    _this._mouseInfo.state = STATE.MOVE;
                    break;
                case 2:
                    _this._mouseInfo.state = STATE.ZOOM;
                    break;
                case 3:
                    _this._mouseInfo.state = STATE.PAN;
                    break;
                default:
                    break;
            }
            var hid = _this.getGame().hid;
            hid.add('TouchMove', _this.onTouchMove);
            hid.add('TouchEnd', _this.onTouchEnd);
            hid.remove('TouchStart', _this.onTouchStart);
        };
        _this.onTouchMove = function (event) {
            if (!_this._mouseInfo.isDown) {
                return;
            }
            switch (_this._mouseInfo.state) {
                case STATE.MOVE:
                    if (event.touches.length === 1) {
                        _this.handleToucheMove(event);
                    }
                    break;
                case STATE.ZOOM:
                    if (event.touches.length === 2) {
                        _this.handleToucheZoom(event);
                    }
                    break;
                case STATE.PAN:
                    if (event.touches.length === 3) {
                        _this.handleTouchePan(event);
                    }
                    break;
                default:
                    break;
            }
        };
        _this.onTouchEnd = function (event) {
            _this._mouseInfo.isDown = false;
            _this._mouseInfo.state = STATE.NONE;
            var hid = _this.getGame().hid;
            hid.add('TouchStart', _this.onTouchStart);
            hid.remove('TouchMove', _this.onTouchMove);
            hid.remove('TouchEnd', _this.onTouchEnd);
        };
        _this.handleMousePan = function (event) {
            var distanceX = event.pageX - _this._mouseInfo.startX;
            var distanceY = event.pageY - _this._mouseInfo.startY;
            _this._mouseInfo.startX = event.pageX;
            _this._mouseInfo.startY = event.pageY;
            _this.move(distanceX * .1, distanceY * .1);
        };
        _this.handleMouseMove = function (event) {
            _this.rotate(event.pageX, event.pageY);
        };
        _this.handleToucheZoom = function (evt) {
            var event = evt.touches[0];
            var delta = event.pageY - _this._mouseInfo.startY;
            _this._mouseInfo.startX = event.pageX;
            _this._mouseInfo.startY = event.pageY;
            if (delta < -25) {
                delta = -25;
            }
            else if (delta > 25) {
                delta = 25;
            }
            var s = delta * .004 + 1;
            _this.scale(s);
        };
        _this.handleTouchePan = function (evt) {
            var event = evt.touches[0];
            var distanceX = event.pageX - _this._mouseInfo.startX;
            var distanceY = event.pageY - _this._mouseInfo.startY;
            _this._mouseInfo.startX = event.pageX;
            _this._mouseInfo.startY = event.pageY;
            _this.move(distanceX * .01, -distanceY * .01);
        };
        _this.onWheel = function (event) {
            var deltaY = event.deltaY;
            if (deltaY < -100) {
                deltaY = -100;
            }
            else if (deltaY > 100) {
                deltaY = 100;
            }
            var s = deltaY * .001 + 1;
            _this.scale(s);
        };
        return _this;
    }
    Object.defineProperty(CameraOrbitControlComponent.prototype, "active", {
        /**
         * 当前是否正在控制。
         */
        get: function () {
            return this._mouseInfo.state !== STATE.NONE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraOrbitControlComponent.prototype, "damping", {
        /**
         * 当前是否正在缓动。
         */
        get: function () {
            return this.enableDamping && (Math.abs(deltaSpherical.radius) > 0.01 ||
                Math.abs(deltaSpherical.theta) > 0.01 ||
                Math.abs(deltaSpherical.phi) > 0.01 ||
                deltaEye.length() > 0.01);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CameraOrbitControlComponent.prototype, "target", {
        /**
         * 获取当前目标。
         */
        get: function () {
            return this._target;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化，继承请先`super.onInit()`。
     */
    CameraOrbitControlComponent.prototype.onInit = function (options) {
        this.switchCamera(options.cameraComponentName);
        this.switchTarget(options.target);
        this.isLockY = !!options.isLockY;
        this.isLockX = !!options.isLockX;
        this.isLockZoom = !!options.isLockZoom;
        this.isLockRotate = !!options.isLockRotate;
        this.isLockMove = !!options.isLockMove;
        this.zoomMax = options.zoomMax || Infinity;
        this.zoomMin = options.zoomMin || -Infinity;
        this.panMax = options.panMax;
        this.panMin = options.panMin;
        this.panSpeed = options.panSpeed || 1;
        this.rotateSpeed = options.rotateSpeed || 1;
        this.zoomSpeed = options.zoomSpeed || 1;
        this.enableDamping = !!options.enableDamping;
        this.dampingFactor = options.dampingFactor || 1;
        this.isEnabled = false;
    };
    /**
     * 添加到世界，继承请先`super.onAdd()`。
     */
    CameraOrbitControlComponent.prototype.onAdd = function () {
        var event = this.getGame().event;
        event.add('Resize', this.onResize);
        this.onResize();
        this.enable();
    };
    /**
     * 每一帧更新，继承请先`super.onUpdate()`。
     */
    CameraOrbitControlComponent.prototype.onUpdate = function () {
        this.updateTransform();
    };
    /**
     * 继承请先`super.onUnLink()`。
     */
    CameraOrbitControlComponent.prototype.onUnLink = function () {
        this.disable();
    };
    /**
     * 继承请先`super.reUnLink()`。
     */
    CameraOrbitControlComponent.prototype.reUnLink = function () {
        this.enable();
    };
    /**
     * 销毁，继承请先`super.onUpdate()`。
     */
    CameraOrbitControlComponent.prototype.onDestroy = function () {
        var event = this.getGame().event;
        event.remove('Resize', this.onResize);
        this.disable();
    };
    /**
     * 通过组件名称`cameraComponentName`来切换当前控制的摄相机。
     */
    CameraOrbitControlComponent.prototype.switchCamera = function (cameraComponentName) {
        if (cameraComponentName === void 0) { cameraComponentName = 'root'; }
        this._camera = this.getOwner().findComponentByName(cameraComponentName);
        if (!this._camera) {
            throw new Sein.UnmetRequireException(this, 'You muse give a valid component name !.');
        }
        if (!this._camera.isCameraComponent) {
            throw new Sein.TypeConflictException(this._camera, 'Camera', this);
        }
        if (this._target) {
            this.resetSpherical();
        }
    };
    /**
     * 切换当前的目标。
     */
    CameraOrbitControlComponent.prototype.switchTarget = function (target) {
        if (isSceneActor(target)) {
            this._target = target.transform.absolutePosition.clone();
        }
        else if (isSceneComponent(target)) {
            this._target = target.absolutePosition.clone();
        }
        else {
            this._target = target.clone();
        }
        if (this._camera) {
            this.resetSpherical();
        }
    };
    /**
     * 启动控制器。
     */
    CameraOrbitControlComponent.prototype.enable = function () {
        if (this.isEnabled) {
            return;
        }
        this._mouseInfo = {
            startX: 0,
            startY: 0,
            isDown: false,
            startPointerDistance: 0,
            state: STATE.NONE,
            dampState: STATE.NONE
        };
        var _a = this.getGame(), hid = _a.hid, deviceInfo = _a.deviceInfo;
        hid.add('Wheel', this.onWheel);
        if (deviceInfo.touchable) {
            hid.add('TouchStart', this.onTouchStart);
        }
        else {
            hid.add('ContextMenu', this.onContextMenu);
            hid.add('MouseDown', this.onMouseDown);
        }
        this.resetSpherical();
        this.isEnabled = true;
    };
    /**
     * 关闭控制器。
     */
    CameraOrbitControlComponent.prototype.disable = function () {
        if (!this.isEnabled) {
            return;
        }
        var _a = this.getGame(), hid = _a.hid, deviceInfo = _a.deviceInfo;
        hid.remove('Wheel', this.onWheel);
        if (deviceInfo.touchable) {
            hid.remove('TouchStart', this.onTouchStart);
            hid.remove('TouchMove', this.onTouchMove);
            hid.remove('TouchEnd', this.onTouchEnd);
        }
        else {
            hid.remove('ContextMenu', this.onContextMenu);
            hid.remove('MouseDown', this.onMouseDown);
            hid.remove('MouseMove', this.onMouseMove);
            hid.remove('MouseUp', this.onMouseUp);
            hid.remove('MouseOut', this.onMouseUp);
        }
        this.isEnabled = false;
    };
    CameraOrbitControlComponent.prototype.resetSpherical = function () {
        this._spherical.setFromVector3(this._eye.copy(this._camera.position).subtract(this._target));
        this._originSpherical.copy(this._spherical);
    };
    CameraOrbitControlComponent.prototype.rotate = function (x, y) {
        if (this.isLockRotate) {
            return;
        }
        var _a = this._mouseInfo, startX = _a.startX, startY = _a.startY;
        var theta = (x - startX) / this._radius * -this.rotateSpeed;
        var phi = (y - startY) / this._radius * -this.rotateSpeed;
        if (Math.abs(theta) < .01 && Math.abs(phi) < .01) {
            return;
        }
        if (this.isLockX) {
            theta = 0;
        }
        if (this.isLockY) {
            phi = 0;
        }
        deltaSpherical.theta = theta;
        deltaSpherical.phi = phi;
        this._mouseInfo.startX = x;
        this._mouseInfo.startY = y;
        this._mouseInfo.dampState = STATE.MOVE;
    };
    CameraOrbitControlComponent.prototype.scale = function (s) {
        if (this.isLockZoom) {
            return;
        }
        var radius = this._spherical.radius;
        var maxRadius = this.zoomMax;
        var minRadius = this.zoomMin;
        var newRadius = radius * s;
        if (newRadius > maxRadius) {
            deltaSpherical.radius = maxRadius - radius;
        }
        else if (newRadius < minRadius) {
            deltaSpherical.radius = minRadius - radius;
        }
        else {
            deltaSpherical.radius = (newRadius - radius) * this.zoomSpeed;
        }
        this._mouseInfo.dampState = STATE.ZOOM;
    };
    ;
    CameraOrbitControlComponent.prototype.move = function (x, y) {
        if (this.isLockMove) {
            return;
        }
        var camera = this._camera;
        var position = camera.position;
        var _a = this, panMax = _a.panMax, panMin = _a.panMin;
        this._tmpVec.copy(camera.rightVector);
        this._tmpUp.copy(camera.upVector);
        var pan = this.setVector3Length(this._tmpVec, x);
        pan.add(this.setVector3Length(this._tmpUp, -y));
        pan.scale(this.panSpeed);
        if (panMax || panMin) {
            var res = this._tmpVec.copy(position).add(pan);
            if (res.x >= panMax.x) {
                pan.x = panMax.x - position.x;
                this.overBounding = true;
            }
            else if (res.x <= panMin.x) {
                pan.x = panMin.x - position.x;
                this.overBounding = true;
            }
            if (res.y >= panMax.y) {
                pan.y = panMax.y - position.y;
                this.overBounding = true;
            }
            else if (res.y <= panMin.y) {
                pan.y = panMin.y - position.y;
                this.overBounding = true;
            }
            if (res.z >= panMax.z) {
                pan.z = panMax.z - position.z;
                this.overBounding = true;
            }
            else if (res.x <= panMin.x) {
                pan.z = panMin.z - position.z;
                this.overBounding = true;
            }
        }
        deltaEye.copy(pan);
        this._mouseInfo.dampState = STATE.PAN;
    };
    ;
    CameraOrbitControlComponent.prototype.updateTransform = function () {
        if (!this.damping) {
            return;
        }
        this._eye.copy(this._camera.position).subtract(this._target);
        switch (this._mouseInfo.dampState) {
            case STATE.PAN:
                this._target.add(deltaEye);
                break;
            case STATE.MOVE:
                this._spherical.theta += deltaSpherical.theta;
                this._spherical.phi += deltaSpherical.phi;
                this._spherical.makeSafe();
                this._spherical.toVector3(this._eye);
                break;
            case STATE.ZOOM:
                this._spherical.radius += deltaSpherical.radius;
                this._spherical.makeSafe();
                this._spherical.toVector3(this._eye);
                break;
            default:
                break;
        }
        this._camera.position.copy(this._eye.add(this._target));
        this._camera.lookAt(this._target);
        if (!this.enableDamping) {
            deltaEye.set(0, 0, 0);
            deltaSpherical.theta = deltaSpherical.phi = 0;
            return;
        }
        var factor = 1 - this.dampingFactor;
        if (this.overBounding) {
            deltaEye.set(0, 0, 0);
            this.overBounding = false;
        }
        else {
            deltaEye.scale(factor);
        }
        deltaSpherical.theta *= factor;
        deltaSpherical.phi *= factor;
        var newRadius = (deltaSpherical.radius *= factor) + this._spherical.radius;
        if (newRadius > this.zoomMax || newRadius < this.zoomMin) {
            deltaSpherical.radius = 0;
        }
    };
    CameraOrbitControlComponent.prototype.handleToucheMove = function (event) {
        this.handleMouseMove(event.touches[0]);
    };
    CameraOrbitControlComponent.prototype.setVector3Length = function (vector, length) {
        return vector.normalize().scale(length);
    };
    CameraOrbitControlComponent = __decorate([
        Sein.SClass({ className: 'CameraOrbitControlComponent' })
    ], CameraOrbitControlComponent);
    return CameraOrbitControlComponent;
}(Sein.Component));
exports.default = CameraOrbitControlComponent;


/***/ }),

/***/ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/CameraOrbitControlComponent/index.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/CameraOrbitControlComponent/index.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : index.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/5/2018, 5:52:44 PM
 * @Description:
 */
var Sein = __webpack_require__(/*! seinjs */ "./node_modules/_seinjs@1.3.20@seinjs/lib/seinjs.umd.js");
var CameraOrbitControlComponent_1 = __webpack_require__(/*! ./CameraOrbitControlComponent */ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/CameraOrbitControlComponent/CameraOrbitControlComponent.js");
exports.CameraOrbitControlComponent = CameraOrbitControlComponent_1.default;
Sein.CameraControls = Sein.CameraControls || {};
Sein.CameraControls.CameraOrbitControlComponent = CameraOrbitControlComponent_1.default;


/***/ }),

/***/ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : index.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 11/1/2018, 5:20:06 PM
 * @Description:
 */
__export(__webpack_require__(/*! ./ActorObserveControlComponent */ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/ActorObserveControlComponent/index.js"));
__export(__webpack_require__(/*! ./CameraOrbitControlComponent */ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/CameraOrbitControlComponent/index.js"));
__export(__webpack_require__(/*! ./CameraFreeControlComponent */ "./node_modules/_seinjs-camera-controls@0.8.12@seinjs-camera-controls/lib/CameraFreeControlComponent/index.js"));


/***/ }),

/***/ "./node_modules/_seinjs-inspector@0.8.10@seinjs-inspector/lib/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_seinjs-inspector@0.8.10@seinjs-inspector/lib/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window["seinjs-inspector"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createContext", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toChildArray", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unmount", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return n; });
var n,l,u,i,t,o,f,r={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function h(n,l,u){var i,t,o,f,r=arguments;if(l=s({},l),arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(r[i]);if(null!=u&&(l.children=u),null!=n&&null!=n.defaultProps)for(t in n.defaultProps)void 0===l[t]&&(l[t]=n.defaultProps[t]);return f=l.key,null!=(o=l.ref)&&delete l.ref,null!=f&&delete l.key,v(n,l,f,o)}function v(l,u,i,t){var o={type:l,props:u,key:i,ref:t,__k:null,__p:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function p(){return{}}function d(n){return n.children}function y(n,l){this.props=n,this.context=l}function m(n,l){if(null==l)return n.__p?m(n.__p,n.__p.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__p)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||t!==n.debounceRendering)&&(t=n.debounceRendering,(n.debounceRendering||i)(k))}function k(){var n,l,i,t,o,f,r;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(i=void 0,t=void 0,f=(o=(l=n).__v).__e,(r=l.__P)&&(i=[],t=T(r,o,s({},o),l.__n,void 0!==r.ownerSVGElement,null,i,null==f?m(o):f),$(i,o),t!=f&&w(o)))}function _(n,l,u,i,t,o,f,c,s){var h,v,p,d,y,w,g,k=u&&u.__k||e,_=k.length;if(c==r&&(c=null!=o?o[0]:_?m(u,0):null),h=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__p=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null}if(d=T(n,u,p=p||r,i,t,o,f,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[])).push(v,u.__c||d,u),null!=d){if(null==w&&(w=d),null!=u.__d)d=u.__d,u.__d=null;else if(o==p||d!=c||null==d.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(d);else{for(y=c,v=0;(y=y.nextSibling)&&v<_;v+=2)if(y==d)break n;n.insertBefore(d,c)}"option"==l.type&&(n.value="")}c=d.nextSibling,"function"==typeof l.type&&(l.__d=d)}}return h++,u}),l.__e=w,null!=o&&"function"!=typeof l.type)for(h=o.length;h--;)null!=o[h]&&a(o[h]);for(h=_;h--;)null!=k[h]&&A(k[h],k[h]);if(g)for(h=0;h<g.length;h++)z(g[h],g[++h],g[++h])}function b(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var i=0;i<n.length;i++)b(n[i],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?v(null,n,null,null):null!=n.__e||null!=n.__c?v(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,i,t){var o;for(o in u)o in l||P(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||P(n,o,l[o],u[o],i)}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u}function P(n,l,u,i,t){var o,f,r,e,c;if("key"===(l=t?"className"===l?"class":l:"class"===l?"className":l)||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof i&&(o.cssText="",i=null),i)for(f in i)u&&f in u||C(o,f,"");if(u)for(r in u)i&&u[r]===i[r]||C(o,r,u[r])}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(i||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u))}function N(l){this.l[l.type](n.event?n.event(l):l)}function T(l,u,i,t,o,f,r,e,c){var a,h,v,p,m,w,g,k,x,C,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(k=u.props,x=(a=P.contextType)&&t[a.__c],C=a?x?x.props.value:a.__p:t,i.__c?g=(h=u.__c=i.__c).__p=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(k,C):(u.__c=h=new y(k,C),h.constructor=P,h.render=D),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=C,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&s(h.__s==h.state?h.__s=s({},h.__s):h.__s,P.getDerivedStateFromProps(k,h.__s)),p=h.props,m=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&null==h.__e&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,C),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,C)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=u,u.__e=i.__e,u.__k=i.__k,a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__p=u);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,m,w)})}h.context=C,h.props=k,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),u.__k=b(null!=a&&a.type==d&&null==a.key?a.props.children:a),null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(p,m)),_(l,u,i,t,o,f,r,e,c),h.base=u.__e,h.__h.length&&r.push(h),g&&(h.__E=h.__p=null),h.__e=null}else u.__e=j(i.__e,u,i,t,o,f,r,c);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,i)}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,f,c){var s,a,h,v,p,d=u.props,y=l.props;if(t="svg"===l.type||t,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(y);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),d!==y&&(n.data=y);else if(l!==u){if(null!=o&&(o=e.slice.call(n.childNodes)),h=(d=u.props||r).dangerouslySetInnerHTML,v=y.dangerouslySetInnerHTML,!c){if(d===r)for(d={},p=0;p<n.attributes.length;p++)d[n.attributes[p].name]=n.attributes[p].value;(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||""))}x(n,y,d,t,c),l.__k=l.props.children,v||_(n,l,u,i,"foreignObject"!==l.type&&t,o,f,r,c),c||("value"in y&&void 0!==y.value&&y.value!==n.value&&(n.value=null==y.value?"":y.value),"checked"in y&&void 0!==y.checked&&y.checked!==n.checked&&(n.checked=y.checked))}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function A(l,u,i){var t,o,f;if(n.unmount&&n.unmount(l),(t=l.ref)&&z(t,null,u),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=null,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(f=0;f<t.length;f++)t[f]&&A(t[f],u,i);null!=o&&a(o)}function D(n,l,u){return this.constructor(n,u)}function H(l,u,i){var t,f,c;n.__p&&n.__p(l,u),f=(t=i===o)?null:i&&i.__k||u.__k,l=h(d,null,[l]),c=[],T(u,(t?u:i||u).__k=l,f||r,r,void 0!==u.ownerSVGElement,i&&!t?[i]:f?null:e.slice.call(u.childNodes),c,i||r,t),$(c,l)}function I(n,l){H(n,l,o)}function L(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),v(n.type,l,l.key||n.key,l.ref||n.ref)}function M(n){var l={},u={__c:"__cC"+f++,__p:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&i.some(function(n){n.context=l.value,g(n)})},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={},l=function(n){return null!=n&&void 0===n.constructor},y.prototype.setState=function(n,l){var u=this.__s!==this.state&&this.__s||(this.__s=s({},this.state));("function"!=typeof n||(n=n(u,this.props)))&&s(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),g(this))},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},y.prototype.render=d,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,t=n.debounceRendering,n.__e=function(n,l,u){for(var i;l=l.__p;)if((i=l.__c)&&!i.__p)try{if(i.constructor&&null!=i.constructor.getDerivedStateFromError)i.setState(i.constructor.getDerivedStateFromError(n));else{if(null==i.componentDidCatch)continue;i.componentDidCatch(n)}return g(i.__E=i)}catch(l){n=l}throw n},o=r,f=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(20).Buffer))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Group_1 = __webpack_require__(7);
exports.Group = Group_1.default;
var Switch_1 = __webpack_require__(25);
exports.Switch = Switch_1.default;
var Select_1 = __webpack_require__(28);
exports.Select = Select_1.default;
var Button_1 = __webpack_require__(31);
exports.Button = Button_1.default;
var Information_1 = __webpack_require__(8);
exports.Information = Information_1.default;
var Range_1 = __webpack_require__(36);
exports.Range = Range_1.default;
var ColorPicker_1 = __webpack_require__(39);
exports.ColorPicker = ColorPicker_1.default;
var ToolsBar_1 = __webpack_require__(42);
exports.ToolsBar = ToolsBar_1.default;
var Tab_1 = __webpack_require__(45);
exports.Tab = Tab_1.default;
var Tree_1 = __webpack_require__(48);
exports.Tree = Tree_1.default;
var Preview_1 = __webpack_require__(55);
exports.Preview = Preview_1.default;
var List_1 = __webpack_require__(58);
exports.List = List_1.default;
var Folder_1 = __webpack_require__(61);
exports.Folder = Folder_1.default;
var WithDetails_1 = __webpack_require__(64);
exports.WithDetails = WithDetails_1.default;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function() { module.exports = window["Sein"]; }());

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: InfoTab.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-06 15:28:00
 * @LastEditTime: 2019-10-28 20:06:40
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(83);
var components_1 = __webpack_require__(3);
var InfoTab = /** @class */ (function (_super) {
    __extends(InfoTab, _super);
    function InfoTab() {
        var _this = _super.call(this) || this;
        _this.currentId = 1;
        _this.tabItem = [
            {
                id: 1,
                text: 'Private'
            },
            {
                id: 2,
                text: 'Transform'
            },
            {
                id: 3,
                text: 'Geomerty'
            },
            {
                id: 4,
                text: 'Materials'
            }
        ];
        _this.setState({
            detailTabId: 1
        });
        return _this;
    }
    InfoTab.prototype.componentWillMount = function () {
        var _a = this.props, hidePrivate = _a.hidePrivate, hideGeometry = _a.hideGeometry, hideMaterials = _a.hideMaterials, hideTransform = _a.hideTransform;
        if (hidePrivate) {
            this.tabItem[0].hidden = true;
            this.currentId === 1 && this.currentId++;
        }
        if (hideTransform) {
            this.tabItem[1].hidden = true;
            this.currentId === 2 && this.currentId++;
        }
        if (hideGeometry) {
            this.tabItem[2].hidden = true;
            this.currentId === 3 && this.currentId++;
        }
        if (hideMaterials) {
            this.tabItem[3].hidden = true;
        }
    };
    InfoTab.prototype.getTransform = function () {
        return preact_1.h(preact_1.Fragment, null, this.props.transform);
    };
    InfoTab.prototype.getPrivate = function () {
        return preact_1.h(preact_1.Fragment, null, this.props.private);
    };
    InfoTab.prototype.getMaterials = function () {
        return preact_1.h(preact_1.Fragment, null, this.props.materials);
    };
    InfoTab.prototype.getGeometry = function () {
        return preact_1.h(preact_1.Fragment, null, this.props.geometry);
    };
    InfoTab.prototype.getTabDetail = function () {
        var detailTabId = this.state.detailTabId;
        switch (detailTabId) {
            case 1:
                return this.getPrivate();
            case 2:
                return this.getTransform();
            case 3:
                return this.getGeometry();
            case 4:
                return this.getMaterials();
            default:
                return null;
        }
    };
    InfoTab.prototype.render = function () {
        var _this = this;
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-infotab-container' },
            preact_1.h("div", { className: 'sein-inspector-infotab-detail' },
                preact_1.h(components_1.Tab, { data: this.tabItem, showIcon: false, currentId: this.currentId, onTabChange: function (id) {
                        return _this.setState({ detailTabId: id });
                    } }),
                this.getTabDetail())));
    };
    return InfoTab;
}(preact_1.Component));
exports.default = InfoTab;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EControlType;
(function (EControlType) {
    EControlType["StartSync"] = "StartSync";
    EControlType["EndSync"] = "EndSync";
})(EControlType = exports.EControlType || (exports.EControlType = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @File   : Game.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:55:56 PM
 * @Description:
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var cx = __webpack_require__(17);
__webpack_require__(18);
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isClose: true
        };
        _this.handleToggle = function () {
            _this.setState({ isClose: !_this.state.isClose });
        };
        return _this;
    }
    Group.prototype.componentDidMount = function () {
        if (this.props.isClose === undefined) {
            this.setState({ isClose: true });
        }
        else {
            this.setState({ isClose: this.props.isClose });
        }
    };
    Group.prototype.componentWillUnmount = function () { };
    Group.prototype.render = function () {
        var _this = this;
        var name = this.props.name;
        var isClose = this.state.isClose;
        return (preact_1.h("div", { className: 'sein-inspector-group' },
            preact_1.h("div", { ref: function (group) { return (_this.groupBar = group); }, onClick: this.handleToggle, className: cx('sein-inspector-group-bar', isClose && 'close') },
                name,
                preact_1.h("i", null, "\u00A0")),
            preact_1.h("div", { ref: function (content) { return (_this.content = content); }, className: cx('sein-inspector-group-content', isClose && 'close') }, this.props.children)));
    };
    return Group;
}(preact_1.Component));
exports.default = Group;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Game.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:55:56 PM
 * @Description:
 */
/**
 * tab bar
 */
var preact_1 = __webpack_require__(0);
__webpack_require__(34);
var Infomation = /** @class */ (function (_super) {
    __extends(Infomation, _super);
    function Infomation() {
        var _this = _super.call(this) || this;
        _this.onClick = function () {
            var _a = _this.props, onTrigger = _a.onTrigger, interactive = _a.interactive;
            if (onTrigger) {
                onTrigger();
            }
        };
        return _this;
    }
    Infomation.prototype.componentDidMount = function () { };
    Infomation.prototype.render = function (props, state) {
        // console.log("infomation render");
        var _a = this.props, label = _a.label, value = _a.value, interactive = _a.interactive;
        if (typeof value === 'boolean') {
            value = value ? 'True' : 'False';
        }
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-infomation-container' },
            preact_1.h("div", { className: 'sein-inspector-component-box', onClick: this.onClick },
                preact_1.h("label", { className: 'sein-inspector-label', title: label || 'Label' }, label || 'Label'),
                preact_1.h("div", { className: 'sein-inspector-infomation-value' }, value),
                interactive && (preact_1.h("div", { className: 'iconfont sein-inspector-infomation-editable' })))));
    };
    return Infomation;
}(preact_1.Component));
exports.default = Infomation;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var TreeNode = /** @class */ (function (_super) {
    __extends(TreeNode, _super);
    function TreeNode() {
        var _this = _super.call(this) || this;
        _this.treeNodeClick = function (event) {
            var _a = _this.props, onTreeNodeClick = _a.onTreeNodeClick, treeNodeData = _a.treeNodeData;
            var isOpen = _this.state.isOpen;
            var hasChild = treeNodeData.children && treeNodeData.children.length;
            if (hasChild) {
                _this.setState({
                    isOpen: !isOpen
                });
            }
            onTreeNodeClick(event.currentTarget, _this.state.isOpen, hasChild);
        };
        _this.setState({
            isOpen: false
        });
        return _this;
    }
    TreeNode.prototype.componentDidMount = function () { };
    TreeNode.prototype.render = function () {
        var _a = this.props, deep = _a.deep, treeNodeData = _a.treeNodeData;
        var depth = "deep" + deep;
        var hasChild = treeNodeData.children && treeNodeData.children.length ? "" : "no-child";
        var isOpen = this.state.isOpen;
        // 树节点样式计算
        var nodeClassName = [];
        nodeClassName.push("sein-inspector-tree-node");
        depth && nodeClassName.push(depth);
        hasChild && nodeClassName.push(hasChild);
        isOpen && nodeClassName.push("open");
        // 树节点类型计算
        var _b = treeNodeData.type, type = _b === void 0 ? "default" : _b;
        return (preact_1.h("div", { onClick: this.treeNodeClick, className: nodeClassName.join(" ") },
            preact_1.h("div", { className: "tree-node-icon iconfont " + type }),
            preact_1.h("div", { className: "tree-node-text" }, treeNodeData.text),
            this.props.children));
    };
    return TreeNode;
}(preact_1.Component));
exports.default = TreeNode;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Sein = __webpack_require__(4);
var BSPCircleComponent = /** @class */ (function (_super) {
    __extends(BSPCircleComponent, _super);
    function BSPCircleComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isBSPPlaneComponent = true;
        return _this;
    }
    BSPCircleComponent.prototype.convertState = function (initState) {
        var radius = initState.radius, radialSegments = initState.radialSegments, others = __rest(initState, ["radius", "radialSegments"]);
        var result = others;
        var vertices = this.getVertices(radius, radialSegments);
        var geometry = new Sein.Geometry({
            vertices: vertices,
            mode: Sein.Constants.LINES
        });
        geometry.isDirty = true;
        result.geometry = geometry;
        return result;
    };
    BSPCircleComponent.prototype.getVertices = function (radius, radialSegments) {
        if (radialSegments === void 0) { radialSegments = 16; }
        var array = [];
        var curAngle = 0;
        var step = (Math.PI * 2) / radialSegments;
        for (var i = 0; i < radialSegments; i++) {
            // array.push[x,y,z]
            array = array.concat([Math.cos(curAngle) * radius, 0, Math.sin(curAngle) * radius], [Math.cos(curAngle) * radius, 0, Math.sin(curAngle) * radius]);
            curAngle += step;
        }
        var first = array.shift();
        array.push(first);
        var second = array.shift();
        array.push(second);
        var third = array.shift();
        array.push(third);
        return new Sein.GeometryData(new Float32Array(array), 3, null);
    };
    BSPCircleComponent.prototype.setRadius = function (radius, radialSegments) {
        if (radialSegments === void 0) { radialSegments = 16; }
        this.geometry.vertices = this.getVertices(radius, radialSegments);
        this.geometry.isDirty = true;
        return this;
    };
    return BSPCircleComponent;
}(Sein.BSPComponent));
exports.BSPCircleComponent = BSPCircleComponent;
var BSPLineComponent = /** @class */ (function (_super) {
    __extends(BSPLineComponent, _super);
    function BSPLineComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isBSPPlaneComponent = true;
        return _this;
    }
    BSPLineComponent.prototype.convertState = function (initState) {
        var PointA = initState.PointA, PointB = initState.PointB, others = __rest(initState, ["PointA", "PointB"]);
        var result = others;
        var vertices = new Sein.GeometryData(new Float32Array(PointA.toArray().concat(PointB.toArray())), 3, null);
        result.geometry = new Sein.Geometry({
            vertices: vertices,
            mode: Sein.Constants.LINES
        });
        return result;
    };
    BSPLineComponent.prototype.setVertices = function (pointA, pointB) {
        var vertices = new Sein.GeometryData(new Float32Array(pointA.toArray().concat(pointB.toArray())), 3, null);
        this.geometry.vertices = vertices;
        this.geometry.isDirty = true;
        return this;
    };
    return BSPLineComponent;
}(Sein.BSPComponent));
exports.BSPLineComponent = BSPLineComponent;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : DomHUDActor.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 2019/7/28 上午11:58:00
 * @Description:
 */
var Sein = __webpack_require__(4);
var InspectorActor_1 = __webpack_require__(13);
exports.Actor = InspectorActor_1.default;
Sein.Inspector = {
    Actor: InspectorActor_1.default
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : InspectorActor.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 2019/7/28 下午2:08:42
 *
 */
var Sein = __webpack_require__(4);
var types_1 = __webpack_require__(6);
var index_1 = __webpack_require__(14);
function isInspectorActor(value) {
    return value.isInspectorActor;
}
exports.isInspectorActor = isInspectorActor;
var InspectorActor = /** @class */ (function (_super) {
    __extends(InspectorActor, _super);
    function InspectorActor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isInspectorActor = true;
        _this.updatePriority = Sein.InfoActor.UPDATE_PRIORITY.Others;
        _this._hiddenObjects = {};
        _this._selfHidden = [];
        _this._info = {
            system: null,
            engine: null,
            game: null,
            cameras: null,
            world: null,
            level: null,
            render: null,
            physic: null,
            resource: null,
            events: null
        };
        _this._actor = null;
        _this._updateRate = 10;
        _this._delta = 0;
        _this._levelAlive = false;
        _this._physicAlive = false;
        _this._enableSync = false;
        _this._container = document.body;
        _this.generateActor = function () {
            if (_this._actor) {
                return;
            }
            var actor = (_this._actor = _this.getWorld().addActor("forMonitor", Sein.SceneActor));
            actor.persistent = true;
            actor.onUpdate = function () {
                _this._levelAlive = true;
            };
            _this.addSelfHidden(actor);
            if (_this.getPhysicWorld()) {
                var rigidBody = actor.addComponent("rigidBody", Sein.RigidBodyComponent, { mass: 0, sleeping: true });
                rigidBody.onUpdate = function () {
                    _this._physicAlive = true;
                };
            }
            // const axis = this.getWorld().addActor('Axis', AxisActor);
            // this.addSelfHidden(axis);
        };
        _this.clearActor = function () {
            _this._actor = null;
            _this._selfHidden.forEach(function (obj) { return _this.removeHidden(obj); });
            _this._selfHidden = [];
        };
        _this.handleControl = function (event) {
            if (event.type === types_1.EControlType.StartSync) {
                _this._enableSync = true;
            }
            else if (event.type === types_1.EControlType.EndSync) {
                _this._enableSync = false;
            }
        };
        return _this;
    }
    Object.defineProperty(InspectorActor.prototype, "event", {
        /**
         * 事件管理器。
         */
        get: function () {
            return this._root.event;
        },
        enumerable: true,
        configurable: true
    });
    InspectorActor.prototype.addHidden = function (object) {
        this._hiddenObjects[object.uuid] = object;
    };
    InspectorActor.prototype.removeHidden = function (object) {
        delete this._hiddenObjects[object.uuid];
    };
    InspectorActor.prototype.isHidden = function (object) {
        return !!this._hiddenObjects[object.uuid];
    };
    InspectorActor.prototype.addSelfHidden = function (object) {
        this._hiddenObjects[object.uuid] = object;
        this._selfHidden.push(object);
    };
    InspectorActor.prototype.onInit = function (initOptions) {
        var updateRate = initOptions.updateRate, dom = initOptions.dom;
        this.event.register("Update");
        this.event.add("Control", this.handleControl);
        dom && (this._container = initOptions.dom);
        updateRate && (this._updateRate = initOptions.updateRate);
    };
    InspectorActor.prototype.onAdd = function (initOptions) {
        var game = this.getGame();
        game.event.add("LevelDidInit", this.generateActor);
        game.event.add("WorldWillDestroy", this.clearActor);
        if (game.level) {
            this.generateActor();
        }
        this.sync(0, true);
        this.renderUI();
    };
    InspectorActor.prototype.onError = function (error, details) {
        return true;
    };
    InspectorActor.prototype.onUpdate = function (delta) {
        if (!this._enableSync) {
            return;
        }
        this._delta += delta;
        if (this._delta >= (1000 / this._updateRate)) {
            this._delta = 0;
            this.sync(delta);
        }
    };
    InspectorActor.prototype.sync = function (delta, first) {
        if (first === void 0) { first = false; }
        var game = this.getGame();
        var engine = game.parent;
        var world = this.getWorld();
        var level = this.getLevel();
        var physicWorld = this.getPhysicWorld();
        var bufferBytes = 0;
        Object.keys(Sein.Buffer.cache._cache).forEach(function (key) {
            bufferBytes += Sein.Buffer.cache._cache[key].data.byteLength || 0;
        });
        this._info = {
            system: {
                fps: 1000 / delta,
                memory: performance.memory ? performance.memory.totalJSHeapSize : null,
                cpu: null
            },
            engine: {
                tickerRunning: !game.ticker.paused,
                gamesCount: engine._games.length,
                runningGamesCount: engine._runningGames.length
            },
            game: {
                name: game.name.value,
                paused: engine._runningGames.indexOf(game) < 0,
                structure: null,
                actorsCount: game.actors.length,
                actors: game.actors
            },
            cameras: world.mainCamera
                ? [
                    {
                        refer: world.mainCamera,
                        name: world.mainCamera.name.value,
                        ownerName: world.mainCamera.getOwner().name.value,
                        isMain: true,
                        alive: world.mainCamera.rendererAlive
                    }
                ]
                : [],
            world: {
                name: world.name.value
            },
            level: {
                name: level.name.value,
                alive: this._levelAlive,
                actorsCount: level.actors.length,
                actors: level.actors
            },
            render: {
                buffers: Object.keys(Sein.Buffer.cache._cache).length,
                shaders: Object.keys(Sein.Shader.cache._cache).length,
                programs: Object.keys(Sein.Program.cache._cache).length,
                textures: Object.keys(Sein.Texture.cache._cache).length,
                bufferBytes: bufferBytes,
                totalTriangles: this._info && this._info.render && (this._info.render.totalTriangles || null),
                totalVertices: this._info && this._info.render && (this._info.render.totalVertices || null)
            },
            resource: this.getResource(),
            events: {
                global: Object.keys(this._game.event._observables).length,
                hid: Object.keys(this._game.hid._observables).length
            },
            physic: {
                active: !!physicWorld,
                alive: this._physicAlive
            }
        };
        this.event.trigger('Update', this._info);
    };
    InspectorActor.prototype.syncVerticesInfo = function () {
        var totalVertices = 0;
        var totalTriangles = 0;
        this.getWorld().actors.forEach(function (actor) {
            actor.findComponentsByFilter(function (c) { return Sein.isPrimitiveComponent(c); }).forEach(function (component) {
                var materials = component.getMaterials();
                if (materials.length === 1) {
                    var geometry = component.geometry;
                    if (geometry.vertices) {
                        totalVertices += geometry.vertices.length / 3;
                        if (geometry.indices) {
                            totalTriangles += geometry.indices.length / 3;
                        }
                        else {
                            totalTriangles += geometry.vertices.length / 3 / 3;
                        }
                    }
                    return;
                }
                component.getMaterials().forEach(function (mat) {
                    var geometry = component.getGeometry(mat.name);
                    if (geometry.vertices) {
                        totalVertices += geometry.vertices.length / 3;
                        if (geometry.indices) {
                            totalTriangles += geometry.indices.length / 3;
                        }
                        else {
                            totalTriangles += geometry.vertices.length / 3 / 3;
                        }
                    }
                });
            });
        });
        this._info.render.totalVertices = totalVertices;
        this._info.render.totalTriangles = totalTriangles;
    };
    InspectorActor.prototype.getResource = function () {
        var info = {};
        var store = this._game.resource._store;
        Object.keys(store).forEach(function (name) {
            var item = store[name];
            var type = item.type;
            info[type] = info[type] || 0;
            info[type] += 1;
        });
        return info;
    };
    InspectorActor.prototype.onDestroy = function () {
        if (this._actor) {
            this._actor.removeFromParent();
            this._actor = null;
        }
        if (this._dom) {
            this._container.removeChild(this._dom);
            this._dom = null;
        }
    };
    InspectorActor.prototype.renderUI = function () {
        if (!this._dom) {
            this._dom = document.createElement('div');
            this._container.appendChild(this._dom);
        }
        index_1.default(this._dom, this);
    };
    InspectorActor = __decorate([
        Sein.SClass({ className: "InspectorActor" })
    ], InspectorActor);
    return InspectorActor;
}(Sein.InfoActor));
exports.default = InspectorActor;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : index.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:55:56 PM
 * @Description:
 */
var preact_1 = __webpack_require__(0);
var constant_1 = __webpack_require__(15);
var Framework_1 = __webpack_require__(16);
var Info_1 = __webpack_require__(69);
var Game_1 = __webpack_require__(71);
var Level_1 = __webpack_require__(73);
var Resource_1 = __webpack_require__(119);
var Event_1 = __webpack_require__(121);
var Player_1 = __webpack_require__(122);
var Render_1 = __webpack_require__(123);
var World_1 = __webpack_require__(125);
var components_1 = __webpack_require__(3);
__webpack_require__(127);
var Inspector = /** @class */ (function (_super) {
    __extends(Inspector, _super);
    function Inspector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            tabIndex: 1
        };
        _this._width = 0;
        _this.isChecked = false;
        _this.onTabChange = function (id) {
            _this.setState({ tabIndex: id });
        };
        _this.dataUpdate = function (value) {
            _this.isChecked = value;
        };
        _this.editComponent = function (component) {
        };
        return _this;
    }
    Inspector.prototype.componentDidMount = function () { };
    Inspector.prototype.componentWillUnmount = function () { };
    Inspector.prototype.getComponent = function () {
        var tabIndex = this.state.tabIndex;
        switch (tabIndex) {
            case 1:
                return preact_1.h(Info_1.default, { actor: this.props.actor });
            case 2:
                return preact_1.h(Game_1.default, { actor: this.props.actor });
            case 3:
                return preact_1.h(World_1.default, { actor: this.props.actor });
            case 4:
                return (preact_1.h(Level_1.default, { onTrigger: this.editComponent, actor: this.props.actor }));
            case 5:
                return preact_1.h(Resource_1.default, { actor: this.props.actor });
            case 6:
                return (preact_1.h(Event_1.default, { actor: this.props.actor, switchChecked: this.isChecked, dataChange: this.dataUpdate }));
            case 7:
                return preact_1.h(Player_1.default, { actor: this.props.actor });
            case 8:
                return preact_1.h(Render_1.default, { actor: this.props.actor });
            default:
                return null;
        }
    };
    Inspector.prototype.render = function () {
        return (preact_1.h("div", null,
            preact_1.h(Framework_1.default, { title: 'SeinJS Inspector' },
                preact_1.h(components_1.Tab, { data: constant_1.TabItem, currentId: this.state.tabIndex, onTabChange: this.onTabChange }),
                this.getComponent())));
    };
    return Inspector;
}(preact_1.Component));
function render(node, actor) {
    preact_1.render(preact_1.h(Inspector, { actor: actor }), node);
}
exports.default = render;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TabItem = [
    {
        id: 1,
        text: 'Info'
    },
    {
        id: 2,
        text: 'Game'
    },
    {
        id: 3,
        text: 'World'
    },
    {
        id: 4,
        text: 'Level'
    },
    {
        id: 5,
        text: 'Resource'
    },
    // {
    //   id: 6,
    //   text: 'Event'
    // },
    // {
    //   id: 7,
    //   text: 'Player'
    // },
    {
        id: 8,
        text: 'Render'
    }
];
exports.treeData = [
    {
        id: 1,
        text: 'Node1',
        type: 'type1',
        children: [
            {
                id: 2,
                text: 'Node2',
                type: 'type2',
                children: [
                    {
                        id: 5,
                        text: 'Node5',
                        type: 'camera'
                    }
                ]
            },
            {
                id: 3,
                text: 'Node3',
                type: 'type3',
                children: [
                    {
                        id: 7,
                        text: 'Node7',
                        type: 'type7',
                        children: [
                            {
                                id: 8,
                                text: 'Node8',
                                type: 'image'
                            }
                        ]
                    }
                ]
            },
            {
                id: 4,
                text: 'Node4'
            }
        ]
    },
    {
        id: 6,
        text: 'Node6',
        type: 'light'
    },
    {
        id: 9,
        text: 'Node9',
        type: 'component'
    },
    {
        id: 10,
        text: 'Node10',
        type: 'game'
    },
    {
        id: 11,
        text: 'Node11',
        type: 'actor'
    },
    {
        id: 12,
        text: 'Node12',
        type: 'world'
    },
    {
        id: 13,
        text: 'Node13',
        type: 'scenes'
    }
];


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var components_1 = __webpack_require__(3);
__webpack_require__(67);
var Framework = /** @class */ (function (_super) {
    __extends(Framework, _super);
    function Framework() {
        var _this = _super.call(this) || this;
        _this._width = 0;
        /**
         * resize 窗口
         *
         */
        _this.resize = function (distance) {
            var width = _this.state.width;
            // 重新设置宽度
            _this.container.style.width = "auto";
            _this.setState({
                width: _this._width + distance
            });
            _this._width = _this.state.width;
        };
        _this.close = function () {
            _this.setState({
                display: false
            });
        };
        _this.visibleChange = function () {
            var visible = _this.state.visible;
            _this.setState({
                visible: !visible
            });
        };
        _this.resizeEnd = function () {
            var width = _this.state.width;
            _this.container.style.setProperty('width', width + "px");
            _this.container.style.setProperty('--content-width', width + "px");
        };
        _this.onTabChange = function (id) {
            _this.setState({
                tabIndex: id
            });
        };
        _this.setState({
            display: true,
            visible: true,
            tabIndex: 1
        });
        return _this;
        // 设置初始的时间
    }
    Framework.prototype.componentDidMount = function () {
        // console.log("inspector mounted", this.container);
        this._width = this.container.clientWidth;
        this.container.style.setProperty('width', this._width + "px");
        this.container.style.setProperty('--content-width', this._width + "px");
    };
    Framework.prototype.componentWillUnmount = function () { };
    Framework.prototype.render = function () {
        var _this = this;
        var _a = this.props, mode = _a.mode, title = _a.title;
        var _b = this.state, width = _b.width, display = _b.display, visible = _b.visible;
        if (!display) {
            return null;
        }
        var conStyle = {
            width: width + "px"
        };
        var containerClassName = "sein-inspector-container " + (mode === 'left' ? 'explorer' : '') + " " + (visible ? '' : 'hide');
        return (preact_1.h("div", { ref: function (container) { return (_this.container = container); }, className: containerClassName },
            preact_1.h("div", { className: 'sein-inspector-content', style: conStyle },
                preact_1.h("div", { className: 'sein-inspector-title' }, title || 'Title'),
                this.props.children),
            preact_1.h(components_1.ToolsBar, { onResize: this.resize, onClose: this.close, onVisible: this.visibleChange, visible: visible, onResizeEnd: this.resizeEnd, mode: mode })));
    };
    return Framework;
}(preact_1.Component));
exports.default = Framework;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-group .sein-inspector-group-bar{font-size:14px;font-weight:bold;line-height:30px;background-color:#272727;background:linear-gradient(to right, #272727 0%, #272727 50%, #444);background-size:200% 100%;background-position:0 center;text-indent:1em;white-space:nowrap;border-bottom:1px solid #4d4d4d;transition:all 0.2s ease 0s;overflow:hidden;user-select:none;border-left:5px solid #272727;cursor:pointer}.sein-inspector-group .sein-inspector-group-bar i{width:30px;height:30px;float:right;background:url(https://gw.alicdn.com/tfs/TB1_x.Ecrr1gK0jSZFDXXb9yVXa-40-40.png) no-repeat center center/15px 15px;transition:all 0.3s ease 0s;opacity:0.6;transform:rotate(90deg)}.sein-inspector-group .sein-inspector-group-bar:hover{background-position:100% center}.sein-inspector-group .sein-inspector-group-bar.close i{transform:rotate(0);opacity:1}.sein-inspector-group .sein-inspector-group-content{overflow:hidden;border-bottom:1px solid #4d4d4d;transition:height 0.3s ease 0s}.sein-inspector-group .sein-inspector-group-content.close{display:none}.sein-inspector-group:hover .sein-inspector-group-bar{border-left:5px solid #555}.sein-inspector-group:hover .sein-inspector-component{border-left:5px solid #555}\n", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(22)
var ieee754 = __webpack_require__(23)
var isArray = __webpack_require__(24)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Game.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:55:56 PM
 * @Description:
 */
/**
 * tab bar
 */
var preact_1 = __webpack_require__(0);
__webpack_require__(26);
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch(props) {
        var _this = _super.call(this, props) || this;
        _this.switchChange = function () {
            var onCheckedChange = _this.props.onCheckedChange;
            var checked = _this.state.checked;
            _this.setState({
                checked: !checked
            }, function () {
                onCheckedChange(this.state.checked);
            });
        };
        _this.setState({
            checked: props.checked || false
        });
        return _this;
    }
    Switch.prototype.componentDidMount = function () {
        // console.log("switch did mount");
    };
    Switch.prototype.render = function () {
        // console.log("switch render");
        var label = this.props.label;
        var checked = this.state.checked;
        var switchClassName = checked ? 'switch-icon' : 'switch-icon unchecked';
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-switch-container' },
            preact_1.h("div", { className: 'sein-inspector-component-box' },
                preact_1.h("label", { className: 'sein-inspector-label', title: label || 'Label' }, label || 'Label'),
                preact_1.h("div", { className: switchClassName, onClick: this.switchChange },
                    preact_1.h("div", { className: 'box-inside' },
                        preact_1.h("span", { className: 'switch-text switch-text-on' }),
                        preact_1.h("span", { className: 'switch-text switch-text-off' }),
                        preact_1.h("i", { className: 'switch-circle' }))))));
    };
    return Switch;
}(preact_1.Component));
exports.default = Switch;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-switch-container .sein-inspector-component-box .sein-inspector-label{max-width:235px;margin-right:50px;display:block}.sein-inspector-switch-container .sein-inspector-component-box .switch-icon{user-select:none;cursor:pointer;border:1px solid rgba(0,0,0,0.9);width:40px;height:20px;line-height:20px;border-radius:20px;overflow:hidden;position:absolute;right:0;top:50%;transform:translateY(-50%);font-size:0;white-space:nowrap;transition:all 0.2s ease 0s;background-color:#39b260}.sein-inspector-switch-container .sein-inspector-component-box .switch-icon .switch-text{display:inline-block;width:100%;height:100%}.sein-inspector-switch-container .sein-inspector-component-box .switch-icon .switch-text-on{transition:all 0.2s ease-out 0s}.sein-inspector-switch-container .sein-inspector-component-box .switch-icon .switch-text-on:after{content:\"ON\";font-size:12px;float:left;height:100%;transform:scale(0.7);margin-left:3px}.sein-inspector-switch-container .sein-inspector-component-box .switch-icon .switch-text-off:after{content:\"OFF\";font-size:12px;float:right;height:100%;transform:scale(0.7);color:#858585}.sein-inspector-switch-container .sein-inspector-component-box .switch-icon .switch-circle{position:absolute;width:20px;height:20px;border-radius:100%;background:#ccc;left:50%;top:0;margin-left:-10px;transition:all 0.2s ease-out 0s;transform:translate(10px, 0) scale(0.85)}.sein-inspector-switch-container .sein-inspector-component-box .switch-icon:hover{border-color:#888}.sein-inspector-switch-container .sein-inspector-component-box .switch-icon.unchecked{background-color:#515151}.sein-inspector-switch-container .sein-inspector-component-box .switch-icon.unchecked .switch-text-on{margin-left:-100%}.sein-inspector-switch-container .sein-inspector-component-box .switch-icon.unchecked .switch-circle{background-color:#888;transform:translate(-10px, 0) scale(0.85)}\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Game.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:55:56 PM
 * @Description:
 */
/**
 * tab bar
 */
var preact_1 = __webpack_require__(0);
__webpack_require__(29);
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super.call(this) || this;
        _this.selectChange = function (event) {
            var onSelectChange = _this.props.onSelectChange;
            onSelectChange(event.target.value);
        };
        return _this;
    }
    Select.prototype.componentDidMount = function () { };
    Select.prototype.render = function () {
        var _a = this.props, label = _a.label, options = _a.options;
        label = label || "Label";
        return (preact_1.h("div", { className: "sein-inspector-component sein-inspector-select-container" },
            preact_1.h("div", { className: "sein-inspector-component-box" },
                preact_1.h("label", { className: "sein-inspector-label", title: label }, label),
                preact_1.h("select", { className: "sein-inspector-select", onChange: this.selectChange }, options.map(function (item) {
                    return (preact_1.h("option", { value: item.value, title: item.text, selected: item.selected }, item.text));
                })))));
    };
    return Select;
}(preact_1.Component));
exports.default = Select;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(30);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-select-container .sein-inspector-component-box{display:flex;align-items:center}.sein-inspector-select-container .sein-inspector-label{min-width:auto;flex:1}.sein-inspector-select-container .sein-inspector-select{display:block;max-width:80px}\n", ""]);

// exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Game.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:55:56 PM
 * @Description:
 */
/**
 * tab bar
 */
var preact_1 = __webpack_require__(0);
__webpack_require__(32);
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super.call(this) || this;
        _this.bottonClick = function () {
            var onButtonClick = _this.props.onButtonClick;
            onButtonClick && onButtonClick();
        };
        return _this;
    }
    Button.prototype.componentDidMount = function () { };
    Button.prototype.render = function (props, state) {
        var label = this.props.label;
        return (preact_1.h("div", { className: "sein-inspector-component sein-inspector-button-container" },
            preact_1.h("div", { className: "sein-inspector-component-box" },
                preact_1.h("div", { className: "sein-inspector-button", onClick: this.bottonClick, title: label || "Label" }, label || "Label"))));
    };
    return Button;
}(preact_1.Component));
exports.default = Button;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-button-container .sein-inspector-button{display:block;font-size:12px;text-align:center;border:1px solid #444;border-radius:3px;cursor:pointer;margin:0 20px;line-height:25px;transition:all 0.2s ease 0s;user-select:none;white-space:nowrap;overflow:hidden}.sein-inspector-button-container .sein-inspector-button:hover{border:1px solid #888}\n", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-infomation-container .sein-inspector-component-box{display:flex}.sein-inspector-infomation-container .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-infomation-container .sein-inspector-component-box .sein-inspector-infomation-value{font-size:12px;color:#bbb;padding-right:5px}.sein-inspector-infomation-container .sein-inspector-component-box .sein-inspector-infomation-editable{font-size:14px;color:#bbb}.sein-inspector-infomation-container .sein-inspector-component-box .sein-inspector-infomation-editable:before{content:'\\E627'}.sein-inspector-infomation-container .sein-inspector-component-box:hover .sein-inspector-infomation-editable{color:#fff}\n", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Game.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:55:56 PM
 * @Description:
 */
/**
 * tab bar
 */
var preact_1 = __webpack_require__(0);
__webpack_require__(37);
var Range = /** @class */ (function (_super) {
    __extends(Range, _super);
    function Range(props) {
        var _this = _super.call(this) || this;
        _this.rangeChange = function (event) {
            var onRangeChange = _this.props.onRangeChange;
            _this.setState({
                curValue: event.target.value
            });
            if (onRangeChange) {
                onRangeChange(event.target.value);
            }
        };
        _this.rangeInput = function (event) {
            var onRangeInput = _this.props.onRangeInput;
            _this.setState({
                curValue: event.target.value
            });
            if (onRangeInput) {
                onRangeInput(event.target.value);
            }
        };
        _this.setState({
            curValue: props.value
        });
        return _this;
    }
    Range.prototype.componentDidMount = function () { };
    Range.prototype.render = function (props, state) {
        // console.log("infomation render");
        var _a = this.props, label = _a.label, min = _a.min, max = _a.max, step = _a.step;
        var curValue = this.state.curValue;
        var mintext = min.toString(), maxtext = max.toString();
        if (min === Math.PI) {
            mintext = 'PI';
        }
        else if (min === -Math.PI) {
            mintext = '-PI';
        }
        if (max === Math.PI) {
            maxtext = 'PI';
        }
        else if (max === -Math.PI) {
            maxtext = '-PI';
        }
        var width = {
            width: max.toString().length * 12 + "px"
        };
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-range-container' },
            preact_1.h("div", { className: 'sein-inspector-component-box' },
                preact_1.h("label", { className: 'sein-inspector-label', title: label || 'Label' }, label || 'Label'),
                preact_1.h("div", { className: 'sein-inspector-range' },
                    preact_1.h("span", { className: 'sein-inspector-range-min' }, mintext),
                    preact_1.h("input", { onInput: this.rangeInput, onChange: this.rangeChange, className: 'sein-inspector-range-input', type: 'range', value: curValue, min: min, max: max, step: step }),
                    preact_1.h("span", { className: 'sein-inspector-range-max' }, maxtext)),
                preact_1.h("div", { 
                    // style={width}
                    className: 'sein-inspector-range-value', title: curValue.toString() }, curValue))));
    };
    return Range;
}(preact_1.Component));
exports.default = Range;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-range-container input[type='range']{outline:none;max-width:70px}.sein-inspector-range-container .sein-inspector-component-box{display:flex}.sein-inspector-range-container .sein-inspector-component-box .sein-inspector-label{flex:1;min-width:60px}.sein-inspector-range-container .sein-inspector-component-box .sein-inspector-range{flex:1;display:flex}.sein-inspector-range-container .sein-inspector-component-box .sein-inspector-range .sein-inspector-range-min{text-align:right}.sein-inspector-range-container .sein-inspector-component-box .sein-inspector-range .sein-inspector-range-max,.sein-inspector-range-container .sein-inspector-component-box .sein-inspector-range .sein-inspector-range-min{color:#777;font-size:12px;margin:0 5px;flex:1}.sein-inspector-range-container .sein-inspector-range-value{font-size:12px;color:#bbb;text-align:right;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:40px}\n", ""]);

// exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Game.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:55:56 PM
 * @Description:
 */
/**
 * tab bar
 */
var preact_1 = __webpack_require__(0);
__webpack_require__(40);
var ColorPicker = /** @class */ (function (_super) {
    __extends(ColorPicker, _super);
    function ColorPicker(porps) {
        var _this = _super.call(this) || this;
        _this.colorInput = function (event) {
            var onColorInput = _this.props.onColorInput;
            _this.setState({
                curColor: event.target.value
            });
            if (onColorInput) {
                onColorInput(_this.state.curColor);
            }
        };
        _this.colorChange = function (event) {
            var onColorChange = _this.props.onColorChange;
            _this.setState({
                curColor: event.target.value
            });
            if (onColorChange) {
                onColorChange(_this.state.curColor);
            }
        };
        _this.setState({ curColor: porps.value || "#000000" });
        return _this;
    }
    ColorPicker.prototype.componentDidMount = function () { };
    ColorPicker.prototype.render = function () {
        // console.log("ColorPicker render");
        var label = this.props.label;
        var curColor = this.state.curColor;
        return (preact_1.h("div", { className: "sein-inspector-component sein-inspector-color-container" },
            preact_1.h("div", { className: "sein-inspector-component-box" },
                preact_1.h("label", { className: "sein-inspector-label", title: label || "Label" }, label || "Label"),
                preact_1.h("input", { className: "sein-inspector-color", type: "color", value: curColor, onInput: this.colorInput, onChange: this.colorChange }),
                preact_1.h("div", { className: "sein-inspector-color-value" }, curColor))));
    };
    return ColorPicker;
}(preact_1.Component));
exports.default = ColorPicker;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-color-container .sein-inspector-component-box{display:flex;align-items:center}.sein-inspector-color-container .sein-inspector-label{flex:1;padding-right:20px}.sein-inspector-color-container .sein-inspector-color{border:none;outline:none;padding:0;border:1px solid #444;width:15px;height:15px;cursor:pointer;transition:all 0.2s ease 0s}.sein-inspector-color-container .sein-inspector-color::-webkit-color-swatch-wrapper{padding:0;border:none}.sein-inspector-color-container .sein-inspector-color::-webkit-color-swatch{border:none}.sein-inspector-color-container .sein-inspector-color:hover{border-color:#888;box-shadow:0 0 5px 1px rgba(255,255,255,0.3)}.sein-inspector-color-container .sein-inspector-color-value{font-size:12px;color:#bbb;min-width:55px;text-align:right}\n", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * resize bar
 */
var preact_1 = __webpack_require__(0);
__webpack_require__(43);
var ToolsBar = /** @class */ (function (_super) {
    __extends(ToolsBar, _super);
    function ToolsBar() {
        var _this = _super.call(this) || this;
        _this._positionx = 0;
        _this.dragging = false;
        return _this;
    }
    ToolsBar.prototype.componentDidMount = function () {
        this.bindEvent();
    };
    ToolsBar.prototype.bindEvent = function () {
        var _this = this;
        var mode = this.props.mode;
        var dir = mode === "left" ? -1 : 1;
        // resize事件
        this.resizeBar.addEventListener("mousedown", function (event) {
            if (!_this.dragging) {
                var clientX = event.clientX;
                _this.dragging = true;
                _this._positionx = clientX;
                _this.resizeBar.classList.add("active");
            }
        });
        document.body.addEventListener("mousemove", function (event) {
            if (_this.dragging) {
                _this.resize((_this._positionx - event.clientX) * dir);
                _this._positionx = event.clientX;
            }
        });
        document.body.addEventListener("mouseup", function () {
            if (_this.dragging) {
                var onResizeEnd = _this.props.onResizeEnd;
                _this.dragging = false;
                _this._positionx = 0;
                _this.resizeBar.classList.remove("active");
                onResizeEnd();
            }
        });
        // 关闭事件
        this.closeIcon.addEventListener("click", function () {
            var _a = _this.props, onVisible = _a.onVisible, visible = _a.visible;
            onVisible();
            _this.hideIcon.classList.toggle("show");
        });
        // 隐藏按钮点击
        this.hideIcon.addEventListener("click", function () {
            var _a = _this.props, onVisible = _a.onVisible, visible = _a.visible;
            onVisible();
            _this.hideIcon.classList.toggle("show");
        });
    };
    ToolsBar.prototype.componentWillUnmount = function () { };
    ToolsBar.prototype.resize = function (distance) {
        var onResize = this.props.onResize;
        onResize(distance);
    };
    ToolsBar.prototype.render = function () {
        var _this = this;
        var mode = this.props.mode;
        var toolsClassName = "sein-inspector-tools " + mode;
        return (preact_1.h("div", { className: toolsClassName },
            preact_1.h("span", { ref: function (close) {
                    _this.closeIcon = close;
                }, className: "i-inspector-close iconfont" }),
            preact_1.h("span", { ref: function (hide) {
                    _this.hideIcon = hide;
                }, className: "i-inpspector-hide" },
                preact_1.h("div", { class: "u-box-inside" },
                    preact_1.h("i", null),
                    preact_1.h("em", { className: "iconfont" }))),
            preact_1.h("div", { ref: function (resizeBar) { return (_this.resizeBar = resizeBar); }, className: "sein-inspector-resize-bar" })));
    };
    return ToolsBar;
}(preact_1.Component));
exports.default = ToolsBar;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-resize-bar{position:absolute;left:-1px;width:3px;height:100%;user-select:none;background:linear-gradient(to right, transparent 0%, transparent 32%, rgba(255,255,255,0.7) 33%, rgba(255,255,255,0.7) 65%, transparent 66%, transparent);cursor:col-resize;transition:all 0.2s ease 0s}.sein-inspector-resize-bar.active,.sein-inspector-resize-bar:hover{box-shadow:0 -1px 4px 2px rgba(255,255,255,0.45)}.i-inspector-close{width:20px;height:20px;position:absolute;top:3px;right:3px;cursor:pointer}.i-inspector-close:before{content:\"\\E641\";font-size:20px;display:block;width:100%;height:100%;text-align:center;line-height:20px}.i-inspector-close:hover{opacity:0.7}.sein-inspector-tools .i-inpspector-hide{width:20px;height:80px;position:absolute;left:0;top:50%;transform:translate(0, -50%);overflow:hidden;cursor:pointer;transition:all 0.5s ease 0s;opacity:0.3}.sein-inspector-tools .i-inpspector-hide em{position:relative;z-index:1;display:block;height:100%;transition:transform 0.5s ease 0s}.sein-inspector-tools .i-inpspector-hide em:before{content:\"\\E64E\";display:block;width:100%;height:100%;text-align:center;line-height:80px;color:#fff}.sein-inspector-tools .i-inpspector-hide i{display:block;width:40px;height:80px;border-radius:0 100% 100% 0 / 0 50% 50% 0;background-color:rgba(255,255,255,0.25);transform:translate(-50%, 0);position:absolute;top:0;left:0;transition:all 0.5s ease 0s}.sein-inspector-tools .i-inpspector-hide.show{left:-20px;opacity:0.5}.sein-inspector-tools .i-inpspector-hide.show em{transform:rotate(180deg)}.sein-inspector-tools .i-inpspector-hide.show i{transform:translate(0, 0);background-color:rgba(0,0,0,0.9);border-radius:100% 0 0 100% / 50% 0 0 50%}.sein-inspector-tools .i-inpspector-hide.show:hover{opacity:1}.sein-inspector-tools .i-inpspector-hide.show:hover i{background-color:rgba(0,0,0,0.6);border-radius:100% 0 0 100% / 70% 0 0 70%}.sein-inspector-tools .i-inpspector-hide:hover{opacity:1}.sein-inspector-tools .i-inpspector-hide:hover i{background-color:rgba(255,255,255,0.5);border-radius:0 100% 100% 0 / 0 70% 70% 0}.sein-inspector-tools.left .sein-inspector-resize-bar{left:auto;right:-1px}.sein-inspector-tools.left .i-inpspector-hide{left:auto;right:0}.sein-inspector-tools.left .i-inpspector-hide i{transform:translate(0, 0);background-color:rgba(255,255,255,0.25);border-radius:100% 0 0 100% / 50% 0 0 50%}.sein-inspector-tools.left .i-inpspector-hide em{transform:rotate(180deg)}.sein-inspector-tools.left .i-inpspector-hide.show{left:auto;right:-20px;opacity:0.5}.sein-inspector-tools.left .i-inpspector-hide.show i{border-radius:0 100% 100% 0 / 0 50% 50% 0;background-color:rgba(0,0,0,0.9);transform:translate(-50%, 0)}.sein-inspector-tools.left .i-inpspector-hide.show em{transform:rotate(0)}.sein-inspector-tools.left .i-inpspector-hide.show:hover{opacity:1}.sein-inspector-tools.left .i-inpspector-hide.show:hover i{background-color:rgba(0,0,0,0.6);border-radius:0 100% 100% 0 / 0 70% 70% 0}.sein-inspector-tools.left .i-inpspector-hide:hover{opacity:1}.sein-inspector-tools.left .i-inpspector-hide:hover i{background-color:rgba(255,255,255,0.5);border-radius:100% 0 0 100% / 70% 0 0 70%}.sein-inspector-tools.left .i-inspector-close{right:auto;left:3px}\n", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * tab bar
 */
var preact_1 = __webpack_require__(0);
__webpack_require__(46);
var Tab = /** @class */ (function (_super) {
    __extends(Tab, _super);
    function Tab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentId = 1;
        _this.showIcon = true;
        _this.state = {};
        _this.changeTab = function (id) {
            if (_this.currentId !== id) {
                var onTabChange = _this.props.onTabChange;
                onTabChange(id);
                _this.currentId = id;
            }
        };
        return _this;
    }
    Tab.prototype.componentWillMount = function () {
        this.currentId = this.props.currentId || 1;
        this.props.showIcon !== undefined && (this.showIcon = this.props.showIcon);
    };
    Tab.prototype.debounce = function (method, wait) {
        if (wait === void 0) { wait = 0; }
        var timer = 0;
        return function () {
            var context = this;
            var args = arguments;
            window.clearTimeout(timer);
            timer = window.setTimeout(function () {
                method.apply(context, args);
            }, wait);
        };
    };
    Tab.prototype.throttle = function (method, wait) {
        if (wait === void 0) { wait = 0; }
        var _lastTimer = 0;
        return function () {
            var _nowTimer = Date.now();
            var args = arguments;
            var context = this;
            if (_nowTimer - _lastTimer > wait || !_lastTimer) {
                method.apply(context, args);
                _lastTimer = _nowTimer;
            }
        };
    };
    Tab.prototype.componentDidMount = function () {
        var _this = this;
        this.container.addEventListener('wheel', this.throttle(function (event) {
            event.stopPropagation();
            if (event.deltaY > 0) {
                _this.container.scrollLeft += 10;
            }
            else {
                _this.container.scrollLeft -= 10;
            }
        }, 45), {
            passive: false
        });
        var onTabChange = this.props.onTabChange;
        onTabChange(this.currentId);
    };
    Tab.prototype.render = function () {
        var _this = this;
        var width = { width: 100 / this.props.data.length + "%" };
        return (preact_1.h("div", null,
            preact_1.h("ul", { ref: function (container) { return (_this.container = container); }, className: 'sein-inspector-tab u-scrollbar' }, this.props.data.map(function (item) {
                var id = item.id, hidden = item.hidden;
                return !hidden ? (preact_1.h("li", { className: 'sein-inspector-tab-item' +
                        (id === _this.currentId ? ' current' : ''), 
                    // style={width}
                    key: item.id, onClick: function () {
                        _this.changeTab(item.id);
                    } },
                    _this.showIcon && preact_1.h("i", { className: "icon" + id }),
                    item.text)) : null;
            }))));
    };
    return Tab;
}(preact_1.Component));
exports.default = Tab;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-tab{list-style-type:none;display:flex;justify-content:center;padding:0;margin:0;border-top:1px solid #4d4d4d;user-select:none;font-size:0;white-space:nowrap;overflow:auto}.sein-inspector-tab .sein-inspector-tab-item{font-size:12px;color:#fff;flex:auto;margin:0;text-align:center;border-left:1px solid #4d4d4d;border-bottom:1px solid #4d4d4d;padding:1px 6px 3px;min-width:40px;display:inline-block;box-sizing:border-box;cursor:pointer;width:min-content;overflow:hidden;transition:all 0.1s ease 0s}.sein-inspector-tab .sein-inspector-tab-item i{display:block;width:20px;height:20px;margin:3px auto 0;background:url(https://gw.alicdn.com/tfs/TB1QIE5cED1gK0jSZFGXXbd3FXa-50-50.png) center center no-repeat/100% 100%}.sein-inspector-tab .sein-inspector-tab-item:first-child{border-left:none}.sein-inspector-tab .sein-inspector-tab-item:hover,.sein-inspector-tab .sein-inspector-tab-item.current{background-color:#333;border-bottom:1px solid #aaaaaa}\n", ""]);

// exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(49);
var TreeNode_1 = __webpack_require__(51);
var Tree = /** @class */ (function (_super) {
    __extends(Tree, _super);
    function Tree() {
        var _this = _super.call(this) || this;
        _this.onLightClick = function (isDisable) {
            return new Promise(function (resolve, reject) {
                // do somethring
                setTimeout(function () {
                    resolve();
                }, 1000);
            });
        };
        _this.onTreeNodeClick = function (node, open, hasChild) {
            if (hasChild) {
                if (open) {
                    node.nextElementSibling.classList.add("open");
                }
                else {
                    node.nextElementSibling.classList.remove("open");
                }
            }
            else {
                _this._currentTreeNode && _this._currentTreeNode.classList.remove("select");
                node.classList.add("select");
                _this._currentTreeNode = node;
            }
            // console.log(node.nextSibling.classList, open);
        };
        return _this;
    }
    Tree.prototype.componentDidMount = function () { };
    Tree.prototype.getTreeNodeByType = function (deep, treedata) {
        switch (treedata.type) {
            case "light":
                return (preact_1.h(TreeNode_1.LightTreeNode, { key: treedata.id, deep: deep, treeNodeData: treedata, onTreeNodeClick: this.onTreeNodeClick, onLightClick: this.onLightClick }));
            default:
                return (preact_1.h(TreeNode_1.TreeNode, { key: treedata.id, deep: deep, treeNodeData: treedata, onTreeNodeClick: this.onTreeNodeClick }));
        }
    };
    Tree.prototype.getTree = function (treeData, deep) {
        var _this = this;
        var rs = [];
        if (deep !== undefined) {
            deep++;
        }
        else {
            deep = 0;
        }
        treeData.map(function (item) {
            rs.push(_this.getTreeNodeByType(deep, item));
            if (item.children && item.children.length) {
                rs.push(preact_1.h("div", { className: "sein-inspector-children-container" }, _this.getTree(item.children, deep)));
            }
        });
        return rs;
    };
    Tree.prototype.render = function () {
        var data = this.props.data;
        return preact_1.h("div", { className: "sein-inspector-tree" }, this.getTree(data));
    };
    return Tree;
}(preact_1.Component));
exports.default = Tree;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-tree{padding-left:10px;padding-right:10px;border-top:1px solid #4d4d4d;padding-top:10px}.sein-inspector-tree .sein-inspector-children-container{height:0;overflow:hidden}.sein-inspector-tree .sein-inspector-children-container.open{height:auto}\n", ""]);

// exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(52);
var TreeNode_1 = __webpack_require__(9);
exports.TreeNode = TreeNode_1.default;
var LightTreeNode_1 = __webpack_require__(54);
exports.LightTreeNode = LightTreeNode_1.default;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-tree-node{height:20px;line-height:20px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;cursor:pointer;display:flex;transition:all 0.1s ease 0s;min-width:200px;font-family:\"iconfont\" !important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.sein-inspector-tree-node .tree-node-text{font-size:12px;color:#ccc;transition:all 0.1s ease 0s;flex:1;min-width:100px}.sein-inspector-tree-node .tree-node-func{font-size:0}.sein-inspector-tree-node .tree-node-func i{display:inline-block;width:20px;height:20px;transition:all 0.2s ease 0s;color:#888}.sein-inspector-tree-node .tree-node-func i.active{color:#fff}.sein-inspector-tree-node:before{content:\"\\E64E\";display:inline-block;width:20px;height:20px;transition:all 0.3s ease 0s;opacity:0.6;font-size:12px;font-size:10px;line-height:20px;text-align:center}.sein-inspector-tree-node:hover{background-color:#333}.sein-inspector-tree-node:hover:before{transition:all 0.1s ease 0s;opacity:1}.sein-inspector-tree-node:hover .tree-node-text{color:#fff}.sein-inspector-tree-node:hover .tree-node-func i:hover{color:#ccc}.sein-inspector-tree-node:hover .tree-node-func i.active{color:#fff}.sein-inspector-tree-node.open:before{opacity:1;transform:rotate(90deg)}.sein-inspector-tree-node.select{background-color:#333}.sein-inspector-tree-node.select .tree-node-text{color:#fff;font-weight:bold}.sein-inspector-tree-node.no-child:before{content:\" \"}.sein-inspector-tree-node.deep1{padding-left:1em}.sein-inspector-tree-node.deep2{padding-left:2em}.sein-inspector-tree-node.deep3{padding-left:3em}.sein-inspector-tree-node.deep4{padding-left:4em}.sein-inspector-tree-node.deep5{padding-left:5em}.sein-inspector-tree-node.deep6{padding-left:6em}.sein-inspector-tree-node.deep7{padding-left:7em}.sein-inspector-tree-node.deep8{padding-left:8em}.tree-node-func i.f-visiable:before{content:\"\\E6B0\"}.tree-node-func i.f-visiable.disable:before{content:\"\\E901\"}.tree-node-icon:before{content:\"\\E614\";display:block;width:20px;height:20px;font-size:12px;text-align:center}.tree-node-icon.light:before{content:\"\\E604\"}.tree-node-icon.image:before{content:\"\\E7ED\"}.tree-node-icon.default:before{content:\"\\E793\"}.tree-node-icon.camera:before{content:\"\\E63E\"}.tree-node-icon.component:before{content:\"\\E602\"}.tree-node-icon.game:before{content:\"\\E67E\"}.tree-node-icon.actor:before{content:\"\\E64D\"}.tree-node-icon.world:before{content:\"\\E61D\"}.tree-node-icon.scenes:before{content:\"\\E603\"}\n", ""]);

// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var TreeNode_1 = __webpack_require__(9);
var LightTreeNode = /** @class */ (function (_super) {
    __extends(LightTreeNode, _super);
    function LightTreeNode() {
        var _this = _super.call(this) || this;
        _this.eyeClick = function () {
            var isDisable = _this.state.isDisable;
            var onLightClick = _this.props.onLightClick;
            onLightClick(!isDisable).then(function () {
                _this.setState({
                    isDisable: !isDisable
                });
            });
        };
        _this.setState({
            isDisable: false
        });
        return _this;
    }
    LightTreeNode.prototype.componentDidMount = function () { };
    LightTreeNode.prototype.render = function () {
        var _a = this.props, deep = _a.deep, treeNodeData = _a.treeNodeData, onTreeNodeClick = _a.onTreeNodeClick;
        var isDisable = this.state.isDisable;
        return (preact_1.h(TreeNode_1.default, { deep: deep, treeNodeData: treeNodeData, onTreeNodeClick: onTreeNodeClick },
            preact_1.h("div", { className: "tree-node-func" },
                preact_1.h("i", { onClick: this.eyeClick, className: "u-function f-visiable iconfont" + (isDisable ? " disable" : "") }))));
    };
    return LightTreeNode;
}(preact_1.Component));
exports.default = LightTreeNode;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: 预览组件
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-02 12:01:34
 * @LastEditTime: 2019-10-30 10:24:13
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(56);
var Preview = /** @class */ (function (_super) {
    __extends(Preview, _super);
    function Preview() {
        var _this = _super.call(this) || this;
        _this.close = function () { };
        _this.setState({
            canEdit: true
        });
        return _this;
    }
    Preview.prototype.componentDidMount = function () { };
    Preview.prototype.getPreviewBox = function () {
        var _a = this.props, name = _a.name, url = _a.url;
        return (preact_1.h("div", { className: 'sein-inspector-preview-box' },
            preact_1.h("img", { src: url, alt: name }),
            preact_1.h("div", { className: 'sein-inspector-preview-buttons' },
                preact_1.h("input", { type: 'file', name: name, id: name }))));
    };
    Preview.prototype.render = function () {
        var canEdit = this.state.canEdit;
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-preview-container' },
            preact_1.h("div", { className: 'sein-inspector-preview-content' }, canEdit && this.getPreviewBox())));
    };
    return Preview;
}(preact_1.Component));
exports.default = Preview;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-component.sein-inspector-preview-container{height:auto;line-height:20px}.sein-inspector-container .sein-inspector-component.sein-inspector-preview-container .sein-inspector-component-box{display:flex;user-select:none}.sein-inspector-container .sein-inspector-component.sein-inspector-preview-container .sein-inspector-component-box .sein-inspector-preview-edit{color:#aaa;cursor:pointer;padding-left:5px}.sein-inspector-container .sein-inspector-component.sein-inspector-preview-container .sein-inspector-component-box .sein-inspector-label{flex:1;margin-left:5px;border-left:1px solid rgba(255,255,255,0.25);padding-left:5px}.sein-inspector-container .sein-inspector-component.sein-inspector-preview-container .sein-inspector-component-box .sein-inspector-preview-value{font-size:12px;color:#bbb;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right}.sein-inspector-container .sein-inspector-component.sein-inspector-preview-container .sein-inspector-preview-box{padding-top:5px;font-size:0;user-select:none}.sein-inspector-container .sein-inspector-component.sein-inspector-preview-container .sein-inspector-preview-box img{display:block;max-width:100%;margin:0 auto;max-height:var(--content-width)}.sein-inspector-container .sein-inspector-component.sein-inspector-preview-container .sein-inspector-preview-box .sein-inspector-preview-buttons{display:flex;flex-direction:row;margin-top:5px;border-right:1px solid rgba(255,255,255,0.25)}.sein-inspector-container .sein-inspector-component.sein-inspector-preview-container .sein-inspector-preview-box .sein-inspector-preview-buttons span{font-size:14px;color:#fff;flex:auto;text-align:center;padding:5px;cursor:pointer;border:1px solid rgba(255,255,255,0.25);border-right:none;color:#aaa}.sein-inspector-container .sein-inspector-component.sein-inspector-preview-container .sein-inspector-preview-box .sein-inspector-preview-buttons span:hover{color:#fff}.sein-inspector-container .sein-inspector-component.sein-inspector-preview-container:hover .sein-inspector-component-box .sein-inspector-label{border-left:1px solid rgba(255,255,255,0.45)}.sein-inspector-container .sein-inspector-component.sein-inspector-preview-container:hover .sein-inspector-component-box .sein-inspector-preview-edit{color:#ccc}.sein-inspector-container .sein-inspector-component.sein-inspector-preview-container:hover .sein-inspector-component-box .sein-inspector-preview-edit:hover{color:#fff}\n", ""]);

// exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: List.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-03 16:51:23
 * @LastEditTime: 2019-10-22 16:12:10
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(59);
var Infomation = /** @class */ (function (_super) {
    __extends(Infomation, _super);
    function Infomation() {
        var _this = _super.call(this) || this;
        _this.onClick = function () {
            _this.setState({
                isClose: !_this.state.isClose
            });
        };
        _this.setState({
            isClose: true
        });
        return _this;
    }
    Infomation.prototype.componentDidMount = function () {
        var close = this.props.close;
        var isClose = close;
        if (isClose === undefined) {
            isClose = true;
        }
        this.setState({
            label: this.props.label,
            isClose: isClose
        });
    };
    Infomation.prototype.currentIcon = function (isCurrent) {
        var className = 'iconfont sein-inspector-preview-icon';
        if (isCurrent !== undefined) {
            className += isCurrent ? ' current' : '';
        }
        return preact_1.h("i", { class: className });
    };
    Infomation.prototype.getFromArray = function () {
        var _this = this;
        var _a = this.props, list = _a.list, onSelect = _a.onSelect;
        var rs = [];
        list.map(function (item) {
            var name = item.name, value = item.value, current = item.current;
            rs.push(preact_1.h("li", { onClick: onSelect ? function () { return onSelect(item); } : function () { } },
                preact_1.h("label", { className: 'sein-inspector-label', title: name || 'Label' }, name),
                value && (preact_1.h("div", { className: 'sein-inspector-preview-value', title: value }, value)),
                _this.currentIcon(current)));
        });
        return rs;
    };
    Infomation.prototype.getFromObject = function () {
        var rs = [];
        var _a = this.props, list = _a.list, onSelect = _a.onSelect;
        var _loop_1 = function (key) {
            var element = list[key];
            rs.push(preact_1.h("li", { onClick: onSelect ? function () { return onSelect({ name: key, value: element }); } : function () { } },
                preact_1.h("label", { className: 'sein-inspector-label', title: key || 'Label' }, key),
                preact_1.h("div", { className: 'sein-inspector-preview-value', title: element }, element)));
        };
        for (var key in list) {
            _loop_1(key);
        }
        return rs;
    };
    Infomation.prototype.getList = function () {
        var list = this.props.list;
        if (!list) {
            return null;
        }
        return (preact_1.h("ul", { className: 'sein-inspector-list-detail' }, list.length ? this.getFromArray() : this.getFromObject()));
    };
    Infomation.prototype.render = function () {
        var isClose = this.state.isClose;
        var label = this.props.label;
        var iconClassName = "iconfont sein-inspector-list-icon" + (isClose ? ' close' : ' ');
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-list-container' },
            preact_1.h("div", { className: 'sein-inspector-list-content' },
                preact_1.h("div", { className: 'sein-inspector-component-box', onClick: this.onClick },
                    preact_1.h("label", { className: 'sein-inspector-label', title: label || 'Label' }, label || 'Label'),
                    preact_1.h("i", { className: iconClassName })),
                !isClose && this.getList())));
    };
    return Infomation;
}(preact_1.Component));
exports.default = Infomation;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-component.sein-inspector-list-container{height:auto;line-height:20px}.sein-inspector-container .sein-inspector-component.sein-inspector-list-container .sein-inspector-component-box{display:flex;cursor:pointer}.sein-inspector-container .sein-inspector-component.sein-inspector-list-container .sein-inspector-component-box .sein-inspector-label{flex:1;cursor:pointer}.sein-inspector-container .sein-inspector-component.sein-inspector-list-container .sein-inspector-component-box .sein-inspector-list-icon{color:#aaaaaa}.sein-inspector-container .sein-inspector-component.sein-inspector-list-container .sein-inspector-component-box .sein-inspector-list-icon:before{font-size:12px;content:'\\E615'}.sein-inspector-container .sein-inspector-component.sein-inspector-list-container .sein-inspector-component-box .sein-inspector-list-icon.close:before{font-size:12px;content:'\\E613'}.sein-inspector-container .sein-inspector-component.sein-inspector-list-container .sein-inspector-list-detail{list-style-type:none;padding:0;margin:0;border-top:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-component.sein-inspector-list-container .sein-inspector-list-detail li{display:flex;padding-top:4px}.sein-inspector-container .sein-inspector-component.sein-inspector-list-container .sein-inspector-list-detail li:hover .sein-inspector-label{border-color:rgba(255,255,255,0.55)}.sein-inspector-container .sein-inspector-component.sein-inspector-list-container .sein-inspector-list-detail .sein-inspector-label{flex:1;margin-left:5px;border-left:1px solid rgba(255,255,255,0.25);padding-left:5px;font-size:12px;overflow:hidden;white-space:nowrap;word-break:break-all;text-overflow:ellipsis}.sein-inspector-container .sein-inspector-component.sein-inspector-list-container .sein-inspector-list-detail .sein-inspector-preview-value{font-size:12px;color:#bbb;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:right;padding-right:5px}.sein-inspector-container .sein-inspector-component.sein-inspector-list-container .sein-inspector-list-detail .sein-inspector-preview-icon{color:#aaaaaa;display:inline-block;width:12px}.sein-inspector-container .sein-inspector-component.sein-inspector-list-container .sein-inspector-list-detail .sein-inspector-preview-icon.current:before{font-size:12px;content:'\\E605'}\n", ""]);

// exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: List.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-03 16:51:23
 * @LastEditTime: 2019-09-09 17:24:47
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(62);
var Folder = /** @class */ (function (_super) {
    __extends(Folder, _super);
    function Folder() {
        var _this = _super.call(this) || this;
        _this.onClick = function () {
            _this.setState({
                isClose: !_this.state.isClose
            });
        };
        _this.setState({
            isClose: true
        });
        return _this;
    }
    Folder.prototype.componentDidMount = function () {
        var close = this.props.close;
        if (close === undefined) {
            close = true;
        }
        this.setState({
            isClose: !!close
        });
    };
    Folder.prototype.render = function () {
        var isClose = this.state.isClose;
        var _a = this.props, label = _a.label, value = _a.value, onTrigger = _a.onTrigger;
        var iconClassName = "iconfont sein-inspector-folder-icon" + (isClose ? '' : ' close');
        var detailClassName = "sein-inspector-folder-detail" + (isClose ? ' close' : '');
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-folder-container' },
            preact_1.h("div", { className: 'sein-inspector-folder-content' },
                preact_1.h("div", { className: 'sein-inspector-component-box', onClick: this.onClick },
                    preact_1.h("label", { className: 'sein-inspector-label', title: label || 'Label', onClick: onTrigger && (function () { return onTrigger(); }) }, label || 'Label'),
                    value && (preact_1.h("div", { class: 'sein-inspector-folder-value', title: value }, value)),
                    preact_1.h("i", { className: iconClassName }))),
            this.props.children && (preact_1.h("div", { className: detailClassName }, this.props.children))));
    };
    return Folder;
}(preact_1.Component));
exports.default = Folder;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-component.sein-inspector-folder-container{height:auto;padding-right:0}.sein-inspector-container .sein-inspector-component.sein-inspector-folder-container .sein-inspector-component-box{display:flex;cursor:pointer}.sein-inspector-container .sein-inspector-component.sein-inspector-folder-container .sein-inspector-component-box .sein-inspector-label{flex:1;cursor:pointer}.sein-inspector-container .sein-inspector-component.sein-inspector-folder-container .sein-inspector-component-box .sein-inspector-folder-value{font-size:12px;color:#bbb;padding-right:5px}.sein-inspector-container .sein-inspector-component.sein-inspector-folder-container .sein-inspector-component-box .sein-inspector-folder-icon{color:#aaaaaa;font-size:12px;padding-right:5px}.sein-inspector-container .sein-inspector-component.sein-inspector-folder-container .sein-inspector-component-box .sein-inspector-folder-icon:before{font-size:12px;content:'\\E613'}.sein-inspector-container .sein-inspector-component.sein-inspector-folder-container .sein-inspector-component-box .sein-inspector-folder-icon.close:before{font-size:12px;content:'\\E615'}.sein-inspector-container .sein-inspector-component.sein-inspector-folder-container .sein-inspector-folder-detail{margin-top:5px;padding-left:5px}.sein-inspector-container .sein-inspector-component.sein-inspector-folder-container .sein-inspector-folder-detail.close{display:none}.sein-inspector-container .sein-inspector-component.sein-inspector-folder-container .sein-inspector-folder-detail .sein-inspector-component{border-left-width:1px;border-bottom-width:0}\n", ""]);

// exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : index.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 10/15/2019, 3:38:55 PM
 * @Description:
 */
var preact_1 = __webpack_require__(0);
var Group_1 = __webpack_require__(7);
__webpack_require__(65);
var WorldDetails = /** @class */ (function (_super) {
    __extends(WorldDetails, _super);
    function WorldDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorldDetails.prototype.render = function () {
        return (preact_1.h("div", { className: 'sein-inspector-with-details  u-scrollbar' },
            preact_1.h("div", { className: 'sein-inspector-content-box u-scrollbar sein-inspector-with-main' }, this.props.main),
            preact_1.h("div", { className: 'sein-inspector-content-box u-scrollbar sein-inspector-with-bottom' }, this.props.details && (preact_1.h(Group_1.default, { name: 'Details', isClose: false }, this.props.details)))));
    };
    return WorldDetails;
}(preact_1.Component));
exports.default = WorldDetails;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-with-details{height:calc(100vh - 72px)}.sein-inspector-container .sein-inspector-with-details .sein-inspector-with-main{max-height:50%}.sein-inspector-container .sein-inspector-with-details .sein-inspector-with-main .sein-inspector-group-bar{position:sticky;z-index:1;top:0}.sein-inspector-container .sein-inspector-with-details .sein-inspector-with-bottom{max-height:50%}.sein-inspector-container .sein-inspector-with-details .sein-inspector-with-bottom .sein-inspector-group-bar{position:sticky;z-index:1;top:0}\n", ""]);

// exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container{position:fixed;right:0;top:0;bottom:0;z-index:999;transition:width 0.5s ease 0s;display:flex}.sein-inspector-container.explorer{right:auto;left:0}.sein-inspector-container.hide{width:0px !important}.sein-inspector-container.hide .sein-inspector-resize-bar{display:none}.sein-inspector-container.hide .i-inspector-close{display:none}.sein-inspector-container .sein-inspector-content{display:flex;flex-direction:column;position:relative;width:100%;background-color:rgba(0,0,0,0.9);overflow:hidden}.sein-inspector-container .sein-inspector-content .sein-inspector-title{font-size:16px;font-weight:bold;text-align:center;padding:2px 10px;user-select:none;white-space:nowrap}.sein-inspector-container .sein-inspector-content-box{display:block;flex:1;overflow:auto;min-width:200px}\n", ""]);

// exports


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Info.ts
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:34:01 PM
 * @Description:
 */
var preact_1 = __webpack_require__(0);
var QRious = __webpack_require__(70);
var components_1 = __webpack_require__(3);
var types_1 = __webpack_require__(6);
var Info = /** @class */ (function (_super) {
    __extends(Info, _super);
    function Info() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            info: {},
            qrcode: ''
        };
        _this.handleUpdateInfo = function (info) {
            _this.setState({ info: info });
        };
        return _this;
    }
    Info.prototype.componentDidMount = function () {
        var event = this.props.actor.event;
        this.setState({
            qrcode: new QRious({
                value: location.href + '?qrcode=true'
            }).toDataURL()
        });
        event.add('Update', this.handleUpdateInfo);
        event.trigger('Control', { type: types_1.EControlType.StartSync });
    };
    Info.prototype.componentWillUnmount = function () {
        var event = this.props.actor.event;
        event.remove('Update', this.handleUpdateInfo);
        event.trigger('Control', { type: types_1.EControlType.EndSync });
    };
    Info.prototype.render = function () {
        var _a = this.state.info, system = _a.system, engine = _a.engine, game = _a.game, cameras = _a.cameras, world = _a.world, level = _a.level, render = _a.render, resource = _a.resource, events = _a.events, physic = _a.physic;
        if (!system) {
            return null;
        }
        return (preact_1.h("div", { className: 'sein-inspector-content-box  u-scrollbar' },
            preact_1.h("p", { style: { textAlign: 'center', margin: 4 } },
                preact_1.h("img", { style: { border: '1px white solid' }, src: this.state.qrcode })),
            preact_1.h(components_1.Group, { name: 'System', isClose: false },
                preact_1.h(components_1.Button, { label: 'Reload', onButtonClick: function () { return location.reload(); } }),
                preact_1.h(components_1.Information, { label: 'FPS', value: system.fps.toFixed(2) }),
                preact_1.h(components_1.Information, { label: 'CPU', value: system.cpu }),
                preact_1.h(components_1.Information, { label: 'Memory', value: system.memory && (system.memory / 1024 / 1024).toFixed(2) + "MB" })),
            preact_1.h(components_1.Group, { name: 'Render', isClose: false },
                preact_1.h(components_1.Information, { label: 'Buffers bytes', value: (render.bufferBytes / 1024 / 1024).toFixed(2) + "MB" }),
                render.totalVertices && preact_1.h(components_1.Information, { label: 'Vertices', value: render.totalVertices }),
                render.totalTriangles && preact_1.h(components_1.Information, { label: 'Triangles', value: render.totalTriangles }),
                preact_1.h(components_1.Information, { label: 'Buffers Count', value: render.buffers }),
                preact_1.h(components_1.Information, { label: 'Shaders Count', value: render.shaders }),
                preact_1.h(components_1.Information, { label: 'Programs Count', value: render.programs }),
                preact_1.h(components_1.Information, { label: 'Textures Count', value: render.textures })),
            preact_1.h(components_1.Group, { name: 'Resource', isClose: false }, Object.keys(resource).map(function (name) { return (preact_1.h(components_1.Information, { label: name, value: resource[name] })); })),
            preact_1.h(components_1.Group, { name: 'Engine' },
                preact_1.h(components_1.Information, { label: 'Ticker Running', value: engine.tickerRunning }),
                preact_1.h(components_1.Information, { label: 'Games Count', value: engine.gamesCount }),
                preact_1.h(components_1.Information, { label: 'Running Games Count', value: engine.runningGamesCount })),
            preact_1.h(components_1.Group, { name: 'Game' },
                preact_1.h(components_1.Information, { label: 'Current', value: game.name }),
                preact_1.h(components_1.Information, { label: 'Paused', value: game.paused }),
                preact_1.h(components_1.Information, { label: 'Actors Count', value: game.actorsCount })),
            preact_1.h(components_1.Group, { name: 'World' },
                preact_1.h(components_1.Information, { label: 'Current', value: world.name })),
            preact_1.h(components_1.Group, { name: 'Level' },
                preact_1.h(components_1.Information, { label: 'Current', value: level.name }),
                preact_1.h(components_1.Information, { label: 'Alive', value: level.alive }),
                preact_1.h(components_1.Information, { label: 'Actors Count', value: level.actorsCount })),
            preact_1.h(components_1.Group, { name: 'Cameras' }, cameras.map(function (camera) { return (preact_1.h("div", null,
                preact_1.h(components_1.Information, { label: 'Name', value: camera.name }),
                preact_1.h(components_1.Information, { label: 'Owner', value: camera.ownerName }),
                preact_1.h(components_1.Information, { label: 'Is Main', value: camera.isMain }),
                preact_1.h(components_1.Information, { label: 'Alive', value: camera.alive }))); })),
            preact_1.h(components_1.Group, { name: 'Physic' },
                preact_1.h(components_1.Information, { label: 'Active', value: physic.active }),
                preact_1.h(components_1.Information, { label: 'Alive', value: physic.alive })),
            preact_1.h(components_1.Group, { name: 'Events' },
                preact_1.h(components_1.Information, { label: 'Global Event Count', value: events.global }),
                preact_1.h(components_1.Information, { label: 'Global HID Count', value: events.hid }))));
    };
    return Info;
}(preact_1.Component));
exports.default = Info;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * QRious v4.0.2
 * Copyright (C) 2017 Alasdair Mercer
 * Copyright (C) 2010 Tom Zerucha
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  /*
   * Copyright (C) 2017 Alasdair Mercer, !ninja
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */

  /**
   * A bare-bones constructor for surrogate prototype swapping.
   *
   * @private
   * @constructor
   */
  var Constructor = /* istanbul ignore next */ function() {};
  /**
   * A reference to <code>Object.prototype.hasOwnProperty</code>.
   *
   * @private
   * @type {Function}
   */
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  /**
   * A reference to <code>Array.prototype.slice</code>.
   *
   * @private
   * @type {Function}
   */
  var slice = Array.prototype.slice;

  /**
   * Creates an object which inherits the given <code>prototype</code>.
   *
   * Optionally, the created object can be extended further with the specified <code>properties</code>.
   *
   * @param {Object} prototype - the prototype to be inherited by the created object
   * @param {Object} [properties] - the optional properties to be extended by the created object
   * @return {Object} The newly created object.
   * @private
   */
  function createObject(prototype, properties) {
    var result;
    /* istanbul ignore next */
    if (typeof Object.create === 'function') {
      result = Object.create(prototype);
    } else {
      Constructor.prototype = prototype;
      result = new Constructor();
      Constructor.prototype = null;
    }

    if (properties) {
      extendObject(true, result, properties);
    }

    return result;
  }

  /**
   * Extends the constructor to which this method is associated with the <code>prototype</code> and/or
   * <code>statics</code> provided.
   *
   * If <code>name</code> is provided, it will be used as the class name and can be accessed via a special
   * <code>class_</code> property on the child constructor, otherwise the class name of the super constructor will be used
   * instead. The class name may also be used string representation for instances of the child constructor (via
   * <code>toString</code>), but this is not applicable to the <i>lite</i> version of Nevis.
   *
   * If <code>constructor</code> is provided, it will be used as the constructor for the child, otherwise a simple
   * constructor which only calls the super constructor will be used instead.
   *
   * The super constructor can be accessed via a special <code>super_</code> property on the child constructor.
   *
   * @param {string} [name=this.class_] - the class name to be used for the child constructor
   * @param {Function} [constructor] - the constructor for the child
   * @param {Object} [prototype] - the prototype properties to be defined for the child
   * @param {Object} [statics] - the static properties to be defined for the child
   * @return {Function} The child <code>constructor</code> provided or the one created if none was given.
   * @public
   */
  function extend(name, constructor, prototype, statics) {
    var superConstructor = this;

    if (typeof name !== 'string') {
      statics = prototype;
      prototype = constructor;
      constructor = name;
      name = null;
    }

    if (typeof constructor !== 'function') {
      statics = prototype;
      prototype = constructor;
      constructor = function() {
        return superConstructor.apply(this, arguments);
      };
    }

    extendObject(false, constructor, superConstructor, statics);

    constructor.prototype = createObject(superConstructor.prototype, prototype);
    constructor.prototype.constructor = constructor;

    constructor.class_ = name || superConstructor.class_;
    constructor.super_ = superConstructor;

    return constructor;
  }

  /**
   * Extends the specified <code>target</code> object with the properties in each of the <code>sources</code> provided.
   *
   * if any source is <code>null</code> it will be ignored.
   *
   * @param {boolean} own - <code>true</code> to only copy <b>own</b> properties from <code>sources</code> onto
   * <code>target</code>; otherwise <code>false</code>
   * @param {Object} target - the target object which should be extended
   * @param {...Object} [sources] - the source objects whose properties are to be copied onto <code>target</code>
   * @return {void}
   * @private
   */
  function extendObject(own, target, sources) {
    sources = slice.call(arguments, 2);

    var property;
    var source;

    for (var i = 0, length = sources.length; i < length; i++) {
      source = sources[i];

      for (property in source) {
        if (!own || hasOwnProperty.call(source, property)) {
          target[property] = source[property];
        }
      }
    }
  }

  var extend_1 = extend;

  /**
   * The base class from which all others should extend.
   *
   * @public
   * @constructor
   */
  function Nevis() {}
  Nevis.class_ = 'Nevis';
  Nevis.super_ = Object;

  /**
   * Extends the constructor to which this method is associated with the <code>prototype</code> and/or
   * <code>statics</code> provided.
   *
   * If <code>name</code> is provided, it will be used as the class name and can be accessed via a special
   * <code>class_</code> property on the child constructor, otherwise the class name of the super constructor will be used
   * instead. The class name may also be used string representation for instances of the child constructor (via
   * <code>toString</code>), but this is not applicable to the <i>lite</i> version of Nevis.
   *
   * If <code>constructor</code> is provided, it will be used as the constructor for the child, otherwise a simple
   * constructor which only calls the super constructor will be used instead.
   *
   * The super constructor can be accessed via a special <code>super_</code> property on the child constructor.
   *
   * @param {string} [name=this.class_] - the class name to be used for the child constructor
   * @param {Function} [constructor] - the constructor for the child
   * @param {Object} [prototype] - the prototype properties to be defined for the child
   * @param {Object} [statics] - the static properties to be defined for the child
   * @return {Function} The child <code>constructor</code> provided or the one created if none was given.
   * @public
   * @static
   * @memberof Nevis
   */
  Nevis.extend = extend_1;

  var nevis = Nevis;

  var lite = nevis;

  /**
   * Responsible for rendering a QR code {@link Frame} on a specific type of element.
   *
   * A renderer may be dependant on the rendering of another element, so the ordering of their execution is important.
   *
   * The rendering of a element can be deferred by disabling the renderer initially, however, any attempt get the element
   * from the renderer will result in it being immediately enabled and the element being rendered.
   *
   * @param {QRious} qrious - the {@link QRious} instance to be used
   * @param {*} element - the element onto which the QR code is to be rendered
   * @param {boolean} [enabled] - <code>true</code> this {@link Renderer} is enabled; otherwise <code>false</code>.
   * @public
   * @class
   * @extends Nevis
   */
  var Renderer = lite.extend(function(qrious, element, enabled) {
    /**
     * The {@link QRious} instance.
     *
     * @protected
     * @type {QRious}
     * @memberof Renderer#
     */
    this.qrious = qrious;

    /**
     * The element onto which this {@link Renderer} is rendering the QR code.
     *
     * @protected
     * @type {*}
     * @memberof Renderer#
     */
    this.element = element;
    this.element.qrious = qrious;

    /**
     * Whether this {@link Renderer} is enabled.
     *
     * @protected
     * @type {boolean}
     * @memberof Renderer#
     */
    this.enabled = Boolean(enabled);
  }, {

    /**
     * Draws the specified QR code <code>frame</code> on the underlying element.
     *
     * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
     *
     * @param {Frame} frame - the {@link Frame} to be drawn
     * @return {void}
     * @protected
     * @abstract
     * @memberof Renderer#
     */
    draw: function(frame) {},

    /**
     * Returns the element onto which this {@link Renderer} is rendering the QR code.
     *
     * If this method is called while this {@link Renderer} is disabled, it will be immediately enabled and rendered
     * before the element is returned.
     *
     * @return {*} The element.
     * @public
     * @memberof Renderer#
     */
    getElement: function() {
      if (!this.enabled) {
        this.enabled = true;
        this.render();
      }

      return this.element;
    },

    /**
     * Calculates the size (in pixel units) to represent an individual module within the QR code based on the
     * <code>frame</code> provided.
     *
     * Any configured padding will be excluded from the returned size.
     *
     * The returned value will be at least one, even in cases where the size of the QR code does not fit its contents.
     * This is done so that the inevitable clipping is handled more gracefully since this way at least something is
     * displayed instead of just a blank space filled by the background color.
     *
     * @param {Frame} frame - the {@link Frame} from which the module size is to be derived
     * @return {number} The pixel size for each module in the QR code which will be no less than one.
     * @protected
     * @memberof Renderer#
     */
    getModuleSize: function(frame) {
      var qrious = this.qrious;
      var padding = qrious.padding || 0;
      var pixels = Math.floor((qrious.size - (padding * 2)) / frame.width);

      return Math.max(1, pixels);
    },

    /**
     * Calculates the offset/padding (in pixel units) to be inserted before the QR code based on the <code>frame</code>
     * provided.
     *
     * The returned value will be zero if there is no available offset or if the size of the QR code does not fit its
     * contents. It will never be a negative value. This is done so that the inevitable clipping appears more naturally
     * and it is not clipped from all directions.
     *
     * @param {Frame} frame - the {@link Frame} from which the offset is to be derived
     * @return {number} The pixel offset for the QR code which will be no less than zero.
     * @protected
     * @memberof Renderer#
     */
    getOffset: function(frame) {
      var qrious = this.qrious;
      var padding = qrious.padding;

      if (padding != null) {
        return padding;
      }

      var moduleSize = this.getModuleSize(frame);
      var offset = Math.floor((qrious.size - (moduleSize * frame.width)) / 2);

      return Math.max(0, offset);
    },

    /**
     * Renders a QR code on the underlying element based on the <code>frame</code> provided.
     *
     * @param {Frame} frame - the {@link Frame} to be rendered
     * @return {void}
     * @public
     * @memberof Renderer#
     */
    render: function(frame) {
      if (this.enabled) {
        this.resize();
        this.reset();
        this.draw(frame);
      }
    },

    /**
     * Resets the underlying element, effectively clearing any previously rendered QR code.
     *
     * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
     *
     * @return {void}
     * @protected
     * @abstract
     * @memberof Renderer#
     */
    reset: function() {},

    /**
     * Ensures that the size of the underlying element matches that defined on the associated {@link QRious} instance.
     *
     * Implementations of {@link Renderer} <b>must</b> override this method with their own specific logic.
     *
     * @return {void}
     * @protected
     * @abstract
     * @memberof Renderer#
     */
    resize: function() {}

  });

  var Renderer_1 = Renderer;

  /**
   * An implementation of {@link Renderer} for working with <code>canvas</code> elements.
   *
   * @public
   * @class
   * @extends Renderer
   */
  var CanvasRenderer = Renderer_1.extend({

    /**
     * @override
     */
    draw: function(frame) {
      var i, j;
      var qrious = this.qrious;
      var moduleSize = this.getModuleSize(frame);
      var offset = this.getOffset(frame);
      var context = this.element.getContext('2d');

      context.fillStyle = qrious.foreground;
      context.globalAlpha = qrious.foregroundAlpha;

      for (i = 0; i < frame.width; i++) {
        for (j = 0; j < frame.width; j++) {
          if (frame.buffer[(j * frame.width) + i]) {
            context.fillRect((moduleSize * i) + offset, (moduleSize * j) + offset, moduleSize, moduleSize);
          }
        }
      }
    },

    /**
     * @override
     */
    reset: function() {
      var qrious = this.qrious;
      var context = this.element.getContext('2d');
      var size = qrious.size;

      context.lineWidth = 1;
      context.clearRect(0, 0, size, size);
      context.fillStyle = qrious.background;
      context.globalAlpha = qrious.backgroundAlpha;
      context.fillRect(0, 0, size, size);
    },

    /**
     * @override
     */
    resize: function() {
      var element = this.element;

      element.width = element.height = this.qrious.size;
    }

  });

  var CanvasRenderer_1 = CanvasRenderer;

  /* eslint no-multi-spaces: "off" */



  /**
   * Contains alignment pattern information.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var Alignment = lite.extend(null, {

    /**
     * The alignment pattern block.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof Alignment
     */
    BLOCK: [
      0,  11, 15, 19, 23, 27, 31,
      16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24,
      26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28
    ]

  });

  var Alignment_1 = Alignment;

  /* eslint no-multi-spaces: "off" */



  /**
   * Contains error correction information.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var ErrorCorrection = lite.extend(null, {

    /**
     * The error correction blocks.
     *
     * There are four elements per version. The first two indicate the number of blocks, then the data width, and finally
     * the ECC width.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof ErrorCorrection
     */
    BLOCKS: [
      1,  0,  19,  7,     1,  0,  16,  10,    1,  0,  13,  13,    1,  0,  9,   17,
      1,  0,  34,  10,    1,  0,  28,  16,    1,  0,  22,  22,    1,  0,  16,  28,
      1,  0,  55,  15,    1,  0,  44,  26,    2,  0,  17,  18,    2,  0,  13,  22,
      1,  0,  80,  20,    2,  0,  32,  18,    2,  0,  24,  26,    4,  0,  9,   16,
      1,  0,  108, 26,    2,  0,  43,  24,    2,  2,  15,  18,    2,  2,  11,  22,
      2,  0,  68,  18,    4,  0,  27,  16,    4,  0,  19,  24,    4,  0,  15,  28,
      2,  0,  78,  20,    4,  0,  31,  18,    2,  4,  14,  18,    4,  1,  13,  26,
      2,  0,  97,  24,    2,  2,  38,  22,    4,  2,  18,  22,    4,  2,  14,  26,
      2,  0,  116, 30,    3,  2,  36,  22,    4,  4,  16,  20,    4,  4,  12,  24,
      2,  2,  68,  18,    4,  1,  43,  26,    6,  2,  19,  24,    6,  2,  15,  28,
      4,  0,  81,  20,    1,  4,  50,  30,    4,  4,  22,  28,    3,  8,  12,  24,
      2,  2,  92,  24,    6,  2,  36,  22,    4,  6,  20,  26,    7,  4,  14,  28,
      4,  0,  107, 26,    8,  1,  37,  22,    8,  4,  20,  24,    12, 4,  11,  22,
      3,  1,  115, 30,    4,  5,  40,  24,    11, 5,  16,  20,    11, 5,  12,  24,
      5,  1,  87,  22,    5,  5,  41,  24,    5,  7,  24,  30,    11, 7,  12,  24,
      5,  1,  98,  24,    7,  3,  45,  28,    15, 2,  19,  24,    3,  13, 15,  30,
      1,  5,  107, 28,    10, 1,  46,  28,    1,  15, 22,  28,    2,  17, 14,  28,
      5,  1,  120, 30,    9,  4,  43,  26,    17, 1,  22,  28,    2,  19, 14,  28,
      3,  4,  113, 28,    3,  11, 44,  26,    17, 4,  21,  26,    9,  16, 13,  26,
      3,  5,  107, 28,    3,  13, 41,  26,    15, 5,  24,  30,    15, 10, 15,  28,
      4,  4,  116, 28,    17, 0,  42,  26,    17, 6,  22,  28,    19, 6,  16,  30,
      2,  7,  111, 28,    17, 0,  46,  28,    7,  16, 24,  30,    34, 0,  13,  24,
      4,  5,  121, 30,    4,  14, 47,  28,    11, 14, 24,  30,    16, 14, 15,  30,
      6,  4,  117, 30,    6,  14, 45,  28,    11, 16, 24,  30,    30, 2,  16,  30,
      8,  4,  106, 26,    8,  13, 47,  28,    7,  22, 24,  30,    22, 13, 15,  30,
      10, 2,  114, 28,    19, 4,  46,  28,    28, 6,  22,  28,    33, 4,  16,  30,
      8,  4,  122, 30,    22, 3,  45,  28,    8,  26, 23,  30,    12, 28, 15,  30,
      3,  10, 117, 30,    3,  23, 45,  28,    4,  31, 24,  30,    11, 31, 15,  30,
      7,  7,  116, 30,    21, 7,  45,  28,    1,  37, 23,  30,    19, 26, 15,  30,
      5,  10, 115, 30,    19, 10, 47,  28,    15, 25, 24,  30,    23, 25, 15,  30,
      13, 3,  115, 30,    2,  29, 46,  28,    42, 1,  24,  30,    23, 28, 15,  30,
      17, 0,  115, 30,    10, 23, 46,  28,    10, 35, 24,  30,    19, 35, 15,  30,
      17, 1,  115, 30,    14, 21, 46,  28,    29, 19, 24,  30,    11, 46, 15,  30,
      13, 6,  115, 30,    14, 23, 46,  28,    44, 7,  24,  30,    59, 1,  16,  30,
      12, 7,  121, 30,    12, 26, 47,  28,    39, 14, 24,  30,    22, 41, 15,  30,
      6,  14, 121, 30,    6,  34, 47,  28,    46, 10, 24,  30,    2,  64, 15,  30,
      17, 4,  122, 30,    29, 14, 46,  28,    49, 10, 24,  30,    24, 46, 15,  30,
      4,  18, 122, 30,    13, 32, 46,  28,    48, 14, 24,  30,    42, 32, 15,  30,
      20, 4,  117, 30,    40, 7,  47,  28,    43, 22, 24,  30,    10, 67, 15,  30,
      19, 6,  118, 30,    18, 31, 47,  28,    34, 34, 24,  30,    20, 61, 15,  30
    ],

    /**
     * The final format bits with mask (level << 3 | mask).
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof ErrorCorrection
     */
    FINAL_FORMAT: [
      // L
      0x77c4, 0x72f3, 0x7daa, 0x789d, 0x662f, 0x6318, 0x6c41, 0x6976,
      // M
      0x5412, 0x5125, 0x5e7c, 0x5b4b, 0x45f9, 0x40ce, 0x4f97, 0x4aa0,
      // Q
      0x355f, 0x3068, 0x3f31, 0x3a06, 0x24b4, 0x2183, 0x2eda, 0x2bed,
      // H
      0x1689, 0x13be, 0x1ce7, 0x19d0, 0x0762, 0x0255, 0x0d0c, 0x083b
    ],

    /**
     * A map of human-readable ECC levels.
     *
     * @public
     * @static
     * @type {Object.<string, number>}
     * @memberof ErrorCorrection
     */
    LEVELS: {
      L: 1,
      M: 2,
      Q: 3,
      H: 4
    }

  });

  var ErrorCorrection_1 = ErrorCorrection;

  /**
   * Contains Galois field information.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var Galois = lite.extend(null, {

    /**
     * The Galois field exponent table.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof Galois
     */
    EXPONENT: [
      0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1d, 0x3a, 0x74, 0xe8, 0xcd, 0x87, 0x13, 0x26,
      0x4c, 0x98, 0x2d, 0x5a, 0xb4, 0x75, 0xea, 0xc9, 0x8f, 0x03, 0x06, 0x0c, 0x18, 0x30, 0x60, 0xc0,
      0x9d, 0x27, 0x4e, 0x9c, 0x25, 0x4a, 0x94, 0x35, 0x6a, 0xd4, 0xb5, 0x77, 0xee, 0xc1, 0x9f, 0x23,
      0x46, 0x8c, 0x05, 0x0a, 0x14, 0x28, 0x50, 0xa0, 0x5d, 0xba, 0x69, 0xd2, 0xb9, 0x6f, 0xde, 0xa1,
      0x5f, 0xbe, 0x61, 0xc2, 0x99, 0x2f, 0x5e, 0xbc, 0x65, 0xca, 0x89, 0x0f, 0x1e, 0x3c, 0x78, 0xf0,
      0xfd, 0xe7, 0xd3, 0xbb, 0x6b, 0xd6, 0xb1, 0x7f, 0xfe, 0xe1, 0xdf, 0xa3, 0x5b, 0xb6, 0x71, 0xe2,
      0xd9, 0xaf, 0x43, 0x86, 0x11, 0x22, 0x44, 0x88, 0x0d, 0x1a, 0x34, 0x68, 0xd0, 0xbd, 0x67, 0xce,
      0x81, 0x1f, 0x3e, 0x7c, 0xf8, 0xed, 0xc7, 0x93, 0x3b, 0x76, 0xec, 0xc5, 0x97, 0x33, 0x66, 0xcc,
      0x85, 0x17, 0x2e, 0x5c, 0xb8, 0x6d, 0xda, 0xa9, 0x4f, 0x9e, 0x21, 0x42, 0x84, 0x15, 0x2a, 0x54,
      0xa8, 0x4d, 0x9a, 0x29, 0x52, 0xa4, 0x55, 0xaa, 0x49, 0x92, 0x39, 0x72, 0xe4, 0xd5, 0xb7, 0x73,
      0xe6, 0xd1, 0xbf, 0x63, 0xc6, 0x91, 0x3f, 0x7e, 0xfc, 0xe5, 0xd7, 0xb3, 0x7b, 0xf6, 0xf1, 0xff,
      0xe3, 0xdb, 0xab, 0x4b, 0x96, 0x31, 0x62, 0xc4, 0x95, 0x37, 0x6e, 0xdc, 0xa5, 0x57, 0xae, 0x41,
      0x82, 0x19, 0x32, 0x64, 0xc8, 0x8d, 0x07, 0x0e, 0x1c, 0x38, 0x70, 0xe0, 0xdd, 0xa7, 0x53, 0xa6,
      0x51, 0xa2, 0x59, 0xb2, 0x79, 0xf2, 0xf9, 0xef, 0xc3, 0x9b, 0x2b, 0x56, 0xac, 0x45, 0x8a, 0x09,
      0x12, 0x24, 0x48, 0x90, 0x3d, 0x7a, 0xf4, 0xf5, 0xf7, 0xf3, 0xfb, 0xeb, 0xcb, 0x8b, 0x0b, 0x16,
      0x2c, 0x58, 0xb0, 0x7d, 0xfa, 0xe9, 0xcf, 0x83, 0x1b, 0x36, 0x6c, 0xd8, 0xad, 0x47, 0x8e, 0x00
    ],

    /**
     * The Galois field log table.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof Galois
     */
    LOG: [
      0xff, 0x00, 0x01, 0x19, 0x02, 0x32, 0x1a, 0xc6, 0x03, 0xdf, 0x33, 0xee, 0x1b, 0x68, 0xc7, 0x4b,
      0x04, 0x64, 0xe0, 0x0e, 0x34, 0x8d, 0xef, 0x81, 0x1c, 0xc1, 0x69, 0xf8, 0xc8, 0x08, 0x4c, 0x71,
      0x05, 0x8a, 0x65, 0x2f, 0xe1, 0x24, 0x0f, 0x21, 0x35, 0x93, 0x8e, 0xda, 0xf0, 0x12, 0x82, 0x45,
      0x1d, 0xb5, 0xc2, 0x7d, 0x6a, 0x27, 0xf9, 0xb9, 0xc9, 0x9a, 0x09, 0x78, 0x4d, 0xe4, 0x72, 0xa6,
      0x06, 0xbf, 0x8b, 0x62, 0x66, 0xdd, 0x30, 0xfd, 0xe2, 0x98, 0x25, 0xb3, 0x10, 0x91, 0x22, 0x88,
      0x36, 0xd0, 0x94, 0xce, 0x8f, 0x96, 0xdb, 0xbd, 0xf1, 0xd2, 0x13, 0x5c, 0x83, 0x38, 0x46, 0x40,
      0x1e, 0x42, 0xb6, 0xa3, 0xc3, 0x48, 0x7e, 0x6e, 0x6b, 0x3a, 0x28, 0x54, 0xfa, 0x85, 0xba, 0x3d,
      0xca, 0x5e, 0x9b, 0x9f, 0x0a, 0x15, 0x79, 0x2b, 0x4e, 0xd4, 0xe5, 0xac, 0x73, 0xf3, 0xa7, 0x57,
      0x07, 0x70, 0xc0, 0xf7, 0x8c, 0x80, 0x63, 0x0d, 0x67, 0x4a, 0xde, 0xed, 0x31, 0xc5, 0xfe, 0x18,
      0xe3, 0xa5, 0x99, 0x77, 0x26, 0xb8, 0xb4, 0x7c, 0x11, 0x44, 0x92, 0xd9, 0x23, 0x20, 0x89, 0x2e,
      0x37, 0x3f, 0xd1, 0x5b, 0x95, 0xbc, 0xcf, 0xcd, 0x90, 0x87, 0x97, 0xb2, 0xdc, 0xfc, 0xbe, 0x61,
      0xf2, 0x56, 0xd3, 0xab, 0x14, 0x2a, 0x5d, 0x9e, 0x84, 0x3c, 0x39, 0x53, 0x47, 0x6d, 0x41, 0xa2,
      0x1f, 0x2d, 0x43, 0xd8, 0xb7, 0x7b, 0xa4, 0x76, 0xc4, 0x17, 0x49, 0xec, 0x7f, 0x0c, 0x6f, 0xf6,
      0x6c, 0xa1, 0x3b, 0x52, 0x29, 0x9d, 0x55, 0xaa, 0xfb, 0x60, 0x86, 0xb1, 0xbb, 0xcc, 0x3e, 0x5a,
      0xcb, 0x59, 0x5f, 0xb0, 0x9c, 0xa9, 0xa0, 0x51, 0x0b, 0xf5, 0x16, 0xeb, 0x7a, 0x75, 0x2c, 0xd7,
      0x4f, 0xae, 0xd5, 0xe9, 0xe6, 0xe7, 0xad, 0xe8, 0x74, 0xd6, 0xf4, 0xea, 0xa8, 0x50, 0x58, 0xaf
    ]

  });

  var Galois_1 = Galois;

  /**
   * Contains version pattern information.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var Version = lite.extend(null, {

    /**
     * The version pattern block.
     *
     * @public
     * @static
     * @type {number[]}
     * @memberof Version
     */
    BLOCK: [
      0xc94, 0x5bc, 0xa99, 0x4d3, 0xbf6, 0x762, 0x847, 0x60d, 0x928, 0xb78, 0x45d, 0xa17, 0x532,
      0x9a6, 0x683, 0x8c9, 0x7ec, 0xec4, 0x1e1, 0xfab, 0x08e, 0xc1a, 0x33f, 0xd75, 0x250, 0x9d5,
      0x6f0, 0x8ba, 0x79f, 0xb0b, 0x42e, 0xa64, 0x541, 0xc69
    ]

  });

  var Version_1 = Version;

  /**
   * Generates information for a QR code frame based on a specific value to be encoded.
   *
   * @param {Frame~Options} options - the options to be used
   * @public
   * @class
   * @extends Nevis
   */
  var Frame = lite.extend(function(options) {
    var dataBlock, eccBlock, index, neccBlock1, neccBlock2;
    var valueLength = options.value.length;

    this._badness = [];
    this._level = ErrorCorrection_1.LEVELS[options.level];
    this._polynomial = [];
    this._value = options.value;
    this._version = 0;
    this._stringBuffer = [];

    while (this._version < 40) {
      this._version++;

      index = ((this._level - 1) * 4) + ((this._version - 1) * 16);

      neccBlock1 = ErrorCorrection_1.BLOCKS[index++];
      neccBlock2 = ErrorCorrection_1.BLOCKS[index++];
      dataBlock = ErrorCorrection_1.BLOCKS[index++];
      eccBlock = ErrorCorrection_1.BLOCKS[index];

      index = (dataBlock * (neccBlock1 + neccBlock2)) + neccBlock2 - 3 + (this._version <= 9);

      if (valueLength <= index) {
        break;
      }
    }

    this._dataBlock = dataBlock;
    this._eccBlock = eccBlock;
    this._neccBlock1 = neccBlock1;
    this._neccBlock2 = neccBlock2;

    /**
     * The data width is based on version.
     *
     * @public
     * @type {number}
     * @memberof Frame#
     */
    // FIXME: Ensure that it fits instead of being truncated.
    var width = this.width = 17 + (4 * this._version);

    /**
     * The image buffer.
     *
     * @public
     * @type {number[]}
     * @memberof Frame#
     */
    this.buffer = Frame._createArray(width * width);

    this._ecc = Frame._createArray(dataBlock + ((dataBlock + eccBlock) * (neccBlock1 + neccBlock2)) + neccBlock2);
    this._mask = Frame._createArray(((width * (width + 1)) + 1) / 2);

    this._insertFinders();
    this._insertAlignments();

    // Insert single foreground cell.
    this.buffer[8 + (width * (width - 8))] = 1;

    this._insertTimingGap();
    this._reverseMask();
    this._insertTimingRowAndColumn();
    this._insertVersion();
    this._syncMask();
    this._convertBitStream(valueLength);
    this._calculatePolynomial();
    this._appendEccToData();
    this._interleaveBlocks();
    this._pack();
    this._finish();
  }, {

    _addAlignment: function(x, y) {
      var i;
      var buffer = this.buffer;
      var width = this.width;

      buffer[x + (width * y)] = 1;

      for (i = -2; i < 2; i++) {
        buffer[x + i + (width * (y - 2))] = 1;
        buffer[x - 2 + (width * (y + i + 1))] = 1;
        buffer[x + 2 + (width * (y + i))] = 1;
        buffer[x + i + 1 + (width * (y + 2))] = 1;
      }

      for (i = 0; i < 2; i++) {
        this._setMask(x - 1, y + i);
        this._setMask(x + 1, y - i);
        this._setMask(x - i, y - 1);
        this._setMask(x + i, y + 1);
      }
    },

    _appendData: function(data, dataLength, ecc, eccLength) {
      var bit, i, j;
      var polynomial = this._polynomial;
      var stringBuffer = this._stringBuffer;

      for (i = 0; i < eccLength; i++) {
        stringBuffer[ecc + i] = 0;
      }

      for (i = 0; i < dataLength; i++) {
        bit = Galois_1.LOG[stringBuffer[data + i] ^ stringBuffer[ecc]];

        if (bit !== 255) {
          for (j = 1; j < eccLength; j++) {
            stringBuffer[ecc + j - 1] = stringBuffer[ecc + j] ^
              Galois_1.EXPONENT[Frame._modN(bit + polynomial[eccLength - j])];
          }
        } else {
          for (j = ecc; j < ecc + eccLength; j++) {
            stringBuffer[j] = stringBuffer[j + 1];
          }
        }

        stringBuffer[ecc + eccLength - 1] = bit === 255 ? 0 : Galois_1.EXPONENT[Frame._modN(bit + polynomial[0])];
      }
    },

    _appendEccToData: function() {
      var i;
      var data = 0;
      var dataBlock = this._dataBlock;
      var ecc = this._calculateMaxLength();
      var eccBlock = this._eccBlock;

      for (i = 0; i < this._neccBlock1; i++) {
        this._appendData(data, dataBlock, ecc, eccBlock);

        data += dataBlock;
        ecc += eccBlock;
      }

      for (i = 0; i < this._neccBlock2; i++) {
        this._appendData(data, dataBlock + 1, ecc, eccBlock);

        data += dataBlock + 1;
        ecc += eccBlock;
      }
    },

    _applyMask: function(mask) {
      var r3x, r3y, x, y;
      var buffer = this.buffer;
      var width = this.width;

      switch (mask) {
      case 0:
        for (y = 0; y < width; y++) {
          for (x = 0; x < width; x++) {
            if (!((x + y) & 1) && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 1:
        for (y = 0; y < width; y++) {
          for (x = 0; x < width; x++) {
            if (!(y & 1) && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 2:
        for (y = 0; y < width; y++) {
          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x === 3) {
              r3x = 0;
            }

            if (!r3x && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 3:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y === 3) {
            r3y = 0;
          }

          for (r3x = r3y, x = 0; x < width; x++, r3x++) {
            if (r3x === 3) {
              r3x = 0;
            }

            if (!r3x && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 4:
        for (y = 0; y < width; y++) {
          for (r3x = 0, r3y = (y >> 1) & 1, x = 0; x < width; x++, r3x++) {
            if (r3x === 3) {
              r3x = 0;
              r3y = !r3y;
            }

            if (!r3y && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 5:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y === 3) {
            r3y = 0;
          }

          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x === 3) {
              r3x = 0;
            }

            if (!((x & y & 1) + !(!r3x | !r3y)) && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 6:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y === 3) {
            r3y = 0;
          }

          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x === 3) {
              r3x = 0;
            }

            if (!((x & y & 1) + (r3x && r3x === r3y) & 1) && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      case 7:
        for (r3y = 0, y = 0; y < width; y++, r3y++) {
          if (r3y === 3) {
            r3y = 0;
          }

          for (r3x = 0, x = 0; x < width; x++, r3x++) {
            if (r3x === 3) {
              r3x = 0;
            }

            if (!((r3x && r3x === r3y) + (x + y & 1) & 1) && !this._isMasked(x, y)) {
              buffer[x + (y * width)] ^= 1;
            }
          }
        }

        break;
      }
    },

    _calculateMaxLength: function() {
      return (this._dataBlock * (this._neccBlock1 + this._neccBlock2)) + this._neccBlock2;
    },

    _calculatePolynomial: function() {
      var i, j;
      var eccBlock = this._eccBlock;
      var polynomial = this._polynomial;

      polynomial[0] = 1;

      for (i = 0; i < eccBlock; i++) {
        polynomial[i + 1] = 1;

        for (j = i; j > 0; j--) {
          polynomial[j] = polynomial[j] ? polynomial[j - 1] ^
            Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[j]] + i)] : polynomial[j - 1];
        }

        polynomial[0] = Galois_1.EXPONENT[Frame._modN(Galois_1.LOG[polynomial[0]] + i)];
      }

      // Use logs for generator polynomial to save calculation step.
      for (i = 0; i <= eccBlock; i++) {
        polynomial[i] = Galois_1.LOG[polynomial[i]];
      }
    },

    _checkBadness: function() {
      var b, b1, h, x, y;
      var bad = 0;
      var badness = this._badness;
      var buffer = this.buffer;
      var width = this.width;

      // Blocks of same colour.
      for (y = 0; y < width - 1; y++) {
        for (x = 0; x < width - 1; x++) {
          // All foreground colour.
          if ((buffer[x + (width * y)] &&
            buffer[x + 1 + (width * y)] &&
            buffer[x + (width * (y + 1))] &&
            buffer[x + 1 + (width * (y + 1))]) ||
            // All background colour.
            !(buffer[x + (width * y)] ||
            buffer[x + 1 + (width * y)] ||
            buffer[x + (width * (y + 1))] ||
            buffer[x + 1 + (width * (y + 1))])) {
            bad += Frame.N2;
          }
        }
      }

      var bw = 0;

      // X runs.
      for (y = 0; y < width; y++) {
        h = 0;

        badness[0] = 0;

        for (b = 0, x = 0; x < width; x++) {
          b1 = buffer[x + (width * y)];

          if (b === b1) {
            badness[h]++;
          } else {
            badness[++h] = 1;
          }

          b = b1;
          bw += b ? 1 : -1;
        }

        bad += this._getBadness(h);
      }

      if (bw < 0) {
        bw = -bw;
      }

      var count = 0;
      var big = bw;
      big += big << 2;
      big <<= 1;

      while (big > width * width) {
        big -= width * width;
        count++;
      }

      bad += count * Frame.N4;

      // Y runs.
      for (x = 0; x < width; x++) {
        h = 0;

        badness[0] = 0;

        for (b = 0, y = 0; y < width; y++) {
          b1 = buffer[x + (width * y)];

          if (b === b1) {
            badness[h]++;
          } else {
            badness[++h] = 1;
          }

          b = b1;
        }

        bad += this._getBadness(h);
      }

      return bad;
    },

    _convertBitStream: function(length) {
      var bit, i;
      var ecc = this._ecc;
      var version = this._version;

      // Convert string to bit stream. 8-bit data to QR-coded 8-bit data (numeric, alphanumeric, or kanji not supported).
      for (i = 0; i < length; i++) {
        ecc[i] = this._value.charCodeAt(i);
      }

      var stringBuffer = this._stringBuffer = ecc.slice();
      var maxLength = this._calculateMaxLength();

      if (length >= maxLength - 2) {
        length = maxLength - 2;

        if (version > 9) {
          length--;
        }
      }

      // Shift and re-pack to insert length prefix.
      var index = length;

      if (version > 9) {
        stringBuffer[index + 2] = 0;
        stringBuffer[index + 3] = 0;

        while (index--) {
          bit = stringBuffer[index];

          stringBuffer[index + 3] |= 255 & (bit << 4);
          stringBuffer[index + 2] = bit >> 4;
        }

        stringBuffer[2] |= 255 & (length << 4);
        stringBuffer[1] = length >> 4;
        stringBuffer[0] = 0x40 | (length >> 12);
      } else {
        stringBuffer[index + 1] = 0;
        stringBuffer[index + 2] = 0;

        while (index--) {
          bit = stringBuffer[index];

          stringBuffer[index + 2] |= 255 & (bit << 4);
          stringBuffer[index + 1] = bit >> 4;
        }

        stringBuffer[1] |= 255 & (length << 4);
        stringBuffer[0] = 0x40 | (length >> 4);
      }

      // Fill to end with pad pattern.
      index = length + 3 - (version < 10);

      while (index < maxLength) {
        stringBuffer[index++] = 0xec;
        stringBuffer[index++] = 0x11;
      }
    },

    _getBadness: function(length) {
      var i;
      var badRuns = 0;
      var badness = this._badness;

      for (i = 0; i <= length; i++) {
        if (badness[i] >= 5) {
          badRuns += Frame.N1 + badness[i] - 5;
        }
      }

      // FBFFFBF as in finder.
      for (i = 3; i < length - 1; i += 2) {
        if (badness[i - 2] === badness[i + 2] &&
          badness[i + 2] === badness[i - 1] &&
          badness[i - 1] === badness[i + 1] &&
          badness[i - 1] * 3 === badness[i] &&
          // Background around the foreground pattern? Not part of the specs.
          (badness[i - 3] === 0 || i + 3 > length ||
          badness[i - 3] * 3 >= badness[i] * 4 ||
          badness[i + 3] * 3 >= badness[i] * 4)) {
          badRuns += Frame.N3;
        }
      }

      return badRuns;
    },

    _finish: function() {
      // Save pre-mask copy of frame.
      this._stringBuffer = this.buffer.slice();

      var currentMask, i;
      var bit = 0;
      var mask = 30000;

      /*
       * Using for instead of while since in original Arduino code if an early mask was "good enough" it wouldn't try for
       * a better one since they get more complex and take longer.
       */
      for (i = 0; i < 8; i++) {
        // Returns foreground-background imbalance.
        this._applyMask(i);

        currentMask = this._checkBadness();

        // Is current mask better than previous best?
        if (currentMask < mask) {
          mask = currentMask;
          bit = i;
        }

        // Don't increment "i" to a void redoing mask.
        if (bit === 7) {
          break;
        }

        // Reset for next pass.
        this.buffer = this._stringBuffer.slice();
      }

      // Redo best mask as none were "good enough" (i.e. last wasn't bit).
      if (bit !== i) {
        this._applyMask(bit);
      }

      // Add in final mask/ECC level bytes.
      mask = ErrorCorrection_1.FINAL_FORMAT[bit + (this._level - 1 << 3)];

      var buffer = this.buffer;
      var width = this.width;

      // Low byte.
      for (i = 0; i < 8; i++, mask >>= 1) {
        if (mask & 1) {
          buffer[width - 1 - i + (width * 8)] = 1;

          if (i < 6) {
            buffer[8 + (width * i)] = 1;
          } else {
            buffer[8 + (width * (i + 1))] = 1;
          }
        }
      }

      // High byte.
      for (i = 0; i < 7; i++, mask >>= 1) {
        if (mask & 1) {
          buffer[8 + (width * (width - 7 + i))] = 1;

          if (i) {
            buffer[6 - i + (width * 8)] = 1;
          } else {
            buffer[7 + (width * 8)] = 1;
          }
        }
      }
    },

    _interleaveBlocks: function() {
      var i, j;
      var dataBlock = this._dataBlock;
      var ecc = this._ecc;
      var eccBlock = this._eccBlock;
      var k = 0;
      var maxLength = this._calculateMaxLength();
      var neccBlock1 = this._neccBlock1;
      var neccBlock2 = this._neccBlock2;
      var stringBuffer = this._stringBuffer;

      for (i = 0; i < dataBlock; i++) {
        for (j = 0; j < neccBlock1; j++) {
          ecc[k++] = stringBuffer[i + (j * dataBlock)];
        }

        for (j = 0; j < neccBlock2; j++) {
          ecc[k++] = stringBuffer[(neccBlock1 * dataBlock) + i + (j * (dataBlock + 1))];
        }
      }

      for (j = 0; j < neccBlock2; j++) {
        ecc[k++] = stringBuffer[(neccBlock1 * dataBlock) + i + (j * (dataBlock + 1))];
      }

      for (i = 0; i < eccBlock; i++) {
        for (j = 0; j < neccBlock1 + neccBlock2; j++) {
          ecc[k++] = stringBuffer[maxLength + i + (j * eccBlock)];
        }
      }

      this._stringBuffer = ecc;
    },

    _insertAlignments: function() {
      var i, x, y;
      var version = this._version;
      var width = this.width;

      if (version > 1) {
        i = Alignment_1.BLOCK[version];
        y = width - 7;

        for (;;) {
          x = width - 7;

          while (x > i - 3) {
            this._addAlignment(x, y);

            if (x < i) {
              break;
            }

            x -= i;
          }

          if (y <= i + 9) {
            break;
          }

          y -= i;

          this._addAlignment(6, y);
          this._addAlignment(y, 6);
        }
      }
    },

    _insertFinders: function() {
      var i, j, x, y;
      var buffer = this.buffer;
      var width = this.width;

      for (i = 0; i < 3; i++) {
        j = 0;
        y = 0;

        if (i === 1) {
          j = width - 7;
        }
        if (i === 2) {
          y = width - 7;
        }

        buffer[y + 3 + (width * (j + 3))] = 1;

        for (x = 0; x < 6; x++) {
          buffer[y + x + (width * j)] = 1;
          buffer[y + (width * (j + x + 1))] = 1;
          buffer[y + 6 + (width * (j + x))] = 1;
          buffer[y + x + 1 + (width * (j + 6))] = 1;
        }

        for (x = 1; x < 5; x++) {
          this._setMask(y + x, j + 1);
          this._setMask(y + 1, j + x + 1);
          this._setMask(y + 5, j + x);
          this._setMask(y + x + 1, j + 5);
        }

        for (x = 2; x < 4; x++) {
          buffer[y + x + (width * (j + 2))] = 1;
          buffer[y + 2 + (width * (j + x + 1))] = 1;
          buffer[y + 4 + (width * (j + x))] = 1;
          buffer[y + x + 1 + (width * (j + 4))] = 1;
        }
      }
    },

    _insertTimingGap: function() {
      var x, y;
      var width = this.width;

      for (y = 0; y < 7; y++) {
        this._setMask(7, y);
        this._setMask(width - 8, y);
        this._setMask(7, y + width - 7);
      }

      for (x = 0; x < 8; x++) {
        this._setMask(x, 7);
        this._setMask(x + width - 8, 7);
        this._setMask(x, width - 8);
      }
    },

    _insertTimingRowAndColumn: function() {
      var x;
      var buffer = this.buffer;
      var width = this.width;

      for (x = 0; x < width - 14; x++) {
        if (x & 1) {
          this._setMask(8 + x, 6);
          this._setMask(6, 8 + x);
        } else {
          buffer[8 + x + (width * 6)] = 1;
          buffer[6 + (width * (8 + x))] = 1;
        }
      }
    },

    _insertVersion: function() {
      var i, j, x, y;
      var buffer = this.buffer;
      var version = this._version;
      var width = this.width;

      if (version > 6) {
        i = Version_1.BLOCK[version - 7];
        j = 17;

        for (x = 0; x < 6; x++) {
          for (y = 0; y < 3; y++, j--) {
            if (1 & (j > 11 ? version >> j - 12 : i >> j)) {
              buffer[5 - x + (width * (2 - y + width - 11))] = 1;
              buffer[2 - y + width - 11 + (width * (5 - x))] = 1;
            } else {
              this._setMask(5 - x, 2 - y + width - 11);
              this._setMask(2 - y + width - 11, 5 - x);
            }
          }
        }
      }
    },

    _isMasked: function(x, y) {
      var bit = Frame._getMaskBit(x, y);

      return this._mask[bit] === 1;
    },

    _pack: function() {
      var bit, i, j;
      var k = 1;
      var v = 1;
      var width = this.width;
      var x = width - 1;
      var y = width - 1;

      // Interleaved data and ECC codes.
      var length = ((this._dataBlock + this._eccBlock) * (this._neccBlock1 + this._neccBlock2)) + this._neccBlock2;

      for (i = 0; i < length; i++) {
        bit = this._stringBuffer[i];

        for (j = 0; j < 8; j++, bit <<= 1) {
          if (0x80 & bit) {
            this.buffer[x + (width * y)] = 1;
          }

          // Find next fill position.
          do {
            if (v) {
              x--;
            } else {
              x++;

              if (k) {
                if (y !== 0) {
                  y--;
                } else {
                  x -= 2;
                  k = !k;

                  if (x === 6) {
                    x--;
                    y = 9;
                  }
                }
              } else if (y !== width - 1) {
                y++;
              } else {
                x -= 2;
                k = !k;

                if (x === 6) {
                  x--;
                  y -= 8;
                }
              }
            }

            v = !v;
          } while (this._isMasked(x, y));
        }
      }
    },

    _reverseMask: function() {
      var x, y;
      var width = this.width;

      for (x = 0; x < 9; x++) {
        this._setMask(x, 8);
      }

      for (x = 0; x < 8; x++) {
        this._setMask(x + width - 8, 8);
        this._setMask(8, x);
      }

      for (y = 0; y < 7; y++) {
        this._setMask(8, y + width - 7);
      }
    },

    _setMask: function(x, y) {
      var bit = Frame._getMaskBit(x, y);

      this._mask[bit] = 1;
    },

    _syncMask: function() {
      var x, y;
      var width = this.width;

      for (y = 0; y < width; y++) {
        for (x = 0; x <= y; x++) {
          if (this.buffer[x + (width * y)]) {
            this._setMask(x, y);
          }
        }
      }
    }

  }, {

    _createArray: function(length) {
      var i;
      var array = [];

      for (i = 0; i < length; i++) {
        array[i] = 0;
      }

      return array;
    },

    _getMaskBit: function(x, y) {
      var bit;

      if (x > y) {
        bit = x;
        x = y;
        y = bit;
      }

      bit = y;
      bit += y * y;
      bit >>= 1;
      bit += x;

      return bit;
    },

    _modN: function(x) {
      while (x >= 255) {
        x -= 255;
        x = (x >> 8) + (x & 255);
      }

      return x;
    },

    // *Badness* coefficients.
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10

  });

  var Frame_1 = Frame;

  /**
   * The options used by {@link Frame}.
   *
   * @typedef {Object} Frame~Options
   * @property {string} level - The ECC level to be used.
   * @property {string} value - The value to be encoded.
   */

  /**
   * An implementation of {@link Renderer} for working with <code>img</code> elements.
   *
   * This depends on {@link CanvasRenderer} being executed first as this implementation simply applies the data URL from
   * the rendered <code>canvas</code> element as the <code>src</code> for the <code>img</code> element being rendered.
   *
   * @public
   * @class
   * @extends Renderer
   */
  var ImageRenderer = Renderer_1.extend({

    /**
     * @override
     */
    draw: function() {
      this.element.src = this.qrious.toDataURL();
    },

    /**
     * @override
     */
    reset: function() {
      this.element.src = '';
    },

    /**
     * @override
     */
    resize: function() {
      var element = this.element;

      element.width = element.height = this.qrious.size;
    }

  });

  var ImageRenderer_1 = ImageRenderer;

  /**
   * Defines an available option while also configuring how values are applied to the target object.
   *
   * Optionally, a default value can be specified as well a value transformer for greater control over how the option
   * value is applied.
   *
   * If no value transformer is specified, then any specified option will be applied directly. All values are maintained
   * on the target object itself as a field using the option name prefixed with a single underscore.
   *
   * When an option is specified as modifiable, the {@link OptionManager} will be required to include a setter for the
   * property that is defined on the target object that uses the option name.
   *
   * @param {string} name - the name to be used
   * @param {boolean} [modifiable] - <code>true</code> if the property defined on target objects should include a setter;
   * otherwise <code>false</code>
   * @param {*} [defaultValue] - the default value to be used
   * @param {Option~ValueTransformer} [valueTransformer] - the value transformer to be used
   * @public
   * @class
   * @extends Nevis
   */
  var Option = lite.extend(function(name, modifiable, defaultValue, valueTransformer) {
    /**
     * The name for this {@link Option}.
     *
     * @public
     * @type {string}
     * @memberof Option#
     */
    this.name = name;

    /**
     * Whether a setter should be included on the property defined on target objects for this {@link Option}.
     *
     * @public
     * @type {boolean}
     * @memberof Option#
     */
    this.modifiable = Boolean(modifiable);

    /**
     * The default value for this {@link Option}.
     *
     * @public
     * @type {*}
     * @memberof Option#
     */
    this.defaultValue = defaultValue;

    this._valueTransformer = valueTransformer;
  }, {

    /**
     * Transforms the specified <code>value</code> so that it can be applied for this {@link Option}.
     *
     * If a value transformer has been specified for this {@link Option}, it will be called upon to transform
     * <code>value</code>. Otherwise, <code>value</code> will be returned directly.
     *
     * @param {*} value - the value to be transformed
     * @return {*} The transformed value or <code>value</code> if no value transformer is specified.
     * @public
     * @memberof Option#
     */
    transform: function(value) {
      var transformer = this._valueTransformer;
      if (typeof transformer === 'function') {
        return transformer(value, this);
      }

      return value;
    }

  });

  var Option_1 = Option;

  /**
   * Returns a transformed value for the specified <code>value</code> to be applied for the <code>option</code> provided.
   *
   * @callback Option~ValueTransformer
   * @param {*} value - the value to be transformed
   * @param {Option} option - the {@link Option} for which <code>value</code> is being transformed
   * @return {*} The transform value.
   */

  /**
   * Contains utility methods that are useful throughout the library.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var Utilities = lite.extend(null, {

    /**
     * Returns the absolute value of a given number.
     *
     * This method is simply a convenient shorthand for <code>Math.abs</code> while ensuring that nulls are returned as
     * <code>null</code> instead of zero.
     *
     * @param {number} value - the number whose absolute value is to be returned
     * @return {number} The absolute value of <code>value</code> or <code>null</code> if <code>value</code> is
     * <code>null</code>.
     * @public
     * @static
     * @memberof Utilities
     */
    abs: function(value) {
      return value != null ? Math.abs(value) : null;
    },

    /**
     * Returns whether the specified <code>object</code> has a property with the specified <code>name</code> as an own
     * (not inherited) property.
     *
     * @param {Object} object - the object on which the property is to be checked
     * @param {string} name - the name of the property to be checked
     * @return {boolean} <code>true</code> if <code>object</code> has an own property with <code>name</code>.
     * @public
     * @static
     * @memberof Utilities
     */
    hasOwn: function(object, name) {
      return Object.prototype.hasOwnProperty.call(object, name);
    },

    /**
     * A non-operation method that does absolutely nothing.
     *
     * @return {void}
     * @public
     * @static
     * @memberof Utilities
     */
    noop: function() {},

    /**
     * Transforms the specified <code>string</code> to upper case while remaining null-safe.
     *
     * @param {string} string - the string to be transformed to upper case
     * @return {string} <code>string</code> transformed to upper case if <code>string</code> is not <code>null</code>.
     * @public
     * @static
     * @memberof Utilities
     */
    toUpperCase: function(string) {
      return string != null ? string.toUpperCase() : null;
    }

  });

  var Utilities_1 = Utilities;

  /**
   * Manages multiple {@link Option} instances that are intended to be used by multiple implementations.
   *
   * Although the option definitions are shared between targets, the values are maintained on the targets themselves.
   *
   * @param {Option[]} options - the options to be used
   * @public
   * @class
   * @extends Nevis
   */
  var OptionManager = lite.extend(function(options) {
    /**
     * The available options for this {@link OptionManager}.
     *
     * @public
     * @type {Object.<string, Option>}
     * @memberof OptionManager#
     */
    this.options = {};

    options.forEach(function(option) {
      this.options[option.name] = option;
    }, this);
  }, {

    /**
     * Returns whether an option with the specified <code>name</code> is available.
     *
     * @param {string} name - the name of the {@link Option} whose existence is to be checked
     * @return {boolean} <code>true</code> if an {@link Option} exists with <code>name</code>; otherwise
     * <code>false</code>.
     * @public
     * @memberof OptionManager#
     */
    exists: function(name) {
      return this.options[name] != null;
    },

    /**
     * Returns the value of the option with the specified <code>name</code> on the <code>target</code> object provided.
     *
     * @param {string} name - the name of the {@link Option} whose value on <code>target</code> is to be returned
     * @param {Object} target - the object from which the value of the named {@link Option} is to be returned
     * @return {*} The value of the {@link Option} with <code>name</code> on <code>target</code>.
     * @public
     * @memberof OptionManager#
     */
    get: function(name, target) {
      return OptionManager._get(this.options[name], target);
    },

    /**
     * Returns a copy of all of the available options on the <code>target</code> object provided.
     *
     * @param {Object} target - the object from which the option name/value pairs are to be returned
     * @return {Object.<string, *>} A hash containing the name/value pairs of all options on <code>target</code>.
     * @public
     * @memberof OptionManager#
     */
    getAll: function(target) {
      var name;
      var options = this.options;
      var result = {};

      for (name in options) {
        if (Utilities_1.hasOwn(options, name)) {
          result[name] = OptionManager._get(options[name], target);
        }
      }

      return result;
    },

    /**
     * Initializes the available options for the <code>target</code> object provided and then applies the initial values
     * within the speciifed <code>options</code>.
     *
     * This method will throw an error if any of the names within <code>options</code> does not match an available option.
     *
     * This involves setting the default values and defining properties for all of the available options on
     * <code>target</code> before finally calling {@link OptionMananger#setAll} with <code>options</code> and
     * <code>target</code>. Any options that are configured to be modifiable will have a setter included in their defined
     * property that will allow its corresponding value to be modified.
     *
     * If a change handler is specified, it will be called whenever the value changes on <code>target</code> for a
     * modifiable option, but only when done so via the defined property's setter.
     *
     * @param {Object.<string, *>} options - the name/value pairs of the initial options to be set
     * @param {Object} target - the object on which the options are to be initialized
     * @param {Function} [changeHandler] - the function to be called whenever the value of an modifiable option changes on
     * <code>target</code>
     * @return {void}
     * @throws {Error} If <code>options</code> contains an invalid option name.
     * @public
     * @memberof OptionManager#
     */
    init: function(options, target, changeHandler) {
      if (typeof changeHandler !== 'function') {
        changeHandler = Utilities_1.noop;
      }

      var name, option;

      for (name in this.options) {
        if (Utilities_1.hasOwn(this.options, name)) {
          option = this.options[name];

          OptionManager._set(option, option.defaultValue, target);
          OptionManager._createAccessor(option, target, changeHandler);
        }
      }

      this._setAll(options, target, true);
    },

    /**
     * Sets the value of the option with the specified <code>name</code> on the <code>target</code> object provided to
     * <code>value</code>.
     *
     * This method will throw an error if <code>name</code> does not match an available option or matches an option that
     * cannot be modified.
     *
     * If <code>value</code> is <code>null</code> and the {@link Option} has a default value configured, then that default
     * value will be used instead. If the {@link Option} also has a value transformer configured, it will be used to
     * transform whichever value was determined to be used.
     *
     * This method returns whether the value of the underlying field on <code>target</code> was changed as a result.
     *
     * @param {string} name - the name of the {@link Option} whose value is to be set
     * @param {*} value - the value to be set for the named {@link Option} on <code>target</code>
     * @param {Object} target - the object on which <code>value</code> is to be set for the named {@link Option}
     * @return {boolean} <code>true</code> if the underlying field on <code>target</code> was changed; otherwise
     * <code>false</code>.
     * @throws {Error} If <code>name</code> is invalid or is for an option that cannot be modified.
     * @public
     * @memberof OptionManager#
     */
    set: function(name, value, target) {
      return this._set(name, value, target);
    },

    /**
     * Sets all of the specified <code>options</code> on the <code>target</code> object provided to their corresponding
     * values.
     *
     * This method will throw an error if any of the names within <code>options</code> does not match an available option
     * or matches an option that cannot be modified.
     *
     * If any value within <code>options</code> is <code>null</code> and the corresponding {@link Option} has a default
     * value configured, then that default value will be used instead. If an {@link Option} also has a value transformer
     * configured, it will be used to transform whichever value was determined to be used.
     *
     * This method returns whether the value for any of the underlying fields on <code>target</code> were changed as a
     * result.
     *
     * @param {Object.<string, *>} options - the name/value pairs of options to be set
     * @param {Object} target - the object on which the options are to be set
     * @return {boolean} <code>true</code> if any of the underlying fields on <code>target</code> were changed; otherwise
     * <code>false</code>.
     * @throws {Error} If <code>options</code> contains an invalid option name or an option that cannot be modiifed.
     * @public
     * @memberof OptionManager#
     */
    setAll: function(options, target) {
      return this._setAll(options, target);
    },

    _set: function(name, value, target, allowUnmodifiable) {
      var option = this.options[name];
      if (!option) {
        throw new Error('Invalid option: ' + name);
      }
      if (!option.modifiable && !allowUnmodifiable) {
        throw new Error('Option cannot be modified: ' + name);
      }

      return OptionManager._set(option, value, target);
    },

    _setAll: function(options, target, allowUnmodifiable) {
      if (!options) {
        return false;
      }

      var name;
      var changed = false;

      for (name in options) {
        if (Utilities_1.hasOwn(options, name) && this._set(name, options[name], target, allowUnmodifiable)) {
          changed = true;
        }
      }

      return changed;
    }

  }, {

    _createAccessor: function(option, target, changeHandler) {
      var descriptor = {
        get: function() {
          return OptionManager._get(option, target);
        }
      };

      if (option.modifiable) {
        descriptor.set = function(value) {
          if (OptionManager._set(option, value, target)) {
            changeHandler(value, option);
          }
        };
      }

      Object.defineProperty(target, option.name, descriptor);
    },

    _get: function(option, target) {
      return target['_' + option.name];
    },

    _set: function(option, value, target) {
      var fieldName = '_' + option.name;
      var oldValue = target[fieldName];
      var newValue = option.transform(value != null ? value : option.defaultValue);

      target[fieldName] = newValue;

      return newValue !== oldValue;
    }

  });

  var OptionManager_1 = OptionManager;

  /**
   * Called whenever the value of a modifiable {@link Option} is changed on a target object via the defined property's
   * setter.
   *
   * @callback OptionManager~ChangeHandler
   * @param {*} value - the new value for <code>option</code> on the target object
   * @param {Option} option - the modifable {@link Option} whose value has changed on the target object.
   * @return {void}
   */

  /**
   * A basic manager for {@link Service} implementations that are mapped to simple names.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var ServiceManager = lite.extend(function() {
    this._services = {};
  }, {

    /**
     * Returns the {@link Service} being managed with the specified <code>name</code>.
     *
     * @param {string} name - the name of the {@link Service} to be returned
     * @return {Service} The {@link Service} is being managed with <code>name</code>.
     * @throws {Error} If no {@link Service} is being managed with <code>name</code>.
     * @public
     * @memberof ServiceManager#
     */
    getService: function(name) {
      var service = this._services[name];
      if (!service) {
        throw new Error('Service is not being managed with name: ' + name);
      }

      return service;
    },

    /**
     * Sets the {@link Service} implementation to be managed for the specified <code>name</code> to the
     * <code>service</code> provided.
     *
     * @param {string} name - the name of the {@link Service} to be managed with <code>name</code>
     * @param {Service} service - the {@link Service} implementation to be managed
     * @return {void}
     * @throws {Error} If a {@link Service} is already being managed with the same <code>name</code>.
     * @public
     * @memberof ServiceManager#
     */
    setService: function(name, service) {
      if (this._services[name]) {
        throw new Error('Service is already managed with name: ' + name);
      }

      if (service) {
        this._services[name] = service;
      }
    }

  });

  var ServiceManager_1 = ServiceManager;

  var optionManager = new OptionManager_1([
    new Option_1('background', true, 'white'),
    new Option_1('backgroundAlpha', true, 1, Utilities_1.abs),
    new Option_1('element'),
    new Option_1('foreground', true, 'black'),
    new Option_1('foregroundAlpha', true, 1, Utilities_1.abs),
    new Option_1('level', true, 'L', Utilities_1.toUpperCase),
    new Option_1('mime', true, 'image/png'),
    new Option_1('padding', true, null, Utilities_1.abs),
    new Option_1('size', true, 100, Utilities_1.abs),
    new Option_1('value', true, '')
  ]);
  var serviceManager = new ServiceManager_1();

  /**
   * Enables configuration of a QR code generator which uses HTML5 <code>canvas</code> for rendering.
   *
   * @param {QRious~Options} [options] - the options to be used
   * @throws {Error} If any <code>options</code> are invalid.
   * @public
   * @class
   * @extends Nevis
   */
  var QRious = lite.extend(function(options) {
    optionManager.init(options, this, this.update.bind(this));

    var element = optionManager.get('element', this);
    var elementService = serviceManager.getService('element');
    var canvas = element && elementService.isCanvas(element) ? element : elementService.createCanvas();
    var image = element && elementService.isImage(element) ? element : elementService.createImage();

    this._canvasRenderer = new CanvasRenderer_1(this, canvas, true);
    this._imageRenderer = new ImageRenderer_1(this, image, image === element);

    this.update();
  }, {

    /**
     * Returns all of the options configured for this {@link QRious}.
     *
     * Any changes made to the returned object will not be reflected in the options themselves or their corresponding
     * underlying fields.
     *
     * @return {Object.<string, *>} A copy of the applied options.
     * @public
     * @memberof QRious#
     */
    get: function() {
      return optionManager.getAll(this);
    },

    /**
     * Sets all of the specified <code>options</code> and automatically updates this {@link QRious} if any of the
     * underlying fields are changed as a result.
     *
     * This is the preferred method for updating multiple options at one time to avoid unnecessary updates between
     * changes.
     *
     * @param {QRious~Options} options - the options to be set
     * @return {void}
     * @throws {Error} If any <code>options</code> are invalid or cannot be modified.
     * @public
     * @memberof QRious#
     */
    set: function(options) {
      if (optionManager.setAll(options, this)) {
        this.update();
      }
    },

    /**
     * Returns the image data URI for the generated QR code using the <code>mime</code> provided.
     *
     * @param {string} [mime] - the MIME type for the image
     * @return {string} The image data URI for the QR code.
     * @public
     * @memberof QRious#
     */
    toDataURL: function(mime) {
      return this.canvas.toDataURL(mime || this.mime);
    },

    /**
     * Updates this {@link QRious} by generating a new {@link Frame} and re-rendering the QR code.
     *
     * @return {void}
     * @protected
     * @memberof QRious#
     */
    update: function() {
      var frame = new Frame_1({
        level: this.level,
        value: this.value
      });

      this._canvasRenderer.render(frame);
      this._imageRenderer.render(frame);
    }

  }, {

    /**
     * Configures the <code>service</code> provided to be used by all {@link QRious} instances.
     *
     * @param {Service} service - the {@link Service} to be configured
     * @return {void}
     * @throws {Error} If a {@link Service} has already been configured with the same name.
     * @public
     * @static
     * @memberof QRious
     */
    use: function(service) {
      serviceManager.setService(service.getName(), service);
    }

  });

  Object.defineProperties(QRious.prototype, {

    canvas: {
      /**
       * Returns the <code>canvas</code> element being used to render the QR code for this {@link QRious}.
       *
       * @return {*} The <code>canvas</code> element.
       * @public
       * @memberof QRious#
       * @alias canvas
       */
      get: function() {
        return this._canvasRenderer.getElement();
      }
    },

    image: {
      /**
       * Returns the <code>img</code> element being used to render the QR code for this {@link QRious}.
       *
       * @return {*} The <code>img</code> element.
       * @public
       * @memberof QRious#
       * @alias image
       */
      get: function() {
        return this._imageRenderer.getElement();
      }
    }

  });

  var QRious_1$2 = QRious;

  /**
   * The options used by {@link QRious}.
   *
   * @typedef {Object} QRious~Options
   * @property {string} [background="white"] - The background color to be applied to the QR code.
   * @property {number} [backgroundAlpha=1] - The background alpha to be applied to the QR code.
   * @property {*} [element] - The element to be used to render the QR code which may either be an <code>canvas</code> or
   * <code>img</code>. The element(s) will be created if needed.
   * @property {string} [foreground="black"] - The foreground color to be applied to the QR code.
   * @property {number} [foregroundAlpha=1] - The foreground alpha to be applied to the QR code.
   * @property {string} [level="L"] - The error correction level to be applied to the QR code.
   * @property {string} [mime="image/png"] - The MIME type to be used to render the image for the QR code.
   * @property {number} [padding] - The padding for the QR code in pixels.
   * @property {number} [size=100] - The size of the QR code in pixels.
   * @property {string} [value=""] - The value to be encoded within the QR code.
   */

  var index = QRious_1$2;

  /**
   * Defines a service contract that must be met by all implementations.
   *
   * @public
   * @class
   * @extends Nevis
   */
  var Service = lite.extend({

    /**
     * Returns the name of this {@link Service}.
     *
     * @return {string} The service name.
     * @public
     * @abstract
     * @memberof Service#
     */
    getName: function() {}

  });

  var Service_1 = Service;

  /**
   * A service for working with elements.
   *
   * @public
   * @class
   * @extends Service
   */
  var ElementService = Service_1.extend({

    /**
     * Creates an instance of a canvas element.
     *
     * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
     *
     * @return {*} The newly created canvas element.
     * @public
     * @abstract
     * @memberof ElementService#
     */
    createCanvas: function() {},

    /**
     * Creates an instance of a image element.
     *
     * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
     *
     * @return {*} The newly created image element.
     * @public
     * @abstract
     * @memberof ElementService#
     */
    createImage: function() {},

    /**
     * @override
     */
    getName: function() {
      return 'element';
    },

    /**
     * Returns whether the specified <code>element</code> is a canvas.
     *
     * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
     *
     * @param {*} element - the element to be checked
     * @return {boolean} <code>true</code> if <code>element</code> is a canvas; otherwise <code>false</code>.
     * @public
     * @abstract
     * @memberof ElementService#
     */
    isCanvas: function(element) {},

    /**
     * Returns whether the specified <code>element</code> is an image.
     *
     * Implementations of {@link ElementService} <b>must</b> override this method with their own specific logic.
     *
     * @param {*} element - the element to be checked
     * @return {boolean} <code>true</code> if <code>element</code> is an image; otherwise <code>false</code>.
     * @public
     * @abstract
     * @memberof ElementService#
     */
    isImage: function(element) {}

  });

  var ElementService_1 = ElementService;

  /**
   * An implementation of {@link ElementService} intended for use within a browser environment.
   *
   * @public
   * @class
   * @extends ElementService
   */
  var BrowserElementService = ElementService_1.extend({

    /**
     * @override
     */
    createCanvas: function() {
      return document.createElement('canvas');
    },

    /**
     * @override
     */
    createImage: function() {
      return document.createElement('img');
    },

    /**
     * @override
     */
    isCanvas: function(element) {
      return element instanceof HTMLCanvasElement;
    },

    /**
     * @override
     */
    isImage: function(element) {
      return element instanceof HTMLImageElement;
    }

  });

  var BrowserElementService_1 = BrowserElementService;

  index.use(new BrowserElementService_1());

  var QRious_1 = index;

  return QRious_1;

})));

//# sourceMappingURL=qrious.js.map

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Game.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:55:56 PM
 * @Description:
 */
var preact_1 = __webpack_require__(0);
var components_1 = __webpack_require__(3);
var WorldDetails_1 = __webpack_require__(72);
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            infoActors: [],
            bound: {},
            baseInfo: {},
            worlds: [],
            details: { type: 'bound', item: null }
        };
        _this.handleSelectActor = function (item) {
            _this.setState({ details: { type: 'actor', item: item } });
        };
        _this.handleSelectWorld = function (item) {
            _this.setState({ details: { type: 'world', item: item } });
        };
        return _this;
    }
    Game.prototype.componentDidMount = function () {
        this.calcState();
    };
    Game.prototype.componentWillUnmount = function () { };
    Game.prototype.calcState = function () {
        var game = this.props.actor.getGame();
        var infoActors = game.actors.array;
        var result = [];
        infoActors.filter(function (item) { return item; });
        result = infoActors.map(function (item) {
            return { name: item.name.value, value: item.className.value };
        });
        var _a = game, name = _a.name, devMode = _a.devMode, bound = _a.bound, worlds = _a._worldsMeta;
        var baseInfo = { 'Game Name': name.value, 'Dev Mode': devMode };
        var left = bound.left, right = bound.right, top = bound.top, bottom = bound.bottom, width = bound.width, height = bound.height;
        this.setState({
            bound: { left: left, right: right, top: top, bottom: bottom, width: width, height: height },
            infoActors: result,
            baseInfo: baseInfo,
            worlds: Object.keys(worlds).map(function (name) { return ({
                name: name,
                value: worlds[name].GameMode.CLASS_NAME.value
            }); })
        });
    };
    Game.prototype.render = function () {
        var _a = this.state, infoActors = _a.infoActors, bound = _a.bound, worlds = _a.worlds;
        return (preact_1.h(components_1.WithDetails, { main: preact_1.h(preact_1.Fragment, null,
                this.renderBase(),
                preact_1.h(components_1.List, { key: 'Bound', label: 'Bound', list: bound }),
                preact_1.h(components_1.List, { key: 'Worlds', onSelect: this.handleSelectWorld, label: 'Worlds', close: false, list: worlds }),
                preact_1.h(components_1.List, { key: 'infoActors', onSelect: this.handleSelectActor, label: 'infoActors', close: false, list: infoActors })), details: this.renderDetails() }));
    };
    Game.prototype.renderBase = function () {
        var baseInfo = this.state.baseInfo;
        var rs = [];
        for (var key in baseInfo) {
            if (baseInfo.hasOwnProperty(key)) {
                var element = baseInfo[key];
                if (element) {
                    rs.push(preact_1.h(components_1.Information, { label: key, value: element }));
                }
            }
        }
        return rs;
    };
    Game.prototype.renderDetails = function () {
        if (this.state.details.type === 'actor') {
            return this.renderActorDetails(this.state.details.item);
        }
        if (this.state.details.type === 'world') {
            return (preact_1.h(WorldDetails_1.default, { actor: this.props.actor, worldName: this.state.details.item.name }));
        }
        return null;
    };
    Game.prototype.renderActorDetails = function (item) {
        return null;
    };
    return Game;
}(preact_1.Component));
exports.default = Game;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : WorldDetails.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 10/15/2019, 2:48:26 PM
 * @Description:
 */
var preact_1 = __webpack_require__(0);
var components_1 = __webpack_require__(3);
var WorldDetails = /** @class */ (function (_super) {
    __extends(WorldDetails, _super);
    function WorldDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorldDetails.prototype.render = function () {
        var game = this.props.actor.getGame();
        var name = this.props.worldName;
        var levels = game._worldsMeta[name].levels;
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Information, { label: 'Name', value: 'name' }),
            game.world.name.equalsTo(name) ? (preact_1.h(components_1.Button, { label: 'Current World' })) : (preact_1.h(components_1.Button, { label: 'Switch to world', onButtonClick: function () { return game.switchWorld(name); } })),
            preact_1.h(components_1.List, { label: 'Levels', list: levels, close: false })));
    };
    return WorldDetails;
}(preact_1.Component));
exports.default = WorldDetails;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Level.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:56:03 PM
 * @Description:
 */
var preact_1 = __webpack_require__(0);
var Sein = __webpack_require__(4);
var ComponentDetails_1 = __webpack_require__(74);
var components_1 = __webpack_require__(3);
var Level = /** @class */ (function (_super) {
    __extends(Level, _super);
    function Level() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            name: '',
            sceneActors: [],
            currentDetailsObj: null
        };
        _this.renderDetails = function () {
            return (preact_1.h(ComponentDetails_1.default, { actor: _this.props.actor, component: _this.state.currentDetailsObj }));
        };
        return _this;
    }
    Level.prototype.componentDidMount = function () {
        var _this = this;
        var game = this.props.actor.getGame();
        var level = game.world.level;
        var name = level.name;
        // SceneActor
        var sceneActors = level.actors;
        this.setState({
            name: name.value,
            sceneActors: sceneActors.findAllByFilter(function (actor) { return !_this.props.actor.isHidden(actor); })
        });
    };
    Level.prototype.render = function () {
        var _this = this;
        var _a = this.state, name = _a.name, sceneActors = _a.sceneActors;
        return (preact_1.h(components_1.WithDetails, { main: preact_1.h(preact_1.Fragment, null,
                preact_1.h(components_1.Information, { label: 'Level Name', value: name }),
                preact_1.h(components_1.Group, { name: 'SceneActors', isClose: false }, sceneActors.map(function (actor) {
                    return (preact_1.h(components_1.Folder, { label: actor.name.value, value: actor.className.value, close: true },
                        _this.renderSceneComponents(actor.root),
                        _this.renderComponents(actor)));
                }))), details: this.renderDetails() }));
    };
    Level.prototype.renderSceneComponents = function (root) {
        var _this = this;
        if (!root) {
            return;
        }
        if (root.children.length === 0) {
            return (preact_1.h(components_1.Information, { label: root.name.value, value: root.className.value, onTrigger: function () {
                    return _this.setState({ currentDetailsObj: root });
                } }));
        }
        return (preact_1.h(components_1.Folder, { label: root.name.value, value: root.className.value, close: true, onTrigger: function () {
                return _this.setState({ currentDetailsObj: root });
            } }, root.children.array.map(function (c) { return _this.renderSceneComponents(c); })));
    };
    Level.prototype.renderComponents = function (actor) {
        var _this = this;
        if (!actor) {
            return;
        }
        var components = actor.findComponentsByFilter(function (c) { return !Sein.isSceneComponent(c); });
        return components.map(function (component) {
            return (preact_1.h(components_1.Information, { label: component.name.value, value: component.className.value, onTrigger: function () {
                    return _this.setState({ currentDetailsObj: component });
                } }));
        });
    };
    return Level;
}(preact_1.Component));
exports.default = Level;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var editor_1 = __webpack_require__(75);
var ComponentDetails = /** @class */ (function (_super) {
    __extends(ComponentDetails, _super);
    function ComponentDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentDetails.prototype.render = function () {
        var game = this.props.actor.getGame();
        var component = this.props.component;
        var Editor = editor_1.getEditorForComponent(component);
        return preact_1.h(Editor, { component: component });
    };
    return ComponentDetails;
}(preact_1.Component));
exports.default = ComponentDetails;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(76);
var ComponentEditor_1 = __webpack_require__(77);
var SceneEditor_1 = __webpack_require__(80);
var AnimatorEditor_1 = __webpack_require__(85);
var RigidBodyEditor_1 = __webpack_require__(88);
var BSPBoxColliderEditor_1 = __webpack_require__(91);
var SphereColliderEditor_1 = __webpack_require__(94);
var PerspectiveCameraEditor_1 = __webpack_require__(97);
var OrthographicCameraEditor_1 = __webpack_require__(100);
var DirectionalLightEditor_1 = __webpack_require__(103);
var AmbientLightEditor_1 = __webpack_require__(106);
var PointLightEditor_1 = __webpack_require__(109);
var SpotLightEditor_1 = __webpack_require__(112);
var PrimitiveEditor_1 = __webpack_require__(115);
var Sein = __webpack_require__(4);
function getEditorForComponent(component) {
    if (!component) {
        return ComponentEditor_1.default;
    }
    var Editor;
    if (Sein.isAnimatorComponent(component)) {
        Editor = AnimatorEditor_1.default;
    }
    else if (Sein.isRigidBodyComponent(component)) {
        Editor = RigidBodyEditor_1.default;
    }
    else if (Sein.isBoxColliderComponent(component)) {
        Editor = BSPBoxColliderEditor_1.default;
    }
    else if (Sein.isSphereColliderComponent(component)) {
        Editor = SphereColliderEditor_1.default;
    }
    else if (Sein.isPerspectiveCameraComponent(component)) {
        Editor = PerspectiveCameraEditor_1.default;
    }
    else if (Sein.isOrthographicCameraComponent(component)) {
        Editor = OrthographicCameraEditor_1.default;
    }
    else if (Sein.isDirectionalLightComponent(component)) {
        Editor = DirectionalLightEditor_1.default;
    }
    else if (Sein.isAmbientLightComponent(component)) {
        Editor = AmbientLightEditor_1.default;
    }
    else if (Sein.isPointLightComponent(component)) {
        Editor = PointLightEditor_1.default;
    }
    else if (Sein.isSpotLightComponent(component)) {
        Editor = SpotLightEditor_1.default;
    }
    else if (Sein.isPrimitiveComponent(component)) {
        Editor = PrimitiveEditor_1.default;
    }
    else if (Sein.Audio && Sein.Audio.isSourceComponent(component)) {
        Editor = SceneEditor_1.default;
    }
    else if (Sein.Audio && Sein.Audio.isListenerComponent(component)) {
        Editor = SceneEditor_1.default;
    }
    else if (Sein.isSceneComponent(component)) {
        Editor = SceneEditor_1.default;
    }
    // Todo
    // SpriteComponent
    else {
        Editor = ComponentEditor_1.default;
    }
    return Editor;
}
exports.getEditorForComponent = getEditorForComponent;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

(function() { module.exports = window["Sein.Audio"]; }());

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: Component.tsx
 * @Author: dtysky(dtysky@outlook.com)
 * @Date: 2019-09-09 14:52:36
 * @LastEditTime: 2019-09-11 21:12:24
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(78);
var ComponentEditor = /** @class */ (function (_super) {
    __extends(ComponentEditor, _super);
    function ComponentEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComponentEditor.prototype.render = function () {
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-ambienteditor-container' }));
    };
    return ComponentEditor;
}(preact_1.Component));
exports.default = ComponentEditor;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component{height:auto;border-left:0}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-ambienteditor-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-ambienteditor-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-ambienteditor-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-ambienteditor-detail .sein-inspector-button{flex:1}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-ambienteditor-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: SceneComponentEditor.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-06 15:28:00
 * @LastEditTime: 2019-10-28 19:11:49
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(81);
var components_1 = __webpack_require__(3);
var Sein = __webpack_require__(4);
var InfoTab_1 = __webpack_require__(5);
var SceneComponentEditor = /** @class */ (function (_super) {
    __extends(SceneComponentEditor, _super);
    function SceneComponentEditor() {
        var _this = _super.call(this) || this;
        _this.onXRangeInput = function (value) {
            var component = _this.props.component;
            component.position.x = value;
        };
        _this.onYRangeInput = function (value) {
            var component = _this.props.component;
            component.position.y = value;
        };
        _this.onZRangeInput = function (value) {
            var component = _this.props.component;
            component.position.z = value;
        };
        _this.onScaleXInput = function (value) {
            var component = _this.props.component;
            component.scaleX = value;
        };
        _this.onScaleYInput = function (value) {
            var component = _this.props.component;
            component.scaleY = value;
        };
        _this.onScaleZInput = function (value) {
            var component = _this.props.component;
            component.scaleZ = value;
        };
        _this.onRotationXInput = function (value) {
            var component = _this.props.component;
            component.rotationX = Sein.degToRad(value);
        };
        _this.onRotationYInput = function (value) {
            var component = _this.props.component;
            component.rotationY = Sein.degToRad(value);
        };
        _this.onRotationZInput = function (value) {
            var component = _this.props.component;
            component.rotationZ = Sein.degToRad(value);
        };
        _this.onCheckedChange = function (visible) {
            // console.log(visible);
            var component = _this.props.component;
            component.visible = visible;
        };
        return _this;
    }
    SceneComponentEditor.prototype.componentDidMount = function () { };
    SceneComponentEditor.prototype.getPrivate = function (component) {
        var visible = component.visible;
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Switch, { label: 'visible', checked: visible, onCheckedChange: this.onCheckedChange })));
    };
    SceneComponentEditor.prototype.getTransform = function (component) {
        var x = component.x, y = component.y, z = component.z, scaleX = component.scaleX, scaleY = component.scaleY, scaleZ = component.scaleZ, rotationX = component.rotationX, rotationY = component.rotationY, rotationZ = component.rotationZ;
        var bounds = component.getBounds(null, null);
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Information, { label: 'bounds.x', value: "[" + bounds.xMax.toFixed(2) + ", " + bounds.xMin.toFixed(2) + "]" }),
            preact_1.h(components_1.Information, { label: 'bounds.y', value: "[" + bounds.yMax.toFixed(2) + ", " + bounds.yMin.toFixed(2) + "]" }),
            preact_1.h(components_1.Information, { label: 'bounds.z', value: "[" + bounds.zMax.toFixed(2) + ", " + bounds.zMin.toFixed(2) + "]" }),
            preact_1.h(components_1.Range, { label: 'position.x', value: x, min: -20, max: 20, step: 0.01, onRangeInput: this.onXRangeInput }),
            preact_1.h(components_1.Range, { label: 'position.y', value: y, min: -20, max: 20, step: 0.01, onRangeInput: this.onYRangeInput }),
            preact_1.h(components_1.Range, { label: 'positin.z', value: z, min: -20, max: 20, step: 0.01, onRangeInput: this.onZRangeInput }),
            preact_1.h(components_1.Range, { label: 'scaleX', value: scaleX, min: 0, max: 3, step: 0.01, onRangeInput: this.onScaleXInput }),
            preact_1.h(components_1.Range, { label: 'scaleY', value: scaleY, min: 0, max: 3, step: 0.01, onRangeInput: this.onScaleYInput }),
            preact_1.h(components_1.Range, { label: 'scaleZ', value: scaleZ, min: 0, max: 3, step: 0.01, onRangeInput: this.onScaleZInput }),
            preact_1.h(components_1.Range, { label: 'rotationX', value: rotationX, min: -180, max: 180, step: 0.01, onRangeInput: this.onRotationXInput }),
            preact_1.h(components_1.Range, { label: 'rotationY', value: rotationY, min: -180, max: 180, step: 0.01, onRangeInput: this.onRotationYInput }),
            preact_1.h(components_1.Range, { label: 'rotationZ', value: rotationZ, min: -180, max: 180, step: 0.01, onRangeInput: this.onRotationZInput })));
    };
    SceneComponentEditor.prototype.render = function () {
        var component = this.props.component;
        // console.log(component);
        // 是否是SceneComponent类型
        if (!Sein.isSceneComponent(component)) {
            return null;
        }
        return (preact_1.h(InfoTab_1.default, { hideGeometry: true, hideMaterials: true, private: this.getPrivate(component), transform: this.getTransform(component) }));
    };
    return SceneComponentEditor;
}(preact_1.Component));
exports.default = SceneComponentEditor;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-sceditor-container.sein-inspector-component{height:auto;border-left:0}.sein-inspector-container .sein-inspector-sceditor-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-sceditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-sceditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-sceditor-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-sceditor-container.sein-inspector-component .sein-inspector-sceditor-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-sceditor-container.sein-inspector-component .sein-inspector-sceditor-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-sceditor-container.sein-inspector-component .sein-inspector-sceditor-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-infotab-container.sein-inspector-component{height:auto;border-left:0;padding-top:0;margin-top:-1px}.sein-inspector-container .sein-inspector-infotab-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-infotab-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-infotab-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-infotab-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-infotab-container.sein-inspector-component .sein-inspector-infotab-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-infotab-container.sein-inspector-component .sein-inspector-infotab-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-infotab-container.sein-inspector-component .sein-inspector-infotab-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: AnimatorComponentEditor.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-09 14:52:36
 * @LastEditTime: 2019-09-09 17:24:15
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(86);
var components_1 = __webpack_require__(3);
var Sein = __webpack_require__(4);
var AnimatorComponentEditor = /** @class */ (function (_super) {
    __extends(AnimatorComponentEditor, _super);
    function AnimatorComponentEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            options: [],
            current: ''
        };
        _this.onSelectChange = function (value) {
            var component = _this.props.component;
            component.stop();
            component.play(value);
            _this.setState({ current: value });
        };
        _this.playAnimation = function () {
            var component = _this.props.component;
            var current = _this.state.current;
            component.play(current);
        };
        _this.pauseAnimation = function () {
            var component = _this.props.component;
            component.pause();
        };
        _this.stopAnimation = function () {
            var component = _this.props.component;
            component.stop();
        };
        _this.resumeAnimation = function () {
            var component = _this.props.component;
            component.resume();
        };
        return _this;
    }
    AnimatorComponentEditor.prototype.componentDidMount = function () {
        var component = this.props.component;
        var options = component.animationNames.map(function (item) {
            return {
                text: item,
                value: item,
                selected: component.current === item
            };
        });
        // console.log(options);
        this.setState({
            options: options
        });
    };
    AnimatorComponentEditor.prototype.render = function () {
        var component = this.props.component;
        var options = this.state.options;
        // 是否是AnimatorComponent类型
        if (!Sein.isAnimatorComponent(component)) {
            return null;
        }
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-animatoreditor-container' },
            preact_1.h("div", { className: 'sein-inspector-animatoreditor-detail' },
                preact_1.h(components_1.Select, { label: '当前播放的动画名称', options: options, onSelectChange: this.onSelectChange }),
                preact_1.h(components_1.Button, { label: 'play', onButtonClick: this.playAnimation }),
                preact_1.h(components_1.Button, { label: 'pause', onButtonClick: this.pauseAnimation }),
                preact_1.h(components_1.Button, { label: 'resume', onButtonClick: this.resumeAnimation }),
                preact_1.h(components_1.Button, { label: 'stop', onButtonClick: this.stopAnimation }))));
    };
    return AnimatorComponentEditor;
}(preact_1.Component));
exports.default = AnimatorComponentEditor;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component{height:auto;border-left:0}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-animatoreditor-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-animatoreditor-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-animatoreditor-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-animatoreditor-detail .sein-inspector-button{flex:1}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-animatoreditor-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: RigidBodyComponentEditor.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-09 14:52:36
 * @LastEditTime: 2019-09-17 17:57:39
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(89);
var components_1 = __webpack_require__(3);
var Sein = __webpack_require__(4);
var RigidBodyComponentEditor = /** @class */ (function (_super) {
    __extends(RigidBodyComponentEditor, _super);
    function RigidBodyComponentEditor() {
        var _this = _super.call(this) || this;
        _this.onSleepChange = function (value) {
            var component = _this.props.component;
            if (!value) {
                component.sleep();
            }
            else {
                component.wakeUp();
            }
        };
        _this.onEnAbleChange = function (value) {
            var component = _this.props.component;
            if (value) {
                component.enable();
            }
            else {
                component.disable();
            }
        };
        _this.onMassInput = function (value) {
            var component = _this.props.component;
            component.mass = value;
        };
        _this.onRestitutionInput = function (value) {
            var component = _this.props.component;
            component.restitution = value;
        };
        _this.onFrictionInput = function (value) {
            var component = _this.props.component;
            component.friction = value;
        };
        _this.setState({
            options: []
        });
        return _this;
    }
    RigidBodyComponentEditor.prototype.componentDidMount = function () {
        // const { component } = this.props;
    };
    RigidBodyComponentEditor.prototype.render = function () {
        var component = this.props.component;
        if (component.className.value === 'RigidBodyComponent') {
            // console.log(component);
        }
        // 是否是RigidBodyComponent类型
        if (!Sein.isRigidBodyComponent(component)) {
            return null;
        }
        var sleep = component.sleep, enable = component.enable, mass = component.mass, restitution = component.restitution, friction = component.friction;
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-rigidbodyeditor-container' },
            preact_1.h("div", { className: 'sein-inspector-rigidbodyeditor-detail' },
                preact_1.h(components_1.Switch, { label: 'sleep', checked: sleep ? true : false, onCheckedChange: this.onSleepChange }),
                preact_1.h(components_1.Switch, { label: 'enable', checked: enable ? true : false, onCheckedChange: this.onEnAbleChange }),
                preact_1.h(components_1.Range, { label: 'mass', value: mass, min: 0, max: 1, step: 0.001, onRangeInput: this.onMassInput }),
                restitution && (preact_1.h(components_1.Range, { label: 'restitution', value: restitution, min: 0, max: 1, step: 0.001, onRangeInput: this.onRestitutionInput })),
                friction && (preact_1.h(components_1.Range, { label: 'friction', value: friction, min: 0, max: 1, step: 0.001, onRangeInput: this.onFrictionInput })))));
    };
    return RigidBodyComponentEditor;
}(preact_1.Component));
exports.default = RigidBodyComponentEditor;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-rigidbodyeditor-container.sein-inspector-component{height:auto;border-left:0}.sein-inspector-container .sein-inspector-rigidbodyeditor-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-rigidbodyeditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-rigidbodyeditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-rigidbodyeditor-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-rigidbodyeditor-container.sein-inspector-component .sein-inspector-rigidbodyeditor-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-rigidbodyeditor-container.sein-inspector-component .sein-inspector-rigidbodyeditor-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-rigidbodyeditor-container.sein-inspector-component .sein-inspector-rigidbodyeditor-detail .sein-inspector-button{flex:1}.sein-inspector-container .sein-inspector-rigidbodyeditor-container.sein-inspector-component .sein-inspector-rigidbodyeditor-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: BoxColliderComponentEditor.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-09 14:52:36
 * @LastEditTime: 2019-09-13 10:46:52
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(92);
var components_1 = __webpack_require__(3);
var Sein = __webpack_require__(4);
var BoxColliderComponentEditor = /** @class */ (function (_super) {
    __extends(BoxColliderComponentEditor, _super);
    function BoxColliderComponentEditor() {
        var _this = _super.call(this) || this;
        _this.onVisibleChange = function (value) {
            var component = _this.props.component;
            _this.colliderShape.visible = value;
        };
        _this.setState({
            options: []
        });
        return _this;
    }
    BoxColliderComponentEditor.prototype.componentDidMount = function () {
        var component = this.props.component;
        var box = component.getOwner().root;
        var size = component.initState.size;
        this.colliderShape = component
            .getWorld()
            .addActor('boxEditor', Sein.BSPBoxActor, {
            width: size[0],
            height: size[1],
            depth: size[2],
            position: box.position.clone(),
            visible: false,
            material: new Sein.BasicMaterial({
                wireframe: true,
                diffuse: new Sein.Color(1, 0, 0)
            })
        });
        this.update();
    };
    BoxColliderComponentEditor.prototype.update = function () {
        var _this = this;
        this.raf = requestAnimationFrame(function () {
            _this.update();
        });
        var component = this.props.component;
        var box = component.getOwner().root;
        var rotation = box.rotation, scale = box.scale, position = box.position;
        // console.log(rotation, scale, position);
        this.colliderShape.transform.rotation = rotation.clone();
        this.colliderShape.transform.scale = scale.clone();
        this.colliderShape.transform.position = position.clone();
    };
    BoxColliderComponentEditor.prototype.componentWillUnmount = function () {
        this.colliderShape.removeFromParent();
        cancelAnimationFrame(this.raf);
    };
    BoxColliderComponentEditor.prototype.render = function () {
        var component = this.props.component;
        // 是否是BoxColliderComponent类型
        if (!Sein.isBoxColliderComponent(component)) {
            return null;
        }
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-boxcollidereditor-container' },
            preact_1.h("div", { className: 'sein-inspector-boxcollidereditor-detail' },
                preact_1.h(components_1.Switch, { label: '是否显示', checked: false, onCheckedChange: this.onVisibleChange }))));
    };
    return BoxColliderComponentEditor;
}(preact_1.Component));
exports.default = BoxColliderComponentEditor;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component{height:auto;border-left:0}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-boxcollidereditor-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-boxcollidereditor-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-boxcollidereditor-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-boxcollidereditor-detail .sein-inspector-button{flex:1}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-boxcollidereditor-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: SphereColliderComponentEditor.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-09 14:52:36
 * @LastEditTime: 2019-09-11 14:44:40
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(95);
var components_1 = __webpack_require__(3);
var Sein = __webpack_require__(4);
var SphereColliderComponentEditor = /** @class */ (function (_super) {
    __extends(SphereColliderComponentEditor, _super);
    function SphereColliderComponentEditor() {
        var _this = _super.call(this) || this;
        _this.onVisibleChange = function (value) {
            var component = _this.props.component;
            console.log(component.getOwner());
            _this.colliderShape.visible = value;
        };
        _this.setState({
            options: []
        });
        return _this;
    }
    SphereColliderComponentEditor.prototype.componentDidMount = function () {
        var component = this.props.component;
        var box = component.getOwner().root;
        var radius = component.initState.radius;
        this.colliderShape = component
            .getWorld()
            .addActor('boxEditor', Sein.BSPSphereActor, {
            radius: radius,
            position: box.position.clone(),
            visible: false,
            material: new Sein.BasicMaterial({
                wireframe: true,
                diffuse: new Sein.Color(1, 0, 0)
            })
        });
        this.update();
    };
    SphereColliderComponentEditor.prototype.update = function () {
        var _this = this;
        this.raf = requestAnimationFrame(function () {
            _this.update();
        });
        var component = this.props.component;
        var box = component.getOwner().root;
        var rotation = box.rotation, scale = box.scale, position = box.position;
        // console.log(rotation, scale, position);
        this.colliderShape.transform.rotation = rotation.clone();
        this.colliderShape.transform.scale = scale.clone();
        this.colliderShape.transform.position = position.clone();
    };
    SphereColliderComponentEditor.prototype.componentWillUnmount = function () {
        this.colliderShape.removeFromParent();
        cancelAnimationFrame(this.raf);
    };
    SphereColliderComponentEditor.prototype.render = function () {
        var component = this.props.component;
        // 是否是SphereColliderComponent类型
        if (!Sein.isSphereColliderComponent(component)) {
            return null;
        }
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-boxcollidereditor-container' },
            preact_1.h("div", { className: 'sein-inspector-boxcollidereditor-detail' },
                preact_1.h(components_1.Switch, { label: '是否显示', checked: false, onCheckedChange: this.onVisibleChange }))));
    };
    return SphereColliderComponentEditor;
}(preact_1.Component));
exports.default = SphereColliderComponentEditor;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component{height:auto;border-left:0}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-boxcollidereditor-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-boxcollidereditor-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-boxcollidereditor-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-boxcollidereditor-detail .sein-inspector-button{flex:1}.sein-inspector-container .sein-inspector-boxcollidereditor-container.sein-inspector-component .sein-inspector-boxcollidereditor-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: CameraComponentEditor.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-06 15:28:00
 * @LastEditTime: 2019-09-11 21:11:22
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(98);
var components_1 = __webpack_require__(3);
var Sein = __webpack_require__(4);
var PerspectiveCameraComponentEditor = /** @class */ (function (_super) {
    __extends(PerspectiveCameraComponentEditor, _super);
    function PerspectiveCameraComponentEditor() {
        var _this = _super.call(this) || this;
        _this.onXRangeInput = function (value) {
            var component = _this.props.component;
            component.position.x = value;
        };
        _this.onNearInput = function (value) {
            var component = _this.props.component;
            component.near = value;
        };
        _this.onFarInput = function (value) {
            var component = _this.props.component;
            component.far = value;
        };
        _this.onFovInput = function (value) {
            var component = _this.props.component;
            component.fov = value;
        };
        _this.onAspectInput = function (value) {
            var component = _this.props.component;
            component.aspect = value;
        };
        _this.onYRangeInput = function (value) {
            var component = _this.props.component;
            component.position.y = value;
        };
        _this.onZRangeInput = function (value) {
            var component = _this.props.component;
            component.position.z = value;
        };
        _this.onScaleXInput = function (value) {
            var component = _this.props.component;
            component.scaleX = value;
        };
        _this.onScaleYInput = function (value) {
            var component = _this.props.component;
            component.scaleY = value;
        };
        _this.onScaleZInput = function (value) {
            var component = _this.props.component;
            component.scaleZ = value;
        };
        _this.onRotationXInput = function (value) {
            var component = _this.props.component;
            component.rotationX = Sein.degToRad(value);
        };
        _this.onRotationYInput = function (value) {
            var component = _this.props.component;
            component.rotationY = Sein.degToRad(value);
        };
        _this.onRotationZInput = function (value) {
            var component = _this.props.component;
            component.rotationZ = Sein.degToRad(value);
        };
        _this.onCheckedChange = function (visible) {
            // console.log(visible);
            var component = _this.props.component;
            component.visible = visible;
        };
        return _this;
    }
    PerspectiveCameraComponentEditor.prototype.componentDidMount = function () { };
    PerspectiveCameraComponentEditor.prototype.render = function () {
        var component = this.props.component;
        // 是否是CameraComponent类型
        if (!component.isPerspectiveCameraComponent) {
            return null;
        }
        var fov = component.fov, near = component.near, far = component.far, aspect = component.aspect, x = component.x, y = component.y, z = component.z, scaleX = component.scaleX, scaleY = component.scaleY, scaleZ = component.scaleZ, rotationX = component.rotationX, rotationY = component.rotationY, rotationZ = component.rotationZ;
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-cameraeditor-container' },
            preact_1.h("div", { className: 'sein-inspector-cameraeditor-detail' },
                preact_1.h(components_1.Range, { label: 'aspect', value: aspect, min: 0, max: 5, step: 0.001, onRangeInput: this.onAspectInput }),
                preact_1.h(components_1.Range, { label: 'fov', value: fov, min: 0, max: 180, step: 0.01, onRangeInput: this.onFovInput }),
                preact_1.h(components_1.Range, { label: 'near', value: near, min: 0, max: 100, step: 1, onRangeInput: this.onNearInput }),
                preact_1.h(components_1.Range, { label: 'far', value: far, min: 0, max: 1000, step: 1, onRangeInput: this.onFarInput }),
                preact_1.h(components_1.Range, { label: 'position.x', value: x, min: -20, max: 20, step: 0.01, onRangeInput: this.onXRangeInput }),
                preact_1.h(components_1.Range, { label: 'position.y', value: y, min: -20, max: 20, step: 0.01, onRangeInput: this.onYRangeInput }),
                preact_1.h(components_1.Range, { label: 'positin.z', value: z, min: -20, max: 20, step: 0.01, onRangeInput: this.onZRangeInput }),
                preact_1.h(components_1.Range, { label: 'scaleX', value: scaleX, min: 0, max: 3, step: 0.01, onRangeInput: this.onScaleXInput }),
                preact_1.h(components_1.Range, { label: 'scaleY', value: scaleY, min: 0, max: 3, step: 0.01, onRangeInput: this.onScaleYInput }),
                preact_1.h(components_1.Range, { label: 'scaleZ', value: scaleZ, min: 0, max: 3, step: 0.01, onRangeInput: this.onScaleZInput }),
                preact_1.h(components_1.Range, { label: 'rotationX', value: rotationX, min: -180, max: 180, step: 0.01, onRangeInput: this.onRotationXInput }),
                preact_1.h(components_1.Range, { label: 'rotationY', value: rotationY, min: -180, max: 180, step: 0.01, onRangeInput: this.onRotationYInput }),
                preact_1.h(components_1.Range, { label: 'rotationZ', value: rotationZ, min: -180, max: 180, step: 0.01, onRangeInput: this.onRotationZInput }))));
    };
    return PerspectiveCameraComponentEditor;
}(preact_1.Component));
exports.default = PerspectiveCameraComponentEditor;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-cameraeditor-container.sein-inspector-component{height:auto;border-left:0}.sein-inspector-container .sein-inspector-cameraeditor-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-cameraeditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-cameraeditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-cameraeditor-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-cameraeditor-container.sein-inspector-component .sein-inspector-cameraeditor-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-cameraeditor-container.sein-inspector-component .sein-inspector-cameraeditor-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-cameraeditor-container.sein-inspector-component .sein-inspector-cameraeditor-detail .sein-inspector-button{flex:1}.sein-inspector-container .sein-inspector-cameraeditor-container.sein-inspector-component .sein-inspector-cameraeditor-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: OrthographicCameraComponent.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-06 15:28:00
 * @LastEditTime: 2019-09-11 16:57:01
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(101);
var components_1 = __webpack_require__(3);
var Sein = __webpack_require__(4);
var OrthographicCameraComponentEditor = /** @class */ (function (_super) {
    __extends(OrthographicCameraComponentEditor, _super);
    function OrthographicCameraComponentEditor() {
        var _this = _super.call(this) || this;
        _this.onXRangeInput = function (value) {
            var component = _this.props.component;
            component.position.x = value;
        };
        _this.onNearInput = function (value) {
            var component = _this.props.component;
            component.near = value;
        };
        _this.onFarInput = function (value) {
            var component = _this.props.component;
            component.far = value;
        };
        _this.onRightInput = function (value) {
            var component = _this.props.component;
            component.right = value;
        };
        _this.onLeftInput = function (value) {
            var component = _this.props.component;
            component.left = value;
        };
        _this.onBottomInput = function (value) {
            var component = _this.props.component;
            component.bottom = value;
        };
        _this.onTopInput = function (value) {
            var component = _this.props.component;
            component.top = value;
        };
        _this.onYRangeInput = function (value) {
            var component = _this.props.component;
            component.position.y = value;
        };
        _this.onZRangeInput = function (value) {
            var component = _this.props.component;
            component.position.z = value;
        };
        _this.onScaleXInput = function (value) {
            var component = _this.props.component;
            component.scaleX = value;
        };
        _this.onScaleYInput = function (value) {
            var component = _this.props.component;
            component.scaleY = value;
        };
        _this.onScaleZInput = function (value) {
            var component = _this.props.component;
            component.scaleZ = value;
        };
        _this.onRotationXInput = function (value) {
            var component = _this.props.component;
            component.rotationX = Sein.degToRad(value);
        };
        _this.onRotationYInput = function (value) {
            var component = _this.props.component;
            component.rotationY = Sein.degToRad(value);
        };
        _this.onRotationZInput = function (value) {
            var component = _this.props.component;
            component.rotationZ = Sein.degToRad(value);
        };
        _this.onCheckedChange = function (visible) {
            // console.log(visible);
            var component = _this.props.component;
            component.visible = visible;
        };
        return _this;
    }
    OrthographicCameraComponentEditor.prototype.componentDidMount = function () { };
    OrthographicCameraComponentEditor.prototype.render = function () {
        var component = this.props.component;
        // 是否是CameraComponent类型
        if (!component.isOrthographicCameraComponent) {
            return null;
        }
        var top = component.top, left = component.left, right = component.right, bottom = component.bottom, near = component.near, far = component.far, x = component.x, y = component.y, z = component.z, scaleX = component.scaleX, scaleY = component.scaleY, scaleZ = component.scaleZ, rotationX = component.rotationX, rotationY = component.rotationY, rotationZ = component.rotationZ;
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-oricameraeditor-container' },
            preact_1.h("div", { className: 'sein-inspector-oricameraeditor-detail' },
                preact_1.h(components_1.Range, { label: 'top', value: top, min: -100, max: 100, step: 0.1, onRangeInput: this.onTopInput }),
                preact_1.h(components_1.Range, { label: 'right', value: right, min: -100, max: 100, step: 0.1, onRangeInput: this.onRightInput }),
                preact_1.h(components_1.Range, { label: 'left', value: left, min: -100, max: 100, step: 0.01, onRangeInput: this.onLeftInput }),
                preact_1.h(components_1.Range, { label: 'bottom', value: bottom, min: -100, max: 100, step: 0.01, onRangeInput: this.onBottomInput }),
                preact_1.h(components_1.Range, { label: 'near', value: near, min: 0, max: 100, step: 1, onRangeInput: this.onNearInput }),
                preact_1.h(components_1.Range, { label: 'far', value: far, min: 0, max: 100, step: 1, onRangeInput: this.onFarInput }),
                preact_1.h(components_1.Range, { label: 'position.x', value: x, min: -20, max: 20, step: 0.01, onRangeInput: this.onXRangeInput }),
                preact_1.h(components_1.Range, { label: 'position.y', value: y, min: -20, max: 20, step: 0.01, onRangeInput: this.onYRangeInput }),
                preact_1.h(components_1.Range, { label: 'positin.z', value: z, min: -20, max: 20, step: 0.01, onRangeInput: this.onZRangeInput }),
                preact_1.h(components_1.Range, { label: 'scaleX', value: scaleX, min: 0, max: 3, step: 0.01, onRangeInput: this.onScaleXInput }),
                preact_1.h(components_1.Range, { label: 'scaleY', value: scaleY, min: 0, max: 3, step: 0.01, onRangeInput: this.onScaleYInput }),
                preact_1.h(components_1.Range, { label: 'scaleZ', value: scaleZ, min: 0, max: 3, step: 0.01, onRangeInput: this.onScaleZInput }),
                preact_1.h(components_1.Range, { label: 'rotationX', value: rotationX, min: -180, max: 180, step: 0.01, onRangeInput: this.onRotationXInput }),
                preact_1.h(components_1.Range, { label: 'rotationY', value: rotationY, min: -180, max: 180, step: 0.01, onRangeInput: this.onRotationYInput }),
                preact_1.h(components_1.Range, { label: 'rotationZ', value: rotationZ, min: -180, max: 180, step: 0.01, onRangeInput: this.onRotationZInput }))));
    };
    return OrthographicCameraComponentEditor;
}(preact_1.Component));
exports.default = OrthographicCameraComponentEditor;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(102);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-oricameraeditor-container.sein-inspector-component{height:auto;border-left:0}.sein-inspector-container .sein-inspector-oricameraeditor-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-oricameraeditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-oricameraeditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-oricameraeditor-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-oricameraeditor-container.sein-inspector-component .sein-inspector-oricameraeditor-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-oricameraeditor-container.sein-inspector-component .sein-inspector-oricameraeditor-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-oricameraeditor-container.sein-inspector-component .sein-inspector-oricameraeditor-detail .sein-inspector-button{flex:1}.sein-inspector-container .sein-inspector-oricameraeditor-container.sein-inspector-component .sein-inspector-oricameraeditor-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: DirectionalLightComponentEditor.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-09 14:52:36
 * @LastEditTime: 2019-10-28 18:59:41
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(104);
var components_1 = __webpack_require__(3);
var InfoTab_1 = __webpack_require__(5);
var Sein = __webpack_require__(4);
var utils_1 = __webpack_require__(10);
var DirectionalLightModelActor = /** @class */ (function (_super) {
    __extends(DirectionalLightModelActor, _super);
    function DirectionalLightModelActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DirectionalLightModelActor.prototype.onAdd = function (initState) {
        var direction = initState.direction, length = initState.length;
        var start = direction
            .clone()
            .negate()
            .scale(length);
        var end = new Sein.Vector3(0, 0, 0);
        var color = new Sein.Color(1, 1, 1);
        this.plane = this.addComponent('Plane', Sein.BSPPlaneComponent, {
            width: 6,
            height: 6,
            position: start,
            material: new Sein.BasicMaterial({
                diffuse: color,
                wireframe: true,
                lightType: 'NONE',
                shininess: 0
            })
        });
        this.plane.lookAt(end);
        this.line = this.addComponent('Line', utils_1.BSPLineComponent, {
            PointA: start,
            PointB: end,
            material: new Sein.BasicMaterial({
                diffuse: color,
                wireframe: true,
                lightType: 'NONE',
                shininess: 0
            })
        });
    };
    DirectionalLightModelActor.prototype.setDirection = function (direction, length) {
        if (length === void 0) { length = 20; }
        var start = direction
            .clone()
            .negate()
            .scale(length);
        var end = new Sein.Vector3(0, 0, 0);
        this.plane.position.copy(start);
        this.plane.lookAt(end);
        this.line.setVertices(start, end);
    };
    return DirectionalLightModelActor;
}(Sein.SceneActor));
var DirectionalLightComponentEditor = /** @class */ (function (_super) {
    __extends(DirectionalLightComponentEditor, _super);
    function DirectionalLightComponentEditor() {
        var _this = _super.call(this) || this;
        _this.curAngle = 0;
        _this.onVisibleChange = function (value) {
            var component = _this.props.component;
            component.visible = value;
        };
        _this.onAmountInput = function (value) {
            var component = _this.props.component;
            component.amount = value;
        };
        _this.onColorInput = function (value) {
            var component = _this.props.component;
            component.color.fromHEX(value);
        };
        _this.onDirectionXInput = function (value) {
            var component = _this.props.component;
            component.direction.x = value;
            _this.updateDirection();
        };
        _this.onDirectionYInput = function (value) {
            var component = _this.props.component;
            component.direction.y = value;
            _this.updateDirection();
        };
        _this.onDirectionZInput = function (value) {
            var component = _this.props.component;
            component.direction.z = value;
            _this.updateDirection();
        };
        _this.onShowHelperChange = function (value) {
            _this.lightLine.visible = value;
        };
        _this.setState({
            showHelper: false
        });
        return _this;
    }
    DirectionalLightComponentEditor.prototype.componentDidMount = function () {
        var component = this.props.component;
        this.lightLine = component
            .getWorld()
            .addActor('DirectionLightModelActor', DirectionalLightModelActor, {
            visible: false,
            direction: component.direction,
            length: 20
        });
    };
    DirectionalLightComponentEditor.prototype.componentWillUnmount = function () { };
    DirectionalLightComponentEditor.prototype.updateDirection = function () {
        var component = this.props.component;
        this.lightLine.setDirection(component.direction);
    };
    DirectionalLightComponentEditor.prototype.getPrivate = function (component) {
        var amount = component.amount, color = component.color, visible = component.visible;
        var showHelper = this.state.showHelper;
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Switch, { label: 'show helper', checked: showHelper, onCheckedChange: this.onShowHelperChange }),
            preact_1.h(components_1.Switch, { label: 'visible', checked: visible, onCheckedChange: this.onVisibleChange }),
            preact_1.h(components_1.Range, { label: 'amount', value: amount, min: 0, max: 10, step: 0.1, onRangeInput: this.onAmountInput }),
            preact_1.h(components_1.ColorPicker, { label: 'color', value: '#' + color.toHEX(), onColorInput: this.onColorInput })));
    };
    DirectionalLightComponentEditor.prototype.getTransform = function (component) {
        var direction = component.direction;
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Range, { label: 'direction.x', value: direction.x, min: -1, max: 1, step: 0.001, onRangeInput: this.onDirectionXInput }),
            preact_1.h(components_1.Range, { label: 'direction.y', value: direction.y, min: -1, max: 1, step: 0.001, onRangeInput: this.onDirectionYInput }),
            preact_1.h(components_1.Range, { label: 'direction.z', value: direction.z, min: -1, max: 1, step: 0.001, onRangeInput: this.onDirectionZInput })));
    };
    DirectionalLightComponentEditor.prototype.render = function () {
        var component = this.props.component;
        // 是否是DirectionalLightComponent类型
        if (!Sein.isDirectionalLightComponent(component)) {
            return null;
        }
        return (preact_1.h(InfoTab_1.default, { hideMaterials: true, hideGeometry: true, private: this.getPrivate(component), transform: this.getTransform(component) }));
    };
    return DirectionalLightComponentEditor;
}(preact_1.Component));
exports.default = DirectionalLightComponentEditor;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component{height:auto;border-left:0}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-animatoreditor-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-animatoreditor-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-animatoreditor-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-animatoreditor-detail .sein-inspector-button{flex:1}.sein-inspector-container .sein-inspector-animatoreditor-container.sein-inspector-component .sein-inspector-animatoreditor-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: AmbientLightComponentEditor.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-09 14:52:36
 * @LastEditTime: 2019-10-28 18:51:37
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(107);
var components_1 = __webpack_require__(3);
var Sein = __webpack_require__(4);
var AmbientLightComponentEditor = /** @class */ (function (_super) {
    __extends(AmbientLightComponentEditor, _super);
    function AmbientLightComponentEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onVisibleChange = function (value) {
            var component = _this.props.component;
            component.visible = value;
        };
        _this.onAmountInput = function (value) {
            var component = _this.props.component;
            component.amount = value;
        };
        _this.onColorInput = function (value) {
            var component = _this.props.component;
            component.color.fromHEX(value);
        };
        return _this;
    }
    AmbientLightComponentEditor.prototype.componentDidMount = function () { };
    AmbientLightComponentEditor.prototype.render = function () {
        var component = this.props.component;
        // 是否是AmbientLightComponent类型
        if (!Sein.isAmbientLightComponent(component)) {
            return null;
        }
        var amount = component.amount, color = component.color, visible = component.visible;
        return (preact_1.h("div", { className: 'sein-inspector-component sein-inspector-ambienteditor-container' },
            preact_1.h("div", { className: 'sein-inspector-ambienteditor-detail' },
                preact_1.h(components_1.Switch, { label: 'visible', checked: visible, onCheckedChange: this.onVisibleChange }),
                preact_1.h(components_1.Range, { label: 'amount', value: amount, min: 0, max: 3, step: 0.01, onRangeInput: this.onAmountInput }),
                preact_1.h(components_1.ColorPicker, { label: 'color', value: '#' + color.toHEX(), onColorInput: this.onColorInput }))));
    };
    return AmbientLightComponentEditor;
}(preact_1.Component));
exports.default = AmbientLightComponentEditor;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(108);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component{height:auto;border-left:0}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-ambienteditor-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-ambienteditor-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-ambienteditor-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-ambienteditor-detail .sein-inspector-button{flex:1}.sein-inspector-container .sein-inspector-ambienteditor-container.sein-inspector-component .sein-inspector-ambienteditor-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: PointLightComponentEditor.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-09 14:52:36
 * @LastEditTime: 2019-10-28 19:04:07
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(110);
var components_1 = __webpack_require__(3);
var InfoTab_1 = __webpack_require__(5);
var Sein = __webpack_require__(4);
var PointLightComponentEditor = /** @class */ (function (_super) {
    __extends(PointLightComponentEditor, _super);
    function PointLightComponentEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onVisibleChange = function (value) {
            var component = _this.props.component;
            component.visible = value;
        };
        _this.onAmountInput = function (value) {
            var component = _this.props.component;
            component.amount = value;
        };
        _this.onColorInput = function (value) {
            var component = _this.props.component;
            component.color.fromHEX(value);
        };
        _this.onPositionXInput = function (value) {
            var component = _this.props.component;
            component.position.x = value;
        };
        _this.onPositionYInput = function (value) {
            var component = _this.props.component;
            component.position.y = value;
        };
        _this.onPositionZInput = function (value) {
            var component = _this.props.component;
            component.position.z = value;
        };
        _this.onRangeInput = function (value) {
            var component = _this.props.component;
            component.range = value;
        };
        _this.onHelperChange = function (value) {
            if (value) {
                _this.pointLightBox.visible = true;
                _this.pointLightRange.visible = true;
            }
            else {
                _this.pointLightBox.visible = false;
                _this.pointLightRange.visible = false;
            }
        };
        return _this;
    }
    PointLightComponentEditor.prototype.componentDidMount = function () {
        var component = this.props.component;
        this.pointLightBox = component
            .getWorld()
            .addActor('pointLightBox', Sein.BSPBoxActor, {
            visible: false,
            width: 1,
            height: 1,
            depth: 1,
            position: component.position.clone(),
            material: new Sein.BasicMaterial({
                diffuse: new Sein.Color(1, 0, 0)
            })
        });
        this.range = component.range;
        this.pointLightRange = component
            .getWorld()
            .addActor('pointLightBox', Sein.BSPSphereActor, {
            visible: false,
            radius: component.range,
            position: component.position.clone(),
            widthSegments: 16,
            heightSegments: 16,
            material: new Sein.BasicMaterial({
                wireframe: true,
                lightType: 'NONE',
                shininess: 0,
                diffuse: new Sein.Color(0.6, 0.6, 0.6, 1)
            })
        });
        this.update();
    };
    PointLightComponentEditor.prototype.componentWillUnmount = function () {
        this.pointLightBox.removeFromParent();
        this.pointLightRange.removeFromParent();
        cancelAnimationFrame(this.raf);
    };
    PointLightComponentEditor.prototype.update = function () {
        var _this = this;
        this.raf = requestAnimationFrame(function () {
            _this.update();
        });
        var component = this.props.component;
        this.pointLightBox.transform.position = component.position.clone();
        this.pointLightRange.transform.position = component.position.clone();
        var scaleRate = component.range / this.range;
        this.pointLightRange.transform.scale = new Sein.Vector3(scaleRate, scaleRate, scaleRate);
    };
    PointLightComponentEditor.prototype.getPrivate = function (component) {
        var amount = component.amount, color = component.color, visible = component.visible, position = component.position, range = component.range;
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Switch, { label: 'show helper', checked: false, onCheckedChange: this.onHelperChange }),
            preact_1.h(components_1.Switch, { label: 'visible', checked: visible, onCheckedChange: this.onVisibleChange }),
            preact_1.h(components_1.Range, { label: 'amount', value: amount, min: 0, max: 500, step: 0.1, onRangeInput: this.onAmountInput }),
            preact_1.h(components_1.ColorPicker, { label: 'color', value: '#' + color.toHEX(), onColorInput: this.onColorInput }),
            preact_1.h(components_1.Range, { label: 'range', value: range, min: 0, max: 100, step: 0.1, onRangeInput: this.onRangeInput })));
    };
    PointLightComponentEditor.prototype.getTransform = function (component) {
        var amount = component.amount, color = component.color, visible = component.visible, position = component.position, range = component.range;
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Range, { label: 'position.x', value: position.x, min: -50, max: 50, step: 0.1, onRangeInput: this.onPositionXInput }),
            preact_1.h(components_1.Range, { label: 'position.y', value: position.y, min: -50, max: 50, step: 0.1, onRangeInput: this.onPositionYInput }),
            preact_1.h(components_1.Range, { label: 'position.z', value: position.z, min: -50, max: 50, step: 0.1, onRangeInput: this.onPositionZInput })));
    };
    PointLightComponentEditor.prototype.render = function () {
        var component = this.props.component;
        // PointLightComponent类型
        if (!Sein.isPointLightComponent(component)) {
            return null;
        }
        return (preact_1.h(InfoTab_1.default, { hideGeometry: true, hideMaterials: true, private: this.getPrivate(component), transform: this.getTransform(component) }));
    };
    return PointLightComponentEditor;
}(preact_1.Component));
exports.default = PointLightComponentEditor;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-pointeditor-container.sein-inspector-component{height:auto;border-left:0}.sein-inspector-container .sein-inspector-pointeditor-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-pointeditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-pointeditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-pointeditor-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-pointeditor-container.sein-inspector-component .sein-inspector-pointeditor-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-pointeditor-container.sein-inspector-component .sein-inspector-pointeditor-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-pointeditor-container.sein-inspector-component .sein-inspector-pointeditor-detail .sein-inspector-button{flex:1}.sein-inspector-container .sein-inspector-pointeditor-container.sein-inspector-component .sein-inspector-pointeditor-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: SpotLightComponentEditor.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-09 14:52:36
 * @LastEditTime: 2019-10-28 19:07:34
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(113);
var components_1 = __webpack_require__(3);
var Sein = __webpack_require__(4);
var InfoTab_1 = __webpack_require__(5);
var utils_1 = __webpack_require__(10);
var SpotLightModelActor = /** @class */ (function (_super) {
    __extends(SpotLightModelActor, _super);
    function SpotLightModelActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpotLightModelActor.prototype.onAdd = function (initState) {
        var range = initState.range, cutoff = initState.cutoff, outerCutoff = initState.outerCutoff;
        var start = new Sein.Vector3(0, 0, 0);
        var end = new Sein.Vector3(0, range, 0);
        var color = new Sein.Color(1, 1, 1);
        var color1 = new Sein.Color(0.3, 0.3, 0.3);
        var innerRadius = Math.tan(Sein.degToRad(cutoff)) * range;
        var outerRadius = Math.tan(Sein.degToRad(outerCutoff)) * range;
        this.addComponent('Box', Sein.BSPBoxComponent, {
            width: 1,
            height: 1,
            depth: 1,
            material: new Sein.BasicMaterial({
                lightType: 'NONE',
                shininess: 0,
                diffuse: color
            })
        });
        this.addComponent('InnerRange', utils_1.BSPCircleComponent, {
            radius: innerRadius,
            radialSegments: 32,
            position: end,
            material: new Sein.BasicMaterial({
                lightType: 'NONE',
                shininess: 0,
                diffuse: color
            })
        });
        this.addComponent('OuterRange', utils_1.BSPCircleComponent, {
            radius: outerRadius,
            radialSegments: 32,
            position: end,
            material: new Sein.BasicMaterial({
                lightType: 'NONE',
                shininess: 0,
                diffuse: color1
            })
        });
        this.addComponent('Line1', utils_1.BSPLineComponent, {
            PointA: start,
            PointB: new Sein.Vector3(innerRadius, range, 0),
            material: new Sein.BasicMaterial({
                lightType: 'NONE',
                shininess: 0,
                diffuse: color
            })
        });
        this.addComponent('Line2', utils_1.BSPLineComponent, {
            PointA: start,
            PointB: new Sein.Vector3(-innerRadius, range, 0),
            material: new Sein.BasicMaterial({
                lightType: 'NONE',
                shininess: 0,
                diffuse: color
            })
        });
        this.addComponent('Line3', utils_1.BSPLineComponent, {
            PointA: start,
            PointB: new Sein.Vector3(0, range, innerRadius),
            material: new Sein.BasicMaterial({
                lightType: 'NONE',
                shininess: 0,
                diffuse: color
            })
        });
        this.addComponent('Line4', utils_1.BSPLineComponent, {
            PointA: start,
            PointB: new Sein.Vector3(0, range, -innerRadius),
            material: new Sein.BasicMaterial({
                lightType: 'NONE',
                shininess: 0,
                diffuse: color
            })
        });
        this.addComponent('Line5', utils_1.BSPLineComponent, {
            PointA: start,
            PointB: new Sein.Vector3(outerRadius, range, 0),
            material: new Sein.BasicMaterial({
                lightType: 'NONE',
                shininess: 0,
                diffuse: color1
            })
        });
        this.addComponent('Line6', utils_1.BSPLineComponent, {
            PointA: start,
            PointB: new Sein.Vector3(-outerRadius, range, 0),
            material: new Sein.BasicMaterial({
                lightType: 'NONE',
                shininess: 0,
                diffuse: color1
            })
        });
        this.addComponent('Line7', utils_1.BSPLineComponent, {
            PointA: start,
            PointB: new Sein.Vector3(0, range, outerRadius),
            material: new Sein.BasicMaterial({
                lightType: 'NONE',
                shininess: 0,
                diffuse: color1
            })
        });
        this.addComponent('Line8', utils_1.BSPLineComponent, {
            PointA: start,
            PointB: new Sein.Vector3(0, range, -outerRadius),
            material: new Sein.BasicMaterial({
                lightType: 'NONE',
                shininess: 0,
                diffuse: color1
            })
        });
    };
    SpotLightModelActor.prototype.reset = function (range, cutoff, outerCutoff) {
        var start = new Sein.Vector3(0, 0, 0);
        var end = new Sein.Vector3(0, range, 0);
        var innerRadius = Math.tan(Sein.degToRad(cutoff)) * range;
        var outerRadius = Math.tan(Sein.degToRad(outerCutoff)) * range;
        var innerRange = this.findComponentByName('InnerRange');
        innerRange.setRadius(innerRadius, 32);
        innerRange.position = end;
        var outerRange = this.findComponentByName('OuterRange');
        outerRange.setRadius(outerRadius, 32);
        outerRange.position = end;
        this.findComponentByName('Line1').setVertices(start, new Sein.Vector3(innerRadius, range, 0));
        this.findComponentByName('Line2').setVertices(start, new Sein.Vector3(-innerRadius, range, 0));
        this.findComponentByName('Line3').setVertices(start, new Sein.Vector3(0, range, innerRadius));
        this.findComponentByName('Line4').setVertices(start, new Sein.Vector3(0, range, -innerRadius));
        this.findComponentByName('Line5').setVertices(start, new Sein.Vector3(outerRadius, range, 0));
        this.findComponentByName('Line6').setVertices(start, new Sein.Vector3(-outerRadius, range, 0));
        this.findComponentByName('Line7').setVertices(start, new Sein.Vector3(0, range, outerRadius));
        this.findComponentByName('Line8').setVertices(start, new Sein.Vector3(0, range, -outerRadius));
    };
    SpotLightModelActor.prototype.onDestroy = function () {
    };
    return SpotLightModelActor;
}(Sein.SceneActor));
var SpotLightComponentEditor = /** @class */ (function (_super) {
    __extends(SpotLightComponentEditor, _super);
    function SpotLightComponentEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onVisibleChange = function (value) {
            var component = _this.props.component;
            component.visible = value;
        };
        _this.onAmountInput = function (value) {
            var component = _this.props.component;
            component.amount = value;
        };
        _this.onColorInput = function (value) {
            var component = _this.props.component;
            component.color.fromHEX(value);
        };
        _this.onPositionXInput = function (value) {
            var component = _this.props.component;
            component.position.x = value;
            _this.update();
        };
        _this.onPositionYInput = function (value) {
            var component = _this.props.component;
            component.position.y = value;
            _this.update();
        };
        _this.onPositionZInput = function (value) {
            var component = _this.props.component;
            component.position.z = value;
            _this.update();
        };
        _this.onDirectionXInput = function (value) {
            var component = _this.props.component;
            component.direction.x = value;
            _this.update();
        };
        _this.onDirectionYInput = function (value) {
            var component = _this.props.component;
            component.direction.y = value;
            _this.update();
        };
        _this.onDirectionZInput = function (value) {
            var component = _this.props.component;
            // console.log(value);
            component.direction.z = value;
            _this.update();
        };
        _this.onRangeInput = function (value) {
            var component = _this.props.component;
            component.range = value;
            _this.update();
        };
        _this.onHelperChange = function (value) {
            _this.lightModeActor.visible = value;
        };
        _this.onCutoffInput = function (value) {
            var component = _this.props.component;
            component.cutoff = value;
            _this.update();
        };
        _this.onOuterCutoffInput = function (value) {
            var component = _this.props.component;
            component.outerCutoff = value;
            _this.update();
        };
        return _this;
    }
    SpotLightComponentEditor.prototype.componentDidMount = function () {
        var component = this.props.component;
        var range = component.range, cutoff = component.cutoff, outerCutoff = component.outerCutoff;
        this.lightModeActor = component
            .getWorld()
            .addActor('SpotLightModelActor', SpotLightModelActor, {
            visible: false,
            range: range,
            cutoff: cutoff,
            outerCutoff: outerCutoff
        });
        this.update();
    };
    SpotLightComponentEditor.prototype.componentWillUnmount = function () {
        this.lightModeActor.removeFromParent();
    };
    SpotLightComponentEditor.prototype.update = function () {
        var component = this.props.component;
        var range = component.range, cutoff = component.cutoff, outerCutoff = component.outerCutoff;
        this.lightModeActor.transform.position = component.position.clone();
        this.lightModeActor.reset(range, cutoff, outerCutoff);
        var upVector = new Sein.Vector3(0, 1, 0);
        var direction = component.direction.clone();
        var angle = Math.acos(upVector.dot(direction) / (upVector.length() * direction.length()));
        var axis = upVector
            .clone()
            .cross(direction)
            .normalize();
        this.lightModeActor.transform.rotationX = 0;
        this.lightModeActor.transform.rotationY = 0;
        this.lightModeActor.transform.rotationZ = 0;
        this.lightModeActor.transform.rotate(axis, angle);
    };
    SpotLightComponentEditor.prototype.getPrivate = function (component) {
        var amount = component.amount, color = component.color, visible = component.visible, range = component.range, outerCutoff = component.outerCutoff, cutoff = component.cutoff;
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Switch, { label: 'show helper', checked: false, onCheckedChange: this.onHelperChange }),
            preact_1.h(components_1.Switch, { label: 'visible', checked: visible, onCheckedChange: this.onVisibleChange }),
            preact_1.h(components_1.Range, { label: 'amount', value: amount, min: 0, max: 500, step: 0.1, onRangeInput: this.onAmountInput }),
            preact_1.h(components_1.ColorPicker, { label: 'color', value: '#' + color.toHEX(), onColorInput: this.onColorInput }),
            preact_1.h(components_1.Range, { label: 'range', value: range, min: 0, max: 100, step: 0.1, onRangeInput: this.onRangeInput }),
            preact_1.h(components_1.Range, { label: 'cutoff', value: cutoff, min: 0, max: 100, step: 0.1, onRangeInput: this.onCutoffInput }),
            preact_1.h(components_1.Range, { label: 'outerCutoff', value: outerCutoff, min: 0, max: 100, step: 0.1, onRangeInput: this.onOuterCutoffInput })));
    };
    SpotLightComponentEditor.prototype.getTransform = function (component) {
        var position = component.position, direction = component.direction;
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Range, { label: 'position.x', value: position.x, min: -50, max: 50, step: 0.1, onRangeInput: this.onPositionXInput }),
            preact_1.h(components_1.Range, { label: 'position.y', value: position.y, min: -50, max: 50, step: 0.1, onRangeInput: this.onPositionYInput }),
            preact_1.h(components_1.Range, { label: 'position.z', value: position.z, min: -50, max: 50, step: 0.1, onRangeInput: this.onPositionZInput }),
            preact_1.h(components_1.Range, { label: 'direction.x', value: direction.x, min: -1, max: 1, step: 0.001, onRangeInput: this.onDirectionXInput }),
            preact_1.h(components_1.Range, { label: 'direction.y', value: direction.y, min: -1, max: 1, step: 0.001, onRangeInput: this.onDirectionYInput }),
            preact_1.h(components_1.Range, { label: 'direction.z', value: direction.z, min: -1, max: 1, step: 0.001, onRangeInput: this.onDirectionZInput })));
    };
    SpotLightComponentEditor.prototype.render = function () {
        var component = this.props.component;
        // SpotLightComponent类型
        if (!Sein.isSpotLightComponent(component)) {
            return null;
        }
        return (preact_1.h(InfoTab_1.default, { hideMaterials: true, hideGeometry: true, private: this.getPrivate(component), transform: this.getTransform(component) }));
    };
    return SpotLightComponentEditor;
}(preact_1.Component));
exports.default = SpotLightComponentEditor;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, ".sein-inspector-container .sein-inspector-spotditor-container.sein-inspector-component{height:auto;border-left:0}.sein-inspector-container .sein-inspector-spotditor-container.sein-inspector-component .sein-inspector-component-box{display:flex}.sein-inspector-container .sein-inspector-spotditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-label{flex:1}.sein-inspector-container .sein-inspector-spotditor-container.sein-inspector-component .sein-inspector-component-box .sein-inspector-spotditor-value{font-size:12px;color:#bbb}.sein-inspector-container .sein-inspector-spotditor-container.sein-inspector-component .sein-inspector-spotditor-detail .sein-inspector-component{padding:0;border-left:0;border-bottom:1px solid rgba(255,255,255,0.07)}.sein-inspector-container .sein-inspector-spotditor-container.sein-inspector-component .sein-inspector-spotditor-detail .sein-inspector-component:hover{border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-spotditor-container.sein-inspector-component .sein-inspector-spotditor-detail .sein-inspector-button{flex:1}.sein-inspector-container .sein-inspector-spotditor-container.sein-inspector-component .sein-inspector-spotditor-detail .sein-inspector-detail-title{font-size:12px;font-weight:bold;color:#fff}\n", ""]);

// exports


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: PrimitiveComponentEditor.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-06 15:28:00
 * @LastEditTime: 2019-10-28 19:42:51
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var components_1 = __webpack_require__(3);
var Sein = __webpack_require__(4);
var StaticMeshComponentEditor_1 = __webpack_require__(116);
var Information_1 = __webpack_require__(8);
var PrimitiveComponentEditor = /** @class */ (function (_super) {
    __extends(PrimitiveComponentEditor, _super);
    function PrimitiveComponentEditor() {
        return _super.call(this) || this;
    }
    PrimitiveComponentEditor.prototype.getBoxDetail = function (component) {
        var geometry = component.geometry;
        var _a = geometry, width = _a.width, height = _a.height, depth = _a.depth, widthSegments = _a.widthSegments, heightSegments = _a.heightSegments, depthSegments = _a.depthSegments;
        return (preact_1.h(StaticMeshComponentEditor_1.default, { component: component, hidePrivate: true, geometry: preact_1.h(preact_1.Fragment, null,
                this._info('width', width),
                this._info('height', height),
                this._info('depth', depth),
                this._info('widthSegments', widthSegments),
                this._info('heightSegments', heightSegments),
                this._info('depthSegments', depthSegments)) }));
    };
    PrimitiveComponentEditor.prototype.getPlaneDetail = function (component) {
        var geometry = component.geometry;
        var _a = geometry, width = _a.width, height = _a.height, widthSegments = _a.widthSegments, heightSegments = _a.heightSegments;
        return (preact_1.h(StaticMeshComponentEditor_1.default, { component: component, hidePrivate: true, geometry: preact_1.h(preact_1.Fragment, null,
                preact_1.h(components_1.Information, { label: 'width', value: width }),
                preact_1.h(components_1.Information, { label: 'height', value: height }),
                preact_1.h(components_1.Information, { label: 'widthSegments', value: widthSegments }),
                preact_1.h(components_1.Information, { label: 'heightSegments', value: heightSegments })) }));
    };
    PrimitiveComponentEditor.prototype.getMorphDetail = function (component) {
        var geometry = component.geometry;
        // 展示些什么
        // const { weights, targets } = geometry as Hilo3d.MorphGeometry;
        return (preact_1.h(StaticMeshComponentEditor_1.default, { component: component, hidePrivate: true, geometry: preact_1.h(preact_1.Fragment, null) }));
    };
    PrimitiveComponentEditor.prototype.getSphereDetail = function (component) {
        var geometry = component.geometry;
        var _a = geometry, radius = _a.radius, widthSegments = _a.widthSegments, heightSegments = _a.heightSegments;
        return (preact_1.h(StaticMeshComponentEditor_1.default, { component: component, hidePrivate: true, geometry: preact_1.h(preact_1.Fragment, null,
                this._info('radius', radius),
                this._info('widthSegments', widthSegments),
                this._info('heightSegments', heightSegments)) }));
    };
    PrimitiveComponentEditor.prototype.getCylinderGeometry = function (component) {
        var geometry = component.geometry;
        var _a = geometry, radiusTop = _a.radiusTop, radiusBottom = _a.radiusBottom, height = _a.height, radialSegments = _a.radialSegments, heightSegments = _a.heightSegments, openEnded = _a.openEnded, thetaStart = _a.thetaStart, thetaLength = _a.thetaLength;
        return (preact_1.h(preact_1.Fragment, null,
            this._info('radiusTop', radiusTop),
            this._info('radiusBottom', radiusBottom),
            this._info('height', height),
            this._info('radialSegments', radialSegments),
            this._info('heightSegments', heightSegments),
            this._info('openEnded', openEnded),
            this._info('thetaStart', thetaStart),
            this._info('thetaLength', thetaLength)));
    };
    PrimitiveComponentEditor.prototype.getCylinderDetail = function (component) {
        return (preact_1.h(StaticMeshComponentEditor_1.default, { component: component, hidePrivate: true, geometry: this.getCylinderGeometry(component) }));
    };
    PrimitiveComponentEditor.prototype._info = function (label, value) {
        if (value !== undefined) {
            return preact_1.h(Information_1.default, { label: label, value: value });
        }
        else {
            return null;
        }
    };
    PrimitiveComponentEditor.prototype.render = function () {
        var component = this.props.component;
        // 是否是PrimitiveComponent类型
        if (!Sein.isPrimitiveComponent(component)) {
            return null;
        }
        if (Sein.isBSPBoxComponent(component)) {
            return this.getBoxDetail(component);
        }
        else if (Sein.isBSPPlaneComponent(component)) {
            return this.getPlaneDetail(component);
        }
        else if (Sein.isBSPMorphComponent(component)) {
            return this.getMorphDetail(component);
        }
        else if (Sein.isBSPSphereComponent(component)) {
            return this.getSphereDetail(component);
        }
        else if (Sein.isBSPCylinderComponent(component)) {
            return this.getCylinderDetail(component);
        }
        else if (Sein.isStaticMeshComponent(component)) {
            return (preact_1.h(StaticMeshComponentEditor_1.default, { component: component }));
        }
    };
    return PrimitiveComponentEditor;
}(preact_1.Component));
exports.default = PrimitiveComponentEditor;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * @Description: StaticMeshComponentEditor.tsx
 * @Author: 修雷(lc199444@alibaba-inc.com)
 * @Date: 2019-09-06 15:28:00
 * @LastEditTime: 2019-10-28 19:44:58
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
__webpack_require__(117);
var components_1 = __webpack_require__(3);
var Sein = __webpack_require__(4);
var InfoTab_1 = __webpack_require__(5);
var StaticMeshComponentEditor = /** @class */ (function (_super) {
    __extends(StaticMeshComponentEditor, _super);
    function StaticMeshComponentEditor() {
        var _this = _super.call(this) || this;
        _this.onXRangeInput = function (value) {
            var component = _this.props.component;
            component.position.x = value;
        };
        _this.onYRangeInput = function (value) {
            var component = _this.props.component;
            component.position.y = value;
        };
        _this.onZRangeInput = function (value) {
            var component = _this.props.component;
            component.position.z = value;
        };
        _this.onScaleXInput = function (value) {
            var component = _this.props.component;
            component.scaleX = value;
        };
        _this.onScaleYInput = function (value) {
            var component = _this.props.component;
            component.scaleY = value;
        };
        _this.onScaleZInput = function (value) {
            var component = _this.props.component;
            component.scaleZ = value;
        };
        _this.onRotationXInput = function (value) {
            var component = _this.props.component;
            component.rotationX = Sein.degToRad(value);
        };
        _this.onRotationYInput = function (value) {
            var component = _this.props.component;
            component.rotationY = Sein.degToRad(value);
        };
        _this.onRotationZInput = function (value) {
            var component = _this.props.component;
            component.rotationZ = Sein.degToRad(value);
        };
        _this.onCheckedChange = function (visible) {
            // console.log(visible);
            var component = _this.props.component;
            component.visible = visible;
        };
        _this.getAttributes = function () {
            var material = _this.props.component.material;
            var attributes = material.attributes;
            var rs = [];
            for (var key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    var element = attributes[key];
                    rs.push(preact_1.h(components_1.Information, { label: key, value: element }));
                }
            }
            return rs;
        };
        _this.getUniforms = function () {
            var material = _this.props.component.material;
            var uniforms = material.uniforms;
            var rs = [];
            for (var key in uniforms) {
                if (uniforms.hasOwnProperty(key)) {
                    var element = uniforms[key];
                    rs.push(preact_1.h(components_1.Information, { label: key, value: element }));
                }
            }
            return rs;
        };
        _this.setState({
            detailTabId: 1
        });
        return _this;
    }
    StaticMeshComponentEditor.prototype.getTransform = function () {
        var component = this.props.component;
        var x = component.x, y = component.y, z = component.z, scaleX = component.scaleX, scaleY = component.scaleY, scaleZ = component.scaleZ, rotationX = component.rotationX, rotationY = component.rotationY, rotationZ = component.rotationZ, visible = component.visible;
        var bounds = component.getBounds(null, null);
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Switch, { label: 'visible', checked: visible, onCheckedChange: this.onCheckedChange }),
            preact_1.h(components_1.Information, { label: 'bounds.x', value: "[" + bounds.xMax.toFixed(2) + ", " + bounds.xMin.toFixed(2) + "]" }),
            preact_1.h(components_1.Information, { label: 'bounds.y', value: "[" + bounds.yMax.toFixed(2) + ", " + bounds.yMin.toFixed(2) + "]" }),
            preact_1.h(components_1.Information, { label: 'bounds.z', value: "[" + bounds.zMax.toFixed(2) + ", " + bounds.zMin.toFixed(2) + "]" }),
            preact_1.h(components_1.Range, { label: 'position.x', value: x, min: -20, max: 20, step: 0.01, onRangeInput: this.onXRangeInput }),
            preact_1.h(components_1.Range, { label: 'position.y', value: y, min: -20, max: 20, step: 0.01, onRangeInput: this.onYRangeInput }),
            preact_1.h(components_1.Range, { label: 'positin.z', value: z, min: -20, max: 20, step: 0.01, onRangeInput: this.onZRangeInput }),
            preact_1.h(components_1.Range, { label: 'scaleX', value: scaleX, min: 0, max: 3, step: 0.01, onRangeInput: this.onScaleXInput }),
            preact_1.h(components_1.Range, { label: 'scaleY', value: scaleY, min: 0, max: 3, step: 0.01, onRangeInput: this.onScaleYInput }),
            preact_1.h(components_1.Range, { label: 'scaleZ', value: scaleZ, min: 0, max: 3, step: 0.01, onRangeInput: this.onScaleZInput }),
            preact_1.h(components_1.Range, { label: 'rotationX', value: rotationX, min: -180, max: 180, step: 0.01, onRangeInput: this.onRotationXInput }),
            preact_1.h(components_1.Range, { label: 'rotationY', value: rotationY, min: -180, max: 180, step: 0.01, onRangeInput: this.onRotationYInput }),
            preact_1.h(components_1.Range, { label: 'rotationZ', value: rotationZ, min: -180, max: 180, step: 0.01, onRangeInput: this.onRotationZInput })));
    };
    StaticMeshComponentEditor.prototype.getPrivate = function () {
        var component = this.props.component;
        return preact_1.h(preact_1.Fragment, null, this.props.private);
    };
    StaticMeshComponentEditor.prototype.getMaterials = function () {
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Folder, { label: 'attributes' }, this.getAttributes()),
            preact_1.h(components_1.Folder, { label: 'uniforms' }, this.getUniforms()),
            this.props.materials));
    };
    StaticMeshComponentEditor.prototype.getGeometry = function () {
        var component = this.props.component;
        var geometry = component.geometry;
        var vertices = geometry.vertices, indices = geometry.indices;
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Information, { label: 'currentVerticesCount', value: vertices.length }),
            preact_1.h(components_1.Information, { label: 'currentIndicesCount', value: indices.length }),
            this.props.geometry));
    };
    StaticMeshComponentEditor.prototype.render = function () {
        var _a = this.props, component = _a.component, hidePrivate = _a.hidePrivate, hideGeometry = _a.hideGeometry, hideMaterials = _a.hideMaterials, hideTransform = _a.hideTransform;
        // 是否是StaticMeshComponent类型
        if (!Sein.isStaticMeshComponent(component)) {
            return null;
        }
        return (preact_1.h(InfoTab_1.default, { hidePrivate: hidePrivate, hideGeometry: hideGeometry, hideMaterials: hideMaterials, hideTransform: hideTransform, private: this.getPrivate(), geometry: this.getGeometry(), materials: this.getMaterials(), transform: this.getTransform() }));
    };
    return StaticMeshComponentEditor;
}(preact_1.Component));
exports.default = StaticMeshComponentEditor;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(118);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var components_1 = __webpack_require__(3);
var ResourceDetails_1 = __webpack_require__(120);
var Resource = /** @class */ (function (_super) {
    __extends(Resource, _super);
    function Resource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resource = {};
        return _this;
    }
    Resource.prototype.componentWillMount = function () {
        this.calcResources();
    };
    Resource.prototype.componentWillUnmount = function () { };
    Resource.prototype.calcResources = function () {
        var _this = this;
        var game = this.props.actor.getGame();
        var store = game.resource._store;
        Object.keys(store).forEach(function (name) {
            var item = store[name];
            var type = item.type;
            _this.resource[type] = _this.resource[type] || {
                loader: game.resource.getLoader(type).className.value,
                count: 0,
                list: []
            };
            _this.resource[type].list.push(item);
            _this.resource[type].count += 1;
        });
    };
    Resource.prototype.getList = function (list) {
        var _this = this;
        return list.map(function (item) {
            var type = item.type, images = item.images, name = item.name, url = item.url;
            if (type === 'CubeTexture') {
                var rs = [];
                var _loop_1 = function (i) {
                    rs.push(preact_1.h(components_1.Information, { label: name, value: url + '/' + images[i], onTrigger: function () {
                            _this.setState({
                                details: {
                                    type: type,
                                    name: name,
                                    url: url + '/' + images[i]
                                }
                            });
                        } }));
                };
                for (var i in images) {
                    _loop_1(i);
                }
                return rs;
            }
            else {
                return (preact_1.h(components_1.Information, { label: name, value: url, onTrigger: function () {
                        if (type === 'GlTF' || type === 'Atlas') {
                            _this.setState({ details: null });
                        }
                        else {
                            _this.setState({
                                details: {
                                    type: type,
                                    name: name,
                                    url: url
                                }
                            });
                        }
                    } }));
            }
        });
    };
    Resource.prototype.render = function () {
        var _this = this;
        return (preact_1.h("div", { className: 'sein-inspector-content-box  u-scrollbar' },
            preact_1.h(components_1.WithDetails, { main: preact_1.h(preact_1.Fragment, null, Object.keys(this.resource).map(function (type) {
                    var _a = _this.resource[type], loader = _a.loader, count = _a.count, list = _a.list;
                    var preview = _this.getList(list);
                    return (preact_1.h(components_1.Group, { name: type, key: type },
                        preact_1.h(components_1.Information, { label: 'Loader', value: loader }),
                        preact_1.h(components_1.Information, { label: 'Count', value: count }),
                        preview));
                })), details: this.state.details && (preact_1.h(ResourceDetails_1.default, { actor: this.props.actor, resource: this.state.details })) })));
    };
    return Resource;
}(preact_1.Component));
exports.default = Resource;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : ResourceDetails.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 10/15/2019, 3:21:04 PM
 * @Description:
 */
var preact_1 = __webpack_require__(0);
var components_1 = __webpack_require__(3);
var ResourceDetails = /** @class */ (function (_super) {
    __extends(ResourceDetails, _super);
    function ResourceDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceDetails.prototype.render = function () {
        var game = this.props.actor.getGame();
        var _a = this.props.resource, type = _a.type, name = _a.name, url = _a.url;
        return preact_1.h(components_1.Preview, { type: type, name: name, url: url });
    };
    return ResourceDetails;
}(preact_1.Component));
exports.default = ResourceDetails;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @File   : Event.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:57:30 PM
 * @Description:
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var components_1 = __webpack_require__(3);
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        var _this = _super.call(this) || this;
        _this.onCheckedChange = function (checked) {
            console.log('game checked chagne', checked);
            var dataChange = _this.props.dataChange;
            dataChange(checked);
        };
        _this.onSelectChange = function (value) {
            console.log('game select chage', value);
        };
        _this.onButtonClick = function () {
            console.log('game button click');
        };
        _this.onRangeChange = function (value) {
            console.log('game range chage', value);
        };
        _this.onRangeInput = function (value) {
            console.log('game range input', value);
        };
        _this.onColorChange = function (curColor) {
            console.log('game color change', curColor);
        };
        _this.onColorInput = function (curColor) {
            console.log('game color input', curColor);
        };
        _this.setState({
            _currentTime: 0
        });
        return _this;
    }
    Event.prototype.componentDidMount = function () {
        var _this = this;
        console.log('game did mouted');
        this._timer = window.setInterval(function () {
            var _currentTime = _this.state._currentTime;
            _this.setState({
                _currentTime: ++_currentTime
            });
        }, 1000);
    };
    Event.prototype.componentWillUnmount = function () {
        window.clearInterval(this._timer);
    };
    Event.prototype.render = function (props, state) {
        // console.log("game render", this.state._currentTime);
        var options = [
            {
                text: '女神异闻录5',
                value: 'Persona5'
            },
            {
                text: '怪物猎人世界DLC冰原',
                value: 'Monster Hunter World: Iceborne',
                selected: true
            },
            {
                text: '战神',
                value: 1
            }
        ];
        var switchChecked = this.props.switchChecked;
        return (preact_1.h("div", { className: 'sein-inspector-content-box  u-scrollbar' },
            preact_1.h(components_1.Switch, { label: '一个Switch开关', checked: false, onCheckedChange: this.onCheckedChange }),
            preact_1.h(components_1.Select, { label: '这是二个选择框哈', options: options, onSelectChange: this.onSelectChange }),
            preact_1.h(components_1.Button, { label: '我的第二个按钮', onButtonClick: this.onButtonClick }),
            preact_1.h(components_1.Information, { label: '\u5F53\u524D\u65F6\u95F4', value: '我是静态字符串' }),
            preact_1.h(components_1.Range, { label: '当前是二个范围选择组件', value: 1, min: 1, max: 11, step: 0.1, onRangeChange: this.onRangeChange }),
            preact_1.h(components_1.ColorPicker, { label: '我的第二个取色器', value: '#FFAA00', onColorChange: this.onColorChange, onColorInput: this.onColorInput }),
            preact_1.h(components_1.Group, { name: 'Sein Inspector' },
                preact_1.h(components_1.Switch, { label: '两个Switch开关', checked: switchChecked, onCheckedChange: this.onCheckedChange }),
                preact_1.h(components_1.Button, { label: '我的第一个按钮', onButtonClick: this.onButtonClick }),
                preact_1.h(components_1.Select, { label: '这是一个选择框哈', options: options, onSelectChange: this.onSelectChange }),
                preact_1.h(components_1.Information, { label: '\u5F53\u524D\u65F6\u95F4', value: this.state._currentTime }),
                preact_1.h(components_1.Range, { label: '当前是一个范围选择组件', value: 1, min: 1, max: 11, step: 0.1, onRangeChange: this.onRangeChange }),
                preact_1.h(components_1.ColorPicker, { label: '我的第一个取色器', value: '#FFAA00', onColorChange: this.onColorChange, onColorInput: this.onColorInput }))));
    };
    return Event;
}(preact_1.Component));
exports.default = Event;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : Player.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:56:22 PM
 * @Description:
 */
var preact_1 = __webpack_require__(0);
var components_1 = __webpack_require__(3);
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Player.prototype.componentDidMount = function () { };
    Player.prototype.render = function () {
        return preact_1.h(components_1.Group, { name: 'test2' });
    };
    return Player;
}(preact_1.Component));
exports.default = Player;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @File   : Render.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 3:57:30 PM
 * @Description:
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var SPECTOR = __webpack_require__(124);
var components_1 = __webpack_require__(3);
var spector;
var Render = /** @class */ (function (_super) {
    __extends(Render, _super);
    function Render() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isSpectorShow: false
        };
        _this.triggerClick = function () {
            var isSpectorShow = _this.state.isSpectorShow;
            if (isSpectorShow) {
                _this.hideSpectorUI();
                _this.setState({ isSpectorShow: false });
            }
            else {
                if (!_this.spectorUI) {
                    spector.displayUI();
                    setTimeout(function () {
                        _this.spectorUI = document.querySelector('.captureMenuComponent');
                        _this.spectorUI.parentElement.style.removeProperty('display');
                    }, 100);
                }
                else {
                    _this.spectorUI.parentElement.style.removeProperty('display');
                }
                _this.setState({ isSpectorShow: true });
            }
        };
        return _this;
    }
    Render.prototype.componentDidMount = function () {
        if (!spector) {
            spector = new SPECTOR.Spector();
        }
    };
    Render.prototype.componentWillUnmount = function () {
        this.hideSpectorUI();
    };
    Render.prototype.hideSpectorUI = function () {
        if (this.spectorUI) {
            this.spectorUI.parentElement.style.setProperty('display', 'none');
        }
    };
    Render.prototype.render = function () {
        var isSpectorShow = this.state.isSpectorShow;
        var label = isSpectorShow ? '隐藏 Spector' : '显示 Spector';
        return (preact_1.h("div", { className: 'sein-inspector-content-box u-scrollbar' },
            preact_1.h(components_1.Button, { label: label, onButtonClick: this.triggerClick })));
    };
    return Render;
}(preact_1.Component));
exports.default = Render;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = __webpack_require__(0);
var components_1 = __webpack_require__(3);
var LevelDetails_1 = __webpack_require__(126);
var World = /** @class */ (function (_super) {
    __extends(World, _super);
    function World() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentLevel = {
            name: '',
            Levels: null,
            currentLevel: null
        };
        _this.renderDetails = function () {
            var currentLevel = _this.state.currentLevel;
            if (!currentLevel) {
                return null;
            }
            return (preact_1.h(LevelDetails_1.default, { actor: _this.props.actor, levelName: _this.state.currentLevel.name }));
        };
        return _this;
    }
    World.prototype.componentDidMount = function () {
        this.calcState();
    };
    World.prototype.calcState = function () {
        var game = this.props.actor.getGame();
        var Actors = [];
        game.world.actors.array
            .filter(function (item) { return item.iteratable !== false; })
            .forEach(function (item) {
            Actors.push({
                name: item.className.value,
                value: item.name.value
            });
        });
        var Levels = [];
        var levels = game.world._levels;
        for (var key in levels) {
            if (levels.hasOwnProperty(key)) {
                var item = levels[key];
                Levels.push({
                    name: key,
                    value: item.Script.name
                });
            }
        }
        this.setState({
            name: game.world.name.value,
            Levels: Levels
        });
    };
    World.prototype.render = function () {
        var _this = this;
        var _a = this.state, name = _a.name, Levels = _a.Levels;
        return (preact_1.h(components_1.WithDetails, { main: preact_1.h(preact_1.Fragment, null,
                preact_1.h(components_1.Information, { label: 'World Name', value: name }),
                preact_1.h(components_1.List, { label: 'Levels', list: Levels, close: false, onSelect: function (item) { return _this.setState({ currentLevel: item }); } })), details: this.renderDetails() }));
    };
    return World;
}(preact_1.Component));
exports.default = World;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @File   : LevelDetails.tsx
 * @Author : dtysky (dtysky@outlook.com)
 * @Date   : 10/15/2019, 2:48:33 PM
 * @Description:
 */
var preact_1 = __webpack_require__(0);
var components_1 = __webpack_require__(3);
var LevelDetails = /** @class */ (function (_super) {
    __extends(LevelDetails, _super);
    function LevelDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LevelDetails.prototype.render = function () {
        var game = this.props.actor.getGame();
        var name = this.props.levelName;
        return (preact_1.h(preact_1.Fragment, null,
            preact_1.h(components_1.Information, { label: 'Name', value: name }),
            game.world.name.equalsTo(name) ? (preact_1.h(components_1.Button, { label: 'Current Level' })) : (preact_1.h(components_1.Button, { label: 'Switch to level', onButtonClick: function () { return game.switchLevel(name); } }))));
    };
    return LevelDetails;
}(preact_1.Component));
exports.default = LevelDetails;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(2)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(undefined);
// imports


// module
exports.push([module.i, "@font-face{font-family:'iconfont';src:url(\"//at.alicdn.com/t/font_1350427_of0crv6lonr.eot?t=1571729233401\");src:url(\"//at.alicdn.com/t/font_1350427_of0crv6lonr.eot?t=1571729233401#iefix\") format(\"embedded-opentype\"),url(\"data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAABAwAAsAAAAAHXQAAA/iAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCGJAqobKBBATYCJANgCzIABCAFhG0HggkbTBijoo6SVkxkf31gG4tfrYacnqnt2cFWYKxp+PBLo/1hLgaBmx34fQ30JoeGnrt02CQqtSyohAjo92v75MvdoZ7ck08nkch4yVRKoXRCo0QPzX+e3+af+97TUWHjBGUluj8Ro3n02gJ1YjwM1HW+NeqqjG189xMXLFpdZnC/qd89hEGYTlnV/rHV9AQOcnnA5ZGja+g96zPNciZdBiv0JCedE9C8z+RX1br1nevVGcFrgAAZmm0+kP4fRDdceV8bkJLM4jDbealE3YXJBgaJ/v+ki2r931xpN1fSK1xpSiwMkJT5sziTyb6d7BYmOQRwp/oqq/o8JUeYFADc1Z0qWhbSVQhfg7Xp4VwkWI3RuDRf7vYENE2IhE5evn5rPRmlAeXu0MpaLxCRU9xBHSo5C2bPV6yOL57Eg/X9w6dVJqIiCZ3x9OJZ144vZiH9V/uNs/6rT2C/BAmLQCZyjS85ZNFSmryq2TMwSUZeXX4pNLTp12ycpVY4Ls3F6c5nTxb/V8/QzwuWY0PvcXfbaE4wScE2/HGsqEcDTYN4ehF64AZgWrr4YKre4n/w2vTz0o2r1EkohRzRBmFS7iB4wbQ9NHnBPTxGgOsA8wLXC8YElcY44HrAxKDKMx9wA2C+oNpg7cG1wDqD6wJLA1WGaUDJrA+4CqwvuBpsMrgARoNrA1sMqj3mBiU2e4Y9dIPXxVy7xV5hDyXvSNeJKkPGAqvAuVp5j6gva1AfLVEJLCeJikmDHZI5pJRJ1EgG5leJWgqtnDKpnJo0OV3V9StcFNckm5RXVk+vpaimqR16eGxH4AAKlpfDGrJmVqq6tKS0umoJVU2WlXeA2YXCK4uoCQSgvAFWjB/rlJKKqqjyTJ9MeVUVTdF3MtbUxMSCNRvCjDE/Nv6xMVua+NTCdghyfkzYlO1x0UFkUzAxOXY0ay6JT3jyA8mN/8wSL4VcMUOyJkYi0AJvTB+Sf01LTvoVc9Apb0xKiEk5LthskxnviUGYHIVATEgxAqC+0RNHiNgoJwFAyWLiXlWOCKrOXOQeRYoJCJ3AqDMcNafjBkeNdN7guLK7u1lLbuPy5hPsj8XbIg6n6w2u0fNT1Ow4OdjUZTK9zZYuDLyaNPjWFeoeG/k7ViuMDaVYsaFFU8foPZz8gVNNrHVz+BmrZVyKSqe+NuqfWql9k4LBBfHhegP3RD+0xFoFSLxiqDN6CeTxIZOMWQkZ67YkAuCwGLoduMSMuFcRMfgik1xlNMtxOnlZyR5QbOl25iUH8OgkXVcZZsnwhHiaiSbBLp2JLxGwGnS5X+p7oEMxeruisYmlW7XEWC01NH57cc8gU6nnm3kDbX2m8Ck6+y0+81f8J//x/L426MevYCrwHnNB2OQ19msnJuo11ues41LhaU9jyMoXrPOmINT8ov4ac3VO19liD6p4GBU5ZZ/HS19T4PGQVBAnnTrpF0flMSdUz71UeEB5EL9xHx/zIO/WQjEvI/CKLx7msKBGkwHWjXV/InIP1poLQ0N1RNmihG94DAI9AldrJlB0tBFA8YvNQ8A/sjvJnzvAC2S8mDCMI212vitK5QP0eFfIBTo0GmVZ3RSAVm4SNwfVT5gwRrKoZwj68V5XHQ21F1PHMKqPhpqW0NixYxsbGsY2cKM2Mgd9LjXkGZZHxZFjhgDRLbRj3z6XP6pjwF73ge29Btb8gWjYRyshQVUiHgPhkHcHVdNbg1UiaOWP+igwMtKACXTRKTOCShDB37MrMn9binv+7UGD3DMtIoLTOyble+myGivb+M0/Be9vwXVet78Beev4UKEBB2P7qJcz36rjc+vLn+8dBkmqrIObbDgWtWMfO6+kIv5GbNlb8wey4foXS/7U53DX6KxANO2rM5pCC6onJrHu2HyhJ8UyrDs1m5jCouGk3hU3zSuVuHs8TR9XFH12Hp8aNZcMm5exGyv0YgFbFglpPC/gpHiY+tqiyDfcd9do1UAyTmC9xuqKV0iKFejZ3DEXFp+Ns30Q2wuAyFMwhK0JfexyhJ8Q9G/pL0iahAytDqVysViQiNGOKctEupiQDtrrT/N7cPDoYyEYToR0cOPUMcwU4sdToV91Jo0KQWW08lXS6TjuoMg7Knfem03cbv5EysxT0Pc7OJSGTkHQ/XcuTP1uIuB7tDn6zDWVYzCF7LeOjqMClQC4Z5CU8Dwf+rwP/S65qyGBAAdsjqM1QeN4DgQFK7WOyV+GX9QjIich+uGZHSMUOSPiJ/oLgVej3w758l/kb4Ni4av0Obffd2alZ4yzyAH3QZMC0mCyBCEyd0uGYVJqLxA6n/7zHuPFf5diJFBFHn7RO/T+68hE6/FsRn6LeuYJHU5t5blY7vYLUnzV+bxfMwvhU5vZ39KAXM5Cjl0Fe0B6qCAKPehpQNqMCc7Ytyu73c/doTYJBV11AiNRvSP3fsTe27E17/l/8xz+O2tX9sGChkXM7yGh1cT5EcOC7s+rdqX/Tp6D//f7mjGXyWzfv3ZWnq3sFHC3p+Qn4xo7X4vEvxoWZobMQ+LCoF+1kMNVfF2SnxvvBnTK42hnkE0wzSeuPeEK3xW+O7wZLpHNluwZLrZPKCvcddnXZYJdOSI9M5MnDBbyUMANDQ7lBjBMIOVcn3q/lsgWv92PeTLypB+kZm5uavKxi0Viu49tB9Sat9cODE6p/eZyomuETEZcYzIB3eOt9qQkQVJ6kN6fixAZZJ8etRbP72JjzfCqKjePQOR678fP0SPn4OnSsHsyIa4Snnnib8toDYqMTOyiXbgv+rwgdc0uzVC8kKsvUGZrvcMW2rPSpi1LXPR7F9Wr81ChqzrcXtYHDZgsY/0pty2vhuRzNK8EKXNHlw0fl16DanB1ho8uV+aAjQ+8wi3/GFFhIULQqAAC3n1CzIjE+eKiDl7Zs73NFfLh8xf0PhZtjg1TTMFme2XzVmT4ZtUDsTjYkHbtpWqWM1r7bMZvAdM59Tx20dGiepNnrUpEw7qWVqSRu/jPndQC4cXZj+W/j0pi7lPuIN0xGzNg4d0ZdxcGPEwkwWwOkZqzSfSOWElDzGb18wzoAb20fxOYVm5R9gGkyzXrQQd5ZtBHq3pe6K7H7F0zyeM9qkCL8sdMsqFSNHoisvKNVa792eA31m94KXuaxLC9fjdjL7a+ybeXDV90cZCf1nnP/w1bz5gaGxbsH9Br5bgGfDleN0Zq6CjoOIB/gPPO/54bru8BZK/hR/IjQF9mKH87CSKlFbWeySDDyVbi508CwVYFEPAqsR8kN+FXr+IINsmAgCyUgUNpTh0dxqizL80Io+siZpCA7XUiXb9+OsRkozTSOZ0qltP1xlk7WSrnXZJhybIwyLsJ4i5Jey46jaXaNTm5mdKBc6MimJsMHk2bwFLbhV9tOJMNEF5qK/whogE/fRrX3Q2nzwRx4vE+ytMS3T/ngxMtInuQ1VWymawabJpnIJKKr+FNo4P//ZtlCvygpgVKZ89asafxd3wdsTo0fTBMq2PR1WuWDz8uY3kPLUbhdntEshYmeIOJI3DpmtlzOp69qiJmHTGg2zHF0rxqxVD2HHcjewa7ZV0uZ6piU06IxmYw+vpqGpVhzWoyvhh54WjDpKs7+qbUGpQpSuXaScePGh9sr517KNpc2zOu96RritXDAztA6pHxgb9Xw4zf3fumbKo3bd4s8lC8cXfuLOfJmPoFsEDP3GvVqCpy8iEE+IbBm0L7jk3bBRlOL8UPHcKXelEjDnXM7zIrYWlLwhIz3NF6e95eFL700CFCVbJaPHvJoQDryD3xczZ8zSCHtmbHmWcLLj0YJ1NM38+IHgzYuKamcXoQU2TcBkQPabd/3YlMNGAAymzn4DnafTjs3jdctLL+0C+dwva0HdbOt3ROM13y12Tclryi5AmFqwy71FXeJ0GV8UryOiNAc6m6rrKyJcwhPzFw0EOBdh7V5kFT9EtuXJiOxnQYgzqEnJBXh50cO3a33BHWAmSWu58VICsH08s8H5ao35w5kk2BtiMUN32ZHWWxWK1CrNVsTiPfvM6xHBkmVIYaDJYcg1EYfTxAtEDItDHkgbYgzUY6nPsjTMf1+ihblE4vtol1zosRibhcAXzUJOsGwtKRGrnRV+uzoQNvwHqJoi77f4Vk/YC1A9cdhLlOkewQb1EfDS4pV88OHtgqUfyf/f9c5i3FSZZ3M5zX47acY5W/Dj8pF4MUBDQ1/DlFfUsCsgqWRlFTYTiKjrsMSQFFHifKJwFAPQUAErY4HjStNOn5EoOqT/HXtz5v3ZbEZannrp1qBI+CZKviVPGa7SoeTXJP7KX3nuCSdIbJ5GfxNXXPyMnQL/ha/PxFtpLMFiZNDiRd5j33zNl8HrlnzcALyfk/B16/E8q0WgyDSajQ4RALNRqBQHpOSDzgpA7cOQk5bn11tV4kfed61yrSnxKckIjtSpajekHv3oGBkvXCkx+caFbs9s0VCi0r0a2cyLC8OclS2sUwaQVw3Do3R24MgQMBWMECZ9m5qyyykVTXk5h9zaxxmDeFJpWhHvILKkaTy0J7RqfHdrKKCo3GQlFBx5h0DOnyrfrUBRXZFeYxWY4odZrU8UiDsUhk7Ribrhpf+vbUf67aMXwpo+LW+xMVFo8RHo0mrYb0bk7awnAyLLR1RcZvnpDn1IziO8711xfETg7D8jREpniMkZSrU23CGM8vwHM8fccWAAAQCG3x0J2mEIDTkIS3YZuvWQfSXjzN2nQvNeLcTa2OF7iO7OWpJCiFccl9OOn5//9HkQRrlhQqjdDEW5f7DBapv87hwRKeN4mNC3is+c9bEl6PfUXWZPxffKKVdza58agNvbFhyOkZnkP8lE9lbAJo+jXjbCaB9tjk+lKAAVgSQTfPZh0nJqS4HgVufhoNIC4cCJJBgMcTbJ021HMVfZiQ19PalgBYUSHk3RKCQycbdgk9bouk9uf2bluq/R6KKuMoqU1Ked0iKrRsolJtHzUtMC3e0mu4ppCzMG+mhIIuG1DU4QklXU5Jed0tVBjwCpW6IlHTWVjabJnuzOAxgmTQIrsJVBSMeo4HdvlvsMnJ6PdbG/8hVpguduttOP8VAsQ6ZqnOds9shInkxYt0Z+AciTJSAYrXOXN52GwMb9a1Il8bOBYBiY2dNaHE7fAqCgnM6GwQ+fbfgJU4Ukxp9nr4PxBV0BCU/1ebzSG9KiFXs6JUHeHM2htJhCG0uhHxBCMRwLEcIgzlj1cAClurLJFVOuhGurPnVdbtq35MKH6+FukHHsqBxeEJRBKZQqXRGUxW1dVUGx0TG1dd9bC9d8+iDLmkjgU7B+0LRae7NxkKDLbDqUzCR4MqyDYWU+rYJEOG/Y97kyuGijtVjgVC+0bpit0LhOtUXQ3BlpL6GdakZWjX6hgI9xyHpijQ1hbRCUJJ/5vonXsqLBOOt0aKTVUugy2Lm0x2WKsBAA==\") format(\"woff2\"),url(\"//at.alicdn.com/t/font_1350427_of0crv6lonr.woff?t=1571729233401\") format(\"woff\"),url(\"//at.alicdn.com/t/font_1350427_of0crv6lonr.ttf?t=1571729233401\") format(\"truetype\"),url(\"//at.alicdn.com/t/font_1350427_of0crv6lonr.svg?t=1571729233401#iconfont\") format(\"svg\")}.iconfont{font-family:'iconfont' !important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-94:before{content:'\\E67E'}.icon-jianhao:before{content:'\\E615'}.icon-jiahao:before{content:'\\E613'}.icon-world:before{content:'\\E609'}.icon-yanjing:before{content:'\\E6B0'}.icon-tupian:before{content:'\\E7ED'}.icon-jiaose:before{content:'\\E64D'}.icon-jiantou:before{content:'\\E64E'}.icon-guanbi:before{content:'\\E641'}.icon-icon-test:before{content:'\\E602'}.icon-shijie:before{content:'\\E61D'}.icon-youxi:before{content:'\\E680'}.icon-wenjian:before{content:'\\E793'}.icon-dengpao:before{content:'\\E604'}.icon-biyanjing:before{content:'\\E901'}.icon-bianji:before{content:'\\E627'}.icon-fenzhi:before{content:'\\E6E9'}.icon-fenzhijigou:before{content:'\\E60C'}.icon-duigou:before{content:'\\E605'}.icon-camera:before{content:'\\E63E'}.icon-zujian:before{content:'\\E693'}.icon-ziyuan:before{content:'\\E614'}.icon-changjingguanli:before{content:'\\E603'}.sein-inspector-container{color:#fff}.sein-inspector-container .u-box-inside{position:relative;width:100%;height:100%;display:block}.sein-inspector-container .u-scrollbar::-webkit-scrollbar{background-color:rgba(255,255,255,0.08);width:4px;height:4px;background-clip:padding-box}.sein-inspector-container .u-scrollbar::-webkit-scrollbar-button{background-color:green;display:none}.sein-inspector-container .u-scrollbar::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,0.15);border-radius:4px}.sein-inspector-container .u-scrollbar::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0.5);display:none}.sein-inspector-container .u-scrollbar:hover::-webkit-scrollbar{background-color:rgba(255,255,255,0.08);width:4px;height:4px;background-clip:padding-box}.sein-inspector-container .u-scrollbar:hover::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,0.4);border-radius:4px}.sein-inspector-container .sein-inspector-component{line-height:25px;height:25px;padding:5px;border-left:5px solid transparent;border-bottom:1px solid rgba(255,255,255,0.07);transition:all 0.1s ease 0s}.sein-inspector-container .sein-inspector-component:hover{border-left-color:#aaa;border-bottom:1px solid rgba(255,255,255,0.15)}.sein-inspector-container .sein-inspector-component .sein-inspector-component-box{position:relative}.sein-inspector-container .sein-inspector-component .sein-inspector-component-box .sein-inspector-label{font-size:12px;overflow:hidden;white-space:nowrap;word-break:break-all;text-overflow:ellipsis}\n", ""]);

// exports


/***/ })
/******/ ]);

/***/ }),

/***/ "./node_modules/_style-loader@0.19.1@style-loader/lib/addStyles.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_style-loader@0.19.1@style-loader/lib/addStyles.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/_style-loader@0.19.1@style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/_style-loader@0.19.1@style-loader/lib/urls.js":
/*!********************************************************************!*\
  !*** ./node_modules/_style-loader@0.19.1@style-loader/lib/urls.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/_webpack@4.41.2@webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

}]);