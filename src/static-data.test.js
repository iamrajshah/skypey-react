const rewire = require("rewire")
const static_data = rewire("./static-data")
const generateMsg = static_data.__get__("generateMsg")
const generateUsers = static_data.__get__("generateUsers")
const generateMsgs = static_data.__get__("generateMsgs")
// @ponicode
describe("static_data.getMessages", () => {
    test("0", () => {
        let callFunction = () => {
            static_data.getMessages(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            static_data.getMessages("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            static_data.getMessages("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            static_data.getMessages("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            static_data.getMessages("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            static_data.getMessages(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("generateMsg", () => {
    test("0", () => {
        let callFunction = () => {
            generateMsg(-29.45)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            generateMsg(0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            generateMsg(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            generateMsg(-1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            generateMsg(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            generateMsg(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("generateUsers", () => {
    test("0", () => {
        let callFunction = () => {
            generateUsers(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            generateUsers(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            generateUsers(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            generateUsers(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            generateUsers(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            generateUsers(-Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("generateMsgs", () => {
    test("0", () => {
        let callFunction = () => {
            generateMsgs(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            generateMsgs(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            generateMsgs(-5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            generateMsgs(-100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            generateMsgs(100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            generateMsgs(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
