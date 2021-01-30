export default class check {
    static async details(req, res) {
        const resData = {
                "name": "OYEWALE Naimot Oyedoyin",
                "github": "@Naimaoye",
                "email": "naimatoyewale@gmail.com",
                "mobile": "07063328009",
                "twitter": "@NaimatOyewale"
            }
        res.status(200).send({
            "message": "My Rule-Validation API",
            "status": "success",
            "data": resData
        })
    }

    static async validateRoute(req, res){

        const { rule, data } = req.body;
        if(!rule || !data){
            res.status(400).send({
                "message": "field rule and data are required.",
                "status": "error",
                "data": null
            })

        } else {
            if(typeof(rule) !== 'object' ){
                res.status(400).send({
                    "message": "rule should be an object.",
                    "status": "error",
                    "data": null
                })
            } else {
            if(typeof(data) == 'string'){
                const fieldName = rule['field']
                if(fieldName == 'data'){
                if(rule['condition'] == 'eq'){
                    if(data == rule['condition_value']){
                        res.status(200).send({
                            "message": `field ${fieldName} successfully validated.`,
                            "status": "success",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": fieldName,
                                "field_value": data,
                                "condition": 'eq',
                                "condition_value": rule['condition_value'],
                                }
                            }
                        })
                    } else {
                        res.status(400).send({
                            "message": `field ${fieldName}failed validation.`,
                            "status": "error",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": fieldName,
                                "field_value": data,
                                "condition": "eq",
                                "condition_value": rule['condition_value']
                                }
                            }
                        })
                    }

                } else if(rule['condition'] == 'neq'){
                    const fieldName = rule['field']
                    if(data != rule['condition_value']){
                        res.status(200).send({
                            "message": `field ${fieldName} successfully validated.`,
                            "status": "success",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": rule['field'],
                                "field_value": data,
                                "condition": 'neq',
                                "condition_value": rule['condition_value'],
                                }
                            }
                        })
                    } else {
                        res.status(400).send({
                            "message": `field ${fieldName}failed validation.`,
                            "status": "error",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": fieldName,
                                "field_value": data,
                                "condition": "neq",
                                "condition_value": rule['condition_value']
                                }
                            }
                        })
                    }

                } else if(rule['condition'] == 'gt'){
                    const fieldName = rule['field']
                    if(data > rule['condition_value']){
                        res.status(200).send({
                            "message": `field ${fieldName} successfully validated.`,
                            "status": "success",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": rule['field'],
                                "field_value": data,
                                "condition": 'gt',
                                "condition_value": rule['condition_value'],
                                }
                            }
                        })
                    } else {
                        res.status(400).send({
                            "message": `field ${fieldName}failed validation.`,
                            "status": "error",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": fieldName,
                                "field_value": data,
                                "condition": "gt",
                                "condition_value": rule['condition_value']
                                }
                            }
                        })
                    }

                } else if(rule['condition'] == 'gte'){
                    const fieldName = rule['field']
                    if(data >= rule['condition_value']){
                        res.status(200).send({
                            "message": `field ${fieldName} successfully validated.`,
                            "status": "success",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": rule['field'],
                                "field_value": data,
                                "condition": 'gte',
                                "condition_value": rule['condition_value'],
                                }
                            }
                        })
                    } else {
                        res.status(400).send({
                            "message": `field ${fieldName}failed validation.`,
                            "status": "error",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": fieldName,
                                "field_value": data,
                                "condition": "gte",
                                "condition_value": rule['condition_value']
                                }
                            }
                        })
                    }

                } else if(rule['condition'] == 'contains'){
                    const fieldName = rule['field']
                    if(data.includes(rule['condition_value'])){
                        res.status(200).send({
                            "message": `field ${fieldName} successfully validated.`,
                            "status": "success",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": rule['field'],
                                "field_value": data,
                                "condition": 'contains',
                                "condition_value": rule['condition_value'],
                                }
                            }
                        })
                    } else {
                        res.status(400).send({
                            "message": `field ${fieldName}failed validation.`,
                            "status": "error",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": fieldName,
                                "field_value": data,
                                "condition": "contains",
                                "condition_value": rule['condition_value']
                                }
                            }
                        })
                    }

                } 
            } else {
                res.status(400).send({
                    "message": `field ${fieldName} is missing from data.`,
                    "status": "error",
                    "data": null
            })
            }

            } else if(typeof(data) == 'object'){
                const fieldName = rule['field'];
                if(fieldName.includes(".")){
                    const splitted = fileName.split(".");
                    const left = splitted[0];
                    const right = splitted[1];
                if (data.hasOwnProperty(left) && data[left].hasOwnProperty(right)){
                if(rule['condition'] == 'eq'){
                    if(data[left][right] == rule['condition_value']){
                        res.status(200).send({
                            "message": `field ${fieldName} successfully validated.`,
                            "status": "success",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": fieldName,
                                "field_value": fieldName,
                                "condition": 'eq',
                                "condition_value": rule['condition_value'],
                                }
                            }
                        })
                    } else {
                        res.status(400).send({
                            "message": `field ${fieldName}failed validation.`,
                            "status": "error",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": fieldName,
                                "field_value": fieldName,
                                "condition": "eq",
                                "condition_value": rule['condition_value']
                                }
                            }
                        })
                    }

                } else if(rule['condition'] == 'neq'){
                    if(data[left][right] != rule['condition_value']){
                        res.status(200).send({
                            "message": `field ${fieldName} successfully validated.`,
                            "status": "success",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": rule['field'],
                                "field_value": fieldName,
                                "condition": 'neq',
                                "condition_value": rule['condition_value'],
                                }
                            }
                        })
                    } else {
                        res.status(400).send({
                            "message": `field ${fieldName}failed validation.`,
                            "status": "error",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": fieldName,
                                "field_value": fieldName,
                                "condition": "neq",
                                "condition_value": rule['condition_value']
                                }
                            }
                        })
                    }

                } else if(rule['condition'] == 'gt'){
                    const fieldName = rule['field']
                    if(data[left][right] > rule['condition_value']){
                        res.status(200).send({
                            "message": `field ${fieldName} successfully validated.`,
                            "status": "success",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": rule['field'],
                                "field_value": fieldName,
                                "condition": 'gt',
                                "condition_value": rule['condition_value'],
                                }
                            }
                        })
                    } else {
                        res.status(400).send({
                            "message": `field ${fieldName}failed validation.`,
                            "status": "error",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": fieldName,
                                "field_value": fieldName,
                                "condition": "gt",
                                "condition_value": rule['condition_value']
                                }
                            }
                        })
                    }


                } else if(rule['condition'] == 'gte'){
                    const fieldName = rule['field']
                    if(data[left][right] >= rule['condition_value']){
                        res.status(200).send({
                            "message": `field ${fieldName} successfully validated.`,
                            "status": "success",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": rule['field'],
                                "field_value": fieldName,
                                "condition": 'gte',
                                "condition_value": rule['condition_value'],
                                }
                            }
                        })
                    } else {
                        res.status(400).send({
                            "message": `field ${fieldName}failed validation.`,
                            "status": "error",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": fieldName,
                                "field_value": fieldName,
                                "condition": "gte",
                                "condition_value": rule['condition_value']
                                }
                            }
                        })
                    }


                }else if(rule['condition'] == 'contains'){
                    const fieldName = rule['field']
                    if(data[left][right].includes(rule['condition_value'])){
                        res.status(200).send({
                            "message": `field ${fieldName} successfully validated.`,
                            "status": "success",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": rule['field'],
                                "field_value": fieldName,
                                "condition": 'contains',
                                "condition_value": rule['condition_value'],
                                }
                            }
                        })
                    } else {
                        res.status(400).send({
                            "message": `field ${fieldName}failed validation.`,
                            "status": "error",
                            "data": {
                                "validation": {
                                "error": false,
                                "field": fieldName,
                                "field_value": fieldName,
                                "condition": "contains",
                                "condition_value": rule['condition_value']
                                }
                            }
                        })
                    }

                } else {
                    // other errors
                }
            } else{
                //no property
                res.status(400).send({
                    "message": `field ${fieldName} is missing from data.`,
                    "status": "error",
                    "data": null
                })
            }
            } else{
                //single object
                if (data.hasOwnProperty(fieldName)){
                    if(rule['condition'] == 'eq'){
                        if(data[fieldName] == rule['condition_value']){
                            res.status(200).send({
                                "message": `field ${fieldName} successfully validated.`,
                                "status": "success",
                                "data": {
                                    "validation": {
                                    "error": false,
                                    "field": fieldName,
                                    "field_value": fieldName,
                                    "condition": 'eq',
                                    "condition_value": rule['condition_value'],
                                    }
                                }
                            })
                        } else {
                            res.status(400).send({
                                "message": `field ${fieldName}failed validation.`,
                                "status": "error",
                                "data": {
                                    "validation": {
                                    "error": false,
                                    "field": fieldName,
                                    "field_value": fieldName,
                                    "condition": "eq",
                                    "condition_value": rule['condition_value']
                                    }
                                }
                            })
                        }
    
                    } else if(rule['condition'] == 'neq'){
                        if(data[fieldName] != rule['condition_value']){
                            res.status(200).send({
                                "message": `field ${fieldName} successfully validated.`,
                                "status": "success",
                                "data": {
                                    "validation": {
                                    "error": false,
                                    "field": rule['field'],
                                    "field_value": fieldName,
                                    "condition": 'neq',
                                    "condition_value": rule['condition_value'],
                                    }
                                }
                            })
                        } else {
                            res.status(400).send({
                                "message": `field ${fieldName}failed validation.`,
                                "status": "error",
                                "data": {
                                    "validation": {
                                    "error": false,
                                    "field": fieldName,
                                    "field_value": fieldName,
                                    "condition": "neq",
                                    "condition_value": rule['condition_value']
                                    }
                                }
                            })
                        }
    
                    } else if(rule['condition'] == 'gt'){
                        const fieldName = rule['field']
                        if(data[fieldName] > rule['condition_value']){
                            res.status(200).send({
                                "message": `field ${fieldName} successfully validated.`,
                                "status": "success",
                                "data": {
                                    "validation": {
                                    "error": false,
                                    "field": rule['field'],
                                    "field_value": fieldName,
                                    "condition": 'gt',
                                    "condition_value": rule['condition_value'],
                                    }
                                }
                            })
                        } else {
                            res.status(400).send({
                                "message": `field ${fieldName}failed validation.`,
                                "status": "error",
                                "data": {
                                    "validation": {
                                    "error": false,
                                    "field": fieldName,
                                    "field_value": fieldName,
                                    "condition": "gt",
                                    "condition_value": rule['condition_value']
                                    }
                                }
                            })
                        }
    
    
                    } else if(rule['condition'] == 'gte'){
                        const fieldName = rule['field']
                        if(data[fieldName] >= rule['condition_value']){
                            res.status(200).send({
                                "message": `field ${fieldName} successfully validated.`,
                                "status": "success",
                                "data": {
                                    "validation": {
                                    "error": false,
                                    "field": rule['field'],
                                    "field_value": fieldName,
                                    "condition": 'gte',
                                    "condition_value": rule['condition_value'],
                                    }
                                }
                            })
                        } else {
                            res.status(400).send({
                                "message": `field ${fieldName}failed validation.`,
                                "status": "error",
                                "data": {
                                    "validation": {
                                    "error": false,
                                    "field": fieldName,
                                    "field_value": fieldName,
                                    "condition": "gte",
                                    "condition_value": rule['condition_value']
                                    }
                                }
                            })
                        }
    
    
                    }else if(rule['condition'] == 'contains'){
                        const fieldName = rule['field']
                        if(data[fieldName].includes(rule['condition_value'])){
                            res.status(200).send({
                                "message": `field ${fieldName} successfully validated.`,
                                "status": "success",
                                "data": {
                                    "validation": {
                                    "error": false,
                                    "field": rule['field'],
                                    "field_value": fieldName,
                                    "condition": 'contains',
                                    "condition_value": rule['condition_value'],
                                    }
                                }
                            })
                        } else {
                            res.status(400).send({
                                "message": `field ${fieldName}failed validation.`,
                                "status": "error",
                                "data": {
                                    "validation": {
                                    "error": false,
                                    "field": fieldName,
                                    "field_value": fieldName,
                                    "condition": "contains",
                                    "condition_value": rule['condition_value']
                                    }
                                }
                            })
                        }
    
                    } else {
                        // other errors
                    }
                } else {
                    //no property
                res.status(400).send({
                    "message": `field ${fieldName} is missing from data.`,
                    "status": "error",
                    "data": null
                })
                }

            }

            } else if(Array.isArray(data)){
                const fieldName = rule['field']
                if(data.includes(fieldName)){
                        if(rule['condition'] == 'eq'){
                            if(data[fieldName] == rule['condition_value']){
                                res.status(200).send({
                                    "message": `field ${fieldName} successfully validated.`,
                                    "status": "success",
                                    "data": {
                                        "validation": {
                                        "error": false,
                                        "field": fieldName,
                                        "field_value": data,
                                        "condition": 'eq',
                                        "condition_value": rule['condition_value'],
                                        }
                                    }
                                })
                            } else {
                                res.status(400).send({
                                    "message": `field ${fieldName}failed validation.`,
                                    "status": "error",
                                    "data": {
                                        "validation": {
                                        "error": false,
                                        "field": fieldName,
                                        "field_value": data,
                                        "condition": "eq",
                                        "condition_value": rule['condition_value']
                                        }
                                    }
                                })
                            }
        
                        } else if(rule['condition'] == 'neq'){
                            if(data[fieldName] != rule['condition_value']){
                                res.status(200).send({
                                    "message": `field ${fieldName} successfully validated.`,
                                    "status": "success",
                                    "data": {
                                        "validation": {
                                        "error": false,
                                        "field": rule['field'],
                                        "field_value": data,
                                        "condition": 'neq',
                                        "condition_value": rule['condition_value'],
                                        }
                                    }
                                })
                            } else {
                                res.status(400).send({
                                    "message": `field ${fieldName}failed validation.`,
                                    "status": "error",
                                    "data": {
                                        "validation": {
                                        "error": false,
                                        "field": fieldName,
                                        "field_value": data,
                                        "condition": "neq",
                                        "condition_value": rule['condition_value']
                                        }
                                    }
                                })
                            }
        
                        } else if(rule['condition'] == 'gt'){
                            const fieldName = rule['field']
                            if(data[fieldName] > rule['condition_value']){
                                res.status(200).send({
                                    "message": `field ${fieldName} successfully validated.`,
                                    "status": "success",
                                    "data": {
                                        "validation": {
                                        "error": false,
                                        "field": rule['field'],
                                        "field_value": data,
                                        "condition": 'gt',
                                        "condition_value": rule['condition_value'],
                                        }
                                    }
                                })
                            } else {
                                res.status(400).send({
                                    "message": `field ${fieldName}failed validation.`,
                                    "status": "error",
                                    "data": {
                                        "validation": {
                                        "error": false,
                                        "field": fieldName,
                                        "field_value": data,
                                        "condition": "gt",
                                        "condition_value": rule['condition_value']
                                        }
                                    }
                                })
                            }
        
                        } else if(rule['condition'] == 'gte'){
                            const fieldName = rule['field']
                            if(data[fieldName] >= rule['condition_value']){
                                res.status(200).send({
                                    "message": `field ${fieldName} successfully validated.`,
                                    "status": "success",
                                    "data": {
                                        "validation": {
                                        "error": false,
                                        "field": rule['field'],
                                        "field_value": data,
                                        "condition": 'gte',
                                        "condition_value": rule['condition_value'],
                                        }
                                    }
                                })
                            } else {
                                res.status(400).send({
                                    "message": `field ${fieldName}failed validation.`,
                                    "status": "error",
                                    "data": {
                                        "validation": {
                                        "error": false,
                                        "field": fieldName,
                                        "field_value": data,
                                        "condition": "gte",
                                        "condition_value": rule['condition_value']
                                        }
                                    }
                                })
                            }
        
                        } else if(rule['condition'] == 'contains'){
                            const fieldName = rule['field']
                            if(data[fieldName].includes(rule['condition_value'])){
                                res.status(200).send({
                                    "message": `field ${fieldName} successfully validated.`,
                                    "status": "success",
                                    "data": {
                                        "validation": {
                                        "error": false,
                                        "field": rule['field'],
                                        "field_value": data,
                                        "condition": 'contains',
                                        "condition_value": rule['condition_value'],
                                        }
                                    }
                                })
                            } else {
                                res.status(400).send({
                                    "message": `field ${fieldName}failed validation.`,
                                    "status": "error",
                                    "data": {
                                        "validation": {
                                        "error": false,
                                        "field": fieldName,
                                        "field_value": data,
                                        "condition": "contains",
                                        "condition_value": rule['condition_value']
                                        }
                                    }
                                })
                            }
        
                        } 
                } else {
                    res.status(400).send({
                        "message": `field ${fieldName} is missing from data.`,
                        "status": "error",
                        "data": null
                })
                }

            } else {
                // other data types check
                res.status(400).send({
                        "message": "Invalid JSON payload passed.",
                        "status": "error",
                        "data": null
                })
            }
        }
    }
    }
}