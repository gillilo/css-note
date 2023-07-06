<!-- CSS Rank List UI Design with Hover Effect | Html CSS -->
<!-- https://www.youtube.com/watch?v=vhkhyPzJQa8 -->
<script>
  const list = [
    {
      rank: '1',
      name: 'Marianna Gasparyan',
      img: '',
      description: 'Digital Artist',
    },
    {
      rank: '2',
      name: 'Kristy Hawkins',
      img: '',
      description: 'Digital Artist',
    },
    {
      rank: '3',
      name: 'Hunter Henderson',
      img: '',
      description: 'Digital Artist',
    },
    {
      rank: '4',
      name: 'Chakera Ingram',
      img: '',
      description: 'Digital Artist',
    },
    {
      rank: '5',
      name: 'Stefanie Cohen',
      img: '',
      description: 'Digital Artist',
    },
  ]
</script>

<div class="body">
  <div class="container">
    <h3>Popular Creator Rank List</h3>
    <div class="box">

      {#each list as a, i (i) }
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div class={`list`}>
          <div class="imgBx">
            <img src={a.img} alt="profile">
          </div>
          <div class="content">
            <h2 class="rank"><small>#</small>{a.rank}</h2>
            <h4>{a.name}</h4>
            <p>{a.description}</p>
          </div>
        </div>
      {/each}

    </div>
  </div>
</div>

<style lang="scss">
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f5f5f5;
    .container {
      h3 {
        font-size: 1.75em;
        color: #333;
        margin-bottom: 20px;
      }
      .box {
        position: relative;
        min-width: 350px;
        .list {
          position: relative;
          display: flex;
          padding: 10px;
          border-radius: 10px;
          margin: 10px 0;
          cursor: pointer;
          transition: 0.5s;
          overflow: hidden;
          background: #fff;
          .imgBx {
            position: relative;
            width: 60px;
            height: 60px;
            border-radius: 10px;
            overflow: hidden;
            margin-right: 10px;
            img {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .content {
            display: flex; 
            flex-direction: column;
            justify-content: center;
            color: #333;
            .rank {
              position: absolute;
              right: -50px;
              color: #03a9f4;
              transition: 0.5s;
              font-size: 2em;
              small {
                font-weight: 500;
                opacity: 0.25;
              }
            }
            h4 {
              line-height: 1.2em;
              font-weight: 600;
            }
            p {
              font-size: 0.75em;
            }
          }
          &:hover {
            .content {
              .rank {
                right: 20px;
              }
            }
          }
        }
        &:hover {
          .list {
            // filter: blur(0.5px);
            opacity: 0.6;
          }
        }
        .list:hover {
          box-shadow: -10px 20px 35px rgba(0,0,0,0.15);
          transform: scale(1.15);
          filter: blur(0px);
          opacity: 1;
        }
      }
    }
  }
</style>