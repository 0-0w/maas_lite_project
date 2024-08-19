import { createContext } from "react";

export const DeviceContext = createContext({
    Apple : false,
    Andriod : false,
    Security: false,
    ManageApps: false,
    SetUpkiosk: false
});
