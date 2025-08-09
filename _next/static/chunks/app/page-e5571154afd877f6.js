(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    4751: function(e, t, i) {
        Promise.resolve().then(i.bind(i, 7376)),
        Promise.resolve().then(i.bind(i, 5725)),
        Promise.resolve().then(i.t.bind(i, 6249, 23)),
        Promise.resolve().then(i.bind(i, 7484)),
        Promise.resolve().then(i.bind(i, 9605)),
        Promise.resolve().then(i.bind(i, 9325)),
        Promise.resolve().then(i.bind(i, 1750)),
        Promise.resolve().then(i.t.bind(i, 8173, 23))
    },
    7376: function(e, t, i) {
        "use strict";
        var a = i(7437);
        i(2265);
        var s = i(9321)
          , n = i(56)
          , r = i(6648);
        t.default = () => (0,
        a.jsxs)("div", {
            className: "flex flex-row relative items-center justify-center min-h-screen w-full h-full",
            children: [(0,
            a.jsx)("div", {
                className: "absolute w-auto h-auto top-0 z-[5]",
                children: (0,
                a.jsxs)(s.E.div, {
                    variants: n.P6,
                    className: "text-[40px] font-medium text-center text-gray-200",
                    children: ["Your", " ", (0,
                    a.jsx)("span", {
                        className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500",
                        children: "Next"
                    }), " ", "Step"]
                })
            }), (0,
            a.jsxs)("div", {
                className: "flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto",
                children: [(0,
                a.jsxs)("div", {
                    className: "flex flex-col items-center group cursor-pointer w-auto h-auto",
                    children: [(0,
                    a.jsx)(r.default, {
                        src: "/LockTop.png",
                        alt: "Lock top",
                        width: 50,
                        height: 50,
                        className: "w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
                    }), (0,
                    a.jsx)(r.default, {
                        src: "/LockMain.png",
                        alt: "Lock Main",
                        width: 70,
                        height: 70,
                        className: " z-10"
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]",
                    children: (0,
                    a.jsx)("button", {
                        className: "Welcome-text text-[12px]",
                        children: (0,
                        a.jsx)("a", {
                            href: "https://www.hackquest.io/en/hackathon/explore/Hack-Vortex",
                            target: "_blank",
                            rel: "noreferrer noopener",
                            children: "Unlock the Ability to Push Your Limits"
                        })
                    })
                })]
            }), (0,
            a.jsx)("div", {
                className: "absolute z-[20] bottom-[10px] px-[5px]",
                children: (0,
                a.jsx)("div", {
                    className: "cursive text-[20px] font-medium text-center text-gray-300",
                    children: "Meet talented developers, and see where you exactly stand among them."
                })
            }), (0,
            a.jsx)("div", {
                className: "w-full flex items-start justify-center absolute",
                children: (0,
                a.jsx)("video", {
                    loop: !0,
                    muted: !0,
                    autoPlay: !0,
                    playsInline: !0,
                    preload: "false",
                    className: "w-full h-auto",
                    src: "/encryption.webm/"
                })
            })]
        })
    },
    5725: function(e, t, i) {
        "use strict";
        var a = i(7437)
          , s = i(3146)
          , n = i(9321)
          , r = i(4446)
          , o = i(2265);
        let l = e => {
            let {question: t, answer: i, isOpen: s, onClick: o} = e;
            return (0,
            a.jsxs)("div", {
                className: "w-full mb-4",
                children: [(0,
                a.jsx)(n.E.div, {
                    onClick: o,
                    className: "cursor-pointer p-4 bg-slate-500/50 rounded-lg shadow-lg",
                    whileHover: {
                        scale: 1.02
                    },
                    children: (0,
                    a.jsx)(n.E.h2, {
                        className: "text-lg font-semibold",
                        animate: {
                            color: s ? "#06b6d4" : "#ddd"
                        },
                        transition: {
                            duration: .3
                        },
                        children: t
                    })
                }), (0,
                a.jsx)(r.M, {
                    initial: !1,
                    children: s && (0,
                    a.jsx)(n.E.div, {
                        initial: {
                            height: 0,
                            opacity: 0
                        },
                        animate: {
                            height: "auto",
                            opacity: 1
                        },
                        exit: {
                            height: 0,
                            opacity: 0
                        },
                        transition: {
                            duration: .5,
                            ease: "easeInOut"
                        },
                        className: "overflow-hidden",
                        children: (0,
                        a.jsx)("div", {
                            className: "p-4 bg-slate-700/40 rounded-lg",
                            children: (0,
                            a.jsx)("p", {
                                className: "text-slate-400 text-sm",
                                children: i
                            })
                        })
                    })
                })]
            })
        }
        ;
        t.default = () => {
            let[e,t] = (0,
            o.useState)(null)
              , i = i => {
                t(e === i ? null : i)
            }
            ;
            return (0,
            a.jsxs)("div", {
                className: "flex flex-col items-center justify-center pb-20 z-[999] px-2",
                id: "faq",
                children: [(0,
                a.jsx)("h1", {
                    className: "text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20",
                    children: "Frequently Asked Questions"
                }), (0,
                a.jsx)("div", {
                    className: "w-full max-w-4xl",
                    children: s.EB.map( (t, s) => (0,
                    a.jsx)(l, {
                        question: t.question,
                        answer: t.answer,
                        isOpen: e === s,
                        onClick: () => i(s)
                    }, s))
                })]
            })
        }
    },
    7484: function(e, t, i) {
        "use strict";
        var a = i(7437)
          , s = i(2265)
          , n = i(9805)
          , r = i(9321)
          , o = i(3473)
          , l = i(3146);
        let c = e => {
            let {date: t, title: i, descr: l} = e
              , c = (0,
            n._)()
              , [d,u] = (0,
            o.YD)({
                triggerOnce: !0,
                threshold: .1
            });
            return s.useEffect( () => {
                u && c.start("visible")
            }
            , [c, u]),
            (0,
            a.jsxs)(r.E.li, {
                ref: d,
                initial: "hidden",
                animate: c,
                variants: {
                    hidden: {
                        opacity: 0,
                        y: 50
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: .5,
                            ease: "easeOut"
                        }
                    }
                },
                className: "timeline-item",
                children: [(0,
                a.jsx)("div", {
                    className: "date",
                    children: t
                }), (0,
                a.jsx)("div", {
                    className: "title",
                    children: i
                }), (0,
                a.jsx)("div", {
                    className: "descr",
                    children: l
                })]
            })
        }
        ;
        t.default = () => (0,
        a.jsxs)("section", {
            className: "flex flex-col items-center justify-center py-20",
            id: "timeline",
            children: [(0,
            a.jsx)("h1", {
                className: "text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20",
                children: "Event Timeline"
            }), (0,
            a.jsx)("ul", {
                className: "timeline-container",
                children: l.AR.map( (e, t) => (0,
                a.jsx)(c, {
                    date: e.date,
                    title: e.title,
                    descr: e.descr
                }, t))
            })]
        })
    },
    9605: function(e, t, i) {
        "use strict";
        var a = i(7437);
        i(2265);
        var s = i(9321)
          , n = i(56)
          , r = i(7788)
          , o = i(6648);
        t.default = () => (0,
        a.jsxs)(s.E.div, {
            initial: "hidden",
            animate: "visible",
            className: "flex flex-row items-center justify-center px-1 md:px-20 mt-40 w-full z-[20]",
            children: [(0,
            a.jsxs)("div", {
                className: "h-full w-full flex flex-col gap-5 justify-center m-auto text-start",
                children: [(0,
                a.jsxs)(s.E.div, {
                    variants: n.P6,
                    className: "Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]",
                    children: [(0,
                    a.jsx)(r.Z, {
                        className: "text-[#b49bff] mr-[10px] h-5 w-5"
                    }), (0,
                    a.jsx)("h1", {
                        className: "Welcome-text text-[13px]",
                        children: "Sync of Innovation & Creativity"
                    })]
                }), (0,
                a.jsx)(s.E.div, {
                    variants: (0,
                    n.xq)(.5),
                    className: "flex flex-col gap-6 mt-6 text-5xl md:text-7xl font-bold text-white max-w-[600px] w-auto h-auto",
                    children: (0,
                    a.jsxs)("span", {
                        children: ["At", " ", (0,
                        a.jsx)("span", {
                            className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 underline underline-offset-[6px] decoration-purple-800/20",
                            children: "LOGIC SYNC"
                        }), " ", "Experience the Best of it."]
                    })
                }), (0,
                a.jsx)(s.E.p, {
                    variants: (0,
                    n.xq)(.8),
                    className: "text-sm md:text-base text-gray-400 my-5 max-w-[600px] italic",
                    children: "Live through a thrilling competition of the best of the best coders from around the nation, at LOGIC SYNC, a hybrid technical community organized by Geekroom TIIPS"
                }), (0,
                a.jsx)(s.E.a, {
                    variants: (0,
                    n.xq)(1),
                    className: "py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]",
                    target: "_blank",
                    href: "https://www.hackquest.io/en/hackathon/explore/Hack-Vortex",
                    rel: "noreferrer noopener",
                    children: "Register"
                })]
            }), (0,
            a.jsx)(s.E.div, {
                variants: (0,
                n.Zt)(.8),
                className: "w-full h-full flex justify-center items-center",
                children: (0,
                a.jsx)(o.default, {
                    src: "/mainIconsdark.svg",
                    alt: "work icons",
                    height: 650,
                    width: 650
                })
            })]
        })
    },
    9325: function(e, t, i) {
        "use strict";
        var a = i(7437);
        i(2265);
        var s = i(9321)
          , n = i(3473)
          , r = i(6648);
        t.default = e => {
            let {src: t, width: i, height: o, index: l} = e
              , {ref: c, inView: d} = (0,
            n.YD)({
                triggerOnce: !0
            });
            return (0,
            a.jsx)(s.E.div, {
                ref: c,
                initial: "hidden",
                variants: {
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1
                    }
                },
                animate: d ? "visible" : "hidden",
                custom: l,
                transition: {
                    delay: .3 * l
                },
                children: (0,
                a.jsx)(r.default, {
                    src: t,
                    width: i,
                    height: o,
                    alt: "skill image"
                })
            })
        }
    },
    1750: function(e, t, i) {
        "use strict";
        var a = i(7437);
        i(2265);
        var s = i(9321)
          , n = i(56)
          , r = i(7788);
        t.default = () => (0,
        a.jsxs)("div", {
            className: "w-full h-auto flex flex-col items-center justify-center",
            children: [(0,
            a.jsxs)(s.E.div, {
                variants: n.P6,
                className: "Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]",
                children: [(0,
                a.jsx)(r.Z, {
                    className: "text-[#b49bff] mr-[10px] h-5 w-5"
                }), (0,
                a.jsx)("h1", {
                    className: "Welcome-text text-[13px]",
                    children: "Set your Mark"
                })]
            }), (0,
            a.jsx)(s.E.div, {
                variants: (0,
                n.xq)(.5),
                className: "text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]",
                children: "Hone Your Skills, and Push Your Talents Further"
            }), (0,
            a.jsx)(s.E.div, {
                variants: (0,
                n.Zt)(.5),
                className: "cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center",
                children: "Use every tool in your toolbox to create the next best tech solution."
            })]
        })
    },
    3146: function(e, t, i) {
        "use strict";
        i.d(t, {
            AR: function() {
                return a
            },
            EB: function() {
                return s
            }
        });
        let a = [{
            date: "August 25",
            title: "Registration",
            descr: "The official commencement of the registration process for our Community."
        }, {
            date: "September 5 - 15",
            title: "Acceptance Mails",
            descr: "During this time period, acceptance mails will be sent out to eligible participants."
        }, {
            date: "September 5",
            title: "Mentors Reveal",
            descr: "The mentors would be revealed on our social medias, make sure you follow us!"
        }, {
            date: "September 7",
            title: "Judges Reveal",
            descr: "Following our mentors reveal, the judges would be on our social medias as well!"
        }, {
            date: "September 20",
            title: "Registration End",
            descr: "The start of this day would mark the end of our hackathon's registration process."
        }, {
            date: "September 22",
            title: "Online Round",
            descr: "An online mentoring round would be conducted on this day to filter out participating teams for the next (offline) round."
        }, {
            date: "September 25",
            title: "Offline Round",
            descr: "The start of our offline, final judgement round. Good luck in advance to all the selected participants :)"
        }]
          , s = [{
            question: "How would I benefit from participating in this?",
            answer: "We get you tons of benefits! From free swags, goodies, food, beverages, to the opportunity of meeting tons of fellow talented developers and expanding your network like never before."
        }, {
            question: "Who can participate?",
            answer: "This hackathon is open to anyone with a passion for technology and innovation. No restrictions!"
        }, {
            question: "What about the entry fee?",
            answer: "Nope, doesn't exist! We're giving you an opportunity this big, while asking nothing from you in return."
        }, {
            question: "Do I need a team?",
            answer: "You can participate solo, but it is highly recommended to participate in a team."
        }]
    },
    56: function(e, t, i) {
        "use strict";
        function a(e) {
            return {
                hidden: {
                    x: -100,
                    opacity: 0
                },
                visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: e,
                        duration: .5
                    }
                }
            }
        }
        function s(e) {
            return {
                hidden: {
                    x: 100,
                    opacity: 0
                },
                visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                        delay: e,
                        duration: .5
                    }
                }
            }
        }
        i.d(t, {
            P6: function() {
                return n
            },
            Zt: function() {
                return s
            },
            xq: function() {
                return a
            }
        });
        let n = {
            hidden: {
                y: -100,
                opacity: 0
            },
            visible: {
                y: 0,
                opacity: 1,
                transition: {
                    delay: .5,
                    duration: .5
                }
            }
        }
    },
    6249: function() {}
}, function(e) {
    e.O(0, [55, 173, 644, 971, 23, 744], function() {
        return e(e.s = 4751)
    }),
    _N_E = e.O()
}
]);
