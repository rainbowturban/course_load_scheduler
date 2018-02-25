package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.presenter.AdminCalendarPresenter;
import org.dselent.course_load_scheduler.client.view.AdminCalendarView;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
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
import com.google.gwt.user.client.ui.PopupPanel;
import com.google.gwt.user.client.ui.FlexTable;

public class AdminCalendarViewImpl extends BaseViewImpl<AdminCalendarPresenter> implements AdminCalendarView {

	private static AdminCalendarViewImplUiBinder uiBinder = GWT.create(AdminCalendarViewImplUiBinder.class);
	@UiField HTMLPanel baseContainer;
	@UiField HorizontalPanel calendarBody;
	@UiField SimplePanel pageTitle;
	@UiField VerticalPanel infoPanel;
	@UiField VerticalPanel courseInfoPanel;
	@UiField VerticalPanel requestsMainPanel;
	@UiField ScrollPanel requestsScrollPanel;
	@UiField ListBox viewSelect;
	@UiField ListBox termSelect;
	@UiField TabPanel schedulePanel;
	@UiField ScrollPanel tablePanel;
	@UiField Label courseName;
	@UiField VerticalPanel requestsPanel;
	@UiField Button homeButton;
    @UiField Button scheduleButton;
    @UiField Button coursesButton;
    @UiField Button accountButton;
    @UiField Button addCourseButton;
    @UiField PopupPanel addCoursePanel;
    @UiField Button addCourseCancelButton;
    @UiField Button addButton;
    @UiField PopupPanel makeRequestPanel;
    @UiField Button makeRequestCancelButton;
    @UiField Button makeRequestButton;
    @UiField Label requestSectionSelectBox;
    @UiField Button saveCourseInfo;
    @UiField Button deleteCourse;
    @UiField ListBox startTimeSelect;
    @UiField ListBox endTimeSelect;
    @UiField ListBox instructorSelect;
    @UiField FlexTable flexCalendar;
    @UiField ScrollPanel calendarPanel;
    
    @UiHandler("addCourseButton")
    void onAddCourseButtonClick(ClickEvent event)
    {
    		addCoursePanel.show();
    		addCoursePanel.setVisible(true);
    		addCoursePanel.center();
    }
    
    @UiHandler("makeRequestButton")
    void onMakeRequestButtonClick(ClickEvent event)
    {
    		makeRequestPanel.show();
    		makeRequestPanel.setVisible(true);
    		makeRequestPanel.center();
    }
    
    @UiHandler("addCourseCancelButton")
    void onAddCourseCancelButtonClick(ClickEvent event)
    {
    		addCoursePanel.hide();
    }
    
    @UiHandler("makeRequestCancelButton")
    void onMakeRequestCancelButtonClick(ClickEvent event)
    {
    		makeRequestPanel.hide();
    }
    
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
		addCoursePanel.hide();
		makeRequestPanel.hide();
		
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
		return baseContainer;
	}
	
	@Override
	public VerticalPanel getRequestsPanel() {
		return requestsPanel;
	}
	
	@Override
	public ListBox getScheduleSelectBox() {
		return viewSelect;
	}

	@Override
	public ListBox getTermSelectBox() {
		return termSelect;
	}

	@Override
	public ListBox getCourseInstrutorSelectBox() {
		return instructorSelect;
	}
	
	@Override
	public ListBox getStartTimeSelectBox() {
		return startTimeSelect;
	}
	
	@Override
	public ListBox getEndTimeSelectBox() {
		return endTimeSelect;
	}

	@Override
	public TabPanel getTabPanel() {
		return schedulePanel;
	}
	
	@Override
	public FlexTable getFlexCalendar() {
		return flexCalendar;
	}
}