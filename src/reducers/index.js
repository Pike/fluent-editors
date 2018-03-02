const initialState = {
    messages: [        {
            "type": "Message",
            "annotations": [],
            "id": {
                "type": "Identifier",
                "name": "hello-world",
                "span": {
                    "type": "Span",
                    "start": 38,
                    "end": 49
                }
            },
            "value": {
                "type": "Pattern",
                "elements": [
                    {
                        "type": "TextElement",
                        "value": "Hello, world!",
                        "span": {
                            "type": "Span",
                            "start": 52,
                            "end": 65
                        }
                    }
                ],
                "span": {
                    "type": "Span",
                    "start": 52,
                    "end": 65
                }
            },
            "attributes": [],
            "comment": null,
            "span": {
                "type": "Span",
                "start": 38,
                "end": 65
            }
        },
        {
            "type": "Message",
            "annotations": [],
            "id": {
                "type": "Identifier",
                "name": "shared-photos",
                "span": {
                    "type": "Span",
                    "start": 67,
                    "end": 80
                }
            },
            "value": {
                "type": "Pattern",
                "elements": [
                    {
                        "type": "Placeable",
                        "expression": {
                            "type": "ExternalArgument",
                            "id": {
                                "type": "Identifier",
                                "name": "user_name",
                                "span": {
                                    "type": "Span",
                                    "start": 90,
                                    "end": 99
                                }
                            },
                            "span": {
                                "type": "Span",
                                "start": 89,
                                "end": 99
                            }
                        },
                        "span": {
                            "type": "Span",
                            "start": 87,
                            "end": 101
                        }
                    },
                    {
                        "type": "TextElement",
                        "value": " ",
                        "span": {
                            "type": "Span",
                            "start": 101,
                            "end": 102
                        }
                    },
                    {
                        "type": "Placeable",
                        "expression": {
                            "type": "SelectExpression",
                            "expression": {
                                "type": "ExternalArgument",
                                "id": {
                                    "type": "Identifier",
                                    "name": "photo_count",
                                    "span": {
                                        "type": "Span",
                                        "start": 105,
                                        "end": 116
                                    }
                                },
                                "span": {
                                    "type": "Span",
                                    "start": 104,
                                    "end": 116
                                }
                            },
                            "variants": [
                                {
                                    "type": "Variant",
                                    "key": {
                                        "type": "NumberExpression",
                                        "value": "0",
                                        "span": {
                                            "type": "Span",
                                            "start": 129,
                                            "end": 130
                                        }
                                    },
                                    "value": {
                                        "type": "Pattern",
                                        "elements": [
                                            {
                                                "type": "TextElement",
                                                "value": "hasn't added any photos yet",
                                                "span": {
                                                    "type": "Span",
                                                    "start": 132,
                                                    "end": 159
                                                }
                                            }
                                        ],
                                        "span": {
                                            "type": "Span",
                                            "start": 132,
                                            "end": 159
                                        }
                                    },
                                    "default": false,
                                    "span": {
                                        "type": "Span",
                                        "start": 128,
                                        "end": 159
                                    }
                                },
                                {
                                    "type": "Variant",
                                    "key": {
                                        "type": "VariantName",
                                        "name": "one",
                                        "span": {
                                            "type": "Span",
                                            "start": 169,
                                            "end": 172
                                        }
                                    },
                                    "value": {
                                        "type": "Pattern",
                                        "elements": [
                                            {
                                                "type": "TextElement",
                                                "value": "added a new photo",
                                                "span": {
                                                    "type": "Span",
                                                    "start": 174,
                                                    "end": 191
                                                }
                                            }
                                        ],
                                        "span": {
                                            "type": "Span",
                                            "start": 174,
                                            "end": 191
                                        }
                                    },
                                    "default": false,
                                    "span": {
                                        "type": "Span",
                                        "start": 168,
                                        "end": 191
                                    }
                                },
                                {
                                    "type": "Variant",
                                    "key": {
                                        "type": "VariantName",
                                        "name": "other",
                                        "span": {
                                            "type": "Span",
                                            "start": 201,
                                            "end": 206
                                        }
                                    },
                                    "value": {
                                        "type": "Pattern",
                                        "elements": [
                                            {
                                                "type": "TextElement",
                                                "value": "added ",
                                                "span": {
                                                    "type": "Span",
                                                    "start": 208,
                                                    "end": 214
                                                }
                                            },
                                            {
                                                "type": "Placeable",
                                                "expression": {
                                                    "type": "ExternalArgument",
                                                    "id": {
                                                        "type": "Identifier",
                                                        "name": "photo_count",
                                                        "span": {
                                                            "type": "Span",
                                                            "start": 217,
                                                            "end": 228
                                                        }
                                                    },
                                                    "span": {
                                                        "type": "Span",
                                                        "start": 216,
                                                        "end": 228
                                                    }
                                                },
                                                "span": {
                                                    "type": "Span",
                                                    "start": 214,
                                                    "end": 230
                                                }
                                            },
                                            {
                                                "type": "TextElement",
                                                "value": " new photos",
                                                "span": {
                                                    "type": "Span",
                                                    "start": 230,
                                                    "end": 241
                                                }
                                            }
                                        ],
                                        "span": {
                                            "type": "Span",
                                            "start": 208,
                                            "end": 241
                                        }
                                    },
                                    "default": true,
                                    "span": {
                                        "type": "Span",
                                        "start": 199,
                                        "end": 241
                                    }
                                }
                            ],
                            "span": {
                                "type": "Span",
                                "start": 103,
                                "end": 246
                            }
                        },
                        "span": {
                            "type": "Span",
                            "start": 102,
                            "end": 247
                        }
                    },
                    {
                        "type": "TextElement",
                        "value": ".",
                        "span": {
                            "type": "Span",
                            "start": 247,
                            "end": 248
                        }
                    }
                ],
                "span": {
                    "type": "Span",
                    "start": 87,
                    "end": 248
                }
            },
            "attributes": [],
            "comment": null,
            "span": {
                "type": "Span",
                "start": 67,
                "end": 248
            }
        },
        {
            "type": "Message",
            "annotations": [],
            "id": {
                "type": "Identifier",
                "name": "liked-comment",
                "span": {
                    "type": "Span",
                    "start": 250,
                    "end": 263
                }
            },
            "value": {
                "type": "Pattern",
                "elements": [
                    {
                        "type": "Placeable",
                        "expression": {
                            "type": "ExternalArgument",
                            "id": {
                                "type": "Identifier",
                                "name": "user_name",
                                "span": {
                                    "type": "Span",
                                    "start": 273,
                                    "end": 282
                                }
                            },
                            "span": {
                                "type": "Span",
                                "start": 272,
                                "end": 282
                            }
                        },
                        "span": {
                            "type": "Span",
                            "start": 270,
                            "end": 284
                        }
                    },
                    {
                        "type": "TextElement",
                        "value": " liked your comment on ",
                        "span": {
                            "type": "Span",
                            "start": 284,
                            "end": 307
                        }
                    },
                    {
                        "type": "Placeable",
                        "expression": {
                            "type": "SelectExpression",
                            "expression": {
                                "type": "ExternalArgument",
                                "id": {
                                    "type": "Identifier",
                                    "name": "user_gender",
                                    "span": {
                                        "type": "Span",
                                        "start": 310,
                                        "end": 321
                                    }
                                },
                                "span": {
                                    "type": "Span",
                                    "start": 309,
                                    "end": 321
                                }
                            },
                            "variants": [
                                {
                                    "type": "Variant",
                                    "key": {
                                        "type": "VariantName",
                                        "name": "male",
                                        "span": {
                                            "type": "Span",
                                            "start": 334,
                                            "end": 338
                                        }
                                    },
                                    "value": {
                                        "type": "Pattern",
                                        "elements": [
                                            {
                                                "type": "TextElement",
                                                "value": "his",
                                                "span": {
                                                    "type": "Span",
                                                    "start": 340,
                                                    "end": 343
                                                }
                                            }
                                        ],
                                        "span": {
                                            "type": "Span",
                                            "start": 340,
                                            "end": 343
                                        }
                                    },
                                    "default": false,
                                    "span": {
                                        "type": "Span",
                                        "start": 333,
                                        "end": 343
                                    }
                                },
                                {
                                    "type": "Variant",
                                    "key": {
                                        "type": "VariantName",
                                        "name": "female",
                                        "span": {
                                            "type": "Span",
                                            "start": 353,
                                            "end": 359
                                        }
                                    },
                                    "value": {
                                        "type": "Pattern",
                                        "elements": [
                                            {
                                                "type": "TextElement",
                                                "value": "her",
                                                "span": {
                                                    "type": "Span",
                                                    "start": 361,
                                                    "end": 364
                                                }
                                            }
                                        ],
                                        "span": {
                                            "type": "Span",
                                            "start": 361,
                                            "end": 364
                                        }
                                    },
                                    "default": false,
                                    "span": {
                                        "type": "Span",
                                        "start": 352,
                                        "end": 364
                                    }
                                },
                                {
                                    "type": "Variant",
                                    "key": {
                                        "type": "VariantName",
                                        "name": "other",
                                        "span": {
                                            "type": "Span",
                                            "start": 374,
                                            "end": 379
                                        }
                                    },
                                    "value": {
                                        "type": "Pattern",
                                        "elements": [
                                            {
                                                "type": "TextElement",
                                                "value": "their",
                                                "span": {
                                                    "type": "Span",
                                                    "start": 381,
                                                    "end": 386
                                                }
                                            }
                                        ],
                                        "span": {
                                            "type": "Span",
                                            "start": 381,
                                            "end": 386
                                        }
                                    },
                                    "default": true,
                                    "span": {
                                        "type": "Span",
                                        "start": 372,
                                        "end": 386
                                    }
                                }
                            ],
                            "span": {
                                "type": "Span",
                                "start": 308,
                                "end": 391
                            }
                        },
                        "span": {
                            "type": "Span",
                            "start": 307,
                            "end": 392
                        }
                    },
                    {
                        "type": "TextElement",
                        "value": " post.",
                        "span": {
                            "type": "Span",
                            "start": 392,
                            "end": 398
                        }
                    }
                ],
                "span": {
                    "type": "Span",
                    "start": 270,
                    "end": 398
                }
            },
            "attributes": [],
            "comment": null,
            "span": {
                "type": "Span",
                "start": 250,
                "end": 398
            }
        }
    ],
    messageEditing: 0
};
export default (state = initialState, action) => {
    return state;
};
