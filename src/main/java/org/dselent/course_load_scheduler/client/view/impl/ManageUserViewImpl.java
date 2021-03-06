package org.dselent.course_load_scheduler.client.view.impl;

import org.dselent.course_load_scheduler.client.presenter.ManageUserPresenter;
import org.dselent.course_load_scheduler.client.view.ManageUserView;

import com.google.gwt.core.client.GWT;
import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Button;
import com.google.gwt.user.client.ui.HasWidgets;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.HTMLPanel;
import com.google.gwt.user.client.ui.Grid;

public class ManageUserViewImpl extends BaseViewImpl<ManageUserPresenter> implements ManageUserView {
	private static ManageUserViewImplUiBinder uiBinder = GWT.create(ManageUserViewImplUiBinder.class);
	
	@UiField Button homeButton;
    @UiField Button scheduleButton;
    @UiField Button coursesButton;
    @UiField Button accountButton;
    @UiField HTMLPanel rootPanel;
    @UiField Grid usersGrid;
    @UiField Button promoteButton;
    
    @UiHandler("homeButton")
    void onHomeButtonClick(ClickEvent event) {
        presenter.loadViewHomePage();
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
    
    interface ManageUserViewImplUiBinder extends UiBinder<Widget, ManageUserViewImpl> {
	}

	public ManageUserViewImpl() {
		initWidget(uiBinder.createAndBindUi(this));
	}

	@Override
	public Widget getWidgetContainer() {
		return this;
	}
	
	@Override
	public void setPresenter(ManageUserPresenter presenter) {
		this.presenter = presenter;
	}

	@Override
	public HasWidgets getViewRootPanel() {
		return rootPanel;
	}
	
	@Override
	public Grid getUsersGrid()
	{
		return usersGrid;
	}
	
	@UiHandler("promoteButton")
	void onPromoteButtonClick(ClickEvent event) {
		presenter.promoteUser();
	}
}
