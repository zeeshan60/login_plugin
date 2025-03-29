import Foundation

@objc public class LoginPlugin: NSObject {
    @objc public func login(_ value: String) -> String {
        print(value)
        return value + "from swift"
    }
}
