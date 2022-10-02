<script>

</script>

<template>
    <div class="desc">
        <h1>Hoşgeldiniz</h1>
        <p>Aşağıdaki butondan jeton kullanabilirsiniz.</p>
    </div>
<div class="con">
    <button class="btn-take" id="btn-take">Uygula</button>
</div>

</template>

<style lang="scss">
.desc{
    h1, p{
        margin-top: 10px;
        text-align: center;
    }
}
.con{
width: 100%;
display: flex;
justify-content: center;
margin-top: 30px;
    .btn-take{
        padding: 5px 20px;
        font-size: 20px;
        font-weight: bold;
        color:#fff;
        background: #058525;
        border: greenyellow;
        border-radius: 5px;
    }
}
</style>
