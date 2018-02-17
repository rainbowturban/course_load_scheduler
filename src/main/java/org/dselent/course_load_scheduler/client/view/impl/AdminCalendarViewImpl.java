package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.gin.Injector;
import org.dselent.course_load_scheduler.client.presenter.AdminCalendarPresenter;
import org.dselent.course_load_scheduler.client.view.AdminCalendarView;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.user.client.ui.Composite;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Label;
import com.google.gwt.user.client.ui.HorizontalPanel;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.VerticalPanel;
import com.google.gwt.user.client.ui.ScrollPanel;
import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.TabPanel;
import com.google.gwt.user.client.ui.Button;

public class AdminCalendarViewImpl extends BaseViewImpl<AdminCalendarPresenter> implements AdminCalendarView {

	private static AdminCalendarViewImplUiBinder uiBinder = GWT.create(AdminCalendarViewImplUiBinder.class);
	@UiField HTMLPanel baseContainer;
	@UiField HorizontalPanel calendarBody;
	@UiField SimplePanel pageTitle;
	@UiField VerticalPanel infoPanel;
	@UiField VerticalPanel courseInfoPanel;
	@UiField ScrollPanel calendarPanel;
	@UiField VerticalPanel requestsMainPanel;
	@UiField ScrollPanel requestsScrollPanel;
	@UiField ListBox viewSelect;
	@UiField ListBox yearSelect;
	@UiField ListBox termSelect;
	@UiField TabPanel schedulePanel;
	@UiField ScrollPanel tablePanel;
	@UiField Label courseName;
	@UiField VerticalPanel requestsPanel;
	@UiField Button homeButton;
    @UiField Button scheduleButton;
    @UiField Button coursesButton;
    @UiField Button accountButton;
    
    @UiHandler("homeButton")
    void onHomeButtonClick(ClickEvent event) {
        presenter.loadHomePage();
    }
    
    @UiHandler("scheduleButton")
    void onScheduleButtonClick(ClickEvent event) {
        presenter.loadSchedulePage();
    }
    
    @UiHandler("coursesButton")
    void onCoursesButtonClick(ClickEvent event) {
        presenter.loadViewCoursesPage();
    }
    
    @UiHandler("accountButton")
    void onAccountButtonClick(ClickEvent event) {
        presenter.loadAccountPage();
    }

	interface AdminCalendarViewImplUiBinder extends UiBinder<Widget, AdminCalendarViewImpl> {
	}

	public AdminCalendarViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}
	
	@Override
	public void setPresenter(AdminCalendarPresenter presenter) {
		this.presenter = presenter;
	}

	@Override
	public Widget getWidgetContainer() {
		return this;
	}

	@Override
	public HasWidgets getViewRootPanel() {
		// TODO Auto-generated method stub
		return baseContainer;
	}
	
	@Override
	public VerticalPanel getRequestsPanel() {
		return requestsPanel;
	}

}