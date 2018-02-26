package org.dselent.course_load_scheduler.client.view;

import org.dselent.course_load_scheduler.client.presenter.AdminCalendarPresenter;

import com.google.gwt.user.client.ui.ListBox;
import com.google.gwt.user.client.ui.VerticalPanel;

public interface AdminCalendarView extends BaseView<AdminCalendarPresenter> {
	
	VerticalPanel getRequestsPanel();
	ListBox getScheduleSelectBox();
	ListBox getTermSelectBox();
	ListBox getCourseInstrutorSelectBox();
	ListBox getStartTimeSelectBox();
	ListBox getEndTimeSelectBox();
}