console.clear();

function getData() {
    var xh = new XMLHttpRequest();
    xh.open(
        "GET",
        "my.json",
        true
    );
    xh.setRequestHeader("Content-Type", "application/json");
    xh.send();
    xh.onload = function () {
        if (this.status == 200) {
            var data = JSON.parse(this.responseText);
            console.log(data);

            var i = 1;
            data.forEach(member => {
                let newRow = document.createElement('div');
                if (member.qcomplete_no ===12){

                
                newRow.innerHTML = `
                <div class="card-container">
                <span class="pro">PRO</span>

                    <img class="round" src="${member.dp}" alt="user" />
                    <h3>Rank #${i}</h3>
                    <p>${member.name}</p>
                    <p>Quests Completed: ${member.qcomplete_no}</p>
                    
                    <div class="skills">
                        <h6>Track 1</h6>
                        <ul>
                            <li>${member.track1}</li>
                            
                        </ul>
                        <h6>Track 2</h6>
                        <ul>
                            <li>${member.track2}</li>
                            
                        </ul>
                    </div>
                    
                </div>
                <br>
                `;
                }
                else{

                newRow.innerHTML = `
                <div class="card-container">

                    <img class="round" src="${member.dp}" alt="user" />
                    <h3>Rank #${i}</h3>
                    <p>${member.name}</p>
                    <p>Quests Completed: ${member.qcomplete_no}</p>
                    
                    <div class="skills">
                        <h6>Track 1</h6>
                        <ul>
                            <li>${member.track1}</li>
                            
                        </ul>
                        <h6>Track 2</h6>
                        <ul>
                            <li>${member.track2}</li>
                            
                        </ul>
                    </div>
                    
                </div>
                <br>
                `;
                }
              
                i++;
                list.appendChild(newRow);
            });




        } else {
            console.log("Something went wrong.")
        }
    };
}
