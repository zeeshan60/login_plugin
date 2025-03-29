import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(LoginPluginPlugin)
public class LoginPluginPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "LoginPluginPlugin"
    public let jsName = "LoginPlugin"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "login", returnType: CAPPluginReturnPromise)
    ]
    private let implementation = LoginPlugin()

    @objc func login(_ call: CAPPluginCall) {
        let value = call.getString("value") ?? ""
        call.resolve([
            "value": implementation.login(value)
        ])
    }
}
