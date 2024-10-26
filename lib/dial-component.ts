import { navigate } from "astro:transitions/client";

class RotaryDial extends HTMLElement {
    constructor() {
        super();

        const elementSlugs: string[] | undefined = JSON.parse(
            this.dataset.slugs ?? "[]",
        );
        let rect: DOMRect;

        const startRotation = 0;
        const minNumberAngle = 80;
        const maxNumberAngle = 340;
        const stepPerNumber = (maxNumberAngle - minNumberAngle) / 10;

        let startAngle = 0;
        let currentAngle = 0;

        let num: number | null = null;
        let isGrabbing = false;
        let isResetting = false;

        // Remove 'active' class from all list items, except the one at the correct index
        const destinationList: HTMLUListElement | null = this.querySelector(
            "ul.destination-list",
        );

        // Rotation is the angle traveled
        let rotation = (currentAngle - startAngle) % 360;
        let center = { x: 0, y: 0 };
        let pointer = { x: 0, y: 0 };

        const calculateRect = () => {
            rect = this.getBoundingClientRect();

            center = {
                x: rect?.left + rect?.width / 2,
                y: rect?.top + rect?.height / 2,
            };
        };

        const setNum = (input: number | null) => {
            num = input;
            if (input !== null) {
                const index = input === 0 ? 10 : input;

                destinationList
                    ?.querySelector(`li:nth-child(${index})`)
                    ?.classList.add("active");
                destinationList
                    ?.querySelectorAll(`li:not(:nth-child(${index}))`)
                    .forEach((l) => l.classList.remove("active"));
            } else {
                destinationList
                    ?.querySelectorAll("li")
                    .forEach((l) => l.classList.remove("active"));
            }
        };
        const setGrabbing = (input: boolean) => {
            isGrabbing = input;
            this.classList.toggle("grabbing", input);
        };
        const setResetting = (input: boolean) => {
            isResetting = input;
            this.classList.toggle("resetting", input);
        };

        const circleGroup = this.querySelector<SVGElement>(".circles");
        const clipNumbers = this.querySelector<SVGElement>("#clipNumbers");
        const setRotation = (input: number) => {
            rotation = input;
            circleGroup?.style.setProperty("--rotation", input.toString());
            clipNumbers?.style.setProperty("--rotation", input.toString());
        };

        const setCurrentAngle = (input: number) => {
            currentAngle = input;
            setRotation((input - startAngle) % 360);
        };
        const setStartAngle = (input: number) => {
            startAngle = input;
            setRotation((currentAngle - input) % 360);
        };

        function clamp(num: number, min: number, max: number) {
            return Math.max(min, Math.min(num, max));
        }

        const getDeg = (cX: number, cY: number) => {
            const x = cX - center.x;
            const y = cY - center.y;
            let deg = (Math.atan(y / x) * 180) / Math.PI;
            if (x < 0) {
                deg += 180;
            } else if (x >= 0 && y < 0) {
                deg += 360;
            }
            const finalDeg = clamp(deg, 0, 360);
            return finalDeg;
        };

        const goBack = () => {
            if (rotation > startRotation) {
                setResetting(true);
                setRotation(rotation - 5);

                requestAnimationFrame((_) => {
                    goBack();
                });

                if (rotation - startRotation < 0.05) {
                    setRotation(startRotation);
                    setResetting(false);
                }
            }
        };

        const sendNumber = (finalNumber: number | null) => {
            if (!finalNumber) return;

            const finalIndex = finalNumber - 1;
            const slug = elementSlugs?.at(finalIndex);
            console.log(finalNumber, slug);

            if (!slug) return;

            navigate(slug);
        };

        function pointerMove(e: PointerEvent) {
            e.preventDefault();

            pointer = { x: e.clientX, y: e.clientY };
            const a = getDeg(e.clientX, e.clientY);

            // Check if rotating is allowed
            if ((a - startAngle) % 360 > maxNumberAngle - stepPerNumber / 2)
                return;

            setCurrentAngle(a);

            const n = Math.ceil((rotation - minNumberAngle) / stepPerNumber);
            setNum(n > 0 && n <= 10 ? n % 10 : null);
        }

        function pointerDown(e: PointerEvent) {
            pointer = { x: e.clientX, y: e.clientY };
            setCurrentAngle(getDeg(e.clientX, e.clientY));
            setStartAngle(currentAngle - 360);
            setGrabbing(true);

            window.addEventListener("pointermove", pointerMove);
            window.addEventListener("pointerup", pointerUp);
        }

        function pointerUp() {
            goBack();
            sendNumber(num);

            setNum(null);
            setGrabbing(false);

            window.removeEventListener("pointermove", pointerMove);
            window.removeEventListener("pointerup", pointerUp);
        }

        calculateRect();

        window.addEventListener("resize", () => {
            calculateRect();
        });
        window.addEventListener("scroll", () => {
            calculateRect();
        });
        this.addEventListener("pointerdown", pointerDown);
        this.addEventListener("touchmove", (e) => e.preventDefault());
    }
}

customElements.define("rotary-dial", RotaryDial);
