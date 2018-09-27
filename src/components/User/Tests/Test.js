import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import axios from "axios";
import {Link} from "react-router-dom";

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    buttons: {
        paddingTop: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyAlign: "space-around"
    }
});

class Test extends React.Component {
    state = {
        test: {
            id: 0,
            questions: []
        },
        testResult: null
    };
    componentDidMount() {
        axios.get("/api/tests/" + this.props.match.params.testId).then(response => {
            this.initTest(response.data);
        });
    }

    initTest(test) {
        this.setState({
            test,
            testResult: {
                testId: test.id,
                userAnswers: test.questions.map(item => {
                    return {
                        questionId: item.id,
                        answers: []
                    };
                })
            }
        });
    }

    checkUncheckAnswer(checked, questionId, answerId) {
        console.log(checked, questionId, answerId);
        const { testResult } = this.state;
        let question = testResult.userAnswers.find(i => i.questionId == questionId);
        console.log("question", question);
        if (question) {
            if (checked && question.answers.findIndex(i => i == answerId) == -1) {
                question.answers.push(answerId);
                this.setState({ testResult });
                return;
            }
            let answerIndex = question.answers.findIndex(i => i == answerId);
            console.log("answerIndex", answerIndex);
            if (answerIndex != -1) {
                question.answers.splice(answerIndex, 1);
                console.log("testResult", testResult);
                this.setState({ testResult });
            }
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div className="test">
                {this.state.test.questions.map((question, index) => {
                    const userAnswer = this.state.testResult.userAnswers.find(
                        r => r.questionId == question.id
                    );
                    return (
                        <Paper
                            padder
                            className="test-question"
                            key={"question" + question.id}
                        >
                            <h2 className="test-title">{question.title}</h2>
                            <div className="test-answers">
                                <FormGroup>
                                    {question.answers.map(answer => {
                                        return (
                                            <FormControlLabel
                                                key={"answer" + answer.id}
                                                control={
                                                    <Checkbox
                                                        checked={
                                                            userAnswer.answers.findIndex(
                                                                ra => ra == answer.id
                                                            ) != -1
                                                        }
                                                        onChange={(event, checked) =>
                                                            this.checkUncheckAnswer(
                                                                checked,
                                                                question.id,
                                                                answer.id
                                                            )
                                                        }
                                                        value={"yes"}
                                                    />
                                                }
                                                label={answer.title}
                                            />
                                        );
                                    })}
                                </FormGroup>
                            </div>
                        </Paper>
                    );
                })}

                <FormControl className={classes.buttons}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/"
                    >
                        Завершить
                    </Button>
                </FormControl>

                <FormControl className={classes.buttons}>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to="/"
                    >
                        Выйти из теста
                    </Button>
                </FormControl>

            </div>
        );
    }
}

Test.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Test);