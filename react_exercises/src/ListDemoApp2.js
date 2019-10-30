import React, { useState } from "react";

// List and Keys, 2 a-c
function MemberDemo(props) {
    return (
        <div>
            <p>All Dragons</p>
            <MemberTable members={props.members} />
        </div>
    );
}

export default function App8() {
    const initialMembers = [
        { name: "Sindragosa", quote: 'And in her dying moments... Sindragosa vowed revenge', id: 1 },
        { name: "Deathwing", quote: 'I AM DEATHWING, THE DESTROYER, THE END OF ALL THINGS, INEVITABLE, INDOMITABLE; I AM THE CATACLYSM!', id: 2 },
        { name: "Onyxia", quote: "More dots", id: 3 },
        { name: "Atramedes", quote: 'This miserable existence finally ends', id: 4 }];
    const [members, setMembers] = useState(initialMembers)

    return (<MemberDemo members={members} />);
}

function MemberTable({ members }) {
    const tableItems = members.map(member => (
        <Row key={member.id} name={member.name} quote={member.quote} />
    ));
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quote</th>
                </tr>
            </thead>
            <tbody>{tableItems}</tbody>
        </table>
    );
}

function Row(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.quote}</td>
        </tr>
    );
}