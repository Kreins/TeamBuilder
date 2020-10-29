import React from 'react'
import TeamMember from './TeamMember'
import TeamLeader from './TeamLeader'
import JoinButton from './JoinButton'
import LeaveButton from './LeaveButton'

class MemberTable extends React.Component {

    render() {
        const { view, teamLeaderID, currentUser, members } = this.props 

        const teamLeader = members.filter(member => member.userID === teamLeaderID)[0]
        const teamMembers = members.filter(member => member.userID !== teamLeaderID)

        const renderJoinOrLeaveButton = () => {
            if(view === "otherUserView") {
                return <JoinButton />
            } else {
                return <LeaveButton />
            }
        }

        return (
            <div>
                <h2> Team Members: </h2>
                
                <TeamLeader teamLeader={teamLeader} view={view} currentUser={currentUser}/>

                {teamMembers.map((member) => 
                    <TeamMember key={member.userID} member={member} view={view}
                                currentUser={currentUser}
                    />
                )}

                {renderJoinOrLeaveButton()}

            </div>
        );
    }
}

export default MemberTable