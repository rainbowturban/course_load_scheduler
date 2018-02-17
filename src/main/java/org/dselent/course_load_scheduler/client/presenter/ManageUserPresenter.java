package org.dselent.course_load_scheduler.client.presenter;

import java.util.List;

import org.dselent.course_load_scheduler.client.model.Frequency;
import org.dselent.course_load_scheduler.client.model.Model;
import org.dselent.course_load_scheduler.client.view.BaseView;

import com.google.gwt.user.client.ui.HasWidgets;

public interface ManageUserPresenter extends BasePresenter {
	IndexPresenter getParentPresenter();
	void setParentPresenter(IndexPresenter parentPresenter);
	void manageUser();
}
