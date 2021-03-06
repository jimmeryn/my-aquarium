import * as React from "react";
import FishBowl from "../assets/fishbowl.svg";
import gsap from "gsap";

const FishBowlComponent = () => {
  const wrapper = React.useRef(null);

  React.useEffect(() => {
    const [elements] = wrapper.current.children;
    const [
      floor,
      square,
      ball,
      tankShadow,
      tank,
      tankInner,
      water3,
      water2,
      water1,
      flower1Line,
      flower1F,
      flower1FShadows,
      flower1Stone,
      flower1StoneShadow,
      flower2,
      fish1,
      fish2,
      data1,
      data2,
      data3,
    ] = elements.children;
    gsap.set(
      [
        square,
        ball,
        tankShadow,
        tank,
        tankInner,
        water3,
        water2,
        water1,
        flower1Line,
        flower1F,
        flower1FShadows,
        flower1Stone,
        flower1StoneShadow,
        flower2,
        fish1,
        fish2,
        data1,
        data2,
        data3,
      ],
      { autoAlpha: 0 }
    );

    gsap.set(
      [
        flower1Line,
        flower1F,
        flower1FShadows,
        flower1Stone,
        flower1StoneShadow,
        flower2,
      ],
      { transformOrigin: "50% 100%" }
    );

    // Show timeline
    const tl = gsap.timeline({ defaults: { ease: "Power3.inOut" } });
    tl.fromTo(
      tank,
      { x: "-=300" },
      { duration: 0.5, x: "+=300", autoAlpha: 1 }
    );
    tl.fromTo(
      [tankInner, tankShadow],
      { x: "-=300" },
      { duration: 0.5, x: "+=300", autoAlpha: 0.3 },
      "-=0.5"
    );
    tl.fromTo(water1, { scale: 0 }, { duration: 0.3, scale: 1, autoAlpha: 1 });
    tl.fromTo(
      water2,
      { scale: 0.7 },
      { duration: 0.2, scale: 1, autoAlpha: 0.8 },
      "-=0.1"
    );
    tl.fromTo(
      water3,
      { scale: 0.7 },
      { duration: 0.1, scale: 1, autoAlpha: 0.6 },
      "-=0.2"
    );

    tl.to([ball, square], { duration: 0.5, autoAlpha: 1 });
    tl.to(fish1, { duration: 0.5, autoAlpha: 1 }, "-=0.5");
    tl.to(fish2, { duration: 0.5, autoAlpha: 1 }, "-=0.45");

    tl.fromTo(
      [flower1Line, flower1Stone],
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 0.3,
        autoAlpha: 1,
      },
      "-=0.5"
    );

    tl.fromTo(
      flower1StoneShadow,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 0.3,
        autoAlpha: 0.5,
      },
      "-=0.3"
    );

    tl.to(flower1F, {
      duration: 0.3,
      autoAlpha: 1,
    });
    tl.to(
      flower1FShadows,
      {
        duration: 0.3,
        autoAlpha: 0.3,
      },
      "-=0.2"
    );

    tl.fromTo(
      flower2,
      { scaleY: 0.8 },
      {
        duration: 0.5,
        scaleY: 1,
        autoAlpha: 1,
      },
      "-=0.5"
    );
    tl.to(data1, { autoAlpha: 1 }, "-=0.4");
    tl.to(data3, { autoAlpha: 1 }, "-=0.3");
    tl.to(data2, { autoAlpha: 1 }, "-=0.2");

    // Get datas childrens
    const ball1b = data1.children[0],
      ball1s = data1.children[3],
      ball2b = data2.children[0],
      ball2s = data2.children[2],
      ball3b = data3.children[0],
      ball3s = data3.children[2];

    // Loop timeline
    const tl2 = gsap.timeline({
      defaults: { ease: "Power3.inOut", repeat: -1, yoyo: true },
    });

    gsap.set([ball1b, ball1s, ball2b, ball2s, ball3b, ball3s], {
      transformOrigin: "50% 50%",
    });

    gsap.set(square, {
      transformOrigin: "100% 100%",
    });

    tl2.fromTo(fish1, { rotateZ: "-=10" }, { duration: 3, rotateZ: "+=10" });
    tl2.fromTo(fish2, { rotateZ: "-=10" }, { duration: 2, rotateZ: "+=10" });

    tl2.fromTo(
      water1,
      { rotateZ: "-=3" },
      { duration: 3, rotateZ: "+=3" },
      "-=2"
    );
    tl2.fromTo(
      water2,
      { rotateZ: "-=2" },
      { duration: 2, rotateZ: "+=2" },
      "-=3"
    );
    tl2.fromTo(
      water3,
      { rotateZ: "-=1" },
      { duration: 1, rotateZ: "+=1" },
      "-=2"
    );

    tl2.fromTo(
      [flower1F, flower1FShadows, flower1Line, flower2],
      { rotateZ: "-=3" },
      { duration: 2, ease: "Power2.inOut", rotateZ: "+=3" }
    );

    tl2.fromTo(ball1b, { scale: 0.85 }, { duration: 3, scale: 1 }, "-=3");
    tl2.fromTo(ball1s, { scale: 0.85 }, { duration: 3, scale: 1 });

    tl2.fromTo(ball2b, { scale: 0.85 }, { duration: 3, scale: 1 }, "-=0.1");
    tl2.fromTo(ball2s, { scale: 0.85 }, { duration: 3, scale: 1 }, "-=0.15");

    tl2.fromTo(ball3b, { scale: 0.85 }, { duration: 3, scale: 1 }, "-=0.2");
    tl2.fromTo(ball3s, { scale: 0.85 }, { duration: 3, scale: 1 }, "-=0.24");
  }, [false]);

  return (
    <div ref={wrapper}>
      <FishBowl className="fish-bowl" />
    </div>
  );
};

export default FishBowlComponent;
