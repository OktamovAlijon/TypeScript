"use strict";
// Type Casting (Type Assertion) (Turi bilan ishlash)
// Type guards (Turi bilan tekshirish)
// Asserts (tasdiqlash)
Object.defineProperty(exports, "__esModule", { value: true });
function getInfo(vehicle) {
    if ('speed' in vehicle) {
        console.log(`Speed: ${vehicle.speed} km/h`);
    }
    else {
        console.log(`Altitude: ${vehicle.altitude} metres`);
    }
}
getInfo({ speed: 100 });
getInfo({ altitude: 10000 });
//# sourceMappingURL=app.js.map