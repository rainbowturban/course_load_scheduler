package org.dselent.course_load_scheduler.client.view.impl;

import com.google.gwt.core.client.GWT;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.HasWidgets;

import org.dselent.course_load_scheduler.client.presenter.ViewCoursesPresenter;
import org.dselent.course_load_scheduler.client.view.ViewCoursesView;

import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.StackPanel;

public class ViewCoursesViewImpl extends BaseViewImpl<ViewCoursesPresenter> implements ViewCoursesView {

	private static viewCoursesUiBinder uiBinder = GWT.create(viewCoursesUiBinder.class);
	@UiField Label pageTitle;
	@UiField Button addCourseButton;
	@UiField HTMLPanel baseContainer;
	@UiField Button editCourseButton;
	@UiField Button removeCourseButton;
	@UiField StackPanel courseList;
	@UiField Button homeButton;
	@UiField Button scheduleButton;
	@UiField Button coursesButton;
	@UiField Button accountButton;

	interface viewCoursesUiBinder extends UiBinder<Widget, ViewCoursesViewImpl> {
	}

	public ViewCoursesViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public void setPresenter(ViewCoursesPresenter presenter) {
		this.presenter = presenter;
	}

	@Override
	public Widget getWidgetContainer() {
		return this;
	}

	@Override
	public HasWidgets getViewRootPanel() {
		return baseContainer;
	}

	//setter and getter for the course list panel
	@Override
	public StackPanel getCourseList() {
		return courseList;
	}
	
	@Override
	public void setCourseList(StackPanel courseList) {
		this.courseList = courseList;
	}
	
	//getters for buttons
	@Override
	public Button getRemoveCourseButton() {
		return removeCourseButton;
	}
	@Override
	public Button getEditCourseButton() {
		return editCourseButton;
	}
	@Override
	public Button getAddCourseButton() {
		return addCourseButton;
	}
	
	
	//UI Event handlers
	
	//Moves to the Add Course page
	@UiHandler("addCourseButton")
	void onAddCourseButtonClick(ClickEvent event) {
		presenter.loadAddPage();
	}
	
	//Moves to the View/Edit Course Page
	@UiHandler("editCourseButton")
	void onEditCourseButtonClick(ClickEvent event) {
		presenter.loadEditPage();
	}
	
	@UiHandler("removeCourseButton")
	void onRemoveCourseButtonClick(ClickEvent event) {
		presenter.removeCourse();
	}
	
	@UiHandler("homeButton")
	void onHomeButtonClick(ClickEvent event) {
		presenter.loadHomePage();
	}
	
	@UiHandler("scheduleButton")
	void onScheduleButtonClick(ClickEvent event) {
		presenter.loadCalendarPage();
	}
	
	@UiHandler("coursesButton")
	void onCoursesButtonClick(ClickEvent event) {
		presenter.loadViewCoursesPage();
	}
	
	@UiHandler("accountButton")
	void onAccountButtonClick(ClickEvent event) {
		presenter.loadAccountPage();
	}
}
