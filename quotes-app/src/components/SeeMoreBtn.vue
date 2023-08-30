<template>
    <div class="button">
        <div class="box"></div>
        <div class="box">S</div>
        <div class="box">E</div>
        <div class="box">E</div>
        <div class="box"></div>
    </div>
</template>

<style scoped>
.button {
    display: flex;
}

.box {
    width: 60px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    transition: all .8s;
    cursor: pointer;
    position: relative;
    background: rgba(255, 0, 0, 0.524);
    overflow: hidden;
}

.box:before {
    content: "M";
    position: absolute;
    top: 0;
    background: #212529;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    transition: transform .4s;
}

.box:nth-child(2)::before {
    transform: translateY(-100%);
    content: 'O';
}

.box:nth-child(3)::before {
    content: 'R';
}

.box:nth-child(4)::before {
    transform: translateY(-100%);
    content: 'E';
}
.box:nth-child(5)::before {
    content: '<3';
}

.button:hover .box:before {
    transform: translateY(0);
}
</style>