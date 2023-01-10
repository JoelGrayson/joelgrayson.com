const keyboard = {
    enabled: true,

    elements: {
        main: null,
        keysContainer: null,
        keys: [],
    },

    eventHandlers: {
        oninput: null,
        onclose: null,
    },

    properties: {
        value: "",
        capsLock: false,
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Setup main elements
        this.elements.main.classList.add("keyboard", "keyboard-hidden");
        this.elements.keysContainer.classList.add("keyboard-keys");
        this.elements.keysContainer.appendChild(this.createKeys());

        this.elements.keys =
            this.elements.keysContainer.querySelectorAll(".keyboard-key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .trigger-keyboard
        let keyboardTrigger = document.querySelectorAll(".trigger-keyboard");
        keyboardTrigger.forEach((element) => {
          element.addEventListener("focus", () => {
                if (this.enabled) {
                    this.open(element.value, (currentValue) => {
                        element.value = currentValue;
                    });
                }
            });
            element.addEventListener("focusout", () => {
            });
        });
        //Keep in focus
        let keys = document.getElementsByClassName("keyboard-key");
        setTimeout(() => {
            for (let i = 0; i < keys.length; i++) {
                if (keys[i].innerText !== "Done") {
                    //done key should close keyboard & not focus on input
                    keys[i].addEventListener("click", () => {
                        setTimeout(() => {
                            keyboardTrigger.forEach((keyboardEl) => {
                                keyboardEl.focus();
                            });
                            setTimeout(() => {
                                keyboardTrigger.forEach((keyboardEl) => {
                                  keyboardEl.selectionStart = keyboardEl.selectionEnd = 10000;
                                });
                            }, 0); //Place cursor at the end of the line
                        }, 10);
                    });
                }
            }
        }, 500); //after 0.5 secs so document.getElementsByClassName() has time to find keys
    },

    createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
            "-",
            "backspace",
            "q",
            "w",
            "e",
            "r",
            "t",
            "y",
            "u",
            "i",
            "o",
            "p",
            "(",
            ")",
            "a",
            "s",
            "d",
            "f",
            "g",
            "h",
            "j",
            "k",
            "l",
            "@",
            "enter",
            "z",
            "x",
            "c",
            "v",
            "b",
            "n",
            "m",
            ".",
            "done",
            "space",
        ];

        // Creates HTML for an icon

        keyLayout.forEach((key) => {
            const keyElement = document.createElement("button");
            const insertLineBreak =
                ["backspace", ")", "enter", "done"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard-key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard-key--wide");
                    keyElement.innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 24 24' fill='white' width='24'><path d='M0 0h24v24H0z' fill='none'/><path d='M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z'/></svg>`; //backspace material ui icon

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(
                            0,
                            this.properties.value.length - 1
                        );
                        this._triggerEvent("oninput");
                    });

                    break;

                case "enter":
                    keyElement.classList.add("keyboard-key--wide");
                    keyElement.innerText = "Enter";

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "space":
                    keyElement.classList.add("keyboard-key--extra-wide");
                    keyElement.innerText = "Space";

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                case "done":
                    keyElement.classList.add(
                        "keyboard-key--wide",
                        "keyboard-key--dark"
                    );
                    keyElement.innerText = "Done";

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                    });

                    break;

                default:
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", () => {
                        this.properties.value += this.properties.capsLock
                            ? key.toUpperCase()
                            : key.toLowerCase();
                        this._triggerEvent("oninput");
                    });

                    break;
            }

            fragment.appendChild(keyElement);

            if (insertLineBreak) {
                fragment.appendChild(document.createElement("br"));
            }
        });

        return fragment;
    },

    _triggerEvent(handlerName) {
        if (typeof this.eventHandlers[handlerName] == "function") {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;

        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock
                    ? key.textContent.toUpperCase()
                    : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.remove("keyboard-hidden");
    },

    close() {
        this.properties.value = "";
        this.eventHandlers.oninput = oninput;
        this.eventHandlers.onclose = onclose;
        this.elements.main.classList.add("keyboard-hidden");
    },
};

window.addEventListener("DOMContentLoaded", function () {
    //Add stylesheet
    let keyboardLinkEl = document.createElement("link");
    keyboardLinkEl.rel = "stylesheet";
    keyboardLinkEl.href = "https://w.joelgrayson.com/keyboard/v1.css";
    document.head.appendChild(keyboardLinkEl);

    keyboard.init();
});
