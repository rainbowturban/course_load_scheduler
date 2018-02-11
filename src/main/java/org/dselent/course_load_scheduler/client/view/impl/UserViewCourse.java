package org.dselent.course_load_scheduler.client.view.impl;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HorizontalPanel;

public class UserViewCourse extends Composite {

	private static UserViewCourseUiBinder uiBinder = GWT.create(UserViewCourseUiBinder.class);
	@UiField Label viewCourseTitle;
	@UiField Button wpiLogo;
	@UiField Button homeButton;
	@UiField Button scheduleButton;
	@UiField Button coursesButton;
	@UiField Button accountButton;
	@UiField HorizontalPanel navBar;
	@UiField Label courseTitle1;
	@UiField Button viewCourse1;
	@UiField Label courseTitle2;
	@UiField Button viewCourse2;
	@UiField Button addCourse;

	interface UserViewCourseUiBinder extends UiBinder<Widget, UserViewCourse> {
	}

	public UserViewCourse() {
		initWidget(uiBinder.createAndBindUi(this));
	}

}
