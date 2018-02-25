package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.presenter.HomePresenter;
import org.dselent.course_load_scheduler.client.view.HomeView;
import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.HorizontalPanel;

public class HomeViewImpl extends BaseViewImpl<HomePresenter> implements HomeView {

	interface HomeViewImplUiBinder extends UiBinder<Widget, HomeViewImpl> {
	}


	private static HomeViewImplUiBinder uiBinder = GWT.create(HomeViewImplUiBinder.class);
	@UiField Button accountButton;
	@UiField Button coursesButton;
	@UiField Button homeButton;
	@UiField HTMLPanel rootPanel;

	@UiField Button scheduleButton;
	@UiField VerticalPanel facultyListVerticalPanel;
	@UiField HorizontalPanel facultyListTitlePanel;

	public HomeViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public HasWidgets getViewRootPanel() {
		return rootPanel;
	}

	public Button getAccountButton() {
		return accountButton;
	}

	public void setAccountButton(Button accountButton) {
		this.accountButton = accountButton;
	}

	public Button getCoursesButton() {
		return coursesButton;
	}

	public void setCoursesButton(Button coursesButton) {
		this.coursesButton = coursesButton;
	}

	public Button getHomeButton() {
		return homeButton;
	}

	public void setHomeButton(Button homeButton) {
		this.homeButton = homeButton;
	}

	public Button getScheduleButton() {
		return scheduleButton;
	}

	public void setScheduleButton(Button scheduleButton) {
		this.scheduleButton = scheduleButton;
	}

	@Override
	public Widget getWidgetContainer() {
		return this;
	}

	@UiHandler("accountButton")
	void onAccountButtonClick(ClickEvent event) {
		presenter.loadAccountPage();
	}

	@UiHandler("coursesButton")
	void onCoursesButtonClick(ClickEvent event) {
		presenter.loadViewCoursesPage();
	}

	@UiHandler("homeButton")
	void onHomeButtonClick(ClickEvent event) {
		presenter.loadHomePage();
	}

	@UiHandler("scheduleButton")
	void onScheduleButtonClick(ClickEvent event) {
		presenter.loadSchedulePage();
	}

	@Override
	public void setPresenter(HomePresenter presenter) {
		this.presenter = presenter;
	}

	public VerticalPanel getFacultyListVerticalPanel() {
		return facultyListVerticalPanel;
	}

	public void setFacultyListVerticalPanel(VerticalPanel facultyListVerticalPanel) {
		this.facultyListVerticalPanel = facultyListVerticalPanel;
	}

}
