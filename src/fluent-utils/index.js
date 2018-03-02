// import { parse } from 'fluent-syntax';

export function canonicalValue(message) {
    let canonical  = '';
    if (message.value) {
        canonical = simplifyPattern(message.value);
    }
    return canonical;
}

function simplifyPattern(pattern) {
    if (pattern.type !== "Pattern") {
        console.log("Pattern expected");
    }
    let rv = "";
    for (const element of pattern.elements) {
        if (element.type === "TextElement") {
            rv += element.value;
        }
        else {
            if (element.type !== "Placeable") {
                console.log("Placeable expected");
                continue;
            }
            rv += simplifyPlaceable(element);
        }
    }
    return rv;
}

function simplifyPlaceable(place) {
    let expr = place.expression;
    switch (expr.type) {
        case "SelectExpression":
            let defaultVariant;
            for (const variant of expr.variants) {
                if (variant.default) {
                    defaultVariant = variant;
                    break;
                }
            }
            return simplifyPattern(defaultVariant.value);
        case "ExternalArgument":
            return `{ $${ expr.id.name } }`;
        default:
            return "XXX";
    }
}
