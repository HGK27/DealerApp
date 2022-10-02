<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="menu">
        <header class="avatar">
            <img src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
        </header>
        <ul>
            <li>
            <RouterLink to="/">Ana Sayfa</RouterLink>
            </li>
            <li>
            <RouterLink to="/package">Paket Satın Al</RouterLink>
            </li>
            <li>
            <RouterLink to="/report">Jeton Kullan</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
.menu{
    height: 100%;
	position:fixed;
	top:0;
	left:0;
	z-index:5;
	outline:none;
	background-color: #151c27;
	.avatar{
		background:rgba(0,0,0,0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        flex-direction: column;
        box-shadow: 2px 2px 5px rgba(40, 40, 40, 0.5);
		
		img{
			width:50px;
            height: 50px;
			border-radius:50%;
			overflow:hidden;
			box-shadow:0 0 0 4px rgba(255,255,255,0.2);
		}
		
		h2{
			font-weight:normal;
			margin:5px 0;
            color:#fff;
		}
	}
	
	ul{
		list-style:none;
		padding:0.5em 0;
		margin:0;
		
		li{
			padding:0.5em 1em 0.5em 3em;
            margin:10px 0;
			font-size:1em;
			font-weight:regular;
			background-repeat:no-repeat;
			background-position:left 15px center;
			background-size:auto 20px;
			transition:all 0.15s linear;
			cursor:pointer;
			
			&:hover{
				background-color:rgba(0,0,0,0.1);
			}
            a{
                padding: 0.5em;
                text-decoration: none;
                color:#fff;
                font-size: 18px;
                font-weight: bold;
            }
			
		}
	}
}

@media screen and (max-width:900px){

	.menu{
		
		.avatar{
			padding:0.5em;
			position:relative;

			
			h2{
				opacity:0;
				position:absolute;
				top:50%;
				margin:0;
				min-width:200px;
				border-radius:4px;
				background:rgba(0,0,0,0.4);
				transform:translate3d(-20px,-50%,0);
				transition:all 0.15s ease-in-out;
			}
			
			&:hover{
				h2{
					opacity:1;
					transform:translate3d(0px,-50%,0);
				}
			}
		}
		
		ul{
			li{
				height:100%;
				background-position:center center;
				background-size:30px auto;
				position:relative;

				span{
					//display:none;
					opacity:0;
					position:absolute;
					background:rgba(0,0,0,0.5);
					padding:0.2em 0.5em;
					border-radius:4px;
					top:50%;
					left:100%;
					transform:translate3d(-15px,-50%, 0);
					transition:all 0.15s ease-in-out;
					
					&:before{
						content:'';
						width:0;
						height:0;
						position:absolute;
						top:50%;
						left:-5px;
						border-top:5px solid transparent;
						border-bottom:5px solid transparent;
						border-right:5px solid rgba(0,0,0,0.5);
						transform:translateY(-50%);
					}
				}
				
				&:hover{
					span{
						opacity:1;
						transform:translate3d(0px,-50%, 0);
					}
				}
			}
		}
	}
}

@media screen and (max-width:400px){
	body{
		padding-left:0;
	}
	
	.menu{
		width:768px;
		box-shadow:0 0 0 100em rgba(0,0,0,0);
		transform:translate3d(50%, 50%);
		transition:all 0.3s ease-in-out;
		
		.smartphone-menu-trigger{
			width:40px;
			height:40px;
			position:absolute;
			left:100%;
			background:green;
			
			&:before, &:after{
				content:'';
				width:50%;
				height:2px;
				background:#fff;
				border-radius:10px;
				position:absolute;
				top:45%;
				left:50%;
				transform:translate3d(-50%, -50%, 0);
			}
			
			&:after{
				top:55%;
				transform:translate3d(-50%, -50%, 0);
			}
		}
		
		ul{
			
			li{
				padding:1em 1em 1em 3em;
				font-size:1.2em;
			}
		}
		
		&:focus{
			transform:translate3d(0,0,0);
			box-shadow:0 0 0 100em rgba(0,0,0,0.6);
			
			.smartphone-menu-trigger{
				pointer-events:none;
			}
		}
	}
}

</style>