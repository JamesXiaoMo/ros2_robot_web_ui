import ROSLIB from 'roslib';

const ros = new ROSLIB.Ros({
    url: 'ws://100.82.239.65:9090',
});

const powerTopic = new ROSLIB.Topic({
    ros: ros,
    name: '/power_info',
    messageType: 'power_measurement/Ina228Sensor',
});

export { ros, powerTopic };
